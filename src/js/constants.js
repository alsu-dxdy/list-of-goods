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
      "url": "https://2.downloader.disk.yandex.ru/preview/14029c1c94a220c6a80dcf22f0435949beeb499bacf005b47a7bc2546a40f04f/inf/sAZbD3pXyGVo4yLASmZP5AjZtAjV2NRRHQlbGQoD9KFNU13aoA73KnI7yCZC7jSvcUHlKt1-Sq2Htqz-iyVZqg%3D%3D?uid=199298657&filename=pic1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=199298657&tknv=v2&size=1295x622",
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
      "url": "https://3.downloader.disk.yandex.ru/preview/335de239f9c736096084a3160f557a0299535b2e342aafd4b0d131e46f670579/inf/Vbtdfei8s7LMftSGwUhLpQjZtAjV2NRRHQlbGQoD9KEBxCulokZIxdcol_dYICg7fsG9cxTxZBH5ejdXeU587Q%3D%3D?uid=199298657&filename=pic2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=199298657&tknv=v2&size=1295x622"
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
      "url": "https://3.downloader.disk.yandex.ru/preview/1ef63a40969ee8a72606e359e7cc934f6eb227ab10b4f96c969da3608cbd6cde/inf/xlaKEUcwF0PoQpZcpAAiw29fDf9MzVaCKwH3qeSZaFjajEtT0pb-fSuWYwD7LOWxFKAdY1WyFkF886e-4v2joQ%3D%3D?uid=199298657&filename=pic3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=199298657&tknv=v2&size=1295x622"
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
      "url": "https://1.downloader.disk.yandex.ru/preview/92705c7c9222178d9aa30decb78dddb6dd0e877b61ce4065aef2b1b34d166ae2/inf/-P7ECL0QKNSXglx6-VfmnL9BuhgoLmKL-J8ShhpF8MAdZ0j_Kos-FoRIo0Z3NQNCWAWlFrgE7_yYTr-Cp6ebaw%3D%3D?uid=199298657&filename=pic4.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=199298657&tknv=v2&size=1295x622"
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
      "url": "https://2.downloader.disk.yandex.ru/preview/14029c1c94a220c6a80dcf22f0435949beeb499bacf005b47a7bc2546a40f04f/inf/sAZbD3pXyGVo4yLASmZP5AjZtAjV2NRRHQlbGQoD9KFNU13aoA73KnI7yCZC7jSvcUHlKt1-Sq2Htqz-iyVZqg%3D%3D?uid=199298657&filename=pic1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=199298657&tknv=v2&size=1295x622"
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
      "url": "https://3.downloader.disk.yandex.ru/preview/335de239f9c736096084a3160f557a0299535b2e342aafd4b0d131e46f670579/inf/Vbtdfei8s7LMftSGwUhLpQjZtAjV2NRRHQlbGQoD9KEBxCulokZIxdcol_dYICg7fsG9cxTxZBH5ejdXeU587Q%3D%3D?uid=199298657&filename=pic2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=199298657&tknv=v2&size=1295x622"
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
      "url": "https://3.downloader.disk.yandex.ru/preview/1ef63a40969ee8a72606e359e7cc934f6eb227ab10b4f96c969da3608cbd6cde/inf/xlaKEUcwF0PoQpZcpAAiw29fDf9MzVaCKwH3qeSZaFjajEtT0pb-fSuWYwD7LOWxFKAdY1WyFkF886e-4v2joQ%3D%3D?uid=199298657&filename=pic3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=199298657&tknv=v2&size=1295x622"
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
      "url": "https://1.downloader.disk.yandex.ru/preview/92705c7c9222178d9aa30decb78dddb6dd0e877b61ce4065aef2b1b34d166ae2/inf/-P7ECL0QKNSXglx6-VfmnL9BuhgoLmKL-J8ShhpF8MAdZ0j_Kos-FoRIo0Z3NQNCWAWlFrgE7_yYTr-Cp6ebaw%3D%3D?uid=199298657&filename=pic4.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=199298657&tknv=v2&size=1295x622"
    },
    "material": 2
  }
];

export {
  cardsContainer,
  goods,
};
