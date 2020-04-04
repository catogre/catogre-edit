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

let beautify = document.querySelector('#beautifyBtn');

beautify.onclick = () => {
    let indentArray = analyseIndent();
    let indentIndex = 0;

    let inputSplitted = inputArea.value.split('\n');

    inputSplitted.forEach(line => {
        line = line.trim();
        line = '    '.repeat(indentArray[indentIndex]) + line;

        inputSplitted[indentIndex] = line;
        indentIndex++;
    });

    inputArea.value = inputSplitted.join('\n');
    highlight(inputArea.value);
}