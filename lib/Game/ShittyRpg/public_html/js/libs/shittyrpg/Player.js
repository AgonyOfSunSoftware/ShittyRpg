/* 
 * Agony Of The Sun software
 * All rights reserved.
 */


var Player = function(){
    this.x = 0;
    this.y = 0;
    this.speed = {x:0,y:0};
    var stats = {hp:100,mp:100,str:10,int:10,dex:10,def:10};
    var dead = false;
    
    var Key = {
      _pressed:{},
      
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      
      isDown: function(keyCode){
          return this._pressed[keyCode];
      },
      
      onKeyDown: function(event){
          this._pressed[event.keyCode] = true;
      },
      
      onKeyUp: function(event){
        delete this._pressed[event.keyCode];
      }
    };
    
    this.init = function(){
        window.addEventListener("keydown",function(event) { Key.onKeyUp(event); }, false);
        window.addEventListener("keyup",function(event) { Key.onKeyDown(event); }, false);
    };
    
    var controls = function(){
      if(this._pressed[Key.DOWN]){
        this.speed['DOWN']=3;
      }else{
      if(this._pressed[Key.UP]){
        this.speed['DOWN']=3;
      }};
      if(this._pressed[Key.RIGHT]){
        this.speed['DOWN']=3;
      }else{
      if(this._pressed[Key.LEFT]){
        this.speed['DOWN']=3;
      }};  
    };
    
};