const cheerio = require('cheerio');

const extractLever = html => {
    const $ = cheerio.load(html);
    const vacancyRows = $('.posting');
    const vacancies = [];
    vacancyRows.each((i, el) => {
        let location = $(el).find('.posting-categories > .sort-by-location').text().trim();
        // Extract information from each row of the jobs table
        let title = $(el).find('h5').text().trim();
        let link = $(el).find('a.posting-title').attr('href');
        location = location === '' ? (title.toLowerCase().indexOf('remote') > -1 ? 'Remote' : 'Location not specified') : location;
        vacancies.push({ title, link, location });
    });
    return vacancies
};

module.exports = extractLever;
