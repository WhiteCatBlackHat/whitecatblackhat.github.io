function speedUp()
{
    if( geq( game.normal.number[0] , new bigNum(1,1) ) )
    {
        var newFac = SUFac();
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
        game.normal.speedUpFac = newFac;
        game.normal.number[0] = ( game.infinity.upgrade[1] ? (new bigNum(1,1)) : (new bigNum(0,0)));
    }
}