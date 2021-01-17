class CardList {
    constructor(container, arrayCards, card) {
        this.container = container;
        this.arrayCards = arrayCards;
        this.card = card;

    }


    addCard(cardElement) {
        this.container.appendChild(cardElement);
    }

    render() {
        for (let item of this.arrayCards) {
            const newCard = this.card.create(item.name, item.image.url, item.price.current_price);
            this.container.appendChild(newCard);
        }
    }

}
