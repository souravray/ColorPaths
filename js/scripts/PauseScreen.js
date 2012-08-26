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
	this.CreateUIEntity(TGE.ScreenEntity).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
        "screen-background");
	this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.2), this.mScreenManager.YFromPercentage(0.5),
        "pausescreen_resume_button", PauseScreen.prototype.resumeGame.bind(this), 1,this.mScreenManager.mLayerName);
	this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.2), this.mScreenManager.YFromPercentage(0.6),
       	  "restart-level", this.restart.bind(this), 1,this.mScreenManager.mLayerName);
    this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.2), this.mScreenManager.YFromPercentage(0.7),
        "quit-game", PauseScreen.prototype.quitGame.bind(this), 1,this.mScreenManager.mLayerName);
}

PauseScreen.prototype.quitGame = function()
{
    this.Game().PauseGame(false);
    this.Game().EndGame();
    this.Close();
}

PauseScreen.prototype.restart = function()
{
	GameTimer.resetTimer();
    this.Game().restart();
    this.Game().PauseGame(false);
    this.Close();
}

PauseScreen.prototype.resumeGame = function()
{
	GameTimer.resumeTimer();
    this.Game().PauseGame(false);
}