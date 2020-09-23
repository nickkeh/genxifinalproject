// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0)
taskManager.addTask("Nick", "test data", "Nick", "13/03/2021", "TODO")
taskManager.addTask("susanti", "test data", "susanti", "13/03/2023", "TODO")
taskManager.render()
// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm')
// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit',(event)=> {
// Prevent default action
event.preventDefault()
// Select the inputs
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const newTaskDescription = document.querySelector('#newTaskDescription');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskDueDate = document.querySelector('#newTaskDueDate');
    /*
        Validation code here
    */
    // Get the values of the inputs
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

    // Add the task to the task manager
    taskManager.addTask(name, description, assignedTo, dueDate);  
    // Render the tasks
    taskManager.render();
    // Clear the form
    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';
    
})
// Select the Tasks List
// Add an 'onclick' event listener to the Tasks List
    // Check if a "Mark As Done" button was clicked
        // Get the parent Task
        // Get the taskId of the parent Task.
        // Get the task from the TaskManager using the taskId
        // Update the task status to 'DONE'
        // Render the tasks
