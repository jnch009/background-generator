var _ = require("lodash");

let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("answer: ", _.without(array, 2, 3, 4));

var css = document.querySelector("h3");
var color1 = new iro.ColorPicker("#color1");
var color2 = new iro.ColorPicker("#color2");
var body = document.querySelector("body");

var re = /rgb\(([^)]*)\).*rgb\(([^)]*)\)/;
var rgbColors = getComputedStyle(body).getPropertyValue("background").match(re);

var color1RGB = {
  red: rgbColors[1].split(",")[0],
  green: rgbColors[1].split(",")[1],
  blue: rgbColors[1].split(",")[2],
};

var color2RGB = {
  red: rgbColors[2].split(",")[0],
  green: rgbColors[2].split(",")[1],
  blue: rgbColors[2].split(",")[2],
};

var randomizeColor = document.querySelector("button.randomizeBtn");

color1.color.rgb = { r: color1RGB.red, g: color1RGB.green, b: color1RGB.blue };
color2.color.rgb = { r: color2RGB.red, g: color2RGB.green, b: color2RGB.blue };
displayGradientProperty();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRGB() {
  return { r: getRandomInt(256), g: getRandomInt(256), b: getRandomInt(256) };
}

function setRandomColors() {
  color1.color.rgb = getRGB();
  color2.color.rgb = getRGB();
}

function displayGradientProperty() {
  const gradientString = `linear-gradient(to right, ${color1.color.rgbString}, ${color2.color.rgbString})`;
  body.style.background = gradientString;
  css.textContent = `${gradientString};`;
}

function linearGradient() {
  displayGradientProperty();
}

color1.on("color:change", linearGradient);
color2.on("color:change", linearGradient);
randomizeColor.addEventListener("click", setRandomColors);
