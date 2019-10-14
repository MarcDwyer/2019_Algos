function Timer(fn, t) {
    this.interval = setInterval(fn, t);

    this.stop = function() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!this.interval) {
            this.stop();
            this.interval = setInterval(fn, t);
        }
        return this;
    }

    // start with new interval, stop current interval
    this.reset = function(newT) {
        t = newT;
        return this.stop().start();
    }
}

var timer = new Timer(function() {
    console.log('yeet')
}, 5000);


// switch interval to 10 seconds
timer.reset(10000);

// stop the timer
// timer.stop();

setTimeout(() => {
    console.log('timeout')
}, 35000)

// start the 