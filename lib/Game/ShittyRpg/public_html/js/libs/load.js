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
        body.style.marginLeft = body.style.marginRight = body.style.marginTop = body.style.marginBottom = 0;
        if(window.innerHeight <= window.innerWidth/4*3){
            var height = window.innerHeight-10;
            var width = height*4/3;
            body.style.marginLeft = body.style.marginRight = (window.innerWidth - width)/2+'px';
        }else{
            var width = window.innerWidth;
            var height = width*3/4;
            body.style.marginTop = body.style.marginBottom = (window.innerHeight - height)/2+'px';
        };
        body.style.height = height+'px';
        body.style.width = width+'px';
        console.log('resized');
    };
 
    canvas.width = 800;
    canvas.height = 600;
    resize();
    window.onresize = resize;
    game = new Game;
    game.init();
    

};