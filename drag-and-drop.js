var canvas = document.getElementById("canvas")
context = canvas.getContext("2d")
var img = document.createElement("img")
var mouseDown = false
//var brushColor = "rgb(0, 0, 0)"
var hasText = true
var clearCanvas = function () {
  if (hasText) {
    context.clearRect(0, 0, canvas.width, canvas.height)
    hasText = false
  }
}

img.addEventListener("load", function () {
  clearCanvas()
  context.drawImage(img, 0, 0)
}, false)

canvas.addEventListener("dragover", function (evt) {
  evt.preventDefault()
}, false)

canvas.addEventListener("drop", function(evt) {
  var files = evt.dataTransfer.files

  if(files.length > 0) {
    var file = files[0]
    if(typeof FileReader !== "undefined" && file.type.indexOf("image") != -1) {
      var reader = new FileReader()
      reader.onload = function(evt) {
        img.src = evt.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  evt.preventDefault()
}, false)

canvas.addEventListener("mousedown", function (evt) {

  mouseDown = true

}, false)

canvas.addEventListener("mouseup", function (evt) {
  mouseDown = false

})
