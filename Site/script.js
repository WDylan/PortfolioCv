// Permet l'ouverture du burger menu sur le format mobile
function toggleMobileMenu() {
  const navMenuMobile = document.querySelector('.navMenuMobile');
  const mobileMenuIcon = document.querySelector('.mobileMenuIcon');

  // Inverse l'état du menu (ouvert ou fermé) et récupère le nouvel état
  const isMenuOpen = navMenuMobile.classList.toggle('active');

  // Affiche l'icône du burger menu ou de fermeture en fonction de l'état du menu
  mobileMenuIcon.children[0].style.display = isMenuOpen ? 'none' : 'block'; // Burger menu
  mobileMenuIcon.children[1].style.display = isMenuOpen ? 'block' : 'none'; // Icône de fermeture
}
// Permet l'ouverture d'une pop sur sur la page About contenant le Cv au click sur l'img  
function openPopup(url) {
  window.open(url, "_blank", "width=1000,height=1000");
}