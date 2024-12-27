// слайд

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

// Вывод сообщения о успешной заполнения формы

window.addEventListener('load', () => {
  slide();
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form-container');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      successMessage.style.display = 'block';
      form.style.display = 'none';
       successMessage.scrollIntoView({behavior: "smooth"});
  });
});

// Вход

function logInPopup() {
  const login = prompt("Введите логин:");
  if (login === null) return; // Если нажали "Отмена"

  const password = prompt("Введите пароль:");
  if (password === null) return; // Если нажали "Отмена"

  if (login && password) { // Проверка на непустые значения
    alert("Успешный вход!");
  } else {
    alert("Ошибка при входе. Пожалуйста, введите логин и пароль.");
  }
}

// Регистрация

function registrationPopup() {
  const login = prompt("Введите логин:");
  if (login === null) return; // Если нажали "Отмена"

  const email = prompt("Введите email:");
    if (email === null) return;

  const password = prompt("Введите пароль:");
  if (password === null) return; // Если нажали "Отмена"

    if (login && email && password) { // Проверка на непустые значения
      alert("Успешная регистрация!");
  } else {
    alert("Ошибка при регистрации. Пожалуйста, заполните все поля.");
  }

}

