const slidesList = document.querySelectorAll('.slide');


const addActiveClass = (slide) => {
    slide.classList.toggle('slide-active')
}

const removeActiveClass = () => {
    for (const slide of slidesList) {
        slide.classList.remove('slide-active');
    }
}


slidesList.forEach((slide) => {
    slide.addEventListener('click', () => {
        removeActiveClass();
        addActiveClass(slide);
    })
})