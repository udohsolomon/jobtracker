const filterDesign = jobs => {
    const designTerms = [
        'designer',
        'design',
    ];
    const filtered = jobs.filter(job => {
        return designTerms.find(term => job.title.toLowerCase().indexOf(term) > -1) !== undefined;
    });
    return filtered;
};

module.exports = filterDesign;
