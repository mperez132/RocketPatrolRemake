class Rocket extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
    }
    update() {
        if(keyLEFT.isDown) {
            this.x -= 2;
        }
        if(keyRIGHT.isDown) {
            this.x += 2;
        }
    }
}