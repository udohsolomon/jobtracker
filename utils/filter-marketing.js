const filterMarketing = jobs => {
    const marketingTerms = [
        'marketing',
        'marketer',
        'demand generation',
    ];
    const filtered = jobs.filter(job => {
        return marketingTerms.find(term => job.title.toLowerCase().indexOf(term) > -1) !== undefined;
    });
    return filtered;
};

module.exports = filterMarketing;
