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
    // Background
    this.FillBackground("#FFF");

    // Score
    this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.2),
        "Score: " + this.Game().getScore().toString(), "bold 48px Arial", "center", "middle", "#454", this.mScreenManager.mLayerName);

    // Try again
    this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.7),
        "gameover_tryagain_button", GameOver.prototype.playAgain.bind(this), 3, this.mScreenManager.mLayerName);
}


GameOver.prototype.playAgain = function()
{
    this.Game().Replay();
    this.Close();
}