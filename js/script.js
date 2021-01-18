(() => {
  const popupImageBig = document.querySelector('.popup_image_big'); // картинка в попапе
  const sorter = document.querySelector('.sorter');
  const filter = document.querySelector('.filter');
  //let goodsMainPage = goods.slice(0);


  /* ----- Экземпляры классов----- */
  const card = new Card();
  const cardList = new CardList(cardsContainer, card);
  const popupImage = new PopupImage(document.querySelector('.popup_image'), popupImageBig);

  /* -----Слушатели событий----- */

  cardsContainer.addEventListener('click', popupImage.open.bind(popupImage)); //Открытие попапа с картинкой
  cardsContainer.addEventListener('click', card.like);
  cardsContainer.addEventListener('click', card.putInCart);

  // Слушатель на сортировку
  sorter.addEventListener('change', (event) => {
    event.preventDefault();
    console.log(event.target.value);

    // очистить контейнер от прежних карточек
    clearContainer();

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

  // Слушатель на фильтр
  filter.addEventListener('change', (event) => {
    event.preventDefault();
    console.log(event.target.value);
    let filteredGoods = goods.slice(0);

    if (event.target.value === '1') {
      // очистить контейнер от прежних карточек
      clearContainer();
      // фильтрация:
      filteredGoods = goods.filter(item => item.material === 1);
      console.log(filteredGoods);
      cardList.render(filteredGoods);
      return;
    }

    if (event.target.value === '2') {
      // очистить контейнер от прежних карточек
      clearContainer();
      // фильтрация:
      filteredGoods = goods.filter(item => item.material === 2);
      console.log(filteredGoods);
      cardList.render(filteredGoods);
      return;
    }
  });

  /* -----Вызовы методов----- */
  cardList.render(goods);
})();




