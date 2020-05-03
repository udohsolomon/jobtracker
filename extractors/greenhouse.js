const cheerio = require('cheerio');

const extractGreenhouse = html => {
  const $ = cheerio.load(html);
  const vacancyRows = $('.opening');
  const vacancies = [];
  vacancyRows.each((i, el) => {
    let location = $(el).children('.location').text().trim();
    let title = $(el).children('a').first().text().trim();
    let link = $(el).children('a').first().attr('href');
    const isBraveLink = link.indexOf('brave.com/jobs/') > -1;
    const isStackOverflowLink = link.indexOf('stackoverflow.com/company/work-here') > -1;
    if (isBraveLink) {
      link = link.replace(/\/jobs\//g, '/careers/');
    }
    location = location === '' ? (title.toLowerCase().indexOf('remote') > -1 ? 'Remote' : 'Location not specified') : location;
    const hasRelativeLink = isStackOverflowLink === false && link.indexOf('https://') === -1;
    link = hasRelativeLink ? `https://boards.greenhouse.io${link}` : link;
    vacancies.push({ title, link, location });
  });
  return vacancies;
};

module.exports = extractGreenhouse;
