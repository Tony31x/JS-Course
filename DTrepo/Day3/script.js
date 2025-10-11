function calculateAverage() {
    // Get values from input fields
    let project = parseFloat(document.getElementById("project").value) || 0;
    let quiz = parseFloat(document.getElementById("quiz").value) || 0;
    let midterm = parseFloat(document.getElementById("midterm").value) || 0;
    let finals = parseFloat(document.getElementById("finals").value) || 0;
    let activities = parseFloat(document.getElementById("activities").value) || 0;

    // Compute average
    let average = (project * 0.25) + 
                  (quiz * 0.15) + 
                  (midterm * 0.25) + 
                  (finals * 0.25) + 
                  (activities * 0.10);

    // Determine remarks
    let remarks = "";
    if (average >= 75) {
        remarks = "Passed";
    } else {
        remarks = "Failed";
    }

    // Display results
    document.getElementById("average").textContent = average.toFixed(2);
    document.getElementById("remarks").textContent = remarks;
}