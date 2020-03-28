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