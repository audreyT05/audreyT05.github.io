let myFullName = "Audrey Tsang"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
const myHeading = document.querySelector('.header');
myHeading.textContent = myFullName + "'s Lab 4 ";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
let st = document.createElement('p');
st.className = 'content1'
let nd = document.createElement('p');
nd.className = 'content2'
let div = document.querySelector('.content').append(st, nd);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
let len = (myFullName.length-1);
let fpara = document.createTextNode('My name has ' +len+ ' characters.');
st.appendChild(fpara);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
let spara = document.createTextNode('The third character in my name is '+ myFullName.charAt(2).toUpperCase());
nd.appendChild(spara);

// 6 Add a new line to your second paragraph
nd.innerText +="\n";

// 7 Return the final three characters of your last name to that new line
let fletter = myFullName.substring(myFullName.length-3);
nd.innerText += fletter;

// 8 Substring your first and last name into two separate variables
let first = myFullName.substring(0,6);
let last = myFullName.substring(7,12);

// 9 Add the total length of your first and last names together
let total = first.length + last.length;

// 10 Display that total next to your name in your header
myHeading.innerText += ' The length of my name is ' +total+ '.';