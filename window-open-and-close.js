window.onload = init;

function init()
{
    if(document.getElementById)
    {
        var buttonCreate = document.getElementById('create-window');
        var buttonClose  = document.getElementById('close-window');
        if(buttonCreate && buttonClose)
        {
            buttonCreate.onclick = makeNewWindow;
            buttonClose.onclick = closeNewWindow;
        }
    }
}

var newWindow;

function makeNewWindow()
{
    newWindow = window.open("","","height=300,weight=300");
}
function closeNewWindow()
{
    if(newWindow)
    {
        newWindow.close();
        newWindow = null;
    }
}