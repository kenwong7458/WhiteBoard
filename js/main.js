var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")

var radius = 10
var dragging = false

var canDraw = true

canvas.width = window.innerWidth
canvas.height = window.innerHeight

canvas.style.left = "0px"
canvas.style.top = "0px"

context.lineWidth = radius*2

var historyAsObject = { "currentStack":[], "undoStack":[], "redoStack":[] }

//saveCurrentState()
initialState()
/*
  canvas.onmousemove = function(e) {
    if(dragging) {
      console.log("mouse dragging")
      context.beginPath()
      context.lineTo(e.clientX, e.clientY)
      context.stroke()
      context.beginPath()
      context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2)
      context.fill()
      context.beginPath()
      context.moveTo(e.clientX, e.clientY)
    }
  }

  canvas.onmousedown = function(e) {
    console.log("mouse down")
    // add current to undo
    //var dataURL = historyAsObject.currentStack.pop()
    //historyAsObject.undoStack.push(dataURL)
    saveToHistory()
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
    //context.beginPath()
    //putPoint(e)
  }

  canvas.onmouseup = function() {
    console.log("mouse up")
    dragging = false
    //context.beginPath()
    saveCurrentState()
  }


/*
canvas.addEventListener("mousedown", engage)
canvas.addEventListener("mousemove", putPoint)
canvas.addEventListener("mouseup", disengage)
*/
var clearButton = document.getElementById("clearAll")
clearButton.addEventListener("click", function() {
  if (confirm("Are you sure you want to clear this WhiteBoard?")) {
    location.reload()
  }
})
