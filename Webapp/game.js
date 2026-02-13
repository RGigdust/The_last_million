const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a0a0a',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player;

function preload() {
}

function create() {

    player = this.add.rectangle(400, 300, 40, 40, 0x00ffcc);

    this.cursors = this.input.keyboard.createCursorKeys();

}

function update() {

    if(this.cursors.left.isDown){
        player.x -= 4;
    }

    if(this.cursors.right.isDown){
        player.x += 4;
    }

    if(this.cursors.up.isDown){
        player.y -= 4;
    }

    if(this.cursors.down.isDown){
        player.y += 4;
    }

}
