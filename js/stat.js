'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var FONT_GAP = 16;
var FONT = '16px PTMono';
var COLUMN_WIDTH = 40;
var COLUMN_MAX_HEIGHT = 150;
var textHeight = FONT_GAP + GAP;

var getRandomSaturation = function () {
  var hue = 240;
  var saturation = Math.floor(Math.random() * 100) + 1;
  var lightness = 50;

  return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';

  ctx.font = FONT;
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + textHeight);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - textHeight - GAP - (COLUMN_MAX_HEIGHT * times[i]) / maxTime - GAP);
    ctx.fillText(players[i], CLOUD_X + GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - textHeight - GAP - (COLUMN_MAX_HEIGHT * times[i]) / maxTime, COLUMN_WIDTH, (COLUMN_MAX_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillStyle = getRandomSaturation();
      ctx.fillRect(CLOUD_X + GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - textHeight - GAP - (COLUMN_MAX_HEIGHT * times[i]) / maxTime, COLUMN_WIDTH, (COLUMN_MAX_HEIGHT * times[i]) / maxTime);
    }
  }
};
