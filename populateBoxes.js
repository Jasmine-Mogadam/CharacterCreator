/*A bunch of images layered on each other (all same size)

//creates object with multiple costumes and color changing attribute
// !!MUST BE IN ORDER OF Z!!
createObject(referenceName, costumes[names][images])
  - make multi select box
  - make paired color change box

//compiles all pngs into one image file
exportPNG(arrOfrefs[])
  - create js canvas
  - for loop all those suckers together (in z-order!!)*/

$(document).ready(function(){

  // For each object div, create a form <select> with each costume and creates a color changer box
  $('.objectForm').each(function() {
    var id = $(this).attr('id');
    var names = $(this).attr('names').split(",");
    var costumes = $(this).attr('costumes').split(",");

    var strToAppend = '' +
    '<label for='+ id+'>'+id+':</label><br>' +
    '<select id='+ id+' name='+ id+' onchange="update()">';

    names.forEach((n) => {
      strToAppend += '<option value='+ n+'>'+ n+'</option>';
    });

    strToAppend += '</select><br>' +
    '<label for="color">'+id+' Color:</label><br>' +
    '<input type="color" id="color" name="color" onchange="update()">';

    $(this).append(strToAppend);
  });

  // For each object div, create a script to change costumes
  $('.objectScript').each(function() {
    var id = $(this).attr('id');
    var names = $(this).attr('names').split(",");
    var costumes = $(this).attr('costumes').split(",");

    var strToAppend = '<script>function update(){' +
    'var form = document.getElementById("form");' +
    'var image = "body.PNG";' +
    'if(form.elements[0].value==="circle"){' +
    '  image = "https://pinkflamess.github.io/circle.PNG";}' +

    names.forEach((n) => {
      strToAppend += 'else if(form.elements[0].value==="square"){' +
      'image = "https://pinkflamess.github.io/circle.PNG";}';
    });

    strToAppend += 'document.getElementById('creature').src = image;}</script>';

    $(this).append(strToAppend);
  });

}
