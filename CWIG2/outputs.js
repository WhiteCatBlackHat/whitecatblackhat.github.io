function optPoints()    //输出各种(广义的)点数
{
    var sNP = document.getElementById('points');
    sNP.textContent = expToStr(game.normal.number[0]);
    var sIP = document.getElementById('infPoints');
    sIP.textContent = expToStr(game.infinity.number[0]);
    var sUQ = document.getElementById('upQuark');
    sUQ.textContent = expToStr(game.uQuark.number[0]);
    var sDQ = document.getElementById('downQuark');
    sDQ.textContent = expToStr(game.dQuark.number[0]);
    var sE = document.getElementById('electron');
    sE.textContent = expToStr(game.electron.number[0]);
}
function optNG(num)  //输出普通生成器
{
    var sNumG = document.getElementById('numG' + num);
    sNumG.textContent = expToStr(game.normal.number[num]);
    var sFacG = document.getElementById('facG' + num);
    sFacG.textContent = expToStr( mul( game.normal.factor[num] , NGFac(num) ) );
    var sPriG = document.getElementById('priG' + num);
    sPriG.textContent = expToStr(NGPrice(num));
}
function optSU()    //输出加速效果
{
    var sSUFac = document.getElementById('SUFac');
    sSUFac.textContent = expToStr(game.normal.speedUpFac);
    var sSUFacNow = document.getElementById('SUNow');
    sSUFacNow.textContent = expToStr(SUFac());
}
function optInfP()  //输出现在能获得的无限点数
{
    var bGTInf = document.getElementById('goToInf');
    //var sGIPT = document.getElementById('getInfPText');
    if(geq( game.normal.number[0] , new bigNum(1.79769,308)))
    {
        //bGTInf.disabled = sGIPT.hidden = false;
        bGTInf.disabled = false;
    }
    else
    {
        //bGTInf.disabled = sGIPT.hidden = true;
        bGTInf.disabled = true;
    }
    var sGIPN = document.getElementById('getInfPNum');
    sGIPN.textContent = expToStr( calInfPoint() );
}
function optQandE()  //输出现在能获得的夸克/电子
{
    var bGTUQ = document.getElementById('goToUQuark');
    var bGTDQ = document.getElementById('goToDQuark');
    var bGTE = document.getElementById('goToElectron');
    var canGTQandE = ( geq( game.infinity.number[0] , new bigNum(1.79769,308)) ? false : true );
    bGTUQ.disabled = canGTQandE;
    bGTDQ.disabled = canGTQandE;
    bGTE.disabled = canGTQandE;
    var sGUQN = document.getElementById('getUQuarkNum');
    var sGDQN = document.getElementById('getDQuarkNum');
    var sGEN = document.getElementById('getElectronNum');
    sGUQN.textContent = sGDQN.textContent = expToStr( calQuark() );
    sGEN.textContent = expToStr( calElectron() );
}
function optIG(num)  //输出无限生成器
{
    var sNumIG = document.getElementById('numIG' + num);
    sNumIG.textContent = expToStr(game.infinity.number[num]);
    var sFacIG = document.getElementById('facIG' + num);
    sFacIG.textContent = expToStr( mul( game.infinity.factor[num] , IGFac(num) ) );
    var sPriIG = document.getElementById('priIG' + num);
    sPriIG.textContent = expToStr( IGPrice(num) );
}
function optIE()    //输出无限能量
{
    var sIGN = document.getElementById('infEnergyNum');
    sIGN.textContent = expToStr(game.infinity.energy);
    var sIGF = document.getElementById('infEnergyFac');
    sIGF.textContent = expToStr( IEFacNGF() );
}
//----------------屎山开始----------------
function tick() //状态更新
{
    //这里堆了一坨屎山, 最好不要尝试重构, 会死得很惨, 加点注释就行了 (写于2024.07.20)
    
    //生成器的自动购买
    for(var i=1; i<=game.cntGeners; i++)
    {
        if(game.infinity.upgrade[i+1] && game.normal.abNG[i])
        {
            autobuyNG(i);
        }
    }
    //生成器的生成
    generateNG();
    generateIG();
    //处理NaN
    fixAll();
    //输出点数和无限点数
    optPoints();
    optInfP();
    optQandE();
    //输出普通生成器
    for(var i=1; i<=game.cntGeners; i++)
    {
        optNG(i);
        var bBuyG = document.getElementById('buyG' + i);
        bBuyG.disabled = ( ( geq( game.normal.number[0] , NGPrice(i) ) ) ? false : true );
    }
    //输出加速
    optSU();
    var bSU = document.getElementById('speedUp');
    bSU.disabled = ( ( geq( game.normal.number[0] , new bigNum(1,1)) ) ? ( game.normal.playNC[1] ? true : false ) : true );
    //输出无限升级
    for(var i=1; i<=game.infinity.cntIU; i++)
    {
        var bBuyIU = document.getElementById('buyIU' + i);
        bBuyIU.disabled = ( ( geq( game.infinity.number[0] , game.infinity.uPrice[i] ) ) ? ( game.infinity.upgrade[i] ? true : false ) : true );
        if(i==13 && !game.infinity.upgrade[12])
        {
            bBuyIU.disabled = true;
        }
        bBuyIU.textContent = (game.infinity.upgrade[i] ? '已购买' : '购买');
        var pIU = document.getElementById('IU' + i);
        pIU.style = ( game.infinity.upgrade[i] ? 'color: #0D0;' : 'color: #F00;' );
    }
    var bSIU = document.getElementById('showIU');
    bSIU.disabled = (game.infinity.times ? ( game.showing == 'IU' ? true : false ) : true);
    //输出无限生成器
    var bSIG = document.getElementById('showInfGeners');
    bSIG.disabled = (
        game.infinity.upgrade[1] && 
        game.infinity.upgrade[2] && 
        game.infinity.upgrade[3] && 
        game.infinity.upgrade[4] && 
        game.infinity.upgrade[5] && 
        game.infinity.upgrade[6] && 
        game.infinity.upgrade[7] && 
        game.infinity.upgrade[8] && 
        game.infinity.upgrade[9] && 
        game.infinity.upgrade[10] 
    ? ( game.showing == 'infinityGeners' ? true : false ) : true);
    for(var i=1; i<=game.cntGeners; i++)
    {
        optIG(i);
        var bBuyIG = document.getElementById('buyIG' + i);
        bBuyIG.disabled = ( ( geq( game.infinity.number[0] , IGPrice(i) ) ) ? false : true );
    }
    //输出无限能量
    optIE();
    //输出自动购买
    var bSAB = document.getElementById('showAB');
    bSAB.disabled = (
        game.infinity.upgrade[2] || 
        game.infinity.upgrade[3] || 
        game.infinity.upgrade[4] || 
        game.infinity.upgrade[5] || 
        game.infinity.upgrade[6] || 
        game.infinity.upgrade[7] || 
        game.infinity.upgrade[8] || 
        game.infinity.upgrade[9] 
    ? ( game.showing == 'autobuy' ? true : false ) : true);
    for(var i = 1; i <= game.cntGeners; i++)
    {
        var cABNG = document.getElementById('abNG' + i);
        if(game.infinity.upgrade[i+1])
        {
            cABNG.disabled = ( game.infinity.upgrade[ i + 1 ] ? false : true );
        }
        cABNG.checked = game.normal.abNG[i];
    }
    //输出普通挑战
    var bSNC = document.getElementById('showNC');
    bSNC.disabled = (
        game.infinity.upgrade[11] && 
        game.infinity.upgrade[12] && 
        game.infinity.upgrade[13] && 
        game.infinity.upgrade[14] && 
        game.infinity.upgrade[15] 
    ? ( game.showing == 'NC' ? true : false ) : true);
    for(var i = 1; i <= game.normal.cntNC; i++)
    {
        var bSNC = document.getElementById('setNC' + i);
        bSNC.textContent = ( game.normal.playNC[i] ? '退出' : '开始' );
        var pNC = document.getElementById('NC' + i);
        pNC.style = ( game.normal.doneNC[i] ? 'color: #0D0;' : 'color: #F00;' );
    }
}