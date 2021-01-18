const cardsContainer = document.querySelector('.places-list');

const clearContainer = () => {
    // очистить контейнер от прежних карточек
    while (cardsContainer.firstElementChild) {
        cardsContainer.removeChild(cardsContainer.firstElementChild);
    }
}