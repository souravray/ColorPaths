
// This is the constructor for the game
MyGame = function()
{
     // Make sure to call the constructor for the superclass
    MyGame.superclass.constructor.call(this);

    //game entities
    this.mBoardObj;
    this.mDrawtoolObj;
    this.currentLevel;
    this.currentLevelSize;
    this.remainingTimeText;
    this.pathCompleted;
    this.scoreText;
    this.totalTimeForLevel = 50;
    this.scoreText;
    this.score = 0;
    this.stageStatus = {
        LEVEL_FAILED:"level_failed",
        LEVEL_PASS:"level_pass",
        QUIT_GAME:"quit_game",
        GAME_COMPLETE:"game_complete"
    };
    this.gameTotalScore = 0;
    this.score = 0;
    this.gamePlayStatus = this.stageStatus.LEVEL_FAILED;
    // Game Images that are required to start the game
    var gameImages = [ 
    //loading basic tiles and color source tiles
    	{id:'blank', url:'assets/images/tile.png'},
        {id:'pause_button',url:'assets/images/pause-button.png'},
        {id:'pausescreen_resume_button',url:'assets/images/resume-button.png'},
        {id:'pink', url:'assets/images/tile-pink-source.png'},
        {id:'pink-up', url:'assets/images/tile-pink-source-path-up.png'},
        {id:'pink-down', url:'assets/images/tile-pink-source-path-down.png'},
        {id:'pink-right', url:'assets/images/tile-pink-source-path-right.png'},
        {id:'pink-left', url:'assets/images/tile-pink-source-path-left.png'},
        {id:'red', url:'assets/images/tile-red-source.png'},
        {id:'red-up', url:'assets/images/tile-red-source-path-up.png'},
        {id:'red-down', url:'assets/images/tile-red-source-path-down.png'},
        {id:'red-right', url:'assets/images/tile-red-source-path-right.png'},
        {id:'red-left', url:'assets/images/tile-red-source-path-left.png'},
        {id:'yellow', url:'assets/images/tile-yellow-source.png'},
        {id:'yellow-up', url:'assets/images/tile-yellow-source-path-up.png'},
        {id:'yellow-down', url:'assets/images/tile-yellow-source-path-down.png'},
        {id:'yellow-right', url:'assets/images/tile-yellow-source-path-right.png'},
        {id:'yellow-left', url:'assets/images/tile-yellow-source-path-left.png'},
        {id:'green', url:'assets/images/tile-green-source.png'},
        {id:'green-up', url:'assets/images/tile-green-source-path-up.png'},
        {id:'green-down', url:'assets/images/tile-green-source-path-down.png'},
        {id:'green-right', url:'assets/images/tile-green-source-path-right.png'},
        {id:'green-left', url:'assets/images/tile-green-source-path-left.png'},
        {id:'blue', url:'assets/images/tile-blue-source.png'},
        {id:'blue-up', url:'assets/images/tile-blue-source-path-up.png'},
        {id:'blue-down', url:'assets/images/tile-blue-source-path-down.png'},
        {id:'blue-right', url:'assets/images/tile-blue-source-path-right.png'},
        {id:'blue-left', url:'assets/images/tile-blue-source-path-left.png'},
        {id:'restart-level', url:'assets/images/restart-level.png'},        
        {id:'gameover_tryagain_button', url:'assets/images/tryagain-button.png'},
        {id:'orange', url:'assets/images/tile-orange-source.png'},
        {id:'orange-up', url:'assets/images/tile-orange-source-path-up.png'},
        {id:'orange-down', url:'assets/images/tile-orange-source-path-down.png'},
        {id:'orange-right', url:'assets/images/tile-orange-source-path-right.png'},
        {id:'orange-left', url:'assets/images/tile-orange-source-path-left.png'},
        {id:'aqua', url:'assets/images/tile-aqua-source.png'},
        {id:'aqua-up', url:'assets/images/tile-aqua-source-path-up.png'},
        {id:'aqua-down', url:'assets/images/tile-aqua-source-path-down.png'},
        {id:'aqua-right', url:'assets/images/tile-aqua-source-path-right.png'},
        {id:'aqua-left', url:'assets/images/tile-aqua-source-path-left.png'},
        {id:'mainmenu_play_button', url:'assets/images/play-button.png'},
        {id:'screen-background', url:'assets/images/screen-background.png'},
        {id:'game-name', url:'assets/images/game-name.png'},
        {id:'play-again', url:'assets/images/play-again.png'},
        {id:'time', url:'assets/images/time.png'},
        {id:'score', url:'assets/images/score.png'},
        {id:'path', url:'assets/images/path.png'},
        {id:'next-level', url:'assets/images/next-level.png'},
    //loading draw colored path tiles
        {id:'pink-path-hz', url:'assets/images/tile-pink-path-horizontal.png'},
        {id:'pink-path-vr', url:'assets/images/tile-pink-path-vertical.png'},
        {id:'pink-path-up-right', url:'assets/images/tile-pink-path-up-right.png'},
        {id:'pink-path-right-down', url:'assets/images/tile-pink-path-right-down.png'},
        {id:'pink-path-left-up', url:'assets/images/tile-pink-path-left-up.png'},
        {id:'pink-path-down-left', url:'assets/images/tile-pink-path-down-left.png'},
        {id:'red-path-hz', url:'assets/images/tile-red-path-horizontal.png'},
        {id:'red-path-vr', url:'assets/images/tile-red-path-vertical.png'},
        {id:'red-path-up-right', url:'assets/images/tile-red-path-up-right.png'},
        {id:'red-path-right-down', url:'assets/images/tile-red-path-right-down.png'},
        {id:'red-path-left-up', url:'assets/images/tile-red-path-left-up.png'},
        {id:'red-path-down-left', url:'assets/images/tile-red-path-down-left.png'},
        {id:'yellow-path-hz', url:'assets/images/tile-yellow-path-horizontal.png'},
        {id:'yellow-path-vr', url:'assets/images/tile-yellow-path-vertical.png'},
        {id:'yellow-path-up-right', url:'assets/images/tile-yellow-path-up-right.png'},
        {id:'yellow-path-right-down', url:'assets/images/tile-yellow-path-right-down.png'},
        {id:'yellow-path-left-up', url:'assets/images/tile-yellow-path-left-up.png'},
        {id:'yellow-path-down-left', url:'assets/images/tile-yellow-path-down-left.png'},
        {id:'green-path-hz', url:'assets/images/tile-green-path-horizontal.png'},
        {id:'green-path-vr', url:'assets/images/tile-green-path-vertical.png'},
        {id:'green-path-up-right', url:'assets/images/tile-green-path-up-right.png'},
        {id:'green-path-right-down', url:'assets/images/tile-green-path-right-down.png'},
        {id:'green-path-left-up', url:'assets/images/tile-green-path-left-up.png'},
        {id:'green-path-down-left', url:'assets/images/tile-green-path-down-left.png'},
        {id:'blue-path-hz', url:'assets/images/tile-blue-path-horizontal.png'},
        {id:'blue-path-vr', url:'assets/images/tile-blue-path-vertical.png'},
        {id:'blue-path-up-right', url:'assets/images/tile-blue-path-up-right.png'},
        {id:'blue-path-right-down', url:'assets/images/tile-blue-path-right-down.png'},
        {id:'blue-path-left-up', url:'assets/images/tile-blue-path-left-up.png'},
        {id:'blue-path-down-left', url:'assets/images/tile-blue-path-down-left.png'},
        {id:'orange-path-hz', url:'assets/images/tile-orange-path-horizontal.png'},
        {id:'orange-path-vr', url:'assets/images/tile-orange-path-vertical.png'},
        {id:'orange-path-up-right', url:'assets/images/tile-orange-path-up-right.png'},
        {id:'orange-path-right-down', url:'assets/images/tile-orange-path-right-down.png'},
        {id:'orange-path-left-up', url:'assets/images/tile-orange-path-left-up.png'},
        {id:'orange-path-down-left', url:'assets/images/tile-orange-path-down-left.png'},
        {id:'aqua-path-hz', url:'assets/images/tile-aqua-path-horizontal.png'},
        {id:'aqua-path-vr', url:'assets/images/tile-aqua-path-vertical.png'},
        {id:'aqua-path-up-right', url:'assets/images/tile-aqua-path-up-right.png'},
        {id:'aqua-path-right-down', url:'assets/images/tile-aqua-path-right-down.png'},
        {id:'aqua-path-left-up', url:'assets/images/tile-aqua-path-left-up.png'},
        {id:'aqua-path-down-left', url:'assets/images/tile-aqua-path-down-left.png'},

        {id:'pink-path-hz-left', url:'assets/images/tile-pink-path-horizontal-left.png'},
        {id:'pink-path-hz-right', url:'assets/images/tile-pink-path-horizontal-right.png'},
        {id:'pink-path-vr-up', url:'assets/images/tile-pink-path-vertical-up.png'},
        {id:'pink-path-vr-down', url:'assets/images/tile-pink-path-vertical-down.png'},

        {id:'red-path-hz-left', url:'assets/images/tile-red-path-horizontal-left.png'},
        {id:'red-path-hz-right', url:'assets/images/tile-red-path-horizontal-right.png'},
        {id:'red-path-vr-up', url:'assets/images/tile-red-path-vertical-up.png'},
        {id:'red-path-vr-down', url:'assets/images/tile-red-path-vertical-down.png'},

        {id:'yellow-path-hz-left', url:'assets/images/tile-yellow-path-horizontal-left.png'},
        {id:'yellow-path-hz-right', url:'assets/images/tile-yellow-path-horizontal-right.png'},
        {id:'yellow-path-vr-up', url:'assets/images/tile-yellow-path-vertical-up.png'},
        {id:'yellow-path-vr-down', url:'assets/images/tile-yellow-path-vertical-down.png'},

        {id:'green-path-hz-left', url:'assets/images/tile-green-path-horizontal-left.png'},
        {id:'green-path-hz-right', url:'assets/images/tile-green-path-horizontal-right.png'},
        {id:'green-path-vr-up', url:'assets/images/tile-green-path-vertical-up.png'},
        {id:'green-path-vr-down', url:'assets/images/tile-green-path-vertical-down.png'},

        {id:'blue-path-hz-left', url:'assets/images/tile-blue-path-horizontal-left.png'},
        {id:'blue-path-hz-right', url:'assets/images/tile-blue-path-horizontal-right.png'},
        {id:'blue-path-vr-up', url:'assets/images/tile-blue-path-vertical-up.png'},
        {id:'blue-path-vr-down', url:'assets/images/tile-blue-path-vertical-down.png'},

        {id:'orange-path-hz-left', url:'assets/images/tile-orange-path-horizontal-left.png'},
        {id:'orange-path-hz-right', url:'assets/images/tile-orange-path-horizontal-right.png'},
        {id:'orange-path-vr-up', url:'assets/images/tile-orange-path-vertical-up.png'},
        {id:'orange-path-vr-down', url:'assets/images/tile-orange-path-vertical-down.png'},

        {id:'aqua-path-hz-left', url:'assets/images/tile-aqua-path-horizontal-left.png'},
        {id:'aqua-path-hz-right', url:'assets/images/tile-aqua-path-horizontal-right.png'},
        {id:'aqua-path-vr-up', url:'assets/images/tile-aqua-path-vertical-up.png'},
        {id:'aqua-path-vr-down', url:'assets/images/tile-aqua-path-vertical-down.png'},

        {id:'quit-game', url:'assets/images/quit-game.png'}
    	 ];

    // Tell the game about this list of assets - the "required" category is
    // for assets that need to be fully loaded before the game can start
    this.AssignImageAssetList("required",gameImages);

    //Game state handler
    this.gameState=1;   // 0- paused 1-active 2- over
    this.gameLevel=0;   // 0 to this.mLevels.lenght-1
    this.gameMode=1;    // game mode 1 - quest, 2 -duet
    TGE.Game.prototype.ResizeViewportForDevice.call(this);
}

TGE.Game.prototype.OrientationChanged= function (a){
                    console.log("start" + a); 
    if(this.mReorientationDiv==null){
        return;
    }
                    console.log("before switch" + a); 
    

    switch(window.orientation){
        case -90:
        case 90: document.getElementById("game_canvas").style.display="none";
                        document.getElementById("game_canvas_wrong").style.display="block";
                        this.PauseGame(true);
                        break;
                        
        case 0:
        case 180: document.getElementById("game_canvas_wrong").style.display="none";
                         document.getElementById("game_canvas").style.display="block";
                        break;
        default :
                    console.log("in default" + a); 
                     
                      break;
        }
    }

// New methods and overrides for your game class will go in here
MyGame.prototype =
{
	// TGE.Game method override - called when the gameplay starts
    subclassStartPlaying: function()
    {
    	// Clear everything in the scene+ 40
        this.rowsndColumns =13;
        this.tilesWidthHeight = 42;
        this.buttonsWidthHeight = 20;
        this.xPadding = 50;
        this.yPadding = 50; 
        this.loadGame();
       },

    loadGame: function()
    {
        this.ClearScene();
        this.currentLevel = this.CreateUIEntity(TGE.Text).Setup(this.Width()/2 - 120 ,20 , "Level : 0", "bold 14px Arial", "center", "middle", "#DDD");
        this.currentLevelSize = this.CreateUIEntity(TGE.Text).Setup(this.Width()/2 - 60,20 , "0 x 0", "bold 14px Arial", "center", "middle", "#999");
        
        this.CreateUIEntity(TGE.ScreenEntity).Setup( this.xPadding - 30, this.yPadding + 10,"time");
        this.remainingTimeText = this.CreateUIEntity(TGE.Text).Setup(this.xPadding + 20,this.yPadding + 17, this.totalTimeForLevel +" sec", "bold italic 20px Arial", "center", "middle", "#FFF");
        
        this.CreateUIEntity(TGE.ScreenEntity).Setup( this.xPadding + 80, this.yPadding + 14,"path");
        this.pathCompleted = this.CreateUIEntity(TGE.Text).Setup(this.xPadding + 115 ,this.yPadding + 20, " : 0 / 0", "bold italic 20px Arial", "center", "middle", "#FFF");
        
        this.CreateUIEntity(TGE.ScreenEntity).Setup( this.xPadding + 175, this.yPadding + 14,"score");
        this.scoreText = this.CreateUIEntity(TGE.Text).Setup(this.xPadding + 200,this.yPadding + 20, "0", "bold italic 20px Arial", "center", "middle", "#FFF");        
        
        var gameMatrix =  (this.gameLevel<gameLevels.length)? gameLevels[this.gameLevel]:$M[[]];
        // console.log(gameMatrix);
        if(gameMatrix.isSquare() && !gameMatrix.isSingular()){
            this.rowsAndColumns = gameMatrix.rows();
            this.mBoardObj = new Board(this, gameMatrix);
            this.mDrawtoolObj = new Drawtool(this.mBoardObj.currentBoard);
            this.totalTimeForLevel = this.mBoardObj.paths / 2 * 20;
            this.currentLevel.SetText("Level : "+ (this.gameLevel+1));
            this.currentLevelSize.SetText(this.mBoardObj.boardTemplateMatrix.rows() + " x " + this.mBoardObj.boardTemplateMatrix.cols());
        }
    },

    restart: function()
    {
        this.loadGame();
    },

    subclassMouseDown: function()
    { 
        if(typeof this.mBoardObj != "undefined" || this.mBoardObj != null)
        {
            if(this.mMouseX > this.mBoardObj.offsetX && this.mMouseX < (this.Width() - this.mBoardObj.offsetX) && this.mMouseY > this.mBoardObj.offsetY && this.mMouseX < (this.Height() - this.mBoardObj.offsetX) ){
                var selectedElementIndex = this.mBoardObj.getBoardElement(this.mMouseX, this.mMouseY);
                this.mDrawtoolObj.selectTool(selectedElementIndex.x, selectedElementIndex.y);
            }
        }
    },
    
    subclassMouseUp: function()
    {  
        if(typeof this.mDrawtoolObj != "undefined" || this.mDrawtoolObj != null)
        {
            this.mDrawtoolObj.deselectTool();
        }
    },

    subclassUpdateGame: function(elapsedTime)
    { 

        this.remainingTimeText.SetText(this.getRemainingTime(GameTimer.getUptime()) +" sec");
        this.pathCompleted.SetText(this.mDrawtoolObj.paths.length + " / " + this.mBoardObj.paths);

        if(this.getRemainingTime(GameTimer.getUptime()) == 0)
         {
            this.gamePlayStatus = this.stageStatus.LEVEL_FAILED;
            this.score = this.getRemainingTime(GameTimer.getUptime()) * this.mBoardObj.paths * this.mDrawtoolObj.paths.length;
            this.EndGame();
         } 
         else if(this.mBoardObj.paths == this.mDrawtoolObj.paths.length)
         {
            this.gamePlayStatus = this.stageStatus.LEVEL_PASS;
            if(this.gameLevel == (gameLevels.length - 1))
            {
                this.gameTotalScore += this.getScore();
                this.gamePlayStatus = this.stageStatus.GAME_COMPLETE;
            }
            this.score = this.getRemainingTime(GameTimer.getUptime()) * this.mBoardObj.paths * this.mDrawtoolObj.paths.length;
            this.EndGame();
         }
        else if(typeof this.mDrawtoolObj != "undefined" || this.mDrawtoolObj != null)
         {
            this.mDrawtoolObj.draw(this.mBoardObj.getBoardElement(this.mMouseX, this.mMouseY));
            this.score = this.getRemainingTime(GameTimer.getUptime()) * this.mBoardObj.paths * this.mDrawtoolObj.paths.length;
         }

         this.scoreText.SetText(this.getScore());
    },

    getRemainingTime : function(elapsedTime)
    {
        return parseInt(this.totalTimeForLevel - elapsedTime) > 0 ? parseInt(this.totalTimeForLevel - elapsedTime) : 0;
    },

    getScore : function()
    {
        return this.score;
    },

    getGameTotalScore : function()
    {
        return this.gameTotalScore;
    },

    ResizeViewportForDevice: function () 
    {
        //TGE.Game.prototype.ResizeViewportForDevice.call(this);
        viewport = document.querySelector("meta[name=viewport]");
        deviceChecking = this.mDeviceInfo.OSOrDevices;
        switch(this.mDeviceInfo.OSOrDevices)
        {
            case 'iPhone':
            {   

                if (window.navigator.standalone == true)
                {
                    document.getElementById('game_canvas').style.marginTop = '50px';
                    viewport.setAttribute('content', 'width=device-width, height=device-height, maximum-scale=0.50, minimum-scale=0.50,initial-scale=0.50, user-scalable=no');
                }
                else
                {
                    if(this.mCanvasDiv.clientWidth==960||this.mCanvasDiv.clientWidth==640){
                        viewport.setAttribute("content","width=device-width, maximum-scale=0.5, minimum-scale=0.5,initial-scale=0.5, user-scalable=no")
                    }else{
                        viewport.setAttribute('content', 'width=device-width, maximum-scale=0.5, minimum-scale=0.5,initial-scale=0.5, user-scalable=no');
                    }
                }
            }
            break;

            case 'Android':

                // Android browser popup block is hyper sensitive to _blank window open calls
                this.mDefaultLinkTarget = "_self";
                viewport.setAttribute('content', 'width=device-width, height=device-height, maximum-scale=0.50, minimum-scale=0.50,initial-scale=0.50');

                break;

            case 'iPad':                
                if (window.navigator.standalone == true)
                {
                    document.getElementById('game_canvas').style.marginTop = '50px';
                    viewport.setAttribute('content', 'width=device-width; maximum-scale=1.07; minimum-scale=1.07,initial-scale=1.07,user-scalable=no');
                }
                else
                {
                        viewport.setAttribute('content', 'width=device-width, maximum-scale=1.07, minimum-scale=1.07,initial-scale=1.07,user-scalable=no');
                }
                
                break;

            case 'Windows':
            case 'Mac':
            {                
                // Use click handler to prevent popup blocker (click is not supported on mobile)
                this.mButtonClickEvent = "click";
            }
                break;

            default:
                viewport.setAttribute('content', 'width=device-width, maximum-scale=1, minimum-scale=1, initial-scale=1,user-scalable=no');
                break;
        }
    }
}
extend(MyGame, TGE.Game, null);


//board

var Board = function(gameContext, templateMatrix){
    this.offsetX = 0, this.offsetY =0;
    this.points = 0;
    this.paths = 0;
    this.gameContex = gameContext;
    this.boardTemplateMatrix = templateMatrix;
    this.currentBoard = new Array();
    this.prepareNewBoard();
};

Board.prototype = {
    prepareNewBoard: function() {
        var scale = Math.floor(this.gameContex.Width()/this.gameContex.rowsAndColumns)/this.gameContex.tilesWidthHeight;

        var effectiveTielsWidthHeight = this.gameContex.tilesWidthHeight * scale;
        this.offsetX = (this.gameContex.Width() - (this.gameContex.rowsAndColumns*effectiveTielsWidthHeight))/2.0;
        this.offsetY = (this.gameContex.Height() - (this.gameContex.rowsAndColumns*effectiveTielsWidthHeight))- this.offsetX;

        for (var rowCounter = 0; rowCounter < this.gameContex.rowsAndColumns ; rowCounter++)
        {
            this.currentBoard[rowCounter]= new Array();
            for (var columnCounter = 0; columnCounter < this.gameContex.rowsAndColumns; columnCounter++) 
            {           
                this.currentBoard[rowCounter][columnCounter]= this.gameContex.CreateWorldEntity(TGE.ScreenEntity).Setup( this.offsetX + effectiveTielsWidthHeight/2.0 + (effectiveTielsWidthHeight*rowCounter), this.offsetY + effectiveTielsWidthHeight/2.0 + (effectiveTielsWidthHeight*columnCounter), this.boardTemplateMatrix.e(rowCounter+1,columnCounter+1) ); 
                this.currentBoard[rowCounter][columnCounter].SetScale(scale);
                this.currentBoard[rowCounter][columnCounter].state =  this.boardTemplateMatrix.e(rowCounter+1,columnCounter+1);
                if(!this.currentBoard[rowCounter][columnCounter].state.match(/^blank$/)){
                    this.points++;
                }
            };
        };
        this.paths = this.points/2;
    },
    getBoardElement: function( x, y) {
        var col = Math.ceil( (x-this.offsetX)/((this.gameContex.Width()-(this.offsetX*2))/this.currentBoard.length) ) -1;
        var row = Math.ceil( (y-this.offsetY)/((this.gameContex.Height()-(this.offsetY+this.offsetX))/this.currentBoard.length) ) -1;
        
        if(col<0){
            col  = 0;
        }else if(col>= this.currentBoard.length){
            col = this.currentBoard.length-1;
        }

        if(row<0){
            row  = 0;
        }else if(row>= this.currentBoard.length){
            row = this.currentBoard.length-1;
        }
        return {x:col, y:row};
    }
}


//drawtools 

var Drawtool = function(board){
    this.state = 0; //state 0 not drawing, 1 drawing, 2 erasing
    this.board=null;
    this.setBoard(board);
    this.paths = new Array();
}

Drawtool.prototype = 
{
    setBoard: function(board) {
        this.board = board;
        this.tool = null;
    },
    selectTool: function(boardx,boardy ){
        if(this.state==0){
            var e = this.board[boardx][boardy];
            if(!e.state.match(/^blank$/g)){
                if(e.state.match(/^path$/g)){
                    var pathIndex = this.findpathWithPoint({x:boardx, y:boardy});
                    if(pathIndex!=null){
                        this.state = 2;
                        var path = this.paths.splice(pathIndex,1);
                        this.tool = new Eraser(this, this.board, path[0]);
                    }
                }else if(e.state.match(/^[^-]*$/g)){
                    this.state = 1;
                    this.tool = new Pen(this, this.board,{x:boardx, y:boardy});
                }
            }
        }
    },  
    deselectTool: function() {
        if(this.state!=2){
            if(this.tool!=null && this.tool instanceof Pen){
                this.tool.deselecting();
            } else {
                this.tool=null;
                this.state=0;
            }
        } 
    },
    draw: function(point) {
        if(this.tool!=null){
         this.tool.draw(point);
        }
    },
    finishDrawing: function(path, isCompleted) {
        if(!isCompleted){
            this.state = 2;
            this.tool = new Eraser(this, this.board, path);
        } else {
            this.paths.push(path);
            this.tool=null;
            this.state=0;
        }
    },
    finishErasing: function() {
        // console.log(this.paths);
        this.state = 0;
        this.deselectTool();
    },
    findpathWithPoint: function(point){
        var pathsCount = this.paths.length;
        var pathLength=0;
        var path = null; 
        var returnIndex = null;
        for(var i=0; i<pathsCount; i++){
            path=this.paths[i];
            if(path){
                pathLength = path.length;
                for(var j=0; j<pathLength; j++){
                    if(path[j].x==point.x && path[j].y==point.y){
                        returnIndex=i;
                        break;
                    }
                }
            }
        }
        return returnIndex;
    }
}

var Pen =  function(master,board, origin) {

    this.master=master;
    this.drawhistory = new Array(origin);
    this.board = board;
    this.drawhistory.origin = this.board[origin.x][origin.y].state;
    this.isCompleted = false;
}

Pen.prototype = {
    draw: function(point) {
        if(!this.isCompleted){
            var lastpoint = this.drawhistory[this.drawhistory.length-1], previouspoint = null;
            if(this.drawhistory.length>1){
                previouspoint = this.drawhistory[this.drawhistory.length-2];
            }

            if(lastpoint.x!=point.x || lastpoint.y!=point.y){
                var lastE = this.board[lastpoint.x][lastpoint.y];
                var currentE = this.board[point.x][point.y];
                if(Math.abs(lastpoint.x - point.x)> 1){
                    for(var i= 1; i<Math.abs(lastpoint.x - point.x); i++){
                        var factor = ((lastpoint.x - point.x)>0)?i: i*(-1);
                        this.draw({x: (lastpoint.x+factor), y: lastpoint.y});
                    }
                } else if(Math.abs(lastpoint.y - point.y)>1){
                    for(var i= 1; i<Math.abs(lastpoint.y - point.y); i++){
                        var factor = ((lastpoint.y - point.y)>0)?i: i*(-1);
                        this.draw({x: lastpoint.x, y: (lastpoint.y+factor)});
                    }
                }

                if(lastE != null && currentE != null && !currentE.state.match(/^path$/g)){
                    if(((lastpoint.x - point.x)==0 || (lastpoint.y - point.y)==0)){
                        if( Math.abs(lastpoint.x - point.x) > Math.abs(lastpoint.y - point.y)){
                            var direction = "";
                            if((lastpoint.x - point.x)<0) {
                                if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^path$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                                    lastE.SetImage(lastE.state+"-right")
                                    lastE.state = lastE.state+"-right";
                                } else if(lastE.state.match(/^path$/g)) {
                                    if(previouspoint != null){
                                       lastE.SetImage(this.drawhistory.origin+ "-path-" + getDirection(previouspoint, lastpoint, point));
                                       lastE.state = "path";
                                    }
                                }
                            }else{
                                if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^path$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                                    lastE.SetImage(lastE.state+"-left")
                                    lastE.state = lastE.state+"-left";;
                                } else if(lastE.state.match(/^path$/g)) {
                                    if(previouspoint != null){
                                        lastE.SetImage(this.drawhistory.origin+ "-path-" + getDirection(previouspoint, lastpoint, point));
                                        lastE.state = "path";
                                    }
                                }
                            }
                        }else{
                            if((lastpoint.y - point.y)<0) {
                                if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^path$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                                    lastE.SetImage(lastE.state+"-down")
                                } else if(lastE.state.match(/^path$/g)) {
                                    if(previouspoint != null){
                                       lastE.SetImage(this.drawhistory.origin+ "-path-" + getDirection(previouspoint, lastpoint, point));
                                       lastE.state = "path";
                                    }
                                }
                            }else{
                                if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^path$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                                    lastE.SetImage(lastE.state+"-up");
                                    lastE.state = lastE.state+"-up";
                                } else if(lastE.state.match(/^path$/g)) {
                                    if(previouspoint != null){  
                                        lastE.SetImage(this.drawhistory.origin+ "-path-" + getDirection(previouspoint, lastpoint, point));
                                        lastE.state = "path";
                                    }
                                }
                            }
                        }

                        if(currentE.state.match(/^blank$/g)){
                            currentE.SetImage(this.drawhistory.origin+ "-path-" + getDirection(lastpoint, point, null));
                            currentE.state = "path";
                            this.drawhistory.push(point);
                        } else if(currentE.state.match(new RegExp("^"+this.drawhistory.origin+"$", "g"))){
                            var direction  = getDirection( point, lastpoint, null);
                            direction = direction.replace(/^[^-]*-/g,"");
                            currentE.SetImage(currentE.state+"-"+direction);
                            currentE.state = currentE.state+"-"+direction;
                            this.isCompleted = true;
                            this.drawhistory.push(point);
                            this.master.finishDrawing( this.drawhistory, this.isCompleted);
                        } else if(lastE.state.match(/^[^-]*$/g)){
                            this.master.finishDrawing( this.drawhistory, this.isCompleted);
                        }
                    }
                } else {
                    this.master.finishDrawing( this.drawhistory, this.isCompleted);
                }
            }
        }
    },

    deselecting: function(){   
        if(!this.isCompleted){
            this.master.finishDrawing( this.drawhistory, this.isCompleted);
        }
    }
}

var Eraser =  function(master,board,path,startingPoint) {
    this.master=master;
    this.path = path;
    this.pathArrayTwo = new Array();
    this.board = board;
    this.startingPoint = startingPoint;
}

Eraser.prototype =
{
    draw: function() {

        var boardIndex = this.path.pop();;
        if(boardIndex){
            var tile = this.board[boardIndex.x][boardIndex.y];
            if(tile.state.match(/^path$/g)){
                tile.SetImage("blank");
                tile.state = "blank";
            } else if(!tile.state.match(/^blank$/g)){ 
                tile.SetImage(this.path.origin);
                tile.state = this.path.origin;
            }
        }else{
            this.master.finishErasing();
        }
    }
}

// game levels

var gameLevels = new Array(
    //5*5 level 1
    $M([
      ["red","blank","blank","pink","yellow"],
      ["blank","blank","green","blank","blank"],
      ["red","blank","blank","yellow","aqua"],
      ["pink","blank","blank","green","blank"],
      ["aqua","blank","blank","blank","blank"]      
    ]),

    //7*7 level 1
    $M([
      ["blank","blank","blank","blank","blank","blank", "blank"],
      ["blank","blank","orange","blank","blank","blank", "blank"],
      ["blank","blank","blank","blank","green","blank", "blank"],
      ["blank","blank","blank","green","blank","blank", "blank"],
      ["blank","blank","blank","aqua","yellow","red", "blank"],
      ["blank","orange","blank","blank","blank","yellow", "blue"],
      ["blue","red","blank","blank","blank","blank", "aqua"]
    ]),
    //7*7 level 8
    $M([
      ["blank","pink","blue","blank","blank","blank", "blank"],
      ["blank","green","pink","orange","yellow","blank", "blank"],
      ["blank","blank","blank","blank","blue","blank", "blank"],
      ["blank","blank","blank","orange","blank","blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank"],
      ["blank","green","blank","blank","yellow","blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank"]
    ]),
    //7*7 level 19
    $M([
      ["blank","blank","blank","blank","blank","blank", "aqua"],
      ["blank","blank","blank","blank","blank","blank", "pink"],
      ["blank","blank","blank","blank","blank","blank", "green"],
      ["aqua","blank","blank","blank","orange","blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank"],
      ["blank","red","blank","orange","red","green", "blank"],
      ["blank","blank","blank","pink","yellow","blank", "yellow"]
    ]),
    //8x8 level 11
    $M([
      ["blank","blank","blank","blank","blank","green", "pink", "blank"],
      ["blank","aqua","blank","blank","blank","blank", "aqua", "blank"],
      ["blank","blank","blank","blank","blank","blank", "green", "blank"],
      ["blank","blank","blank","blank","blank","blank", "yellow", "blank"],
      ["blank","orange","blank","blank","blank","blank", "blank", "blank"],
      ["blank","blank","yellow","red","blank","blank", "orange", "blank"],
      ["blank","blank","blank","blank","blank","blank", "red", "blank"],
      ["pink","blue","blank","blue","blank","blank", "blank", "blank"]
    ]),
    //8x8 level 12
    $M([
      ["blank","blank","blank","blank","blank","red", "yellow", "blank"],
      ["blank","blank","blank","blank","blank","blank", "green", "blank"],
      ["blank","blank","blue","blank","blank","blank", "blue", "blank"],
      ["blank","blank","blank","blank","blank","green", "blank", "blank"],
      ["blank","blank","blank","aqua","blank","blank", "blank", "orange"],
      ["blank","blank","yellow","blank","blank","orange", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "red", "aqua"]
    ]),
    //8x8 level 13
    $M([
      ["orange","blank","blank","blank","blank","blank", "blank", "red"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank"],
      ["blank","blank","blank","yellow","blank","green", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "aqua", "red"],
      ["blank","blank","blank","blank","green","blank", "blank", "blank"],
      ["blank","blank","aqua","blank","blank","blank", "orange", "blank"],
      ["yellow","blank","blank","blank","blue","blank", "blue", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank"]
    ]),    
    //9*9 level 1
    $M([
        ["blue","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
        ["red","yellow","blank","blank","blank","blank", "blank", "blank", "blank"], 
        ["blank","blank","blank","blank","blank","blank", "aqua", "blank", "blank"],
        ["orange","blank","blank","orange","blank","blank", "blank", "blank", "blank"],
        ["blank","blank","blank","blank","blank","blank", "blank", "red", "blank"],
        ["blank","blank","blank","blank","green","blank", "blank", "blank", "blank"],
        ["blank","blank","pink","blank","pink","blank", "yellow", "blank", "blank"],
        ["blank","green","aqua","blank","blank","blank", "red", "blank", "blank"],
        ["blank","blank","red","blue","blank","blank", "blank", "blank", "blank"]
    ]),
    //9*9 level 4
    $M([
      ["yellow","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["orange","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","orange","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","green","red","blank", "aqua", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","yellow","blank","blank", "blank", "blank", "blank"],
      ["aqua","green","blank","red","blue","pink", "blank", "pink", "blue"]
    ]),
    //9*9 level 10
   $M([
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","aqua", "pink", "yellow", "blank"],
      ["blank","blank","red","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","yellow","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank","orange","blank"],
      ["blank","blank","blank","blank","blank","blank", "blank","blank","aqua"],
      ["blank","blank","green","blank","blank","green", "red", "blue", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "pink", "orange", "blue"]
    ])
);

// path utilities
var directions = new Array();
directions["l"] = "hz-left";
directions["r"] = "hz-right";
directions["u"] = "vr-up";
directions["d"] = "vr-down";
directions["ll"] = "hz";
directions["rr"] = "hz";
directions["uu"] = "vr";
directions["dd"] = "vr";
directions["lu"] = "left-up";
directions["dr"] = "left-up";
directions["ur"] = "up-right";
directions["ld"] = "up-right";
directions["rd"] = "right-down";
directions["ul"] = "right-down";
directions["dl"] = "down-left";
directions["ru"] = "down-left";

var getDirection = function(previouspoint, latestpoint, futurepoint) {
    direction = "";
    if(previouspoint!=null && latestpoint != null) {
        if(previouspoint.x > latestpoint.x){
           direction = "l" 
        } else if(previouspoint.x < latestpoint.x){
            direction = "r"
        } else if(previouspoint.y < latestpoint.y){
             direction = "d"
        } else if(previouspoint.y > latestpoint.y){
             direction = "u"
        }
    }

    if(futurepoint!=null && latestpoint != null) {
        if(latestpoint.x > futurepoint.x){
           direction = direction+"l" 
        } else if(latestpoint.x < futurepoint.x){
            direction = direction+"r"
        } else if(latestpoint.y < futurepoint.y){
             direction = direction+"d"
        } else if(latestpoint.y > futurepoint.y){
             direction = direction+"u";
        }
    }
    return directions[direction];
};