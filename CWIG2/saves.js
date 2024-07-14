function saveGame() //存档
{
    for(var i=0; i<=8; i++)
    {
        localStorage.setItem('NN'+i,game.normal.number[i]);
        localStorage.setItem('NF'+i,game.normal.factor[i]);
        localStorage.setItem('NP'+i,game.normal.price[i]);
    }
    //console.log("We set NN, NF, and NP");
    localStorage.setItem('SUF',game.normal.speedUpFac);
    //console.log("We set speedUpFac");
    for(var i=0; i<=8; i++)
    {
        localStorage.setItem('IN'+i,game.infinity.number[i]);
        localStorage.setItem('IF'+i,game.infinity.factor[i]);
        localStorage.setItem('IP'+i,game.infinity.price[i]);
    }
    //console.log("We set IN, IF and IP");
    localStorage.setItem('IT',game.infinity.times);
    for(var i=1; i<=10; i++)
    {
        localStorage.setItem('IU'+i,game.infinity.upgrade[i]);
    }
}
function loadGame() //读档
{
    for(var i=0; i<=8; i++) //读取普通点数&生成器
    {
        game.normal.number[i] = parseFloat(localStorage.getItem('NN'+i));
        if(isNaN(game.normal.number[i]))
        {
            game.normal.number[i] = 0;
        }
        game.normal.factor[i] = parseFloat(localStorage.getItem('NF'+i));
        if(isNaN(game.normal.factor[i]))
        {
            game.normal.factor[i] = 1;
        }
        game.normal.price[i] = parseFloat(localStorage.getItem('NP'+i));
        if(isNaN(game.normal.price[i]))
        {
            game.normal.price[i] = Math.pow(10,i);
        }
    }
    game.normal.speedUpFac = parseFloat(localStorage.getItem('SUF'));   //读取加速效果
    if(isNaN(game.normal.speedUpFac))
    {
        game.normal.speedUpFac = 1;
    }
    for(var i=0; i<=8; i++) //读取无限点数
    {
        game.infinity.number[i] = parseFloat(localStorage.getItem('IN'+i));
        if(isNaN(game.infinity.number[i]))
        {
            game.infinity.number[i] = 0;
        }
        game.infinity.factor[i] = parseFloat(localStorage.getItem('IF'+i));
        if(isNaN(game.infinity.factor[i]))
        {
            game.infinity.factor[i] = 1;
        }
        game.infinity.price[i] = parseFloat(localStorage.getItem('IP'+i));
        if(isNaN(game.infinity.price[i]))
        {
            game.infinity.price[i] = Math.pow(10,i);
        }
    }
    game.infinity.times = parseFloat(localStorage.getItem('IT'));   //读取无限次数
    if(isNaN(game.infinity.times))
    {
        game.infinity.times = 0;
    }
    for(var i=1; i<=10; i++)    //读取无限升级
    {
        game.infinity.upgrade[i] = parseFloat(localStorage.getItem('IU'+i));
        game.infinity.upgrade[i] = (game.infinity.upgrade[i] ? 1 : 0);
    }
    tick();
}
function resetNormal()
{
    for(var i=0; i<=8; i++)
    {
        game.normal.number[i] = 0;
        game.normal.factor[i] = 1;
        game.normal.price[i] = Math.pow(10,i);
    }
    game.normal.speedUpFac = 1;
    tick();
}
function resetInfinity()
{
    for(var i=0; i<=8; i++)
    {
        game.infinity.number[i] = 0;
        game.infinity.factor[i] = 1;
        game.infinity.price[i] = Math.pow(10,i);
    }
    game.infinity.times = 0;
    for(var i=1; i<=10; i++)    //读取无限升级
    {
        game.infinity.upgrade[i] = 0;
    }
    tick();
}
function softReset()    //软重置
{
    resetNormal();
    resetInfinity();
}
function hardReset()    //硬重置
{
    softReset();
    saveGame();
}