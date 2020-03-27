const contextMenu = document.querySelector('#contextMenu');

let mousePos = {
    x: 0,
    y: 0
};

function showContextMenu(itemArray){
    contextMenu.innerHTML = '';
    itemArray.forEach(e => {
        let elem = document.createElement('div');
        elem.classList.add('menu-item');
        if(e.icon){
            elem.innerHTML = `<span class="iconify" data-icon="mdi:${e.icon}" data-inline="false"></span>${e.name}`;
        }else{
            elem.innerHTML = e.name;
        }
        if(e.function != null){
            elem.addEventListener('mousedown', () => {
                document.onmouseup = () => {
                    e.function();
                    document.onmouseup = null;
                }
            });
        }
        if(!e.checkDisabled()){
            elem.disabled = true;
            elem.classList.add('dis');
        }
        contextMenu.appendChild(elem);
    });
    contextMenu.style.top = `${mousePos.y}px`;
    contextMenu.style.left = `${mousePos.x}px`;
    contextMenu.classList.add('active');
}

function hideContextMenu(){
    contextMenu.innerHTML = '';
    contextMenu.classList.remove('active');
}

let inputContext = [
    {
        name: 'Copy',
        icon: 'content-copy',
        function: function(){
            inputArea.focus();
            document.execCommand("copy");
        },
        checkDisabled: function(){
            if(window.getSelection().type == 'Range') return true;
            else return false;
        }
    },
    {
        name: 'Cut',
        icon: 'content-cut',
        function: function(){
            inputArea.focus();
            document.execCommand("cut");
        },
        checkDisabled: function(){
            if(window.getSelection().type == 'Range') return true;
            else return false;
        }
    },
    {
        name: 'Paste',
        icon: 'content-paste',
        function: function(){
            inputArea.focus();
            alert('Pasting is not supported! Please use Ctrl + V');
        },
        checkDisabled: function(){
            return true;
        }
    },
    {
        name: 'Undo',
        icon: 'undo',
        function: function(){
            inputArea.focus();
            document.execCommand("undo");
        },
        checkDisabled: function(){
            return true;
        }
    },
    {
        name: 'Redo',
        icon: 'redo',
        function: function(){
            inputArea.focus();
            document.execCommand("redo");
        },
        checkDisabled: function(){
            return true;
        }
    },
];

let stageResizeContext = [
    {
        name: 'Reset Size',
        icon: 'arrow-top-left-bottom-right',
        function: function(){
            stageCanvas.style.margin = null;
            stageCanvas.style.transform = null;
        },
        checkDisabled: function(){
            if(stageCanvas.style.margin != '') return true;
            else return false;
        }
    },
];

let stageCanvasContext = [
    {
        name: 'Fullscreen',
        icon: 'fullscreen',
        checkDisabled: function(){
            return true;
        }
    },
    {
        name: 'Turbo Mode',
        icon: 'flag-variant',
        checkDisabled: function(){
            return true;
        }
    },
    {
        name: 'Save a Screenshot',
        icon: 'image',
        function: function(){
            let c = document.getElementById("stageCanvas");
            let a = document.createElement('a');
            let cFile = c.toDataURL("image/png");

            a.download = "stage.png";
            a.href = cFile.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
            a.click();
        },
        checkDisabled: function(){
            return true;
        }
    },
    {
        name: 'Copy a Screenshot',
        icon: 'image-multiple-outline',
        function: function(){
            let c = document.getElementById("stageCanvas");
            /*let a = document.createElement('a');
            let cFile = c.toDataURL("image/png");
            let blob = c.toBlob(function(blob){
                navigator.clipboard.writeText(new ClipboardItem({'image/png': blob}));
            }, {type: 'image/png'});*/

            c.toBlob(function(blob) { 
                let item = new ClipboardItem({ "image/png": blob });
                navigator.clipboard.write([item]); 
            });
        },
        checkDisabled: function(){
            return true;
        }
    },
]

document.querySelector('#input').oncontextmenu = (e) => {
    mousePos = {
        x: e.pageX,
        y: e.pageY,
    }
    showContextMenu(inputContext);
    return false;
}

document.querySelector('#stageResize').oncontextmenu = (e) => {
    mousePos = {
        x: e.pageX,
        y: e.pageY,
    }
    showContextMenu(stageResizeContext);
    return false;
}

document.querySelector('#stageCanvas').oncontextmenu = (e) => {
    mousePos = {
        x: e.pageX,
        y: e.pageY,
    }
    showContextMenu(stageCanvasContext);
    return false;
}

window.onmouseup = () => {
    hideContextMenu();
}