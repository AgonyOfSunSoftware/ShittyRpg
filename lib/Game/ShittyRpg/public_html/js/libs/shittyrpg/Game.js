/* 
 * Agony Of The Sun software
 * All rights reserved.
 */
//main Game class
var Game = function(){
    this.debug = 0;
    this.init=function(){
    var world = new World;
    world.init();
    };   
};