const cheerio = require('cheerio');

const extractDoist = html => {
    const $ = cheerio.load(html);
    const vacancyRows = $('.dst-job-openings__list .dst-job-openings__item');
    const vacancies = [];
    vacancyRows.each((i, el) => {
        let title = $(el).find('.dst-job-openings__title').text().trim();
        let link = $(el).find('a.dst-job-openings__trigger').first().attr('href');
        link = `https://doist.com/jobs/${link}`;
        let location = 'Remote';
        vacancies.push({ title, link, location });
    });
    return vacancies
};

module.exports = extractDoist;
