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
        for (let data of this.arrayCards) {
            const newCard = this.card.create(data.name, data.link);
            this.container.appendChild(newCard);
        }
    }

}
