import React from 'react';
import ThemeSelection from '../components/ThemeSelection/ThemeSelection';
import ReactDOM from 'react-dom';

class ThemeSelectionScene extends Phaser.Scene {
  constructor() {
    super('ThemeSelectionScene');
  }

  preload() {
    // Load any graphic resources (images, numeric systems icons, etc), if needed.
  }

  create() {
    this.cameras.main.setBackgroundColor('#f5f5dc');

    this.add
      .text(400, 50, 'Choose a Numeric System', {
        fontSize: '32px',
        fontFamily: 'Garamond',
        color: '#000',
      })
      .setOrigin(0.5);

    // Create container for React rendering.
    const container = this.add.container(200, 100);
    const comp = this.add
      .dom(0, 0)
      .createFromHTML('<div id="theme-selection-container"></div>');

    // Adds element to phase container.
    container.add([comp]);

    // Define a handler for theme selection.
    const handleThemeSelect = (theme: string) => {
      console.log(`Selected theme: ${theme}`);
      // We can transition to another scene or update the current one...
      this.scene.start('IntroductionScene', { selectedTheme: theme });
    };

    // Renders react in a new container.
    ReactDOM.render(
      <ThemeSelection onThemeSelect={handleThemeSelect} />,
      document.getElementById('theme-selection-container')
    );

    // this.createHypatia();
    // this.createStar();
    // this.createSquares();
  }

  createHypatia() {
    const graphics = this.add.graphics();

    // Head
    graphics.fillStyle(0xffc1a1, 1); // Light skin tone
    graphics.fillCircle(400, 300, 30); // Head circle

    // Body
    graphics.fillStyle(0x8b4513, 1); // Brown dress/robe color
    graphics.fillRect(380, 330, 40, 100); // Simple rectangular body

    // Arms
    graphics.fillStyle(0xffc1a1, 1); // Arm color (matching head)
    graphics.fillRect(350, 330, 20, 60); // Left arm
    graphics.fillRect(430, 330, 20, 60); // Right arm

    // Hair (a stylized bun for Hypatia’s traditional hairstyle)
    graphics.fillStyle(0x2f2f2f, 1); // Dark hair color
    graphics.fillCircle(400, 270, 25); // Bun on top of head
    graphics.fillRect(370, 280, 60, 20); // Hair band around the head

    // Scroll or book (symbolic of her role as a philosopher and scholar)
    graphics.fillStyle(0xd2b48c, 1); // Light brown for parchment or scroll
    graphics.fillRect(340, 360, 50, 10); // Simple rectangle as scroll

    // Eyes
    graphics.fillStyle(0x000000, 1); // Black for eyes
    graphics.fillCircle(390, 295, 3); // Left eye
    graphics.fillCircle(410, 295, 3); // Right eye

    // Display a text label
    this.add.text(360, 450, 'Hypatia of Alexandria', {
      fontSize: '20px',
      color: '#ffffff',
    });
  }

  createStar() {
    // Create a new Graphics object
    const graphics = this.add.graphics();

    // Set line style and fill color
    graphics.lineStyle(2, 0xffffff, 1); // White border
    graphics.fillStyle(0xffd700, 1); // Gold fill

    // Draw a star shape
    graphics.beginPath();
    graphics.moveTo(0, -50);
    graphics.lineTo(14, -20);
    graphics.lineTo(47, -15);
    graphics.lineTo(23, 7);
    graphics.lineTo(29, 40);
    graphics.lineTo(0, 25);
    graphics.lineTo(-29, 40);
    graphics.lineTo(-23, 7);
    graphics.lineTo(-47, -15);
    graphics.lineTo(-14, -20);
    graphics.closePath();
    graphics.fillPath();
    graphics.strokePath();

    // Render the Graphics as a texture to use as a sprite
    graphics.generateTexture('star', 100, 100);
    graphics.clear();

    // Add the texture as a sprite to the scene
    const starSprite = this.add.sprite(200, 200, 'star');
  }

  createSquares() {
    const graphics = this.add.graphics();

    // Set color for the background pattern
    graphics.fillStyle(0xf0e68c, 1); // Light yellow

    // Draw a background pattern of rectangles
    for (let y = 0; y < 600; y += 30) {
      for (let x = 0; x < 800; x += 30) {
        graphics.fillRect(x, y, 20, 20);
      }
    }

    // Render as texture
    graphics.generateTexture('pattern', 800, 600);
    graphics.clear();

    // Add texture as background
    this.add.image(400, 300, 'pattern');
  }
}

export default ThemeSelectionScene;
