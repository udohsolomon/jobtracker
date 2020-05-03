const cheerio = require('cheerio');

const extractHotjar = html => {
    const $ = cheerio.load(html);
    const vacancyRows = $('.jobs .list .job');
    const vacancies = [];
    vacancyRows.each((i, el) => {
        // Extract information from each row of the jobs table
        let title = $(el).find('h5.job-title a').text().trim();
        let link = $(el).find('h5.job-title a').attr('href');
        link = `https://careers.hotjar.com${link}`;
        let location = $(el).find('.job-location').text().trim();
        vacancies.push({ title, link, location });
    });
    return vacancies
};

module.exports = extractHotjar;
