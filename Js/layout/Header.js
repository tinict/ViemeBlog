'use strict';
import { Search } from '../Components/Search.js';
import { Avatar } from '../components/Avatar.js';
import { html } from '../core.js';

export const Navbar__Left = () => {
    return html`
        <div class="navbar__left">
            <i class="fa-solid fa-bars navbar__left__menu"></i>
            <a href="#" class="navbar__left__logo logo">
                <h1 class="logo__title">ViemeBlog</h1>
            </a>
        </div> 
    `
}

export const Navbar__Center = () => {
    return html`
        <div class="navbar__center">
            ${Search()}
        </div> 
    `
}

export const Navbar__Right = () => {
    return html`
        <div class="navbar__right">
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-grip"></i>
            ${Avatar()}
        </div> 
    `
}

export const Header = () => {
    return html`
        <div class='navbar'>
            <div class="navbar__container">
                ${Navbar__Left()}
                ${Navbar__Center()}
                ${Navbar__Right()}
            </div> 
        </div>
    `
}

