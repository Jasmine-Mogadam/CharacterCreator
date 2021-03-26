class Creature{
  constructor(shape, limb, colorShape, colorLimb) {
    this.shape = shape;
    this.limb = limb;
    this.colorShape = colorShape;
    this.colorLimb = colorLimb
  }
  img Show(){
    let imgEle1 = ""+shape+".PNG";
    let imgEle2 = ""+shape+"-"+limb+".PNG";
    let resEle = document.querySelector(".result");
    var context = resEle.getContext("2d");
    resEle.width = imgEle1.width;
       resEle.height = imgEle1.height;
       context.globalAlpha = 1.0;
       context.drawImage(imgEle1, 0, 0);
       context.globalAlpha = 1.0;
       context.drawImage(imgEle2, 0, 0);
  }
}

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
