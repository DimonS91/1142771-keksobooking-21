'use strict';

(() => {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;
  const CLICK_MOUSE = 1;
  const DEBOUNCE_INTERVAL = 500;

  const clickOnEsc = (evt, action) => {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  const clickOnEnter = (evt, action) => {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  const clickOnMouse = (evt, action) => {
    if (evt.which === CLICK_MOUSE) {
      action();
    }
  };


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

  const debounce = (cb) => {
    let lastTimeout = null;
    return (...parameters) => {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(() => {
        cb(...parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.util = {clickOnEsc, clickOnEnter, clickOnMouse, getRandomInt, getRandomArray, getRandomElement, debounce};

})();
