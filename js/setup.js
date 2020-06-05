'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;

var getRandomName = function () {
  var randomName = Math.floor(Math.random() * WIZARD_NAMES.length);
  return WIZARD_NAMES[randomName];
};

var getRandomSurname = function () {
  var randomSurname = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  return WIZARD_SURNAMES[randomSurname];
};

var getRandomCoatColor = function () {
  var randomCoatColor = Math.floor(Math.random() * COAT_COLORS.length);
  return COAT_COLORS[randomCoatColor];
};

var getRandomEyesColor = function () {
  var randomEyesColor = Math.floor(Math.random() * EYES_COLORS.length);
  return EYES_COLORS[randomEyesColor];
};

var getWizardObject = function () {
  var wizardObject = {
    name: getRandomName() + ' ' + getRandomSurname(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  };
  return wizardObject;
};

var wizards = [];
for (var j = 0; j < WIZARDS_NUMBER; j++) {
  wizards.push(getWizardObject());
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
