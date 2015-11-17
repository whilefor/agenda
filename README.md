# Agenda3

Agenda3 is a light-weight job scheduling library for Node.js.

Forked from [agenda](https://github.com/rschmukler/agenda), and made some changes for it. Show the difference below.


>###Installation

Install via NPM

	npm install agenda3

>###mongodb driver

Update use [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) instead mongoose.

Update all the mongoose api to node-mongodb-native api.

>###every(interval, name, data, startTime, endTime)

Add `startTime` and `endTime` for every function, I think it is very useful functionality.

Please kindly note `data` is not an optional argument that will be passed to the processing function under job.attrs.data.

`startTime` and `endTime` is a date string like `2015-10-15 19:23:00`, it will pass to new Date() to generate a date object.

>###database field changes

Add `delete` field for the job, will not run the job when `delete` field exsists.

>###comment 

comment the below lines for some reasons.

```js
        // if (job.attrs.nextRunAt && job.attrs.nextRunAt < self._nextScanAt) {
        //   processJobs.call(self, job);
        // }
```

##Acknowledgements
Thanks for the author Ryan Schmukler ryan@slingingcode.com, and my leader Asins.

If any question and bugs, please let me know, or open issue on github.





