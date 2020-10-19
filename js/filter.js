'use strict';

(() => {
  const MAX_PIN = 5;

  const mapFilters = document.querySelector(`.map__filters`);
  const filterElements = mapFilters.querySelectorAll(`select`);
  const typeHouse = document.querySelector(`#housing-type`);

  let newData = [];
  let filtData = [];

  const filtrationItem = (elem, item, key) => {
    if (elem.value === `any`) {
      return true;
    }
    return elem.value === item[key];
  };

  const filteringByType = (item) => {
    return filtrationItem(typeHouse, item.offer, `type`);
  };

  const filterChange = () => {
    filtData = newData.slice(0);
    filtData = filtData.filter(filteringByType);
    window.card.removeCard();
    window.pin.removePins();
    window.pin.renderPins(filtData.slice(0, MAX_PIN));
  };

  const activateFilter = () => {
    filterChange();
    mapFilters.addEventListener(`change`, filterChange);
  };

  const deactivateFilter = () => {
    mapFilters.removeEventListener(`change`, filterChange);
  };

  const resetFilter = () => {
    filterElements.forEach((elem) => {
      elem.value = `any`;
    });
  };

  const activateFiltration = (data) => {
    newData = data.slice(0);
    activateFilter();
    return data.slice(0, MAX_PIN);
  };

  window.filter = {activateFiltration, deactivateFilter, resetFilter};

})();
