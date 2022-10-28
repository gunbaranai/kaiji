import Preload from './base_scenes/Preload';
import Boot from './base_scenes/Boot';
import Game from './base_scenes/Game';

export default {
    type: Phaser.WEBGL,
    parent: "phaser3-slot-test",
    width: 1280,
    height: 720,
    physics : {
        default : 'arcade',
        arcade : {
            debug : false
        }
    },
    fps : {
        min: 30,
        target: 60
    },
    scene : [Preload, Boot, Game]
};
