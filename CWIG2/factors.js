function NGFac(num) //普通生成器效果
{
    if( num <= 1 )
    {
        //var nanFac = game.normal.speedUpFac * (game.infinity.times + 1);
        //var nanFac = mul( add( pow( game.infinity.energy , 1 / 2 ) , new bigNum(1,0) ) , mul( game.normal.speedUpFac , add( numToExp( game.infinity.times ) , new bigNum(1,0) ) ) );  //一巨坨公式
        
        var nanFac = mul( add( pow( game.infinity.energy , 1 / 2 ) , new bigNum(1,0) ) , mul( game.normal.speedUpFac , mul( add( numToExp( game.infinity.times ) , new bigNum(1,0) ) , add( game.infinity.number[0] , new bigNum(1,0) ) ) ) );  //一巨坨公式
        
        //if(isNaN(game.normal.number[0]) || game.normal.number[0] < 1)
        if( isNan( game.normal.number[0] ) || less( game.normal.number[0] , new bigNum(1,0) ) )
        {
            return nanFac;
        }
        //return Math.max( 1.0 , Math.log10( game.normal.number[0] + 1 ) ) * nanFac;
        return mul( max ( new bigNum(1,0) , log10( add( game.normal.number[0] , new bigNum(1,0) ) ) ) , nanFac );
    }
    var fac1 = NGFac(1);
    //if(isNaN(game.normal.number[num - 1]) || game.normal.number[num - 1] < 1)
    if(isNan(game.normal.number[num - 1]) || less( game.normal.number[num - 1] , new bigNum(1,0) ) )
    {
        return fac1;
    }
    //return fac1 * Math.max( 1.0 , Math.log10( game.normal.number[num - 1] + 1 ) );
    return mul( fac1 , max( new bigNum(1,0) , log10( add( game.normal.number[num - 1] , new bigNum(1,0) ) ) ) );
}
function SUFac()    //加速效果
{
    //return Math.max( 1.0 , Math.log10( game.normal.number[0] + 1 ) );
    var ret = max( new bigNum(1,0) , log10( add( game.normal.number[0] , new bigNum(1,0) ) ) );
    //*
    if(game.infinity.upgrade[12] && !game.infinity.upgrade[13])
    {
        ret = mul( ret , log10(game.infinity.energy) );
    }
    //*/
    if(game.infinity.upgrade[11])
    {
        ret = pow( ret , 3 );
    }
    if(game.infinity.upgrade[13])
    {
        ret = pow( ret , expToNum( mul( log10(game.infinity.energy) , new bigNum(1,-1) ) ) );
    }
    return ret;
}
function IEFac()    //无限能量效果
{
    /*
    if( greater( game.infinity.energy , new bigNum(3.40282,38) ) )
    {
        return add( pow( new bigNum(3.40282,38) , 1 / 2 ) , mul( log10( sub( game.infinity.energy , new bigNum(3.40282,38) ) ) , new bigNum(5,-1) ) );
    }
    else
    {
        return pow( game.infinity.energy , 1 / 2 );
    }
    */
    return pow( game.infinity.energy , 1 / 2 );
}
function IGFac(num) //无限生成器效果
{
    if( num <= 1 )
    {
        var nanFac = new bigNum(1,0);
        if(isNan(game.infinity.number[0]) || less(game.infinity.number[0] , new bigNum(1,0)))
        {
            return nanFac;
        }
        return mul( max ( new bigNum(1,0) , log10( add( game.infinity.number[0] , new bigNum(1,0) ) ) ) , nanFac );
    }
    var fac1 = IGFac(1);
    if(isNan(game.infinity.number[num - 1]) || less( game.infinity.number[num - 1] , new bigNum(1,0) ) )
    {
        return fac1;
    }
    return mul( fac1 , max( new bigNum(1,0) , log10( add( game.infinity.number[num - 1] , new bigNum(1,0) ) ) ) );
}