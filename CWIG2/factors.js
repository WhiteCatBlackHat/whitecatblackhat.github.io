function calcFac1()
{
    if(isNaN(game.number[0]) || game.number[0]<1)
    {
        return 1;
    }
    return Math.max( 1.0 , Math.log10( game.number[0] + 1 ) );
}