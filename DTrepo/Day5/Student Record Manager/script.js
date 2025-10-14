const submitBtn = document.getElementById('submitBtn');
//Form table body
const studentTable = document.getElementById('studentTable').querySelector('tbody');
//ID counter
let count = 0;

submitBtn.addEventListener('click', () => {
    const fname = document.getElementById('fname').value.trim();
    const mname = document.getElementById('mname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    // Check if the textboxes are empty
    if (!fname || !lname || !phone || !address) {
        alert("Please fill in all required fields.");
        return;
    }
    // Incremenet ID counter
    count++;
    
    // Create a new row and append to the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${count}</td>
        <td>${fname}</td>
        <td>${mname}</td>
        <td>${lname}</td>
        <td>${phone}</td>
        <td>${address}</td>
    `;

    studentTable.appendChild(newRow);

    // Clear all textboxes
    document.getElementById('fname').value = '';
    document.getElementById('mname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
});