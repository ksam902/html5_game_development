//page variables
var btnBegin;
var infoCloudCount;
var infoCloudInterval;
var cloudContainer;
var infoBirdCount;
var infoBirdInterval;
var infoBirdContainer;
var arenaCloudCount;
var arenaCloudInterval;
var mouseX;
var mouseY;

// game variables
var stage = null;
var canvas = null;
var mousePointer;
// Keys
var downKey = false;
var upKey = false;
var leftKey = false;
var rightKey = false;
var key;

// frame rate of game
var frameRate = 30;

// game objects
var assetManager = null;
var arenaBird;
var bird = null;
var birds=[];
var birdDelay;
var birdTimer;
var birdsShot;
var willy = null;
var willy2 = null;
var cloud;
var arrow = null;
var arrows=[];
var shootInterval;
//START SCREEN ASSETS
var arrowPointer;

//arena assets
var livesText;

var killsText;
var numKills;

var enemiesText;
var numEnemiesText;

var waveText;
var numWaveText;
var scoreText;

var arrowsText;
var arrowsNumText;

//------game arena stats
var numWave;
var numLives;
var numEnemies;
var numArrows;
// increase this every wave
var targetNumEnemies

//info assets
var accuracy;
var resumeText;
var restartText;
var startBackground;
var arenaBackground;
var infoBackground;
var instructionsBackground;
var gameTitle;
var infoTitle;
var newGame;
var resumeGame;
var quitGame;
var instructions;
var btnMenu;
var btnThanks;
var developerCredits;

var direction;
//Gameplay Booleans
var isGameOver = false;
//collision detection
collisionMethod = ndgmr.checkPixelCollision;
window.alphaThresh = 0.75;

// ------------------------------------------------------------ event handlers
function onInit() {
    // get reference to canvas
    canvas = document.getElementById("stage");
    // set canvas to as wide/high as the browser window
    canvas.width = 600;
    canvas.height = 600;
    // create stage object
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(10);

    cloudContainer = new createjs.Container();
    infoBirdContainer = new createjs.Container();

    // construct preloader object to load spritesheet and sound assets
    assetManager = new AssetManager();
    stage.addEventListener("onAssetLoaded", onProgress);
    stage.addEventListener("onAllAssetsLoaded", onReady);
    // load the assets
    assetManager.loadAssets(manifest);
    btnBegin = document.getElementById("btnBegin");
    btnBegin.disabled = true;
}

function onProgress(e) { console.log("progress: " + assetManager.getProgress());}

function onReady(e) {

    // Adding aimer for the mouse
    mousePointer = assetManager.getSprite("assets");
    mousePointer.gotoAndStop("mousePointer");
    addMousePointer();
    canvas.addEventListener("mouseenter", addMousePointer);
    canvas.addEventListener("mouseout", removeMousePointer);

    //enable the begin button when the game is ready
    btnBegin.disabled = false;
    $('#btnBegin').click(function(){
        //$("div#main").fadeIn(800);
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 750);
        btnBegin.disabled = true;
    });

    //clear stage
    stage.removeAllChildren();
    // kill event listener
    stage.removeEventListener("onAssetLoaded", onProgress);
    stage.removeEventListener("onAllAssetsLoaded", onReady);

    loadStartScreen();

     // setup event listeners for keyboard keys
    document.addEventListener("keydown", onKeyDownStartScreen);
    document.removeEventListener("keydown", onKeyDownInfoScreen);
    // startup the ticker
    createjs.Ticker.setFPS(frameRate);
    createjs.Ticker.addEventListener("tick", onTick);
}
function onNewGame(e) {

    stage.removeAllChildren();
    infoBirdContainer.removeAllChildren();
    cloudContainer.removeAllChildren();

    // remove/setup event listeners for keyboard keys
    document.removeEventListener("keydown", onKeyDownStartScreen);
    document.removeEventListener("keydown", onKeyDownInfoScreen);
    document.addEventListener("keydown", onKeyDownArenaScreen);

    //add assets
    // RESET Game Variables
    numWave = 1;
    //start game with 10 enemies
    targetNumEnemies = 3;
    // decrease numEnemies each kill - at the start of a wave the numEnemies is set to the new targetNumEnemies
    numEnemies = targetNumEnemies;
    // construct and setup birdTimer to drop birds on displaylist
    birdDelay = 2000;
    birdTimer = window.setInterval(onAddBird, birdDelay);

    loadArenaScreen();
    addMousePointer();

    // -- WILLY --
    willy = new Willy(stage, assetManager);
    willy.resetMe();
    willy.setXPosYPos(275, 350);
    document.addEventListener("keydown", keyDownMove);
    document.addEventListener("keyup", keyUpMove);


    // --- SHOOTING FUNCTION - Mouse Pointer ----
    //delay shooting ability - will prevent arrow from being fired when the arena intially loads
    shootInterval = setTimeout(function(){
        stage.addEventListener("click", function(e) {
            willy.increaseArrowCount();
            mouseX = Math.floor(e.stageX);
            mouseY = Math.floor(e.stageY);
        });
        stage.addEventListener("click", shootProjectile);
        clearTimeout(shootInterval);
    }, 1000);
}
function keyDownMove(e){
    key = e.which;
    if(key == "37" || key == "65"){
        //direction = "left";
        leftKey = true;
        e.preventDefault();
    } else if(key == "38" || key == "87"){
        //direction = "up";
        upKey = true;
        e.preventDefault();
    }else if(key == "39" || key == "68"){
        //direction = "right";
        rightKey = true;
        e.preventDefault();
    }else if(key == "40" || key == "83"){
        //direction = "down";
        downKey = true;
        e.preventDefault();
    }
}
function keyUpMove(e){
    key = e.which;
    if(key == "37" || key == "65"){
        //direction = "left";
        leftKey = false;
        e.preventDefault();
    } else if(key == "38" || key == "87"){
        //direction = "up";
        upKey = false;
        e.preventDefault();
    }else if(key == "39" || key == "68"){
        //direction = "right";
        rightKey = false;
        e.preventDefault();
    }else if(key == "40" || key == "83"){
        //direction = "down";
        downKey = false;
        e.preventDefault();
    }
}
function moveWilly(){
    if(leftKey){
        willy.moveLeft();
    } else if(upKey){
        willy.moveUp();
    }else if(rightKey){
        willy.moveRight();
    }else if(downKey){
        willy.moveDown();
    }
}
function onMenu(e){
    stage.removeEventListener("click", shootProjectile);
    stage.removeEventListener("click", updateNumArrows);

    infoBirdContainer.removeAllChildren();
    cloudContainer.removeAllChildren();
    clearInterval(arenaCloudInterval);
    clearInterval(birdTimer);
    document.removeEventListener("keydown", onKeyDownArenaScreen);
    document.addEventListener("keydown", onKeyDownInfoScreen);
    //load Info screen assets
    loadInfoScreen();

    addMousePointer();
}
function onResumeGame(e){
    onNewGame();
}
function onQuitGame(e){
    onReady();
    addMousePointer();
}
function onGameOver(e){

}
function onInstructions(e){
    instructionsBackground = assetManager.getSprite("assets");
    instructionsBackground.gotoAndStop("instructionsBackground");
    stage.addChild(instructionsBackground);

    btnThanks = assetManager.getSprite("assets");
    btnThanks.x = 210;
    btnThanks.y = 450;
    btnThanks.gotoAndStop("btnThanks");
    stage.addChild(btnThanks);
    btnThanks.addEventListener("click", function(){
        stage.removeChild(instructionsBackground);
        stage.removeChild(btnThanks);
    });
    addMousePointer();
}
function onMenuHover(e){
    stage.removeChild("btnMenu");
}
function addMousePointer(){
    $( "#stage" ).mousemove(function( event ) {
        mousePointer.x = stage.mouseX - 20;
        mousePointer.y = stage.mouseY - 20;
    });
    stage.addChild(mousePointer);
}
function removeMousePointer(){
    stage.removeChild(mousePointer);
}
// --------- LOAD SCREEN ASSETS --------

function loadStartScreen(){

    //Add in Clear Interval Function and pass it desired interval
    clearInterval(infoCloudInterval);
    clearInterval(infoBirdInterval);
    clearInterval(arenaCloudInterval);

    startBackground = assetManager.getSprite("assets");
    startBackground.gotoAndStop("startBackground");
    stage.addChild(startBackground);

    stage.addChild(cloudContainer);
    stage.addChild(infoBirdContainer);

    willy = new Willy(stage, assetManager);
    willy.resetMe();
    willy.setXPosYPos(275, 450);

    //add clouds and backgrounds
    addBirdsInfoScreen(5);
    addCloudsInfoScreen(5);

    gameTitle = assetManager.getSprite("assets");
    gameTitle.x = 120;
    gameTitle.y = 125;
    gameTitle.gotoAndStop("gameTitleText");
    stage.addChild(gameTitle);

    arrowPointer = assetManager.getSprite("assets");
    arrowPointer.x = 220;
    arrowPointer.y = 339;
    arrowPointer.gotoAndStop("arrowPointer");
    stage.addChild(arrowPointer);

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
    developerCredits.x = 235;
    developerCredits.y = 575;
    developerCredits.gotoAndStop("developerText");
    stage.addChild(developerCredits);
}
function loadArenaScreen(){
    //remove and reset assets
    stage.removeAllChildren();
    clearInterval(infoCloudInterval);
    clearInterval(infoBirdInterval);

    arenaBackground = assetManager.getSprite("assets");
    arenaBackground.gotoAndStop("arenaBackground");
    stage.addChild(arenaBackground);

    //add clouds
    stage.addChild(cloudContainer);
    addCloudsArenaScreen(4);

    // -- Stats Assets
    livesText = assetManager.getSprite("assets");
    livesText.x = 25;
    livesText.y = 10;
    livesText.gotoAndStop("livesText");
    stage.addChild(livesText);

    numLives = new createjs.Text(willy.getLives().toString(), "14px Noteworthy", "FF7700");
    numLives.x = 85;
    numLives.y = 14;
    stage.addChild(numLives);

    killsText = assetManager.getSprite("assets");
    killsText.x = 100;
    killsText.y = 10;
    killsText.gotoAndStop("killsText");
    stage.addChild(killsText);

    numKills = new createjs.Text(willy.getKillCount().toString(), "14px Noteworthy", "FF7700");
    numKills.x = 155;
    numKills.y = 14;
    stage.addChild(numKills);

    enemiesText = assetManager.getSprite("assets");
    enemiesText.x = 175;
    enemiesText.y = 10;
    enemiesText.gotoAndStop("birdsText");
    stage.addChild(enemiesText);

    numEnemiesText = new createjs.Text(numEnemies.toString(), "14px Noteworthy", "FF7700");
    numEnemiesText.x = 320;
    numEnemiesText.y = 14;
    stage.addChild(numEnemiesText);

    arrowsText = assetManager.getSprite("assets");
    arrowsText.x = 340;
    arrowsText.y = 11;
    arrowsText.gotoAndStop("arrowsText");
    stage.addChild(arrowsText);

    numArrows = new createjs.Text(willy.getArrowCount().toString(), "14px Noteworthy", "FF7700");
    numArrows.x = 460;
    numArrows.y = 14;
    stage.addChild(numArrows);

    waveText = assetManager.getSprite("assets");
    waveText.x = 480;
    waveText.y = 11;
    waveText.gotoAndStop("waveText");
    stage.addChild(waveText);

    numWaveText = new createjs.Text(numWave, "14px Noteworthy", "FF7700");
    numWaveText.x = 550;
    numWaveText.y = 14;
    stage.addChild(numWaveText);

    scoreText = assetManager.getSprite("assets");
    scoreText.x = 200;
    scoreText.y = 550;
    scoreText.gotoAndStop("scoreText");
    stage.addChild(scoreText);

    btnMenu = assetManager.getSprite("assets");
    btnMenu.x = 500;
    btnMenu.y = 515;
    btnMenu.gotoAndStop("menuButtonUp");
    stage.addChild(btnMenu);
    // setup event listener to go to pause screen
    btnMenu.addEventListener("click", onMenu);
    //btnMenu.addEventListener("mouseover", onMenuHover);
    stage.addChild(developerCredits);
}
function loadInfoScreen(){
    //remove all assets and intervals
    stage.removeAllChildren();

    //new background
    infoBackground = assetManager.getSprite("assets");
    infoBackground.gotoAndStop("infoBackground");
    stage.addChild(infoBackground);

    stage.addChild(cloudContainer);
    stage.addChild(infoBirdContainer);
    addCloudsInfoScreen(4);
    addBirdsInfoScreen(4);

    stage.addChild(arrowPointer);

    if(isGameOver){
        infoTitle = new createjs.Text("Womp Womp. Game Over!", "24px Noteworthy", "FF7700");
        arrowPointer.x = 220;
        arrowPointer.y = 336;

    }else{
        infoTitle = assetManager.getSprite("assets");
        infoTitle.gotoAndStop("pauseText");

        arrowPointer.x = 220;
        arrowPointer.y = 311;

        resumeGame = assetManager.getSprite("assets");
        resumeGame.x = 260;
        resumeGame.y = 300;
        resumeGame.gotoAndStop("resumeText");
        stage.addChild(resumeGame);
        // setup event listener to Resume Game
        resumeGame.addEventListener("click", onResumeGame);
    }
        infoTitle.x = 200;
        infoTitle.y = 75;
        stage.addChild(infoTitle);

    restartText = assetManager.getSprite("assets");
    restartText.x = 260;
    restartText.y = 325;
    restartText.gotoAndStop("restartText");
    stage.addChild(restartText);

    // Add Instructions Back In
    stage.addChild(instructions);

    quitGame = assetManager.getSprite("assets");
    quitGame.x = 260;
    quitGame.y = 375;
    quitGame.gotoAndStop("quitText");
    stage.addChild(quitGame);
    // setup event listener to Quit Game
    quitGame.addEventListener("click", onQuitGame);

    numKills = new createjs.Text(willy.getKillCount().toString(), "12px Noteworthy", "FF7700");
    numKills.x = 175;
    numKills.y = 265;
    stage.addChild(numKills);

    accuracy = new createjs.Text(willy.getAccuracy().toString() + "%", "12px Noteworthy", "FF7700");
    accuracy.x = 165;
    accuracy.y = 290;
    stage.addChild(accuracy);

    numWave = new createjs.Text("1", "12px Noteworthy", "FF7700");
    numWave.x = 175;
    numWave.y = 315;
    stage.addChild(numWave);

    stage.addChild(developerCredits);
}
function loadGameOverScreen(){
}
// --------- END LOAD SCREEN ASSETS --------
// --------- SCREEN KEYDOWN FUNCTIONS --------
function onKeyDownStartScreen(e) {
    // keystroke for "P" Button activating the menu screen
    if (e.keyCode == 78) onNewGame();
    if (e.keyCode == 73) onInstructions();
    if(e.keyCode == "38"){
        //direction = "up";
        arrowPointer.y = 339;
        e.preventDefault();
    } else if(e.keyCode == "40"){
        //direction = "down";
        arrowPointer.y = 364;
        e.preventDefault();
    }
    if(e.keyCode == "13" && arrowPointer.y === 339){
        onNewGame();
    }
    if(e.keyCode == "13" && arrowPointer.y === 364){
        onInstructions();
    }
}
function onKeyDownArenaScreen(e) {
    // keystroke for "P" Button activating the menu screen
    if (e.keyCode == 77) onMenu();
    // if (e.keyCode == 27 || e.keyCode == 82) onResumeGame();

}
function onKeyDownInfoScreen(e) {
    // keystroke for "P" Button activating the menu screen
    if (e.keyCode == 81) onReady();
    if (e.keyCode == 73) onInstructions();
    if (e.keyCode == 27 || e.keyCode == 82) onResumeGame();

    if(e.keyCode == "38"){
        //direction = "up";
        switch (arrowPointer.y){
            case 386:
                arrowPointer.y = 361;
                break;
            case 361:
                arrowPointer.y = 336;
                break;
            case 336:
                if(!isGameOver){
                    arrowPointer.y = 311;
                }
                break;
            default:
        }
        e.preventDefault();
    } else if(e.keyCode == "40"){
        //direction = "down";
        switch (arrowPointer.y){
            case 311:
                arrowPointer.y = 336;
                break;
            case 336:
                arrowPointer.y = 361;
                break;
            case 361:
                arrowPointer.y = 386;
                break;
            default:
        }
        e.preventDefault();
    } else if(e.keyCode == "13"){
        //direction = "down";
        //var textArray = [311, 336, 361, 386];
        switch (arrowPointer.y){
            case 311:
                onResumeGame();
                break;
            case 336:
                onResumeGame();;
                break;
            case 361:
                onInstructions();
                break;
            default:
                onReady();
        }
    }

}
function onKeyDownGameOverScreen(e){
}
// --------- END KEYDOWN FUNCTIONS --------
// --------- UPDATE ARENA STATS --------
function updateNumArrows(){

    stage.removeChild(numArrows);
    numArrows = new createjs.Text(willy.getArrowCount().toString(), "14px Noteworthy", "FF7700");
    numArrows.x = 460;
    numArrows.y = 14;
    stage.addChild(numArrows);
}
function updateLivesCount(){

    stage.removeChild(numLives);
    numLives = new createjs.Text(willy.getLives().toString(), "14px Noteworthy", "FF7700");
    numLives.x = 85;
    numLives.y = 14;
    stage.addChild(numLives);
}
// --------- END UPDATE ARENA STATS --------
// --------- CLOUDS --------

function addCloudsInfoScreen(numClouds){
    infoCloudCount = 1;
    // set interval
    infoCloudInterval = setInterval(addInfoCloud, 6000);
    function addInfoCloud() {
        if(infoCloudCount <= numClouds){
            var cloud = new Cloud(stage, cloudContainer, assetManager);
            cloud.getInfoScreenClouds();
            infoCloudCount ++;
        }else{
            clearInterval(infoCloudInterval);
        }
    }
};
function addCloudsArenaScreen(numClouds){
    arenaCloudCount = 1;
    // set interval
    arenaCloudInterval = setInterval(addArenaCloud, 5000);
    function addArenaCloud() {
        if(arenaCloudCount <= numClouds){
            var cloud = new Cloud(stage, cloudContainer, assetManager);
            cloud.getArenaClouds();
            arenaCloudCount ++;
        }else{
            clearInterval(arenaCloudInterval);
        }
    }
};
// --------- END CLOUDS --------

// --------- BIRDS --------
function addBirdsInfoScreen(numBirds){
    infoBirdCount = 1;
    // set interval
    infoBirdInterval = setInterval(addInfoBird, 4000);
    function addInfoBird() {
        if(infoBirdCount <= numBirds){
            var bird = new Bird(stage, infoBirdContainer, assetManager, willy);
            bird.getInfoScreenBirds();
            infoBirdCount ++;
        }else{
            clearInterval(infoBirdInterval);
        }
    }
}
function onAddBird(e) {
    arenaBird = new Bird(stage, infoBirdContainer, assetManager, willy, arrows);
    arenaBird.setupMe();
    console.log("Bird Added : " + birdDelay);
}
// --------- END BIRDS --------
// --------- WILLY --------
function shootProjectile(){
    // add arrow on mouse click to the stage
    arrow = new Projectile(stage, assetManager);
    arrow.setupMe(mouseX, mouseY, willy.getWillyX(), willy.getWillyY());
    arrows.push(arrow);

    stage.removeChild(numArrows);
    numArrows = new createjs.Text(willy.getArrowCount().toString(), "14px Noteworthy", "FF7700");
    numArrows.x = 460;
    numArrows.y = 14;
    stage.addChild(numArrows);
}
// --------- END WILLY --------
// --------- TICK --------

function onTick(e) {
    // TESTING FPS
    document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();
    moveWilly();
    if(willy.getIsBirdKilled()){
        stage.removeChild(numKills);
        numKills = new createjs.Text(willy.getKillCount().toString(), "14px Noteworthy", "FF7700");
        numKills.x = 155;
        numKills.y = 14;
        stage.addChild(numKills);

        numEnemies -= 1;
        if(numEnemies === 0){
            alert("End Of Wave!");
            //increase numWave
            stage.removeChild(numWaveText);
            numWaveText = new createjs.Text((numWave+=1), "14px Noteworthy", "FF7700");
            numWaveText.x = 550;
            numWaveText.y = 14;
            stage.addChild(numWaveText);
            //increase number of enemies for wave
            targetNumEnemies +=1;
            numEnemies = targetNumEnemies;
            //increase bird generation
            clearInterval(birdTimer);
            birdDelay -= 100;
            birdTimer = window.setInterval(onAddBird, birdDelay);
        }

        stage.removeChild(numEnemiesText);
        numEnemiesText = new createjs.Text(numEnemies, "14px Noteworthy", "FF7700");
        numEnemiesText.x = 320;
        numEnemiesText.y = 14;
        stage.addChild(numEnemiesText);
        willy.setIsBirdKilled(false);
    }else if(willy.getIsWillyKilled()){
        willy.decreaseLivesCount();
        stage.removeChild(numLives);
        numLives = new createjs.Text(willy.getLives().toString(), "14px Noteworthy", "FF7700");
        numLives.x = 85;
        numLives.y = 14;
        stage.addChild(numLives);
        willy.setIsWillyKilled(false);
        if(willy.getLives() === 0 ){
            isGameOver = true;
            onMenu();
            willy.setLives(3);
        }
    }
    // update the stage!
    stage.update();
}

