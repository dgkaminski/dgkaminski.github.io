function renderSiteChrome() {
    const header = document.querySelector('[data-site-header]');
    const footer = document.querySelector('[data-site-footer]');

    if (!header || !footer) {
        return;
    }

    const basePath = header.dataset.basePath || './';
    const projectPath = `${basePath}projects/`;

    header.innerHTML = `
        <header>
            <a href="${basePath}index.html" class="home-button" title="Go to home">⌂</a>
            <div class="header-box">
                <h1><a href="${basePath}index.html" style="text-decoration: none; color: inherit;">Daniel Kaminski</a></h1>
                <p>Student at Cornell University | Electrical and Computer Engineering 27'</p>
                <p>Analog/Mixed-Signal/RF IC Designer</p>
            </div>
        </header>

        <nav class="navbar">
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="nav-menu">
                <ul>
                    <li><a href="${basePath}index.html">Home</a></li>
                    <li><a href="${basePath}index.html#about">About</a></li>
                    <li class="has-submenu">
                        <a href="${basePath}index.html#projects">Projects <span class="arrow">▼</span></a>
                        <ul class="submenu">
                            <li><a href="${projectPath}adiabatic.html">Adiabatic ADC</a></li>
                            <li><a href="${projectPath}sar-adc.html">SAR ADC</a></li>
                            <li><a href="${projectPath}serdes.html">SERDES</a></li>
                            <li><a href="${projectPath}flash.html">Flash ADC</a></li>
                        </ul>
                    </li>
                    <li><a href="${basePath}index.html#contact">Contact</a></li>
                </ul>
            </div>
        </nav>

    `;

    footer.innerHTML = '<footer><p>&copy; 2026 Daniel Kaminski. All rights reserved.</p></footer>';
}

renderSiteChrome();
