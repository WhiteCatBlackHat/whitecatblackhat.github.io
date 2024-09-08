function buyIG(num)  //购买无限生成器
{
    if( geq( game.infinity.number[0] , IGPrice(num) ) )
    {
        game.infinity.number[0] = sub( game.infinity.number[0] , IGPrice(num) );
        game.infinity.number[num] = add( game.infinity.number[num] , new bigNum(1,0) );
        game.infinity.factor[num] = mul( game.infinity.factor[num] , new bigNum(2,0) );
        game.infinity.price[num].exp += num;
    }
}
function maxAllIG()   //全部最大
{
    for(var i=1; i<=game.cntGeners; i++)
    {
        while( geq( game.infinity.number[0] , IGPrice(i) ) )
        {
            buyIG(i);
        }
    }
}
function generateIG() //生成
{
    game.infinity.energy = add( game.infinity.energy , mul( new bigNum(5,-2) , mul( game.infinity.number[1] , mul( game.infinity.factor[1] , IGFac(1) ) ) ) );
    for(var i=2; i<=game.cntGeners; i++)
    {
        game.infinity.number[i-1] = add( game.infinity.number[i-1] , mul( new bigNum(5,-2) , mul( game.infinity.number[i] , mul( game.infinity.factor[i] , IGFac(i) ) ) ) );   //一巨坨公式
    }
}