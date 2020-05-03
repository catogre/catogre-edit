let projName = document.getElementById('projName');

function updatePageTitle(name){
    document.head.getElementsByTagName('title')[0].innerText = `${name} - CatOgre Editor`
}

projName.onchange = () => {
    updatePageTitle(projName.value)
}