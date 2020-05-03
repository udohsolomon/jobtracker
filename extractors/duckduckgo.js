const cheerio = require('cheerio');

const extractDuckDuckGo = (json = []) => {
    const vacancies = json.map(item => {
        return {
            title: item.title,
            link: 'https://duckduckgo.com/hiring/#open',
            location: item.city === '' ? 'Remote' : item.city,
        };
    });
    return vacancies;
};

module.exports = extractDuckDuckGo;
