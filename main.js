
$(document).ready(function() {
    var sam = $("#sam1");
    sam.css({
      "position": "absolute",
      "left": 10,
      "top":100
    })
    var isMovingRight = false;
    var isMovingLeft = false;
    var isMovingDown = false;
    var isMovingUp = false;
  
    $(document).on("keydown", function(e) {
      var kc = e.keyCode;
      if (kc == 39) {
        isMovingRight = true;
      }
      if (kc == 37) {
        isMovingLeft = true;
      }
      if (kc == 40) {
        isMovingDown = true;
      }
      if (kc == 38) {
        isMovingUp = true;
      }
    })
    $(document).on("keyup", function(e) {
      var kc = e.keyCode;
      if (kc == 39) {
        isMovingRight = false;
      }
      if (kc == 37) {
        isMovingLeft = false;
      }
      if (kc == 40) {
        isMovingDown = false;
      }
      if (kc == 38) {
        isMovingUp = false;
      }
    })
    function move() {
      if (isMovingRight) {
        sam.css("left", (sam.position().left + 10))
      }
      if (isMovingLeft) {
        sam.css("left", (sam.position().left - 10))
      }
      if (isMovingDown) {
        sam.css("top", (sam.position().top + 10))
      }
      if (isMovingUp) {
        sam.css("top", (sam.position().top - 10))
      }
    }
    setInterval(move, 10)
  })
  