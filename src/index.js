import "./style.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import mainPage from "./mainPage.js";
import storeProject from "./storeProjects.js";
import loadProject from "./loadProject.js";
import { getProjectNames } from "./loadProject.js";


const project1 = new Project("Project 1");
const project2 = new Project("Project 2");
const project3 = new Project("Project 3");
const project4 = new Project("Project 4");
let todo1 = new Todo(
  "Spanish Homework",
  "Description 1",
  "2021-09-01",
  "4",
  false
);

let todo2 = new Todo(
  "Todo 2",
  "Description 2",
  "2021-09-02",
  "2",
  false
);

let todo3 = new Todo(
  "Todo 3",
  "Description 3",
  "2021-09-03",
  "4",
  true
);

project1.addTodo(todo1);
project1.addTodo(todo2);
project2.addTodo(todo3);


storeProject(project1);
storeProject(project2);
storeProject(project3);
storeProject(project4);


mainPage();