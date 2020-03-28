//Highlight Syntax

const codeArea = document.querySelector("#code");
const inputArea = document.querySelector("#input");
const autocompleteList = document.querySelector("#autocompleteList");

let currentLine = 0;

let autocompleteVisible = false;
let autocompleteWord = '';
let autocompleteSelection = 0;
let autocompleteFilter;

const highlight = (str) => {
    let lines = str.split("\n");
    let classes = /(sprite|input)/g;
    let numbers = /(-)?\d+/g;
    let symbols = /(\(|\)|;|{|})/g;
    let strings = /"(.*)"/g;
    codeArea.innerHTML = "";

    let lineOrder = 0;
    lines.forEach(line => {
        line = line.replace(strings, "<span class=\"string\">$&</span>")
        line = line.replace(symbols, "<span class=\"symbol\">$&</span>")
        line = line.replace(numbers, "<span class=\"number\">$&</span>")
        line = line.replace(classes, "<span class=\"class\">$&</span>")

        commandsList.forEach(com => {
            let filter = line.includes(com.command);
            if(filter){
                let r = new RegExp(com.command, 'g');
                line = line.replace(r, `<span class=\"${com.category}\">$&</span>`);
            }
        });

        codeArea.innerHTML += `<div class="line" style="order: ${lineOrder}">${line}</div>`;
        lineOrder+=2;
    })
}

window.addEventListener("load", () => {
    hideSplash();

    inputArea.addEventListener("input", (e) => {
        highlight(inputArea.value);
        updateCurrentLine();

        if(e.data != null) {
            autocompleteWord += e.data;
        }else{
            autocompleteWord = autocompleteWord.slice(0, -1);
        }
        if(e.data == ' ') autocompleteWord = '';
        if(autocompleteWord != ''){
            autocompleteFilter = commandsList.filter(f => f.command.startsWith(autocompleteWord));
            autocompleteList.innerHTML = "";
            if(autocompleteFilter != ""){
                autocompleteFilter.forEach(command => {
                    addAutocompleteItem(command.command, command.category, command.description);
                });
                showAutocomplete();
                setAutocompleteSelection(autocompleteSelection);
            }else{
                hideAutocomplete();
                autocompleteSelection = 0;
            }
        }else{
            hideAutocomplete();
            autocompleteSelection = 0;
        }

        //get carret position
        let caret = getCaretCoordinates(inputArea, inputArea.selectionStart);
        autocompleteList.style.top = `${caret.top + caret.height - codeArea.scrollTop}px`;
        autocompleteList.style.left = `${caret.left + linesCount.clientWidth}px`;

        //autocomplete brackets
        if(e.data == '('){
            let selStart = inputArea.selectionStart;
            let selEnd = inputArea.selectionEnd;
            inputArea.value = `${inputArea.value.slice(0, selStart)})${inputArea.value.slice(selEnd)}`;
            inputArea.setSelectionRange(selStart, selEnd);
            highlight(inputArea.value);
        }else if(e.data == '{'){
            let selStart = inputArea.selectionStart;
            let selEnd = inputArea.selectionEnd;
            inputArea.value = `${inputArea.value.slice(0, selStart)}}${inputArea.value.slice(selEnd)}`;
            inputArea.setSelectionRange(selStart, selEnd);
            highlight(inputArea.value);
        }
        else if(e.data == '"'){
            let selStart = inputArea.selectionStart;
            let selEnd = inputArea.selectionEnd;
            inputArea.value = `${inputArea.value.slice(0, selStart)}"${inputArea.value.slice(selEnd)}`;
            inputArea.setSelectionRange(selStart, selEnd);
            highlight(inputArea.value);
        }
    });

    //prevents browser's response to tab key when you're editing the input
    window.onkeydown = (e) => {
        if(document.activeElement == inputArea && e.keyCode == 9) return false;
        if(autocompleteVisible){
            if(e.keyCode == 40){
                return false;
            }
            if(e.keyCode == 38){
                return false;
            }
            if(e.keyCode == 13){
                return false;
            }

            if(e.keyCode == 39 || e.keyCode == 37){
                autocompleteWord = '';
                hideAutocomplete();
                autocompleteSelection = 0;
            }
        }else{
            if(e.keyCode == 13 || e.keyCode == 9){
                autocompleteWord = '';
                autocompleteSelection = 0;
                hideAutocomplete();
            }
        }
    }

    //these event listeners together should trigger when caret's position changes, 
    //since there's no built-in listener for that
    inputArea.addEventListener("mousedown", () => {
        setTimeout(() => updateCurrentLine(), 10);
        inputArea.onmousemove = () => updateCurrentLine();
        hideAutocomplete();
        autocompleteSelection = 0;
        autocompleteWord = '';
    });
    inputArea.addEventListener("mouseup", () => {
        inputArea.onmousemove = null;
        updateCurrentLine();
    });
    inputArea.addEventListener("click", () => {
        setTimeout(() => updateCurrentLine(), 10);
    });
    inputArea.addEventListener("keydown", (e) => {
        setTimeout(() => updateCurrentLine(), 10);
        
        if(e.keyCode == 9 || e.keyCode == 13){
            let selStart = inputArea.selectionStart;
            let selEnd = inputArea.selectionEnd;
            if(autocompleteVisible){
                let a = autocompleteFilter[autocompleteSelection].autocomplete.slice(autocompleteWord.length);
                inputArea.value = `${inputArea.value.slice(0, selStart)}${a}${inputArea.value.slice(selEnd)}`;
                inputArea.setSelectionRange(selStart + a.length, selEnd  + a.length);
                autocompleteWord = '';
                hideAutocomplete();
                autocompleteSelection = 0;
            }else{
                if(e.keyCode == 13) return;
                inputArea.value = `${inputArea.value.slice(0, selStart)}${inputArea.value.slice(selEnd)}`;
                inputArea.setSelectionRange(selStart + 4, selEnd  + 4);
            } 
            highlight(inputArea.value);
        }

        if(autocompleteVisible){
            if(e.keyCode == 40){
                autocompleteSelection++;
                if(autocompleteSelection >= autocompleteFilter.length){
                    autocompleteSelection = 0;
                }
                setAutocompleteSelection(autocompleteSelection);
            }
            if(e.keyCode == 38){
                autocompleteSelection--;
                if(autocompleteSelection < 0){
                    autocompleteSelection = autocompleteFilter.length - 1;
                }
                setAutocompleteSelection(autocompleteSelection);
            }
        }
    });

    //properly react to scrolling
    inputArea.addEventListener("scroll", () => {
        codeArea.scrollTop = inputArea.scrollTop;
        codeArea.style.left = `${-inputArea.scrollLeft}px`;
        document.getElementById('linesCount').style.marginTop = `-${inputArea.scrollTop}px`;
    });
});

//Lines Counter
function renderLines(){
    let linesCount = document.getElementById('linesCount');
    linesCount.innerHTML = null;
    let lineslen = codeArea.children.length;
    for(let i = 0; i < lineslen; i++){
        linesCount.innerHTML += `<p>${i+1}</p>`;
    }
}

//get the number of the line the user is currently on
function getCurrentLine(){
    if(inputArea.selectionStart != inputArea.selectionEnd) return;
    let inputSplited = inputArea.value.split('\n');
    let char = 0;
    let char2 = 1;
    for(let i = 0; i < inputSplited.length; i++){
        for(let h = 0; h < inputSplited[i].length; h++){
            if(inputArea.selectionStart == inputArea.selectionEnd && (inputArea.selectionStart == char || inputArea.selectionStart == char2)){
                return i;
            }
            char++;
            char2++;
        }
        char++;
        char2++;
    }
    if(inputArea.selectionStart != inputArea.selectionEnd){
        char = currentLine;
        return char;
    }
}

//highlight the line the user is currently on
function updateCurrentLine(){
    for(let i = 0; i < codeArea.children.length; i++){
        codeArea.children[i].classList.remove('sel');
    }
    currentLine = getCurrentLine();
    if(currentLine != null) codeArea.children[currentLine].classList.add('sel');
}

codeArea.addEventListener("DOMSubtreeModified", () => renderLines());

//autocomplete
function addAutocompleteItem(heading, category, descr){
    autocompleteList.innerHTML += `<div class="autocomplete-item">
        <h4 class="${category}">${heading}</h4>
        <p>${descr}</p>
    </div>`;
    updateAutocompleteEvents();
}

function showAutocomplete (){
    autocompleteList.classList.add('active');
    autocompleteVisible = true;
}
function hideAutocomplete (){
    autocompleteList.classList.remove('active');
    autocompleteVisible = false;
}
function setAutocompleteSelection (n){
    for(let i = 0; i < autocompleteList.children.length; i++){
        autocompleteList.children[i].classList.remove('sel');
    }
    autocompleteList.children[n].classList.add('sel');
}

function updateAutocompleteEvents(){
    for(let i = 0; i < autocompleteList.children.length; i++){
        autocompleteList.children[i].onclick = () => {
            autocompleteSelection = i;
            setAutocompleteSelection(autocompleteSelection);

            let selStart = inputArea.selectionStart;
            let selEnd = inputArea.selectionEnd;
            let a = autocompleteFilter[autocompleteSelection].autocomplete.slice(autocompleteWord.length);
            inputArea.value = `${inputArea.value.slice(0, selStart)}${a}${inputArea.value.slice(selEnd)}`;
            inputArea.setSelectionRange(selStart + a.length, selEnd  + a.length);
            autocompleteWord = '';
            hideAutocomplete();
            autocompleteSelection = 0;
            highlight(inputArea.value);
        }
    }
}

//code palette
function addPaletteItem(content, category){
    let item = document.createElement('div');
    item.classList.add('palette-item');
    item.innerHTML = `<span class=${category}>${content}</span>`;
    paletteContent.appendChild(item);
    item.onmousedown = (e) => {
        let itemCopy = document.createElement('div');
        itemCopy.classList.add('palette-item');
        itemCopy.innerHTML = `<span class=${category}>${content}</span>`;
        itemCopy.style.position = 'fixed';
        document.getElementById('app').appendChild(itemCopy);
        itemCopy.style.top = `${e.pageY}px`;
        itemCopy.style.left = `${e.pageX}px`;
        itemCopy.style.width = `${paletteContent.clientWidth-40}px`;
        itemCopy.style.zIndex = 999;
        setItemPaletteDraggable(itemCopy, 5, 200, e);
        document.getElementById('app').onmouseup = () => {
            itemCopy.style.animation = `paletteItemDestroy 0.25s ease`;
            itemCopy.style.opacity = 0;
            setTimeout(() => document.getElementById('app').removeChild(itemCopy), 250);
            document.getElementById('app').onmouseup = null;
        }
    }
}

paletteContent.innerHTML = '';
commandsList.forEach(item => {
    addPaletteItem(item.autocomplete, item.category);
});