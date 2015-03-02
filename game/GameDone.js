//page variables
var btnBegin;
var infoCloudCount;
var infoCloudInterval;
var infoBirdCount;
var infoBirdInterval;
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
var bird = null;
var birdDelay;
var birdTimer;
var birdsShot;
var willy = null;
var willy2 = null;
var cloud;
var arrow = null;
//START SCREEN ASSETS
var arrowPointer;

//arena assets
var livesText;
var killsText;
var enemiesText;
var waveText;
var scoreText;

var arrowsText;
var arrowsNumText;
var arrowCount;

var waveCount;
var livesCount;

//pause assets
var resumeText;
var restartText;
var startBackground;
var arenaBackground;
var infoBackground;
var instructionsBackground;
var gameTitle;
var pauseTitle;
var newGame;
var resumeGame;
var quitGame;
var instructions;
var btnMenu;
var btnThanks;
var developerCredits;

// -- Arena variables
var healthIcon;
var healthBar;


var direction;

// ------------------------------------------------------------ event handlers
function onInit() {

    //console.log(">> initializing");

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
    //console.log(">> setup");

    // kill event listener
    stage.removeEventListener("onAssetLoaded", onProgress);
    stage.removeEventListener("onAllAssetsLoaded", onReady);

    loadStartScreen();

     // setup event listeners for keyboard keys
    document.addEventListener("keydown", onKeyDownStartScreen);   
    document.removeEventListener("keydown", onKeyDownPauseScreen);
    // startup the ticker
    createjs.Ticker.setFPS(frameRate);
    createjs.Ticker.addEventListener("tick", onTick);
}
function onNewGame(e) {

    stage.removeAllChildren();

    // remove/setup event listeners for keyboard keys
    document.removeEventListener("keydown", onKeyDownStartScreen);
    document.removeEventListener("keydown", onKeyDownPauseScreen);
    document.addEventListener("keydown", onKeyDownArenaScreen);

    //add assets
    loadArenaScreen();
    addMousePointer();

    // -- WILLY --
    willy = new Willy(stage, assetManager);
    willy.resetMe();
    willy.setXPosYPos(275, 350);
    document.addEventListener("keydown", keyDownMove);
    document.addEventListener("keyup", keyUpMove);

    // construct and setup bugtimer to drop bugs on displaylist
    birdDelay = 2000;
    birdTimer = window.setInterval(onAddBird, birdDelay);

    // --- SHOOTING FUNCTION - Mouse Pointer ----
        $('#stage').click(function(){
            $('#stage').mousemove(function(e){
            });
        });
        stage.addEventListener("click", function(e) {
            willy.increaseArrowCount();
            mouseX = Math.floor(e.stageX);
            mouseY = Math.floor(e.stageY);
        });
        stage.addEventListener("click", shootProjectile);
        stage.addEventListener("click", updateArrowCount);        
}
function keyDownMove(e){   
    key = e.which;    
    if(key == "37"){
        //direction = "left";
        leftKey = true;
        e.preventDefault();
    } else if(key == "38"){
        //direction = "up"; 
        upKey = true;
        e.preventDefault();
    }else if(key == "39"){
        //direction = "right";
        rightKey = true;
        e.preventDefault();
    }else if(key == "40"){
        //direction = "down"; 
        downKey = true;
        e.preventDefault();
    }
}
function keyUpMove(e){
    key = e.which;    
    if(key == "37"){
        //direction = "left";
        leftKey = false;
        e.preventDefault();
    } else if(key == "38"){
        //direction = "up"; 
        upKey = false;
        e.preventDefault();
    }else if(key == "39"){
        //direction = "right";
        rightKey = false;
        e.preventDefault();
    }else if(key == "40"){
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
    stage.removeEventListener("click", updateArrowCount);
    //remove all assets and intervals
    stage.removeAllChildren();
    clearInterval(arenaCloudInterval);
    clearInterval(birdTimer);
    document.removeEventListener("keydown", onKeyDownArenaScreen);
    document.addEventListener("keydown", onKeyDownPauseScreen);
    //load Pause screen assets
    loadPauseScreen();

    addMousePointer();
    // setup event listeners for keyboard keys
    document.addEventListener("keydown", onKeyDownPauseScreen);
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
    addCloudsArenaScreen(4);

    // -- Stats Assets
    livesText = assetManager.getSprite("assets");
    livesText.x = 25;
    livesText.y = 10;
    livesText.gotoAndStop("livesText");
    stage.addChild(livesText);

    livesCount = new createjs.Text(willy.getLives().toString(), "14px Noteworthy", "FF7700");
    livesCount.x = 85;
    livesCount.y = 14;
    stage.addChild(livesCount);

    killsText = assetManager.getSprite("assets");
    killsText.x = 100;
    killsText.y = 10;
    killsText.gotoAndStop("killsText");
    stage.addChild(killsText);

    enemiesText = assetManager.getSprite("assets");
    enemiesText.x = 175;
    enemiesText.y = 10;
    enemiesText.gotoAndStop("birdsText");
    stage.addChild(enemiesText);

    arrowsText = assetManager.getSprite("assets");
    arrowsText.x = 340;
    arrowsText.y = 11;
    arrowsText.gotoAndStop("arrowsText");
    stage.addChild(arrowsText);

    waveText = assetManager.getSprite("assets");
    waveText.x = 480;
    waveText.y = 11;
    waveText.gotoAndStop("waveText");
    stage.addChild(waveText);

    waveCount = new createjs.Text("1", "14px Noteworthy", "FF7700");
    waveCount.x = 550;
    waveCount.y = 14;
    stage.addChild(waveCount);

    scoreText = assetManager.getSprite("assets");
    scoreText.x = 200;
    scoreText.y = 500;
    scoreText.gotoAndStop("scoreText");
    stage.addChild(scoreText);

    // -- Health Elements
    healthIcon = assetManager.getSprite("assetsCharacters");
    healthIcon.x = 125;
    healthIcon.y = 500;
    healthIcon.gotoAndPlay("heartBeat");
    stage.addChild(healthIcon);

    healthBar = assetManager.getSprite("assets");
    healthBar.x = 200;
    healthBar.y = 525;
    healthBar.gotoAndStop("healthBarFull");
    stage.addChild(healthBar);

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
function loadPauseScreen(){

    //new background
    infoBackground = assetManager.getSprite("assets");
    infoBackground.gotoAndStop("infoBackground");
    stage.addChild(infoBackground);

    addCloudsInfoScreen(4);   
    addBirdsInfoScreen(4);

    pauseTitle = assetManager.getSprite("assets");
    pauseTitle.x = 200;
    pauseTitle.y = 75;
    pauseTitle.gotoAndStop("pauseText");
    stage.addChild(pauseTitle);

    stage.addChild(arrowPointer);
    arrowPointer.x = 220;
    arrowPointer.y = 311;

    resumeGame = assetManager.getSprite("assets");
    resumeGame.x = 260;
    resumeGame.y = 300;
    resumeGame.gotoAndStop("resumeText");
    stage.addChild(resumeGame);
    // setup event listener to Resume Game
    resumeGame.addEventListener("click", onResumeGame);

    restartText = assetManager.getSprite("assets");
    restartText.x = 260;
    restartText.y = 325;
    restartText.gotoAndStop("restartText");
    stage.addChild(restartText);
    // setup event listener to Resume Game
    resumeGame.addEventListener("click", onResumeGame);    

    // Add Instructions Back In
    stage.addChild(instructions);

    quitGame = assetManager.getSprite("assets");
    quitGame.x = 260;
    quitGame.y = 375;
    quitGame.gotoAndStop("quitText");
    stage.addChild(quitGame);
    // setup event listener to Quit Game
    quitGame.addEventListener("click", onQuitGame);

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
function onKeyDownPauseScreen(e) {
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
                arrowPointer.y = 311;
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
function updateArrowCount(){
    
    stage.removeChild(arrowCount);
    arrowCount = new createjs.Text(willy.getArrowCount().toString(), "14px Noteworthy", "FF7700");
    arrowCount.x = 460;
    arrowCount.y = 14;
    stage.addChild(arrowCount);
}
function updateLivesCount(){
    
    stage.removeChild(livesCount);
    livesCount = new createjs.Text(willy.getLives().toString(), "14px Noteworthy", "FF7700");
    livesCount.x = 85;
    livesCount.y = 14;
    stage.addChild(livesCount);
}

// --------- END UPDATE ARENA STATS --------
// --------- CLOUDS --------

function addCloudsInfoScreen(numClouds){
    infoCloudCount = 1;
    // set interval
    infoCloudInterval = setInterval(addInfoCloud, 6000);
    function addInfoCloud() {
        if(infoCloudCount <= numClouds){
            var cloud = new Cloud(stage, assetManager);
            cloud.getInfoScreenClouds();            
            //console.log(infoCloudCount + "/" + numClouds +  " Cloud Info Function");
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
            var cloud = new Cloud(stage, assetManager);
            cloud.getArenaClouds(); 
            //console.log(arenaCloudCount + "/" + numClouds + " Cloud Arena Function");
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
            var bird = new Bird(stage, assetManager, willy);
            bird.getInfoScreenBirds();        
            //console.log(infoBirdCount + "/" + numBirds + " Bird Info Function");
            infoBirdCount ++;
        }else{        
            clearInterval(infoBirdInterval);            
        } 
    }
}
function onAddBird(e) {
    var arenaBird = new Bird(stage, assetManager, willy, arrow);
    arenaBird.setupMe();
}
// --------- END BIRDS --------
// --------- WILLY --------
function shootProjectile(){
    // add arrow on mouse click to the stage
    arrow = new Projectile(stage, assetManager);
    arrow.setupMe(mouseX, mouseY, willy.getWillyX(), willy.getWillyY());
}
// --------- END WILLY --------
// --------- TICK --------
function onTick(e) {
    // TESTING FPS
    document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();
    moveWilly();

    // update the stage!
    stage.update();
}

