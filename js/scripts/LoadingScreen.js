// Inherit from Screen
LoadingScreen.prototype = new TGE.Screen();
LoadingScreen.prototype.constructor = LoadingScreen;
function LoadingScreen(screenManager)
{
    TGE.Screen.call(this,screenManager);
    this.mLoadingText = null;
    return this;
}

LoadingScreen.prototype.Setup = function()
{
	this.CreateUIEntity(TGE.ScreenEntity).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
        "screen-background");
    this.mLoadingText = this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
        "Please wait while game is loaded...0%", "bold italic 28px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);
}

LoadingScreen.prototype.UpdateProgress = function(percentComplete)
{
    var loadingText = "Please wait while game is loaded..." + Math.round(percentComplete*100).toString() + "%";
    this.mLoadingText.SetText(loadingText);
}