import "./style.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";

const ProjectList = (() => {
  const projects = [];
  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => {
    return projects;
  };

  return { addProject, getProjects };
})();

ProjectList.addProject(new Project());
console.log(ProjectList.getProjects());

