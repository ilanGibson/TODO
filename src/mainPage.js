import { getProjectNames } from "./loadProject.js";

export default function mainPage() {
    const wrap = document.createElement("div");
    wrap.classList.add("wrap");

    const main = document.createElement("main");
    main.classList.add("main");

    const sidebar = document.createElement("aside");
    sidebar.classList.add("sidebar");
    const sidebarTitle = document.createElement("h2");
    sidebarTitle.classList.add("sidebar-title");
    sidebarTitle.textContent = "Projects";
    sidebar.appendChild(sidebarTitle);
    loadProjects(sidebar);

    wrap.appendChild(sidebar);
    wrap.appendChild(main);
    document.body.appendChild(wrap);
}

function loadProjects(sidebar) {
    const projectNames = getProjectNames();
    console.log(projectNames);
    projectNames.forEach(projectName => {
        console.log(projectName);
        // const project = loadProject(projectName);
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("sidebar-project");
        projectDiv.classList.add(projectName.replace(/\s/g, ""));
        projectDiv.textContent = projectName;
        projectDiv.addEventListener("click", () => {
            // loadProjectPage(project);
        });
        sidebar.appendChild(projectDiv);
    });
}