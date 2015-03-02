//Class for Bird
var Bird = function(stage, assetManager, willy, arrow) {
    // initialization
    var xPos;
    var yPos;
    var birdCount = 0;
    // to keep track of scope
    var myScope = this;

    //get willy
    var willyClip = willy.getClip();
    if(arrow != null){
        //get arrow
        var arrowClip = arrow.getClip();
    }

    //get bird
    var clip = assetManager.getSprite("assetsCharacters");
    var clipMover = new MoverDiagonal(clip, stage);;
    // ---------------------------------------------- get/set methods
    this.getClip = function() {
        return clip;
    };

    // ---------------------------------------------- private methods
    this.getInfoScreenBirds = function(){
        clip.gotoAndPlay("birdAlive");

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
            // move bird right
            clip.x = -dimensions.width;
            // randomly select starting y location of bird
            clip.y = getRandomNum(50, stage.canvas.height - 400);
            //make sure the rotation of the bird is not too steep
            clip.rotation = getRandomNum(0, 45);
        } else {
            // move bird left
            //flip bird to move left
            clip.scaleY = -1;
            clip.x = stage.canvas.width;
            clip.y = getRandomNum(50, stage.canvas.height - 400);
            clip.rotation = getRandomNum(135, 180);
        }

        // fire startMe again to take the new rotation of the bug
        clip.gotoAndPlay("birdAlive");
        clipMover.startMe();

        // setup listener to listen for ticker to monitor collisions
        if(arrow != null){
            createjs.Ticker.addEventListener("tick", onArrowCollisionTest);
        }
        createjs.Ticker.addEventListener("tick", onWillyCollisionTest);
        stage.addChild(clip);

    };
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    // ----------------------------------------------- event handlers
     function onArrowCollisionTest(e) {
        if ((createjs.Ticker.getTicks() % 2 === 0)) {
            var a = arrowClip.x - clip.x;
            var b = arrowClip.y - clip.y;
            // Get distance with Pythagoras
            var c = Math.sqrt((a * a) + (b * b));
            if (c <= 25) {
                alert("HIT ARROW");
            }
        }
    }   
     function onWillyCollisionTest(e) {
            // only do collision test on every other tick to save on processing
            // if ((createjs.Ticker.getTicks() % 2 === 0) && (!snake.getKilled())) {
                if ((createjs.Ticker.getTicks() % 2 === 0)) {
                // radius collision detection
                // Calculate difference between centres
                var a = willyClip.x - clip.x;
                var b = willyClip.y - clip.y;
                // Get distance with Pythagoras
                var c = Math.sqrt((a * a) + (b * b));
                if (c <= 40) {
                    onKillWilly();
                }
            }
        }

    function onKillWilly(e) {
        createjs.Ticker.removeEventListener("tick", onWillyCollisionTest);
        clipMover.stopMe();
        clip.gotoAndPlay("birdDead");
        // play death sequence of bug
        willyClip.gotoAndPlay("wormDead");
        willyClip.addEventListener("animationend", onKilledWilly);
    }

    function onKilledWilly(e) {
        // cleanup event listeners
        willyClip.removeEventListener("animationend", onKilledWilly);
        // remove displayobject
        stage.removeChild(clip);
        stage.removeChild(willyClip);
        willyClip.gotoAndPlay("wormAlive");
        stage.addChild(willyClip);
        console.log("Willy killed");
    }  
    function onMove(e) {
        
        if(clip.x > stage.canvas.width){
            clip.x = -50;
        }else{
           clip.x ++; 
        }

    };
};
