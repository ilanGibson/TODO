import { Todo } from './todo';
import { Project } from './project';

export default function loadProject(projectName) {
    let myProject_deserialized = JSON.parse(localStorage.getItem(projectName));
    console.log(myProject_deserialized);
    if (myProject_deserialized) {
        Object.setPrototypeOf(myProject_deserialized, Project.prototype);
        myProject_deserialized.getTodos().forEach(todo => {
            Object.setPrototypeOf(todo, Todo.prototype);
        });
        return myProject_deserialized;
    }
    else {
        console.log("Project does not exist");
        return null;
    }
}

export function getProjectNames() {
    let projectNames = [];
    for (let i = 0; i < localStorage.length; i++) {
        projectNames.push(localStorage.key(i));
    }
    console.log(projectNames);
    return projectNames;
}

