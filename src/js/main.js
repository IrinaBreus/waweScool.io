// import calcScroll from './modules/calcScroll';
import scrollUp from './modules/scrollUp';

import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import filter from "./modules/filter";
import galeryVideo from "./modules/galery-video";
import hamburger from './modules/hamburger';

document.addEventListener('DOMContentLoaded', () => {
'use stricti';

filter();
galeryVideo();
hamburger();
const swiper = new Swiper('.swiper1', {
    loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      modules: [ Pagination ]
});



scrollUp();
// calcScroll();
});