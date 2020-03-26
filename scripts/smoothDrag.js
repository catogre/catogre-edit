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