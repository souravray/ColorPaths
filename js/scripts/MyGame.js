
// This is the constructor for the game
MyGame = function()
{
     // Make sure to call the constructor for the superclass
    MyGame.superclass.constructor.call(this);

    //game entities
    this.mBoardObj;
    this.mDrawtoolObj;

    // Game Images that are required to start the game
    var gameImages = [ 
    	{id:'blank', url:'assets/images/tile.png'},
        {id:'color-up', url:'assets/images/tile-light-source-path-up.png'},
        {id:'color-down', url:'assets/images/tile-light-source-path-down.png'},
        {id:'color-right', url:'assets/images/tile-light-source-path-right.png'},
        {id:'color-left', url:'assets/images/tile-light-source-path-left.png'},
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
        {id:'pause-screen-info', url:'assets/images/pause-screen-info.png'},
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
        {id:'mainmenu_play_button', url:'assets/images/play_button.png'}
    	 ];

    // Tell the game about this list of assets - the "required" category is
    // for assets that need to be fully loaded before the game can start
    this.AssignImageAssetList("required",gameImages);

    //Game state handler
    this.gameState=1;   // 0- paused 1-active 2- over
    this.gameLevel=0;   // 0 to this.mLevels.lenght-1
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
        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.1), this.mScreenManager.YFromPercentage(0.07),
        "restart-level", this.restart.bind(this), 1);
        // Fill the background in with white
        this.SetBackgroundColor("#ccc");
        var gameMatrix =  (this.gameLevel<gameLevels.length)? gameLevels[this.gameLevel]:$M[[]];
        if(gameMatrix.isSquare() && !gameMatrix.isSingular()){
            console.log("ok");
            this.rowsAndColumns = gameMatrix.rows();
            this.mBoardObj = new Board(this, gameMatrix);
            this.mDrawtoolObj = new Drawtool(this.mBoardObj.currentBoard);
            console.log(this.mDrawtoolObj);
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
        this.mDrawtoolObj.deselectTool();
    },
    subclassUpdateGame: function(elapsedTime)
    {  
        this.mDrawtoolObj.draw(this.mBoardObj.getBoardElement(this.mMouseX, this.mMouseY));
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
                    this.tool = new Pen(this.board,{x:boardx, y:boardy});
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
    this.origin =  origin;
    this.drawhistory = new Array(origin);
    this.board = board;
}

Pen.prototype = {
    draw: function(point){
        var lastpoint = this.drawhistory[this.drawhistory.length-1];
        if(lastpoint.x!=point.x || lastpoint.y!=point.y){
            this.drawhistory.push(point);
            console.log(this.drawhistory);
            var lastE = this.board[lastpoint.x][lastpoint.y];
            if(lastE != null){
                if( Math.abs(lastpoint.x - point.x) > Math.abs(lastpoint.y - point.y) ){
                    if((lastpoint.x - point.x)<0){
                        if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                            lastE.SetImage(lastE.state+"-right")
                            lastE.state = lastE.state+"-right";
                        } else {
                            
                        }
                    } else {
                        if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                            lastE.SetImage(lastE.state+"-left")
                            lastE.state = lastE.state+"-left";
                        } else {
                            
                        }
                    }
                }else{
                    console.log(lastpoint.y+" - "+point.y);
                    if((lastpoint.y - point.y)<0){
                        if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                            lastE.SetImage(lastE.state+"-down")
                            lastE.state = lastE.state+"-down";
                        } else {
                            
                        }
                    } else {
                        if(lastE.state.match(/^[^-]*$/g) && !lastE.state.match(/^blank$/g)){ //incase of source was the last element
                            lastE.SetImage(lastE.state+"-up")
                            lastE.state = lastE.state+"-up";
                        } else {
                            
                        }
                    }
                }
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
      ["blank","blank","blank","blank","pink","blank", "pink", "blank", "blank"],
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
      ["blank","blank","pink","blank","blank","pink", "red", "blue", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank", "blank", "blank"],
      ["blank","blank","blank","blank","blank","blank", "green", "orange", "blue"]
    ])
);
