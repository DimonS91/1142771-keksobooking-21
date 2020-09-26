"use strict";

const mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
const mapPins = document.querySelector('.map__pins');
const mapElement = document.querySelector('.map').classList.remove('map--faded');
const housePriceField = document.querySelector('#housing-price');
housePriceField.classList.remove('hidden');

const OBJECT_TITLES = ['Большая квартира', 'Шикарный петхаус', 'Гостевой дом', 'Коттедж для большой семьи', 'Номер в мотеле'];
const OBJECT_TIPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const OBJECT_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OBJECT_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const OBJECT_DESCRIPTION = ['1', '2', '3', '4', '5'];
const offsetX = 25;
const offsetY = 35;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArray = (arr) => {
  const sortArray = arr.filter(() => Math.random() >= 0.5);
  return sortArray;
};

const getRandomElement = (arr) => {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

const getPins = (count) => {
  const array = [];
  for (let i = 0; i < count; i++) {
    const avatarIndex = i + 1;
    array[i] = {
      'author': {
        "avatar": 'img/avatars/user0' + avatarIndex + '.png',
      },
      'offer': {
        'title': getRandomElement(OBJECT_TITLES),
        'address': '600, 350',
        'price': getRandomInt(200, 50000),
        'type': getRandomElement(OBJECT_TIPES),
        'rooms': getRandomInt(1, 10),
        'guests': getRandomInt(1, 20),
        'checkin': getRandomElement(CHECK_TIMES),
        'checkout': getRandomElement(CHECK_TIMES),
        'features': getRandomArray(OBJECT_FEATURES),
        'description': getRandomElement(OBJECT_DESCRIPTION),
        'photos': getRandomArray(OBJECT_PHOTOS),
      },
      'location': {
        'x': getRandomInt(300, 900),
        'y': getRandomInt(130, 630)
      }
    };
  }
  return array;
};

const pinsArray = getPins(8);

const createPin = (pin) => {
  const element = mapPin.cloneNode(true);

  element.querySelector('img').src = pin.author.avatar;
  element.querySelector('img').alt = pin.offer.title;
  element.style.left = pin.location.x + offsetX + 'px';
  element.style.top = pin.location.y + offsetY + 'px';

  return element;
};

const renderPins = (pinsArray) => {
  pinsArray.forEach((pin) => {
    mapPins.appendChild(createPin(pin));
  });
};

renderPins(pinsArray);
