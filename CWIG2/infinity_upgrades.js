function buyIU(num)
{
    //if(game.infinity.number[0] >= game.infinity.uPrice[num])
    if( geq( game.infinity.number[0] , game.infinity.uPrice[num] ) )
    {
        //game.infinity.number[0] -= game.infinity.uPrice[num];
        game.infinity.number[0] = sub( game.infinity.number[0] , game.infinity.uPrice[num] );
        game.infinity.upgrade[num] = 1;
    }
}