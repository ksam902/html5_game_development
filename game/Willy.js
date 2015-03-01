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
    var clip = assetManager.getSprite("assetsCharacters");
    stage.addChild(clip);
    var clipMover = new MoverDiagonal(clip, stage);

    arrow = assetManager.getSprite("assets");
    //arrowMover = new MoverDiagonal(clip, stage);
    
    // ---------------------------------------------- get/set methods
    this.getClip = function() {
        return clip;
    };
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
        clip.gotoAndStop("wormAlive");

        //clipMover.setSpeed(maxSpeed);
    };
    this.shoot = function(){


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
        if(clip.x < (stage.canvas.width - 40)){   
            clip.x += 5;
        }
    }
    this.moveLeft = function(){
        clip.scaleX = -1;
        if(clip.x > 0){   
            clip.x -= 5;
        }
    }

    // ----------------------------------------------- private methods
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

};
