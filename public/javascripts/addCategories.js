url = "https://api.myjson.com/bins/1cch5a";
var subCats;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {

    var n=35;
    var j=1;
    
    var src;
    var img;
    for(var i = 0; i < n; i++) {
        nameFormatted = jsonResponse.categories[i].name.split(' ').join('_').replace(/,/g, '').toLowerCase().replace(/&_/, '');
        divID = "square_" + nameFormatted;

        subCats = jsonResponse.categories[i].subcategories;

        document.getElementById("categorySection").innerHTML+='<div class="gridsquare" onClick="RunGenerator('+ i + ')" style="font-style: bold; font-size: 10px; padding: 5px;" id=' + divID + ' ">'
         + jsonResponse.categories[i].name
        //  + '<button onClick="RunGenerator('+ i + ')"></button> </div>';
        + '</div>';

        img = document.createElement("img");
        img.src = jsonResponse.categories[i].image.replace(/\/public/, '');

        src = document.getElementById(divID);
        src.appendChild(img);
    } 
  });



  


  







