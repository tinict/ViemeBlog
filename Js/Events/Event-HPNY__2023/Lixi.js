'use strict';
import { html } from '../../core.js'

export function Lixi () {
    return html`
        <div class='lixiBox'>
            <button class='btn__lixibox' type='button'>
                <img class='icon__lixi' src="img/lixi__root-removebg-preview.png">
            </button>
        </div>
    `
}

export function templateLixi () {
    return html`
        <div class='lixi__close'>
            <div class='lixi__container'>
                <img src="img/Screenshot 2023-01-13 053053.png">
            </div>
        </div>
    `
}

export function templateOpenLixi () {
    return html`
        <div class='lixi__open'>
            <div class='lixi__open__container'>
                <div class='money'>
                    <h3>Lì xì may mắn</h3>
                    <span>2.000.000đ</span>
                    <h3>Chúc mừng năm mới</h3>
                </div>
                <div class='letter__lixi'>

                </div>
            </div>
        </div>
    `
}


