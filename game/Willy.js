//Class for Willy
var Willy = function(stage, assetManager) {
    // initialization
    var isWillyKilled = false;
    var isDead = false;
    var lives = 3;
    var direction = "";
    var killCount = 0;
    var isBirdKilled = false;
    var arrowCount = 0;
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
    this.getArrowCount = function() {
        return arrowCount;
    };
    this.getLives = function() {
        return lives;
    };
    this.setLives = function(value) {
        lives = value;
        isKilled = true;
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
    this.getIsKilled = function() {
        return isKilled;
    };
    this.getWillyX = function(){
        return clip.x;
    };
    this.getWillyY = function(){
        return clip.y;
    };
    // ---------------------------------------------- public methods
    this.resetMe = function() {
        clip.gotoAndStop("wormAlive");
    };
    this.increaseArrowCount = function(){
        arrowCount+=1;
    }
    this.increaseKillCount = function(){
        killCount+=1;
        isBirdKilled = true;
        console.log(killCount);
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
        if(clip.x < (stage.canvas.width - 55)){   
            clip.x += 5;
        }
    }
    this.moveLeft = function(){
        clip.scaleX = -1;
        direction = "left";
        if(clip.x > 55){   
            clip.x -= 5;
        }
    }

    // ----------------------------------------------- private methods
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

};
