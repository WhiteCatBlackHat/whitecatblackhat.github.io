function optPoints()    //输出点数
{
    var sNP = document.getElementById('points');
    sNP.textContent = expToStr(game.normal.number[0]);
    var sIP = document.getElementById('infPoints');
    sIP.textContent = expToStr(game.infinity.number[0]);
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
function optIG(num)  //输出无限生成器
{
    var sNumIG = document.getElementById('numIG' + num);
    sNumIG.textContent = expToStr(game.infinity.number[num]);
    var sFacIG = document.getElementById('facIG' + num);
    sFacIG.textContent = expToStr( mul( game.infinity.factor[num] , IGFac(num) ) );
    var sPriIG = document.getElementById('priIG' + num);
    sPriIG.textContent = expToStr(game.infinity.price[num]);
}
function optIE()    //输出无限能量
{
    var sIGN = document.getElementById('infEnergyNum');
    sIGN.textContent = expToStr(game.infinity.energy);
    var sIGF = document.getElementById('infEnergyFac');
    sIGF.textContent = expToStr( IEFac() );
}
function tick() //状态更新
{
    for(var i=1; i<=game.cntGeners; i++)
    {
        if(game.infinity.upgrade[i+1])
        {
            autobuyNG(i);
        }
    }
    generateNG();
    generateIG();
    fixAll();
    optPoints();
    optInfP();
    for(var i=1; i<=game.cntGeners; i++)
    {
        optNG(i);
        var bBuyG = document.getElementById('buyG' + i);
        bBuyG.disabled = ( ( geq( game.normal.number[0] , game.normal.price[i] ) ) ? false : true );
    }
    optSU();
    var bSU = document.getElementById('speedUp');
    bSU.disabled = ( ( geq( game.normal.number[0] , new bigNum(1,1)) ) ? false : true );
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
        bBuyIG.disabled = ( ( geq( game.infinity.number[0] , game.infinity.price[i] ) ) ? false : true );
    }
    optIE();
}