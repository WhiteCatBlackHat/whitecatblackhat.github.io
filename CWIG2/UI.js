function hideAll()  //隐藏全部
{
    var sGeners = document.getElementById('normalGeners');
    sGeners.hidden = true;
    var bSG = document.getElementById('showNormalGeners');
    bSG.disabled = false;
    var sOthers = document.getElementById('others');
    sOthers.hidden = true;
    var bSO = document.getElementById('showOthers');
    bSO.disabled = false;
    var sIU = document.getElementById('IU');
    sIU.hidden = true;
    var bSIU = document.getElementById('showIU');
    bSIU.disabled = false;
}
function showNormalGeners()   //显示普通生成器
{
    hideAll();
    var sGeners = document.getElementById('normalGeners');
    sGeners.hidden = false;
    var bSG = document.getElementById('showNormalGeners');
    bSG.disabled = true;
}
function showOthers()   //显示杂项
{
    hideAll();
    var sOthers = document.getElementById('others');
    sOthers.hidden = false;
    var bSO = document.getElementById('showOthers');
    bSO.disabled = true;
}
function showIU()   //显示无限升级
{
    hideAll();
    var sIU = document.getElementById('IU');
    sIU.hidden = false;
    var bSIU = document.getElementById('showIU');
    bSIU.disabled = true;
}