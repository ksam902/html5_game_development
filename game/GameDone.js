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
var birdDelay;
var birdTimer;
var birdsShot;
//var willy = null;
var willy2 = null;
var cloud;

//START SCREEN ASSETS
var arrowPointer;

//arena assets
var livesText;
var killsText;
var enemiesText;
var waveText;
var scoreText;

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
    var willy = new Willy(stage, assetManager);
    willy.resetMe();
    willy.setXPosYPos(275, 350);
    //Lets add the keyboard controls now
    $(document).keydown(function(e){
        var key = e.which;
        //We will add another clause to prevent reverse gear
        if(key == "37"){
            //direction = "left";
            //willy.scaleY = -1; 
            willy.moveLeft();
            e.preventDefault(); 
        } else if(key == "38"){
            //direction = "up"; 
            willy.moveUp();
            e.preventDefault();
        }else if(key == "39"){
            //direction = "right";
            //willy.scaleY = 1;
            willy.moveRight();
            e.preventDefault();
        }else if(key == "40"){
            //direction = "down"; 
            willy.moveDown();
            e.preventDefault();
        }
    });

    // construct and setup bugtimer to drop bugs on displaylist
    birdDelay = 2000;
    birdTimer = window.setInterval(onAddBird, birdDelay);

    // --- SHOOTING FUNCTION - Mouse Pointer ----
        $('#stage').click(function(){
            $('#stage').mousemove(function(e){
                //console.log((e.pageX - 413) + " : " + (e.pageY - 385));
            });
        });
        stage.addEventListener("click", function(e) {
            mouseX = Math.floor(e.stageX);
            mouseY = Math.floor(e.stageY);
            console.log("Arrow Added " + Math.floor(e.stageX) + " : " + Math.floor(e.stageY));
            shootProjectile(Math.floor(e.stageX), Math.floor(e.stageY), willy);
        });
        // document.addEventListener("keydown", function(e){
        //         if (e.keyCode == 32) {
        //           shootProjectile(mouseX, mouseY, willy);
        //         }
        // });        
        
    direction = "right";
}
function onMenu(e){
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
    console.log("Menu Button Clicked");
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
    //alert("Menu Hover Button");
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

    //add clouds and backgrounds
    addBirdsInfoScreen(5); 
    addCloudsInfoScreen(5);   

    gameTitle = assetManager.getSprite("assets");
    gameTitle.x = 120;
    gameTitle.y = 125;
    gameTitle.gotoAndStop("gameTitleText");
    stage.addChild(gameTitle);

    var willy2 = new Willy(stage, assetManager);
    willy2.resetMe();
    willy2.setXPosYPos(275, 450);

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
    livesText.x = 50;
    livesText.y = 10;
    livesText.gotoAndStop("livesText");
    stage.addChild(livesText);

    killsText = assetManager.getSprite("assets");
    killsText.x = 125;
    killsText.y = 10;
    killsText.gotoAndStop("killsText");
    stage.addChild(killsText);

    enemiesText = assetManager.getSprite("assets");
    enemiesText.x = 200;
    enemiesText.y = 10;
    enemiesText.gotoAndStop("birdsText");
    stage.addChild(enemiesText);

    waveText = assetManager.getSprite("assets");
    waveText.x = 375;
    waveText.y = 11;
    waveText.gotoAndStop("waveText");
    stage.addChild(waveText);

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
    // healthIcon = assetManager.getSprite("assets");
    // healthIcon.x = 125;
    // healthIcon.y = 500;
    // healthIcon.gotoAndPlay("heartPulse");
    // stage.addChild(healthIcon);

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
            var bird = new Bird(stage, assetManager);
            bird.getInfoScreenBirds();        
            //console.log(infoBirdCount + "/" + numBirds + " Bird Info Function");
            infoBirdCount ++;
        }else{        
            clearInterval(infoBirdInterval);            
        } 
    }
}
function onAddBird(e) {
    // add bug to the stage
    var arenaBird = new Bird(stage, assetManager);
    arenaBird.setupMe();
    //console.log("Bird Added");
}
// --------- END BIRDS --------
// --------- WILLY --------
function shootProjectile(mouseX, mouseY, willy){
    // add arrow on button click to the stage
    //willy.shoot();
    var arrow = new Projectile(stage, assetManager);
    arrow.setupMe(mouseX, mouseY, willy.getWillyX(), willy.getWillyY());
}
// --------- END WILLY --------
// --------- TICK --------
function onTick(e) {
    // TESTING FPS
    document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

    // update the stage!
    stage.update();
}

