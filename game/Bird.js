//Class for Bird
var Bird = function(stage, infoBirdContainer, arenaBirdsContainer, assetManager, willy, arrow) {
    // initialization
    var birdCount = 0;
    var isKilled;

    //collision testing
    collisionMethod = ndgmr.checkPixelCollision;
    window.alphaThresh = 0.75;

    //get bird
    var clip = assetManager.getSprite("assetsCharacters");
    var clipMover = new MoverDiagonal(clip, stage);
    //get willy
    var willyClip = willy.getClip();
    // ---------------------------------------------- get/set methods
    this.getClip = function() {
        return clip;
    };
    this.getClipMover = function() {
        return clipMover;
    };
    // ---------------------------------------------- private methods
    this.getInfoScreenBirds = function(){
        clip.gotoAndPlay("birdAlive");

        clip.x = getRandomNum(-50, -200);
        clip.y = getRandomNum(0, 175);
        createjs.Ticker.addEventListener("tick", onInfoMove);
        infoBirdContainer.addChild(clip);
        birdCount++;
    }
    this.setupMe = function() {
        isKilled = false;
        // random selection of speed of bird
        clipMover.setSpeed(getRandomNum(2,7));

        // get bounds of sprite so we can determine width / height
        var dimensions = clip.getBounds();

        // bird starts on left or right of stage?
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

        clip.gotoAndPlay("birdAlive");

        createjs.Ticker.addEventListener("tick", onIsWaveComplete);
        createjs.Ticker.addEventListener("tick", onPauseCheck);
        createjs.Ticker.addEventListener("tick", onCollisionTest);
        arenaBirdsContainer.addChild(clip);
    };

    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    // ----------------------------------------------- event handlers
    function onIsWaveComplete(){
            // only do collision test on every other tick to save on processing
            if ((createjs.Ticker.getTicks() % 2 === 0)) {
                if ( willy.getIsWaveComplete()) {
                    onKillBird();
                }
            }
    }
    function onPauseCheck(){
            // only do collision test on every other tick to save on processing
            if ((createjs.Ticker.getTicks() % 2 === 0)) {
                if ( willy.getIsPaused()) {
                    clipMover.stopMe();
                }else{
                    if(!isKilled){
                        clipMover.startMe();
                    }
                }
            }
    }
    function onCollisionTest(){
            // only do collision test on every other tick to save on processing
            if ((createjs.Ticker.getTicks() % 2 === 0)) {
                var intersection = collisionMethod(willyClip,clip,window.alphaThresh);
                if ( intersection ) {
                    onKillWilly();
                    onKillBird();
                    createjs.Ticker.removeEventListener("tick", onCollisionTest);
                }
            }else{
                for ( var c = 0; c < arrows.length; c++ ) {
                    var a = arrows[c];
                    a = a.getClip();
                    intersection = collisionMethod(clip,a,window.alphaThresh);
                    if ( intersection ) {
                        stage.removeChild(a);
                        //remove arow from array
                        arrows.splice(c, 1);
                        willy.increaseKillCount();
                        isKilled = true;
                        onKillBird();
                        createjs.Ticker.removeEventListener("tick", onCollisionTest);
                    }
                }
            }

    }
    function onKillBird(e) {
        createjs.Ticker.removeEventListener("tick", onIsWaveComplete);
        createjs.Ticker.removeEventListener("tick", onPauseCheck);
        createjs.Ticker.removeEventListener("tick", onCollisionTest);
        clipMover.stopMe();
        clip.gotoAndPlay("birdDead");
        clip.addEventListener("animationend", onKilledBird);
    }

    function onKilledBird(e) {
        // cleanup event listeners
        clip.removeEventListener("animationend", onKilledBird);
        // remove displayobject
        arenaBirdsContainer.removeChild(clip);
    }
    function onKillWilly(e) {
        //update willy's lives
        willy.setIsWillyKilled(true);
        willyClip.gotoAndPlay("wormDead");
        willyClip.addEventListener("animationend", onKilledWilly);

    }

    function onKilledWilly(e) {
        // cleanup event listeners
        willyClip.removeEventListener("animationend", onKilledWilly);
        stage.removeChild(clip);
        stage.removeChild(willyClip);
        //re-add willy to stage if he had more than 1 life
        if(willy.getLives() != 0){
            willyClip.gotoAndPlay("wormAlive");
            stage.addChild(willyClip);
            //console.log("Willy killed");
        }
    }
    function onInfoMove(e) {

        if(clip.x > stage.canvas.width){
            clip.x = getRandomNum(-50, -200);
        }else{;
           clip.x ++;
        }

    };
    function onMove(e) {

        if(clip.x > stage.canvas.width){
            //if bird is off screen, remove bird from stage
            arenaBirdsContainer.removeChild(clip);
        }else{;
           clip.x ++;
        }

    };
};
