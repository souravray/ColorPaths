
// This is the constructor for the game
MyGame = function()
{
     // Make sure to call the constructor for the superclass
    MyGame.superclass.constructor.call(this);

    //game entities
    this.mBoardObj;

    // Game Images that are required to start the game
    var gameImages = [ 
    	{id:'blank', url:'assets/images/tile.png'},
        {id:'color', url:'assets/images/tile-light-source.png'},
        {id:'color-up', url:'assets/images/tile-light-source-path-up.png'},
        {id:'color-down', url:'assets/images/tile-light-source-path-down.png'},
        {id:'color-right', url:'assets/images/tile-light-source-path-right.png'},
        {id:'color-left', url:'assets/images/tile-light-source-path-left.png'}
    	 ];

    // Tell the game about this list of assets - the "required" category is
    // for assets that need to be fully loaded before the game can start
    this.AssignImageAssetList("required",gameImages);

    //Game state handler
    this.gameState=1;   // 0- paused 1-active 2- over
    this.gameLevel=1;   // 1 to this.mLevels.lenght
    this.gameMode=1;    // game mode 1 - quest, 2 -duet
}

// New methods and overrides for your game class will go in here
MyGame.prototype =
{
	// TGE.Game method override - called when the gameplay starts
    subclassStartPlaying: function()
    {
    	// Clear everything in the scene
        this.ClearScene();
        this.rowsAndColumns =13;
        this.tilesWidthHeight = 42;
        // Fill the background in with white
        this.SetBackgroundColor("#ccc");
        
        var gameMatrix =  (this.gameLevel<gameLevels.length)? gameLevels[this.gameLevel]:$M[[]];
        if(gameMatrix.isSquare() && !gameMatrix.isSingular()){
            this.rowsAndColumns = gameMatrix.rows();
            this.mBoardObj = new boardClass(this, gameMatrix);
        }
    }  
    
}
extend(MyGame, TGE.Game, null);


//board

var boardClass = function(gameContext, templateMatrix){
    this.boardTemplateMatrix = templateMatrix;
    this.currentBoard = new Array();
    this.prepareNewBoard(gameContext);
};

boardClass.prototype = {
    prepareNewBoard: function(gameContext){
        var scale = Math.floor(gameContext.Width()/gameContext.rowsAndColumns)/gameContext.tilesWidthHeight;

        var effectiveTielsWidthHeight = gameContext.tilesWidthHeight * scale;
        var ofsetX = (gameContext.Width() - (gameContext.rowsAndColumns*effectiveTielsWidthHeight))/2.0;
        var ofsetY = (gameContext.Height() - (gameContext.rowsAndColumns*effectiveTielsWidthHeight))- ofsetX;

        for (var rowCounter = 0; rowCounter < gameContext.rowsAndColumns ; rowCounter++)
        {
            this.currentBoard[rowCounter]= new Array();
            for (var columnCounter = 0; columnCounter < gameContext.rowsAndColumns; columnCounter++) 
            {           
                this.currentBoard[rowCounter][columnCounter]= gameContext.CreateWorldEntity(TGE.ScreenEntity).Setup( ofsetX + effectiveTielsWidthHeight/2.0 + (effectiveTielsWidthHeight*rowCounter), ofsetY + effectiveTielsWidthHeight/2.0 + (effectiveTielsWidthHeight*columnCounter), this.boardTemplateMatrix.e(rowCounter+1,columnCounter+1) ); 
                this.currentBoard[rowCounter][columnCounter].SetScale(scale);
                this.currentBoard[rowCounter][columnCounter].state =  this.boardTemplateMatrix.e(rowCounter+1,columnCounter+1);
            };
        };
    }
}


// game levels

var gameLevels = new Array(
    $M([
      ["blank","blank","blank","blank","blank","blank", "blank"],
      ["blank","blank","color","blank","blank","blank", "blank"],
      ["blank","blank","blank","red","blank","blank", "blank"],
      ["blank","blank","color","blank","blank","blank", "blank"],
      ["color","blank","blank","blank","blank","blank", "blank"],
      ["blank","color","blank","blank","blank","color", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank"]
    ]),
    $M([
      ["blank","blank","blank","blank","blank","blank", "blank"],
      ["blank","blank","color","blank","blank","blank", "blank"],
      ["blank","blank","blank","color","blank","blank", "blank"],
      ["blank","blank","color","blank","blank","blank", "blank"],
      ["color","blank","blank","blank","blank","blank", "blank"],
      ["blank","color","blank","blank","blank","color", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank"]
    ])
);
