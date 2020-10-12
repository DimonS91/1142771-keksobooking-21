'use strict';

(() => {
  const mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
  const mapPins = document.querySelector('.map__pins');

  const mainPin = {
    MAIN_PIN_WIDTH: 65,
    MAIN_PIN_HEIGHT: 65,
    PIN_TAIL: 18
  };

  const pinSize = {
    PIN_WIDTH: 40,
    PIN_HEIGHT: 40,
    PIN_TAIL: 18
  };

  const positionPinDefault = {
    x: 570,
    y: 375
  };

  const createPin = (pin) => {
    const element = mapPin.cloneNode(true);

    element.querySelector('img').src = pin.author.avatar;
    element.querySelector('img').alt = pin.offer.title;
    element.style.left = pin.location.x - pinSize.PIN_WIDTH / 2 + 'px';
    element.style.top = pin.location.y - pinSize.PIN_HEIGHT / 2 - pinSize.PIN_TAIL + 'px';

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

  // const renderPins = (pinsArray) => {
  //   pinsArray.forEach((pin) => {
  //     mapPins.appendChild(createPin(pin));
  //   });
  // };
  const onSuccess = (pinsArray) => {
    pinsArray.forEach((pin) => {
      mapPins.appendChild(createPin(pin));
    });
  };

  window.pin = {onSuccess, mainPin, positionPinDefault};

})();

