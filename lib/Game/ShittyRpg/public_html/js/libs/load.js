/* 
 * Agony Of The Sun software
 * All rights reserved.
 */

//onload function
window.onload = function() {;
    $.when(function(){
        //other JS includes
        $.getScript('js/libs/createjs/createjs-2013.12.12.min.js',function(){});
        $.getScript('js/libs/shittyrpg/game.js',function(){});
        }).then(initGame());
};

initGame = function (){
    game = new Game;
    game.init();
};