function saveGame() //存档
{
    localStorage.setItem('points',game.points);
}
function loadGame() //读档
{
    game.points = parseInt(localStorage.getItem('points')) || 0;
    var sPoints = document.getElementById('points');
    sPoints.textContent = game.points;
}
function softReset()    //软重置
{
    game.points = 0;
    var sPoints = document.getElementById('points');
    sPoints.textContent = game.points;
}
function hardReset()    //硬重置
{
    game.points = 0;
    saveGame();
    var sPoints = document.getElementById('points');
    sPoints.textContent = game.points;
}