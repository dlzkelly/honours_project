url = "https://api.myjson.com/bins/19esd2";
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
    var n = jsonResponse.categories.length; 
    
    console.log(jsonResponse.categories.length);

    document.getElementById("categorySection").innerHTML = "Hello";

    var j=1;

    n = 5;
    for(var i = 1; i < n; i++) {
        document.getElementById("categorySection").innerHtml+='<div class="row">';
        console.log("we made it" + n);
        for(k = 0; k < n; k++) {
            document.getElementById("categorySection").innerHtml+='<div class="gridsquare">' + (j++) + '</div>';
        }
    
        document.getElementById("categorySection").innerHtml+='</div>';
     }  
  });

//   var n=4;//take grid column value as you want
// var j=1;

// for(var i = 1; i < n; i++) {
//     document.body.innerHTML+='<div class="row">';

//     for(k = 0; k < n; k++) {
//         document.body.innerHTML+='<div class="gridsquare">' + (j++) + '</div>';
//     }

//     document.body.innerHTML+='</div>';
// }





