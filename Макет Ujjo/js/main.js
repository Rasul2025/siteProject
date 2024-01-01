const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});


























// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("burger").addEventListener("click", function() {
//         document.querySelector(".header").classList.toggle("open")
//     })
// })





// const swiper = new Swiper('.swiper', {
//     loop: true,
//     slidesPerView: 2,
//     spaceBetween: 20,
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-right',
//         prevEl: '.swiper-button-left',
//     },

// });

// let map;

// async function initMap() {
//     //@ts-ignore
//     const { Map } = await google.maps.importLibrary("maps");

//     map = new Map(document.getElementById("map"), {
//         center: { lat: 37.23282315384063, lng: - 8.630298537605972 },
//         zoom: 13,
//         styles: [
//             {
//                 "featureType": "administrative",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "saturation": "-100"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "administrative.province",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "visibility": "off"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "landscape",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "saturation": -100
//                     },
//                     {
//                         "lightness": 65
//                     },
//                     {
//                         "visibility": "on"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "poi",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "saturation": -100
//                     },
//                     {
//                         "lightness": "50"
//                     },
//                     {
//                         "visibility": "simplified"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "saturation": "-100"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.highway",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "visibility": "simplified"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.arterial",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "lightness": "30"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.local",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "lightness": "40"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "transit",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "saturation": -100
//                     },
//                     {
//                         "visibility": "simplified"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "water",
//                 "elementType": "geometry",
//                 "stylers": [
//                     {
//                         "hue": "#ffff00"
//                     },
//                     {
//                         "lightness": -25
//                     },
//                     {
//                         "saturation": -97
//                     }
//                 ]
//             },
//             {
//                 "featureType": "water",
//                 "elementType": "labels",
//                 "stylers": [
//                     {
//                         "lightness": -25
//                     },
//                     {
//                         "saturation": -100
//                     }
//                 ]
//             }
//         ],
//     });
// }

// initMap();