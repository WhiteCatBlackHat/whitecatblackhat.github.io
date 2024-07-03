window.onload = control;
function control()
{
    if(document.getElementById)
    {
        var oHide = document.getElementById('hide');
        var oShow = document.getElementById('show');
        var oHello = document.getElementById('hello');
        oHide.onclick = hide;
        oShow.onclick = show;
        oHello.onclick = behave;
    }
}
function hide()
{
    var oHello = document.getElementById('hello');
    var oText = document.getElementById('text');
    oHello.hidden = true;
    oText.textContent = "Now: Hiding";
}
function show()
{
    var oHello = document.getElementById('hello');
    var oText = document.getElementById('text');
    oHello.hidden = false;
    oText.textContent = "Now: Showing";
}
function behave()
{
    alert('Ouch!');
}