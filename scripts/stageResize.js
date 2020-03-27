const stage = document.querySelector('.stage');
const stageCanvas = document.querySelector('#stageCanvas');
const stageResize = document.querySelector('#stageResize');

stageResize.onmousedown = (eDown) => {
    let marginBefore = stageCanvas.style.margin;
    stageCanvas.style.margin = null;
    let xStart = stage.offsetLeft + stageResize.clientWidth/2;
    stageCanvas.style.margin = marginBefore;

    document.onmousemove = (e) => {
        let xDiff = Math.min(Math.max(xStart - e.pageX, -240), 120);

        stageCanvas.style.margin = `${(xDiff/12*9)/2}px ${xDiff/2}px`
        stageCanvas.style.transform = `scale(${1 + xDiff/480})`
    }

    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}