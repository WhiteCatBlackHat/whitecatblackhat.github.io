function setNC(num)
{
    game.normal.playNC[num] = 1 - game.normal.playNC[num];
    if(!game.normal.playNC[num])
    {
        if( geq( game.normal.number[0] , game.normal.NCGoal[num] ) )
        {
            game.normal.doneNC[num] = 1;
        }
    }
    if( geq( game.normal.number[0] , new bigNum(1.79769,308) ) )
    {
        goToInfinity();
    }
    else
    {
        for(var i=0; i<=game.cntGeners; i++)
        {
            game.normal.number[i] = new bigNum(0,0);
            game.normal.factor[i] = new bigNum(1,0);
            game.normal.price[i] = new bigNum(1,i);
        }
        game.normal.speedUpFac = new bigNum(1,0);
        game.normal.number[0] = (game.infinity.upgrade[10] ? (new bigNum(1,1)) : (new bigNum(0,0)));
    }
}