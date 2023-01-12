'use strict';
import { teamplateLixi } from "./Lixi.js";

const ElementButtonLixi = document.querySelector('.btn__lixibox');
ElementButtonLixi.onclick = () => {
    console.log('Test nut nhan lixi');
    const ElemmentRoot  = document.getElementById('root');
    ElemmentRoot.innerHTML = teamplateLixi();
}
console.log(ElementButtonLixi);