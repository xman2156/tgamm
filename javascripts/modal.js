var spacer = document.getElementsByClassName("spacer");
var modal = document.getElementById("info");
var btn = document.getElementById("infoBtn");
var closeBtn = document.getElementsByClassName("close")[0];
var body = document.body.style;
var i;

function dim() {
  body.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('images/background.webp')";
  body.backgroundColor = "#4d4c48";
  body.backgroundSize = "cover";
  body.backgroundRepeat = "no-repeat";
  body.backgroundPosition = "center";
  body.backgroundAttachment = "fixed";
  body.overflow = "hidden";
  body.color = "#a69000";
  for (i=0; i < spacer.length; i++) {
    spacer[i].style.background = "#a69000";
  }
}

function bright() {
  body.background = "url('images/background.webp')";
  body.backgroundColor = "#4d4c48";
  body.backgroundSize = "cover";
  body.backgroundRepeat = "no-repeat";
  body.backgroundPosition = "center";
  body.backgroundAttachment = "fixed";
  body.overflow = "visible";
  body.color = "#FFDE00";
  for (i=0; i < spacer.length; i++) {
    spacer[i].style.background = "#FFDE00";
  }
}

btn.onclick = function() {
  modal.style.display = "block";
  dim()
}

closeBtn.onclick = function() {
  modal.style.display = "none";
  bright()
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    bright()
  }
}