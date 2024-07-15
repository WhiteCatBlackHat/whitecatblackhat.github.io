function equ(val1, val2)    //等于
{
    return ( val1.bas == val2.bas && val1.exp == val2.exp );
}
function less(val1, val2)   //小于
{
    if(val1.exp != val2.exp)
    {
        return val1.exp < val2.exp;
    }
    return val1.bas < val2.bas;
}
function greater(val1, val2)    //大于
{
    if(val1.exp != val2.exp)
    {
        return val1.exp > val2.exp;
    }
    return val1.bas > val2.bas;
}
function leq(val1, val2)    //小于等于
{
    return less(val1, val2) || equ(val1, val2);
}
function geq(val1, val2)    //大于等于
{
    return greater(val1, val2) || equ(val1, val2);
}
function isNan(value)   //判断是不是not a number
{
    return isNaN(value.bas) || isNaN(value.exp);
}
function max(val1, val2)    //两数中较大者
{
    return (geq(val1,val2) ? val1 : val2);
}
function min(val1, val2)    //两数中较小者
{
    return (leq(val1,val2) ? val1 : val2);
}