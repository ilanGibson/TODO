export default function MainPage() {
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
    

    wrap.appendChild(sidebar);
    wrap.appendChild(main);
    document.body.appendChild(wrap);
}
