// Inherit from Screen
GameOver.prototype = new TGE.Screen();
GameOver.prototype.constructor = GameOver;
function GameOver(screenManager)
{
    TGE.Screen.call(this,screenManager);

    return this;
}


GameOver.prototype.Setup = function()
{
    GameTimer.stopTimer();
    GameTimer.resetTimer();
    this.CreateUIEntity(TGE.ScreenEntity).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
        "screen-background");

    if(this.Game().gamePlayStatus == this.Game().stageStatus.LEVEL_FAILED)
     {
        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.2),
            "Oh My God, you are too lazy..." , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
            "gameover_tryagain_button", GameOver.prototype.playAgain.bind(this), 2, this.mScreenManager.mLayerName);
     }
    else if(this.Game().gamePlayStatus == this.Game().stageStatus.QUIT_GAME)
     {
        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
            "play-again", GameOver.prototype.playAgain.bind(this), 2, this.mScreenManager.mLayerName);
     }
}


GameOver.prototype.playAgain = function()
{
    GameTimer.resetTimer();
    this.Game().Replay();
    this.Close();
}