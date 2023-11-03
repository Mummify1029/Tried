// script.js

// Define a function to change the text of the <p> element
function changeText() {
    var paragraph = document.querySelector('p');
    paragraph.innerHTML = 'This text was changed by JavaScript!';
}

// Call the changeText function when the page loads
window.onload = changeText;
