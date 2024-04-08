import { Project, Task , createTask} from "./todo"
import uiController from "./modules/uiController"
import { todoManager } from "./todoManager"
import './styles/style.css'
import './images/to-do-list.png'
import '/src/fav-icon.png'
import './images/add.png'
import './images/inbox.png'
import './fonts/Bungee-Regular.ttf'
import './images/add-blue.png'


let p1 = new Project('Hello')

todoManager.addProject(p1)


console.log(todoManager.getProjects())