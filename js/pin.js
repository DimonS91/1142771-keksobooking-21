'use strict';

(() => {
  const mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
  const mapPins = document.querySelector('.map__pins');

  const offsetX = 25;
  const offsetY = 35;

  const createPin = (pin) => {
    const element = mapPin.cloneNode(true);

    element.querySelector('img').src = pin.author.avatar;
    element.querySelector('img').alt = pin.offer.title;
    element.style.left = pin.location.x + offsetX + 'px';
    element.style.top = pin.location.y + offsetY + 'px';

    const showPopup = () => {
      window.card.card(pin);
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

  window.pin = {
    renderPins: renderPins
  };

})();

