//Class for Bird
var Bird = function(stage, assetManager) {
    // initialization
    var xPos;
    var yPos;
    var birdCount = 0;
    // to keep track of scope
    var myScope = this;

    //get bird
    var clip = assetManager.getSprite("assets");
    var clipMover = new MoverDiagonal(clip, stage);;
    // ---------------------------------------------- get/set methods


    // ---------------------------------------------- private methods
    this.getInfoScreenBirds = function(){
        clip.gotoAndStop("bird2");

        clip.x = getRandomNum(-50, -200);
        clip.y = getRandomNum(0, 250);
        createjs.Ticker.addEventListener("tick", onMove);
        stage.addChild(clip);
        birdCount++;
        //console.log(birdCount);    
    }
    this.setupMe = function() {
        // random selection of speed of bug
        clipMover.setSpeed(getRandomNum(2,6));

        // get bounds of sprite so we can determine width / height
        var dimensions = clip.getBounds();

        // bug starts on left or right of stage?
        if (getRandomNum(1, 2) == 1) {
            // move right
            clip.x = -dimensions.width;
            // randomly select starting y location of mower
            clip.y = getRandomNum(50, stage.canvas.height - 200);
            clip.rotation = getRandomNum(45, -45);
        } else {
            // move left
            clip.x = stage.canvas.width;
            clip.y = getRandomNum(50, stage.canvas.height - 200);
            clip.rotation = getRandomNum(135, 225);
        }

        // fire startMe again to take the new rotation of the bug
        clip.gotoAndStop("bird2");
        clipMover.startMe();
        stage.addChild(clip);
        // setup listener to listen for ticker to monitor collisions
        //createjs.Ticker.addEventListener("tick", onCollisionTest);
        
        // add bugs so they are below the snake (snake)
        //stage.addChildAt(clip, stage.getChildIndex(snakeClip));     

        // listen for when my bug goes off the screen and kill it if it does
        //clip.addEventListener("onMovingDiagonalOffStage", onKillMe);
    };
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    // ----------------------------------------------- event handlers
    
    function onMove(e) {
        
        if(clip.x > stage.canvas.width){
            clip.x = -50;
        }else{
           clip.x ++; 
        }

    };
};
