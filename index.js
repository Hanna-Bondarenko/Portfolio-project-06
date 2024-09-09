import{A as p,S as n,a as c,i as w}from"./assets/vendor-BG4KJ3XV.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const m=new p(".accordion-container",{duration:400,showMultiple:!1,onOpen:function(e){console.log(e)}});m.open(0);var f=new n(".mySwiper",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:2},1280:{slidesPerView:6}}});const b=document.getElementById("custom-next-btn");b.addEventListener("click",()=>{f.slidePrev(),svgIcon.style.setProperty("--color1","#3b3b3b")});new n(".projects-swiper-container",{direction:"horizontal",autoHeight:!0,speed:1e3,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,allowTouchMove:!0,simulateTouch:!0,navigation:{nextEl:".custom-next",prevEl:".custom-prev",disabledClass:"swiper-button-disabled"},grabCursor:!0});const v=document.querySelectorAll(".animations"),a=document.querySelector(".content");function u(){const e=window.innerHeight;v.forEach(i=>{const o=a.getBoundingClientRect().top,s=a.getBoundingClientRect().bottom;o>=0&&o<=e||s>=0&&s<=e?window.innerWidth<1440&&i.classList.add("animations-mobile-tablet"):i.classList.remove("animations-mobile-tablet")})}window.addEventListener("scroll",u);window.addEventListener("resize",u);const d=document.querySelector(".reviews-list"),g=document.querySelector(".swiper-controll-buttons");c.defaults.baseURL="https://portfolio-js.b.goit.study";const h=()=>c.get("/api/reviews").then(e=>e.data);function y(e){return`
     <li class="reviews-list-item swiper-slide">
            <img src="${e.avatar_url}" alt="${e.author}" class="reviews-list-item-img" />
            <h3 class="reviews-list-item-author">${e.author}</h3>
            <p class="reviews-list-item-text">${e.review}</p>
     </li>
   `}const E=e=>{const i=e.map(y).join("");d.insertAdjacentHTML("beforeend",i)},L=async()=>{try{let e=await h();E(e);const i=new n(".swiper",{slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,mousewheel:{invert:!1}})}catch(e){w.error({title:"Error",position:"topCenter",message:`Error fetching reviews: ${e}`}),d.insertAdjacentHTML("beforeend",'<p class="reviews-error-text">Not found</p>'),g.classList.add("is-hidden")}};new n(".reviews-swiper.swiper",{slidesPerView:1,spaceBetween:0,speed:700,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,mousewheel:{invert:!1}});L();
//# sourceMappingURL=index.js.map
