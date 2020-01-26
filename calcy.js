function divide() {
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);

  document.getElementById("result").innerHTML = x + y;
}

document.getElementById("go").addEventListener("click", divide);
