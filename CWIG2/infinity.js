function calInfPoint()
{
    if(game.normal.number[0].bas)
    {
        return floor( mul( pow( game.normal.number[0] , 1/512 ) , new bigNum(2.5,-1) ) );
    }
    return numToExp(0);
}
function goToInfinity()
{
    //if(game.normal.number[0] == Infinity)
    if( geq( game.normal.number[0] , inf1 ) )
    {
        /*
        game.infinity.number[0] += 1;
        game.infinity.times += 1;
        game.normal.number[0] = (game.infinity.upgrade[10] ? 10 : 0);
        */
        game.infinity.number[0] = add( game.infinity.number[0] , calInfPoint() );
        resetNormal();
        game.infinity.times += 1;
        game.normal.number[0] = (game.infinity.upgrade[10] ? (new bigNum(1,1)) : (new bigNum(0,0)));
    }
}