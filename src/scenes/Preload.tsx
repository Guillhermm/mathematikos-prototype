import Phaser from 'phaser';

export class Preload extends Phaser.Scene {
  constructor() {
    super('preload-scene');
  }

  preload() {
    // Show progress bar.
    const progress = this.add.graphics();

    this.load.on('progress', (value: number) => {
      progress.clear();
      progress.fillStyle(0xffffff, 1);
      progress.fillRect(0, 270, 800 * value, 60);
    });

    this.load.on('complete', () => {
      progress.destroy();
    });

    // Load main assets.
    this.load.image('background', 'assets/background.png');
  }

  create() {
    // Switch to game main scene.
    this.scene.start('game-scene');
  }
}
