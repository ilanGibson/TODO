export default function StoreProject(project) {
    let project_serialized = JSON.stringify(project);
    if (localStorage.getItem(`${project.name}`) === null) {
        localStorage.setItem(`${project.name}`, project_serialized);
    }
    else {
        console.log("Project already exists");
    }
}