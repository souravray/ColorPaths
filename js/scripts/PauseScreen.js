// Inherit from Screen
PauseScreen.prototype = new TGE.Screen();
PauseScreen.prototype.constructor = PauseScreen;
function PauseScreen(screenManager)
{
    TGE.Screen.call(this,screenManager);
    return this;
}

PauseScreen.prototype.Setup = function()
{
    GameTimer.pauseTimer();
    
    this.FillBackground(this.CreateUIEntity(TGE.ScreenEntity).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
         "screen-background",this.mScreenManager.mLayerName));

    this.CreateUIEntity(TGE.ScreenEntity).Setup(this.mScreenManager.XFromPercentage(0.06), this.mScreenManager.YFromPercentage(0.35),"time", this.mScreenManager.mLayerName);
    this.CreateUIEntity(TGE.Text).Setup(this.mScreenManager.XFromPercentage(0.22), this.mScreenManager.YFromPercentage(0.36), this.Game().getRemainingTime(GameTimer.getUptime()) +" sec", "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);
        
    this.CreateUIEntity(TGE.ScreenEntity).Setup( this.mScreenManager.XFromPercentage(0.40), this.mScreenManager.YFromPercentage(0.35),"path", this.mScreenManager.mLayerName);
    this.CreateUIEntity(TGE.Text).Setup(this.mScreenManager.XFromPercentage(0.51), this.mScreenManager.YFromPercentage(0.36), this.Game().mDrawtoolObj.paths.length + " / " + this.Game().mBoardObj.paths, "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);
        
    this.CreateUIEntity(TGE.ScreenEntity).Setup( this.mScreenManager.XFromPercentage(0.68), this.mScreenManager.YFromPercentage(0.35),"score", this.mScreenManager.mLayerName);
    this.CreateUIEntity(TGE.Text).Setup(this.mScreenManager.XFromPercentage(0.78), this.mScreenManager.YFromPercentage(0.36), this.Game().getScore(), "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

    this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.2),
        "Game is paused..." , "italic 30px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

    this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.2), this.mScreenManager.YFromPercentage(0.5),
        "pausescreen_resume_button", PauseScreen.prototype.resumeGame.bind(this), 1,this.mScreenManager.mLayerName);
    
    this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.4), this.mScreenManager.YFromPercentage(0.5),
        "Resume" , "italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

    this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.2), this.mScreenManager.YFromPercentage(0.6),
          "restart-level", this.restart.bind(this), 1,this.mScreenManager.mLayerName);

    this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.47), this.mScreenManager.YFromPercentage(0.6),
        "Restart Level" , "italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

    this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.2), this.mScreenManager.YFromPercentage(0.7),
        "quit-game", PauseScreen.prototype.quitGame.bind(this), 1,this.mScreenManager.mLayerName);

    this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.33), this.mScreenManager.YFromPercentage(0.7),
        "Quit" , "italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

    this.CreateUIEntity(TGE.ScreenEntity).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.9),
        "game-name", this.mScreenManager.mLayerName);
}

PauseScreen.prototype.quitGame = function()
{
    this.Game().PauseGame(false);
    this.Game().gamePlayStatus = this.Game().stageStatus.QUIT_GAME;
    this.Game().gameTotalScore = 0;
    this.Game().EndGame();
    this.Close();
}

PauseScreen.prototype.restart = function()
{
    GameTimer.resetTimer();
    this.Game().gamePlayStatus = this.Game().stageStatus.LEVEL_FAILED;
    this.Game().restart();
    this.Game().PauseGame(false);
    this.Close();
}

PauseScreen.prototype.resumeGame = function()
{
    GameTimer.resumeTimer();
    this.Game().PauseGame(false);
}