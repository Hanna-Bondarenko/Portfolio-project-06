import{A as p,S as l,a as m,i as v}from"./assets/vendor-BG4KJ3XV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const b=new p(".accordion-container",{duration:400,showMultiple:!1,onOpen:function(e){console.log(e)}});b.open(0);var h=new l(".mySwiperAbout",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:2},1280:{slidesPerView:6}}});const y=document.getElementById("custom-next-btn");y.addEventListener("click",()=>{h.slidePrev(),svgIcon.style.setProperty("--color1","#3b3b3b")});new l(".projects-swiper-container",{direction:"horizontal",autoHeight:!0,speed:1e3,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,allowTouchMove:!0,simulateTouch:!0,navigation:{nextEl:".custom-projects-prev",prevEl:".custom-projects-next",disabledClass:"swiper-button-disabled"},grabCursor:!0});document.querySelector(".accordion-wrapper");new p(".accordion-list",{openOnInit:[],showMultiple:!1,duration:1e3,easing:"ease-in-out",triggerClass:"accordion-toggle-btn",panelClass:"accordion-item-content",elementClass:"accordion-list-item"});const d=document.querySelectorAll(".accordion-toggle-btn");d.forEach(e=>{e.addEventListener("click",()=>{console.log("Button clicked"),d.forEach(t=>{t!==e&&t.classList.remove("rotate")}),e.classList.toggle("rotate")})});const L=document.querySelectorAll(".animations"),u=document.querySelector(".content");function w(){const e=window.innerHeight;L.forEach(t=>{const s=u.getBoundingClientRect().top,i=u.getBoundingClientRect().bottom;s>=0&&s<=e||i>=0&&i<=e?window.innerWidth<1440&&t.classList.add("animations-mobile-tablet"):t.classList.remove("animations-mobile-tablet")})}window.addEventListener("scroll",w);window.addEventListener("resize",w);const f=document.querySelector(".reviews-list"),E=document.querySelector(".swiper-controll-buttons");m.defaults.baseURL="https://portfolio-js.b.goit.study";const S=()=>m.get("/api/reviews").then(e=>e.data);function B(e){return`
     <li class="reviews-list-item swiper-slide">
            <img src="${e.avatar_url}" alt="${e.author}" class="reviews-list-item-img" />
            <h3 class="reviews-list-item-author">${e.author}</h3>
            <p class="reviews-list-item-text">${e.review}</p>
     </li>
   `}const q=e=>{const t=e.map(B).join("");f.insertAdjacentHTML("beforeend",t)},C=async()=>{try{let e=await S();q(e)}catch(e){v.error({title:"Error",position:"topCenter",message:`Error fetching reviews: ${e}`}),f.insertAdjacentHTML("beforeend",'<p class="reviews-error-text">Not found</p>'),E.classList.add("is-hidden")}};new l(".reviews-swiper.swiper",{slidesPerView:1,spaceBetween:0,speed:700,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-button-next.button-next",prevEl:".swiper-button-prev.button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,mousewheel:{invert:!1}});C();function P(e){const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}const g=document.querySelector(".burger-menu"),r=document.querySelector(".mob-menu"),I=document.querySelector(".menu-close-btn"),V=document.querySelector(".menu-title"),k=document.querySelector(".nav-list");function x(){r.classList.add("is-open"),r.classList.remove("hidden")}function a(){r.classList.remove("is-open"),r.classList.add("hidden")}g.addEventListener("click",x);I.addEventListener("click",a);document.addEventListener("click",e=>{!r.contains(e.target)&&!g.contains(e.target)&&a()});V.addEventListener("click",()=>{k.classList.toggle("is-open")});document.querySelectorAll(".nav-list-item-mobile a").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const s=this.getAttribute("href").substring(1);P(s),a()})});
//# sourceMappingURL=index.js.map
