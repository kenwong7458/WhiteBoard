function initialState() {
  var dataURL = canvas.toDataURL("image/png")
  //historyAsObject.undoStack.push(dataURL)
  historyAsObject.currentStack.push(dataURL)
}


function saveCurrentState() {

  if (historyAsObject.currentStack.length > 0) {
    for (var i=0; i<=historyAsObject.currentStack.length; i++) {
      var dataURL = historyAsObject.currentStack.shift()
      //historyAsObject.undoStack.push(dataURL)
    }
  }

  var dataURL = canvas.toDataURL("image/png")
  historyAsObject.currentStack.push(dataURL)
}

function saveToHistory() {
  if (historyAsObject.undoStack.length >= 100) {
    historyAsObject.undoStack.shift()
  }

  if (historyAsObject.redoStack.length >= 100) {
    historyAsObject.redoStack.shift()
  }

  if (historyAsObject.currentStack.length > 0) {
    var dataURL = canvas.toDataURL("image/png")
    historyAsObject.undoStack.push(dataURL)
  }
}
