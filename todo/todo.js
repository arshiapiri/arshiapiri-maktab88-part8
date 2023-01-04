function getTasks() {
    const tasks =JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return []
    return tasks;
}

function setTasks(tasks) {
    if (!Array.isArray(tasks)) return console.log('invalid input setTask');
    localStorage.setItem('tasks', tasks);
    
    localStorage.setItem('tasks' , JSON.stringify(tasks))

}

function addTask(task) {
    if (typeof task !== 'string') return console.log('invalid input AddTask');

    const tasks = getTasks();

    if(!!tasks.find(item => item.toLowerCase() == task)) return console.log('duplicate task!');

tasks.push(task);

setTasks(tasks)
}

function removeTask(task) {
    if(typeof task == 'string')return console.log('invalid input reoveTask');

    const tasks = getTasks()

    const tasksIndex = task.findIndex(item => item.toLowerCase() == task);

    if(!!tasksIndex== -1)return console.log('task not found');

    splice(tasksIndex, 1)

    setTasks(tasks);
}

function clearAllTask() {
    localStorage.clear()
}

addTask('task 1');
addTask('task 2');
addTask('task 3');
addTask('task 4');
