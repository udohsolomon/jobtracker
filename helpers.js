const cheerio = require('cheerio');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const request = require('axios');
const { differenceWith, isEqual } = require('lodash');
const Hashids = require('hashids/cjs');
const hashids = new Hashids('507f1f77bcf86cd799439011abcda09015');
const postmark = require('postmark');
const postmarkClient = new postmark.Client("58f31d41-868f-443c-8735-b220789ccb72");
const makeCustomFetch = require('./make-custom-fetch');
const generateEmail = require('./utils/generate-email');

// Data extractors
const extractBuffer = require('./extractors/buffer');
const extractLever = require('./extractors/lever');
const extractGreenhouse = require('./extractors/greenhouse');
const extractCypress = require('./extractors/cypress');
const extractAutomattic = require('./extractors/automattic');
const extractZapier = require('./extractors/zapier');
const extractWorkable = require('./extractors/workable');
const extractHotjar = require('./extractors/hotjar');
const extractDuckDuckGo = require('./extractors/duckduckgo');
const extractDoist = require('./extractors/doist');

const MONGO_URI = 'mongodb+srv://jobtracker:<YOUR_PASSWORD>@jobtracker-yinib.mongodb.net/test?retryWrites=true&w=majority'; 
// const MONGO_URI = 'mongodb://127.0.0.1:27017/jobtracker';

async function scrapeJobs(url, companyName, extractor = null, isTesting = false, customFetch = false) {
  let conn = null;

  if (conn == null) {
      try {
          conn = await mongoose.connect(MONGO_URI, {
              // Buffering means mongoose will queue up operations if it gets
              // disconnected from MongoDB and send them when it reconnects.
              // With serverless, better to fail fast if not connected.
              bufferCommands: false, // Disable mongoose buffering
              bufferMaxEntries: 0, // and MongoDB driver buffering
              useNewUrlParser: true,
              useUnifiedTopology: true,
          });
      } catch(err) {
          return {
              statusCode: 500,
              body: JSON.stringify(err),
          };
      }
  }
  let db;
  try {
      companies = conn.model('Companies');
      db = conn.model('Subscribers');
  } catch (e) {
      companies = conn.model('Companies', new Schema({
          name: { type: String, required: true, index: true },
          openings: { type: Array },
          newOpenings: { type: Array },
          subscribers: [{ type: Schema.Types.ObjectId, ref: 'Subscribers' }],
      }, {
          timestamps: true,
      }));
      db = conn.model('Subscribers', new Schema({
          email: { type: String, required: true, index: { unique: true } },
          subscriptions: [{ type: String }],
          companies: [{ type: Schema.Types.ObjectId, ref: 'Companies' }],
          filterRemote: { type: Boolean },
          filterEngineering: { type: Boolean },
          filterMarketing: { type: Boolean },
          filterSupport: { type: Boolean },
          filterDesign: { type: Boolean },
          filterUserKeywords: { type: Boolean },
          userKeywords: [{ type: Array }],
          includeAllJobs: { type: Boolean },
      }, {
          timestamps: true,
      }));
  }

  const company = await companies.find({ name: companyName }).populate('subscribers');
  const subscribers = company[0].subscribers;
  const fetchToUse = customFetch === false ? request : makeCustomFetch;

  let newJobs, allJobs;
  const yesterdaysJobs = company[0].openings;
  const response = await fetchToUse(url).then(({ data }) => data);

  switch(extractor) {
    case 'greenhouse':
      allJobs = extractGreenhouse(response);
      break;
    case 'lever':
      allJobs = extractLever(response);
      break;
    case 'buffer':
      allJobs = extractBuffer(response);
      break;
    case 'cypress':
      allJobs = extractCypress(response);
      break;
    case 'automattic':
      allJobs = extractAutomattic(response);
      break;
    case 'zapier':
      allJobs = extractZapier(response);
      break;
    case 'workable':
      allJobs = extractWorkable(response, company);
      break;
    case 'hotjar':
      allJobs = extractHotjar(response);
      break;
    case 'duckduckgo':
      allJobs = extractDuckDuckGo(response);
      break;
    case 'doist':
      allJobs = extractDoist(response);
      break;
    default:
      return { error: 'No extractor defined'};
  }

  newJobs = differenceWith(allJobs, yesterdaysJobs, isEqual);
  company[0].openings = allJobs;
  company[0].newOpenings = newJobs;
  const saved = await company[0].save();
  return newJobs;
}

const generateAndSend = async subscriber => {
  return new Promise(async resolve => {
    const cos = subscriber.companies;
    const content = await generateEmail(cos, subscriber);
    if (content.jobCount > 0) {
      const userHash = hashids.encodeHex(subscriber._id.toString());
      const html = await email(content.html, userHash);
      const emailResults = await postmarkClient.sendEmail({
          "From": "YOUR_EMAIL_ADDRESS",
          "To": subscriber.email,
          "Subject": `${content.jobCount} new job${content.jobCount === 1 ? '' : 's'}`,
          "HtmlBody": html,
      }, function(err, results) {
          resolve();
      });
    } else {
      resolve();
    }
  });
}

async function send(isTesting = true) {
  let conn = null;

  if (conn == null) {
      try {
          conn = await mongoose.connect(MONGO_URI, {
              // Buffering means mongoose will queue up operations if it gets
              // disconnected from MongoDB and send them when it reconnects.
              // With serverless, better to fail fast if not connected.
              bufferCommands: false, // Disable mongoose buffering
              bufferMaxEntries: 0, // and MongoDB driver buffering
              useNewUrlParser: true,
              useUnifiedTopology: true,
          });
      } catch(err) {
          return {
              statusCode: 500,
              body: JSON.stringify(err),
          };
      }
  }
  let db;
  try {
      companies = conn.model('Companies');
      db = conn.model('Subscribers');
  } catch (e) {
      companies = conn.model('Companies', new Schema({
          name: { type: String, required: true, index: true },
          openings: { type: Array },
          newOpenings: { type: Array },
          subscribers: [{ type: Schema.Types.ObjectId, ref: 'Subscribers' }],
      }, {
          timestamps: true,
      }));
      db = conn.model('Subscribers', new Schema({
          email: { type: String, required: true, index: { unique: true } },
          subscriptions: [{ type: String }],
          companies: [{ type: Schema.Types.ObjectId, ref: 'Companies' }],
          filterRemote: { type: Boolean },
          filterEngineering: { type: Boolean },
          filterMarketing: { type: Boolean },
          filterSupport: { type: Boolean },
          filterDesign: { type: Boolean },
          filterUserKeywords: { type: Boolean },
          userKeywords: [{ type: Array }],
          includeAllJobs: { type: Boolean },
      }, {
          timestamps: true,
      }));
  }
  const subscribers = await db.find().populate('companies', '-subscribers');
  const actions = subscribers.map(generateAndSend);
  const results = await Promise.all(actions);
  return results;
}


module.exports = { scrapeJobs, send };
