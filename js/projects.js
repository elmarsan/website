const cardTheme = "react";

const projects = [
    {
        id: "chip8",
        name: "Chip8 Emulator",
        year: 2022,
        link: "./chip8.html",
        githubLink: "https://github.com/elmarsan/chip8",
        cardUrl: `https://github-readme-stats.vercel.app/api/pin/?username=elmarsan&repo=chip8&theme=${cardTheme}`,
        images: [
            "https://raw.githubusercontent.com/elmarsan/chip8/master/img/brix_screenshot.png",
            "https://raw.githubusercontent.com/elmarsan/chip8/master/img/pong_screenshot.png",
            "https://raw.githubusercontent.com/elmarsan/chip8/master/img/tetris_screenshot.png"
        ],
        detail: true,
    },
    {
        id: "galtwallet",
        name: "Android bitcoin wallet",
        year: 2022,
        link: "#",
        githubLink: "https://github.com/elmarsan/galtwallet",
        cardUrl: `https://github-readme-stats.vercel.app/api/pin/?username=elmarsan&repo=galtwallet&theme=${cardTheme}`,
        images: [],
        detail: false,
    }
];

function loadProject(id) {
    const loadHeader = () => {
        const header = document.getElementsByTagName("HEADER")[0];

        const projectCard = header.appendChild(document.createElement("div"));
        projectCard.className = "project-card";

        projectCard.innerHTML = `
        <h3 class="mb-1rem">${project.name} (${project.year})</h3>

        <a href="${project.githubLink}" target="_blank">
            <img src="${project.cardUrl}"/>
        </a>   
        `;
    }

    const loadGallery = () => {
        const galleryDiv = document.getElementById("gallery");

        const title = galleryDiv.appendChild(document.createElement("h3"));
        title.innerText = "Gallery"

        const galleryImgs = galleryDiv.appendChild(document.createElement("div"));
        galleryImgs.id = "gallery-imgs"

        project.images.forEach(img => {
            const imgHtmlElement = galleryImgs.appendChild(document.createElement("img"));
            imgHtmlElement.src = img;
            imgHtmlElement.className = "gallery-img";
        });
    }

    const project = projects.find(project => project.id === id);

    if (project) {
        loadHeader();
        loadGallery();
    }
}

function loadProjects() {
    const htmlElement = document.getElementById("projects");

    projects.forEach(project => {
        const projectCard = htmlElement.appendChild(document.createElement("div"));
        projectCard.className = "project-card";

        projectCard.innerHTML = `
            <h3>
                ${project.name} (${project.year})
                ${project.detail ? `<a href="${project.link}">more...</a>` : ''}
            </h3>
            <a href="${project.githubLink}" target="_blank">
                <img src="${project.cardUrl}"/>
            </a>
        `;
    });
}