// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('card-img');
var modalImg = document.getElementById('img01');
var i;
for (i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal when the user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
