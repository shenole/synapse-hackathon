////////////////////////////
// GLOBAL VARIABLES
////////////////////////////
let helpBtn = document.querySelector('#help-div');
let helpBtnTwo = document.querySelector('#help-div-two');
let xOut = document.querySelector('#exit-bot');
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
helpBtn.addEventListener('click', function activeBot() {
  document.querySelector('#chatbot-div').classList.toggle('rise');
  if(document.querySelector('#chatbot-div').classList == 'rise') {
    document.querySelector('#help-text').textContent = 'Close Chatbot';
  } else (document.querySelector('#help-text').textContent = 'I Need Help')
});

////////////////////////////
// I NEED HELP BUTTON TWO
////////////////////////////
helpBtnTwo.addEventListener('click', function activeBotTwo() {
  document.querySelector('#chatbot-div').classList.toggle('rise');
  if(document.querySelector('#chatbot-div').classList == 'rise') {
    document.querySelector('#help-text-two').textContent = 'Close Chatbot';
  } else (document.querySelector('#help-text-two').textContent = 'I Need Help')
});
