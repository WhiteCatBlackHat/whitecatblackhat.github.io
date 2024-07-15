function NGFac(num)
{
    if( num <= 1 )
    {
        //var nanFac = game.normal.speedUpFac * (game.infinity.times + 1);
        var nanFac = mul(game.normal.speedUpFac , add(numToExp(game.infinity.times) , new bigNum(1,0)));
        //if(isNaN(game.normal.number[0]) || game.normal.number[0] < 1)
        if(isNan(game.normal.number[0]) || less(game.normal.number[0] , new bigNum(1,0)))
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
function SUFac()
{
    //return Math.max( 1.0 , Math.log10( game.normal.number[0] + 1 ) );
    return max( new bigNum(1,0) , log10( add( game.normal.number[0] , new bigNum(1,0) ) ) );
}