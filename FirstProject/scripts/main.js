
//querySelector() -> grab the reference of the heading, and store it in a variable called myHeading.
//You set the value of the myHeading variable textContent property (Which represents the content of the heading)
//to Hello World

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

/*
* Function with no name, is called an anonymous function
* You retrieve the value of the image's src attribute.
* You use a conditional to check whether the src value is equal to the path to the original image.
* If its, you change the src value to the path to the 2nd image, forcing the other image to be loaded inside <img>
element
* */



let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/google-com.png'){
        myImage.setAttribute('src','images/elefant-logo.png');
    }else{

        myImage.setAttribute('src','images/google-com.png');
    }
}


let myButton = document.querySelector('button');
let my2nHeading = document.querySelector('h1');

/**
 * The function prompt() function, brings up a dialog box, asks the user to enter some data, storing it in a variable,
 * after the user presses ok.
 * We call on an API called localStorage, which allows us to store data in the browser and later retrieve it.
 * We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName
 * variable which contains the data the user entered.
 * We set the textContent of the heading to a string, plus the user´s newly stored name.
 *
 * If myName has no value, or myName == null, run setUserName() again from the start.
 */



function setUserName() {
     let myName = prompt("Please enter your name");
     if(!myName || myName == null){
         setUserName();
     }

     localStorage.setItem('name', myName);
     my2nHeading.textContent = 'The User Name is ' +myName;
}

 if( !(localStorage.getItem('name'))){
           setUserName();
 }else{
     let storedName = localStorage.getItem('name');
     my2nHeading.textContent = 'The User Name is ' +storedName;
 }

 myButton.onclick = function () {
        setUserName();
 }


