function speedUp()
{
    if( geq( game.normal.number[0] , new bigNum(1,1) ) )
    {
        var newFac = SUFac();
        for(var i=1; i<=game.cntGeners; i++)
        {
            game.normal.number[i] = new bigNum(0,0);
            game.normal.factor[i] = new bigNum(1,0);
            game.normal.price[i] = new bigNum(1,i);
        }
        game.normal.speedUpFac = newFac;
        if(!game.normal.doneNC[1])
        {
            game.normal.number[0] = ( game.infinity.upgrade[1] ? (new bigNum(1,1)) : (new bigNum(0,0)));
        }
    }
}