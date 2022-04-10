# Customized Slider
![Slider-IMG](https://i.imgur.com/3K7TCrP.jpg)
![Slider-IMG](https://i.imgur.com/jMv5aFC.jpg)

## How to install?
- Download this repository
- Upload it to your project
- Change the file type on which you will call slider to module
- Import Slider class
- Call the slider

## Peculiarities
- Easy to install
- Open source code
- Change beyond recognition through css

### Example HTML
`
    <div class="block_img_scroll">
        <div class="block_img_scroll__slide">
            <img src="./assets/img/1.jpg" />
            <div class="block_img_scroll-info">
                <div class="block_img_scroll-info_title">
                    Simple Slider
                </div>
                <div class="block_img_scroll-info_subtitle">
                    This is simple slider for your website, check below!
                </div>
                <a href="https://github.com/twentytwo777/Slider-Website" target="_blank" class="block_img_scroll-info_btn">
                    Show now
                </a>
            </div>
        </div>
        <div class="block_img_scroll__slide">
            <img src="./assets/img/2.jpg" />
            <div class="block_img_scroll-info">
                <div class="block_img_scroll-info_title">
                    That's man is creator this slider
                </div>
                <div class="block_img_scroll-info_subtitle">
                    twenty two
                </div>
                <a href="https://vk.com/twentytwo777" target="_blank" class="block_img_scroll-info_btn">
                    Contact
                </a>
            </div>
        </div>
        <div class="sButtons-next"><i class="fas fa-chevron-right"></i></div>
        <div class="sButtons-previous"><i class="fas fa-chevron-left"></i></div>
    </div>
`

### Example CSS
`
    @import url(./your_folder/slider.css);
`

### Example JS
`
    import {Slider} from './your_folder/Slider.js';
    window.onload = new Slider;
`

## [License](LICENSE)
MIT License