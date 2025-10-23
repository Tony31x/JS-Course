const colorPicker = document.getElementById("colorPicker");
const paragraph = document.getElementById("textParagraph");
const infoBox = document.getElementById("infoBox");
const image = document.getElementById("imageElement");
const bgButton = document.getElementById("bgButton");

// Handle color picker changes
colorPicker.addEventListener("input", function() {
    const selectedColor = colorPicker.value;

    // Change paragraph color
    paragraph.style.color = selectedColor;
    paragraph.textContent = `The paragraph color is now ${selectedColor}.`;

    // Update the div text and background
    infoBox.textContent = `Color ${selectedColor} has been selected.`;
    infoBox.style.backgroundColor = selectedColor + "33"; // light transparent background

    // Replace the image based on selected color
    if (selectedColor === "#ff0000") {
        image.src = "image/gorilla2.jpg";
    } else if (selectedColor === "#00ff00ff") {
        image.src = "image/gorilla3.jpg";
    } else {
        image.src = "image/gorilla4.jpg";
    }
});

// Handle background color change
bgButton.addEventListener("click", function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    infoBox.textContent = `Background color changed to ${randomColor}.`;
});

// Generate random hex color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
