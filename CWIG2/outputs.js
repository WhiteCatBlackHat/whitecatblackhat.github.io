function optPoints()    //输出点数
{
    var sPoints = document.getElementById('points');
    sPoints.textContent = toExp(game.number[0]);
}
function optGener(num)  //输出生成器
{
    var sNumG = document.getElementById('numG' + num);
    sNumG.textContent = toExp(game.number[num]);
    var sFacG = document.getElementById('facG' + num);
    sFacG.textContent = toExp(game.factor[num] * calcFac1() );
    var sPriG = document.getElementById('priG' + num);
    sPriG.textContent = toExp(game.price[num]);
}
function tick() //状态更新
{
    generate();
    optPoints();
    for(var i=1; i<=8; i++)
    {
        optGener(i);
        var bBuyG = document.getElementById('buyG' + i);
        bBuyG.disabled = ((game.number[0] >= game.price[i]) ? false : true);
    }
}