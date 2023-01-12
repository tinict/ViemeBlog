import { Header } from "./layout/Header.js";
import { Content } from "./layout/Content.js";
import { html } from "./core.js"
import { Lixi } from "./Events/Event-HPNY__2023/Lixi.js";

/*
    ${Header()}
    ${Content()}
 */

const main = () => {
    return html`
        <div class="container">
            ${Header()}
            ${Content()}
            ${Lixi()}
        </div>
    `
}

const rootElement = document.getElementById('root');
rootElement.innerHTML = main();
