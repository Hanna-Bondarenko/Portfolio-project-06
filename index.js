import{A as b,S as v,N as B,K as M,M as I,a as w,i as L}from"./assets/vendor-beOIYwDd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const x=new b(".accordion-container",{duration:400,showMultiple:!1,onOpen:function(e){}});x.open(0);var P=new v(".mySwiperAbout",{loop:!0,slidesPerGroup:1,setWrapperSize:!0,modules:[B,M,I],simulateTouch:!0,grabCursor:!0,slideActiveClass:"about_active",keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:10},375:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:35},1440:{slidesPerView:6,spaceBetween:10}}});const T=document.getElementById("custom-next-btn");T.addEventListener("click",()=>{P.slidePrev()});new v(".projects-swiper-container",{direction:"horizontal",autoHeight:!0,speed:1e3,spaceBetween:48,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,allowTouchMove:!0,simulateTouch:!0,navigation:{nextEl:".custom-projects-next",prevEl:".custom-projects-prev",disabledClass:"swiper-button-disabled"},grabCursor:!0});let m=document.getElementById("scrollToHeader");window.onscroll=function(){A()};function A(){document.body.scrollTop>700||document.documentElement.scrollTop>700?m.style.display="block":m.style.display="none"}m.addEventListener("click",function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});document.querySelector(".accordion-wrapper");new b(".accordion-list",{openOnInit:[],showMultiple:!1,duration:1e3,easing:"ease-in-out",triggerClass:"accordion-toggle-btn",panelClass:"accordion-item-content",elementClass:"accordion-list-item"});const f=document.querySelectorAll(".accordion-toggle-btn");f.forEach(e=>{e.addEventListener("click",()=>{console.log("Button clicked"),f.forEach(o=>{o!==e&&o.classList.remove("rotate")}),e.classList.toggle("rotate")})});const V=document.querySelectorAll(".animations"),y=document.querySelector(".content");function h(){if(!y)return;const e=window.innerHeight,{top:o,bottom:c}=y.getBoundingClientRect();V.forEach(r=>{o>=0&&o<=e||c>=0&&c<=e?window.innerWidth<1440&&r.classList.add("animations-mobile-tablet"):r.classList.remove("animations-mobile-tablet")})}window.addEventListener("scroll",h);window.addEventListener("resize",h);const E=document.querySelector(".reviews-list"),j=document.querySelector(".swiper-controll-buttons");w.defaults.baseURL="https://portfolio-js.b.goit.study";const O=()=>w.get("/api/reviews").then(e=>e.data);function z(e){return`
     <li class="reviews-list-item swiper-slide">
            <img src="${e.avatar_url}" alt="${e.author}" class="reviews-list-item-img" />
            <h3 class="reviews-list-item-author">${e.author}</h3>
            <p class="reviews-list-item-text">${e.review}</p>
     </li>
   `}const H=e=>{const o=e.map(z).join("");E.insertAdjacentHTML("beforeend",o)},N=async()=>{try{let e=await O();H(e)}catch(e){L.error({title:"Error",position:"topCenter",message:`Error fetching reviews: ${e}`}),E.insertAdjacentHTML("beforeend",'<p class="reviews-error-text">Not found</p>'),j.classList.add("is-hidden")}};new v(".reviews-swiper.swiper",{slidesPerView:1,spaceBetween:0,speed:700,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-button-next.button-next",prevEl:".swiper-button-prev.button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,mousewheel:{invert:!1}});N();const R=document.querySelector(".burger-menu"),a=document.querySelector(".mob-menu"),$=document.querySelector(".menu-close-btn"),K=document.querySelector(".menu-title"),W=document.querySelector(".nav-list"),Z=a.querySelectorAll("a");function _(){a.classList.add("is-open"),a.classList.remove("hidden"),document.body.classList.add("modal-open")}function S(){a.classList.remove("is-open"),a.classList.add("hidden"),document.body.classList.remove("modal-open")}R.addEventListener("click",_);$.addEventListener("click",S);Z.forEach(e=>{e.addEventListener("click",function(){S()})});K.addEventListener("click",()=>{W.classList.toggle("is-open")});const k=document.querySelector(".wt-form"),n=document.querySelector(".wt-email-input"),i=document.querySelector(".wt-comment-input"),p=document.querySelector(".wt-success-message"),g=document.querySelector(".wt-error-message"),d=document.querySelector(".backdrop-wt"),q=document.querySelector(".modal-wt"),C=document.querySelector(".modal-close-btn-wt");n.addEventListener("input",function(){const e=n.value.trim();F.test(e)?(n.classList.add("success"),n.classList.remove("error"),p.style.display="block",g.style.display="none"):(n.classList.add("error"),n.classList.remove("success"),p.style.display="none",g.style.display="block")});const F=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;i.addEventListener("blur",function(){i.value.length>30&&(i.value=i.value.substring(0,30)+"...")});i.addEventListener("input",function(){localStorage.setItem("comments",i.value)});n.addEventListener("input",function(){localStorage.setItem("email",n.value)});document.addEventListener("DOMContentLoaded",function(){const e=localStorage.getItem("comments"),o=localStorage.getItem("email");e&&(i.value=e),o&&(n.value=o)});function G(){document.body.classList.add("no-scroll"),d.classList.add("is-open"),q.classList.add("is-visible"),C.addEventListener("click",l),d.addEventListener("click",function(e){e.target===d&&l()}),document.addEventListener("keydown",function(e){e.key==="Escape"&&l()}),k.reset()}function l(){document.body.classList.remove("no-scroll"),d.classList.remove("is-open"),q.classList.remove("is-visible"),C.removeEventListener("click",l),document.removeEventListener("keydown",function(e){e.key==="Escape"&&l()})}k.addEventListener("submit",async function(e){var r,t;e.preventDefault();const o=n.value.trim(),c=i.value;try{const s=await w.post("https://portfolio-js.b.goit.study/api/requests/",{email:o,comment:c},{headers:{"Content-Type":"application/json"}});n.classList.remove("success"),p.style.display="none",G(),localStorage.removeItem("email"),localStorage.removeItem("comments")}catch(s){L.error({position:"topRight",theme:"dark",messageColor:"white",backgroundColor:"#ef4040",message:"Error: "+(((t=(r=s.response)==null?void 0:r.data)==null?void 0:t.message)||"Something went wrong")})}});
//# sourceMappingURL=index.js.map
