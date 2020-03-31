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

    let tokensList = tokenizeStr(inputArea.value);
    if(tokensList == "invalid syntax") return;

    lines.forEach(line => {
        line = line.replace(strings, "<span class=\"string\">$&</span>");
        line = line.replace(symbols, "<span class=\"token\">$&</span>");
        line = line.replace(numbers, "<span class=\"number\">$&</span>");
        console.log(tokensList);

        tokensList.forEach(com => {
            if(com.type != 'invalid'){
                let filter = line.includes(com.value);
                if(filter){
                    let r = new RegExp(com.value, 'g');
                    line = line.replace(r, `<span class=\"${com.type}\">$&</span>`);
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

highlight(inputArea.value);
