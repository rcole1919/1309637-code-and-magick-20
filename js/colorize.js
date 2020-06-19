'use strict';

(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    var color = getRandomElement(window.const.COAT_COLORS);
    wizardCoat.style.fill = color;
    document.querySelector('input[name="coat-color"]').value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = getRandomElement(window.const.EYES_COLORS);
    wizardEyes.style.fill = color;
    document.querySelector('input[name="eyes-color"]').value = color;
  });

  fireball.addEventListener('click', function () {
    var color = getRandomElement(window.const.FIREBALL_COLORS);
    fireball.style.background = color;
    document.querySelector('input[name="fireball-color"]').value = color;
  });
})();
