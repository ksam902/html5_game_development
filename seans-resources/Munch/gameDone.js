// Munch implemented in HTML5
// Sean Morrow
// May 12, 2014

// game variables
var stage = null;
var canvas = null;
var downKey = false;
var upKey = false;
var leftKey = false;
var rightKey = false;
// frame rate of game
var frameRate = 26;
var snakeMaxSpeed = 5;
// bug timer to add gameplay
var bugTimer = null;
var bugDelay = 0;
var bugsEaten = 0;

// game objects
var assetManager;
var introCaption;
var background;
var snake;
var gameOverCaption;

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
    stage.addEventListener("onAllAssetsLoaded", onSetup);
    // load the assets
	assetManager.loadAssets(manifest);
}

function onSetup() {
	console.log(">> setup");
	// kill event listener
	stage.removeEventListener("onAllAssetsLoaded", onSetup);

    // construct game objects
    background = assetManager.getSprite("assets");
    background.gotoAndStop("background");
    stage.addChild(background);
    introCaption = assetManager.getSprite("assets");
    introCaption.gotoAndStop("introCaption");
    introCaption.x = 50;
    introCaption.y = 50;
    stage.addChild(introCaption);
    gameOverCaption = assetManager.getSprite("assets");
    gameOverCaption.gotoAndStop("gameOverCaption");
    gameOverCaption.x = 50;
    gameOverCaption.y = 50;
    snake = new Snake(stage, assetManager, snakeMaxSpeed);
    snake.resetMe();

    // setup event listener to start game
    background.addEventListener("click", onStartGame);
    // setup game event listeners to listen on the capture phase
    stage.addEventListener("onBugEaten", onBugEaten, true);
	stage.addEventListener("onSnakeKilled", onGameOver, true);
    
    // startup the ticker
    createjs.Ticker.setFPS(frameRate);
    createjs.Ticker.addEventListener("tick", onTick);
}

function onStartGame(e) {
    stage.removeChild(introCaption);
    // initialization
    bugsEaten = 0;

    // remove click event on background
    background.removeEventListener("click", onStartGame);

    // start the snake object
    snake.setupMe();

    // construct and setup bugtimer to drop bugs on displaylist
    bugDelay = 500;
    bugTimer = window.setInterval(onAddBug, bugDelay);

    // current state of keys
    leftKey = false;
    rightKey = false;
    upKey = false;
    downKey = false;

    // setup event listeners for keyboard keys
	document.addEventListener("keydown", onKeyDown);
	document.addEventListener("keyup", onKeyUp);
}

function onKeyDown(e) {
    // which keystroke is down?
    if (e.keyCode == 37) leftKey = true;
    else if (e.keyCode == 39) rightKey = true;
    else if (e.keyCode == 38) upKey = true;
    else if (e.keyCode == 40) downKey = true;
}

function onKeyUp(e) {
    // which keystroke is up?
    if (e.keyCode == 37) leftKey = false;
    else if (e.keyCode == 39) rightKey = false;
    else if (e.keyCode == 38) upKey = false;
    else if (e.keyCode == 40) downKey = false;
}

function onAddBug(e) {
    // add bug to the stage
    var bug = new Bug(stage, assetManager, snake);
    bug.setupMe();
}

function onBugEaten(e) {
    // increment bug counter
    bugsEaten++;
    // energize the snake with energy
    snake.energizeMe();

    // decrease the amount of bugs on the screen every ten bugs eaten
    if ((bugsEaten % 10) === 0) {
        bugDelay = bugDelay + 500;
        window.clearInterval(bugTimer);
		bugTimer = window.setInterval(onAddBug, bugDelay);
    }
    console.log("onBugEaten");
}

function onGameOver(e) {
    // gameOver
    window.clearInterval(bugTimer);
    stage.addChild(gameOverCaption);

    // add listener to reset game when click background
    background.addEventListener("click", onResetGame);

    // remove all listeners
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("keyup", onKeyUp);
}

function onResetGame(e) {
    // kill event listener and add listener to start a new game again
    background.removeEventListener("click", onResetGame);
    background.addEventListener("click", onStartGame);

    // reset the snake and user interface
    snake.resetMe();

    // adjust caption on screen
    stage.removeChild(gameOverCaption);
    stage.addChild(introCaption);
}

function onTick(e) {
    // TESTING FPS
    document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

    // only monitor keyboard if snake is alive
    if (!snake.getKilled()) {
        if (leftKey) {
            snake.startMe(MoverDirection.LEFT);
        } else if (rightKey) {
            snake.startMe(MoverDirection.RIGHT);
        } else if (upKey) {
            snake.startMe(MoverDirection.UP);
        } else if (downKey) {
            snake.startMe(MoverDirection.DOWN);
        } else {
            snake.stopMe();
        }
    }

    // update the stage!
	stage.update();
}

