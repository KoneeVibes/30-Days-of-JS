function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
    // console.log(window.scrollY)
    // console.log(window.innerHeight)
    sliderImages.forEach(sliderImage => {
        // To detect scroll position on the page to slide in - at position half of the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // To detect scroll past the bottom of image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        // conditionals
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active')
        }else{
            sliderImage.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide))