const palette = document.querySelector('#palette');
const paletteResize = document.querySelector('#paletteResize');
const paletteContent = document.querySelector('#paletteContent');
const paletteCategories = document.querySelector('#paletteCategories');

paletteResize.onmousedown = (eDown) => {
    let clientWidthDefore = palette.clientWidth;
    let xStart = clientWidthDefore - paletteResize.clientWidth/2;
    document.onmousemove = (e) => {
        let xDiff = xStart - e.pageX;

        palette.style.width = `${Math.min(Math.max(clientWidthDefore - xDiff, 200), 500)}px`;
    }

    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

