class Creature{
    constructor(tail, backExtra, body, pattern, legs, frontExtra) {
         this.tail = tail;
         this.backExtra = backExtra;  //array of strings
         this.body = body;
         this.pattern = pattern;
         this.frontExtra = frontExtra; //array of strings
    }
}

//give name of part and returns image link to part image
function findImage(name){
    return "https://pinkflamess.github.io" + name + ".PNG";
}

//give a this.part, draws and colors image, creates a new canvas
//figure out how to make a function return a canvas
function colorImage(part){
    let imgEle = findImage(part);
    //--coloring.js stuff--//
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
