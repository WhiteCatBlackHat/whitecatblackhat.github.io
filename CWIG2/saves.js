function saveGame() //存档
{
    //存普通点数/生成器
    for(var i=0; i<=game.cntGeners; i++)
    {
        localStorage.setItem('NNb'+i,game.normal.number[i].bas);
        localStorage.setItem('NNe'+i,game.normal.number[i].exp);
        localStorage.setItem('NFb'+i,game.normal.factor[i].bas);
        localStorage.setItem('NFe'+i,game.normal.factor[i].exp);
        localStorage.setItem('NPb'+i,game.normal.price[i].bas);
        localStorage.setItem('NPe'+i,game.normal.price[i].exp);
    }
    //存加速效果
    //console.log("We set NN, NF, and NP");
    localStorage.setItem('SUFb',game.normal.speedUpFac.bas);
    localStorage.setItem('SUFe',game.normal.speedUpFac.exp);
    //存无限点数/生成器
    //console.log("We set speedUpFac");
    for(var i=0; i<=game.cntGeners; i++)
    {
        localStorage.setItem('INb'+i,game.infinity.number[i].bas);
        localStorage.setItem('INe'+i,game.infinity.number[i].exp);
        localStorage.setItem('IFb'+i,game.infinity.factor[i].bas);
        localStorage.setItem('IFe'+i,game.infinity.factor[i].exp);
        localStorage.setItem('IPb'+i,game.infinity.price[i].bas);
        localStorage.setItem('IPe'+i,game.infinity.price[i].exp);
    }
    //console.log("We set IN, IF and IP");
    //存无限次数
    localStorage.setItem('IT',game.infinity.times);
    //存无限升级
    for(var i=1; i<=game.infinity.cntIU; i++)
    {
        localStorage.setItem('IU'+i,game.infinity.upgrade[i]);
    }
    //存无限能量
    localStorage.setItem('IEb'+i,game.infinity.energy.bas);
    localStorage.setItem('IEe'+i,game.infinity.energy.exp);
    //存自动购买普通生成器
    for(var i=0; i<=game.cntGeners; i++)
    {
        localStorage.setItem('ABNG'+i,game.normal.abNG[i]);
    }
    //存普通挑战状态
    for(var i=0; i<=game.normal.cntNC; i++)
    {
        localStorage.setItem('PNC'+i,game.normal.playNC[i]);
        localStorage.setItem('DNC'+i,game.normal.doneNC[i]);
    }
    //存上夸克
    for(var i=0; i<=game.cntGeners; i++)
    {
        localStorage.setItem('UQNb'+i,game.uQuark.number[i].bas);
        localStorage.setItem('UQNe'+i,game.uQuark.number[i].exp);
    }
    //存下夸克
    for(var i=0; i<=game.cntGeners; i++)
    {
        localStorage.setItem('DQNb'+i,game.dQuark.number[i].bas);
        localStorage.setItem('DQNe'+i,game.dQuark.number[i].exp);
    }
    //存电子
    for(var i=0; i<=game.cntGeners; i++)
    {
        localStorage.setItem('ENb'+i,game.electron.number[i].bas);
        localStorage.setItem('ENe'+i,game.electron.number[i].exp);
    }
}
function loadGame() //读档
{
    for(var i=0; i<=game.cntGeners; i++) //读取普通点数&生成器
    {
        game.normal.number[i].bas = parseFloat(localStorage.getItem('NNb'+i));
        game.normal.number[i].exp = parseFloat(localStorage.getItem('NNe'+i));
        if(isNan(game.normal.number[i]))
        {
            game.normal.number[i] = new bigNum(0,0);
        }
        game.normal.factor[i].bas = parseFloat(localStorage.getItem('NFb'+i));
        game.normal.factor[i].exp = parseFloat(localStorage.getItem('NFe'+i));
        if(isNan(game.normal.factor[i]))
        {
            game.normal.factor[i] = new bigNum(1,0);
        }
        game.normal.price[i].bas = parseFloat(localStorage.getItem('NPb'+i));
        game.normal.price[i].exp = parseFloat(localStorage.getItem('NPe'+i));
        if(isNan(game.normal.price[i]))
        {
            game.normal.price[i] = new bigNum(1,i);
        }
    }
    //读取加速效果
    game.normal.speedUpFac.bas = parseFloat(localStorage.getItem('SUFb'));
    game.normal.speedUpFac.exp = parseFloat(localStorage.getItem('SUFe'));
    if(isNan(game.normal.speedUpFac))
    {
        game.normal.speedUpFac = new bigNum(1,0);
    }
    for(var i=0; i<=game.cntGeners; i++) //读取无限点数
    {
        game.infinity.number[i].bas = parseFloat(localStorage.getItem('INb'+i));
        game.infinity.number[i].exp = parseFloat(localStorage.getItem('INe'+i));
        if(isNan(game.infinity.number[i]))
        {
            game.infinity.number[i] = new bigNum(0,0);
        }
        game.infinity.factor[i].bas = parseFloat(localStorage.getItem('IFb'+i));
        game.infinity.factor[i].exp = parseFloat(localStorage.getItem('IFe'+i));
        if(isNan(game.infinity.factor[i]))
        {
            game.infinity.factor[i] = new bigNum(1,0);
        }
        game.infinity.price[i].bas = parseFloat(localStorage.getItem('IPb'+i));
        game.infinity.price[i].exp = parseFloat(localStorage.getItem('IPe'+i));
        if(isNan(game.infinity.price[i]))
        {
            game.infinity.price[i] = new bigNum(1,i);
        }
    }
    game.infinity.times = parseFloat(localStorage.getItem('IT'));   //读取无限次数
    if(isNaN(game.infinity.times))
    {
        game.infinity.times = 0;
    }
    for(var i=1; i<=game.infinity.cntIU; i++)    //读取无限升级
    {
        game.infinity.upgrade[i] = parseInt(localStorage.getItem('IU'+i));
        game.infinity.upgrade[i] = (game.infinity.upgrade[i] ? 1 : 0);
    }
    //读取无限能量
    game.infinity.energy.bas = parseFloat(localStorage.getItem('IEb'+i));
    game.infinity.energy.exp = parseFloat(localStorage.getItem('IEe'+i));
    if(isNan(game.infinity.energy))
    {
        game.infinity.energy = new bigNum(0,0);
    }
    for(var i=0; i<=game.cntGeners; i++)    //读取自动购买普通生成器
    {
        game.normal.abNG[i] = parseInt(localStorage.getItem('ABNG'+i));
        game.normal.abNG[i] = (game.normal.abNG[i] ? 1 : 0);
    }
    for(var i=0; i<=game.normal.cntNC; i++) //读取普通挑战状态
    {
        game.normal.playNC[i] = parseInt(localStorage.getItem('PNC'+i));
        game.normal.playNC[i] = (game.normal.playNC[i] ? 1 : 0);
        game.normal.doneNC[i] = parseInt(localStorage.getItem('DNC'+i));
        game.normal.doneNC[i] = (game.normal.doneNC[i] ? 1 : 0);
    }
    for(var i=0; i<=game.cntGeners; i++) //读取上夸克
    {
        game.uQuark.number[i].bas = parseFloat(localStorage.getItem('UQNb'+i));
        game.uQuark.number[i].exp = parseFloat(localStorage.getItem('UQNe'+i));
        if(isNan(game.uQuark.number[i]))
        {
            game.uQuark.number[i] = new bigNum(0,0);
        }
    }
    for(var i=0; i<=game.cntGeners; i++) //读取下夸克
    {
        game.dQuark.number[i].bas = parseFloat(localStorage.getItem('DQNb'+i));
        game.dQuark.number[i].exp = parseFloat(localStorage.getItem('DQNe'+i));
        if(isNan(game.dQuark.number[i]))
        {
            game.dQuark.number[i] = new bigNum(0,0);
        }
    }
    for(var i=0; i<=game.cntGeners; i++) //读取电子
    {
        game.electron.number[i].bas = parseFloat(localStorage.getItem('ENb'+i));
        game.electron.number[i].exp = parseFloat(localStorage.getItem('ENe'+i));
        if(isNan(game.electron.number[i]))
        {
            game.electron.number[i] = new bigNum(0,0);
        }
    }
    tick();
}
function resetNormal()
{
    for(var i=0; i<=game.cntGeners; i++)
    {
        game.normal.number[i] = new bigNum(0,0);
        game.normal.factor[i] = new bigNum(1,0);
        game.normal.price[i] = new bigNum(1,i);
        game.normal.abNG[i] = 0;
    }
    game.normal.speedUpFac = new bigNum(1,0);
    for(var i=0; i<=game.normal.cntNC; i++)
    {
        game.normal.playNC[i] = 0;
        game.normal.doneNC[i] = 0;
    }
    tick();
}
function resetInfinity()
{
    for(var i=0; i<=game.cntGeners; i++)
    {
        game.infinity.number[i] = new bigNum(0,0);
        game.infinity.factor[i] = new bigNum(1,0);
        game.infinity.price[i] = new bigNum(1,i);
    }
    game.infinity.times = 0;
    for(var i=1; i<=game.infinity.cntIU; i++)
    {
        game.infinity.upgrade[i] = 0;
    }
    game.infinity.energy = new bigNum(0,0);
    tick();
}
function resetQuark()
{
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.uQuark.number[i] = zero();
        game.dQuark.number[i] = zero();
    }
    game.uQuark.times = 0;
    game.dQuark.times = 0;
}
function resetElectron()
{
    for(var i = 0; i <= game.cntGeners; i++)
    {
        game.electron.number[i] = zero();
    }
    game.electron.times = 0;
}
function softReset()    //软重置
{
    resetNormal();
    resetInfinity();
    resetQuark();
    resetElectron();
}
function hardReset()    //硬重置
{
    softReset();
    saveGame();
}