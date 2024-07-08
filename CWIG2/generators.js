function buyGener(num)  //买生成器
{
    if(game.number[0] >= game.price[num])
    {
        game.number[0] -= game.price[num];
        game.number[num] += 1;
        game.factor[num] *= 2;
        game.price[num] *= Math.pow(10,num);
    }
}
function maxAll()   //全部最大
{
    for(var i=1; i<=8; i++)
    {
        while(game.number[0] >= game.price[i])
        {
            buyGener(i);
        }
    }
}
function generate() //生成
{
    for(var i=1; i<=8; i++)
    {
        game.number[i-1] += game.msOfTick / 1000.0 * game.number[i] * game.factor[i] * calcFac1();   //一大坨公式
    }
}