import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btnNext, btnPrev) {
        super(btnNext, btnNext, btnPrev);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slidesIndex = 1;
        }

        if (n < 1) {
            this.slidesIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000)
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch(e) {}

        Array.from(this.slides).forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slidesIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slidesIndex += n);
    }

    bindTriggers(dirBtn, n) {
        dirBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(n);
            });

            try {
                item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.slidesIndex = 1;
                    this.showSlides(this.slidesIndex);
                });
            } catch(e) {}
        });
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            }catch(e) {}
            
            this.showSlides(this.slidesIndex);
            this.bindTriggers(this.btnNext, 1);
            this.bindTriggers(this.btnPrev, -1);
        }
    }
}