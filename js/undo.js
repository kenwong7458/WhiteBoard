var undoButton = document.getElementById("undo")
undoButton.addEventListener("click", function () {
    if (historyAsObject.undoStack.length > 0) {
      //saveToHistory()
      var before_undo_point = canvas.toDataURL("image/png")
      var new_currentStack_point = historyAsObject.undoStack.pop()
      context.clearRect(0, 0, canvas.width, canvas.height)
      //saveToHistory()
      var imageObj = new Image()
      imageObj.onload = function() {
        context.drawImage(imageObj, canvas.width/2 - imageObj.width/2,
                                    canvas.height/2 - imageObj.height/2)
      }
      imageObj.src = new_currentStack_point

      historyAsObject.redoStack.push(before_undo_point)
      saveCurrentState()
    }
})
