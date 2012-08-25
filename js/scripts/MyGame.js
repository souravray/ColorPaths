
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
        {id:'blue-left', url:'assets/images/tile-blue-source-path-left.png'}
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
      ["blank","blank","blue","blank","blank","blank", "blank"],
      ["blank","blank","blank","red","blank","blank", "blank"],
      ["blank","blank","red","blank","blank","blank", "blank"],
      ["green","blank","blank","blank","blank","blank", "blank"],
      ["blank","blue","blank","blank","blank","green", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank"]
    ]),
    $M([
      ["blank","blank","blank","blank","blank","blank", "blank"],
      ["blank","blank","pink","blank","blank","blank", "blank"],
      ["blank","blank","blank","green","blank","blank", "blank"],
      ["blank","blank","green","blank","blank","blank", "blank"],
      ["pink","blank","blank","blank","blank","blank", "blank"],
      ["blank","blue","blank","blank","blank","blue", "blank"],
      ["blank","blank","blank","blank","blank","blank", "blank"]
    ])
);
