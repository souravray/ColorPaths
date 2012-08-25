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
	this.CreateUIEntity(TGE.ScreenEntity).Setup(TGE.ScreenEntity).Setup(this.mScreenManager.XFromPercentage(0),this.mScreenManager.XFromPercentage(0));

    this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.91), this.mScreenManager.YFromPercentage(0.07),
        "pausescreen_resume_button", PauseScreen.prototype.resumeGame.bind(this), 1,this.mScreenManager.mLayerName);
}

PauseScreen.prototype.resumeGame = function()
{
    this.Game().PauseGame(false);
}