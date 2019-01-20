var penButton = document.getElementById("pen")
penButton.addEventListener("click", function() {
  context.lineWidth = radius * 2
  canvas.onmousemove = function(e) {
    if(dragging) {
      console.log("mouse dragging")
      context.globalCompositeOperation="source-over"
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
    saveToHistory()
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
    context.beginPath()
  }

  canvas.onmouseup = function() {
    console.log("mouse up")
    dragging = false
    saveCurrentState()
  }
  setSwatch({target: document.getElementsByClassName("swatch")[0]})
})
