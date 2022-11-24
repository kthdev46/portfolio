texte = document.getElementById("texte");
navbarre = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbarre.classList.toggle("sticky", window.scrollY > 10);
});

new Typewriter(texte, {
  loop: true,
})
  .typeString(
    'Le grand futur dans le <span style="color: #e95704;">NUMERIQUE</span> pour construire l\'Univer'
  )
  .pauseFor(300)
  .deleteChars(8)
  .typeString("le Monde")
  .pause(1000)
  .deleteChars(8)

  .typeString("les Entreprises.")

  .start();
