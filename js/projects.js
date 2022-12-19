const projects = [
    {
        name: 'chip8',
        user: 'elmarsan',
        tags: ['emulator', 'low-level'],
        year: 2022,
    },
    {
        name: 'GaltWallet',
        user: 'elmarsan',
        tags: ['bitcoin', 'wallet', 'bdk'],
        year: 2022,
    }
];

const container = document.getElementById('projects');

projects.forEach(project => {
    const projectCard = container.appendChild(document.createElement('div'));
    projectCard.className = 'project-card';

    const theme = 'react';
    const img = `https://github-readme-stats.vercel.app/api/pin/?username=${project.user}&repo=${project.name}&theme=${theme}`;

    projectCard.innerHTML = `<img src='${img}'/>`;
})