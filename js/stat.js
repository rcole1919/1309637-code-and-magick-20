'use strict';

(function () {
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
    var saturation = Math.floor(Math.random() * 100) + 1;

    return 'hsl(240, ' + saturation + '%, 50%)';
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (times) {
    var maxElement = Math.max.apply(null, times);

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
      var xPosition = CLOUD_X + GAP + (COLUMN_WIDTH + COLUMN_GAP) * i;
      var yPosition = CLOUD_Y + CLOUD_HEIGHT;
      var columnHeight = COLUMN_MAX_HEIGHT * times[i] / maxTime;

      ctx.fillStyle = '#000000';
      ctx.fillText(Math.round(times[i]), xPosition, yPosition - textHeight - GAP - columnHeight - GAP);
      ctx.fillText(players[i], xPosition, yPosition - GAP);

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.fillRect(xPosition, yPosition - textHeight - GAP - columnHeight, COLUMN_WIDTH, columnHeight);
      } else {
        ctx.fillStyle = getRandomSaturation();
        ctx.fillRect(xPosition, yPosition - textHeight - GAP - columnHeight, COLUMN_WIDTH, columnHeight);
      }
    }
  };
})();
