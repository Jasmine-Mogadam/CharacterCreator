var effectButton;
var paintButton;
var canvas;
var context;

function init() {
  var image1 = document.getElementById('shape');
  var image2 = document.getElementById('limb');
  effectButton = document.getElementById('EffectButton');
  paintButton = document.getElementById('PaintButton');
  canvas = document.getElementById('Canvas');
  context = canvas.getContext('2d');

  // Set the canvas the same width and height of the image
  canvas.width = image1.width;
  canvas.height = image1.height;
  drawImage(image1,image2);

  //updates color every 10 miliseconds
    let loop = setInterval(addEffect, 10);
}

function drawImage(image1,image2) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.globalAlpha = 1.0;
  context.drawImage(image1, 0, 0);
  context.globalAlpha = 1.0;
  context.drawImage(image2, 0, 0);

  //context.drawImage(image, 0, 0);
}

function addEffect() {
  var image1 = document.getElementById('shape');
  var image2 = document.getElementById('limb');
    drawImage(image1,image2);
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
  const colors = hexToRGB(document.getElementById("color").value,false);
  for (var i = 0; i < data.length; i+=4 ) {
    if(data[i]!=0||data[i+3]==0){
      data[i] = colors[0];
      data[i+1] = colors[1];
      data[i+2] = colors[2];
    }
  }
}

window.addEventListener('load', init);
