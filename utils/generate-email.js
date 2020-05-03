const filterRemote = require('./filter-remote');
const filterEngineering = require('./filter-engineering');
const filterMarketing = require('./filter-marketing');
const filterSupport = require('./filter-support');
const filterDesign = require('./filter-design');

const generateEmail = (companies, subscriber) => {
    let html = '';
    let jobCount = 0;
    for (const co in companies) {
        let subscribedJobs = [];
        const allJobs = companies[co].newOpenings;
        const baseJobs = subscriber.filterRemote ? filterRemote(allJobs) : allJobs;

        if (subscriber.includeAllJobs === true || subscriber.includeAllJobs === undefined) {
            subscribedJobs = baseJobs;
        } else {
            const engineeringJobs = filterEngineering(baseJobs);
            const marketingJobs = filterMarketing(baseJobs);
            const supportJobs = filterSupport(baseJobs);
            const designJobs = filterDesign(baseJobs);
            const userKeywordJobs = filterByUserKeywords(baseJobs, subscriber.keywords);

            if (subscriber.filterEngineering !== false) {
                subscribedJobs = [
                    ...subscribedJobs,
                    ...engineeringJobs,
                ];
            }

            if (subscriber.filterMarketing !== false) {
                subscribedJobs = [
                    ...subscribedJobs,
                    ...marketingJobs,
                ];
            }

            if (subscriber.filterSupport !== false) {
                subscribedJobs = [
                    ...subscribedJobs,
                    ...supportJobs,
                ];
            }

            if (subscriber.filterDesign !== false) {
                subscribedJobs = [
                    ...subscribedJobs,
                    ...designJobs,
                ];
            }

            if (subscriber.filterUserKeywords !== false) {
                subscribedJobs = [
                    ...subscribedJobs,
                    ...userKeywordJobs,
                ];
            }
        }

        let jobContentHtml = '';
        if (subscribedJobs.length > 0) {
            const jobsContent = () => {
                for (const j in subscribedJobs) {
                    const location = subscribedJobs[j].location.toLowerCase();
                    const isRemote = location.match(/(remote|distributed|anywhere|global)/) !== null;
                    ++jobCount;
                    jobContentHtml += `
                        <h3 class="job-title">
                            <a href="${subscribedJobs[j].link}">${subscribedJobs[j].title}</a>
                        </h3>
                        <p class="${isRemote ? 'remote' : 'not-remote'}">${subscribedJobs[j].location}</p>
                    `;
                }
                return jobContentHtml;
            };
            const newRow = `<h1 class="company-name">${companies[co].name}<h1>${jobsContent()}`;
                
            html += newRow;
        }
    }
    return { html, jobCount };
};

module.exports = generateEmail;
