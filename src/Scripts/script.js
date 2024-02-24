var modal = document.getElementById("plusModal");
var plus = document.getElementById("plus");
var eText = document.getElementById('exploreText');
var moreDet = document.getElementById('moreDetailsText');
var closeM = document.getElementsByClassName("close")[0];


plus.onclick() = function() {
  modal.style.display = "block";
    if (eText.style.display == 'none') {
        eText.style.display = 'block';
    } else {
        eText.style.display = 'none';
    }
    if (moreDet.style.display == 'none') {
        moreDet.style.display = 'block';
    } else {
        moreDet.style.display = 'none';
    }
    if (plus.style.display == 'none') {
        plus.style.display = 'block';
    } else {
       plus.style.display = 'none';
    }
}


// When the user clicks on <span> (x), close the modal
closeM.onclick() = function() {
  modal.style.display = "none";
  if (eText.style.display == 'none') {
    eText.style.display = 'block';
} else {
    eText.style.display = 'none';
}
if (moreDet.style.display == 'none') {
    moreDet.style.display = 'block';
} else {
    moreDet.style.display = 'none';
}
if (plus.style.display == 'none') {
    plus.style.display = 'block';
} else {
   plus.style.display = 'none';
}
}
