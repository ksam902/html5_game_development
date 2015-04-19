//Class for Willy
var Willy = function(stage, assetManager) {
    // Get Willy
    var clip = assetManager.getSprite("assetsCharacters");
    stage.addChild(clip);
    var clipMover = new MoverDiagonal(clip, stage);
    // initialization
    var isPaused, isWillyKilled, isBirdKilled, isWaveComplete = false;
    // Willy Stats/Info
    var lives, accuracy, arrowCount, numArrows, killCount, direction;

    // ---------------------------------------------- public methods
    this.resetMe = function() {
        clip.gotoAndStop("wormAlive");
        arrowCount = 0;
        lives = 3;
        isWillyKilled = false;
        accuracy = 0;
        numArrows = 10;
        isPaused = false;
        isWaveComplete = false;
        //move registration point
        clip.regX = clip.getBounds().width/4;
    };
    // ---------------------------------------------- get/set methods
    this.getClip = function() {
        return clip;
    };
    this.getLives = function() {
        return lives;
    };
    this.decreaseLivesCount = function(value) {
        lives -= 1;
    };
    this.getIsWillyKilled = function() {
        return isWillyKilled;
    };
    this.setIsWillyKilled = function(value) {
        isWillyKilled = value;
    };
    this.getIsBirdKilled = function() {
        return isBirdKilled;
    };
    this.setIsBirdKilled = function(value) {
        isBirdKilled = value;
    };
    this.getKillCount = function() {
        return killCount;
    };
    this.setKillCount = function(value) {
        killCount = value;
    };
    // used when setting up Projectile
    this.getDirection = function() {
        return direction;
    };
    this.getWillyX = function(){
        return clip.x;
    };
    this.getWillyY = function(){
        return clip.y;
    };
    this.getIsPaused = function() {
        return isPaused;
    };
    this.setIsPaused = function(value) {
        isPaused = value;
    };
    this.getIsWaveComplete = function() {
        return isWaveComplete;
    };
    this.setIsWaveComplete = function(value) {
        isWaveComplete = value;
    };
    //deal with willy's arrow situation
    this.getArrowCount = function() {
        return arrowCount;
    };
    this.getAccuracy = function() {
        if(arrowCount > 0){
            accuracy = Math.floor((killCount/arrowCount)*100);
        }
        return accuracy;
    };
    this.getNumArrows = function(){
        return numArrows;
    }
    this.setNumArrows = function(value){
        numArrows = value;
    }
    this.decreaseNumArrows = function(){
        numArrows-=1;
    }
    this.increaseArrowCount = function(){
        arrowCount+=1;
    }
    this.increaseKillCount = function(){
        killCount+=1;
        isBirdKilled = true;
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
        clip.scaleX = 1;
        direction = "right";
        if(clip.x < (stage.canvas.width - 25)){
            clip.x += 5;
        }
    }
    this.moveLeft = function(){
        clip.scaleX = -1;
        direction = "left";
        if(clip.x > 25){
            clip.x -= 5;
        }
    }

    // ----------------------------------------------- private methods
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

};
