GameTimer = function()
{
    GameTime.upTime = 0;
};

GameTimer.updateTime = function()
{
   GameTimer.t++;
};

GameTimer.startTimer = function()
{
    clearInterval(GameTimer.timerObj);
    GameTimer.timerObj=setInterval(function(){GameTimer.updateTime()},1000);
};

GameTimer.stopTimer = function()
{
    clearInterval(GameTimer.timerObj);
    GameTimer.t= 0;
};

GameTimer.pauseTimer = function()
{
    clearInterval(GameTimer.timerObj);
};

GameTimer.resumeTimer = function()
{
    GameTimer.startTimer();
};

GameTimer.resetTimer = function()
{
    GameTimer.stopTimer();
    GameTimer.t= 0;
    GameTimer.startTimer();
};

GameTimer.getUptime = function()
{
    return GameTimer.t;
};

GameTimer.t= 0;
GameTimer.timerObj;