function optPoints()    //输出点数
{
    var sNP = document.getElementById('points');
    sNP.textContent = expToStr(game.normal.number[0]);
    var sIP = document.getElementById('infPoints');
    sIP.textContent = expToStr(game.infinity.number[0]);
}
function optGener(num)  //输出生成器
{
    var sNumG = document.getElementById('numG' + num);
    sNumG.textContent = expToStr(game.normal.number[num]);
    var sFacG = document.getElementById('facG' + num);
    sFacG.textContent = expToStr( mul( game.normal.factor[num] , NGFac(num) ) );
    var sPriG = document.getElementById('priG' + num);
    sPriG.textContent = expToStr(game.normal.price[num]);
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
    if(geq( game.normal.number[0] , inf1))
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
function tick() //状态更新
{
    for(var i=1; i<=8; i++)
    {
        if(game.infinity.upgrade[i+1])
        {
            autobuyGener(i);
        }
    }
    generate();
    fixAll();
    optPoints();
    optInfP();
    for(var i=1; i<=8; i++)
    {
        optGener(i);
        var bBuyG = document.getElementById('buyG' + i);
        bBuyG.disabled = ( ( geq( game.normal.number[0] , game.normal.price[i] ) ) ? false : true );
    }
    optSU();
    var bSU = document.getElementById('speedUp');
    bSU.disabled = ( ( geq( game.normal.number[0] , new bigNum(1,1)) ) ? false : true );
    for(var i=1; i<=10; i++)
    {
        var bBuyIU = document.getElementById('buyIU' + i);
        bBuyIU.disabled = ( ( geq( game.infinity.number[0] , game.infinity.uPrice[i] ) ) ? ( game.infinity.upgrade[i] ? true : false ) : true );
        bBuyIU.textContent = (game.infinity.upgrade[i] ? '已购买' : '购买');
        var pIU = document.getElementById('IU' + i);
        pIU.style = ( game.infinity.upgrade[i] ? 'color: #0F0;' : 'color: #F00;' );
    }
}