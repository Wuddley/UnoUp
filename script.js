var score = 0;
var clickPower = 0;

function scoreClick(number){
  score = score + number;
  score = score + clickPower;
document.getElementById("score").innerHTML = score;
};

function addClickPower(){
  var clickPowerCost = Math.floor(10*Math.pow(1.5,clickPower));
  if (score>=clickPowerCost){
    clickPower = clickPower +1;
    score = score - clickPowerCost;
    document.getElementById('score').innerHTML = score;
  };
  var nextClickPowerCost = Math.floor(10*Math.pow(1.5,clickPower));
    document.getElementById('nextClickPowerCost').innerHTML = nextClickPowerCost;
  var currentClickPower = clickPower + 1;
    document.getElementById('currentClickPower').innerHTML = currentClickPower;
}
