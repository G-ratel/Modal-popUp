 // Get the modal, the button that opens the modal and the <span> element that closes the modal
 var modal = document.getElementById("modal");
 var btn = document.getElementById("btn");
 var span = document.getElementsByClassName("close")[0];

 // Open modal when the user clicks the button 
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // Close the modal when the user clicks on <span> (x)
 span.onclick = function() {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }