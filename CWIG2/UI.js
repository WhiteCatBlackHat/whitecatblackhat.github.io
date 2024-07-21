function hideAll()  //隐藏全部
{
    var sNG = document.getElementById('normalGeners');
    sNG.hidden = true;
    var bSNG = document.getElementById('showNormalGeners');
    bSNG.disabled = false;
    var sOthers = document.getElementById('others');
    sOthers.hidden = true;
    var bSO = document.getElementById('showOthers');
    bSO.disabled = false;
    var sIU = document.getElementById('IU');
    sIU.hidden = true;
    var bSIU = document.getElementById('showIU');
    bSIU.disabled = (game.infinity.times ? false : true);
    var sIG = document.getElementById('infinityGeners');
    sIG.hidden = true;
    var bSIG = document.getElementById('showInfGeners');
    bSIG.disabled = (
        game.infinity.upgrade[1] && 
        game.infinity.upgrade[2] && 
        game.infinity.upgrade[3] && 
        game.infinity.upgrade[4] && 
        game.infinity.upgrade[5] && 
        game.infinity.upgrade[6] && 
        game.infinity.upgrade[7] && 
        game.infinity.upgrade[8] && 
        game.infinity.upgrade[9] && 
        game.infinity.upgrade[10] 
    ? false : true);
    var sAB = document.getElementById('autobuy');
    sAB.hidden = true;
    var bSAB = document.getElementById('showAB');
    bSAB.disabled = (
        game.infinity.upgrade[2] || 
        game.infinity.upgrade[3] || 
        game.infinity.upgrade[4] || 
        game.infinity.upgrade[5] || 
        game.infinity.upgrade[6] || 
        game.infinity.upgrade[7] || 
        game.infinity.upgrade[8] || 
        game.infinity.upgrade[9] 
    ? false : true);
    var sNC = document.getElementById('NC');
    sNC.hidden = true;
    var bSNC = document.getElementById('showNC');
    bSNC.disabled = (
        game.infinity.upgrade[11] && 
        game.infinity.upgrade[12] && 
        game.infinity.upgrade[13] && 
        game.infinity.upgrade[14] && 
        game.infinity.upgrade[15] 
    ? false : true);
}
function showNormalGeners()   //显示普通生成器
{
    hideAll();
    var sNG = document.getElementById('normalGeners');
    sNG.hidden = false;
    var bSNG = document.getElementById('showNormalGeners');
    bSNG.disabled = true;
    game.showing = 'normalGeners';
}
function showOthers()   //显示杂项
{
    hideAll();
    var sOthers = document.getElementById('others');
    sOthers.hidden = false;
    var bSO = document.getElementById('showOthers');
    bSO.disabled = true;
    game.showing = 'others';
}
function showIU()   //显示无限升级
{
    hideAll();
    var sIU = document.getElementById('IU');
    sIU.hidden = false;
    var bSIU = document.getElementById('showIU');
    bSIU.disabled = true;
    game.showing = 'IU';
}
function showInfGeners()    //显示无限生成器
{
    hideAll();
    var sIG = document.getElementById('infinityGeners');
    sIG.hidden = false;
    var bSIG = document.getElementById('showInfGeners');
    bSIG.disabled = true;
    game.showing = 'infinityGeners';
}
function showAB()
{
    hideAll();
    var sAB = document.getElementById('autobuy');
    sAB.hidden = false;
    var bSAB = document.getElementById('showAB');
    bSAB.disabled = true;
    game.showing = 'autobuy';
}
function showNC()   //显示无限升级
{
    hideAll();
    var sNC = document.getElementById('NC');
    sNC.hidden = false;
    var bSNC = document.getElementById('showNC');
    bSNC.disabled = true;
    game.showing = 'NC';
}