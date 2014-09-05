/* 
 * Agony Of The Sun software
 * All rights reserved.
 */
//main Game class
var Game = function(){
    this.debug = 0;
    var graphics;
    var sound;
    this.init=function(){
        graphics = new Graphics;
        sound = new Sound;
        loadAssets();
    };
    
    var loadAssets = function(){
        graphics.init();
    };
    
    var handleGraphicsComplete = function(){
        sound.init();
    };
    
    var handleSoundComplete = function(){
        loadComplete();
    };
    
    var loadComplete = function(){
        graphics.spawnPlayer();
        sound.playMusic(["ogg-music1-intro","ogg-music1-main"]);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", tick);
    };
    
    var tick = function(event){
        graphics.tick();
    };
    
    
    
    var Sound = function(){
        var path = 'assets/music/';
        assets = undefined;
        this.music = undefined;
        loaded = 0;
        
        this.init = function(){
          createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashPlugin]);  
          loadAssets();
        };

        var loadAssets = function(){
            //this.assets = new createjs.LoadQueue();
            createjs.Sound.addEventListener("fileload",handleSoundLoad);
            assets = [
                            {id:"ogg-music1-intro",src:"NES_SwordMaster_02_Stage1_intr.ogg"},
                            {id:"ogg-music1-main", src:"NES_SwordMaster_02_Stage1_theme.ogg"}
                        ];
            createjs.Sound.registerManifest(assets, path);
        };
        
        var handleSoundLoad = function(){
            loaded ++;
            console.log('one more sound loaded: '+loaded);
            if(loaded >= assets.length){
                handleSoundComplete();
          };
        };
        
        this.playMusic = function(assetIds){
            if(typeof(assetIds) === "string"){
                this.music = createjs.Sound.play(assetIds, {loop:-1});
            }else
            if(assetIds instanceof Array){
                this.music = createjs.Sound.play(assetIds[0]);
                assetIds.shift();
                if(assetIds.length === 1){
                    assetIds = assetIds[0];
                };
                this.music.addEventListener("complete",function(){sound.playMusic(assetIds);});
            };
        };
    };

    var Graphics = function(){
        var assets = undefined;

        var stage = undefined;
        
        var player = {
          model: undefined,
          view:  undefined
        };
        
        this.init = function(){
            stage = new createjs.Stage("stage-canvas");
            loadAssets();
        };
        
        this.spawnPlayer = function(){
            player.model = new Player;
            player.model.init();
            player.view = new createjs.Bitmap(assets.getResult("bmp-player1"));
            player.view.x = player.model.x;
            console.log(player.view.x);
            player.view.y = player.model.y;
            stage.addChild(player.view);
        };
        
        this.tick = function(){
            //player.view.x = player.model.x;
            player.view.x += player.model.speed.x*3;
            player.view.y += player.model.speed.y*3;
            stage.update();
        };

        var loadAssets = function(){
            assets = new createjs.LoadQueue();
            assets.addEventListener("complete",handleGraphicsComplete);
            assets.loadManifest([
                                {id:"bmp-player1", src:"assets/images/warrior_1.png"},
                                {id:"bmp-player2",src:"assets/images/warrior_2.png"}
                                ]);
        };
    };
    
    var Controls = function(){
        
        stop();
        
        if(this._pressed[Key.DOWN]){
          this.speed.y=1;
        }else{
        if(this._pressed[Key.UP]){
          this.speed.y=-1;
        }};

        if(this._pressed[Key.RIGHT]){
          this.speed.x=1;
        }else{
        if(this._pressed[Key.LEFT]){
          this.speed.x=-1;
        }};   
    };
};