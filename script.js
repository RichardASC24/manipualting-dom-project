// Get references to the buttons and divs
let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");

// Create an array of text choices
let textArray = ['Great', 'Awesome', 'Happy', 'Fantastic'];
// Create an array of image choices
let imageArray = ['bulbasaur.png', 'charmander.png', 'piano-icon.png', 'workout-icon.png'];

// Function to add a new paragraph 
function addParagraph(){
     // Show p-div and hide img-div
     pDiv.style.display = 'block';
     imgDiv.style.display = 'none';

     // Create a new paragraph 
     let newP = document.createElement('p');
     // Random choice of text content
     textContent = textArray[Math.floor(Math.random() * textArray.length)];
     // Sets the text content of the new paragraph to the randomly selected string
     newP.textContent = textContent;
     // Add new paragraph to div
     pDiv.appendChild(newP);
}

// Function to add a new image
function addImage(){
    // Show img-div and hide p-div
    imgDiv.style.display = 'block';
    pDiv.style.display = 'none';

    // Create a new image
    let newImg = document.createElement('img');
    // Random choice of img content
    imgContent = "images/" + imageArray[Math.floor(Math.random() * imageArray.length)];
    // Sets the src attribute of the new image to the randomly selected string.
    newImg.src = imgContent;
    // Add new image to img-div
    imgDiv.appendChild(newImg);
}

// Event listeners for the buttons
pButton.addEventListener('click', addParagraph);
imgButton.addEventListener('click', addImage);
