var myImage = document.querySelector('img');

myImage.onclick = function() 
 {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/family.jpg') {
      myImage.setAttribute ('src','images/kids.jpg');
    } else {
      myImage.setAttribute ('src','family.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'JavaScript is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'JavaScript is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}