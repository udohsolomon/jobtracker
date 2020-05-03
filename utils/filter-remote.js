const filterRemote = jobs => {
    const remoteTerms = [
        'remote',
        'anywhere',
        'distributed',
        'global',
    ];
    const filtered = jobs.filter(job => {
        const titleHasRemote = remoteTerms.find(term => job.title.toLowerCase().indexOf(term) > -1) !== undefined;
        const locationHasRemote = remoteTerms.find(term => job.location.toLowerCase().indexOf(term) > -1) !== undefined;
        return titleHasRemote || locationHasRemote;
    });
    return filtered;
};

module.exports = filterRemote;
