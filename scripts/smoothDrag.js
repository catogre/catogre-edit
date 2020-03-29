//smooth dragging algorithm with rotation
//item: the html item that would be draggable
//easeFactor: how slow the item would be following the mouse. 1 for instant
//rotFactor: how extreme the rotation will be. The more the number is the less extreme it'll be. 0 for no rotation

function setItemDraggable(item, easeFactor, rotFactor){
    item.onmousedown = function(eDown){
        let mousePos = {
            x: eDown.pageX,
            y: eDown.pageY
        }

        let diffX = mousePos.x - item.offsetLeft;
        let diffY = mousePos.y - item.offsetTop;

        let itemTop = item.offsetTop;
        let itemLeft = item.offsetLeft;
        let itemDirection = 0;

        let targetX;
        let targetY;

        let interval = setInterval(function(){
            targetX = mousePos.x - diffX;
            targetY = mousePos.y - diffY;

            itemTop += (targetY - itemTop)/easeFactor;
            itemLeft += (targetX - itemLeft)/easeFactor;
            itemDirection = Math.atan((targetX - itemLeft)/rotFactor);
            if(rotFactor == 0) itemDirection = 0;

            item.style.top = `${itemTop}px`;
            item.style.left = `${itemLeft}px`;
            item.style.transform = `rotate(${itemDirection}rad)`
        }, 10);

        document.onmousemove = function(e){
            mousePos = {
                x: e.pageX,
                y: e.pageY
            }
        }

        document.onmouseup = function(){
            clearInterval(interval);
            item.style.transform = null;
            document.onmousemove = null;
            document.onmouseup = null;
        }

        item.ondragstart = function() {
            return false;
        };
    }
}

//smooth drag for code palette items
function setItemPaletteDraggable(item, content, category, insertType, easeFactor, rotFactor, eDown){
    let mousePos = {
        x: eDown.pageX,
        y: eDown.pageY
    }

    let diffX = mousePos.x - item.getBoundingClientRect().x/2;
    let diffY = mousePos.y - item.getBoundingClientRect().y + 10;

    let itemTop = item.getBoundingClientRect().y;
    let itemLeft = item.getBoundingClientRect().x/2;
    let itemDirection = 0;

    let targetX;
    let targetY;

    let targetLine;
    let targetColumn;
    let tempLine;
    let tempSpan;

    if (insertType === 'LINE') {
        tempLine = document.createElement('div');
        tempLine.classList.add('line', 'temp-line', category);
        tempLine.appendChild(document.createTextNode(content));
    } else if (insertType === 'SPAN') {
        tempSpan = document.createElement('span');
        tempSpan.classList.add('temp-span', category);
        tempSpan.appendChild(document.createTextNode(content));
    }

    let overCodeArea = false;

    let interval = setInterval(function(){
        targetX = mousePos.x - diffX;
        targetY = mousePos.y - diffY;

        itemTop += (targetY - itemTop)/easeFactor;
        itemLeft += (targetX - itemLeft)/easeFactor;
        itemDirection = Math.atan((targetX - itemLeft)/rotFactor);
        if(rotFactor == 0) itemDirection = 0;

        item.style.top = `${itemTop}px`;
        item.style.left = `${itemLeft}px`;
        item.style.transform = `rotate(${itemDirection}rad)`;
    }, 10);

    function insertAtColumn(insertColumn, lineEl, insertEl) {
        let column = 0;
        insertEl.remove();
        function insertElIntoElementOrContinue(parent) {
            let child;
            for (child of parent.childNodes) {
                if (child.nodeType === document.TEXT_NODE) {
                    const nodeEndColumn = column + child.textContent.length;
                    const nodeStartColumn = column;
                    if (nodeStartColumn === insertColumn) {
                        // Node STARTS AT insertion column.
                        // Node may be left alone, with inserted element placed before.
                        parent.insertBefore(insertEl, child);
                        return true;
                    } else if (nodeEndColumn > insertColumn) {
                        // Node CONTAINS insertion column.
                        // Node must be broken into two nodes, with inserted element placed between.
                        const sliceColumn = insertColumn - nodeStartColumn;
                        const firstText = child.textContent.slice(0, sliceColumn);
                        const secondText = child.textContent.slice(sliceColumn);
                        const firstNewNode = document.createTextNode(firstText);
                        const secondNewNode = document.createTextNode(secondText);
                        parent.insertBefore(firstNewNode, child);
                        parent.insertBefore(insertEl, child);
                        parent.insertBefore(secondNewNode, child);
                        parent.removeChild(child);
                        return true;
                    } else if (nodeEndColumn === insertColumn) {
                        // Node ENDS AT insertion column.
                        // Node may be left alone, with inserted element placed after.
                        if (child.nextSibling) {
                            parent.insertBefore(insertEl, child.nextSibling);
                        } else {
                            parent.appendChlid(insertEl);
                        }
                        return true;
                    } else {
                        // Node ENDS BEFORE insertion column.
                        // Carry on to the next element.
                        column = nodeEndColumn;
                    }
                } else if (child.nodeType === document.ELEMENT_NODE) {
                    if (insertElIntoElementOrContinue(child)) {
                        return true;
                    }
                }
            }
            return false;
        }
        if (!insertElIntoElementOrContinue(lineEl)) {
            // Couldn't find the column to insert the element at.
            // Either an error, or the insertion column is past the end of the line.
            // Assume the latter and append the element to the end of the line.
            lineEl.appendChild(insertEl);
        }
    }

    inputArea.onmouseover = () => overCodeArea = true;
    inputArea.onmouseout = () => overCodeArea = false;

    document.onmousemove = function(e){
        if (insertType === 'LINE') {
            tempLine.remove();
        } else if (insertType === 'SPAN') {
            tempSpan.remove();
        }

        mousePos = {
            x: e.pageX,
            y: e.pageY
        }

        let codeAreaRect = codeArea.getBoundingClientRect();
        let rectMatchX = mousePos.x > codeAreaRect.x && mousePos.x < codeAreaRect.width+codeAreaRect.x;
        let rectMatchY = mousePos.y > codeAreaRect.y-10 && mousePos.y < codeAreaRect.height+codeAreaRect.y;
        if (!(rectMatchX && rectMatchY)) {
            overCodeArea = false;
            return;
        }
        overCodeArea = true;

        targetLine = Math.round((itemTop - codeAreaRect.top + inputArea.scrollTop)/20);
        if (targetLine < 1) return;
        if (targetLine > codeArea.children.length + 1) return;

        const targetLineEl = codeArea.children[targetLine - 1];
        if (insertType === 'LINE') {
            if (targetLineEl) {
                codeArea.insertBefore(tempLine, targetLineEl);
            } else {
                codeArea.appendChild(tempLine);
            }
        } else if (insertType === 'SPAN') {
            if (targetLineEl) {
                // TODO: calculate good insertion points, choose the closest one to cursor
                targetColumn = 0;
                insertAtColumn(targetColumn, targetLineEl, tempSpan);
            }
        }
    }

    document.onmouseup = function(){
        clearInterval(interval);
        code.style.display = 'block';
        if (insertType === 'LINE') {
            tempLine.remove();
        } else if (insertType === 'SPAN') {
            tempSpan.remove();
        }
        item.style.transform = null;
        document.onmousemove = null;
        document.onmouseup = null;

        if (overCodeArea) {
            let codeSplitted = inputArea.value.split('\n');
            if (codeSplitted == '') {
                inputArea.value = content;
            } else if (insertType === 'LINE') {
                codeSplitted.splice(targetLine-1, 0, content);
            } else if (insertType === 'SPAN') {
                const original = codeSplitted[targetLine - 1];
                const beforeTarget = original.slice(0, targetColumn);
                const afterTarget = original.slice(targetColumn);
                codeSplitted[targetLine - 1] = beforeTarget + content + afterTarget;
            }
            inputArea.value = codeSplitted.join('\n');
        }
        highlight(inputArea.value);

        inputArea.onmouseover = null;
        inputArea.onmouseout = null;
    }
}
