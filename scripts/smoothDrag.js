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

function setItemPaletteDraggable(item, easeFactor, rotFactor, eDown){
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
    let tempLine = document.createElement('div');
    tempLine.style.display = 'none';
    tempLine.classList.add('temp-line');
    codeArea.appendChild(tempLine);
    code.style.display = 'flex';

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

    inputArea.onmouseover = () => overCodeArea = true;
    inputArea.onmouseout = () => overCodeArea = false;

    document.onmousemove = function(e){
        mousePos = {
            x: e.pageX,
            y: e.pageY
        }
        targetLine = Math.round((itemTop - 60 + inputArea.scrollTop)/20);
        tempLine.style.order = (targetLine * 2) + 1;

        let codeAreaRect = codeArea.getBoundingClientRect();
        let rectMatchX = mousePos.x > codeAreaRect.x && mousePos.x < codeAreaRect.width+codeAreaRect.x;
        let rectMatchY = mousePos.y > codeAreaRect.y-10 && mousePos.y < codeAreaRect.height+codeAreaRect.y;

        if(rectMatchX && rectMatchY) overCodeArea = true;
        else overCodeArea = false;

        if(targetLine > codeArea.children.length) overCodeArea = false;

        tempLine.style.display = 'none';
        if(overCodeArea) tempLine.style.display = 'block';
    }

    document.onmouseup = function(){
        clearInterval(interval);
        code.style.display = 'block';
        codeArea.removeChild(tempLine);
        item.style.transform = null;
        document.onmousemove = null;
        document.onmouseup = null;

        let codeSplitted = inputArea.value.split('\n');
        if(overCodeArea){
            if(codeSplitted == '') inputArea.value = item.innerText;
            else{
                codeSplitted.splice(targetLine+1, 0, item.innerText);
                inputArea.value = codeSplitted.join('\n');
            }
        } 
        highlight(inputArea.value);

        inputArea.onmouseover = null;
        inputArea.onmouseout = null;
    }
}