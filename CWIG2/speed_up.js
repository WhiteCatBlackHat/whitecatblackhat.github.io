function speedUp()
{
    if(game.normal.number[0] >= 10)
    {
        var newFac = SUFac();
        resetNormal();
        game.normal.speedUpFac = newFac;
        game.normal.number[0] = (game.infinity.upgrade[1] ? 10 : 0);
    }
}