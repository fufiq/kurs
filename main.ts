 import './style.scss'
// class Slider {
//     private track: HTMLElement;
//     private slides: NodeListOf<HTMLElement>;
//     private currentIndex: number = 0;
//     private slideInterval: number | undefined;
//
//     constructor(trackSelector: string) {
//         this.track = document.querySelector(trackSelector) as HTMLElement;
//         this.slides = this.track.querySelectorAll('.slide');
//         this.init();
//     }
//
//     private init() {
//         this.startAutoSlide();
//     }
//
//     private startAutoSlide() {
//         this.slideInterval = setInterval(() => this.nextSlide(), 3000);
//     }
//
//     private nextSlide() {
//
//         this.currentIndex = (this.currentIndex + 1) % this.slides.length;
//         this.track.style.transform = `translateX(-${this.currentIndex * 100 / this.slides.length}%)`;
//     }
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//     new Slider('.slider');
// });
