import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import Phaser from 'phaser';
import IntroductionScene from './scenes/IntroductionScene';
import MainMenuScene from './scenes/MainMenuScene';
import ThemeSelectionScene from './scenes/ThemeSelectionScene';
import SplashScreen from './screens/SplashScreen';
import './styles/main.css';

// class MainScene extends Phaser.Scene {
//   constructor() {
//     super({ key: 'MainScene' });
//   }

//   preload() {
//     // Load assets here...
//   }

//   create() {
//     this.cameras.main.setBackgroundColor('#B68D40');

//     // Set title.
//     const titleStyle = {
//       font: '48px Garamond',
//       fill: '#4b3d2e',
//       align: 'center',
//     };
//     this.add
//       .text(this.cameras.main.centerX, 40, 'Mathematikos', titleStyle)
//       .setOrigin(0.5);

//     // Set instructions.
//     const instructionStyle = {
//       font: '24px Garamond',
//       fill: '#4b3d2e',
//       align: 'center',
//     };
//     this.showText(
//       'Learn the ancient ways of numbers.',
//       instructionStyle,
//       this.cameras.main.centerX,
//       200
//     );

//     // Test roman conversion.
//     const romanNumber: string = 'XIII';
//     const integer: number = romanToInt(romanNumber);
//     console.log(`The integer value of ${romanNumber} is ${integer}`);

//     const num: number = 13;
//     const roman: string = intToRoman(num);
//     console.log(`The Roman numeral for ${num} is ${roman}`);

//     // Usage example.
//     const babylonianNumber = '𒁹𒁹𒁹';
//     const integerValue = babylonianToInt(babylonianNumber);
//     console.log(`The integer value of ${babylonianNumber} is ${integerValue}`);

//     // Test roman conversion.
//     const n: number = 10;
//     const babylonian = intToBabylonian(n);
//     console.log(`The Babylonian numeral for ${n} is ${babylonian}`);

//     // Configure initial logic.
//   }

//   update() {
//     // Game logic updates (in loop).
//   }

//   showText(
//     message: string,
//     textStyle: { font: string; fill: string; align: string },
//     x: number,
//     y: number
//   ) {
//     const textObject = this.add.text(x, y, message, textStyle).setOrigin(0.5);

//     // Fade-in animation.
//     // Starts invisible.
//     textObject.alpha = 0;
//     this.tweens.add({
//       targets: textObject,
//       alpha: 1,
//       duration: 1000,
//       ease: 'Power2',
//       onComplete: () => {
//         // Removes text after some time.
//         this.tweens.add({
//           targets: textObject,
//           alpha: 0,
//           // Keep it visible for 2 seconds.
//           delay: 2000,
//           duration: 1000,
//           onComplete: () => {
//             // Revemos text.
//             textObject.destroy();
//           },
//         });
//       },
//     });
//   }
// }

class MainApp {
  private root: Root | null = null;

  constructor() {
    // Renders the Splash Screen first.
    this.showSplashScreen();
  }

  // Function to start Splace Screen using React.
  showSplashScreen() {
    const container = document.getElementById('game-container');
    if (container && !this.root) {
      this.root = createRoot(container!);
    }

    this.root?.render(
      <SplashScreen onComplete={() => this.startPhaserGame()} />
    );
  }

  // Init Phaser Game.
  startPhaserGame() {
    // Removes Splash Screen content.
    this.root?.unmount();

    // Configures Phaser after Splash Screen is gone.
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: [MainMenuScene, ThemeSelectionScene, IntroductionScene],
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 200, y: 200 },
        },
      },
      parent: 'game-container',
      // Needed to use DOM elements.
      dom: {
        createContainer: true,
      },
    };

    new Phaser.Game(config);
  }
}

// Game starts...
new MainApp();
