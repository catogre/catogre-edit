function analyseIndent(){
    let inputSplitted = inputArea.value.split('\n');
    let indentArray = [0];
    let indentValue = 0;

    inputSplitted.forEach(line => {
        let arr = line.split("");
        let openBracketFilter = arr.filter(f => f == '{');
        let closingBracketFilter = arr.filter(f => f == '}');
        
        indentValue += openBracketFilter.length;
        indentValue -= closingBracketFilter.length;

        indentArray.push(indentValue);
    });

    return indentArray;
}