var colors = ["black", "grey", "white", "red", "orange", "yellow", "green",
              "blue", "indigo", "violet"]

for(var i=0; i<colors.length; i++) {
  var swatch = document.createElement("div") //<div>...</div>
  swatch.className = "swatch"  //<div class="swatch">...</div>
  swatch.style.backgroundColor = colors[i] //<div class="swatch" style="background-color: color">...</div>
  swatch.addEventListener("click", setSwatch)
  document.getElementById("colors").appendChild(swatch)
}

function setColor(color) {
  context.fillStyle = color
  context.strokeStyle = color
  context.globalCompositeOperation="source-over"

  var active = document.getElementsByClassName("active")[0] //remove active status from one the element which is active.
  if (active) {
    active.className = "swatch"
  }

}

function setSwatch(e) {
  var swatch = e.target  //identify swatch is clicked
  setColor(swatch.style.backgroundColor)  //set color
  swatch.className += " active"  //give active class
}

//setSwatch({target: document.getElementsByClassName("swatch")[0]})
