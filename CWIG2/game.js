window.onload = init;
var game;

function init() //初始化
{
    game =
    {
        //整个游戏需要用到的大部分变量/常量
        normal:
        {
            number: [0,0,0,0,0,0,0,0,0],    //bigNum
            factor: [1,1,1,1,1,1,1,1,1],    //bigNum
            price: [1e0,1e1,1e2,1e3,1e4,1e5,1e6,1e7,1e8],    //bigNum
            speedUpFac: 1,  //bigNum
            abNG: [0,0,0,0,0,0,0,0,0],
            playNC: [0,
                0,0,0
            ],
            doneNC: [0,
                0,0,0
            ],
            NCGoal: [zero(),
                new bigNum(1,5300), new bigNum(1,5700), new bigNum(1,2750)
            ],  //bigNum
            cntNC: 3,
        },
        infinity:
        {
            number: [0,0,0,0,0,0,0,0,0],    //bigNum
            factor: [1,1,1,1,1,1,1,1,1],    //bigNum
            price: [1e0,1e1,1e2,1e3,1e4,1e5,1e6,1e7,1e8],    //bigNum
            upgrade: [0,
                0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0
            ],
            uPrice: [0,
                1,1,2,3,4,5,6,7,8,10,
                5000,2e5,2e6,2e20,5e24
            ],  //bigNum
            cntIU: 15,
            times: 0,
            energy: 0,  //bigNum
        },
        uQuark:
        {
            number: [0,0,0,0,0,0,0,0,0],    //bigNum
            times: 0,
        },
        dQuark:
        {
            number: [0,0,0,0,0,0,0,0,0],    //bigNum
            times: 0,
        },
        electron:
        {
            number: [0,0,0,0,0,0,0,0,0],    //bigNum
            times: 0,
        },
        msOfTick: 50,
        intervalId1: null,
        intervalId2: null,
        showing: 'normalGeners',
        cntGeners: 8,
    };
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
        var bOST = document.getElementById('outSaveText');
        bOST.onclick = optSaveText;
        var bIST = document.getElementById('inSaveText');
        bIST.onclick = iptSaveText;
        var bSAB = document.getElementById('showAB');
        bSAB.onclick = showAB;
        var bSNC = document.getElementById('showNC');
        bSNC.onclick = showNC;
        var bGTUQ = document.getElementById('goToUQuark');
        bGTUQ.onclick = goToUQuark;
        var bGTDQ = document.getElementById('goToDQuark');
        bGTDQ.onclick = goToDQuark;
        var bGTE = document.getElementById('goToElectron');
        bGTE.onclick = goToElectron;
    }
    game.intervalId1 = setInterval(tick, game.msOfTick);
    game.intervalId2 = setInterval(saveGame, 10000);
}