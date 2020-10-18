'use strict';

(() => {
  const addressForm = document.querySelector(`#address`);
  const capacity = document.querySelector(`#capacity`);
  const capacityOptions = capacity.querySelectorAll(`option`);
  const roomNumber = document.querySelector(`#room_number`);
  const addForm = document.querySelector(`.ad-form`);
  const headingFormInput = addForm.querySelector(`#title`);
  const typeHouseSelect = addForm.querySelector(`#type`);
  const timeIn = document.querySelector(`#timein`);
  const timeOut = document.querySelector(`#timeout`);
  const priceInput = addForm.querySelector(`#price`);

  const HEADING_MIN_LENGTH = 30;
  const HEADING_MAX_LENGTH = 100;

  const createAddress = (coord, bool) => {
    if (bool) {
      addressForm.value = `${Math.ceil(coord.x + window.pin.mainPin.MAIN_PIN_WIDTH / 2)}, ${Math.ceil(coord.y + window.pin.mainPin.MAIN_PIN_HEIGHT + window.pin.mainPin.PIN_TAIL)}`;
    } else {
      addressForm.value = `${Math.ceil(570 + window.pin.mainPin.MAIN_PIN_WIDTH / 2)}, ${Math.ceil(375 + window.pin.mainPin.MAIN_PIN_HEIGHT / 2)}`;
    }
  };

  createAddress(false);

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

  roomNumber.addEventListener(`change`, (evt) => {
    checkRoom(evt.target.value);
  });

  // Валидация заголовка

  headingFormInput.addEventListener(`input`, () => {
    const valueLength = headingFormInput.value.length;
    if (valueLength < HEADING_MIN_LENGTH) {
      headingFormInput.setCustomValidity(`Еще ` + (HEADING_MIN_LENGTH - valueLength) + ` симв`);
    } else if (valueLength > HEADING_MAX_LENGTH) {
      headingFormInput.setCustomValidity(`Удалите лишние ` + (valueLength - HEADING_MAX_LENGTH) + ` симв`);
    } else {
      headingFormInput.setCustomValidity(``);
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

  timeIn.addEventListener(`change`, onTimeInChange);
  timeOut.addEventListener(`change`, onTimeOutChange);

  // Валидация цены

  const minPrice = {
    bungalow: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
  };

  const typeHouse = (type) => {
    priceInput.setAttribute(`min`, minPrice[type]);
    priceInput.setAttribute(`placeholder`, minPrice[type]);
  };
  typeHouseSelect.addEventListener(`change`, (evt) => {
    typeHouse(evt.target.value);
  });

  const messageErrorPopup = document.querySelector(`#error`).content.querySelector(`.error`);
  const messageSuccessPopup = document.querySelector(`#success`).content.querySelector(`.success`);

  const showErrorMessage = () => {
    const message = messageErrorPopup.cloneNode(true);
    document.body.insertAdjacentElement(`afterbegin`, message);
    hideMessageError();
  };

  const showSuccessMessage = () => {
    const message = messageSuccessPopup.cloneNode(true);
    document.body.insertAdjacentElement(`afterbegin`, message);
    hideMessageSuccess();
    addForm.reset();
    window.map.deactivationMap();
    window.pin.removePins();
  };

  const hideMessageError = () => {
    const messageError = document.querySelector(`.error`);
    const errorBtn = document.querySelector(`.error__button`);

    const hideMessageErrorEsc = (evt) => {
      window.util.clickOnEsc(evt, () => {
        messageError.remove();
      });
    };
    const hideMessageErrorMouse = (evt) => {
      window.util.clickOnMouse(evt, () => {
        messageError.remove();
      });
    };
    window.addEventListener(`keydown`, hideMessageErrorEsc);
    errorBtn.addEventListener(`click`, hideMessageErrorMouse);
    window.addEventListener(`click`, hideMessageErrorMouse);
  };

  const hideMessageSuccess = () => {
    const messageSuccess = document.querySelector(`.success`);

    const hideMessageSuccessEsc = (evt) => {
      window.util.clickOnEsc(evt, () => {
        messageSuccess.remove();
      });

    };
    const hideMessageSuccessMouse = (evt) => {
      window.util.clickOnMouse(evt, () => {});
      messageSuccess.remove();
    };
    window.addEventListener(`keydown`, hideMessageSuccessEsc);
    window.addEventListener(`click`, hideMessageSuccessMouse);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    window.upload(new FormData(addForm), showSuccessMessage, showErrorMessage);
  };

  addForm.addEventListener(`submit`, submitHandler);

  window.form = {createAddress, checkRoom, typeHouse};

})();
