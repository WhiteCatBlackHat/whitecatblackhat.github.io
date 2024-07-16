window.onload = init;
var game =
{
    //整个游戏需要用到的大部分变量/常量
    normal:
    {
        number: [0,0,0,0,0,0,0,0,0],    //bigNum
        factor: [1,1,1,1,1,1,1,1,1],    //bigNum
        price: [1e0,1e1,1e2,1e3,1e4,1e5,1e6,1e7,1e8],    //bigNum
        speedUpFac: 1    //bigNum
    },
    infinity:
    {
        number: [0,0,0,0,0,0,0,0,0],    //bigNum
        factor: [1,1,1,1,1,1,1,1,1],    //bigNum
        price: [1e0,1e1,1e2,1e3,1e4,1e5,1e6,1e7,1e8],    //bigNum
        upgrade: [0,0,0,0,0,0,0,0,0],
        uPrice: [0,1,1,2,3,4,5,6,7,8,10],   //bigNum
        times: 0,
        energy: 0   //bigNum
    },
    msOfTick: 50,
    intervalId1: null,
    intervalId2: null,
    showing: 'normalGeners',
};

/*
const zero = new bigNum(0,0);  //零
const one = new bigNum(1,0);   //一
const two = new bigNum(2,0);   //二
const ten = new bigNum(1,1);   //十
const tickInSec = new bigNum(5,-2);    //1tick是1秒的5*10^-2倍
const inf1 = new bigNum(1.79769,308); //进入无限需要的普通点数
//*/

function init() //初始化
{
    allToExp();
    loadGame();
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
        var bMANG = document.getElementById('maxAllNG');
        bMANG.onclick = maxAllNG;
        var bSNG = document.getElementById('showNormalGeners');
        bSNG.onclick = showNormalGeners;
        var bSO = document.getElementById('showOthers');
        bSO.onclick = showOthers;
        var bSU = document.getElementById('speedUp');
        bSU.onclick = speedUp;
        var bSIU = document.getElementById('showIU');
        bSIU.onclick = showIU;
        var bGTInf = document.getElementById('goToInf');
        bGTInf.onclick = goToInfinity;
        var bSIG = document.getElementById('showInfGeners');
        bSIG.onclick = showInfGeners;
        var bMAIG = document.getElementById('maxAllIG');
        bMAIG.onclick = maxAllIG;
    }
    game.intervalId1 = setInterval(tick, 50);
    game.intervalId2 = setInterval(saveGame, 10000);
}