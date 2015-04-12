// Cloud Class
var Cloud = function(stage, cloudContainer, assetManager) {
    // initialization
    var rdmCloud;
    //get cloud
    var clip = assetManager.getSprite("assets");

    // ---------------------------------------------- private methods
    this.getInfoScreenClouds = function(){
        rdmCloud = getRandomCloud();
        clip.gotoAndStop(rdmCloud);
        clip.x = getRandomNum(-100, -150);
        clip.y = getRandomNum(0, 85);
        createjs.Ticker.addEventListener("tick", onMove);
        cloudContainer.addChild(clip);
    }
    this.getArenaClouds = function(){
        clip.gotoAndStop("cloud1");
        clip.x = getRandomNum(-100, -300);
        clip.y = getRandomNum(0, 50);
        createjs.Ticker.addEventListener("tick", onMove);
        cloudContainer.addChild(clip);
    }
    function getRandomCloud(){
        var cloud = "";
        var rdmNum = Math.floor(Math.random() * 3);

        switch (rdmNum){
            case 0:
                cloud = "cloud1";
                break;
            case 1:
                cloud = "cloud2";
                break;
            case 2:
                cloud = "cloud3";
                break;
            default:
                cloud = "cloud1";
        }
        return cloud;
    }
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    // ----------------------------------------------- event handlers
    function onMove(e) {

        if(clip.x > stage.canvas.width){
            clip.x = getRandomNum(-100, -150);
        }else{
           clip.x ++;
        }

    };

};