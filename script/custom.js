////////////////////////////
// GLOBAL VARIABLES
////////////////////////////
let helpBtn = document.querySelector('#help-div');
let helpModal = document.querySelector('#overlay');
let xOut = document.querySelector('#close-icon');
let burgNav = document.querySelector('#burger-nav-div');
let burgMenu = document.querySelector('#mobi-nav-menu');
let xOutNav = document.querySelector('#mobi-nav-icon');

////////////////////////////
// MOBILE NAVIGATION
////////////////////////////
burgNav.addEventListener('click', function() {
  burgMenu.style.right = (0);
});

xOutNav.addEventListener('click', function() {
  burgMenu.style.right = ('-100%');

})

////////////////////////////
// I NEED HELP BUTTON
////////////////////////////
helpBtn.addEventListener('click', function() {
  helpModal.style.display = ('block')
});

////////////////////////////
// I NEED HELP OVERLAY
////////////////////////////
xOut.addEventListener('click', function() {
  helpModal.style.display = ('none');
});
