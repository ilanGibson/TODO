import "./style.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import MainPage from "./mainPage.js";

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

MainPage();

