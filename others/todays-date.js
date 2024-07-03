window.onload = init;

monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function init()
{
    if(document.getElementById)
    {
        oOutput = document.getElementById('output');
        if(oOutput)
        {
            while(oOutput.firstChild)
            {
                oOutput.removeChild(oOutput.firstChild);
            }

            var sDate = customDateString(new Date());
            var msg = document.createTextNode(sDate);

            oOutput.appendChild(msg);
        }
    }
}

function customDateString(oDate)
{
    var theMonth = monthNames[oDate.getMonth()];
    var theDate = oDate.getDate();
    var theYear = oDate.getFullYear();
    var theDay = dayNames[oDate.getDay()];

    return theDay + ", " + theMonth + " " + theDate + ", " + theYear;
}