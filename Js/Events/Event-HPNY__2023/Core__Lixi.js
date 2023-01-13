'use strict';
import { templateLixi, templateOpenLixi } from "./Lixi.js";

const ElementButtonLixi = document.querySelector('.btn__lixibox');

ElementButtonLixi.onclick = () => {
    const ElemmentRoot  = document.getElementById('root');
    ElemmentRoot.innerHTML = templateLixi();
    const ElementBoxLixi = document.querySelector('.lixi__container');
    OpenLixi (ElementBoxLixi, ElemmentRoot);
}

function OpenLixi (Element, Root) {
    Element.onclick = () => {
        Root.innerHTML = templateOpenLixi();
    }
}

