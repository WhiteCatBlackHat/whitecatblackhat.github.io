function NGFac(num)
{
    if(num <= 1)
    {
        var nanFac = game.normal.speedUpFac * (game.infinity.times + 1);
        if(isNaN(game.normal.number[0]) || game.normal.number[0] < 1)
        {
            return nanFac;
        }
        return Math.max( 1.0 , Math.log10( game.normal.number[0] + 1 ) ) * nanFac;
    }
    var fac1 = NGFac(1);
    if(isNaN(game.normal.number[num - 1]) || game.normal.number[num - 1] < 1)
    {
        return fac1;
    }
    return fac1 * Math.max( 1.0 , Math.log10( game.normal.number[num - 1] + 1 ) )
}
function SUFac()
{
    return Math.max( 1.0 , Math.log10( game.normal.number[0] + 1 ) );
}