//Class for Willy
var Willy = function(stage, assetManager) {
    // initialization
    var xPos = 0;
    var yPos = 0;
    var killed = false;
    // to keep track of scope
    var myScope = this;

    //get Willy
    var clip = assetManager.getSprite("assets");
    stage.addChild(clip);


    // ---------------------------------------------- get/set methods
    this.getKilled = function() {
        return killed;
    };

    // ---------------------------------------------- public methods
    this.resetMe = function() {
        clip.gotoAndStop("worm");

        //clipMover.setSpeed(maxSpeed);
    };
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

    // ----------------------------------------------- event handlers

};
