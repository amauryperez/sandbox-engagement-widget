var generateCourseAccessData = require('course-access-data.js').generate,
    generateQuizData = require('quizzing-data.js').generate,
    toolAccessConsts = require('course-access-data.js').consts
    utils = require('utils.js');

/**
 *  /d2l/api/adp/unstable/aggregatedEvents
 */

//Course Access aggregation
Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents/{id}/{orgId}/Course Offering','GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateCourseAccessData(req.params.orgId, undefined, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//Quizzing aggregation
Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents/{aggregationId}/{orgUnitId}/Quiz','GET', function(req, res) {
    var result = generateQuizData(req.params.orgUnitId);
    
    res.type('application/json');
    res.status(200);
    res.json(result);
});
