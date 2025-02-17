document.addEventListener("DOMContentLoaded", function () {
    // Esperar a que Reveal.js esté listo
    if (typeof Reveal === "undefined") {
      console.error("Reveal.js no está cargado. Asegúrate de que el formato revealjs esté configurado correctamente.");
      return;
    }
  
    // Obtener todas las diapositivas horizontales (secciones principales)
    const slides = Array.from(document.querySelectorAll("section"));
  
    // Crear el contenedor de bolitas
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots");
  
    // Crear una bolita para cada diapositiva horizontal
    slides.forEach((slide, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active"); // La primera bolita está activa
      dotsContainer.appendChild(dot);
    });
  
    // Agregar el contenedor de bolitas al final del documento
    document.body.appendChild(dotsContainer);
  
    // Actualizar la bolita activa al cambiar de diapositiva
    Reveal.on("slidechanged", (event) => {
      const allDots = document.querySelectorAll(".dot");
      allDots.forEach((dot, index) => {
        dot.classList.toggle("active", index === event.indexh);
      });
    });
  });