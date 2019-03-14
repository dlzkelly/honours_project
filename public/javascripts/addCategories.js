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
        nameNoSpaces = jsonResponse.categories[i].name.split(' ').join('_').replace(/,/g, '');
        divID = "square_" + nameNoSpaces;

        console.log("divID: " + divID);
        document.body.innerHTML+='<div class="gridsquare" id=' + divID + ' ">'
        + (j++) + jsonResponse.categories[i].name
         + '</div>';

        img = document.createElement("img");
        img.src = jsonResponse.categories[i].image;

        console.log("image source: " + img.src);
        src = document.getElementById(divID);
        console.log(src);
        src.appendChild(img);
     }  
  });







