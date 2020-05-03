const filterSupport = jobs => {
    const engineeringTerms = [
        'developer',
        'engineer',
        'engineering',
        'data scientist',
    ];
    const supportTerms = [
        'support',
        'customer care',
        'customer service',
        'customer support',
        'customer success',
        'customer advocate',
        'customer experience',
        'customer specialist',
    ];
    const filtered = jobs.filter(job => {
        const hasSupportTerm = supportTerms.find(term => job.title.toLowerCase().indexOf(term) > -1) !== undefined;
        const hasEngineeringTerm = engineeringTerms.find(term => job.title.toLowerCase().indexOf(term) > -1) !== undefined;
        return hasSupportTerm && !hasEngineeringTerm;
    });
    return filtered;
};

module.exports = filterSupport;
