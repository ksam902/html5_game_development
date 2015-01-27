var Snake = function(stage, assetManager, maxSpeed) {
    // initialization
    var killed = false;
    var slowDownDelay = 5000;
    var slowDownTimer = null;
    // to keep track of scope
    var myScope = this;

    // construct custom event objects
    var eventSnakeKilled = new createjs.Event("onSnakeKilled", true);
    var eventSnakeSpeedChange = new createjs.Event("onSnakeSpeedChange", true);

    // grab clip for Snake and add to stage canvas
    var clip = assetManager.getSprite("assets");
    var clipMover = new Mover(clip, stage);
    stage.addChild(clip);

    // ---------------------------------------------- get/set methods
    this.getKilled = function() {
        return killed;
    };

    this.getClip = function() {
        return clip;
    };
    
    this.getSpeed = function() {
        return clipMover.getSpeed();        
    };

    // ---------------------------------------------- public methods
    this.setupMe = function() {
        killed = false;
        // start the timer
        slowDownTimer = window.setInterval(onSlowMe, slowDownDelay);
    };
	
    this.startMe = function(direction) {
        clipMover.setDirection(direction);
        if (!clipMover.getMoving()) {
            clip.gotoAndPlay("alive");
            clipMover.startMe();
        }
    };	

    this.stopMe = function() {
        // stop animation and movement
        clip.stop();
        clipMover.stopMe();
    };

    this.resetMe = function() {
        clip.gotoAndStop("snakeAlive");
        clip.x = 280;
        clip.y = 300;
        clipMover.setSpeed(maxSpeed);
    };

    this.energizeMe = function() {
        // snake can only gain more energy if less than maximum
        if (clipMover.getSpeed() < maxSpeed) {
            clipMover.setSpeed(clipMover.getSpeed() + 1);
            clip.dispatchEvent(eventSnakeSpeedChange);
        }
        
        console.log("Snake energized: " + clipMover.getSpeed());
        
        // reset slowdown timer so the interval starts again
        window.clearInterval(slowDownTimer);
        slowDownTimer = window.setInterval(onSlowMe, slowDownDelay);
    };

    this.killMe = function() {
        if (!killed) {
            killed = true;
            clipMover.stopMe();
            // kill slowdown timer
            window.clearInterval(slowDownTimer);
            clip.gotoAndPlay("snakeDead");
            clip.addEventListener("animationend", onKilled);
        }
    };

    // ----------------------------------------------- event handlers
    function onSlowMe() {
        // adjust speed of MovingObject
        clipMover.setSpeed(clipMover.getSpeed() - 1);
        clip.dispatchEvent(eventSnakeSpeedChange);
        
        console.log("Snake slowed: " + clipMover.getSpeed());
        
        // check if snake is dead
        if (clipMover.getSpeed() <= 0) {
            myScope.killMe();
        }
    }

    function onKilled(e) {
        // cleanup
        clip.stop();
        clip.removeEventListener("animationend", onKilled);
        // dispatch event that snake has been killed!
        clip.dispatchEvent(eventSnakeKilled);
    }
};
