// ---- Cambio de imagen al hacer click ------------------------
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/imagen1.png') {
      myImage.setAttribute ('src','images/imagen2.png');
    } else {
      myImage.setAttribute ('src','images/imagen1.png');
    }
}
// ---- Cambio de usuario al pulsar el botón --------------------
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Hola, dime tu nombre.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Bienvenido, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bienvenido, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }