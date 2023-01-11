"use strict";
import { html } from '../core.js'

export const Content__Left = () => {
    return html`
        <div class='content__left'>
            <div class='left__container'>
                ${Button__AddBlog()}
                <a href='#' class='item'>
                    <i class="fa-solid fa-house"></i>
                    <span class='name__item'>Trang chủ</span>
                </a>
                <a href='#' class='item'>
                    <i class="fa-solid fa-folder"></i>
                    <span class='name__item'>Bài đăng</span>
                </a>
                <a href='#' class='item'>
                    <i class="fa-solid fa-globe"></i>
                    <span class='name__item'>Khám phá</span>
                </a>
                <a href='#' class='item'>
                    <i class="fa-solid fa-bookmark"></i>
                    <span class='name__item'>Danh sách đọc</span>
                </a>
                <a href='#' class='item'>
                    <i class="fa-solid fa-diagram-project"></i>
                    <span class='name__item'>Chủ đề</span>
                </a>
                <a href='#' class='item'>
                    <i class="fa-solid fa-comment"></i>
                    <span class='name__item'>Nhận xét</span>
                </a>
                <a href='#' class='item'>
                    <i class="fa-solid fa-star"></i>
                    <span class='name__item'>Yêu thích</span>
                </a>
                <a href='#' class='item'>
                    <i class="fa-solid fa-chart-simple"></i>
                    <span class='name__item'>Thống kê</span>
                </a>
                <a href='#' class='item'>
                    <i class="fa-solid fa-gear"></i>
                    <span class='name__item'>Cài đặt</span>
                </a>
            </div>
        </div>
    `
};

export const Button__AddBlog = () => {
    return html`
        <button type="button" class ='btn_AddBlog'>
            <i class="fa-solid fa-plus"></i>
            <span class='Add_Blog'>Bài đăng mới</span>
        </button>
    `
}; 

export const Content__Center = () => {
    return html`
        <div class='content__center'>
            <div class="container-posts">
                ${HTML_Post()}
            </div>
        </div>
    `
};

export const Post = (...values) => {
    return html`
    <div class="post">
        <div class="post__avatar">
            <img src="${values[0]}">
        </div>
        <div class="post__content">
            <div class="post__header">
                <div class="post__header__left">
                    <a href="#" class="post__name-user"><span class="name-user">@${values[1]}</span></a>
                    ${Button__Follow()}
                </div>
                <div class="post__header__right">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
            <div class="post__body">
                <div class="post__title">
                    <h3>${values[2]}</h3>
                </div>
                <div class="post__pragraph__sort">
                    <p>${values[3]}</p>
                </div>
                <div class="post__img">
                    <img src="${values[4]}">
                </div>
                <div class="post__description">
                    <div class="post__description__title">
                        <h3>${values[2]}</h3>
                    </div>
                    <div class='post__user'>
                        <div class="post__description__right">
                            <div class="post__description__avatar">
                                <img src="${values[0]}">
                            </div>
                        </div>
                        <div class="post__description__left">
                            <a href="#" class="post__name-user">
                                <span class="name-user">@${values[1]}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="post__footer">
                    <div class="post__footer__container">
                        <div class="post__footer__left">
                            <a href="#" class="post__comments">
                                <span class="post__count__comment">${values[5]}</span>
                                <i class="fa-solid fa-comment"></i>
                            </a>
                        </div>
                        <div class="post__footer__right">
                            <i class="fa-solid fa-share icon-post"></i>
                            <i class="fa-solid fa-retweet icon-post"></i>
                            <i class="fa-regular fa-heart icon-post"></i>
                        </div>
                    </div>
                </div>
                <div class='post__comment'>
                        <div class='post__comment__container'>
                            <span class='post__footer__title'>Bình luận</span>
                            <div class='post__comment__box'>
                                <div class='post__comment__avatar'>
                                    <img src="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png">
                                </div>
                                <button class='btn__comment'type='button'>Viết bình luận ...</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    `
};

export const HTML_Post = () => {
    const API = 'https://637f7a1e2f8f56e28e8d5901.mockapi.io/api/blog_v1/Blog';
    fetch(API)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            var Posts = data.map((post) => {
                return Post(post.Avatar, post.Username, post.Title, post.Body, post.Img, post.NumOfComment);
            });
            var html__post = Posts.join('');
            const ElementPost = document.querySelector('.container-posts');
            ElementPost.innerHTML = html__post;
        })
};

export const Button__Follow = () => {
    return html`
        <button type="button" class="btn__Follow">Theo dõi</button>
    `
}

export const Content__Right = () => {
    return html`
        <div class='content__right'>
            <div class='right__container'>
                <div class='content__trending-blogs box-trend'>
                    <div class='box-trend__header'>
                        <i class="fa-solid fa-arrow-trend-up icon__trend"></i>
                        <h3 class='trend__title'>Bloger thịnh hành</h3>
                    </div>
                    <div class='box-trend__ListBloger'>
                        <ul class='container__listtrend'>
                            <li class='item'>
                                <a href='#' class='item__link'>
                                    <div class='item__left'>
                                        <div class='container'>
                                            <div class='trend__avatar'>
                                                <img class='avatar' src="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png">
                                            </div>
                                            <div class='item__user'>
                                                <h3 class='trend__fullname'>Bamboo Alines</h3>
                                                <h3 class='trend__username'>Bamboo</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='item__right'>
                                        ${Button__Follow()}
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
};

export const Content = () => {
    return html`
        <div class="content">
            <div class="content__container">
                ${Content__Left()}
                ${Content__Center()}
                ${Content__Right()}
            </div>
        </div> 
    `
};

