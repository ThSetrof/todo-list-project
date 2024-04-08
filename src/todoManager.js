import {Task, Project, PRIORITY } from "./todo";

const todoManager = (function(){
    const projects = []
    let defaulProject 
    let activeProject

    function init(){
        defaulProject = new Project('Intro')
        activeProject = defaulProject

        projects.push(defaulProject)

        console.log('---- TODO MANAGER INITIATED ----')
    }

    function addProject(project){
        projects.push(project)

        console.log('---- PROJECT ADDED -----')
    }

    function getProjects(){
        console.log('---- RETURNING PROJECTS -----')
        return projects
    }


    init()

    return {
        addProject,
        getProjects
    }

})()

export {todoManager}