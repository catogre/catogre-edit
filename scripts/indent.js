function analyseIndent(){
    let inputSplitted = inputArea.value.split('\n');
    let indentArray = [];
    let indentValue = 0;
    let prevArr = [];

    inputSplitted.forEach(line => {
        let arr = line.split("");
        let openBracketFilter = prevArr.filter(f => f == '{');
        let closingBracketFilter = arr.filter(f => f == '}');

        indentValue += openBracketFilter.length;
        indentArray.push(indentValue);
        indentValue -= closingBracketFilter.length;
        indentArray[indentArray.length-1] = indentValue;
        prevArr = arr;
    });

    return indentArray;
}

let indents = [];