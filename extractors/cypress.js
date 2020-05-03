const cheerio = require('cheerio');

const extractCypress = html => {
    const $ = cheerio.load(html);
    const vacancyRows = $('.panel');
    const vacancies = [];
    vacancyRows.each((i, el) => {
        let title = $(el).find('button.panel-heading h4').text().trim();
        let link = $(el).find('.panel-body p').last().find('a').attr('href');
        let location = $(el).find('button.panel-heading span[itemprop="jobLocation"]').text().trim();
        vacancies.push({ title, link, location });
    });
    vacancies.sort((a, b) => {
        const location = a.location.toLowerCase();
        return location.indexOf('remote') > -1 ? -1 : 1;
    });
    return vacancies
};

module.exports = extractCypress;
