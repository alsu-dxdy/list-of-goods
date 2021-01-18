class Card {

  like(event) {
    if (event.target.classList.contains('place-card__like-icon')) { //клик по сердечку
      event.target.classList.toggle('place-card__like-icon_liked');
    }
  }
  remove(event) {
    if (event.target.classList.contains('place-card__delete-icon')) {//клик по корзине
      event.target.closest('.place-card').remove();
    }
  }

  create(nameValue, linkValue, priceValue) {
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");
    placeCard.insertAdjacentHTML('beforeend', `
              <span class="card__heading-marker">Скидка</span>          
              <div class="place-card__image">
                <button class="place-card__delete-icon"></button>
              </div>
              <div class="place-card__description">
                <p class="place-card__code">L422WH</p>
                <h3 class="place-card__name">Ручка дверная</h3>
                <div class="place-card__price-container">
                  
                  <p class="place-card__price"></p>
              </div>
              </div>

              <button class="place-card__like-icon"></button>
              <button class="place-card__cart-icon"></button>
              `);
    placeCard.querySelector(".place-card__name").textContent = nameValue;
    placeCard.querySelector(".place-card__price").textContent = priceValue;
    placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${linkValue})`;

    return placeCard;
  }
}
//<p class="place-card__price place-card__price_old"></p>