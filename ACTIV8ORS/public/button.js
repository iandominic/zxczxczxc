const section_createDrop = document.querySelector('#create');
const section_homeDrop = document.querySelector('#home');
const section_homeDrop_desc = document.querySelector('#description');

const btn_dropDown = document.querySelector('#btn');
const btn_goUp = document.querySelector('#btn_two');

btn_dropDown.onclick = function() {
    myFunction()
};

btn_goUp.onclick = function() {
    myFunction_two()
};

function myFunction() {
    btn_dropDown.classList.add("hidden");
    btn_goUp.classList.remove("hidden");

    section_createDrop.classList.remove("hidden");
}

function myFunction_two() {
    btn_dropDown.classList.remove("hidden");
    setTimeout(timer, 500);
}

function timer() {
    btn_goUp.classList.add("hidden");
    section_createDrop.classList.add("hidden");
}


