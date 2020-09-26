let mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
let mapPins = document.querySelector('.map__pins');
let map = document.querySelector('.map').classList.remove('map--faded');
let housePriceField = document.querySelector('#housing-price');
housePriceField.classList.remove('hidden');

let objectTitles = ['Большая квартира', 'Шикарный петхаус', 'Гостевой дом', 'Коттедж для большой семьи', 'Номер в мотеле'];
let objectTypes = ['palace', 'flat', 'house', 'bungalow'];
let checkTimes = ['12:00', '13:00', '14:00'];
let objectFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let objectPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
let objectDescription = ['1', '2', '3', '4', '5'];
let offsetX = 25;
let offsetY = 35;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArray = (arr) => {
  let sortArray = arr.filter(() =>  Math.random() >= 0.5);
  return sortArray;
}

const getRandomElement = (arr) => {
  let randomElement = arr[Math.floor(Math.random()* arr.length)];
  return randomElement;
}

const getPins =  (count) => {
  const array = [];
  for (let i = 0; i < count; i++) {
    let avatarIndex = i + 1
    array[i] = {
      'author': {
        "avatar": 'img/avatars/user0' + avatarIndex + '.png',
      },
      'offer' : {
        'title': getRandomElement(objectTitles),
        'address' : '600, 350',
        'price': getRandomInt(200, 50000),
        'type': getRandomElement(objectTypes),
        'rooms': getRandomInt(1, 10),
        'guests': getRandomInt(1, 20),
        'checkin': getRandomElement(checkTimes),
        'checkout': getRandomElement(checkTimes),
        'features': getRandomArray(objectFeatures),
        'description': getRandomElement(objectDescription),
        'photos': getRandomArray(objectPhotos),
      },
      'location': {
        'x': getRandomInt(300, 900),
        'y': getRandomInt(130, 630)
      }
    }
  }
  return array;
}
const pinsArray = getPins(8);

console.log(pinsArray)
const createPin = (pin) => {
  const element = mapPin.cloneNode(true);

  element.querySelector('img').src = pin.author.avatar;
  element.querySelector('img').alt = pin.offer.title;
  element.style.left = pin.location.x + offsetX + 'px';
  element.style.top = pin.location.y + offsetY + 'px';

  return element;
}

const renderPins = (pinsArray) => {
  pinsArray.forEach((pin) => {
    mapPins.appendChild(createPin(pin));
  })
}

renderPins(pinsArray);






