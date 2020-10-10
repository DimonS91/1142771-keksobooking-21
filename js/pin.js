'use strict';

(() => {
  const mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
  const mapPins = document.querySelector('.map__pins');

  const OFFSET_X = 25;
  const OFFSET_Y = 35;

  const mainPin = {
    MAIN_PIN_WIDTH: 65,
    MAIN_PIN_HEIGHT: 65,
    PIN_TAIL: 18
  };

  const positionPinDefault = {
    x: 570,
    y: 375
  }

  const createPin = (pin) => {
    const element = mapPin.cloneNode(true);

    element.querySelector('img').src = pin.author.avatar;
    element.querySelector('img').alt = pin.offer.title;
    element.style.left = pin.location.x + OFFSET_X + 'px';
    element.style.top = pin.location.y + OFFSET_Y + 'px';

    const showPopup = () => {
      window.card.renderCard(pin);
    };

    const openPopupMouse = (evt) => {
      window.util.clickOnMouse(evt, showPopup);
    };
    const openPopupEnter = (evt) => {
      window.util.clickOnEnter(evt, showPopup);
    };

    element.addEventListener('mousedown', openPopupMouse);
    element.addEventListener('keydown', openPopupEnter);

    return element;
  };

  const renderPins = (pinsArray) => {
    pinsArray.forEach((pin) => {
      mapPins.appendChild(createPin(pin));
    });
  };

  window.pin = {renderPins, mainPin, positionPinDefault};

})();

