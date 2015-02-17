//Class for Willy
var Willy = function(stage, assetManager) {
    // initialization
    var xPos = 0;
    var yPos = 0;
    var killed = false;
    var arrow;
    var arrowMover;
    // to keep track of scope
    var myScope = this;

    //get Willy
    var clip = assetManager.getSprite("assets");
    stage.addChild(clip);
    var clipMover = new MoverDiagonal(clip, stage);

    arrow = assetManager.getSprite("assets");
    //arrowMover = new MoverDiagonal(clip, stage);
    
    // ---------------------------------------------- get/set methods
    this.getKilled = function() {
        return killed;
    };
    this.getWillyX = function(){
        return clip.x;
    };
    this.getWillyY = function(){
        return clip.y;
    };
    // ---------------------------------------------- public methods
    this.resetMe = function() {
        clip.gotoAndStop("worm");

        //clipMover.setSpeed(maxSpeed);
    };
    this.shoot = function(){
        // random selection of speed of bug
        //arrowMover.setSpeed(getRandomNum(2,6));

        // get bounds of sprite so we can determine width / height
        var dimensions = arrow.getBounds();


        arrow.x = getRandomNum(50, 350);
        arrow.y = getRandomNum(50, 250);
        arrow.rotation = getRandomNum(45, -45);

        // fire startMe again to take the new rotation of the bug
        arrow.gotoAndStop("arrowPointer");
        //arrowMover.startMe();
        stage.addChild(arrow);
        // setup listener to listen for ticker to monitor collisions
        //createjs.Ticker.addEventListener("tick", onCollisionTest);
        
        // add bugs so they are below the snake (snake)
        //stage.addChildAt(clip, stage.getChildIndex(snakeClip));     

        // listen for when my bug goes off the screen and kill it if it does
        //clip.addEventListener("onMovingDiagonalOffStage", onKillMe);

    }
    this.setXPosYPos = function(xPos, yPos){
        clip.x = xPos;
        clip.y = yPos;
    };
    //Moving Willy
    this.moveUp = function(){
        if(clip.y > 125){   
            clip.y -= 5;
        }  
    }
    this.moveDown = function(){
        if(clip.y < (stage.canvas.height - 150)){   
            clip.y += 5;
        }  
    }
    this.moveRight = function(){
        if(clip.x < (stage.canvas.width - 40)){   
            clip.x += 5;
        }
    }
    this.moveLeft = function(){
        
        if(clip.x > 0){   
            clip.x -= 5;
        }
    }

    // ----------------------------------------------- private methods
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

};
