const cheerio = require('cheerio');

const extractAutomattic = html => {
    const $ = cheerio.load(html);
    const vacancyRows = $('.position-listings-list li');
    const vacancies = [];
    vacancyRows.each((i, el) => {
        let title = $(el).find('.position-listing-title').text().trim();
        let link = $(el).find('a.position-listing').first().attr('href');
        let location = 'Remote';
        vacancies.push({ title, link, location });
    });
    return vacancies
};

module.exports = extractAutomattic;
