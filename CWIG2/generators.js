function buyGener(num)  //买生成器
{
    if(game.normal.number[0] >= game.normal.price[num])
    {
        game.normal.number[0] -= game.normal.price[num];
        game.normal.number[num] += 1;
        game.normal.factor[num] *= 2;
        game.normal.price[num] *= Math.pow(10,num);
    }
}
function maxAll()   //全部最大
{
    for(var i=1; i<=8; i++)
    {
        while(game.normal.number[0] >= game.normal.price[i])
        {
            buyGener(i);
        }
    }
}
function generate() //生成
{
    for(var i=1; i<=8; i++)
    {
        game.normal.number[i-1] += game.msOfTick / 1000.0 * game.normal.number[i] * game.normal.factor[i] * NGFac(i);   //一大坨公式
    }
}
function autobuyGener(num)  //自动购买生成器
{
    while(game.normal.number[0] >= game.normal.price[num])
    {
        buyGener(num);
    }
}