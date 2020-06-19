'use strict';

(function () {
  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getWizardObject = function () {
    return {
      name: getRandomElement(window.setupConst.WIZARD_NAMES) + ' ' + getRandomElement(window.setupConst.WIZARD_SURNAMES),
      coatColor: getRandomElement(window.setupConst.COAT_COLORS),
      eyesColor: getRandomElement(window.setupConst.EYES_COLORS)
    };
  };

  var wizards = [];
  for (var j = 0; j < window.setupConst.WIZARDS_NUMBER; j++) {
    wizards.push(getWizardObject());
  }

  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  window.wizardsCreation = {
    getRandomElement: getRandomElement
  };
})();
