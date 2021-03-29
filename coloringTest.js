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

class Part{
    constructor(type, name, color, accent) {
         this.type = type;     //part type; tail, body, etc
         this.name = name;     //image name
         this.color = color;   //color input id
         this.accent = accent; //color input id
    }
}

class Creature{
    constructor(tail, backExtra, body, pattern, legs, frontExtra) {
         this.tail = tail;              //a part
         this.backExtra = backExtra;    //array of parts
         this.body = body;              //a part
         this.pattern = pattern;        //a part
         this.frontExtra = frontExtra;  //array of parts
    }
}

//give name of part and returns image link to part image
function findImage(name){
    return "https://pinkflamess.github.io/" + name + ".PNG";
}

//give a this.part, draws and colors image, creates a new canvas
//figure out how to make a function return a canvas
function colorImage(part,num){
    let imgEle = findImage(part.name); //gets image url
    canv = document.createElement("Canvas");
    addEffect(part.color,part.accent,imgEle,canv);
}

function mergeCanvas (canMerge, can){
    /*let mergedCans = //canvas obj
    draw canMerge onto mergedCans
    draw can onto mergedCans
    return mergedCans
    */
}

function mergeParts(){
    //maybe make this a for loop that goes through each
    //var of Character and put the canvases in an array
    let can1 = colorImage(this.tail);
    let can2 = colorImage(this.backExtra);
    let can3 = colorImage(this.body);
    let can4 = colorImage(this.pattern);
    let can5 = colorImage(this.tail);
    /*
    var canvases = this.constructorLength()
    for(int i = 0; i<this.constLen ; i++){ //change this to array for loop style
        canvases[i] = colorImage(this.[i]);
    }
    */

    //make a for loop that combines all canvases together
    /*let mainCanvas = context. //blah blah canvas stuff
    merge can1 to mainCanvas
    merge can2 to mainCanvas
    ... so on
    for each(canvas : canvases){
        mainCanvas = mergeCanvas(mainCanvas, canvas);
    }
    document.getId("creature") = mainCanvas;
    */
}

//https://stackoverflow.com/questions/29551841/merge-multiple-canvases-and-download-as-image

/*
<script>
let imgEle1 = document.querySelectorAll(".image")[0];
let imgEle2 = document.querySelectorAll(".image")[1];
let resEle = document.querySelector(".result");
var context = resEle.getContext("2d");
let BtnEle = document.querySelector(".Btn");
BtnEle.addEventListener("click", () => {
resEle.width = imgEle1.width;
   resEle.height = imgEle1.height;
   context.globalAlpha = 1.0;
   context.drawImage(imgEle1, 0, 0);
   context.globalAlpha = 1.0;
   context.drawImage(imgEle2, 0, 0);
});
</script>
*/

window.addEventListener('load', init);
