// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Desplazamiento del navbar
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  var navbar = document.getElementById("navbar-desktop");
    if (currentScrollPos > 300) {
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
      } else{
        navbar.style.top = "-130px";
      }
    } else {
      // Si estás en los primeros 30px de la página, permanece visible
      navbar.style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}
document.body.style.paddingTop = document.getElementById("navbar-desktop").offsetHeight + "px";