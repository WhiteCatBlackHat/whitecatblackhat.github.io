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
    
    //显示日期和时间
    oTarget.textContent = beijingTime;
}

insertDateTime();

setInterval(insertDateTime, 1000);  //每秒更新一次