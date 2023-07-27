// stopWatch Exercise

function stopWatch() {
    let startTime, running, endTime, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('stop watch has already started');

        running = true;

        startTime = new Date();
        
    }

    this.stop = function () {
        if (!running)
            throw new Error('stop watch is not running');

        running = false;

        endTime = new Date();

        let seconds = endTime.getTime() - startTime.getTime();
        duration += seconds;
    };

    this.reset = function () {
        running = false;
        duration = 0;
        startTime = null;
        endTime = null
    };

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}

let myObj = new stopWatch();
myObj.start();

