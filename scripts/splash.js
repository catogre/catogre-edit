const splash = document.querySelector('#splash');
const splashText = document.querySelector('#splashText');

let texts = [
    "Ordering ogres by size ...",
    "Loading code ...",
    "Filming the stage ...",
    "Preparing editor ...",
    "Inflating cats ...",
    "Herding cats... and ogres ..."
];

splashText.innerText = texts[Math.round(Math.random()*(texts.length - 1))];

function hideSplash(){
    splash.classList.add('hid');
    setTimeout(() => {
        splash.style.display = 'none';
    }, 500);
}