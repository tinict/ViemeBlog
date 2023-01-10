import { Header } from "./layout/Header.js";
import { Content } from "./layout/Content.js";
import { html } from "./core.js"

const main = () => {
    return html`
        <div class="container">
            ${Header()}
            ${Content()}
        </div>
    `
}

const rootElement = document.getElementById('root');
rootElement.innerHTML = main();
