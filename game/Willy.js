//Class for Willy
var Willy = function(stage, assetManager) {
    // initialization
    var isPaused = false;
    var isWillyKilled = false;
    var isDead = false;
    var lives;
    var direction = "";

    var accuracy = 0;
    var arrowCount = 0;
    var numArrows = 10;
    var killCount = 0;
    var isBirdKilled = false;
    var isWaveComplete;
    //get Willy
    var clip = assetManager.getSprite("assetsCharacters");
    stage.addChild(clip);
    var clipMover = new MoverDiagonal(clip, stage);

    // ---------------------------------------------- get/set methods
    this.getClip = function() {
        return clip;
    };
    this.getDirection = function() {
        return direction;
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
    this.getArrowCount = function() {
        return arrowCount;
    };
    this.getAccuracy = function() {
        if(arrowCount > 0){
            accuracy = Math.floor((killCount/arrowCount)*100);
        }
        return accuracy;
    };
    this.setAccuracy = function(value){
        accuracy = value;
    }
    this.getIsKilled = function() {
        return isKilled;
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
    // ---------------------------------------------- public methods
    this.resetMe = function() {
        clip.gotoAndStop("wormAlive");
        arrowCount = 0;
        lives = 1;
        isWillyKilled = false;
        isDead = false;
        accuracy = 0;
        numArrows = 10;
        isPaused = false;
        isWaveComplete = false;
        //move registration point
        clip.regX = clip.getBounds().width/4;
    };
    //deal with willy's arrow situation
    this.getNumArrows = function(){
        return numArrows;
    }
    this.decreaseNumArrows = function(){
        numArrows-=1;
    }
    this.setNumArrows = function(value){
        numArrows = value;
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
