// Select elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task function
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return alert('Please enter a task.');

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add toggle functionality
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent marking as completed
        li.remove();
    });

    // Append delete button to list item
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
}
