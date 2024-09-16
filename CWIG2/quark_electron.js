function calQuark()
{
    if(game.infinity.number[0].bas)
    {
        var ex = 2; // ex 必须是小于 10 的自然数, 数值越小, 游戏越难
        return floor( mul( pow( game.infinity.number[0] , 1 / 1024 * Math.pow( 2 , ex ) ) , numToExp( Math.pow( 1 / 4 , ex ) ) ) );
    }
    return numToExp(0);
}
function calElectron()
{
    if(game.infinity.number[0].bas)
    {
        var ex = 3; // ex 必须是小于 10 的自然数, 数值越小, 游戏越难
        return floor( mul( pow( game.infinity.number[0] , 1 / 1024 * Math.pow( 2 , ex ) ) , numToExp( Math.pow( 1 / 4 , ex ) ) ) );
    }
    return numToExp(0);
}
function resetForQandE()    //打包成函数, 有效地减少代码量
{
    //对game.normal部分的重置
    for(var i=0; i<=game.cntGeners; i++)
    {
        game.normal.number[i] = new bigNum(0,0);
        game.normal.factor[i] = new bigNum(1,0);
        game.normal.price[i] = new bigNum(1,i);
    }
    game.normal.speedUpFac = new bigNum(1,0);
    for(var i=0; i<=game.normal.cntNC; i++)
    {
        game.normal.playNC[i] = 0;
        game.normal.doneNC[i] = 0;
    }
    //对game.infinity部分的重置
    for(var i=0; i<=game.cntGeners; i++)
    {
        game.infinity.number[i] = new bigNum(0,0);
        game.infinity.factor[i] = new bigNum(1,0);
        game.infinity.price[i] = new bigNum(1,i);
    }
    for(var i=0; i<=1; i++)
    {
        game.infinity.upgrade[i] = 0;
    }
    //不重置无限升级2~9, 因为那个自动购买居然要一个一个解锁, 哪个sb想的主意, 生气了
    for(var i=10; i<=game.infinity.cntIU; i++)
    {
        game.infinity.upgrade[i] = 0;
    }
    game.infinity.times = 0;
    game.infinity.energy = zero();
}
function goToUQuark()
{
    if( geq( game.infinity.number[0] , new bigNum(1.79769,308) ) )
    {
        game.uQuark.number[0] = add( game.uQuark.number[0] , calQuark() );
        game.uQuark.times += 1;
        resetForQandE();
    }
}
function goToDQuark()
{
    if( geq( game.infinity.number[0] , new bigNum(1.79769,308) ) )
    {
        game.dQuark.number[0] = add( game.dQuark.number[0] , calQuark() );
        game.dQuark.times += 1;
        resetForQandE();
    }
}
function goToElectron()
{
    if( geq( game.infinity.number[0] , new bigNum(1.79769,308) ) )
    {
        game.electron.number[0] = add( game.electron.number[0] , calElectron() );
        game.electron.times += 1;
        resetForQandE();
    }
}
//上面三个函数高度相似