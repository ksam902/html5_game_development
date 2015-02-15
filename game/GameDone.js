//page variables
var btnBegin;

// game variables
var stage = null;
var canvas = null;
var downKey = false;
var upKey = false;
var leftKey = false;
var rightKey = false;
var mousePointer;

// frame rate of game
var frameRate = 30;

// game objects
var assetManager = null;
var bird = null;
var willy = null;
var willy2 = null;
var cloud;


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
    stage.enableMouseOver(10);

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

    addCloudsInfoScreen(5);

    gameTitle = assetManager.getSprite("assets");
    gameTitle.x = 100;
    gameTitle.y = 125;
    gameTitle.gotoAndStop("gameTitleText");
    stage.addChild(gameTitle);

    var willy2 = new Willy(stage, assetManager);
    willy2.resetMe();
    willy2.setXPosYPos(260, 450);

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

    stage.removeAllChildren();

    arenaBackground = assetManager.getSprite("assets");
    arenaBackground.gotoAndStop("arenaBackground");
    stage.addChild(arenaBackground);

    addCloudsArenaScreen(4);

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

    var willy = new Willy(stage, assetManager);
    willy.resetMe();
    willy.setXPosYPos(260, 350);
    //Lets add the keyboard controls now
    $(document).keydown(function(e){
        var key = e.which;
        //We will add another clause to prevent reverse gear
        if(key == "37"){
            //direction = "left"; 
            willy.moveLeft();
            e.preventDefault(); 
        } else if(key == "38"){
            //direction = "up"; 
            willy.moveUp();
            e.preventDefault();
        }else if(key == "39"){
            //direction = "left";
            willy.moveRight();
            e.preventDefault();
        }else if(key == "40"){
            //direction = "down"; 
            willy.moveDown();
            e.preventDefault();
        }
    });

    //Mouse Pointer
    addMousePointer();    
    $( "canvas" ).bind("click", function() {
        console.log("Shoot Button Clicked.");
        //alert( "Clicked over Canvas element." );
    });

    direction = "right";

    // setup event listeners for keyboard keys
    document.addEventListener("keydown", onKeyDown);

    stage.addChild(developerCredits);
}
function onMenu(e){
    //remove all children from the stage and the aim for the mouse
    stage.removeAllChildren();
    removeMousePointer();
    //new background
    infoBackground = assetManager.getSprite("assets");
    infoBackground.gotoAndStop("infoScreen");
    stage.addChild(infoBackground);

    //add in clouds
    addCloudsInfoScreen(5);

    // Add background animation
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
    //alert("Menu Hover Button");
    stage.removeChild("btnMenu");

}
function addMousePointer(){
    mousePointer = assetManager.getSprite("assets");
    mousePointer.gotoAndStop("mousePointer");
    $( "#stage" ).mousemove(function( event ) {
        mousePointer.x = stage.mouseX - 20;
        mousePointer.y = stage.mouseY - 20;
    });
    stage.addChild(mousePointer);
}
function removeMousePointer(){
    stage.removeChild(mousePointer);
}
function onKeyDown(e) {
    // keystroke for "P" Button activating the menu screen
    if (e.keyCode == 80) onMenu();
    if (e.keyCode == 27) onResumeGame();
}
// --------- CLOUDS --------

// --------- BUG : If user clicks new game before all clouds are displayed on start screen, they will appear on the arena screen --------
function addCloudsInfoScreen(numClouds){
    // set interval
    var cloudInterval = setInterval(addInfoCloud, 5000);
    var cloudCount = 1;
    function addInfoCloud() {
        var cloud = new Cloud(stage, assetManager);
        cloud.getInfoScreenClouds();
        if(cloudCount === numClouds){
            clearInterval(cloudInterval);
        }else{        
            cloudCount ++;
            console.log(cloudCount + "Info Function");
        }     
    }
};
function addCloudsArenaScreen(numClouds){
    // set interval
    var cloudInterval = setInterval(addArenaCloud, 5000);
    var cloudCount = 1;
    function addArenaCloud() {
        var cloud = new Cloud(stage, assetManager);
        cloud.getArenaClouds(); 
        if(cloudCount === numClouds){
            clearInterval(cloudInterval);
        }else{        
            cloudCount ++;
            console.log(cloudCount + "Arena Function");
        } 
    }
};
// --------- END CLOUDS --------
// --------- TICK --------
function onTick(e) {
    // TESTING FPS
    document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

    // update the stage!
    stage.update();
}

