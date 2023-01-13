'use strict';
import { html } from '../../core.js';

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
/*
    5k -> 50k -> 20
    50k -> 100k -> 4
    100k -> 150k -> 2
    150k -> 200k -> 1
*/
var Slot_1 = [], Slot_2 = [], Slot_3 = [], Slot_4 = [];
function Input () {
    for (var i = 0; i < 15; i++)
        Slot_1.push('A');
    for (var i = 0; i < 3; i++)
        Slot_2.push('B')
    for (var i = 0; i < 2; i++)
        Slot_3.push('c')
    Slot_4.push('D')
    var Slot = [];
    Slot = Slot_1.concat(Slot_2, Slot_3, Slot_4);
    Slot = Slot.sort(() => Math.random() - 0.5)
    var index = Math.floor(Math.random() * (20 + 1)) + 0;
    return Slot[index];
}

function Campuchia (num) {
    if (num % 2 == 0)
        return num / 2;
    else 
        return num;
}

function RandomMoney (Type) {
    if (Type === 'A')
        return Campuchia(Math.floor(Math.random() * (50000 + 1)) + 5000);
    else if (Type === 'B')
        return Campuchia(Math.floor(Math.random() * (100000 + 1)) + 50000);
    else if (Type === 'C')
        return Campuchia(Math.floor(Math.random() * (150000 + 1)) + 100000);
    else
        return Math.floor(Math.random() * (200000 + 1)) + 100000;
}

export const Money = () => {
   return RandomMoney(Input());
}

export function templateOpenLixi () {
    return html`
        <div class='lixi__open'>
            <div class='lixi__open__container'>
                <div class='money'>
                    <h3>Lì xì may mắn</h3>
                    <span>${Money()}đ</span>
                    <h3>Chúc mừng năm mới</h3>
                </div>
                <div class='letter__lixi'>

                </div>
            </div>
        </div>
    `
}



