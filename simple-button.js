window.onload = applyBehavior;
function applyBehavior()
{
    if(document.getElementById)
    {
        var oButton = document.getElementById('clicker');   //查找ID为clicker的元素

        if(oButton) //如果找到
        {
            oButton.onclick=behave;
            //把onclick行为应用于按钮，告诉它被单击时执行behave()函数
        }
    }
}

function behave(evt)
{
    alert('Ouch!'); //弹出式对话框:"Ouch!"
}