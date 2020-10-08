'use strict';

(() => {
  const mapPinMain = document.querySelector('.map__pin--main');
  const mapElement = document.querySelector('.map');

  const offset = {
    top: 130,
    bottom: 120
  };

  const limits = {
    top: mapElement.offsetTop + offset.top,
    right: mapElement.offsetWidth - mapPinMain.offsetWidth,
    bottom: mapElement.offsetHeight - offset.bottom,
    left: 0
  };

  mapPinMain.addEventListener('mousedown', (evt) => {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      const newLocation = {
        x: mapPinMain.offsetLeft - shift.x,
        y: mapPinMain.offsetTop - shift.y
      };

      if (newLocation.x < limits.left) {
        newLocation.x = limits.left;
      } else if (newLocation.x >= limits.right) {
        newLocation.x = limits.right;
      } else if (newLocation.y < limits.top) {
        newLocation.y = limits.top;
      } else if (newLocation.y >= limits.bottom) {
        newLocation.y = limits.bottom;
      }

      mapPinMain.style.left = newLocation.x + 'px';
      mapPinMain.style.top = newLocation.y + 'px';
    };


    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
})();
