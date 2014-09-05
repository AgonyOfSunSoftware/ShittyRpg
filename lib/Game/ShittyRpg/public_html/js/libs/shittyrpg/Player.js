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
    var self = this;
    
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
          controls(this);
      },
      
      onKeyUp: function(event){
        delete this._pressed[event.keyCode];
        controls(this);
      }
    };
    
    this.init = function(){
        window.addEventListener("keydown",function(event) { Key.onKeyDown(event);}, false);
        window.addEventListener("keyup",function(event) { Key.onKeyUp(event);}, false);
    };
    
    var stop = function(){
        self.speed.x=0;
        self.speed.y=0;
    };
    
    var controls = function(){
        
        stop();
        
        if(Key._pressed[Key.DOWN]){
          self.speed.y=1;
        }else{
        if(Key._pressed[Key.UP]){
          self.speed.y=-1;
        }};

        if(Key._pressed[Key.RIGHT]){
          self.speed.x=1;
        }else{
        if(Key._pressed[Key.LEFT]){
          self.speed.x=-1;
        }};  
    };
    
};