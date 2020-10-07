let myFullName = "Bill Farmer"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
const myHeading = document.querySelector('.header');
myHeading.textContent = "Audrey's Lab 4";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
const div = document.querySelector('.content');
const st = document.createElement('p');
const nd = document.createElement('p');

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
const name = 'Audrey Tsang';
const len = (name.length-1);
const fpara = document.createTextNode('My name has ' +len+ ' characters.')
st.appendChild(fpara);
div.appendChild(st);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
const letter = name.charAT(2);
const spara = document.createTextNode('1=This is letter');
nd.appendChild(spara);
div.appendChild(nd);


// 6 Add a new line to your second paragraph

// 7 Return the final three characters of your last name to that new line

// 8 Substring your first and last name into two separate variables

// 9 Add the total length of your first and last names together

// 10 Display that total next to your name in your header
