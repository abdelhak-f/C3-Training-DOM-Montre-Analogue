// Séléctionner les aiguilles de montre

//---const AIGUILLEHR = document.querySelector("#hour");
//---const AIGUILLEMIN = document.querySelector("#minute");
//---const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
 

//Ajouter l'heure , minite , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 

const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

function setDate() {

    // la date actuel (fonction)
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg =((seconds/60)* 360 );
    AIGUILLESEC.style.transform = `rotate(${secDeg}deg)`;

    const minutes = now.getMinutes();
    const minDeg =((minutes/60)* 360) + ((seconds/60)* 6 );
    AIGUILLEMIN.style.transform = `rotate(${minDeg}deg)`;

    const houres = now.getHours();
    const hDeg =((houres/12)* 360) + ((minutes/60)* 30 );
    AIGUILLEHR.style.transform = `rotate(${hDeg}deg)`;

}
// Exercuter la fonction chaque second
var interval = setInterval(setDate, 1000);