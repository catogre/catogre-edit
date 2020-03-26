let commandsList = [
    //events
    {
        command: 'whenFlagClicked',
        type: 'event',
        category: 'events',
        autocomplete: 'whenFlagClicked:',
        description: 'Triggers every time the user clicks on green flag.'
    },
    {
        command: 'whenKeyPressed',
        type: 'event',
        category: 'events',
        autocomplete: 'whenKeyPressed "space":',
        description: 'Triggers when the user presses a specific key.'
    },
    {
        command: 'whenSpriteClicked',
        type: 'event',
        category: 'events',
        autocomplete: 'whenSpriteClicked:',
        description: 'Triggers when the user clicks on this sprite.'
    },
    {
        command: 'whenMessage',
        type: 'event',
        category: 'events',
        autocomplete: 'whenMessage "message1":',
        description: 'Triggers when this sprite recieves a specific message. To send a message, use "broadcast()" block'
    },
    //control
    {
        command: 'whenCloneStarts',
        type: 'event',
        category: 'control',
        autocomplete: 'whenCloneStarts:',
        description: 'Scripts with this event will be executed by clones of this sprite. Clones are copies of the sprite with own properties and local variables/lists.'
    },
    {
        command: 'wait',
        type: 'function',
        category: 'control',
        autocomplete: 'wait(1);',
        description: 'Waits a certain amount of seconds before executing the code after.'
    },
    {
        command: 'createClone',
        type: 'function',
        category: 'control',
        autocomplete: 'createClone(sprite);',
        description: 'Creates a clone of this or any other sprite. Clones are copies of the sprite with own properties and local variables/lists.'
    },
    {
        command: 'forever',
        type: 'container',
        category: 'control',
        autocomplete: 'forever(){\n\n}',
        description: 'Repeats the code inside it forever.'
    },
    {
        command: 'if',
        type: 'container',
        category: 'control',
        autocomplete: 'if(){\n\n}',
        description: 'Checks if the statement if true and if it is, executes the code inside it.'
    },
    {
        command: 'else',
        type: 'container',
        category: 'control',
        autocomplete: 'else(){\n\n}',
        description: '-'
    },

    //motion
    {
        command: 'goTo',
        type: 'function',
        category: 'motion',
        autocomplete: 'goTo(0, 0);',
        description: 'Places the sprite in a certain position on the stage (x from -240 to 240 and y from -180 to 180)'
    },
    {
        command: 'turnCW',
        type: 'function',
        category: 'motion',
        autocomplete: 'turnCW(15);',
        description: 'Turns the sprite clockwise by a certain amount of degrees.'
    },
    {
        command: 'setX',
        type: 'function',
        category: 'motion',
        autocomplete: 'setX(0);',
        description: 'Sets the X (horizontal) position of the sprite to a certain number.'
    },
    {
        command: 'setY',
        type: 'function',
        category: 'motion',
        autocomplete: 'setY(0);',
        description: 'Sets the Y (vertical) position of the sprite to a certain number.'
    },
    {
        command: 'changeX',
        type: 'function',
        category: 'motion',
        autocomplete: 'changeX(10);',
        description: 'Changes the X (horizontal) position of the sprite by a certain number.'
    },
    {
        command: 'changeY',
        type: 'function',
        category: 'motion',
        autocomplete: 'changeY(10);',
        description: 'Changes the Y (vertical) position of the sprite by a certain number.'
    },
    //looks
    {
        command: 'say',
        type: 'function',
        category: 'looks',
        autocomplete: 'say("");',
        description: 'Adds a speech ballon near the sprites where certain text can be displayed. To remove the ballon, simply type "" as an argument.'
    },
    {
        command: 'sayFor',
        type: 'function',
        category: 'looks',
        autocomplete: 'sayFor("", 2);',
        description: 'Adds a speech ballon near the sprites (where certain text can be displayed) for some amount of seconds.'
    },
    //sensing
    {
        command: 'keyPressed',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'keyPressed("space")',
        description: 'Checks if a certain key is pressed. If so, returns true, otherwise false.'
    },
    {
        command: 'mouseDown',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'mouseDown()',
        description: 'Checks if the mouse button is down. If so, returns true, otherwise false.'
    },
]