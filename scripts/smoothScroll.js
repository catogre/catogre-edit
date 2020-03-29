function scrollToY(elem, targetY, factor){
    let anim = setInterval(() => {
        elem.scrollTop += (targetY - elem.scrollTop)/factor;
    }, 10);

    setTimeout(() => {
        elem.scrollTop = targetY;
        clearInterval(anim);
    }, 500);
}