function buyNG(num)  //买普通生成器
{
    //if(game.normal.number[0] >= game.normal.price[num])
    if( geq( game.normal.number[0] , NGPrice(num) ) )
    {
        /*
        game.normal.number[0] -= game.normal.price[num];
        game.normal.number[num] += 1;
        game.normal.factor[num] *= 2;
        game.normal.price[num] *= Math.pow(10,num);
        */
        game.normal.number[0] = sub( game.normal.number[0] , NGPrice(num) );
        game.normal.number[num] = add( game.normal.number[num] , new bigNum(1,0) );
        game.normal.factor[num] = mul( game.normal.factor[num] , new bigNum(2,0) );
        game.normal.price[num].exp += num;
    }
}
function maxAllNG()   //全部最大
{
    for(var i=1; i<=game.cntGeners; i++)
    {
        //while(game.normal.number[0] >= game.normal.price[i])
        while( geq( game.normal.number[0] , NGPrice(i) ) )
        {
            buyNG(i);
        }
    }
}
function generateNG() //生成
{
    for(var i=1; i<=game.cntGeners; i++)
    {
        //game.normal.number[i-1] += game.msOfTick / 1000.0 * game.normal.number[i] * game.normal.factor[i] * NGFac(i);   //一大坨公式
        game.normal.number[i-1] = add( game.normal.number[i-1] , mul( new bigNum(5,-2) , mul( game.normal.number[i] , mul( game.normal.factor[i] , NGFac(i) ) ) ) );   //一巨坨公式
    }
}