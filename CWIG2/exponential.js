/*
class bigNum {  
    constructor(basNum, expNum) {  
        this.bas = basNum;
        this.exp = expNum;
    }  
}
//*/
//*
function bigNum(basNum,expNum)  // basNum * 10^expNum
{
    this.bas = basNum;
    this.exp = expNum;
}
//*/
function numToExp(num)   //把数字转成科学计数法(返回object)
{
    if(typeof num == 'number')
    {
        if(num)
        {
            var newExp = Math.floor( Math.log10( num ) );
            var ret = new bigNum( num / Math.pow(10, newExp) , newExp);
            return ret;
        }
        var ret = new bigNum(0,0);
        return ret;
    }
    if(typeof num == 'object')
    {
        return num;
    }
    var ret = new bigNum(0,0);
    return ret;
}
function expToStr(value)    //把科学计数法的数字转为string
{
    if(value.exp >= 1e5)
    {
        return 'e' + ( value.exp > 0 ? '+' : '' ) + expToStr( numToExp(value.exp) );
    }
    if(Math.abs(value.exp) < 5)
    {
        return (value.bas * Math.pow(10, value.exp)).toFixed(4 - value.exp);
    }
    return '' + ( (value.bas).toFixed(4) ) + 'e' + ( value.exp > 0 ? '+' : '' ) + value.exp;
}
function expToExp(num)    //把科学计数法的数字转为正规的科学计数法
{
    var value = num;
    if(value.bas)
    {
        value.bas *= Math.pow( 10 , value.exp - Math.floor(value.exp) );
        value.exp = Math.floor(value.exp);
        while( Math.abs(value.bas) < 1)
        {
            value.bas *= 10;
            value.exp--;
        }
        while( Math.abs(value.bas) >= 10)
        {
            value.bas *= 0.1;
            value.exp++;
        }
    }
    else
    {
        value.exp = 0;
    }
    return value;
}
function exppToExp(basNum, expNum)    // 把 [ 底数和指数都是 [ 科学计数法的数字 ] 的数字] 转为正规的科学计数法
{
    var ret = new bigNum( basNum.bas , expNum.bas * Math.pow(10 , expNum) + basNum.exp );
    ret = expToExp(ret);
    return ret;
}
function add(val1, val2)    //加法
{
    if( Math.abs( val1.exp-val2.exp ) >= 308 )  //如果两数差距过大就别算了
    {
        return ( greater( abs(val1) , abs(val2) ) ? new bigNum( val1.bas , val1.exp ) : new bigNum( val2.bas , val2.exp ) );
    }
    var ret = new bigNum( val1.bas + val2.bas * Math.pow( 10, val2.exp - val1.exp ) , val1.exp );
    ret = expToExp(ret);
    return ret;
}
function sub(val1, val2)    //减法
{
    if( Math.abs( val1.exp-val2.exp ) >= 308 )  //如果两数差距过大就别算了
    {
        return ( greater( abs(val1) , abs(val2) ) ? new bigNum( val1.bas , val1.exp ) : new bigNum( -1 * val2.bas , val2.exp ) );
    }
    var ret = new bigNum( val1.bas - val2.bas * Math.pow( 10, val2.exp - val1.exp ) , val1.exp );
    ret = expToExp(ret);
    return ret;
}
function mul(val1, val2)    //乘法
{
    var ret = new bigNum( val1.bas * val2.bas , val1.exp + val2.exp );
    ret = expToExp(ret);
    return ret;
}
function div(val1, val2)    //除法
{
    var ret = new bigNum( val1.bas / val2.bas , val1.exp - val2.exp );
    ret = expToExp(ret);
    return ret;
}
function normalToExp()  //把game.normal下的一些东西转成科学计数法
{
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.normal.number[i] = numToExp(game.normal.number[i]);
        game.normal.factor[i] = numToExp(game.normal.factor[i]);
        game.normal.price[i] = numToExp(game.normal.price[i]);
    }
    game.normal.speedUpFac = numToExp(game.normal.speedUpFac);
}
function infinityToExp()    //把game.infinity下的一些东西转成科学计数法
{
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.infinity.number[i] = numToExp(game.infinity.number[i]);
        game.infinity.factor[i] = numToExp(game.infinity.factor[i]);
        game.infinity.price[i] = numToExp(game.infinity.price[i]);
    }
    for(var i = 0; i <= game.infinity.cntIU; i++)
    {
        game.infinity.uPrice[i] = numToExp(game.infinity.uPrice[i]);
    }
    game.infinity.energy = numToExp(game.infinity.energy);
}
function quarkToExp()    //把game.uQuark和game.dQuark下的一些东西转成科学计数法
{
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.uQuark.number[i] = numToExp(game.uQuark.number[i]);
        game.dQuark.number[i] = numToExp(game.dQuark.number[i]);
    }
}
function electronToExp()    //把game.electron下的一些东西转成科学计数法
{
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.electron.number[i] = numToExp(game.electron.number[i]);
    }
}
function allToExp() //把所有要转成科学计数法的东西转成科学计数法
{
    normalToExp();
    infinityToExp();
    quarkToExp();
    electronToExp();
}
function log10(value)   //以10为底的对数
{
    return numToExp( Math.log10(value.bas) + value.exp );
}
function log2(value)   //以2为底的对数
{
    return (Math.log10(value.bas) + value.exp) / Math.log10(2);
}
function fixExp(value)  //修补NaN的情况
{
    if(isNan(value))
    {
        return new bigNum(0,0);
    }
    return value;
}
function fixNormal()
{
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.normal.number[i] = fixExp(game.normal.number[i]);
        game.normal.factor[i] = fixExp(game.normal.factor[i]);
        game.normal.price[i] = fixExp(game.normal.price[i]);
    }
    game.normal.speedUpFac = fixExp(game.normal.speedUpFac);
}
function fixInfinity()
{
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.infinity.number[i] = fixExp(game.infinity.number[i]);
        game.infinity.factor[i] = fixExp(game.infinity.factor[i]);
        game.infinity.price[i] = fixExp(game.infinity.price[i]);
        game.infinity.uPrice[i] = fixExp(game.infinity.uPrice[i]);
    }
}
function fixAll()
{
    fixNormal();
    fixInfinity();
}
function expToNum(value)
{
    return value.bas * Math.pow( 10 , value.exp );
}
function pow(val1, val2)
{
    var ret = new bigNum( Math.pow( val1.bas , val2 ) , val1.exp * val2 );
    ret = expToExp(ret);
    return ret;
}
function floor(value)
{
    if(Math.abs(value.exp)>=5)
    {
        return value;
    }
    return numToExp( Math.floor( expToNum( value ) ) );
}
function abs(value)
{
    return new bigNum( Math.abs(value.bas) , value.exp );
}