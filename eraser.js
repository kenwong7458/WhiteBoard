var earserButton = document.getElementById("eraser")
earserButton.addEventListener("click", function() {
  context.globalCompositeOperation="destination-out"
  saveState()

})
