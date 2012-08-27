// Inherit from Screen
MainMenu.prototype = new TGE.Screen();
MainMenu.prototype.constructor = MainMenu;

function MainMenu(screenManager)
{
    TGE.Screen.call(this,screenManager);
    return this;
}

MainMenu.prototype.Setup = function()
{
    this.Game().mPauseButton.Hide();
    this.CreateUIEntity(TGE.ScreenEntity).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
        "screen-background");
    this.CreateUIEntity(TGE.ScreenEntity).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.2),
        "game-name");
    this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
        "mainmenu_play_button", MainMenu.prototype.playGame.bind(this), 2, this.mScreenManager.mLayerName);
}

MainMenu.prototype.playGame = function()
{
    this.Game().mPauseButton.Show();
    this.Game().PlayGame();
    GameTimer.startTimer();
    this.Close();
}