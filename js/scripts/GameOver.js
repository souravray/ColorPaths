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
            "gameover_tryagain_button", GameOver.prototype.retryLevel.bind(this), 2, this.mScreenManager.mLayerName);
     }
    else if(this.Game().gamePlayStatus == this.Game().stageStatus.QUIT_GAME)
     {
        this.Game().this.Game().getScore() = 0;
        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
            "play-again", GameOver.prototype.playAgain.bind(this), 2, this.mScreenManager.mLayerName);
     }
    else if(this.Game().gamePlayStatus == this.Game().stageStatus.LEVEL_PASS)
     {
        this.Game().gameTotalScore += this.Game().getScore();

        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.2),
            "Great, you completed the level..." , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.3),
            "Your score is : " + this.Game().getScore() , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);
        
        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
            "gameover_tryagain_button", GameOver.prototype.retryLevel.bind(this), 2, this.mScreenManager.mLayerName);
        
        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.8),
            "next-level", GameOver.prototype.playNextLevel.bind(this), 2, this.mScreenManager.mLayerName);
     }
     else if(this.Game().gamePlayStatus == this.Game().stageStatus.GAME_COMPLETE)
     {
        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.2),
            "You have completed all levels." , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.3),
            "Come next week to play more...." , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);
        
        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.6),
            "play-again", GameOver.prototype.playAgain.bind(this), 2, this.mScreenManager.mLayerName);

        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.9),
            "Total money won : " + this.Game().gameTotalScore , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);
     }
}

GameOver.prototype.playNextLevel = function()
{
    GameTimer.resetTimer();
    this.Game().gameLevel++;
    this.Game().gamePlayStatus = this.Game().stageStatus.LEVEL_FAILED;
    this.Game().Replay();
    this.Close();
}

GameOver.prototype.playAgain = function()
{
    GameTimer.resetTimer();
    this.Game().gameLevel = 0;
    this.Game().gamePlayStatus = this.Game().stageStatus.LEVEL_FAILED;
    this.Game().Replay();
    this.Close();
}

GameOver.prototype.retryLevel = function()
{
    GameTimer.resetTimer();
    this.Game().gamePlayStatus = this.Game().stageStatus.LEVEL_FAILED;
    this.Game().Replay();
    this.Close();
}