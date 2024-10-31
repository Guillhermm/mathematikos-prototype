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
      this.scene.start('GameScene', { selectedTheme: theme });
    };

    // Renders react in a new container.
    ReactDOM.render(
      <ThemeSelection onThemeSelect={handleThemeSelect} />,
      document.getElementById('theme-selection-container')
    );
  }
}

export default ThemeSelectionScene;
