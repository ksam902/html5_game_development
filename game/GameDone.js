
// game variables
var stage = null;
var canvas = null;

// frame rate of game
var frameRate = 24;

// game objects
// var assetManager = null;
// var snake = null;
// var bug = null;
// var biplane = null;

var background;

// ------------------------------------------------------------ event handlers
function onInit() {
    console.log(">> initializing");

    // get reference to canvas
    canvas = document.getElementById("stage");
    // set canvas to as wide/high as the browser window
    canvas.width = 600;
    canvas.height = 600;
    // create stage object
    stage = new createjs.Stage(canvas);

    // construct preloader object to load spritesheet and sound assets
    assetManager = new AssetManager();
    stage.addEventListener("onAssetLoaded", onProgress);
    stage.addEventListener("onAllAssetsLoaded", onReady);
    // load the assets
    assetManager.loadAssets(manifest);
}

function onProgress(e) {
    console.log("progress: " + assetManager.getProgress());
}

function onReady(e) {
    console.log(">> setup");
    // kill event listener
    stage.removeEventListener("onAssetLoaded", onProgress);
    stage.removeEventListener("onAllAssetsLoaded", onReady);

    // construct game objects
    // snake = assetManager.getSprite("GameSprites");
    // snake.x = 200;
    // snake.y = 200;
    // snake.gotoAndPlay("snakeAlive");
    // stage.addChild(snake);

    background = assetManager.getSprite("assets");
    background.gotoAndStop("startBackground");
    stage.addChild(background);

    // startup the ticker
    createjs.Ticker.setFPS(frameRate);
    createjs.Ticker.addEventListener("tick", onTick);
}

function onTick(e) {
    // TESTING FPS
    document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

    // put your other stuff here!
    // ...

    // update the stage!
    stage.update();
}

