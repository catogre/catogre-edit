let commandsList = [
    //motion
    {
        command: 'moveSteps',
        type: 'function',
        category: 'motion',
        autocomplete: 'moveSteps(10);',
        description: 'Moves the sprite by a certain amount of steps in the direction it\'s facing.',
        newgroup: true,
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
        description: 'Places the sprite in a certain position on the stage (x from -240 to 240 and y from -180 to 180).',
        newgroup: true,
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
        description: 'Sets the direction of the sprite to some number between -180 and 180. 90 is default.',
        newgroup: true,
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
        description: 'Sets the X (horizontal) position of the sprite to a certain number.',
        newgroup: true,
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
        description: 'Checks if the sprite is touching the edge of the stage, and if it does, changes it direction.',
        newgroup: true,
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
        description: 'Returns the X (horizontal) position of the sprite.',
        newgroup: true,
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
        description: 'Adds a speech bubble near the sprites where certain text can be displayed. To remove the bubble, simply type "" as an argument.', 
        newgroup: true,
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
        description: 'Switches the sprite\'s costume to a certain one.', 
        newgroup: true,
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
        description: 'Sets the sprite scale to a certain percentage from it\'s original size. 100 is the default.', 
        newgroup: true,
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
        description: 'Sets one of sprite\'s visual effects to some amount. The effects are: "color", "fisheye", "whirl", "pixelate", "mosaic", "brightness", "ghost".', 
        newgroup: true,
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
        description: 'Makes the sprite invisible and undetectable by collision sensors.', 
        newgroup: true,
    },
    {
        command: 'show',
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
        description: 'Moves the sprite on top of all other sprites.', 
        newgroup: true,
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
        description: 'Returns the index of the current costume.', 
        newgroup: true,
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

    //sound
    {
        command: 'startSound',
        type: 'function',
        category: 'sound',
        autocomplete: 'startSound("soundName");',
        description: 'Plays a certain sound, without pausing the script. To add a new sound, go to the "sounds" tab.', 
        newgroup: true,
    },
    {
        command: 'playSoundAndWait',
        type: 'function',
        category: 'sound',
        autocomplete: 'playSoundAndWait("soundName");',
        description: 'Plays a certain sound and once it\'s finished, resumes the script.', 
    },
    {
        command: 'stopAllSounds',
        type: 'function',
        category: 'sound',
        autocomplete: 'stopAllSounds();',
        description: 'Stops all the sounds currently playing.', 
    },

    {
        command: 'setSoundEffect',
        type: 'function',
        category: 'sound',
        autocomplete: 'setSoundEffect("pitch", 0);',
        description: 'Sets one of sprite\'s sound effects to some amount. The effects are: "pitch", "pan"', 
        newgroup: true,
    },
    {
        command: 'changeSoundEffect',
        type: 'function',
        category: 'sound',
        autocomplete: 'changeSoundEffect("pitch", 10);',
        description: 'Changes one of sprite\'s sound effects by some amount.', 
    },
    {
        command: 'clearSoundEffects',
        type: 'function',
        category: 'sound',
        autocomplete: 'clearSoundEffects();',
        description: 'Clears all the sound effects for this sprite.', 
    },

    {
        command: 'setVolume',
        type: 'function',
        category: 'sound',
        autocomplete: 'setVolume(100);',
        description: 'Sets the volume of the sprite to a certain value. The higher the volume is, the louder the sounds of this sprite will be playing.', 
        newgroup: true,
    },
    {
        command: 'changeVolume',
        type: 'function',
        category: 'sound',
        autocomplete: 'changeVolume(10);',
        description: 'Changes the volume of the sprite by a certain value. The higher the volume is, the louder the sounds of this sprite will be playing.', 
    },
    {
        command: 'volume',
        type: 'reporter',
        category: 'sound',
        autocomplete: 'sprite.volume',
        description: 'Returns the volume of the sprite.', 
    },

    //events
    {
        command: 'whenFlagClicked',
        type: 'event',
        category: 'events',
        autocomplete: 'whenFlagClicked:',
        description: 'Triggers every time the user clicks on green flag.', 
        newgroup: true,
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
        command: 'whenBgSwitchesTo',
        type: 'event',
        category: 'events',
        autocomplete: 'whenBgSwitchesTo "backdrop name":',
        description: 'Triggers every time the backgdrop switches to a certain one.'
    },

    {
        command: 'whenLoundnessGreaterThan',
        type: 'event',
        category: 'events',
        autocomplete: 'whenLoundnessGreaterThan 10:',
        description: 'Triggers every time the loudness of the audio from the microphone passes over a certain threshold number.',
        newgroup: true
    },
    {
        command: 'whenTimerGreaterThan',
        type: 'event',
        category: 'events',
        autocomplete: 'whenTimerGreaterThan 10:',
        description: 'Triggers every time the project\'s timer becomes greater than a certain number.',
    },

    {
        command: 'whenMessage',
        type: 'event',
        category: 'events',
        autocomplete: 'whenMessage "message1":',
        description: 'Triggers when this sprite recieves a specific message. To send a message, use "broadcast()" command',
        newgroup: true
    },
    {
        command: 'broadcast',
        type: 'function',
        category: 'events',
        autocomplete: 'broadcast("message1")',
        description: 'Sends a specific message to all the sprites. To recieve a message, use "whenMessage" event',
    },
    {
        command: 'broadcastAndWait',
        type: 'function',
        category: 'events',
        autocomplete: 'broadcastAndWait("message1")',
        description: 'Sends a specific message and waits until one of the sprites recieves it. To recieve a message, use "whenMessage" event',
    },

    //control
    {
        command: 'wait',
        type: 'function',
        category: 'control',
        autocomplete: 'wait(1);',
        description: 'Waits a certain amount of seconds before executing the code after.',
        newgroup: true,
    },

    {
        command: 'repeat',
        type: 'container',
        category: 'control',
        autocomplete: 'repeat(10){\n\n}',
        description: 'Repeats the code inside it a certain amount of times.',
        newgroup: true,
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
        description: 'Checks if the statement if true and if it is, executes the code inside it.',
        newgroup: true,
    },
    {
        command: 'else',
        type: 'container',
        category: 'control',
        autocomplete: 'else{\n\n}',
        description: '-'
    },
    {
        command: 'waitUntil',
        type: 'function',
        category: 'control',
        autocomplete: 'waitUntil();',
        description: 'Waits until a certain condition becomes true before executing the code after.',
    },
    {
        command: 'repeatUntil',
        type: 'container',
        category: 'control',
        autocomplete: 'repeatUntil(){\n\n}',
        description: 'Repeats the code inside it until a certain condition becomes true.',
    },

    {
        command: 'stop',
        type: 'function',
        category: 'control',
        autocomplete: 'stop("all");',
        description: 'Either stops all the scripts, this script or the other scripts in this sprite. The argument should be one of those: "all", "this" or "others"',
        newgroup: true,
    },

    {
        command: 'whenCloneStarts',
        type: 'event',
        category: 'control',
        autocomplete: 'whenCloneStarts:',
        description: 'Scripts with this event will be executed by clones of this sprite. Clones are copies of the sprite with own properties and local variables/lists.',
        newgroup: true,
    },
    {
        command: 'createClone',
        type: 'function',
        category: 'control',
        autocomplete: 'createClone("this");',
        description: 'Creates a clone of this or any other sprite. The argument should be either "this", or the name of other sprite.'
    },
    {
        command: 'deleteClone',
        type: 'function',
        category: 'control',
        autocomplete: 'deleteClone();',
        description: 'Deletes the clone from which this code was executed. Clones are copies of the sprite with own properties and local variables/lists.'
    },

    //sensing
    {
        command: 'touchingObject',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'touchingObject("mouse")',
        description: 'Checks if this sprite is touching another sprite, an edge of the scene, or the mouse pointer. If so, returns true, otherwise false.',
        newgroup: true,
    },
    {
        command: 'touchingColor',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'touchingColor("#FF0000")',
        description: 'Checks if this sprite is touching a certain color, written in HEX code. If so, returns true, otherwise false.'
    },
    {
        command: 'colorTouchingColor',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'colorTouchingColor("#FFF", "#F00")',
        description: 'Checks if the parts of the sprite with a certain color are touching another color, both written in HEX code. If so, returns true, otherwise false.'
    },
    {
        command: 'distanceTo',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'distanceTo("mouse")',
        description: 'Returns the distance from this sprite to another one, or to mouse pointer, in pixels.'
    },

    {
        command: 'ask',
        type: 'function',
        category: 'sensing',
        autocomplete: 'ask("Who let the dogs out?");',
        description: 'Opens a text prompt, where user can enter the answer. Then, stores the answer in the "answer" property and resumes the code.',
        newgroup: true,
    },
    {
        command: 'answer',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'answer',
        description: 'Returns the answer, entered by the user in the message prompt. To open it, use "ask()" command.',
    },

    {
        command: 'keyPressed',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'keyPressed("space")',
        description: 'Checks if a certain key is pressed. If so, returns true, otherwise false.',
        newgroup: true,
    },
    {
        command: 'mouseDown',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'mouseDown()',
        description: 'Checks if the mouse button is down. If so, returns true, otherwise false.'
    },
    {
        command: 'mouseX',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'mouseX',
        description: 'Returns the X (horizontal) position of the mouse pointer, relative to the stage.'
    },
    {
        command: 'mouseY',
        type: 'reporter',
        category: 'sensing',
        autocomplete: 'mouseY',
        description: 'Returns the Y (vertical) position of the mouse pointer, relative to the stage.'
    },

    {
        command: 'setDragMode',
        type: 'function',
        category: 'sensing',
        autocomplete: 'setDragMode(true);',
        description: 'Sets the drag mode of the sprite to either draggable (true) or not draggable (false).',
        newgroup: true,
    },

    //operators
    {
        command: 'pickRandom',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'pickRandom(1, 10)',
        description: 'Returns a random integer (if both of the arguments are integers) or decimal (if at least one of them is decimal) in the range from one of the arguments to another.',
        newgroup: true,
    },

    {
        command: 'join',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'join("apple", "banana")',
        description: 'Joins two given strings together and returns the result.',
        newgroup: true,
    },
    {
        command: 'letterOf',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'letterOf(1, "apple")',
        description: 'Returns a certain symbol of a given string. The first argument is the index of the symbol and the second one is the string itself.',
    },
    {
        command: 'length',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'length("apple")',
        description: 'Returns the length (number of symbols) of a given string.',
    },
    {
        command: 'contains',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'contains("apple", "a")',
        description: 'Checks if the first given string contains the second given string. If so, returns true, otherwise false.',
    },

    {
        command: 'round',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'round(1.5)',
        description: 'Returns a rounded version of a given number.',
        newgroup: true,
    },
    {
        command: 'abs',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'abs(1)',
        description: 'Math function. Absolute value of a number.',
    },
    {
        command: 'floor',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'floor(1)',
        description: 'Math function.',
    },
    {
        command: 'ceiling',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'ceiling(1)',
        description: 'Math function.',
    },
    {
        command: 'sqrt',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'sqrt(1)',
        description: 'Math function. Square root of a number.',
    },
    {
        command: 'sin',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'sin(1)',
        description: 'Math function.',
    },
    {
        command: 'cos',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'cos(1)',
        description: 'Math function.',
    },
    {
        command: 'tan',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'tan(1)',
        description: 'Math function.',
    },
    {
        command: 'asin',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'asin(1)',
        description: 'Math function.',
    },
    {
        command: 'acos',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'acos(1)',
        description: 'Math function.',
    },
    {
        command: 'atan',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'atan(1)',
        description: 'Math function.',
    },
    {
        command: 'ln',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'ln(1)',
        description: 'Math function.',
    },
    {
        command: 'ePower',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'ePower(1)',
        description: 'Math function. Euler\'s number to the power of some number.',
    },
    {
        command: 'tenPower',
        type: 'reporter',
        category: 'operators',
        autocomplete: 'tenPower(1)',
        description: 'Math function. Ten to the power of some number.',
    },

    //variables
    {
        command: 'setVar',
        type: 'function',
        category: 'variables',
        autocomplete: 'setVar("variable", 0)',
        description: 'Sets the value of a certain variable to a some number or string.',
        newgroup: true,
    },
    {
        command: 'changeVar',
        type: 'function',
        category: 'variables',
        autocomplete: 'changeVar("variable", 1)',
        description: 'Changes the value of a certain variable by a some number.',
    },
    {
        command: 'showVar',
        type: 'function',
        category: 'variables',
        autocomplete: 'showVar("variable")',
        description: 'Shows a certain variable\'s monior on the stage.',
    },
    {
        command: 'hideVar',
        type: 'function',
        category: 'variables',
        autocomplete: 'hideVar("variable")',
        description: 'Hides a certain variable\'s monior on the stage.',
    },

    //lists
    {
        command: 'showList',
        type: 'function',
        category: 'lists',
        autocomplete: 'showList("list")',
        description: 'Shows a certain list\'s monior on the stage.',
    },
    {
        command: 'hideList',
        type: 'function',
        category: 'lists',
        autocomplete: 'hideList("list")',
        description: 'Hides a certain list\'s monior on the stage.',
    },
]

let categoriesList = [
    {
        category: 'motion',
        name: 'Motion',
        color: '#4c97ff'
    },
    {
        category: 'looks',
        name: 'Looks',
        color: '#9966ff'
    },
    {
        category: 'sound',
        name: 'Sound',
        color: '#d65cd6',
    },
    {
        category: 'events',
        name: 'Events',
        color: '#ffde39',
    },
    {
        category: 'control',
        name: 'Control',
        color: '#fdbb47',
    },
    {
        category: 'sensing',
        name: 'Sensing',
        color: '#4cbfe6',
    },
    {
        category: 'operators',
        name: 'Operators',
        color: '#40bf4a',
    },
    {
        category: 'logic',
        name: 'Logic',
        color: '#b3d83a',
        special: 'logic'
    },
    {
        category: 'types',
        name: 'Types',
        color: '#f7b26c',
        special: 'types'
    },
    {
        category: 'variables',
        name: 'Variables',
        color: '#ff8c1a',
        customcategory: true,
    },
    {
        category: 'lists',
        name: 'Lists',
        color: '#ff661a',
        customcategory: true,
    },
]

let classesList = [
    {
        class: "sprite",
        description: "Get or edit the properties of this sprite."
    },
    {
        class: "input",
        description: "Get data from various inputs, such as keyboard or mouse."
    },
    {
        class: "math",
        description: "Contains some handy math functions."
    },
]

let specialsList = [
    //logic
    {
        content: '2 + 2',
        category: 'logic',
        newgroup: true,
    },
    {
        content: '2 - 1',
        category: 'logic',
    },
    {
        content: '2 * 2',
        category: 'logic',
    },
    {
        content: '2 / 2',
        category: 'logic',
    },
    {
        content: '3 % 2',
        category: 'logic',
    },

    {
        content: '1 > 2',
        category: 'logic',
        newgroup: true,
    },
    {
        content: '1 < 2',
        category: 'logic',
    },
    {
        content: '1 == 2',
        category: 'logic',
    },

    {
        content: '&&',
        category: 'logic',
        newgroup: true,
    },
    {
        content: '||',
        category: 'logic',
    },
    {
        content: '!',
        category: 'logic',
    },

    //types
    {
        content: '"String"',
        category: 'types',
        colorCategory: 'string',
        newgroup: true,
    },
    {
        content: '50',
        category: 'types',
        colorCategory: 'number',
    },

    {
        content: 'true',
        category: 'types',
        colorCategory: 'bool',
        newgroup: true,
    },
    {
        content: 'false',
        category: 'types',
        colorCategory: 'bool',
    },
]