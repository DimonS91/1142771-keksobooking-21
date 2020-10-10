'use strict';

(() => {
  const addressForm = document.querySelector('#address');
  const capacity = document.querySelector('#capacity');
  const capacityOptions = capacity.querySelectorAll('option');
  const roomNumber = document.querySelector('#room_number');
  const addForm = document.querySelector('.ad-form');
  const headingFormInput = addForm.querySelector('#title');
  const typeHouseSelect = addForm.querySelector('#type');
  const timeIn = document.querySelector('#timein');
  const timeOut = document.querySelector('#timeout');
  const priceInput = addForm.querySelector('#price');


  const HEADING_MIN_LENGTH = 30;
  const HEADING_MAX_LENGTH = 100;

  const createAddress = (coord) => {
    addressForm.value = `${Math.ceil(coord.x + window.pin.mainPin.MAIN_PIN_WIDTH / 2)}, ${Math.ceil(coord.y + window.pin.mainPin.PIN_TAIL)}`;
  };

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

  // Валидация заголовка

  headingFormInput.addEventListener('input', () => {
    const valueLength = headingFormInput.value.length;
    if (valueLength < HEADING_MIN_LENGTH) {
      headingFormInput.setCustomValidity('Еще ' + (HEADING_MIN_LENGTH - valueLength) + ' симв');
    } else if (valueLength > HEADING_MAX_LENGTH) {
      headingFormInput.setCustomValidity('Удалите лишние ' + (valueLength - HEADING_MAX_LENGTH) + ' симв');
    } else {
      headingFormInput.setCustomValidity('');
    }

    headingFormInput.reportValidity();
  });

  // Валидация въезда и выезда

  const onTimeInChange = () => {
    timeOut.value = timeIn.value;
  };
  const onTimeOutChange = () => {
    timeIn.value = timeOut.value;
  };

  timeIn.addEventListener('change', onTimeInChange);
  timeOut.addEventListener('change', onTimeOutChange);

  // Валидация цены

  const minPrice = {
    bungalow: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
  };

  const typeHouse = (type) => {
    priceInput.setAttribute('min', minPrice[type]);
    priceInput.setAttribute('placeholder', minPrice[type]);
  };
  typeHouseSelect.addEventListener('change', (evt) => {
    typeHouse(evt.target.value);
  });

  window.form = {createAddress, checkRoom};

})();
