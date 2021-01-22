import {
  cardsContainer,
} from './constants';
export const clearContainer = () => {
  // очистить контейнер от прежних карточек
  while (cardsContainer.firstElementChild) {
    cardsContainer.removeChild(cardsContainer.firstElementChild);
  }
}