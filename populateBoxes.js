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
    '<select id=' + name + ' name=' + name + ' onchange="update(' + id + ', \'' + costumes + '\')">';

    costumes.forEach((c) => {
      strToAppend += '<option value="'+ c +'">'+ c +'</option>';
    });

    strToAppend += '</select><br>' +
    '<label for="color' + id + '">'+name+' Color:</label><br>' +
    '<input type="color" value = "#B3B3B3" id="color' + id + '" name="' + name + ' Color" onchange="updatec(' + id + ')">';

    $(this).append(strToAppend);
  });

  // For each object div, create a canvas with a z-value of the id
  $('.objectCanvas').each(function() {
    var id = $(this).attr('id');
    let costumes = $(this).attr('costumes').split(",");

    var strToAppend = '<img id="image' + id + '" src="' + costumes[0] + '.PNG" crossorigin="Anonymous" hidden="">' +
    '<canvas class = "Canvas" id="canvas' + id + '" width="500" height="500" style="z-index:' + id + ';top:' + id*-500 + 'px;"></canvas>';

    $(this).append(strToAppend);
  });

  $('.scriptInit').each(function() {
    var max = $(this).attr('max');

    var strToAppend = '<script>\n';
    for (let i = 0; i <= max; i++) {
      strToAppend += '  loadImage("' + document.getElementById('image' + i).src + '").then(updatec(' + i + '));\n';
    }
    strToAppend += '</script>';
    $(this).append(strToAppend);
  });

  // For each object div, create two scripts; one to change costumes and another to change colors
  /*
  $('.objectScript').each(function() {
    var id = $(this).attr('id');
    let costumes = $(this).attr('costumes').split(",");

    //updates costume
    var strToAppend = '<script>var canvas' + id + ' = document.getElementById("canvas' + id + '");\n' +
    'colorCanvasImage(canvas' + id + ',' + id + ');\n' +
    'function update' + id + '(){\n' +
    '  var image = document.getElementById("image' + id + '").src;\n' +
    '  var object = document.getElementById("form").elements[' + id*2 + '].value;\n  console.log(object);\n' +
    '  if(object==="' + costumes[0] + '"){\n' +
    '    document.getElementById("image' + id + '").src = "' + costumes[0] + '.PNG";\n' +
    '    source' + id + ' = "' + costumes[0] + '.PNG"\n  }\n';
    for (let i = 1; i < costumes.length; i++) {
      strToAppend += '  else if(object==="' + costumes[i] + '"){\n' +
      '    document.getElementById("image' + id + '").src = "' + costumes[i] + '.PNG";\n' +
      '    source' + id + ' = "' + costumes[i] + '.PNG";\n  }\n';
    }
    //strToAppend += '  drawImage(canvas' + id + ',' + id + ');'
    strToAppend += '  loadImage(source' + id + ').then(updatec' + id + '());\n}\n\n';
    //updates color
    strToAppend += 'function updatec' + id + '(){\n' +
    '  colorCanvasImage(canvas' + id + ',' + id + ')\n}\n' +
    '  update' + id + '()\n</script>';
    $(this).append(strToAppend);
  });*/

});

/*
var strToAppend = '<script>var canvas' + id + ' = document.getElementById("canvas' + id + '");\n' +
'colorCanvasImage(canvas' + id + ',' + id + ');\n' +
'function update' + id + '(){\n' +
'  var image = document.getElementById("image' + id + '").src;\n' +
'  var object = document.getElementById("form").elements[' + id*2 + '].value;\nconsole.log(object);' +
'  if(object==="' + costumes[0] + '"){\n' +
'    document.getElementById("image' + id + '").src = "' + costumes[0] + '.PNG";\n  }\n';
for (let i = 1; i < costumes.length; i++) {
  strToAppend += '  else if(object==="' + costumes[i] + '"){\n' +
  '    document.getElementById("image' + id + '").src = "' + costumes[i] + '.PNG";\n  }\n';
}
*/
