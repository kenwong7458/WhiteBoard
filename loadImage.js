// Reference: https://www.html5rocks.com/zh/tutorials/file/dndfiles/
var loadImg = document.getElementById("files")
loadImg.addEventListener("change", function(evt) {
    var files = evt.target.files // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader()

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          //Render the image to canvas.
          var imageObj = new Image()
          imageObj.onload = function() {
              context.drawImage(imageObj, canvas.width/2 - imageObj.width/2,
                                          canvas.height/2 - imageObj.height/2)
          }
          imageObj.src = e.target.result
        }

      })(f)

      // Read in the image file as a data URL.
      reader.readAsDataURL(f)

    }
    saveState()


}, false)
