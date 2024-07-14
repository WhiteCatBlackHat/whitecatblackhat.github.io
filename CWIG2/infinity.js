function gotoInfinity()
{
    if(game.normal.number[0] == Infinity)
    {
        resetNormal();
        game.infinity.number[0] += 1;
        game.infinity.times += 1;
        game.normal.number[0] = (game.infinity.upgrade[10] ? 10 : 0);
    }
}