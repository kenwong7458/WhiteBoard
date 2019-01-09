var downloadButton = document.getElementById("btn-download")
downloadButton.addEventListener("click", function(e) {
    var dataURL = canvas.toDataURL("image/png")
    downloadButton.href = dataURL
})
