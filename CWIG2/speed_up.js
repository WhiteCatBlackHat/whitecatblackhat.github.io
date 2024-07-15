function speedUp()
{
    if( geq( game.normal.number[0] , new bigNum(1,1) ) )
    {
        var newFac = SUFac();
        resetNormal();
        game.normal.speedUpFac = newFac;
        game.normal.number[0] = ( game.infinity.upgrade[1] ? (new bigNum(1,1)) : (new bigNum(0,0)));
    }
}