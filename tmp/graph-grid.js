var graphGrid = document.getElementById("graph-grid")
graphGrid.addEventListener("click", function () {
    var canvas1 = document.getElementById("grid-canvas")
    var context1 = canvas1.getContext("2d")
    var imageObj = new Image()

    imageObj.onload = function() {
      context1.drawImage(imageObj, 0, 0, canvas.width, canvas.height)
    }

    imageObj.src = "thumbnail/graph-grid-transparent.png"

})
