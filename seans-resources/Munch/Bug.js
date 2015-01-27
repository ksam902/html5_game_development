var Bug = function(stage, assetManager, snake) {
    // initialization
    var snakeClip = snake.getClip();
    
    // construct custom event objects
    var eventBugEaten = new createjs.Event("onBugEaten", true);

    // construct clip for this object and add to stage
    var clip = assetManager.getSprite("assets");
    clip.gotoAndStop("bugAlive");
    var clipMover = new MoverDiagonal(clip, stage);
    
    // --------------------------------------------- private methods
    function randomMe(low, high) {
        return Math.round(Math.random() * (high - low)) + low;
    }

    // ---------------------------------------------- public methods
    this.setupMe = function() {
        // random selection of speed of bug
        clipMover.setSpeed(randomMe(2,6));

        // get bounds of sprite so we can determine width / height
        var dimensions = clip.getBounds();

        // bug starts on left or right of stage?
        if (randomMe(1, 2) == 1) {
            // move right
            clip.x = -dimensions.width;
            // randomly select starting y location of mower
            clip.y = randomMe(50, stage.canvas.height - 50);
            clip.rotation = randomMe(45, -45);
        } else {
            // move left
            clip.x = stage.canvas.width;
            clip.y = randomMe(50, stage.canvas.height - 50);
            clip.rotation = randomMe(135, 225);
        }

        // fire startMe again to take the new rotation of the bug
        clip.gotoAndPlay("bugAlive");
        clipMover.startMe();

        // setup listener to listen for ticker to monitor collisions
        createjs.Ticker.addEventListener("tick", onCollisionTest);
		
        // add bugs so they are below the snake (snake)
        stage.addChildAt(clip, stage.getChildIndex(snakeClip));		

        // listen for when my bug goes off the screen and kill it if it does
        clip.addEventListener("onMovingDiagonalOffStage", onKillMe);
    };

    // ----------------------------------------------- event handlers
    function onCollisionTest(e) {
        // only do collision test on every other tick to save on processing
        if ((createjs.Ticker.getTicks() % 2 === 0) && (!snake.getKilled())) {

            /*
            // HITTEST APPROACH
            var point = clip.globalToLocal(snakeClip.x, snakeClip.y);
            if (clip.hitTest(point.x, point.y)) {
                console.log("collision!");
            }
            */

            // LESSON COLLISION DETECTION
            // radius collision detection
            // Calculate difference between centres
            var a = snakeClip.x - clip.x;
            var b = snakeClip.y - clip.y;
            // Get distance with Pythagoras
            var c = Math.sqrt((a * a) + (b * b));
            // bug has a radius of 20
            // snake has a radius of 75
            // force the radius of the circle on the snake to only be 5
            // sum of 5 + 20 = 25
            if (c <= 25) {
                // collision detection with snake
                clip.dispatchEvent(eventBugEaten);
                onKillMe();
            }

            /*
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CHALLENGE SOLUTION
            // radius collision detection
            // Calculate difference between centres
            var distX = 0;
            var distY = 0;
            var direction = snakeClip.direction;
            // transform circle depending on direction of snake so it is always over the head
            if (direction == MoverDirection.LEFT) {
                distX = snakeClip.x - 30 - clip.x;
                distY = snakeClip.y - clip.y;
            } else if (direction == MoverDirection.RIGHT) {
                distX = snakeClip.x + 30 - clip.x;
                distY = snakeClip.y - clip.y;
            } else if (direction == MoverDirection.UP) {
                distX = snakeClip.x - clip.x;
                distY = snakeClip.y - 30 - clip.y;
            } else {
                distX = snakeClip.x - clip.x;
                distY = snakeClip.y + 30 - clip.y;
            }

            // Get distance with Pythagoras
            var dist = Math.sqrt((distX * distX) + (distY * distY));
            // bug has a radius of 19
            // snake has a radius of 75
            // force the radius of the circle on the snake to only be 5
            // sum of 5 + 19 = 24
            if (dist <= 24) {
                // collision detection with snake
                clip.dispatchEvent(eventBugEaten);
                onKillMe();
            }
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            */
        }
    }

    function onKillMe(e) {
        createjs.Ticker.removeEventListener("tick", onCollisionTest);
        clipMover.stopMe();
        // play death sequence of bug
        clip.gotoAndPlay("bugDead");
        clip.addEventListener("animationend", onKilled);
    }

    function onKilled(e) {
        // cleanup event listeners
        clip.removeEventListener("animationend", onKilled);
        // remove displayobject
        stage.removeChild(clip);
        
        console.log("bug killed");
    }
};
