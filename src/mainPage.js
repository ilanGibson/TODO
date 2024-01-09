import { format, parseISO } from "date-fns";
import loadProject from "./loadProject.js";
import { getProjectNames } from "./loadProject.js";
import loadPriorityImage from "./loadPriorityImage.js";


export default function mainPage() {
    // Create the wrapper
    const wrap = document.createElement("div");
    wrap.classList.add("wrap");

    // Create the main content
    const main = document.createElement("main");
    main.classList.add("main");

    // Create the sidebar
    // Create the sidebar title
    const sidebar = document.createElement("aside");
    sidebar.classList.add("sidebar");
    const sidebarTitle = document.createElement("h2");
    sidebarTitle.classList.add("sidebar-title");
    sidebarTitle.textContent = "Projects";
    sidebar.appendChild(sidebarTitle);

    // Create the dropdown
    const filterLabel = document.createElement("label");
    filterLabel.textContent = "Filter Todos: ";
    const filterDropdown = document.createElement("select");
    let option1 = document.createElement("option");
    option1.value = "option1";
    option1.textContent = "HI";
    let option2 = document.createElement("option");
    option2.value = "option2";
    option2.textContent = "Option 2";
    filterDropdown.appendChild(option1);
    filterDropdown.appendChild(option2);

    // Append the label and dropdown to the sidebar
    // Load projects into the sidebar
    sidebar.appendChild(filterLabel);
    sidebar.appendChild(filterDropdown);
    loadProjects(sidebar);

    // Append the sidebar and main content to the wrapper
    // Append the wrapper to the body
    wrap.appendChild(sidebar);
    wrap.appendChild(main);
    document.body.appendChild(wrap);
}

// Load projects into the sidebar
function loadProjects(sidebar) {
    // load projects from local storage
    const projectNames = getProjectNames();

    // for each project create a div
    // add the project name as text content
    // add a click event listener to the div
    // when the div is clicked load the project page
    projectNames.forEach(projectName => {
        // const project = loadProject(projectName);
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("sidebar-project");
        projectDiv.classList.add(projectName.replace(/\s/g, ""));
        projectDiv.textContent = projectName;
        projectDiv.addEventListener("click", () => {
            clearMainContent();
            loadProjectPage(projectName);

        });
        sidebar.appendChild(projectDiv);
    });

}

function loadProjectPage(projectName) {


    let project = loadProject(projectName);

    // for each todo create a div
    project.getTodos().forEach(todo => {
        const mainTodo = document.createElement("div");
        mainTodo.classList.add("main-todo");

        // Create the checkbox and title container
        // This is so the checkbox and title can be on the same line
        let checkboxAndTitleContainer = document.createElement("div");
        checkboxAndTitleContainer.classList.add("checkbox-and-title-container");

        // Create the checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.checked = todo.completed;

        // Add a click event listener to the checkbox
        // When the checkbox is clicked toggle the todo completed status
        checkbox.addEventListener("click", () => {
            todo.toggleCompleted();
            console.log(todo);
        });

        // Create the todo title
        let todoTitle = document.createElement("span");
        todoTitle.textContent = todo.title;
        todoTitle.classList.add("todo-title");

        // Create the todo date and format it
        const dateString = todo.dueDate;
        const date = parseISO(dateString);
        const formattedDate = format(date, 'EEEE, MMMM d, yyyy');
        let todoDate = document.createElement("span");
        todoDate.textContent = `Due: ${formattedDate}`;
        todoDate.classList.add("todo-date");

        // Create the priority label and image container
        // This is so the priority label and image can be on the same line
        let priorityAndImageContainer = document.createElement("div");
        priorityAndImageContainer.classList.add("priority-and-image-container");

        const priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority: ";
        let priorityImage = document.createElement("img");
        priorityImage.src = loadPriorityImage(todo.priority);
        priorityImage.classList.add("priority-image");


        // Append the checkbox and todo title to the main todo div
        checkboxAndTitleContainer.appendChild(checkbox);
        checkboxAndTitleContainer.appendChild(todoTitle);
        mainTodo.appendChild(checkboxAndTitleContainer);
        mainTodo.appendChild(todoDate);
        priorityAndImageContainer.appendChild(priorityLabel);
        priorityAndImageContainer.appendChild(priorityImage);
        mainTodo.appendChild(priorityAndImageContainer);
        document.querySelector(".main").appendChild(mainTodo);
    });
}

function clearMainContent() {
    const mainTodos = document.querySelectorAll(".main-todo");
    mainTodos.forEach(div => {
        div.remove();
    });
}