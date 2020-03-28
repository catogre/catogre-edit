let commandsList = [
    //motion
    {
        command: 'moveSteps',
        type: 'function',
        category: 'motion',
        autocomplete: 'moveSteps(10);',
        description: 'Moves the sprite by a certain amount of steps in the direction it\'s facing.'
    },
    {
        command: 'turnCW',
        type: 'function',
        category: 'motion',
        autocomplete: 'turnCW(15);',
        description: 'Turns the sprite clockwise by a certain amount of degrees.'
    },
    {
        command: 'turnCCW',
        type: 'function',
        category: 'motion',
        autocomplete: 'turnCCW(15);',
        description: 'Turns the sprite counter-clockwise by a certain amount of degrees.'
    },

    {
        command: 'goTo',
        type: 'function',
        category: 'motion',
        autocomplete: 'goTo(0, 0);',
        description: 'Places the sprite in a certain position on the stage (x from -240 to 240 and y from -180 to 180).'
    },
    {
        command: 'goToObject',
        type: 'function',
        category: 'motion',
        autocomplete: 'goToObject("mouse");',
        description: 'Goes to a certain object. Enter the name of the sprite, "mouse" or "random" inside this command.'
    },
    {
        command: 'glideTo',
        type: 'function',
        category: 'motion',
        autocomplete: 'glideTo(0, 0, 1);',
        description: 'Glides towards a certain positon in some amount of time. The first two arguments are X and Y position and the third one is time.'
    },
    {
        command: 'goToObject',
        type: 'function',
        category: 'motion',
        autocomplete: 'goToObject("mouse", 1);',
        description: 'Glides towards a sprite, mouse or random position in some amount of time. The first argument is the object and the second one is time.'
    },

    {
        command: 'setDirection',
        type: 'function',
        category: 'motion',
        autocomplete: 'setDirection(90);',
        description: 'Sets the direction of the sprite to some number between -180 and 180. 90 is default.'
    },
    {
        command: 'pointTowards',
        type: 'function',
        category: 'motion',
        autocomplete: 'pointTowards("mouse");',
        description: 'Rotates the sprite towards a certain sprite or mouse.'
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

    {
        command: 'ifEdgeBounce',
        type: 'function',
        category: 'motion',
        autocomplete: 'ifEdgeBounce();',
        description: 'Checks if the sprite is touching the edge of the stage, and if it does, changes it direction.'
    },
    {
        command: 'setRotStyle',
        type: 'function',
        category: 'motion',
        autocomplete: 'setRotStyle("left-right");',
        description: 'Sets the rotation style of the sprite to either "left-right", "all around" or "don\'t rotate".'
    },
    {
        command: 'x',
        type: 'reporter',
        category: 'motion',
        autocomplete: 'sprite.x',
        description: 'Returns the X (horizontal) position of the sprite.'
    },
    {
        command: 'y',
        type: 'reporter',
        category: 'motion',
        autocomplete: 'sprite.y',
        description: 'Returns the Y (vertical) position of the sprite.'
    },
    {
        command: 'direction',
        type: 'reporter',
        category: 'motion',
        autocomplete: 'sprite.direction',
        description: 'Returns the direction of the sprite.'
    },

    //looks
    {
        command: 'say',
        type: 'function',
        category: 'looks',
        autocomplete: 'say("");',
        description: 'Adds a speech bubble near the sprites where certain text can be displayed. To remove the bubble, simply type "" as an argument.'
    },
    {
        command: 'sayFor',
        type: 'function',
        category: 'looks',
        autocomplete: 'sayFor("", 2);',
        description: 'Adds a speech bubble near the sprites (where certain text can be displayed) for some amount of seconds.'
    },

    {
        command: 'think',
        type: 'function',
        category: 'looks',
        autocomplete: 'think("");',
        description: 'Adds a thinking speech bubble near the sprites where certain text can be displayed. To remove the bubble, simply type "" as an argument.'
    },
    {
        command: 'thinkFor',
        type: 'function',
        category: 'looks',
        autocomplete: 'thinkFor("", 2);',
        description: 'Adds a thinking bubble ballon near the sprites (where certain text can be displayed) for some amount of seconds.'
    },

    {
        command: 'setCostume',
        type: 'function',
        category: 'looks',
        autocomplete: 'setCostume("costumeName");',
        description: 'Switches the sprite\'s costume to a certain one.'
    },
    {
        command: 'setBackdrop',
        type: 'function',
        category: 'looks',
        autocomplete: 'setCostume("bgName");',
        description: 'Switches the backdrop of the stage to a certain one.'
    },
    {
        command: 'nextCostume',
        type: 'function',
        category: 'looks',
        autocomplete: 'nextCostume();',
        description: 'Switches the sprite\'s costume to the next one.'
    },
    {
        command: 'nextBackdrop',
        type: 'function',
        category: 'looks',
        autocomplete: 'nextBackdrop();',
        description: 'Switches the backdrop of the stage to the next one.'
    },

    {
        command: 'setSize',
        type: 'function',
        category: 'looks',
        autocomplete: 'setSize(100);',
        description: 'Sets the sprite scale to a certain percentage from it\'s original size. 100 is the default.'
    },
    {
        command: 'changeSize',
        type: 'function',
        category: 'looks',
        autocomplete: 'changeSize(10);',
        description: 'Changes the size of the sprite by a certain percentage.'
    },

    {
        command: 'setEffect',
        type: 'function',
        category: 'looks',
        autocomplete: 'setEffect("color", 0);',
        description: 'Sets one of sprite\'s visual effects to some amount. The effects are: "color", "fisheye", "whirl", "pixelate", "mosaic", "brightness", "ghost".'
    },
    {
        command: 'changeEffect',
        type: 'function',
        category: 'looks',
        autocomplete: 'changeEffect("color", 25);',
        description: 'Changes one of sprite\'s visual effects by some amount.'
    },
    {
        command: 'clearEffects',
        type: 'function',
        category: 'looks',
        autocomplete: 'clearEffects();',
        description: 'Clears all the visual effects for this sprite.'
    },

    {
        command: 'hide',
        type: 'function',
        category: 'looks',
        autocomplete: 'hide();',
        description: 'Makes the sprite invisible and undetectable by collision sensors.'
    },
    {
        command: 'hide',
        type: 'function',
        category: 'looks',
        autocomplete: 'show();',
        description: 'Makes the sprite visible.'
    },

    {
        command: 'goToFront',
        type: 'function',
        category: 'looks',
        autocomplete: 'goToFront();',
        description: 'Moves the sprite on top of all other sprites.'
    },
    {
        command: 'goToBack',
        type: 'function',
        category: 'looks',
        autocomplete: 'goToBack();',
        description: 'Moves the sprite behind all other sprites.'
    },
    {
        command: 'goForward',
        type: 'function',
        category: 'looks',
        autocomplete: 'goForward(1);',
        description: 'Moves the sprite forward by some amount of layers.'
    },
    {
        command: 'goBackward',
        type: 'function',
        category: 'looks',
        autocomplete: 'goBackward(1);',
        description: 'Moves the sprite backward by some amount of layers'
    },

    {
        command: 'costumeNum',
        type: 'reporter',
        category: 'looks',
        autocomplete: 'sprite.costumeNum',
        description: 'Returns the index of the current costume.'
    },
    {
        command: 'costumeName',
        type: 'reporter',
        category: 'looks',
        autocomplete: 'sprite.costumeName',
        description: 'Returns the name of the current costume.'
    },
    {
        command: 'backdropNum',
        type: 'reporter',
        category: 'looks',
        autocomplete: 'sprite.backdropNum',
        description: 'Returns the index of the current backdrop.'
    },
    {
        command: 'backdropName',
        type: 'reporter',
        category: 'looks',
        autocomplete: 'sprite.backdropName',
        description: 'Returns the name of the current backdrop.'
    },

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