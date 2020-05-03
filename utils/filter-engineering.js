const filterEngineering = jobs => {
    const engineeringTerms = [
        'developer',
        'engineer',
        'engineering',
        'data scientist',
        'architect',
    ];
    const marketingTerms = [
        'marketing',
        'marketer',
        'demand generation',
    ];
    const filtered = jobs.filter(job => {
        const hasMarketingTerm = marketingTerms.find(term => job.title.toLowerCase().indexOf(term) > -1) !== undefined;
        const hasEngineeringTerm = engineeringTerms.find(term => job.title.toLowerCase().indexOf(term) > -1) !== undefined;
        return hasEngineeringTerm && !hasMarketingTerm;
    });
    return filtered;
};

module.exports = filterEngineering;
