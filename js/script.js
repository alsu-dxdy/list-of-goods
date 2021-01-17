(() => {
  const placesList = document.querySelector('.places-list');//placesList - родитель кнопки "Лайк" и "Корзина"
  const newCardForm = document.querySelector('.popup__form');
  const userInfoButton = document.querySelector('.user-info__button'); //кнопка + (вызов чистой формы)

  const editProfilePopup = document.querySelector('.popup_edit');
  const buttonEditProfile = document.querySelector('.button_edit_profile'); //кнопка Edit

  const popupImageBig = document.querySelector('.popup_image_big'); // картинка в попапе


  /*Экземпляры классов*/
  const card = new Card();
  const cardList = new CardList(placesList, goods, card); //initialCards

  const popupImage = new PopupImage(document.querySelector('.popup_image'), popupImageBig);

  /* -----Слушатели событий----- */

  placesList.addEventListener('click', popupImage.open.bind(popupImage)); //Открытие попапа с картинкой

  placesList.addEventListener('click', card.like);
  placesList.addEventListener('click', card.remove);

  /* -----Вызовы методов----- */
  cardList.render();
})();




