function saveGame() //存档
{
    for(var i=0; i<=8; i++)
    {
        localStorage.setItem('number'+i,game.number[i]);
        localStorage.setItem('factor'+i,game.factor[i]);
        localStorage.setItem('price'+i,game.price[i]);
    }
}
function loadGame() //读档
{
    for(var i=0; i<=8; i++)
    {
        game.number[i] = parseFloat(localStorage.getItem('number'+i));
        if(isNaN(game.number[i]))
        {
            game.number[i] = 0;
        }
        game.factor[i] = parseFloat(localStorage.getItem('factor'+i));
        if(isNaN(game.factor[i]))
        {
            game.factor[i] = 1;
        }
        game.price[i] = parseFloat(localStorage.getItem('price'+i));
        if(isNaN(game.price[i]))
        {
            game.price[i] = Math.pow(10,i);
        }
    }
    tick();
}
function softReset()    //软重置
{
    for(var i=0; i<=8; i++)
    {
        game.number[i] = 0;
        game.factor[i] = 1;
        game.price[i] = Math.pow(10,i);
    }
    tick();
}
function hardReset()    //硬重置
{
    for(var i=0; i<=8; i++)
    {
        game.number[i] = 0;
        game.factor[i] = 1;
        game.price[i] = Math.pow(10,i);
    }
    saveGame();
    tick();
}