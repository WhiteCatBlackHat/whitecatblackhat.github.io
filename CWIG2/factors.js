function NGFac(num) //普通生成器效果
{
    if( num <= 1 )
    {
        //var nanFac = game.normal.speedUpFac * (game.infinity.times + 1);
        //var nanFac = mul( add( pow( game.infinity.energy , 1 / 2 ) , new bigNum(1,0) ) , mul( game.normal.speedUpFac , add( numToExp( game.infinity.times ) , new bigNum(1,0) ) ) );  //一巨坨公式
        
        var nanFac = mul( add( IEFacNGF() , new bigNum(1,0) ) , mul( game.normal.speedUpFac , mul( add( numToExp( game.infinity.times ) , new bigNum(1,0) ) , add( game.infinity.number[0] , new bigNum(1,0) ) ) ) );  //一巨坨公式
        
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
    if(game.infinity.upgrade[11])
    {
        ret = pow( ret , 3 );
    }
    if(game.infinity.upgrade[12] && !game.infinity.upgrade[13])
    {
        ret = mul( ret , log10(game.infinity.energy) );
    }
    if(game.infinity.upgrade[13])
    {
        ret = pow( ret , expToNum( mul( log10(game.infinity.energy) , new bigNum(1,-1) ) ) );
    }
    return ret;
}
function IEFacNGF()    //无限能量对普通生成器倍率的增幅
{
    if(game.normal.playNC[2])
    {
        return zero();
    }
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
    if(game.infinity.upgrade[15])
    {
        return game.infinity.energy;
    }
    return pow( game.infinity.energy , 1 / 2 );
}
function IEFacIGP()    //无限能量对无限生成器价格的降幅
{
    if(!game.normal.doneNC[2])
    {
        return one();
    }
    if(leq(game.infinity.energy,one()))
    {
        return one();
    }
    return max( new bigNum(1,-2) , numToExp(  -1 / 16 * log2( log10( game.infinity.energy ) ) + 1 ) );
}
function IGPrice(num)   //无限生成器价格
{
    return mul( game.infinity.price[num] , IEFacIGP() );
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
function NPFac()    //点数对普通生成器价格的降幅
{
    if(!game.infinity.upgrade[14])
    {
        return one();
    }
    if(leq(game.normal.number[0],one()))
    {
        return one();
    }
    return max( new bigNum(1,-2) , numToExp(  -1 / 32 * log2( log10( game.normal.number[0] ) ) + 1 ) );
}
function NGPrice(num)   //普通生成器价格
{
    var ret = mul( game.normal.price[num] , NPFac() );
    if(game.normal.playNC[3])
    {
        ret = pow( ret , 2);
    }
    if(game.normal.doneNC[3])
    {
        ret = pow( ret , 0.9);
    }
    return ret;
}