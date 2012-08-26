
// This is the constructor for the game
MyGame = function()
{
     // Make sure to call the constructor for the superclass
    MyGame.superclass.constructor.call(this);

    //game entities
    this.mBoardObj;
    this.mDrawtoolObj;
    this.remainingTimeText;
    this.pathCompleted;
    this.totalTimeForLevel = 180;

    // Game Images that are required to start the game
    var gameImages = [ 
    //loading basic tiles and color source tiles
    	{id:'blank', url:'assets/images/tile.png'},
        {id:'pause_button',url:'assets/images/pause-button.png'},
        {id:'pausescreen_resume_button',url:'assets/images/resume-button.png'},
        {id:'green', url:'assets/images/tile-green-source.png'},
        {id:'green-up', url:'assets/images/tile-green-source-path-up.png'},
        {id:'green-down', url:'assets/images/tile-green-source-path-down.png'},
        {id:'green-right', url:'assets/images/tile-green-source-path-right.png'},
        {id:'green-left', url:'assets/images/tile-green-source-path-left.png'},
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
        {id:'restart-level', url:'assets/images/restartLevel.png'},        
        {id:'gameover_tryagain_button', url:'assets/images/tryagain_button.png'},
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
        {id:'mainmenu_play_button', url:'assets/images/play_button.png'},
        {id:'screen-background', url:'assets/images/screen-background.png'},
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
        {id:'quit-game', url:'assets/images/quit-game.png'}
    	 ];

    // Tell the game about this list of assets - the "required" category is
    // for assets that need to be fully loaded before the game can start
    this.AssignImageAssetList("required",gameImages);

    //Game state handler
    this.gameState=1;   // 0- paused 1-active 2- over
    this.gameLevel=1;   // 0 to this.mLevels.lenght-1
    this.gameMode=1;    // game mode 1 - quest, 2 -duet
}

// New methods and overrides for your game class will go in here
MyGame.prototype =
{
	// TGE.Game method override - called when the gameplay starts
    subclassStartPlaying: function()
    {
    	// Clear everything in the scene
        this.rowsAndColumns =13;
        this.tilesWidthHeight = 42;
        this.buttonsWidthHeight = 20;
        this.xPadding = 50;
        this.yPadding = 50; 
        this.loadGame();
       },

    loadGame: function()
    {
        this.ClearScene();
        this.remainingTimeText = this.CreateUIEntity(TGE.Text).Setup(this.Width()/2,this.yPadding, "Time remaining : "+ this.totalTimeForLevel +" sec", "bold italic 18px Arial", "center", "middle", "#FFF");
        this.pathCompleted = this.CreateUIEntity(TGE.Text).Setup(this.Width()/2 ,this.yPadding + 30, "Path completed : 0 / 0", "bold italic 18px Arial", "center", "middle", "#FFF");
        var gameMatrix =  (this.gameLevel<gameLevels.length)? gameLevels[this.gameLevel]:$M[[]];
        if(gameMatrix.isSquare() && !gameMatrix.isSingular()){
            this.rowsAndColumns = gameMatrix.rows();
            this.mBoardObj = new Board(this, gameMatrix);
            this.mDrawtoolObj = new Drawtool(this.mBoardObj.currentBoard);
        }
    },

    restart: function()
    {
        this.loadGame()
    },

    subclassMouseDown: function()
    { 
        if(typeof this.mBoardObj != "undefined" || this.mBoardObj != null)
        {
            if(this.mMouseX > this.mBoardObj.offsetX && this.mMouseX < (this.Width() - this.mBoardObj.offsetX) && this.mMouseY > this.mBoardObj.offsetY && this.mMouseX < (this.Height() - this.mBoardObj.offsetX) ){
                var selectedElementIndex = this.mBoardObj.getBoardElement(this.mMouseX, this.mMouseY);
                this.mDrawtoolObj.selectTool(selectedElementIndex.x, selectedElementIndex.y);
                 if(selectedElementIndex.x==1 && selectedElementIndex.y==1){
                     this.EndGame();
                 }
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
        this.remainingTimeText.SetText("Time remaining : "+ this.getRemainingTime(GameTimer.getUptime()) +" sec");
        if(this.getRemainingTime(GameTimer.getUptime()) == 0)
         {
            this.EndGame();
         }
        else if(typeof this.mDrawtoolObj != "undefined" || this.mDrawtoolObj != null)
         {
            this.mDrawtoolObj.draw(this.mBoardObj.getBoardElement(this.mMouseX, this.mMouseY));
         }
    },

    getRemainingTime : function(elapsedTime)
    {
        return parseInt(this.totalTimeForLevel - elapsedTime) > 0 ? parseInt(this.totalTimeForLevel - elapsedTime) : 0;
    }
}
extend(MyGame, TGE.Game, null);


//board

var Board = function(gameContext, templateMatrix){
    this.offsetX = 0 , this.offsetY =0;
    this.gameContex = gameContext;
    this.boardTemplateMatrix = templateMatrix;
    this.currentBoard = new Array();
    this.prepareNewBoard();
};

Board.prototype = {
    prepareNewBoard: function(){
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
            };

        };
    },

    getBoardElement: function( x, y){
        var col = Math.ceil( (x-this.offsetX)/((this.gameContex.Width()-(this.offsetX*2))/this.currentBoard.length) ) -1;
        var row = Math.ceil( (y-this.offsetY)/((this.gameContex.Height()-(this.offsetY+this.offsetX))/this.currentBoard.length) ) -1;
       
       return {x:col, y:row};
    }
}


//drawtools 

var Drawtool = function(board){
    this.state = 0; //state 0 not drawing, 1 drawing, 2 erasing
    this.board=null;
    this.setBoard(board);
}

Drawtool.prototype = 
{
    setBoard: function(board){
        this.board = board;
        this.tool = null;
    },
    selectTool: function(boardx,boardy ){
        if(this.state==0){
            var e = this.board[boardx][boardy];
            if(!e.state.match(/^blank$/g)){
                if(e.state.match(/path/g)){
                    
                }else{
                    this.state = 1;
                    this.tool = new Pen(this, this.board,{x:boardx, y:boardy});
                }
            }
        }
    },
    
    deselectTool: function(){
        if(this.state==1){
            this.tool=null;
            this.state=0;
        } 
    },

    draw: function(point){
        if(this.tool!=null){
         this.tool.draw(point);
        }
    }
}

var Pen =  function(master,board, origin){
    this.master=master;
    this.drawhistory = new Array(origin);
    this.board = board;
    this.drawhistory.origin = this.board[origin.x][origin.y].state;
}

Pen.prototype = {
    draw: function(point){
        var lastpoint = this.drawhistory[this.drawhistory.length-1], previousToLastpoint = null;
        if(this.drawhistory.length>1){
            previousToLastpoint = this.drawhistory[this.drawhistory.length-2];
        }

        if(lastpoint.x!=point.x || lastpoint.y!=point.y){
            var lastE = this.board[lastpoint.x][lastpoint.y];
            // var previousToLastE = null;
            // if( previousToLastpoint != null){
            //    previousToLastE = this.board[previousToLastpoint.x][previousToLastpoint.y];
            // }
            var currentE = this.board[point.x][point.y];
            if(lastE != null && currentE != null && !currentE.state.match(/^path/g) && ((lastpoint.x - point.x)==0 || (lastpoint.y - point.y)==0)){
                if( Math.abs(lastpoint.x - point.x) > Math.abs(lastpoint.y - point.y) ){
                    var direction = "";
                    if((lastpoint.x - point.x)<0){
                        if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^path$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                            lastE.SetImage(lastE.state+"-right")
                            lastE.state = lastE.state+"-right";
                            this.drawhistory.push(point);
                        } else if(lastE.state.match(/^blank$/g)) {
                            if(previousToLastpoint != null){
                               lastE.SetImage(this.drawhistory.origin+ "-path-" + getDirection(previousToLastpoint, lastpoint, point));
                               lastE.state = "path";
                            }
                            this.drawhistory.push(point);
                        }
                    } else {
                        if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^path$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                            lastE.SetImage(lastE.state+"-left")
                            lastE.state = lastE.state+"-left";
                            this.drawhistory.push(point);
                        } else if(lastE.state.match(/^blank$/g)) {
                            if(previousToLastpoint != null){
                                lastE.SetImage(this.drawhistory.origin+ "-path-" + getDirection(previousToLastpoint, lastpoint, point));
                                lastE.state = "path";
                            }
                            this.drawhistory.push(point);
                        }
                    }
                }else{
                    if((lastpoint.y - point.y)<0){
                        if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^path$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                            lastE.SetImage(lastE.state+"-down")
                            lastE.state = lastE.state+"-down";
                            this.drawhistory.push(point);
                        } else if(lastE.state.match(/^blank$/g)) {
                            if(previousToLastpoint != null){
                               lastE.SetImage(this.drawhistory.origin+ "-path-" + getDirection(previousToLastpoint, lastpoint, point));
                               lastE.state = "path";
                            }
                            this.drawhistory.push(point);
                        }
                    } else {
                        if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^path$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                            lastE.SetImage(lastE.state+"-up")
                            lastE.state = lastE.state+"-up";
                            this.drawhistory.push(point);
                        } else if(lastE.state.match(/^blank$/g)) {
                            if(previousToLastpoint != null){  
                                lastE.SetImage(this.drawhistory.origin+ "-path-" + getDirection(previousToLastpoint, lastpoint, point));
                                lastE.state = "path";
                            }
                            this.drawhistory.push(point);
                        }
                    }
                }
            } else {
                this.master.deselectTool();
            }
        }
    }
}

// game levels

var gameLevels = new Array(

    //7*7 level 26
    $M([
      ["blank","blank","blank","blank","blank","yellow", "blue"],
      ["green","blank","blank","blank","green","blank", "blank"],
      ["blue","blank","red","blank","blank","blank", "blank"],
      ["blank","blank","blank","blank","blank","red", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank"],
      ["blank","orange","blank","blank","orange","yellow", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank"]
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
      
    $M([
      ["aqua","blank","blank","blank","blank","blank", "blank"],
      ["blue","blank","red","orange","blank","blank", "aqua"],
      ["yellow","blank","blank","blank","red","blank", "blank"],
      ["blank","blank","yellow","blank","blank","blank", "blank"],
      ["blank","blank","blank","blue","green","blank", "blank"],
      ["blank","green","blank","blank","blank","blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "orange"]
    ]),

    //9*9 level 15
    $M([
      ["aqua","orange","yellow","blank","yellow","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "green", "blank", "blank"],
      ["blank","blank","blank","red","blue","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","aqua","green", "blank", "blank", "blank"],
      ["blank","blank","blank","red","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","green","blank", "green", "blank", "blank"],
      ["blank","orange","blue","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"]
    ]),
    //9*9 level 10
   $M([
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","aqua", "green", "yellow", "blank"],
      ["blank","blank","red","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","yellow","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "orange", "aqua"],
      ["blank","blank","green","blank","blank","green", "red", "blue", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "green", "orange", "blue"]
    ])
);

// path utilities
var directions = new Array();
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

var getDirection = function(previousToLastpoint, lastpoint, currentPoint){
     if(previousToLastpoint.x > lastpoint.x){
       direction = "l" 
    } else if(previousToLastpoint.x < lastpoint.x){
        direction = "r"
    } else if(previousToLastpoint.y < lastpoint.y){
         direction = "d"
    } else if(previousToLastpoint.y > lastpoint.y){
         direction = "u"
    }

    if(lastpoint.x > currentPoint.x){
       direction = direction+"l" 
    } else if(lastpoint.x < currentPoint.x){
        direction = direction+"r"
    } else if(lastpoint.y < currentPoint.y){
         direction = direction+"d"
    } else if(lastpoint.y > currentPoint.y){
         direction = direction+"u";
    }
    return directions[direction];
};