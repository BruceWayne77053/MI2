document.addEventListener('DOMContentLoaded', function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var menuBtn = document.getElementById('menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();
      var error = document.getElementById('form-error');
      var success = document.getElementById('form-success');

      error.classList.add('hidden');
      success.classList.add('hidden');
      error.textContent = '';

      if (!name || !email || !message) {
        error.textContent = 'Please fill in your name, email, and message.';
        error.classList.remove('hidden');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = 'Please enter a valid email address.';
        error.classList.remove('hidden');
        return;
      }

      success.classList.remove('hidden');
      form.reset();
    });
  }
});
