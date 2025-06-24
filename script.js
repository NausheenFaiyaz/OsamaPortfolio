const textElement = document.querySelector(".text");
const words = ["reality", "life", "dreams", "success"]; // Words to type
let wordIndex = 0;
let charIndex = 0;
let typingSpeed = 150;
let deletingSpeed = 80;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    textElement.textContent = currentWord.substring(0, charIndex++);
  }

  textElement.style.opacity = isDeleting ? Math.max(0.1, charIndex / currentWord.length) : 1;

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();
