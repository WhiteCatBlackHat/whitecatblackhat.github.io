window.onload = init;
var game =
{
    number: [0,0,0,0,0,0,0,0,0],
    factor: [1,1,1,1,1,1,1,1,1],
    price: [1e0,1e1,1e2,1e3,1e4,1e5,1e6,1e7,1e8],
    msOfTick: 50,
    intervalId: null
};
function init()
{
    loadGame();
    tick();
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
        var bMA = document.getElementById('maxAll');
        bMA.onclick = maxAll;
    }
    game.intervalId = setInterval(tick, 50);
}