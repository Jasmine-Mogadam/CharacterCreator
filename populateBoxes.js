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
    var name = $(this).attr('name');
    let costumes = $(this).attr('costumes').split(",");

    var strToAppend = '' +
    '<label for=' + name + '>' + name + ':</label><br>' +
    '<select id=' + name + ' name=' + name + ' onchange="update()">';

    costumes.forEach((c) => {
      strToAppend += '<option value='+ c +'>'+ c +'</option>';
    });

    strToAppend += '</select><br>' +
    '<label for="color">'+name+' Color:</label><br>' +
    '<input type="color" id="color' + id + '" name="' + name + ' color" onchange="update()">';

    $(this).append(strToAppend);
  });

  // For each object div, create a script to change costumes
  $('.objectScript').each(function() {
    var id = $(this).attr('id');
    let costumes = $(this).attr('costumes').split(",");

    var strToAppend = '<script>function update(){' +
    'var form = document.getElementById("form");' +
    'var image = "body.PNG";' +
    'if(form.elements[' + id + '].value==="' + costumes[0] + '"){' +
    '  image = "' + costumes[0] + '.PNG";}';

    for (let i = 1; i < costumes.length; i++) {
      strToAppend += 'else if(form.elements[' + id + '].value==="' + costumes[i] + '"){' +
      'image = "' + costumes[i] + '.PNG";}';
    }

    strToAppend += 'document.getElementById("creature").src = image;}</script>';

    $(this).append(strToAppend);
  });

});
