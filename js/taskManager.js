// Create a TaskManager class
class TaskManager {
    // Set up the tasks and currentId property in the contructor
    constructor(currentId = 0) {
        this.tasks = []
        this.currentId = currentId
    }
    // Create the addTask method
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: "TODO"
        }
        // Push the task to the tasks property
        this.tasks.push(task)
    }
    render() {
        let taskHtmlList = [];
        let taskHtml = ''
        let tasksHtml = ''
        for (let i = 0; i < this.tasks.length; i++) {
            let item = this.tasks[i]
            const dueDate = new Date(item.dueDate)
            // let formattedDate = dueDate.toISOString().substring(0,10)
            taskHtml = createTaskHtml(item.name, item.description, item.assignedTo, item.dueDate, item.status)
            taskHtmlList.push(taskHtml)
            tasksHtml = tasksHtml + (taskHtml + "\n")          
        }
        document.querySelector('#tasksList').innerHTML = tasksHtml
        console.log(tasksHtml)
    }

}

const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
    </li>
`
    return html
}
const task1 = createTaskHtml("Nick", "test data", "Nick", "13/03/2021", "TODO")
const task2 = createTaskHtml("susanti", "test data", "susanti", "13/03/2023", "TODO")
//console.log(task1)
// console.log(task2)



