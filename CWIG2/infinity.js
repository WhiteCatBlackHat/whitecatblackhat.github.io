function calInfPoint()
{
    if(game.normal.number[0].bas)
    {
        var ex = 2; // ex 必须是小于 10 的自然数, 数值越小, 游戏越难
        return floor( mul( pow( game.normal.number[0] , 1 / 1024 * Math.pow( 2 , ex ) ) , numToExp( Math.pow( 1 / 4 , ex ) ) ) );
    }
    return numToExp(0);
}
function goToInfinity()
{
    //if(game.normal.number[0] == Infinity)
    if( geq( game.normal.number[0] , new bigNum(1.79769,308) ) )
    {
        /*
        game.infinity.number[0] += 1;
        game.infinity.times += 1;
        game.normal.number[0] = (game.infinity.upgrade[10] ? 10 : 0);
        */
        game.infinity.number[0] = add( game.infinity.number[0] , calInfPoint() );
        var tmpABNG = [0,0,0,0,0,0,0,0,0];
        for(var i = 0; i <= game.cntGeners; i++)
        {
            tmpABNG[i] = game.normal.abNG[i];
        }
        resetNormal();
        for(var i = 0; i <= game.cntGeners; i++)
        {
            game.normal.abNG[i] = tmpABNG[i];
        }
        //game.infinity.energy = new bigNum(0,0);
        game.infinity.times += 1;
        game.normal.number[0] = (game.infinity.upgrade[10] ? (new bigNum(1,1)) : (new bigNum(0,0)));
    }
}