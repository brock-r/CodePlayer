var start = new Date().getTime();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var scores = [];


function reset(){

    var top = Math.random() * 450;

    var left = Math.random() * 450;

    var width = (Math.random() * 200) + 100 ;

    if(Math.random() > 0.5){

        document.getElementById("shape").style.borderRadius = "50%";
    } else{
        document.getElementById("shape").style.borderRadius = "0";
    }

    document.getElementById("shape").style.top = top + "px";

    document.getElementById("shape").style.left = left + "px";

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.height = width + "px";

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();

}

function appear(){

    setTimeout(reset, Math.random() * 2000);

}

document.getElementById("start").onclick = function(){
    appear();  
}

document.getElementById("shape").onclick = function(){

    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();

    var time = (end - start) / 1000;

    document.getElementById("tt").innerHTML = time + "s";

    scores.push(time);

    document.getElementById("score").style.display = "block";
    document.getElementById("place").innerHTML = document.getElementById("name").value;

    document.getElementById("listv").innerHTML = "";

    var tstring = "<ol>";
    scores.sort();

    var i = 0;

    while(i < scores.length && i < 5) {
        tstring = tstring + "<li>" + scores[i] + "</li>";
        i++;
    }

    document.getElementById("listv").innerHTML = document.getElementById("listv").innerHTML + tstring + "<\ol>";

    appear();

}


