var redoButton = document.getElementById("redo")
redoButton.addEventListener("click", function () {
  var lastPoint_UndoStack = objectOfHistory.redoStack.pop()
  objectOfHistory.undoStack.push(lastPoint_UndoStack)

  context.clearRect(0, 0, canvas.width, canvas.height)

  var imageObj = new Image()
  imageObj.onload = function() {
    context.drawImage(imageObj, canvas.width/2 - imageObj.width/2,
                                canvas.height/2 - imageObj.height/2)
  }
  imageObj.src = lastPoint_UndoStack

})
