class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenuScene' });
  }

  preload() {
    // Load any graphic resources, if needed.
  }

  create() {
    // Create title using Phaser Text.
    const title = this.add.text(400, 100, 'Mathematikos', {
      fontFamily: 'Garamond, serif',
      fontSize: '64px',
      color: '#B68D40',
      fontStyle: 'bold',
      align: 'center',
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#000',
        blur: 5,
        stroke: true,
        fill: true,
      },
    });
    title.setOrigin(0.5);

    this.createButton('Start Game', 230, () => {
      this.scene.start('ThemeSelectionScene');
    });

    this.createButton('Settings', 300, () => {
      console.log('Settings clicked!');
      // Open settings screen here...
    });

    this.createButton('Help', 370, () => {
      console.log('Help clicked!');
      // Open settings screen here...
    });

    this.createButton('Exit', 440, () => {
      console.log('Exit clicked!');
      // Leave game or any other actions...
    });
  }

  // Helper function to create buttons
  createButton(text: string, y: number, callback: () => void) {
    // Using DOM elements to create buttons (just like in Tailwind).
    const buttonStyle = {
      width: '200px',
      padding: '10px',
      fontSize: '24px',
      color: 'black',
      backgroundColor: '#B68D40',
      border: '2px solid #B68D40',
      borderRadius: '8px',
      margin: '10px auto',
      cursor: 'pointer',
      textAlign: 'center',
    };
    const button = this.add.dom(400, y, 'button', buttonStyle, text);
    button.addListener('click');
    button.on('click', callback);
    return button;
  }
}

export default MainMenuScene;
