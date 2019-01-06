var button = document.getElementById("save")
button.addEventListener("click", function(e) {
    var dataURL = canvas.toDataURL("image/png")
    button.href = dataURL
})
