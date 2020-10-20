'use strict';

(() => {
  const MAX_PIN = 5;

  const mapFilters = document.querySelector(`.map__filters`);
  const filterElements = mapFilters.querySelectorAll(`select`);
  const typeHouse = document.querySelector(`#housing-type`);

  let newData = [];

  const filtrationItem = (elem, item, key) => {
    return elem.value === `any` ? true : elem.value === item[key];
  };

  const filteringByType = (item) => {
    return filtrationItem(typeHouse, item.offer, `type`);
  };

  const applyData = (data) => {
    return data.filter((elem) => {
      return (
        filteringByType(elem)
      );
    })
    .slice(0, MAX_PIN);
  };

  const activateFilter = (data) => {
    newData = data;
    window.pin.renderPins(applyData(newData));
  };


  mapFilters.addEventListener(`change`, () => {
    window.card.removeCard();
    window.pin.removePins();
    window.pin.renderPins(applyData(newData));
  });


  const resetFilter = () => {
    filterElements.forEach((elem) => {
      elem.value = `any`;
    });
  };

  window.filter = {resetFilter, activateFilter};

})();
