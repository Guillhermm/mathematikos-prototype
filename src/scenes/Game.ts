import Phaser from 'phaser';

export class Game extends Phaser.Scene {
  constructor() {
    super('game-scene');
  }

  preload() {
    // Load assets here
    this.load.image('background', 'assets/background.png');
  }

  create() {
    // Create game initial scene.
    // Add background.
    this.add.image(400, 300, 'background');

    // Game logic, user interaction and initial HUD (Heads-Up Display).
    this.add.text(10, 10, 'Welcome to Mathematikos', {
      font: '16px Arial',
      color: '#fff',
    });
  }

  update(time: number, delta: number) {
    // Update interactions and game logic each frame.
  }
}
