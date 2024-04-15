const color = document.getElementById("color-box");
const changeColor = document.getElementById("btn-change-color");
const copyColor = document.getElementById("copy-color");
const hexCode = document.getElementById("hexcode");
const tooltip = document.getElementById("tooltip");


function getRandomColor() { // Function to generate random color

    let digits = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]; // Stock possibility hexcode in digits
    let randomColor = "#"; // Hashtag for hexcode format

    for (let index = 0; index < 6; index++) {
        
        randomColor += digits[Math.floor(Math.random() * 16)] ; // Create a random color

        color.style.backgroundColor = randomColor; // Change background color
        hexCode.innerText = randomColor; // Display hexcode
    };
    
};


changeColor.onclick = function () { // Call getRandomColor function on click
    getRandomColor()

};

copyColor.onclick = function () { // Call function on click to copy to clipboard color
    copyToClipboard();
};


function copyToClipboard() { // Function to copy color to clipboard

    let range = document.createRange(); // Create a range object

    range.selectNode(hexCode); // Select the contents of the element

    window.getSelection().addRange(range); // Add the range to the user's selection

    document.execCommand("copy"); // Copy the selected text to the clipboard

    alert("✔ Color copied !"); // Message box alert when color is copied
  
};