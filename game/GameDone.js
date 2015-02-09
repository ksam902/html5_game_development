
// game variables
var stage = null;
var canvas = null;
var downKey = false;
var upKey = false;
var leftKey = false;
var rightKey = false;

// frame rate of game
var frameRate = 24;

// game objects
var assetManager = null;
var bird = null;
var cloud1;
var cloud2;
var cloud3;

var startBackground;
var arenaBackground;
var infoBackground;
var gameTitle;
var pauseTitle;
var newGame;
var resumeGame;
var quitGame;
var instructions;
var btnMenu;
var developerCredits;

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

    startBackground = assetManager.getSprite("assets");
    startBackground.gotoAndStop("startBackground");
    stage.addChild(startBackground);

    cloud3 = assetManager.getSprite("assets");
    cloud3.x = -75;
    cloud3.y = 10;
    cloud3.gotoAndStop("cloud3");
    stage.addChild(cloud3);

    bird = assetManager.getSprite("assets");
    bird.x = -100;
    bird.y = 20;
    bird.gotoAndStop("bird");
    stage.addChild(bird);

    cloud2 = assetManager.getSprite("assets");
    cloud2.x = -150;
    cloud2.y = 100;
    cloud2.gotoAndStop("cloud2");
    stage.addChild(cloud2);

    gameTitle = assetManager.getSprite("assets");
    gameTitle.x = 150;
    gameTitle.y = 70;
    gameTitle.gotoAndStop("gameTitleText");
    stage.addChild(gameTitle);

    cloud1 = assetManager.getSprite("assets");
    cloud1.x = -250;
    cloud1.y = 200;
    cloud1.gotoAndStop("cloud1");
    stage.addChild(cloud1);

    newGame = assetManager.getSprite("assets");
    newGame.x = 250;
    newGame.y = 300;
    newGame.gotoAndStop("newGameText");
    stage.addChild(newGame);
    // setup event listener to start game
    newGame.addEventListener("click", onNewGame);

    instructions = assetManager.getSprite("assets");
    instructions.x = 250;
    instructions.y = 325;
    instructions.gotoAndStop("instructionsText");
    stage.addChild(instructions);

    developerCredits = assetManager.getSprite("assets");
    developerCredits.x = 200;
    developerCredits.y = 575;
    developerCredits.gotoAndStop("developerText");
    stage.addChild(developerCredits);

    // startup the ticker
    createjs.Ticker.setFPS(frameRate);
    createjs.Ticker.addEventListener("tick", onTick);
}
function onNewGame(e) {
    stage.removeChild(startBackground);
    stage.removeChild(cloud1);
    stage.removeChild(cloud2);
    stage.removeChild(cloud3);
    stage.removeChild(gameTitle);
    stage.removeChild(instructions);
    stage.removeChild(developerCredits);
    
    arenaBackground = assetManager.getSprite("assets");
    arenaBackground.gotoAndStop("arenaBackground");
    stage.addChild(arenaBackground);

    // Adding Clouds back in
    cloud1.x = -50;
    cloud1.y = 10;
    stage.addChild(cloud1);

    btnMenu = assetManager.getSprite("assets");
    btnMenu.x = 450;
    btnMenu.y = 575;
    btnMenu.gotoAndStop("menuButtonUp");
    stage.addChild(btnMenu);
    // setup event listener to go to pause screen
    btnMenu.addEventListener("click", onMenu);
    // setup event listeners for keyboard keys
    document.addEventListener("keydown", onKeyDown);

    stage.addChild(developerCredits);
}
function onMenu(e){
    stage.removeChild(arenaBackground);
    stage.removeChild(btnMenu);
    stage.removeChild(developerCredits);

    //new background
    infoBackground = assetManager.getSprite("assets");
    infoBackground.gotoAndStop("infoScreen");
    stage.addChild(infoBackground);

    pauseTitle = assetManager.getSprite("assets");
    pauseTitle.x = 200;
    pauseTitle.y = 150;
    pauseTitle.gotoAndStop("pauseText");
    stage.addChild(pauseTitle);

    resumeGame = assetManager.getSprite("assets");
    resumeGame.x = 250;
    resumeGame.y = 300;
    resumeGame.gotoAndStop("resumeText");
    stage.addChild(resumeGame);
    // setup event listener to Resume Game
    resumeGame.addEventListener("click", onResumeGame);

    stage.addChild(instructions);

    // !!! Need to Add Restart Game

    quitGame = assetManager.getSprite("assets");
    quitGame.x = 250;
    quitGame.y = 350;
    quitGame.gotoAndStop("quitText");
    stage.addChild(quitGame);
    // setup event listener to Quit Game
    quitGame.addEventListener("click", onQuitGame);

    stage.addChild(developerCredits);

    console.log("Menu Button Clicked");
}
function onResumeGame(e){
    onNewGame();
}
function onQuitGame(e){
    onReady();
}
function onKeyDown(e) {
    // keystroke for "P" Button activating the menu screen
    if (e.keyCode == 80) onMenu();
}
function onTick(e) {
    // TESTING FPS
    document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

    // Detecting whether or not the Cloud is still on the canvas, if not set x back to original value
    if (cloud1.x >= 600){
        cloud1.x = -250;
    }else{
        cloud1.x += 1;
    }
    if (cloud2.x >= 600){
        cloud2.x = -150;
    }else{
        cloud2.x += 1;
    }
    if (cloud3.x >= 600){
        cloud3.x = -75;
    }else{
        cloud3.x += 1;
    }
    bird.x += 1;
    // update the stage!
    stage.update();
}

