function optSaveText()  //以文本形式导出存档
{
    var ret = '';
    for(var i = 0; i <= game.cntGeners; i++)
    {
        ret += game.normal.number[i].bas.toFixed(4) + ' ';
        ret += game.normal.number[i].exp.toExponential(4) + ' ';
    }
    for(var i = 0; i <= game.cntGeners; i++)
    {
        ret += game.normal.factor[i].bas.toFixed(4) + ' ';
        ret += game.normal.factor[i].exp.toExponential(4) + ' ';
    }
    for(var i = 0; i <= game.cntGeners; i++)
    {
        ret += game.normal.price[i].bas.toFixed(4) + ' ';
        ret += game.normal.price[i].exp.toExponential(4) + ' ';
    }
    ret += game.normal.speedUpFac.bas.toFixed(4) + ' ';
    ret += game.normal.speedUpFac.exp.toExponential(4) + ' ';
    for(var i = 0; i <= game.cntGeners; i++)
    {
        ret += game.infinity.number[i].bas.toFixed(4) + ' ';
        ret += game.infinity.number[i].exp.toExponential(4) + ' ';
    }
    for(var i = 0; i <= game.cntGeners; i++)
    {
        ret += game.infinity.factor[i].bas.toFixed(4) + ' ';
        ret += game.infinity.factor[i].exp.toExponential(4) + ' ';
    }
    for(var i = 0; i <= game.cntGeners; i++)
    {
        ret += game.infinity.price[i].bas.toFixed(4) + ' ';
        ret += game.infinity.price[i].exp.toExponential(4) + ' ';
    }
    for(var i = 0; i <= game.infinity.cntIU; i++)
    {
        ret += game.infinity.upgrade[i] + ' ';
    }
    ret += game.infinity.times + ' ';
    ret += game.infinity.energy.bas.toFixed(4) + ' ';
    ret += game.infinity.energy.exp.toExponential(4) + ' ';
    for(var i = 0; i <= game.cntGeners; i++)
    {
        ret += game.normal.abNG[i] + ' ';
    }
    var tST = document.getElementById('saveText');
    tST.value = ret;
}
var p;
function getInt(str)
{
    var ret = '';
    for(; str[p]!=' '; p++)
    {
        ret+=str[p];
    }
    p++;
    return parseInt(ret);
}
function getFloat(str)
{
    var ret = '';
    for(; str[p]!=' '; p++)
    {
        ret+=str[p];
    }
    p++;
    return parseFloat(ret);
}
function iptSaveText()    //以文本形式导入存档
{
    var tST = document.getElementById('saveText');
    var sST = tST.value;
    p = 0;
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.normal.number[i].bas = getFloat(sST);
        console.log( game.normal.number[i].bas + ' ' );
        game.normal.number[i].exp = getFloat(sST);
        console.log( game.normal.number[i].exp + ' ' );
    }
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.normal.factor[i].bas = getFloat(sST);
        game.normal.factor[i].exp = getFloat(sST);
    }
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.normal.price[i].bas = getFloat(sST);
        game.normal.price[i].exp = getFloat(sST);
    }
    game.normal.speedUpFac.bas = getFloat(sST);
    game.normal.speedUpFac.exp = getFloat(sST);
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.infinity.number[i].bas = getFloat(sST);
        game.infinity.number[i].exp = getFloat(sST);
    }
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.infinity.factor[i].bas = getFloat(sST);
        game.infinity.factor[i].exp = getFloat(sST);
    }
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.infinity.price[i].bas = getFloat(sST);
        game.infinity.price[i].exp = getFloat(sST);
    }
    for(var i = 0; i <= game.infinity.cntIU; i++)
    {
        game.infinity.upgrade[i] = getInt(sST);
    }
    game.infinity.times = getFloat(sST);
    game.infinity.energy.bas = getFloat(sST);
    game.infinity.energy.exp = getFloat(sST);
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.normal.abNG[i] = getInt(sST);
    }
}