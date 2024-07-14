function optPoints()    //输出点数
{
    var sNP = document.getElementById('points');
    sNP.textContent = toExp(game.normal.number[0]);
    var sIP = document.getElementById('infPoints');
    sIP.textContent = toExp(game.infinity.number[0]);
}
function optGener(num)  //输出生成器
{
    var sNumG = document.getElementById('numG' + num);
    sNumG.textContent = toExp(game.normal.number[num]);
    var sFacG = document.getElementById('facG' + num);
    sFacG.textContent = toExp(game.normal.factor[num] * NGFac(num) );
    var sPriG = document.getElementById('priG' + num);
    sPriG.textContent = toExp(game.normal.price[num]);
}
function optSU()
{
    var sSUFac = document.getElementById('SUFac');
    sSUFac.textContent = toExp(game.normal.speedUpFac);
    var sSUFacNow = document.getElementById('SUNow');
    sSUFacNow.textContent = toExp(SUFac());
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
    gotoInfinity();
    optPoints();
    for(var i=1; i<=8; i++)
    {
        optGener(i);
        var bBuyG = document.getElementById('buyG' + i);
        bBuyG.disabled = ((game.normal.number[0] >= game.normal.price[i]) ? false : true);
    }
    optSU();
    var bSU = document.getElementById('speedUp');
    bSU.disabled = ((game.normal.number[0] >= 10) ? false : true);
    for(var i=1; i<=10; i++)
    {
        var bBuyIU = document.getElementById('buyIU' + i);
        bBuyIU.disabled = ((game.infinity.number[0] >= game.infinity.uPrice[i]) ? (game.infinity.upgrade[i] ? true : false) : true);
        bBuyIU.textContent = (game.infinity.upgrade[i] ? '已购买' : '购买');
        var pIU = document.getElementById('IU' + i);
        pIU.style = (game.infinity.upgrade[i] ? 'color: #0F0;' : 'color: #F00;');
    }
}