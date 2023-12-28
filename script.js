function nextPage() {
    window.location.href = "yes.html";
  }
  var initialWidth = document.getElementById("noButton").offsetWidth;
  var initialHeight = document.getElementById("noButton").offsetHeight;
  function move_resizeButton() {
    var x =
      Math.random() *
        (window.innerWidth -
          document.getElementById("noButton").offsetWidth) -
      85;
    var y =
      Math.random() *
        (window.innerHeight -
          document.getElementById("noButton").offsetHeight) -
      48;
    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
    initialWidth -= 5;
      initialHeight -= 5;
      document.getElementById("noButton").style.width = `${Math.max(initialWidth, 0)}px`;
      document.getElementById("noButton").style.height = `${Math.max(initialHeight, 0)}px`;
      if (initialWidth <= 0 || initialHeight <= 0) {
        // Hide the button
        document.getElementById("noButton").style.display = "none";
      }
  }
