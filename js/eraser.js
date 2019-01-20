var earserButton = document.getElementById("eraser")
earserButton.addEventListener("click", function() {
  context.lineWidth = radius * 2

  var active = document.getElementsByClassName("active")[0] //remove active status of color
  if (active) {
    active.className = "swatch"
  }

  canvas.onmousemove = function(e) {
    if(dragging) {
      console.log("mouse dragging in eraser")
      context.globalCompositeOperation="destination-out"
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
    console.log("mouse down in eraser")
    saveToHistory()
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
    context.save()
    context.beginPath()
  }

  canvas.onmouseup = function() {
    console.log("mouse up in eraser")
    dragging = false
    context.restore()
    saveCurrentState()
  }
})
