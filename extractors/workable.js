const cheerio = require('cheerio');

const extractWorkable = (data, company) => {
    const companyName = company[0].name.replace(/jobs/g, '');
    data = data.results;
    const vacancies = [];
    for (const job in data) {
        const location = data[job].remote ? `Remote${Boolean(data[job].location.city) ? `- ${data[job].location.city}, ${data[job].location.region}` : ''}` : `${data[job].location.city}, ${data[job].location.region}`;
        vacancies.push({
            title: data[job].title,
            link: `https://apply.workable.com/${companyName}/j/${data[job].shortcode}/`,
            location,
        });
    }
    return vacancies;
};

module.exports = extractWorkable;
