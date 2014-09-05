/* 
 * Agony Of The Sun software
 * All rights reserved.
 */

//onload function
window.onload = function() {
    var canvas = document.getElementById("stage-canvas");
    canvas.width = 800;
    canvas.height = 600;
    game = new Game;
    game.init();
};