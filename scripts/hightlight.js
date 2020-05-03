//Highlight Syntax

const codeArea = document.querySelector("#code");
const inputArea = document.querySelector("#input");

let currentLine = 0;

const highlight = (str) => {
    let lines = str.split("\n");
    let numbers = /(-)?\d+/g;
    let symbols = /(\(|\)|;|{|})/g;
    let strings = /".*"/g;
    codeArea.innerHTML = "";

    let highlightClasses = {
        "motion": "motion",
        "looks": "looks",
        "sounds": "sounds",
        "events": "events",
        "control": "control",
        "sensing": "sensing",
        "operators": "operators",
        "logic": "logic",
        "string": "string",
        "number": "number",
        "bool": "bool",
        "variables": "variables",
        "lists": "lists",
        "class": "class",

        lbracket:  'token',
        rbracket:  'token',
        lcurly:  'token',
        rcurly:  'token',
        comSeperator:  'token',
        argSeperator:  'token',
        hatSeperator:  'token',
        classSeperator:  'token',
    }

    let highlightExceptions = {
        '(': '\\(',
        ')': '\\)',
        '.': '\\.',
        '+': '\\+',
        '*': '\\*',
        '/': '\/',
        '||': '\\|\\|',
    }

    let tokensList = tokenizeStr(inputArea.value);
    if(tokensList == "invalid syntax") return;

    lines.forEach(line => {
        tokensList.forEach(com => {
            if(Object.keys(highlightClasses).includes(com.type)){
                let filter = line.includes(com.value);
                if(filter){
                    let r;
                    if(Object.keys(highlightExceptions).includes(com.value)) r = new RegExp(highlightExceptions[com.value], 'g');
                    else r = new RegExp(com.value, 'g');
                    line = line.replace(r, `<span class=\"${highlightClasses[com.type]}\">$&</span>`);
                }
            }
        });
        classesList.forEach(cl => {
            let filter = line.includes(cl.class);
            if(filter){
                let r = new RegExp(cl.class, 'g');
                line = line.replace(r, `<span class=\"class\">$&</span>`);
            }
        });

        codeArea.innerHTML += `<div class="line">${line}</div>`;
    });
}


