// Seleccionamos el botón del menú interactivo en el DOM
const menuBtn = document.getElementById("menuBtn");

// Seleccionamos el contenedor principal de la navegación
const navLinks = document.getElementById("navLinks");

// ERROR CORREGIDO: Usar querySelectorAll para obtener todos los enlaces (NodeList) en lugar de solo el primero
const links = navLinks.querySelectorAll("a");

// Escuchamos el evento de clic en el botón de hamburguesa
menuBtn.addEventListener("click", () => {
    
    // ERROR CORREGIDO: Alternamos la clase en minúscula ("active") para evitar discrepancias
    navLinks.classList.toggle("active");

    // ERROR CORREGIDO: Corregido el error tipográfico (era 'navaLinks')
    if(navLinks.classList.contains("active")) {
        // Si el menú se abre, cambiamos el ícono a una 'X'
        menuBtn.innerHTML = "X";
        // Actualizamos la accesibilidad para indicar que está expandido
        menuBtn.setAttribute("aria-expanded", "true");
    } else {
        // Si el menú se cierra, volvemos al ícono de hamburguesa
        menuBtn.innerHTML = "&#9776;";
        // Actualizamos la accesibilidad para indicar que está colapsado
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

// Iteramos sobre cada uno de los enlaces del menú
links.forEach(link => {
    // Escuchamos el clic en cada enlace individual
    link.addEventListener("click", () => {
        // Ocultamos el menú removiendo la clase 'active'
        navLinks.classList.remove("active");
        
        // Restauramos el estado del botón a nivel de accesibilidad
        menuBtn.setAttribute("aria-expanded", "false");
        
        // MEJORA: Restauramos visualmente el ícono de hamburguesa al hacer clic en un enlace
        menuBtn.innerHTML = "&#9776;"; 
    });
});