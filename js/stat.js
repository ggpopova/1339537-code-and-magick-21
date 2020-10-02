"use strict";

var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_X = 100; // начальная координата Х облака
var CLOUD_Y = 10; // начальная координата Y облака
var GAP = 50; //  отступы
var FONT_GAP = 15; //  отступы для текста
var TEXT_WIDTH = 50; //  ширина для текста
var BAR_WIDTH = 40; // ширина колонки
var BAR_HEIGHT = 130; // высота колонки

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
    ctx,
    CLOUD_X + GAP - GAP / 1.5,
    CLOUD_Y + GAP - GAP / 1.5,
    "rgba(0, 0, 0, 0.7)"
  );
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  ctx.fillStyle = "#000";

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = "#000";
    ctx.font = "16px, PT Mono";
    ctx.textBaseline = "hanging";
    ctx.fillText(
      "Ура вы победили!",
      CLOUD_X + GAP - GAP / 1.5,
      CLOUD_Y + GAP - GAP / 2
    );
    ctx.fillText("Список результатов:", CLOUD_X + GAP - GAP / 1.5, CLOUD_Y + GAP);

    if (players[i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = "hsl(240, " + Math.round(Math.random() * 100) + "%, 50%)";
    }

    ctx.fillRect(
      CLOUD_X + GAP / 1.5 + GAP * 2 * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP / 1.2,
      BAR_WIDTH,
      -(BAR_HEIGHT * times[i]) / maxTime
    );

    ctx.fillStyle = "#000";
    ctx.fillText(
      players[i],
      CLOUD_X + GAP / 1.5 + GAP * 2 * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP / 1.5,
      BAR_WIDTH
    );

    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP / 1.5 + GAP * 2 * i,
      CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - GAP * 1.2,
      BAR_WIDTH
    );
  }
};
