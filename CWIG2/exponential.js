function bigNum(basNum,expNum)  // basNum * 10^expNum
{
    this.bas = basNum;
    this.exp = expNum;
}

//----------------以下是即将废弃的古老代码----------------
//*
function getDigits(value)   //获取数字位数
{
    return Math.floor( Math.log10(value) ) + 1;
}
function toExp(value)   //把数字转成科学计数法(返回string)
{
    if(value < 1e5)
    {
        return value.toFixed( Math.max(0, Math.min(4 , 5 - getDigits(value) ) ) );
    }
    return value.toExponential(4);
}
//*/
//----------------以上是即将废弃的古老代码----------------

function numToExp(num)   //把数字转成科学计数法(返回object)
{
    var newExp = Math.floor( Math.log10( num ) );
    var ret = new bigNum( num / Math.pow(10, newExp) , newExp);
    return ret;
}
function expToStr(value)    //把科学计数法的数字转为string
{
    if(value.exp < 5)
    {
        return (value.bas * Math.pow(10, value.exp)).toFixed(4 - value.exp);
    }
    return '' + value.bas.toFixed(4) + 'e' + (value.exp > 0 ? '+' : '') + value.exp;
}
function expToExp(num)    //把科学计数法的数字转为正规的科学计数法
{
    var value = num;
    if(value.bas)
    {
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
}
function exppToExp(basNum, expNum)    // 把 [ 底数和指数都是 [ 科学计数法的数字 ] 的数字] 转为正规的科学计数法
{
    var ret = new bigNum( basNum.bas , expNum.bas * Math.pow(10 , expNum) + basNum.exp );
    ret = expToExp(ret);
    return ret;
}
function add(val1, val2)    //加法
{
    var ret = new bigNum( val1.bas + val2.bas * Math.pow( 10, val2.exp - val1.exp ) , val1.exp );
    ret = expToExp(ret);
    return ret;
}
function sub(val1, val2)    //减法
{
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