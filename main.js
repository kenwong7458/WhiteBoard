var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var radius = 10
var dragging = false

canvas.width = window.innerWidth
canvas.height = window.innerHeight

context.lineWidth = radius*2

var putPoint = function(e) {
  if(dragging) {
    context.lineTo(e.clientX, e.clientY)
    context.stroke()
    context.beginPath()
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2)
    context.fill()
    context.beginPath()
    context.moveTo(e.clientX, e.clientY)
  }
}

var engage = function(e) {
  dragging = true
  putPoint(e)
}

var disengage = function() {
  dragging = false
  context.beginPath()
}


var downloadButton = document.getElementById("btn-download")
downloadButton.addEventListener("click", function(e) {
    var dataURL = canvas.toDataURL("image/png")
    downloadButton.href = dataURL
})


var clearButton = document.getElementById("clearAll")
clearButton.addEventListener("click", function() {
  if (confirm("Are you sure you want to clear this WhiteBoard?")) {
    location.reload()
  }
})

// Reference: https://www.html5rocks.com/zh/tutorials/file/dndfiles/
var loadImg = document.getElementById('files')
loadImg.addEventListener('change', function(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          //Render the image to canvas.
          var imageObj = new Image()
          imageObj.onload = function() {
              context.drawImage(imageObj, 10,10)
          }
          imageObj.src = e.target.result
        }
      })(f)

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
}, false)

        //document.getElementById('files').addEventListener('change', handleFileSelect, false);


canvas.addEventListener("mousedown", engage)
canvas.addEventListener("mousemove", putPoint)
canvas.addEventListener("mouseup", disengage)
