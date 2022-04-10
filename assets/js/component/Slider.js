class Slider {
    constructor() {
        // Main elements
        this.slides = document.querySelectorAll('.block_img_scroll__slide');
        this.nextButton = document.querySelector('.sButtons-next');
        this.previousButton = document.querySelector('.sButtons-previous');
        // Variables
        this.slideIndex = 0;
        this.slideCount = this.slides.length;

        // Init
        this.init();
    };

    init() {
        // Functions
        this.hideAll();
        // Events
        this.nextButton.onclick = this.nextSlide.bind(this);
        this.previousButton.onclick = this.previousSlide.bind(this);
    };

    hideAll() {
        this.slides.forEach((element, index) => element.classList.toggle('hides', index !== 0));
    };

    nextSlide() {
        this.autoCheck();

        this.slides[this.slideIndex].classList.add('hides');
        this.slideIndex + 1 < this.slideCount ? this.slideIndex++ : this.slideIndex = 0;
        this.slides[this.slideIndex].classList.remove('hides');
    };

    previousSlide() {
        this.autoCheck();

        this.slides[this.slideIndex].classList.add('hides');
        this.slideIndex - 1 < this.slideCount ? this.slideIndex-- : this.slideIndex = this.slideCount - 1;
        this.slides[this.slideIndex].classList.remove('hides');
    };

    autoCheck() {
        this.slideIndex != 0 ? this.previousButton.classList.add('showpr') : this.previousButton.classList.remove('showpr');
    };
};

export {Slider};