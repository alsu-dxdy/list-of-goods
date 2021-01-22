const FILTER_POSITIONS = [
  {
    "id": "1",
    "name": "Дерево"
  },
  {
    "id": "2",
    "name": "Металл"
  }
];
const cardsContainer = document.querySelector('.places-list');

const goods = [
  {
    "id": "1",
    "name": "Ручка дверная",
    "code": "L422WH",
    "price": {
      "old_price": 400,
      "current_price": 355
    },
    "image": {
      "url": "../images/pic1.png"
    },
    "material": 1
  },
  {
    "id": "2",
    "name": "Ручка, нержавеющ сталь",
    "code": "L423WH",
    "price": {
      "old_price": 400.900,
      "current_price": 355.555
    },
    "image": {
      "url": "../images/pic2.png"
    },
    "material": 2
  },
  {
    "id": "3",
    "name": "Стандартные петли",
    "code": "P424WN",
    "price": {
      "old_price": null,
      "current_price": 75
    },
    "image": {
      "url": "../images/pic3.png"
    },
    "material": 2
  },
  {
    "id": "4",
    "name": "Петля со стопором",
    "code": "PW5AC",
    "price": {
      "old_price": 270,
      "current_price": 200
    },
    "image": {
      "url": "../images/pic4.png"
    },
    "material": 2
  },
  {
    "id": "5",
    "name": "Ручка дверная",
    "code": "LM352",
    "price": {
      "old_price": null,
      "current_price": 720
    },
    "image": {
      "url": "../images/pic1.png"
    },
    "material": 1
  },
  {
    "id": "6",
    "name": "Ручка, нержавеющ сталь",
    "code": null,
    "price": {
      "old_price": null,
      "current_price": 355.555
    },
    "image": {
      "url": "../images/pic2.png"
    },
    "material": 2
  },
  {
    "id": "7",
    "name": "Стандартные петли",
    "code": "WD14LK",
    "price": {
      "old_price": null,
      "current_price": 75
    },
    "image": {
      "url": "../images/pic3.png"
    },
    "material": 2
  },
  {
    "id": "8",
    "name": "Петля со стопором",
    "code": null,
    "price": {
      "old_price": 1200,
      "current_price": 900
    },
    "image": {
      "url": "../images/pic4.png"
    },
    "material": 2
  }
];

export {
  cardsContainer,
  goods,
};