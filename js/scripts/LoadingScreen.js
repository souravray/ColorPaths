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
	this.FillBackground("#000");
    this.mLoadingText = this.CreateUIEntity(TGE.Text).Setup( this.mScreenManager.XFromPercentage(0.5), this.mScreenManager.YFromPercentage(0.5),
        "Loaded...0%", "bold italic 28px Arial", "center", "middle", "#FFF", this.mScreenManager.mLayerName);
}

LoadingScreen.prototype.UpdateProgress = function(percentComplete)
{
    var loadingText = "Loaded..." + Math.round(percentComplete*100).toString() + "%";
    this.mLoadingText.SetText(loadingText);
}