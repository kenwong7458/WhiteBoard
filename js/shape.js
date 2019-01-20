var last_mousex = last_mousey = 0
var mousedown = false

var rectangle = document.getElementById("rectangle")
var circle = document.getElementById("circle")
var triangle_RHS = document.getElementById("triangle_RHS")

rectangle.addEventListener("click", function () {
    //mouse down
    canvas.onmousedown = function(e) {
      console.log("mouse down in rectangle")
      saveToHistory()
      dragging = false
      last_mouseX = e.clientX
      last_mouseY = e.clientY
    }

    //mouseup
    canvas.onmouseup = function(e) {
      console.log("mouse up in rectangle")
      draggin = false
      var mouseX = e.clientX
      var mouseY = e.clientY

      var width = mouseX - last_mouseX
      var height = mouseY - last_mouseY

      context.beginPath()
      context.rect(last_mouseX,last_mouseY,width,height)
      context.stroke()
      saveCurrentState()

    }
})

circle.addEventListener("click", function() {
  canvas.onmousedown = function(e) {
      console.log("mouse down in circle")
      saveToHistory()
      dragging = false
      lastX = e.clientX
      lastY = e.clientY

  }

  canvas.onmouseup = function(e) {
    console.log("mouse up in circle")
    dragging = false
    var mouseX = e.clientX
    var mouseY = e.clientY
    var circleRadius = Math.sqrt(Math.pow(mouseX-lastX, 2) + Math.pow(mouseY-lastY, 2))
    context.beginPath()
    context.arc(lastX, lastY, circleRadius, 0, Math.PI * 2)
    context.stroke()
    saveCurrentState()
  }

})

triangle_RHS.addEventListener("click", function() {
  canvas.onmousedown = function(e) {
      console.log("mouse down in RHS")
      saveToHistory()
      dragging = false
      lastX = e.clientX
      lastY = e.clientY

  }

  canvas.onmouseup = function(e) {
    console.log("mouse up in RHS")
    dragging = false
    var mouseX = e.clientX
    var mouseY = e.clientY
    var z = Math.sqrt(Math.pow(mouseX-lastX, 2) + Math.pow(mouseY-lastY, 2))
    context.beginPath()
    context.moveTo(lastX, lastY)
    context.lineTo(mouseX, mouseY)
    context.lineTo(mouseX, lastY)
    context.closePath()
    context.stroke()
    saveCurrentState()
  }

})
