(() => {
  const cardsContainer = document.querySelector('.places-list');//cardsContainer - родитель кнопки "Лайк" и "Корзина"
  const popupImageBig = document.querySelector('.popup_image_big'); // картинка в попапе
  const select = document.querySelector('select');
  //let goodsMainPage = goods.slice(0);


  /*Экземпляры классов*/
  const card = new Card();
  const cardList = new CardList(cardsContainer, card);
  const popupImage = new PopupImage(document.querySelector('.popup_image'), popupImageBig);

  /* -----Слушатели событий----- */

  cardsContainer.addEventListener('click', popupImage.open.bind(popupImage)); //Открытие попапа с картинкой
  cardsContainer.addEventListener('click', card.like);
  cardsContainer.addEventListener('click', card.remove);

  // Слушатель на сортировку
  select.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(event.target.value);

    // очистить контейнер от прежних карточек
    while (cardsContainer.firstElementChild) {
      cardsContainer.removeChild(cardsContainer.firstElementChild);
    }

    if (event.target.value === 'default') {
      const sorteredGoods = goods.sort((a, b) => a.id - b.id);
      cardList.render(sorteredGoods);
      return;
    }

    if (event.target.value === 'increase') {
      const sorteredGoods = goods.sort((a, b) => a.price.current_price - b.price.current_price);
      cardList.render(sorteredGoods);
      return;
    }

    if (event.target.value === 'decrease') {
      const sorteredGoods = goods.sort((a, b) => b.price.current_price - a.price.current_price);
      cardList.render(sorteredGoods);
      return;
    }
  });

  /* -----Вызовы методов----- */
  cardList.render(goods);
})();




