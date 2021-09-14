const d = document;

const bimgss = d.querySelectorAll('.block_img_scroll__slide');
const sButtonsn = d.querySelector('.sButtons-next');
const sButtonsp = d.querySelector('.sButtons-previous');

let jcoun = 0;
let nextS;

function bimgssFunc() {
    for (let i = 0; i < bimgss.length; i++) {
        if (i !== 0) {
            bimgss[i].classList.add('hides');
        };
    };
    nextS = d.querySelectorAll('.block_img_scroll__slide');
};

bimgssFunc();

function nextSlide() {
    nextS[jcoun].classList.add('hides');
    if (jcoun + 1 < bimgss.length) {
        jcoun++;
    } else {
        jcoun = 0;
    };
    nextS[jcoun].classList.remove('hides');
};

sButtonsn.addEventListener('click', nextSlide)

function previousSlide() {
    nextS[jcoun].classList.add('hides');
    if (jcoun - 1 < bimgss.length) {
        jcoun--;
    };
    nextS[jcoun].classList.remove('hides');
};

sButtonsp.addEventListener('click', previousSlide)

const autoCheck = setInterval('checkPrevious()', 100);

function checkPrevious() {
    if (jcoun != 0) {
        sButtonsp.classList.add('showpr');
    } else {
        sButtonsp.classList.remove('showpr');
    };
};

checkPrevious();