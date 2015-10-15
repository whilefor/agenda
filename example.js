var Agenda = require('./index.js');
var agenda = new Agenda({
    db: {
        address: 'localhost:27017/agendaTest'
    }
});
//ssh
//var Client = require('ssh2').Client;
var MongoClient = require('mongodb').MongoClient;


var job1 = {
    jobName: 'job111',
    jobURL:'http://www.baidu.com',
    jobStartTime: '2015-10-16 04:59',
    jobEndTime: '2016-10-15 23:26',
    jobTimeInterval: '10',
    jobServers: null
}

var job2 = {
    jobName: 'job222',
    jobURL:'http://www.baidu.com',
    jobStartTime: '2015-10-15 19:23',
    jobEndTime: '2016-10-15 19:24',
    jobTimeInterval: '5',
    jobServers: null
}

MongoClient.connect('mongodb://localhost:27017/agendaTest', function(err, db) {
    console.log('mongodb collected--------------');
    var jobsLogCollection = db.collection('jobsData');
    agenda.define(job1.jobName, function(_job, done) {
        console.log(job1.jobName, ' job running: ', new Date());
        runJob(job1, jobsLogCollection);
        done();
    });
    // var job = agenda.create(job1.jobName, job1);
    // job.repeatEvery(job1.jobTimeInterval + ' seconds');
    // job.save(); 
    // agenda.start();
    


    agenda.every(job1.jobTimeInterval + ' seconds', job1.jobName, job1, job1.jobStartTime, job1.jobEndTime);
    agenda.start();
    

    // agenda.define(job2.jobName, function(_job, done) {
    //     console.log(job2.jobName, ' job running: ', new Date());

    //     runJob(job2, jobsLogCollection);
    //     done();
    // });
    // agenda.every(job2.jobTimeInterval + ' seconds', job2.jobName, job2, job2.jobStartTime, job2.jobEndTime);
    // agenda.start();
});



function runJob(job, jobsLogCollection) {

}
