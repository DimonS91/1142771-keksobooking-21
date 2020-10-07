"use strict";

// const mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
// const card = document.querySelector('#card').content.querySelector('.map__card');
// const mapPins = document.querySelector('.map__pins');
// const mapFilters = document.querySelector('.map__filters');
// const filterElements = mapFilters.querySelectorAll('select');
// const mapPinMain = document.querySelector('.map__pin--main');
// const mapElement = document.querySelector('.map');
// const housePriceField = document.querySelector('#housing-price');
// const addForm = document.querySelector('.ad-form');
// const headingFormInput = addForm.querySelector('#title');
// const typeHouseSelect = addForm.querySelector('#type');
// const priceInput = addForm.querySelector('#price');
// const formElements = addForm.querySelectorAll('fieldset');
// const addressForm = document.querySelector('#address');
// const roomNumber = document.querySelector('#room_number');
// const capacity = document.querySelector('#capacity');
// const capacityOptions = capacity.querySelectorAll('option');
// const timeIn = document.querySelector('#timein');
// const timeOut = document.querySelector('#timeout');
// housePriceField.classList.remove('hidden');

// const OBJECT_TITLES = ['Большая квартира', 'Шикарный петхаус', 'Гостевой дом', 'Коттедж для большой семьи', 'Номер в мотеле'];
// const OBJECT_TYPES = ['palace', 'flat', 'house', 'bungalow'];
// const CHECK_TIMES = ['12:00', '13:00', '14:00'];
// const OBJECT_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// const OBJECT_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
// const OBJECT_DESCRIPTION = ['1', '2', '3', '4', '5'];
// const MAIN_PIN_WIDTH = 65;
// const MAIN_PIN_HEIGHT = 65;
// const offsetX = 25;
// const offsetY = 35;
// const HEADING_MIN_LENGTH = 30;
// const HEADING_MAX_LENGTH = 100;


// const houseTypes = {
//   'palace': 'Дворец',
//   'flat': 'Квартира',
//   'house': 'Дом',
//   'bungalow': 'Бунгало'
// };

// const getRandomInt = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const getRandomArray = (arr) => {
//   const sortArray = arr.filter(() => Math.random() >= 0.5);
//   return sortArray;
// };

// const getRandomElement = (arr) => {
//   const randomElement = arr[Math.floor(Math.random() * arr.length)];
//   return randomElement;
// };

// const getPins = (count) => {
//   const array = [];
//   for (let i = 0; i < count; i++) {
//     const avatarIndex = i + 1;
//     array[i] = {
//       'author': {
//         "avatar": 'img/avatars/user0' + avatarIndex + '.png',
//       },
//       'offer': {
//         'title': window.util.getRandomElement(OBJECT_TITLES),
//         'address': '600, 350',
//         'price': window.util.getRandomInt(200, 50000),
//         'type': window.util.getRandomElement(OBJECT_TYPES),
//         'rooms': window.util.getRandomInt(1, 10),
//         'guests': window.util.getRandomInt(1, 20),
//         'checkin': window.util.getRandomElement(CHECK_TIMES),
//         'checkout': window.util.getRandomElement(CHECK_TIMES),
//         'features': window.util.getRandomArray(OBJECT_FEATURES),
//         'description': window.util.getRandomElement(OBJECT_DESCRIPTION),
//         'photos': window.util.getRandomArray(OBJECT_PHOTOS),
//       },
//       'location': {
//         'x': window.util.getRandomInt(0, 1000),
//         'y': window.util.getRandomInt(130, 630)
//       }
//     };
//   }
//   return array;
// };

// const renderCard = (data) => {
//   const mapPopup = document.querySelector('.map__card');
//   if (mapPopup) {
//     mapPopup.remove();
//   }
//   mapElement.appendChild(createPopup(data));
// };


// const createPin = (pin) => {
//   const element = mapPin.cloneNode(true);

//   element.querySelector('img').src = pin.author.avatar;
//   element.querySelector('img').alt = pin.offer.title;
//   element.style.left = pin.location.x + offsetX + 'px';
//   element.style.top = pin.location.y + offsetY + 'px';

//   const openPopupMouse = (evt) => {
//     if (evt.which === 1) {
//       renderCard(pin);
//     }
//   };
//   const openPopupEnter = (evt) => {
//     if (evt.keyCode === 13) {
//       renderCard(pin);
//     }
//   };

//   element.addEventListener('mousedown', openPopupMouse);
//   element.addEventListener('keydown', openPopupEnter);

//   return element;
// };

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
// const renderPhotosPopup = (element, incomingData) => {
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
// };

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

//   const popupClose = popupElement.querySelector('.popup__close');

//   const hidePopupMouse = (evt) => {
//     if (evt.which === 1) {
//       popupElement.remove();
//     }
//   };

//   const hidePopupEsc = (evt) => {
//     if (evt.keyCode === 27) {
//       popupElement.remove();
//     }
//   };

//   popupClose.addEventListener('mousedown', hidePopupMouse);
//   window.addEventListener('keydown', hidePopupEsc);

//   return popupElement;
// };

// const renderPins = (pinsArray) => {
//   pinsArray.forEach((pin) => {
//     mapPins.appendChild(createPin(pin));
//   });
// };

// const popup = getPins(8);

// const setAtivationAndInactivation = (bool, filter, form) => {
//   filter.forEach((element) => {
//     element.disabled = bool;
//   });

//   form.forEach((element) => {
//     element.disabled = bool;
//   });
// };

// setAtivationAndInactivation(true, filterElements, formElements);

// const activationMap = () => {
//   mapElement.classList.remove('map--faded');
//   addForm.classList.remove('ad-form--disabled');
//   setAtivationAndInactivation(false, filterElements, formElements);
//   window.pin.renderPins(popup);
//   checkRoom(roomNumber.value);
//   createAddress(570, 375);
// };

// const createAddress = (coordinateX, coordinateY) => {
//   addressForm.value = `${Math.round(coordinateX + MAIN_PIN_WIDTH / 2)}, ${Math.round(coordinateY + MAIN_PIN_HEIGHT / 2)}`;
// };

// const onPinMouseDown = (evt) => {
//   if (evt.which === 1) {
//     activationMap();
//     // createAddress(570, 375);
//   }
//   mapPinMain.removeEventListener('mousedown', onPinMouseDown);
// };

// const onPinKeyDown = (evt) => {
//   if (evt.keyCode === 13) {
//     activationMap();
//     // createAddress(570, 375);
//   }
//   mapPinMain.removeEventListener('keydown', onPinKeyDown);
// };

// mapPinMain.addEventListener('mousedown', onPinMouseDown);
// mapPinMain.addEventListener('keydown', onPinKeyDown);

// const roomValues = {
//   1: [1],
//   2: [1, 2],
//   3: [1, 2, 3],
//   100: [0]
// };

// const checkRoom = (people) => {
//   capacityOptions.forEach((element) => {
//     element.disabled = true;
//   });

//   roomValues[people].forEach((seats) => {
//     capacityOptions.forEach((element) => {
//       if (Number(element.value) === seats) {
//         element.disabled = false;
//         element.selected = true;
//       }
//     });
//   });
// };

// roomNumber.addEventListener('change', (evt) => {
//   checkRoom(evt.target.value);
// });

// // Валидация заголовка

// headingFormInput.addEventListener('input', () => {
//   const valueLength = headingFormInput.value.length;
//   if (valueLength < HEADING_MIN_LENGTH) {
//     headingFormInput.setCustomValidity('Еще ' + (HEADING_MIN_LENGTH - valueLength) + ' симв');
//   } else if (valueLength > HEADING_MAX_LENGTH) {
//     headingFormInput.setCustomValidity('Удалите лишние ' + (valueLength - HEADING_MAX_LENGTH) + ' симв');
//   } else {
//     headingFormInput.setCustomValidity('');
//   }

//   headingFormInput.reportValidity();
// });

// // Валидация въезда и выезда

// const onTimeInChange = () => {
//   timeOut.value = timeIn.value;
// };
// const onTimeOutChange = () => {
//   timeIn.value = timeOut.value;
// };

// timeIn.addEventListener('change', onTimeInChange);
// timeOut.addEventListener('change', onTimeOutChange);

// // Валидация цены

// const minPrice = {
//   bungalow: 0,
//   flat: 1000,
//   house: 5000,
//   palace: 10000
// };

// const typeHouse = (type) => {
//   priceInput.setAttribute('min', minPrice[type]);
//   priceInput.setAttribute('placeholder', minPrice[type]);
// };
// typeHouseSelect.addEventListener('change', (evt) => {
//   typeHouse(evt.target.value);
// });
