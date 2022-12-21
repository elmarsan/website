function loadFooter() {
    const body = document.getElementsByTagName("BODY")[0];
    const footer = body.appendChild(document.createElement("footer"));

    footer.innerHTML = `
    <footer>
        <div>© 2023 Elías Martínez</div>
        <div id="footer-icons">
            <a href="https://github.com/elmarsan" target="_blank" class="fa fa-github"></a>
            <a href="https://linkedin.com/in/elias-martinez-74b07617a" target="_blank" class="fa fa-linkedin"></a>
        </div>
    </footer>`;
}

function loadNav(tabs) {
    const ul = document.createElement("ul");
    tabs.forEach(tab => {
        const li = ul.appendChild(document.createElement("li"));
        const a = li.appendChild(document.createElement("a"));
        
        a.href = tab.url;
        a.text = tab.name;
        
        if (tab.blank) {
            a.target = "_blank";
        }
    });

    const body = document.getElementsByTagName("BODY")[0];
    const nav = body.appendChild(document.createElement("nav"));

    const title = nav.appendChild(document.createElement("h3"));
    title.innerText = "Elías Martínez";

    const div = nav.appendChild(document.createElement("div"));
    div.id = "nav-items";
    div.appendChild(ul);
}