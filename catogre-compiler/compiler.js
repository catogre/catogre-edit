let tokens = {
    space: /[ \t]+/,
    comment: /\/\/.*?$/,
    string:  /"(?:\\["\\]|[^\n"\\])*"/,
    number:  /[0-9]+(?:\.[0-9]+)*/,
    bool: ['true', 'false'],
    lbracket:  '(',
    rbracket:  ')',
    lcurly:  '{',
    rcurly:  '}',
    comSeperator:  ';',
    argSeperator:  ',',
    hatSeperator:  ':',
    classSeperator:  '.',
    class: [],
    logic: /\+|\-|\*|\/|%|&&|\|\||\!|<|>|==/,
    nl: { match: /\n/, lineBreaks: true },
}

commandsList.forEach(c => {
    if(!tokens[c.category]) tokens[c.category] = [c.command];
    else tokens[c.category].push(c.command);
});

classesList.forEach(c => {
    tokens.class.push(c.class);
});

tokens["invalid"] = /\S+/;

function tokenizeStr(str){
    let lexer = moo.compile(tokens);
    let tokensList = [];

    lexer.reset(str);
    let com = lexer.next();
    while(com != undefined){
        tokensList.push(com);
        com = lexer.next();
    }

    return tokensList;
}