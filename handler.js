const mongoose = require('mongoose');
const { scrapeJobs } = require('./helpers');
const { send } = require('./helpers');

module.exports.sendToSubscribers = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const isTesting = event.testing === 'true';
  send(isTesting).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { message: resp });
    }
  });
};

module.exports.getworkosjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://jobs.lever.co/workos', // jobs URL
    'WorkOS', // company name
    'lever', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getaptiblejobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://jobs.lever.co/aptible', // jobs URL
    'Aptible', // company name
    'lever', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getdoistjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://doist.com/jobs/', // jobs URL
    'Doist', // company name
    'doist', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getduckduckgojobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://duckduckgo.com/jobs.js', // jobs URL
    'DuckDuckGo', // company name
    'duckduckgo', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.gethotjarjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://careers.hotjar.com/', // jobs URL
    'Hotjar', // company name
    'hotjar', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getconvertkitjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://apply.workable.com/convertkit/?lng=en', // jobs URL
    'ConvertKit', // company name
    'workable', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
    true, // use custom fetch method
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getwildbitjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://apply.workable.com/wildbit/', // jobs URL
    'Wildbit', // company name
    'workable', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
    true, // use custom fetch method
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getpodiajobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://apply.workable.com/podia/?lng=en', // jobs URL
    'Podia', // company name
    'workable', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
    true, // use custom fetch method
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getzapierjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://zapier.com/jobs/', // jobs URL
    'Zapier', // company name
    'zapier', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getautomatticjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://automattic.com/work-with-us/#open-positions', // jobs URL
    'Automattic', // company name
    'automattic', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getairbasejobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://jobs.lever.co/airbase', // jobs URL
    'Airbase', // company name
    'lever', // extractor to use `null` for either Greenhouse or Lever
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getcypressjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://www.cypress.io/jobs',
    'Cypress',
    'cypress',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getbufferjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://journey.buffer.com/#vacancies',
    'Buffer',
    'buffer',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getarticulatejobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://jobs.lever.co/articulate/',
    'Articulate',
    'lever',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getfastlyjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=fastly',
    'Fastly',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getstackoverflowjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=stackexchange',
    'Stack Overflow',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getkhanacademyjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=khanacademy',
    'Khan Academy',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.gethandshakejobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://boards.greenhouse.io/joinhandshake',
    'Handshake',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getwikimediajobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://boards.greenhouse.io/wikimedia',
    'Wikimedia',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getwebflowjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=webflow',
    'Webflow',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.gethashicorpjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=hashicorp',
    'HashiCorp',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getmondayvcjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://boards.greenhouse.io/mondayvc',
    'Monday.vc',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.gettaxjarjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=taxjar',
    'TaxJar',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.gettwiliojobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  scrapeJobs(
    'https://boards.greenhouse.io/twilio',
    'Twilio',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getairbnbjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=airbnb',
    'Airbnb',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getheapjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=heap',
    'Heap',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getbravejobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=brave',
    'Brave',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getremindjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=remind',
    'Remind',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getthornjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/embed/job_board?for=thorn',
    'Thorn',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getnetlifyjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/netlify',
    'Netlify',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getgithubjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/github',
    'Github',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getmodeanalyticsjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/modeanalytics',
    'Mode Analytics',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getgitlabjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/gitlab',
    'Gitlab',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getauth0jobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://jobs.lever.co/auth0',
    'Auth0',
    'lever',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getmattermostjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://jobs.lever.co/mattermost',
    'Mattermost',
    'lever',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getinvisionjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/invision',
    'InVision',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getloomjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://jobs.lever.co/useloom',
    'Loom',
    'lever',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};

module.exports.getcbinsightsjobs = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jobs = scrapeJobs(
    'https://boards.greenhouse.io/cbinsights',
    'CB Insights',
    'greenhouse',
    event.testing === 'true',
  ).then(resp => {
    mongoose.disconnect();
    if (resp.error) {
      return callback(resp.error);
    } else {
      return callback(null, { jobs: resp });
    }
  });
};
