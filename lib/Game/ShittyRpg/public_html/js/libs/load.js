/* 
 * Agony Of The Sun software
 * All rights reserved.
 */

//onload function
window.onload = function() {
    window.oncontextmenu = function(){
        return false;
    };
    
    var canvas = document.getElementById("stage-canvas");
    var body = document.getElementsByTagName("body")[0];
    body.style.margin = 0;
    
    var resize = function(){
        if(window.innerHeight <= window.innerWidth){
            height = window.innerHeight;
            width = height*4/3;
            body.style.height = height+'px';
            body.style.width = width+'px';
            body.style.marginLeft = body.style.marginRight = (window.outerWidth - width)/2+'px';
            console.log('resized');
        };
    };
    
    resize();
    canvas.width = 800;
    canvas.height = 600;
    window.onresize = resize;
    game = new Game;
    game.init();
    

};