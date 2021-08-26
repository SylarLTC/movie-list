const rightArrows = document.querySelectorAll('.arrow-right');
const movieLists = document.querySelectorAll('.movie-list');

rightArrows.forEach((arrow, i) => {
    const itemLength = movieLists[i].querySelectorAll('img').length;
    
    let clickCounter = 0;

    arrow.addEventListener('click', () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if ((itemLength - (3+clickCounter) + (4-ratio)) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get('transform')[0].x.value-300}px)`;
        } else {
            movieLists[i].style.transform = `translateX(0)`;
            clickCounter = 0;
        }
    })
});

const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.movie-list-title,.navbar-container,.menu-list-item-anchor,.sidebar,.sidebar-icon,.toggle,.featured-content,.featured-content-2,.featured-descr,.profile-text-container');

ball.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle('active');
    })
    ball.classList.toggle('active');
});