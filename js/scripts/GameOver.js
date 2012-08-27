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
        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
            "play-again", GameOver.prototype.playAgain.bind(this), 2, this.mScreenManager.mLayerName);
     }
    else if(this.Game().gamePlayStatus == this.Game().stageStatus.LEVEL_PASS)
     {
        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.2),
            "Great, you completed the level..." , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.3),
            "Your score is : " + this.Game().getScore() , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.38),
            "Improve your score...", "bold italic 16px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);
        
        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
            "gameover_tryagain_button", GameOver.prototype.retryLevel.bind(this), 2, this.mScreenManager.mLayerName);
        
        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.7),
            "I will earn more in next level...", "bold italic 16px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.8),
            "next-level", GameOver.prototype.playNextLevel.bind(this), 2, this.mScreenManager.mLayerName);
     }
     else if(this.Game().gamePlayStatus == this.Game().stageStatus.GAME_COMPLETE)
     {
        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.2),
            "You have completed all levels." , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.3),
            "Come next week to play more..." , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);
        
        this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.6),
            "play-again", GameOver.prototype.playAgain.bind(this), 2, this.mScreenManager.mLayerName);

        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.85),
            "You won... ", "bold italic 24px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);

        this.CreateUIEntity(TGE.ScreenEntity).Setup( this.mScreenManager.XFromPercentage(0.44), this.mScreenManager.YFromPercentage(0.92),
        "score");

        this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.56), this.mScreenManager.YFromPercentage(0.92),
            this.Game().getGameTotalScore() , "bold italic 20px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);
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