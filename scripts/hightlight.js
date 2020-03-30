//Highlight Syntax

const codeArea = document.querySelector("#code");
const inputArea = document.querySelector("#input");

let currentLine = 0;

const highlight = (str) => {
    let lines = str.split("\n");
    let classes = /(sprite|input)/g;
    let numbers = /(-)?\d+/g;
    let symbols = /(\(|\)|;|{|})/g;
    let strings = /".*"/g;
    codeArea.innerHTML = "";

    lines.forEach(line => {
        line = line.replace(strings, "<span class=\"string\">$&</span>");
        line = line.replace(symbols, "<span class=\"token\">$&</span>");
        line = line.replace(numbers, "<span class=\"number\">$&</span>");
        line = line.replace(classes, "<span class=\"class\">$&</span>");

        commandsList.forEach(com => {
            let filter = line.includes(com.command);
            if(filter){
                let r = new RegExp(com.command, 'g');
                line = line.replace(r, `<span class=\"${com.category}\">$&</span>`);
            }
        });

        codeArea.innerHTML += `<div class="line">${line}</div>`;
    })
}

highlight(inputArea.value);
