"use strict";

const mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
// const card = document.querySelector('#card').content.querySelector('.map__card');
const mapPins = document.querySelector('.map__pins');
const mapFilters = document.querySelector('.map__filters');
const filterElements = mapFilters.querySelectorAll('select');
const mapPinMain = document.querySelector('.map__pin--main');
const mapElement = document.querySelector('.map');
const housePriceField = document.querySelector('#housing-price');
const addForm = document.querySelector('.ad-form');
const formElements = addForm.querySelectorAll('fieldset');
const addressForm = document.querySelector('#address');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityOptions = capacity.querySelectorAll('option');
housePriceField.classList.remove('hidden');

const OBJECT_TITLES = ['Большая квартира', 'Шикарный петхаус', 'Гостевой дом', 'Коттедж для большой семьи', 'Номер в мотеле'];
const OBJECT_TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const OBJECT_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OBJECT_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const OBJECT_DESCRIPTION = ['1', '2', '3', '4', '5'];
const MAIN_PIN_WIDTH = 65;
const MAIN_PIN_HEIGHT = 65;
const offsetX = 25;
const offsetY = 35;

// const houseTypes = {
//   'palace': 'Дворец',
//   'flat': 'Квартира',
//   'house': 'Дом',
//   'bungalow': 'Бунгало'
// };

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
        'type': getRandomElement(OBJECT_TYPES),
        'rooms': getRandomInt(1, 10),
        'guests': getRandomInt(1, 20),
        'checkin': getRandomElement(CHECK_TIMES),
        'checkout': getRandomElement(CHECK_TIMES),
        'features': getRandomArray(OBJECT_FEATURES),
        'description': getRandomElement(OBJECT_DESCRIPTION),
        'photos': getRandomArray(OBJECT_PHOTOS),
      },
      'location': {
        'x': getRandomInt(0, 1200),
        'y': getRandomInt(130, 630)
      }
    };
  }
  return array;
};

const createPin = (pin) => {
  const element = mapPin.cloneNode(true);

  element.querySelector('img').src = pin.author.avatar;
  element.querySelector('img').alt = pin.offer.title;
  element.style.left = pin.location.x + offsetX + 'px';
  element.style.top = pin.location.y + offsetY + 'px';

  return element;
};

// const createAvatarPopup = (element, incomingData) => {
//   if (!incomingData) {
//     element.style.display = 'none';
//     return;
//   } else {
//     element.src = incomingData;
//   }
// };

// const createElementPopup = (element, incomingData) => {
//   if (!incomingData) {
//     element.style.display = 'none';
//     return;
//   } else {
//     element.textContent = incomingData;
//   }
// };

// const renderFeaturesPopup = (element, incomingData) => {
//   element.innerHTML = '';
//   if (!incomingData.length) {
//     element.style.display = 'none';
//     return;
//   }
//   incomingData.forEach((feature) => {
//     const li = document.createElement('li');
//     li.classList.add('popup__feature');
//     li.classList.add('popup__feature--' + feature);
//     element.appendChild(li);
//   });
// };

// function renderPhotosPopup(element, incomingData) {
//   element.innerHTML = '';
//   if (!incomingData.length) {
//     element.style.display = 'none';
//     return;
//   }
//   incomingData.forEach((photo) => {
//     const img = document.createElement('img');
//     img.classList.add('popup__photo');
//     img.src = photo;
//     img.width = '45';
//     img.height = '40';
//     img.alt = 'Фотография жилья';
//     element.appendChild(img);
//   });
// }

// const createPopup = (popup) => {
//   const popupElement = card.cloneNode(true);

//   renderPhotosPopup(popupElement.querySelector('.popup__photos'), popup.offer.photos);
//   renderFeaturesPopup(popupElement.querySelector('.popup__features'), popup.offer.features);
//   createElementPopup(popupElement.querySelector('.popup__description'), popup.offer.description);
//   createElementPopup(popupElement.querySelector('.popup__text--capacity'), `${popup.offer.rooms} комнаты для ${popup.offer.guests} гостей`);
//   createElementPopup(popupElement.querySelector('.popup__text--time'), `Заезд после ${popup.offer.checkin}, выезд до ${popup.offer.checkout}`);
//   createElementPopup(popupElement.querySelector('.popup__type'), houseTypes[popup.offer.type]);
//   createElementPopup(popupElement.querySelector('.popup__text--price'), `${popup.offer.price}₽/ночь`);
//   createElementPopup(popupElement.querySelector('.popup__text--address'), popup.offer.address);
//   createElementPopup(popupElement.querySelector('.popup__title'), popup.offer.title);
//   createAvatarPopup(popupElement.querySelector('.popup__avatar'), popup.author.avatar);

//   return popupElement;
// };

// const renderPopup = (pinsArray) => {
//   pinsArray.forEach((pop) => {
//     mapElement.appendChild(createPopup(pop));
//   });
// };

const renderPins = (pinsArray) => {
  pinsArray.forEach((pin) => {
    mapPins.appendChild(createPin(pin));
  });
};

const pinsArray = getPins(8);
// renderPopup(pinsArray);

const setAtivationAndInactivation = (bool, filter, form) => {
  filter.forEach((element) => {
    element.disabled = bool;
  });

  form.forEach((element) => {
    element.disabled = bool;
  });
};

setAtivationAndInactivation(true, filterElements, formElements);

const activationMap = () => {
  mapElement.classList.remove('map--faded');
  addForm.classList.remove('ad-form--disabled');
  setAtivationAndInactivation(false, filterElements, formElements);
  renderPins(pinsArray);
  checkRoom(roomNumber.value);
};

const createAddress = (coordinateX, coordinateY) => {
  addressForm.value = `${Math.round(coordinateX + MAIN_PIN_WIDTH / 2)}, ${Math.round(coordinateY + MAIN_PIN_HEIGHT / 2)}`;
};

const onPinMouseDown = (evt) => {
  if (evt.which === 1) {
    activationMap();
    createAddress(570, 375);
  }
  mapPinMain.removeEventListener('mousedown', onPinMouseDown);
};

const onPinKeyDown = (evt) => {
  if (evt.keyCode === 13) {
    activationMap();
    createAddress(570, 375);
  }
  mapPinMain.removeEventListener('keydown', onPinKeyDown);
};

mapPinMain.addEventListener('mousedown', onPinMouseDown);
mapPinMain.addEventListener('keydown', onPinKeyDown);


const roomValues = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0]
};

const checkRoom = (people) => {
  capacityOptions.forEach((element) => {
    element.disabled = true;
  });

  roomValues[people].forEach((seats) => {
    capacityOptions.forEach((element) => {
      if (Number(element.value) === seats) {
        element.disabled = false;
        element.selected = true;
      }
    });
  });
};

roomNumber.addEventListener('change', (evt) => {
  checkRoom(evt.target.value);
});
