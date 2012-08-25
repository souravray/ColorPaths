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
    this.FillBackground("#ccc");
    this.CreateUIEntity(TGE.Button).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
        "mainmenu_play_button", MainMenu.prototype.playGame.bind(this), 1, this.mScreenManager.mLayerName);
}

MainMenu.prototype.playGame = function()
{
    this.Close();
    this.Game().PlayGame();
}