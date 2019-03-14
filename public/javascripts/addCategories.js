url = "https://api.myjson.com/bins/19esd2";
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

        document.body.innerHTML+='<div class="gridsquare" id=' + divID + ' ">'
        + (j++) + jsonResponse.categories[i].name
         + '</div>';

        img = document.createElement("img");
        img.src = jsonResponse.categories[i].image.replace(/public/, '');

        src = document.getElementById(divID);
        src.appendChild(img);

        console.log("divID: " + divID);
        console.log("image source: " + img.src);
        console.log("placing source: " + src);
        console.log("\n");



     }  
  });







