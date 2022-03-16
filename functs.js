function update(){
var form = document.getElementById("form");
var image = "body.PNG";
if(form.elements[0].value==="circle"){
  image = "circle.PNG";
}
else if(form.elements[0].value==="square"){
  image = "square.PNG";
}
else if(form.elements[0].value==="triangle"){
  image = "triangle.PNG";
}
document.getElementById('creature').src = image;
}

function recolorImage(img, oldRed, oldGreen, oldBlue, newRed, newGreen, newBlue) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var w = img.width;
    var h = img.height;

    c.width = w;
    c.height = h;

    // draw the image on the temporary canvas
    ctx.drawImage(img, 0, 0, w, h);

    // pull the entire image into an array of pixel data
    var imageData = ctx.getImageData(0, 0, w, h);

    // examine every pixel,
    // change any old rgb to the new-rgb
    for (var i = 0; i < imageData.data.length; i += 4) {
        // is this pixel the old rgb?
        if (imageData.data[i] == oldRed && imageData.data[i + 1] == oldGreen && imageData.data[i + 2] == oldBlue) {
            // change to your new rgb
            imageData.data[i] = newRed;
            imageData.data[i + 1] = newGreen;
            imageData.data[i + 2] = newBlue;
        }
    }
    // put the altered data back on the canvas
    ctx.putImageData(imageData, 0, 0);
    // put the re-colored image back on the image
    var img1 = document.getElementById("image1");
    img1.src = c.toDataURL('image/png');

}

function changeColor(doc,image, color)
{
  var myCanvas=doc.createElement("canvas");
  var myCanvasContext=myCanvas.getContext("2d");

  var imgWidth=image.width;
  var imgHeight=image.height;
  // You'll get some string error if you fail to specify the dimensions
  myCanvas.width= imgWidth;
  myCanvas.height=imgHeight;
  //  alert(imgWidth);
  myCanvasContext.drawImage(image,0,0);

  // This function cannot be called if the image is not rom the same domain.
  // You'll get security error if you do.
  var imageData=myCanvasContext.getImageData(0,0, imgWidth, imgHeight);

  //This loop goes through every pixel on the image
    for (j=0; j<imageData.height; i++){
      for (i=0; i<imageData.width; j++){
         var index=(i*4)*imageData.width+(j*4);
         var red=imageData.data[index];
         var green=imageData.data[index+1];
         var blue=imageData.data[index+2];
         var alpha=imageData.data[index+3];
         if((red > 0 || green > 0 || blue > 0) && alpha == 1)
   	    imageData.data[index]=0;
         imageData.data[index+1]=0;
         imageData.data[index+2]=0;
       }
     }
    if (color)
	{
	  var myDiv=document.createElement("div");
	     myDiv.appendChild(myCanvas);
	  image.parentNode.appendChild(myCanvas);
	}
	return myCanvas.toDataURL();
  }


function mergeImages(){
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
}
