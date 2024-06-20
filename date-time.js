//触发事件
window.onload = insertDateTime;
function insertDateTime()
{
    //确保一个安全的环境
    if(!document.getElementById)    return;
    if(!document.createTextNode)    return;

    //生成日期和时间
    
    var stamp= new Date().getTime() + 8 * 60 * 60 * 1000;
    var beijingTime = new Date(stamp).toISOString().replace(/T/, ' ').replace(/\..+/, '').substring(0, 19);

    //确定目标（指向目标span元素）
    var oTarget = document.getElementById('output');
    if(!oTarget)    return;

    //删除原来的内容（该元素中已有的内容）
    while(oTarget.firstChild)
    {
        oTarget.removeChild(oTarget.firstChild);
    }

    //插入日期和时间（在元素中插入新文本）
    var oNewText = document.createTextNode(beijingTime);
    oTarget.appendChild(oNewText);
}