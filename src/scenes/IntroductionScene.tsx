class IntroductionScene extends Phaser.Scene {
  private chatBox!: Phaser.GameObjects.Container;
  private chatText!: Phaser.GameObjects.Text;
  private currentTextIndex: number = 0;
  private textMessages: string[] = [
    'Greetings, traveler!\n\nI am Hypatia of Alexandria, philosopher and mathematician of ancient times.\n\nIt is an honor to finally meet you.',
    'It seems you have found an ancient temple that allowed you to travel time and get in here.\n\nI believe that might be fate...',
    'We need your help to fight a secret organization that is trying to erase all knowledge from ancient worlds.',
    'Your mission, if you accept it, is to visit important ancient civilizations and help them solve some problems while collecting fragments of a mysterious artifact called the "Oracle of Numbers".',
    'Complete all challenges in different civilizations, collecting those fragments and ultimately deciphering the riddle of ancestral numbers, unifying the number systems into a single sacred artifact.\n\nThis should help preserve the knowledge for futute generations to come.',
    'Your first challenge awaits just beyond!\n\nYou will begin by learning the ways of Roman numerals, discovering how numbers built their empire.\n\nSharpen your mind, for each lesson will prepare you for the next.',
  ];

  constructor() {
    super({ key: 'IntroductionScene' });
  }

  preload() {
    this.load.image('background', 'assets/images/introduction.png');
  }

  create() {
    this.add.image(400, 300, 'background').setScale(0.8, 0.8);
    this.createChatBox();

    // Start text transition on a timer
    // this.time.addEvent({
    //   delay: 5000,
    //   callback: this.nextText,
    //   callbackScope: this,
    //   loop: true,
    // });

    // Allow user to click to change the text
    this.input.on('pointerdown', this.nextText, this);
  }

  createChatBox() {
    // Create the chat box as a Container to hold background and text
    this.chatBox = this.add.container(450, 50);
    this.chatBox.setDepth(10);

    // Draw background for the chat box
    const background = this.add.graphics();
    background.fillStyle(0x3b2f2f, 0.8); // Ancient brown color, semi-transparent
    background.fillRoundedRect(0, 0, 300, 400, 20); // Rounded corners

    // Add some border effects for an ancient look
    background.lineStyle(4, 0xd4a373); // Gold-like color
    background.strokeRoundedRect(0, 0, 300, 400, 20);

    // Add this background to the chat box container
    this.chatBox.add(background);

    // Configure text style for ancient look
    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      fontFamily: '"Papyrus", serif',
      fontSize: '20px',
      color: '#d4a373', // Ancient, faded color
      wordWrap: { width: 280, useAdvancedWrap: true },
      align: 'center',
      stroke: '#3b2f2f',
      strokeThickness: 2,
    };

    // Add placeholder text
    this.chatText = this.add.text(
      150,
      200,
      this.textMessages[this.currentTextIndex],
      textStyle
    );
    this.chatText.setOrigin(0.5); // Center the text within the box
    this.chatBox.add(this.chatText);

    // Add animation for fading in and out
    // this.tweens.add({
    //   targets: this.chatBox,
    //   alpha: { from: 0, to: 1 },
    //   duration: 1000,
    //   yoyo: true,
    //   repeat: -1,
    //   ease: 'Sine.easeInOut',
    // });
  }

  nextText() {
    // Cycle through messages.
    this.currentTextIndex =
      (this.currentTextIndex + 1) % this.textMessages.length;
    this.updateChatText(this.textMessages[this.currentTextIndex]);
  }

  updateChatText(newText: string) {
    this.chatText.setText(newText);
  }
}

export default IntroductionScene;
