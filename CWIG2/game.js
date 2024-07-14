window.onload = init;
var game =
{
    //整个游戏需要用到的大部分变量/常量
    normal:
    {
        number: [0,0,0,0,0,0,0,0,0],
        factor: [1,1,1,1,1,1,1,1,1],
        price: [1e0,1e1,1e2,1e3,1e4,1e5,1e6,1e7,1e8],
        speedUpFac: 1
    },
    infinity:
    {
        number: [0,0,0,0,0,0,0,0,0],
        factor: [1,1,1,1,1,1,1,1,1],
        price: [1e0,1e1,1e2,1e3,1e4,1e5,1e6,1e7,1e8],
        upgrade: [0,0,0,0,0,0,0,0,0],
        uPrice: [0,1,1,2,3,4,5,6,7,8,10],
        times: 0
    },
    msOfTick: 50,
    intervalId1: null,
    intervalId2: null
};
function init() //初始化
{
    loadGame();
    tick();
    showNormalGeners();
    if(document.getElementById) //设置按钮按下后的行为
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
        var bSG = document.getElementById('showNormalGeners');
        bSG.onclick = showNormalGeners;
        var bSO = document.getElementById('showOthers');
        bSO.onclick = showOthers;
        var bSU = document.getElementById('speedUp');
        bSU.onclick = speedUp;
        var bSIU = document.getElementById('showIU');
        bSIU.onclick = showIU;
    }
    game.intervalId1 = setInterval(tick, 50);
    game.intervalId2 = setInterval(saveGame, 10000);
}