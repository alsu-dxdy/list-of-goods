import Popup from "./Popup";
export default class PopupImage extends Popup {
    constructor(popup, bigImage) {
        super(popup);//вызываем кон-р родителя
        this.bigImage = bigImage;
    }
    open(event) {
        if (event.target.classList.contains('place-card__image')) { //клик по картинке
            this.popup.classList.add('popup_is-opened');
            this.bigImage.src = event.target.style.backgroundImage.slice(5, -2);
        }
    }
}