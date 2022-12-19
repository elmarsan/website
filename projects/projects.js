const cardTheme = "react";

const projects = [
    {
        id: "chip8",
        name: "Chip8 Emulator",
        tags: ["emulator", "low-level"],
        year: 2022,
        link: "./chip8.html",
        githubLink: "https://github.com/elmarsan/chip8",
        cardUrl: `https://github-readme-stats.vercel.app/api/pin/?username=elmarsan&repo=chip8&theme=${cardTheme}`,
        images: [
            "https://raw.githubusercontent.com/elmarsan/chip8/master/img/brix_screenshot.png",
            "https://raw.githubusercontent.com/elmarsan/chip8/master/img/pong_screenshot.png",
            "https://raw.githubusercontent.com/elmarsan/chip8/master/img/tetris_screenshot.png"
        ]
    },
    {
        id: "galtwallet",
        name: "Android bitcoin wallet",
        tags: ["bitcoin", "wallet", "bdk"],
        year: 2022,
        link: "#",
        githubLink: "https://github.com/elmarsan/chip8",
        cardUrl: `https://github-readme-stats.vercel.app/api/pin/?username=elmarsan&repo=galtwallet&theme=${cardTheme}`,
        images: []
    }
];

function loadProject(id) {
    const project = projects.find(project => project.id === id);

    if (project) {
        const htmlElement = document.getElementById('project');

        htmlElement.innerHTML = `
        <a href="${project.githubLink}" target="_blank" class="fa fa-github">
            <h3>${project.name}</h3>
        </a>    
        <img src="${project.cardUrl}"/>`;

        const galleryDiv = document.getElementById('gallery');

        project.images.forEach(img => {
            const imgHtmlElement = galleryDiv.appendChild(document.createElement("img"));
            imgHtmlElement.src = img;
        })

    }
}

function loadProjects() {
    const htmlElement = document.getElementById("projects");

    projects.forEach(project => {
        const projectCard = htmlElement.appendChild(document.createElement("div"));
        projectCard.className = "project-card";

        projectCard.innerHTML = `
            <h4>
                <a href="${project.link}">${project.name}</a>
            </h4>
            <img src="${project.cardUrl}"/>`;
    });
}