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

    // ---------------------------------------------- get/set methods
    this.setXPos = function(value){
    	xPos = value;
    }

    // ---------------------------------------------- private methods
    this.getInfoScreenBirds = function(){
        clip.gotoAndStop("bird");

        clip.x = getRandomNum(-50, -200);
        clip.y = getRandomNum(0, 250);
        createjs.Ticker.addEventListener("tick", onMove);
        stage.addChild(clip);
        birdCount++;
        //console.log(birdCount);    
    }
    this.getArenaBirds = function(){


    }
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
