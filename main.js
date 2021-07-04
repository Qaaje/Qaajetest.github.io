/* This javascript program*/
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';
// let iceCream = 'Jam';
// if (iceCream === 'chocolate') {
//     console.log('WOW! I love Icecream')
// } else {
//     alert('Nah! I prefer icecream instead')
// };

// document.querySelector('html').onclick = function () {
//     alert('Ouch! Stop poking me')
// };
const myImage = document.querySelector('img');
//let magac = prompt('Magacaaga waa maxey: ')
myImage.onclick = function () {
    let myPic = myImage.getAttribute('src');
    if (myPic === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/somali-flag2.png');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
};
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Magacaa: ');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + ' Mozila is cool!';
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    myName = localStorage.getItem('name');
    myHeading.textContent = myName + ' Mozila is cool!';
}
let myButton = document.querySelector('button');
myButton.onclick = function () {
    setUserName();
}
