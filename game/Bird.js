//Class for Bird
var Bird = function(stage, assetManager) {
    // initialization
    var xPos;
    var yPos;
    var birdCount = 0;
    // to keep track of scope
    var myScope = this;

    //get bird
    var clip = assetManager.getSprite("assetsCharacters");
    var clipMover = new MoverDiagonal(clip, stage);;
    // ---------------------------------------------- get/set methods


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
        stage.addChild(clip);

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
