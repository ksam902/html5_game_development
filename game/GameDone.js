//page variables
var btnBegin;

// game variables
var stage = null;
var canvas = null;
var downKey = false;
var upKey = false;
var leftKey = false;
var rightKey = false;

// frame rate of game
var frameRate = 30;

// game objects
var assetManager = null;
var bird = null;
var willy = null;
var cloud1;
var cloud2;
var cloud3;
var cloud4;

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

// -- Arena variables
var healthIcon;
var healthBar;


var direction;

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
    btnBegin = document.getElementById("btnBegin");
    btnBegin.disabled = true;
}

function onProgress(e) {
    console.log("progress: " + assetManager.getProgress());
}

function onReady(e) {

    //enable the begin button when the game is ready
    btnBegin.disabled = false;
    $('#btnBegin').click(function(){
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 750);
    });

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

    cloud2 = assetManager.getSprite("assets");
    cloud2.x = -150;
    cloud2.y = 100;
    cloud2.gotoAndStop("cloud2");
    stage.addChild(cloud2);

    gameTitle = assetManager.getSprite("assets");
    gameTitle.x = 100;
    gameTitle.y = 125;
    gameTitle.gotoAndStop("gameTitleText");
    stage.addChild(gameTitle);

    cloud1 = assetManager.getSprite("assets");
    cloud1.x = -250;
    cloud1.y = 200;
    cloud1.gotoAndStop("cloud1");
    stage.addChild(cloud1);

    bird = assetManager.getSprite("assets");
    bird.x = -50;
    bird.y = 20;
    bird.gotoAndStop("bird");
    stage.addChild(bird);
    //bird = new Bird(stage, assetManager);

    //cloud4 = new Cloud(stage, assetManager);

    willy = assetManager.getSprite("assets");
    willy.x = 260;
    willy.y = 450;
    willy.gotoAndStop("worm");
    stage.addChild(willy);

    newGame = assetManager.getSprite("assets");
    newGame.x = 260;
    newGame.y = 325;
    newGame.gotoAndStop("newGameText");
    stage.addChild(newGame);
    // setup event listener to start game
    newGame.addEventListener("click", onNewGame);

    instructions = assetManager.getSprite("assets");
    instructions.x = 260;
    instructions.y = 350;
    instructions.gotoAndStop("instructionsText");
    stage.addChild(instructions);
    // setup event listener to instructions
    instructions.addEventListener("click", onInstructions);

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
    // -- Health Elements
    healthIcon = assetManager.getSprite("assets");
    healthIcon.x = 125;
    healthIcon.y = 500;
    healthIcon.gotoAndStop("heartIcon");
    stage.addChild(healthIcon);

    healthBar = assetManager.getSprite("assets");
    healthBar.x = 200;
    healthBar.y = 525;
    healthBar.gotoAndStop("healthBarFull");
    stage.addChild(healthBar);

    btnMenu = assetManager.getSprite("assets");
    btnMenu.x = 500;
    btnMenu.y = 500;
    btnMenu.gotoAndStop("menuButtonUp");
    stage.addChild(btnMenu);
    // setup event listener to go to pause screen
    btnMenu.addEventListener("click", onMenu);
    btnMenu.addEventListener("mouseover", onMenuHover);

    stage.addChild(willy);
    //Lets add the keyboard controls now
    $(document).keydown(function(e){
        var key = e.which;
        //We will add another clause to prevent reverse gear
        if(key == "37" && direction != "right"){
            direction = "left"; 
            willy.x --; 
        } else if(key == "38" && direction != "down"){
            direction = "up"; 
            willy.y --;
        }else if(key == "39" && direction != "left"){
            direction = "right";
            willy.x ++;
        }else if(key == "40" && direction != "up"){
            direction = "down"; 
            willy.y ++;
        }
    });

    direction = "right";

    // setup event listeners for keyboard keys
    document.addEventListener("keydown", onKeyDown);

    stage.addChild(developerCredits);
}
function onMenu(e){
    stage.removeChild(arenaBackground);
    stage.removeChild(btnMenu);
    stage.removeChild(developerCredits);
    stage.removeChild(cloud1);
    stage.removeChild(willy);

    //new background
    infoBackground = assetManager.getSprite("assets");
    infoBackground.gotoAndStop("infoScreen");
    stage.addChild(infoBackground);

    // Add background animation
    stage.addChild(cloud3);
    stage.addChild(cloud2);
    stage.addChild(cloud1);
    stage.addChild(bird);
    stage.addChild(willy);

    pauseTitle = assetManager.getSprite("assets");
    pauseTitle.x = 200;
    pauseTitle.y = 75;
    pauseTitle.gotoAndStop("pauseText");
    stage.addChild(pauseTitle);

    resumeGame = assetManager.getSprite("assets");
    resumeGame.x = 260;
    resumeGame.y = 325;
    resumeGame.gotoAndStop("resumeText");
    stage.addChild(resumeGame);
    // setup event listener to Resume Game
    resumeGame.addEventListener("click", onResumeGame);

    // Add Instructions Back In
    stage.addChild(instructions);

    // !!! Need to Add Restart Game

    quitGame = assetManager.getSprite("assets");
    quitGame.x = 260;
    quitGame.y = 375;
    quitGame.gotoAndStop("quitText");
    stage.addChild(quitGame);
    // setup event listener to Quit Game
    quitGame.addEventListener("click", onQuitGame);

    stage.addChild(developerCredits);

    // setup event listeners for keyboard keys
    document.addEventListener("keydown", onKeyDown);
    console.log("Menu Button Clicked");
}
function onResumeGame(e){
    onNewGame();
}
function onQuitGame(e){
    onReady();
}
function onGameOver(e){

}
function onInstructions(e){
    alert("Instructions Screen will pop up.");
}
function onMenuHover(e){
    alert("Menu Hover Button");
    stage.removeChild("btnMenu");

}
function onKeyDown(e) {
    // keystroke for "P" Button activating the menu screen
    if (e.keyCode == 80) onMenu();
    if (e.keyCode == 27) onResumeGame();
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
    if (bird.x >= 600){
        bird.x = -50;
    }else{
        bird.x += 1;
    }
    // if (willy.x >= 600){
    //     willy.x = 10;
    // }else{
    //     willy.x += 1;
    // }

    // update the stage!
    stage.update();
}

