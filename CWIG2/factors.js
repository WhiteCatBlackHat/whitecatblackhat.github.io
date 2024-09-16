function NGFac(num) //普通生成器效果
{
    if( num <= 1 )
    {
        //var nanFac = game.normal.speedUpFac * (game.infinity.times + 1);
        //var nanFac = mul( add( pow( game.infinity.energy , 1 / 2 ) , one() ) , mul( game.normal.speedUpFac , add( numToExp( game.infinity.times ) , one() ) ) );  //一巨坨公式
        
        var IE = add( IEFacNGF() , one() );
        var SU = game.normal.speedUpFac;
        var IT = add( numToExp( game.infinity.times ) , one() );
        var IN0 = add( game.infinity.number[0] , one() );
        var QandET = add( numToExp( game.uQuark.times + game.dQuark.times + game.electron.times ) , one() );
        var QandEN = add( add( game.uQuark.number[0] , game.dQuark.number[0] ) , add( game.electron.number[0] , one() ) );
        var nanFac = mul( IE , mul( SU , mul( IT , mul( IN0 , mul( QandET , QandEN ) ) ) ) );  //一大坨公式
        
        //if(isNaN(game.normal.number[0]) || game.normal.number[0] < 1)
        if( isNan( game.normal.number[0] ) || less( game.normal.number[0] , one() ) )
        {
            return nanFac;
        }
        //return Math.max( 1.0 , Math.log10( game.normal.number[0] + 1 ) ) * nanFac;
        return mul( max ( one() , log10( add( game.normal.number[0] , one() ) ) ) , nanFac );
    }
    var fac1 = NGFac(1);
    //if(isNaN(game.normal.number[num - 1]) || game.normal.number[num - 1] < 1)
    if(isNan(game.normal.number[num - 1]) || less( game.normal.number[num - 1] , one() ) )
    {
        return fac1;
    }
    //return fac1 * Math.max( 1.0 , Math.log10( game.normal.number[num - 1] + 1 ) );
    return mul( fac1 , max( one() , log10( add( game.normal.number[num - 1] , one() ) ) ) );
}
function SUFac()    //加速效果
{
    //return Math.max( 1.0 , Math.log10( game.normal.number[0] + 1 ) );
    var ret = max( one() , log10( add( game.normal.number[0] , one() ) ) );
    if(game.infinity.upgrade[11])
    {
        ret = pow( ret , 3 );
    }
    if(game.infinity.upgrade[12] && !game.infinity.upgrade[13])
    {
        ret = mul( ret , max( log10(game.infinity.energy), one() ) );
    }
    if(game.infinity.upgrade[13])
    {
        ret = pow( ret , expToNum( mul( max( log10(game.infinity.energy), one() ) , new bigNum(1,-1) ) ) );
    }
    if( greater( ret , new bigNum(1,300) ) )    //加速效果超过1e300时软上限启用
    {
        ret = mul( pow( ret , 0.1 ) , new bigNum(1,270) );
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
    var ret = ( game.infinity.upgrade[15] ? game.infinity.energy : pow( game.infinity.energy , 1 / 2 ) );
    if( greater( ret , new bigNum(1,300) ) )    //无限能量效果超过1e300时软上限启用
    {
        ret = mul( pow( ret , 0.1 ) , new bigNum(1,270) );
    }
    return ret;
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
        var QandET = add( numToExp( game.uQuark.times + game.dQuark.times + game.electron.times ) , one() );
        var QandEN = add( add( game.uQuark.number[0] , game.dQuark.number[0] ) , add( game.electron.number[0] , one() ) );
        var nanFac = mul( QandET , QandEN );
        if(isNan(game.infinity.number[0]) || less(game.infinity.number[0] , one()))
        {
            return nanFac;
        }
        return mul( max ( one() , log10( add( game.infinity.number[0] , one() ) ) ) , nanFac );
    }
    var fac1 = IGFac(1);
    if(isNan(game.infinity.number[num - 1]) || less( game.infinity.number[num - 1] , one() ) )
    {
        return fac1;
    }
    return mul( fac1 , max( one() , log10( add( game.infinity.number[num - 1] , one() ) ) ) );
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