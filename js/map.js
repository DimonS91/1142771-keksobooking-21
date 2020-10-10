'use strict';

(() => {
  const mapPinMain = document.querySelector('.map__pin--main');
  const mapElement = document.querySelector('.map');
  const addForm = document.querySelector('.ad-form');
  const formElements = addForm.querySelectorAll('fieldset');
  const mapFilters = document.querySelector('.map__filters');
  const filterElements = mapFilters.querySelectorAll('select');
  const roomNumber = document.querySelector('#room_number');

  const setAtivationAndInactivation = (bool, filter, form) => {
    filter.forEach((element) => {
      element.disabled = bool;
    });

    form.forEach((element) => {
      element.disabled = bool;
    });
  };

  const activationMap = () => {
    mapElement.classList.remove('map--faded');
    addForm.classList.remove('ad-form--disabled');
    setAtivationAndInactivation(false, filterElements, formElements);
    window.pin.renderPins(popup);
    window.form.checkRoom(roomNumber.value);
    window.form.createAddress();
  };
  const popup = window.data.getPins(8);

  const onPinMouseDown = (evt) => {
    window.util.clickOnMouse(evt, activationMap);
    mapPinMain.removeEventListener('mousedown', onPinMouseDown);
  };

  const onPinKeyDown = (evt) => {
    window.util.clickOnEnter(evt, activationMap);
    mapPinMain.removeEventListener('keydown', onPinKeyDown);
  };

  mapPinMain.addEventListener('mousedown', onPinMouseDown);
  mapPinMain.addEventListener('keydown', onPinKeyDown);

  setAtivationAndInactivation(true, filterElements, formElements);
})();
