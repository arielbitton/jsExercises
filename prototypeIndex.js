// stopWatch as prototypes - Exercise 2

function StopWatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'startTime', {
        get: function () { return startTime; },
        set: function(value) { return startTime =  value; }
    });
    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime; },
        set: function(value) { return endTime =  value; }
    });
    Object.defineProperty(this, 'running', {
        get: function () { return running; },
        set: function(value) { return running =  value; }
    });
    Object.defineProperty(this, 'duration', {
        get: function () { return duration; },
        set: function(value) { return duration =  value; }
    });

}

StopWatch.prototype.start = function() {
    if (this.running)
        throw new Error('stop watch has already started');

    this.running = true;

    this.startTime = new Date();
}


StopWatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('stop watch is not running');

    this.running = false;

    this.endTime = new Date();

    let seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
};

StopWatch.prototype.reset = function () {
    this.running = false;
    this.duration = 0;
    this.startTime = null;
    this.endTime = null
};

let myObj = new StopWatch();


