////////////////////////////
// GLOBAL VARIABLES
////////////////////////////
let helpBtn = document.querySelector('#help-div');
let helpModal = document.querySelector('#overlay');
let xOut = document.querySelector('#close-icon');


////////////////////////////
// I NEED HELP BUTTON
////////////////////////////
helpBtn.addEventListener('click', function() {
  helpModal.style.display = ('block')
})

////////////////////////////
// I NEED HELP OVERLAY
////////////////////////////
xOut.addEventListener('click', function() {
  helpModal.style.display = ('none');
})
