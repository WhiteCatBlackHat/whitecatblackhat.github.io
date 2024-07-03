window.onload = checkButtons;
var game =
{
    points: 0
};
function checkButtons()
{
    if(document.getElementById)
    {
        var bPlus1 = document.getElementById('plus1');
        bPlus1.onclick = plus1;
    }
}