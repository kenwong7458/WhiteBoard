var last_mousex = last_mousey = 0
var mousedown = false
var rectangle = document.getElementById("rectangle")
rectangle.addEventListener("click", function () {

    //Mousedown
    canvas.onmousedown = function(e) {
      last_mousex = e.clientX
      last_mousey = e.clientY
      mousedown = true;
    }

    //Mouseup
    canvas.onmouseup = function(e) {
      mousedown = false;
    }

    //Mousemove
    canvas.onmousemove = function(e) {
      mousex = e.clientX
      mousey = e.clientY
      if(mousedown == true) {
          context.clearRect(0,0,canvas.width,canvas.height) //clear canvas
          context.beginPath()
          var width = mousex-last_mousex
          var height = mousey-last_mousey
          context.rect(last_mousex,last_mousey,width,height)
          context.strokeStyle = 'black'
          context.lineWidth = 10
          context.stroke()
          context.restore()
      }

    }

})
