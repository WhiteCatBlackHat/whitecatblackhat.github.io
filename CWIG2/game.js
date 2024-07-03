window.onload = init;
var game =
{
    points: 0
};
function init()
{
    loadGame();
    if(document.getElementById)
    {
        var bPlus1 = document.getElementById('plus1');
        bPlus1.onclick = plus1;
        var bSave = document.getElementById('save');
        bSave.onclick = saveGame;
        var bLoad = document.getElementById('load');
        bLoad.onclick = loadGame;
        var bSR = document.getElementById('softReset');
        bSR.onclick = softReset;
        var bHR = document.getElementById('hardReset');
        bHR.onclick = hardReset;
    }
}
setInterval(saveGame, 10000);   //每10秒自动存档(不一定可靠)