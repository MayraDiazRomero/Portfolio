// Seleccionamos los enlaces de navegación y las secciones
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

// Función para mostrar la sección activa
function showSection(event) {
  event.preventDefault();

  // Removemos la clase 'active' de todas las secciones y enlaces
  navLinks.forEach(link => link.classList.remove("active"));
  sections.forEach(section => section.classList.remove("active"));

  // Agregamos la clase 'active' al enlace y a la sección correspondiente
  const targetSection = event.target.getAttribute("data-section");
  document.getElementById(targetSection).classList.add("active");
  event.target.classList.add("active");
}

// Agregamos el evento de clic a cada enlace de navegación
navLinks.forEach(link => {
  link.addEventListener("click", showSection);
});
