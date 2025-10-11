// Array of numbers
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function findNumber() {
    const input = document.getElementById("userInput").value.trim();
    const result = document.getElementById("result");

    // Check if textbox is empty
    if (input === "") {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return;
    }

    // Convert input to number for accurate comparison
    const num = Number(input);

    // Use the array method .includes() to check if number exists
    const found = numbers.includes(num);

    // Display the result
    if (found) {
        result.textContent = `The number ${num} is found in the list!`;
        result.style.color = "green";
    } else {
        result.textContent = `The number ${num} is not found in the list.`;
        result.style.color = "red";
    }
}
