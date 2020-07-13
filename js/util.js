'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var WIZARDS_NUMBER = 4;

  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  var getOnlyUnique = function (it, i, array) {
    return array.indexOf(it) === i;
  };

  window.util = {
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    WIZARDS_NUMBER: WIZARDS_NUMBER,
    MAX_SIMILAR_WIZARD_COUNT: MAX_SIMILAR_WIZARD_COUNT,
    getRandomElement: getRandomElement,
    shuffleArray: shuffleArray,
    getOnlyUnique: getOnlyUnique
  };
})();
