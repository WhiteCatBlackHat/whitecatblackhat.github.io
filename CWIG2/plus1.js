function plus1()
{
    game.points++;
    var sPoints = document.getElementById('points');
    sPoints.textContent = game.points;
}