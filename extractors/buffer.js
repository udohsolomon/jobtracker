const cheerio = require('cheerio');

const extractBuffer = html => {
    const $ = cheerio.load(html);
    let jobListJs = $('#job-list job-list')[0].attribs['v-bind']
    let vacancies;
    if (jobListJs) {
        jobListJs = JSON.parse(jobListJs);
        vacancies = jobListJs.content.vacancies;
    }

    const vacanyList = [];
    for (const vac in vacancies) {
        vacanyList.push({
            title: vacancies[vac].title,
            link: vacancies[vac].url,
            location: vacancies[vac].location_id === 4334 ? 'Remote' : 'Likely Remote',
        });
    }
    return vacanyList;
};

module.exports = extractBuffer;
