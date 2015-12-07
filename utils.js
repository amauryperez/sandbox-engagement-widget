var parseDates = function(startDate, endDate){
    var startTime = startDate === undefined ? 
            Math.max(0, new Date().getTime() - toolAccessConsts.MS_PER_DAY * toolAccessConsts.MAX_RESULTS) : 
            parseInt(startDate),
            
        endTime = endDate === undefined ? 
            new Date().getTime() : 
            parseInt(endDate);
            
    return {
        "startTime":startTime, 
        "endTime":endTime
    };
};

module.exports = {
    'parseDates': parseDates
};