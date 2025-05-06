// Initialisation du compteur
let compteur = 0;

// Ciblage des éléments
const bouton = document.getElementById('btnClic');
const affichage = document.getElementById('affichage');

// Fonction de mise à jour
function incrementerCompteur() {
  compteur++;
  affichage.textContent = "Nombre de clics : " + compteur;
}

// Lier la fonction au bouton
bouton.addEventListener('click', incrementerCompteur);
