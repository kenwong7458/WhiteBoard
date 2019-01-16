var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")

var radius = 10
var dragging = false

canvas.width = window.innerWidth
canvas.height = window.innerHeight

canvas.style.left = "0px"
canvas.style.top = "0px"

context.lineWidth = radius*2

var objectOfHistory = { "undoStack":[], "redoStack":[] }

function saveState() {
  var dataURL = canvas.toDataURL("image/png")
  objectOfHistory.undoStack.push(dataURL)
}

saveState()

var putPoint = function(e) {
  if(dragging) {
    context.lineTo(e.clientX, e.clientY)
    context.stroke()
    context.beginPath()
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2)
    context.fill()
    context.beginPath()
    context.moveTo(e.clientX, e.clientY)
  }


}

var engage = function(e) {
  lastX = e.clientX
  lastY = e.clientY
  dragging = true
  putPoint(e)
}

var disengage = function() {
  dragging = false
  context.beginPath()
  saveState()
}

canvas.addEventListener("mousedown", engage)
canvas.addEventListener("mousemove", putPoint)
canvas.addEventListener("mouseup", disengage)

var clearButton = document.getElementById("clearAll")
clearButton.addEventListener("click", function() {
  if (confirm("Are you sure you want to clear this WhiteBoard?")) {
    location.reload()
  }
})



        //document.getElementById('files').addEventListener('change', handleFileSelect, false);
