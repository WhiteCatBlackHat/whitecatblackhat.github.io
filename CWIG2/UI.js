function hideAll()  //隐藏全部
{
    var sGeners = document.getElementById('geners');
    sGeners.hidden = true;
    var bSG = document.getElementById('showGeners');
    bSG.disabled = false;
    var sOthers = document.getElementById('others');
    sOthers.hidden = true;
    var bSO = document.getElementById('showOthers');
    bSO.disabled = false;
}
function showGeners()   //显示生成器
{
    hideAll();
    var sGeners = document.getElementById('geners');
    sGeners.hidden = false;
    var bSG = document.getElementById('showGeners');
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