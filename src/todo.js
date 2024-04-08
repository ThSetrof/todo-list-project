const PRIORITY = {
    NONE: 'none',
    HIGH: 'high',
    LOW: 'low',
    MEDIUM: 'med'
}

function createTask(title, description ='', dueDate, priority = PRIORITY.NONE, completed = false){
    let task =  {
        title, description, dueDate, completed
    }
    return task
}

class Task{
    #title
    #description
    #dueDate
    #priority
    #completed
    constructor(title, description ='', dueDate, priority){
        this.#title = title;
        this.#description = description
        this.#dueDate = dueDate
        this.#priority = priority
        this.#completed = false
    }

    set title(title){this.#title = title}
    get title(){ return this.#title}

    set description(description){this.#description = description}
    get description(){ return this.#description}

    set dueDate(date){this.#dueDate = date}
    get dueDate(){return this.#dueDate}

    set priority(priority){this.#priority = priority}
    get priority(){return this.#priority}

    get completed(){return this.#completed}
    set completed(flag){this.#completed = flag}

    toString(){
        return this
    }

}

class Project{
    #title
    #taskList

    constructor(title){
        this.#title = title
        this.#taskList = []
    }

    get taskList(){
        return this.#taskList
    }

    removeTask(index){
        this.#taskList.splice(index, 1)
    }

    addTask(task){
        this.#taskList.push(task)
    }

    get length() {
        return this.#taskList.length
    }
    set title(title){this.#title = title}
    get title(){return this.#title}
}


Object.freeze(PRIORITY)


export {PRIORITY, Task, Project}

