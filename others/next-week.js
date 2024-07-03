window.onload = calcDates;

function calcDates()
{
    var dTodaysDate = new Date();

    var oToday = document.getElementById('today');
    if(oToday)
    {
        oToday.value = dTodaysDate;
    }

    var oNextWeek = document.getElementById('nextWeek');
    if(oNextWeek)
    {
        var msToday =dTodaysDate.getTime();
        var msOneWeek = 1000 * 60 * 60 * 24 * 7;
        var msNextWeek = msToday + msOneWeek;
        var dNextWeek = new Date(msNextWeek);
        oNextWeek.value = dNextWeek;
    }
}