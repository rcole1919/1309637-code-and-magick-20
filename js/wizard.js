'use strict';

(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(window.util.COAT_COLORS);
    wizardCoat.style.fill = newColor;
    document.querySelector('input[name="coat-color"]').value = newColor;
    window.wizardCreation.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(window.util.EYES_COLORS);
    wizardEyes.style.fill = newColor;
    document.querySelector('input[name="eyes-color"]').value = newColor;
    window.wizardCreation.onEyesChange(newColor);
  });

  fireball.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(window.util.FIREBALL_COLORS);
    fireball.style.background = newColor;
    document.querySelector('input[name="fireball-color"]').value = newColor;
  });
})();
