const roseButton = document.querySelector('.rose-button');
const letter = document.querySelector('.letter');
const closeButton = document.querySelector('.close-button');

function openLetter() {
  letter.classList.add('is-open');
  letter.setAttribute('aria-hidden', 'false');
  roseButton.setAttribute('aria-expanded', 'true');
  closeButton.focus();
}

function closeLetter() {
  letter.classList.remove('is-open');
  letter.setAttribute('aria-hidden', 'true');
  roseButton.setAttribute('aria-expanded', 'false');
  roseButton.focus();
}

roseButton.addEventListener('click', openLetter);
closeButton.addEventListener('click', closeLetter);
letter.addEventListener('click', (event) => {
  if (event.target === letter) closeLetter();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && letter.classList.contains('is-open')) closeLetter();
});
