var i = 0;
var speed = 100;
var functionRunning = false;

function RunGenerator(index){
   GenerateRSVP(index);
}
function GenerateRSVP(indexGiven)
{

  url = "https://api.myjson.com/bins/1cch5a";
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse){
    var text = jsonResponse.categories[indexGiven].subcategories;
      for(var i = 0; i < text.length; i++){
        setTimeout(function(word){
          document.getElementById('rsvp_div').innerHTML = word;
        }, 100 * i, text[i].name);
      }
     });
    }
  
 
