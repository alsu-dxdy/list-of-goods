export default class CardList {
    constructor(container, card) {
        this.container = container;
        //this.arrayCards = arrayCards;
        this.card = card;

    }


    addCard(cardElement) {
        this.container.appendChild(cardElement);
    }

    render(cards) {
        for (let item of cards) {
            const newCard = this.card.create(item.name, item.image.url, item.price.current_price);

            //Если есть старая цена, то показать Скидка
            if (item.price.old_price) {
                newCard
                    .querySelector(".card__heading-marker")
                    .classList.add("card__heading-marker_visible");
                // и отобразить Старую цену
                newCard
                    .querySelector(".place-card__price_old")
                    .classList.add("place-card__price_old-visible");
                newCard
                    .querySelector(".place-card__price_old").textContent = `${item.price.old_price}₽`;
            }
            this.container.appendChild(newCard);
        }
    }

}
