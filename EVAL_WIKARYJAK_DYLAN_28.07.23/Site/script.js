// Permet l'ouverture du burger menu sur le format mobile
function toggleMobileMenu() {
    const navMenuMobile = document.querySelector('.navMenuMobile');
    navMenuMobile.classList.toggle('active');
  }


// Permet l'ouverture d'une pop sur sur la page About contenant le Cv au click sur l'img  
function openPopup(url) {
  window.open(url, "_blank", "width=1000,height=1000");
}