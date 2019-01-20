var redoButton = document.getElementById("redo")
redoButton.addEventListener("click", function () {
  if (historyAsObject.redoStack.length > 0) {
    //saveToHistory()
    var before_redo_point = canvas.toDataURL("image/png")
    var lastPoint_RedoStack = historyAsObject.redoStack.pop()
    context.clearRect(0, 0, canvas.width, canvas.height)

    var imageObj = new Image()
    imageObj.onload = function() {
      context.drawImage(imageObj, canvas.width/2 - imageObj.width/2,
                                  canvas.height/2 - imageObj.height/2)
    }
    imageObj.src = lastPoint_RedoStack

    historyAsObject.undoStack.push(before_redo_point)
    saveCurrentState()
  }
})
