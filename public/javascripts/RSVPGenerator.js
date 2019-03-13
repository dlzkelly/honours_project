var i = 0;
var text = ["This", "is", "my", "rapid", "serial", "visual", "presentation", "sequence."];
var speed = 100;
var functionRunning = false;

function GenerateRSVP(){
    for(var i = 0; i < text.length; i++){

      setTimeout(function(word){
        document.getElementById('paragraph').innerHTML = word;
      }, 100 * i, text[i]);

    }
}



 
