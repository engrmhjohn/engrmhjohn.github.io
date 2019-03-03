var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/9.jpg') {
      myImage.setAttribute ('src','images/2.jpg');
    } else if(mySrc === 'images/2.jpg') {
      myImage.setAttribute ('src','images/3.jpg');
    }else{
        myImage.setAttribute ('src','images/9.jpg');
    }
}

var myButton = document.querySelector('.but');
var myHeading = document.querySelector('h5');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'My Name Is, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'My Name Is, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }



