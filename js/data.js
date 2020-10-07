'use strict';

(() => {
  const housePriceField = document.querySelector('#housing-price');
  housePriceField.classList.remove('hidden');

  const OBJECT_TITLES = ['Большая квартира', 'Шикарный петхаус', 'Гостевой дом', 'Коттедж для большой семьи', 'Номер в мотеле'];
  const OBJECT_TYPES = ['palace', 'flat', 'house', 'bungalow'];
  const CHECK_TIMES = ['12:00', '13:00', '14:00'];
  const OBJECT_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const OBJECT_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  const OBJECT_DESCRIPTION = ['1', '2', '3', '4', '5'];

  const getPins = (count) => {
    const array = [];
    for (let i = 0; i < count; i++) {
      const avatarIndex = i + 1;
      array[i] = {
        'author': {
          "avatar": 'img/avatars/user0' + avatarIndex + '.png',
        },
        'offer': {
          'title': window.util.getRandomElement(OBJECT_TITLES),
          'address': '600, 350',
          'price': window.util.getRandomInt(200, 50000),
          'type': window.util.getRandomElement(OBJECT_TYPES),
          'rooms': window.util.getRandomInt(1, 10),
          'guests': window.util.getRandomInt(1, 20),
          'checkin': window.util.getRandomElement(CHECK_TIMES),
          'checkout': window.util.getRandomElement(CHECK_TIMES),
          'features': window.util.getRandomArray(OBJECT_FEATURES),
          'description': window.util.getRandomElement(OBJECT_DESCRIPTION),
          'photos': window.util.getRandomArray(OBJECT_PHOTOS),
        },
        'location': {
          'x': window.util.getRandomInt(0, 1000),
          'y': window.util.getRandomInt(130, 630)
        }
      };
    }
    return array;
  };
  window.data = {
    getPins: getPins
  };

})();
