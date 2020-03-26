let commandsList = [
    {
        command: 'whenFlagClicked',
        type: 'event',
        category: 'events',
        autocomplete: 'whenFlagClicked:',
        description: 'Triggers every time the user clicks on green flag.'
    },
    {
        command: 'goTo',
        type: 'function',
        category: 'motion',
        autocomplete: 'goTo(0, 0);',
        description: 'Places the sprite in a certain position on the stage (x from -240 to 240 and y from -180 to 180)'
    },
    {
        command: 'say',
        type: 'function',
        category: 'looks',
        autocomplete: 'say("");',
        description: 'Adds a speech ballon near the sprites where certain text can be displayed. To remove the ballon, simply type "" as an argument.'
    }
]