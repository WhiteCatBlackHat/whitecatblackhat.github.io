function changeABNG(num)
{
    game.normal.abNG[num] = 1 - game.normal.abNG[num];
}
function autobuyNG(num)  //自动购买生成器
{
    //while(game.normal.number[0] >= game.normal.price[num])
    while( geq( game.normal.number[0] , NGPrice(num) ) )
    {
        buyNG(num);
    }
}