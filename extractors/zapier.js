const cheerio = require('cheerio');

const extractZapier = html => {
    const $ = cheerio.load(html);
    const vacancyRows = $('.jobs-list__item');
    const vacancies = [];
    vacancyRows.each((i, el) => {
        let title = $(el).find('a').text().trim();
        let link = $(el).find('a').attr('href');
        link = `https://zapier.com${link}`;
        let location = 'Remote';
        vacancies.push({ title, link, location });
    });
    const openings = vacancies.filter(item => item.title !== '');
    return openings
};

module.exports = extractZapier;
