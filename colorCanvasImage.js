var effectButton;
var paintButton;
var canvas;
var context;

function init() {
  var image = document.getElementById('creature');
  effectButton = document.getElementById('EffectButton');
  paintButton = document.getElementById('PaintButton');
  canvas = document.getElementById('Canvas');
  context = canvas.getContext('2d');

  // Set the canvas the same width and height of the image
  canvas.width = 500;
  canvas.height = 500;
  canvas.width = image.width;
  canvas.height = image.height;
  drawImage(image);

  //updates color every 10 miliseconds
    let loop = setInterval(addEffect, 50);
}

function drawImage(image) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0);
}

function addEffect() {
    var image = document.getElementById('creature');
    drawImage(image);
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    changeToColor(imageData.data);
    context.putImageData(imageData, 0, 0);
}

//function credit - https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return {r,g,b,alpha};
    } else {
        return [r,g,b];
    }
}

function changeToColor(data) {
  const colors = hexToRGB(document.getElementById("color0").value,false);
  for (var i = 0; i < data.length; i+=4 ) {
    if(data[i]!=0||data[i+3]==0){
      data[i] = colors[0];
      data[i+1] = colors[1];
      data[i+2] = colors[2];
    }
  }
}

window.addEventListener('load', init);

/*

** OLD CODE FOR ACCENT COLORS **

var canvas;
var context;

function init() {
  var image = document.getElementById('creature');
  effectButton = document.getElementById('EffectButton');
  paintButton = document.getElementById('PaintButton');
  canvas = document.getElementById('Canvas');
  context = canvas.getContext('2d');

  // Set the canvas the same width and height of the image
  canvas.width = image.width;
  canvas.height = image.height;
  drawImage(image);
  //updates color every 10 miliseconds
  //let loop = setInterval(addEffect, 10);
}

function drawImage(image,cont) {
  cont.clearRect(0, 0, canvas.width, canvas.height);
  cont.drawImage(image, 0, 0);
}

function addEffect(colorID,accentID,image,canv) {
    cont = canv.getContext('2d');
    drawImage(image,cont);
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    changeToColor(imageData.data,colorID,accentID);
    canv.putImageData(imageData, 0, 0);
}

//function credit - https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return {r,g,b,alpha};
    } else {
        return [r,g,b];
    }
}

function changeToColor(data,colorID,accentID) {
  const color = hexToRGB(document.getElementById("color"+colorID).value,false);
  const accent = hexToRGB(document.getElementById("accent"+accentID).value,false);
  for (var i = 0; i < data.length; i+=4 ) {
    if(data[i]!=0||data[i+3]==0){
      if(data[i+1]==255){
        data[i] = color[0];
        data[i+1] = color[1];
        data[i+2] = color[2];
      }
      if(data[i]==255){
        data[i] = accent[0];
        data[i+1] = accent[1];
        data[i+2] = accent[2];
      }
    }
  }
}

window.addEventListener('load', init);*/
