var demo = {};
var speed = 6;
var bobby;

demo.state0 = function(){};

demo.state0.prototype = {
    
    preload: function(){
       game.load.image('land', 'assets/background/land.png');
        game.load.spritesheet('bobby', 'assets/spritesheets/bobby.png', 2000, 2000);
    },
    
    
    create: function(){
        game.world.setBounds(0, 0, 2813, 1000);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var land = game.add.sprite(0, 0, 'land');
        bobby = game.add.sprite(1000, 1000, 'bobby');
        
        bobby.scale.setTo(0.7, 0.7)
        
        game.physics.enable(bobby);
        
        bobby.body.collideWorldBounds = true;
        
        bobby.animations.add ('walk', [0, 1, 2, 3, 4, 5, 6, 7,]);
        
        
        
    },
    
    update: function(){
        
            if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                bobby.animations.play('walk');
                bobby.scale.setTo(0.7, 0.7);
                bobby.x = adam.x + speed;
            }
            if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                bobby.animations.play('walk')
                bobby.scale.setTo(-0.7, -0.7);
                adam.x = adam.x - speed;
            }
            if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
                
                if(bobby.y < 200){
                    bobby.y = 200;
                }
                    
                bobby.animations.play('walk');
                bobby.y = bobby.y - speed;
            }
            if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
                bobby.animations.play('walk');
                bobby.y = bobby.y + speed;
            }
            
        }
    };