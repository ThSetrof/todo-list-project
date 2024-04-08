import { Project, Task } from "../todo"
import { random } from "./uilts"
import { todoManager } from "../todoManager"


const uiController = (function(){

    const addTaskBtn = document.getElementById('addTask')
    const addProjectBtn = document.getElementById('addProject')
    const inbox = document.getElementById('inbox')
    const projectContainer = document.getElementById('projectContainer')
    const projectTemplate = document.querySelector('.project')

    function addUIEvent(target, event, func){
        target.addEventListener(event, func)
    }

    return {
        addTaskBtn,
        addProjectBtn,
    }
})()

export default uiController