var generate = function generate(orgUnitId){
    var toReturn = {};
    
    toReturn[orgUnitId] = {
        "Quiz": {}
    }
    
    toReturn[orgUnitId]["Quiz"][startDate = new Date().setUTCHours(5,0,0,0)] = 0;
    
    return toReturn;
};

module.exports = {
    'generate': generate
};