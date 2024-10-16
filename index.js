/* let monCanard = "donald";
const nombreDePâtes = "2";
const nombreDAile = "2";


/* function canard(nombreDePâtes,nombreDAile){
    let maCanette = "daisy";
    let mesCanards = maCanette += monCanard;
   /*   return mesCanards;  */
/*   return nombreDePâtes += nombreDAile;  */
/* }
console.log(canard(nombreDePâtes,nombreDAile));
console.log((canard(2,1)));

function canard1(nombreDePâtes1,nombreDAile1){
    let monCanard1 = nombreDePâtes1 += nombreDAile1;
    return monCanard1;
}
console.log(canard1(2,2)) */

/* let x ='1';

function f (){
    let x = 2;
    console.log(x);
}
console.log(x);
f() */
/*
const lettre = "ABCDEFGHJKLMNPQRSTUVWXY";
const nombre = "0123456789";



 function generePlaque(){
    let plaque = "";
for (i = 0; i < 2; i++) {
    plaque += lettre.charAt(Math.floor(Math.random() * (lettre.length)))
}
plaque += "-";
console.log(plaque); 

 for (i = 0; i < 3; i++) {
    plaque += nombre.charAt(Math.floor(Math.random() * (nombre.length)))
}
plaque += "-"; 
/* console.log(plaque); */

/*for (i = 0; i < 2; i++) {
    plaque += lettre.charAt(Math.floor(Math.random() * (lettre.length)))
}
 return plaque;
}
console.log(generePlaque()); */

/* function genereLetter(){
     let plaque = "";
    for (i = 0; i < 2; i++) {
        plaque += lettre.charAt(Math.floor(Math.random() * (lettre.length)));
    }
    return plaque;
}
//console.log(genereLetter())

function genereNumber(){
    let plaque = "-";
    for (i = 0; i < 3; i++) {
        plaque += nombre.charAt(Math.floor(Math.random() * (nombre.length)));
    }
    return plaque += "-";//
     
    return plaque;
}
plaque += "-"; */

/* function genererPlaque1(){
    let i = 0;
    while ( i <50)
    {
        console.log(genereLetter() + genereNumber() + genereLetter());
        i++;
        console.log(i);
    }
}
genererPlaque1(); */


/*function genererPlaque(){
    let i = 0;
    let plaqueGenere = [];

    while ( i<50)
    { let nouvellePlaque = generePlaque();
        if (!plaqueGenere.includes(nouvellePlaque)) {
            plaqueGenere.push(nouvellePlaque);
            i++;
        }
        
        console.log(plaqueGenere);
        
        console.log(i);
    }
    
}
genererPlaque(); */

//Exo Assurance!!!!!!!!!!!!

/* function cherchesTarif(age, annéesDePermis, accident, fidelité) {
    let tarif = "";
    if (age < 25 && annéesDePermis < 2) {
        if (accident === 0) {
            tarif = "D";
        } else {
            return "Refusé";
        }
    }
    else if ((age < 25 && annéesDePermis >= 2) || (age >= 25 && annéesDePermis < 2)) {
        if (accident === 0) {
            tarif = "C";
        } else if (accident === 1) {
            tarif = "D";
        } else {
            return "Refusé";
        }
    }
    else if (age >= 25 && annéesDePermis >= 2) {
        if (accident === 0) {
            tarif = "B";
        } else if (accident === 1) {
            tarif = "C";
        } else if (accident === 2) {
            tarif = "D";
        } else {
            return "Refusé";
        }
    } else {
        return "Refusé";
    }
 
    if (fidelité > 1) {
        if (tarif === "D") tarif = "C";
        else if (tarif === "C") tarif = "B";
        else if (tarif === "B") tarif = "A";
    }
    return tarif;
}
document.getElementById('calcul').addEventListener('click', function (event) {
    event.preventDefault();
    let age = parseInt(document.getElementById("age").value);
    let annéesDePermis = parseInt(document.getElementById("annéesDePermis").value);
    let accident = parseInt(document.getElementById("accident").value);
    let fidelité = parseInt(document.getElementById("fidelité").value);
  
    if (isNaN(age) || isNaN(annéesDePermis) || isNaN(accident) || isNaN(fidelité)) {
        document.getElementById("resultat").textContent = "Remplir correctement tous les champs!!!";
        return;
    }

    let tariffinal = cherchesTarif(age, annéesDePermis, accident, fidelité);

    document.getElementById("resultat").textContent = "Tarif : " + tariffinal;
}); */

//Photocopie

/* let n = prompt('nombre de photocopie');
n=parseInt(n);

function calcul(){
  let cout = 0;

  if (isNaN(n) || n <= 0) {
    alert("pas bon");
  }else if (n>30) {
    cout = 10*0.10 + 20*0.09 + (n-30)*0.08;
    alert(cout + "euros")
  }else if(n>10) {
    cout = 10*0.10 + (n-10)*0.09;
    alert(cout + "euros")
  }else {
    cout = n*0.10;
    alert(cout + "euros")
  }
}
calcul(); */

//Impot

/* function impot(age, homme, femme) {
    let imposition = "Non imposable";
   
    if (femme && age > 18 && age <= 38) {
        imposition = "Imposable";
    } else if (homme && age > 18) {
        imposition = "Imposable";
    }
    
    return imposition;
}

document.getElementById('calcul').addEventListener('click', function (event) {
    event.preventDefault();
    let age = parseInt(document.getElementById("age").value);
    let homme = document.getElementById("homme").checked;
    let femme = document.getElementById("femme").checked;
   
    if (isNaN(age) || (!homme && !femme)) {
        document.getElementById("resultat").textContent = "Remplir correctement tous les champs!!!";
        return;
    }

    let impotfinal = impot(age, homme, femme);

    document.getElementById("resultat").textContent = "Impot : " + impotfinal;
}); */

//étoiles décroissantes
/*  function etoilesdecroissante() {
    let etoiles = 9;
    for (let i = 0; i < 9; i++) {
        console.log('* '.repeat(etoiles));
        etoiles--;
    }
}
etoilesdecroissante(); */

//étoiles croissantes
/* function etoilescroissantes(){
    let etoiles = 1;
    for (let i = 0; i < 9; i++) {
        console.log('* '.repeat(etoiles));
        etoiles++;
    }
}
etoilescroissantes(); */

/*Occurrences*/
/* function chercheOccurrences(t, x) {
    let nombre = [];
    t.forEach((valeur, index) => {
        if (valeur === x) {
            nombre.push(index);
        }
    });
    return nombre;
}
function occurrences() {
    let tableau = document.getElementById('tableau').getElementsByTagName('input');
    let valeurs = Array.from(tableau).map(input => parseInt(input.value));
    let x = parseInt(document.getElementById('valeur').value);
    let nombre = chercheOccurrences(valeurs, x);
    document.getElementById('resultat').textContent = 'Nombre : ' + nombre.join(', '); //join() converti le tableau en chaine de caratere
} */

/*tri à bulle*/
/*  function triABulle(array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]; //temp permet de stocker dans un tableau une variable temporairement pour la modifier pendant un échange de d'éléments
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;   
}

function nombre() {
    let input = document.getElementById('numbers').value;
    let array = input.split(',').map(Number); // split converti les chaine de caractere en tableaux / map permet de transformer les éléments d'un tableaux
    let tri = triABulle(array);
    document.getElementById('result').innerText = tri.join(' - '); //join() converti le tableau en chaine de caractere, ('-')crée une séparation dans le tableau 
}  */

//Palindrome  Palindrome= un mot qui se li dans les 2 sens
/*     function palindrome(mot) {
        mot = mot.toLowerCase(); //convertir le mot en minuscules
        let motInverse = mot.split('').reverse().join(''); // inverse le mot
        return mot === motInverse; // Comparer le mot original et le mot inversé
    }
    let motUtilisateur = prompt("Entrer un mot:");

    if (palindrome(motUtilisateur)) {
        console.log("true");
    } else {
        console.log("false");
    } */

// Tour de hanoi
/*  function hanoi(n, gauche, droite, auxiliaire) {
    if (n === 0) {
        return n;
    }
    hanoi(n - 1, gauche, auxiliaire, droite);
    console.log(`Déplacer le disque ${n} - ${gauche} à ${droite}`);
    hanoi(n - 1, auxiliaire, droite, gauche);
}
hanoi(3, 'A', 'C', 'B');  */

//Algo Motif

/* for (let i = 1; i < 6; i++) {
    if (i % 2 !== 0) {
        console.log("#*#*#*#*#*");
    } else {
        console.log("*#*#*#*#*#");
    }
} */

//Rang de l'alphabet
/* function alphabetdecale(lettre) {
    const n = 3; 
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < lettre.length; i++) {
        let nouvelleLettre = lettre[i];
        let changerLettre = nouvelleLettre === nouvelleLettre.toUpperCase();
        nouvelleLettre = nouvelleLettre.toLowerCase();

        if (alphabet.includes(nouvelleLettre)) {
            let newIndex = alphabet.indexOf(nouvelleLettre) + n;
            if (newIndex >= 26) {
                newIndex -= 26;
            }
            let finalLettre = alphabet[newIndex];
            result += changerLettre ? finalLettre.toUpperCase() : finalLettre;
        } else {
            result += nouvelleLettre;
        }
    }
    return result;
}
let texte = prompt("Texte à décaler :");
let texteDecale = alphabetdecale(texte);
console.log(texteDecale); */

/* Exo étoiles décroissant sans repeat */

/* for(let i=9; i>=1; i--){
    let ligne = '';
    for(let j=1; j <= i; j++){
        ligne += '* ';
    }
    console.log(ligne) 
}*/

/* Exo étoiles croissant sans repeat */

/* for(let i=1; i<=9; i++){
    let ligne = '';
    for(let j=1; j <= i; j++){
        ligne += '* ';
    }
    console.log(ligne)
} */

/* Mouhahaha */
/* let mouah = "mouah";
let ah = 5;  
 
for (let i = 0; i < ah; i++) {
   mouah += "ah";
}
console.log(mouah); */

//Frais kilométrique
/* const tariFKm = 0.6;
const reducPassager = 0.5;

let kilometres = parseInt(prompt("kilomètres:"));
let passagers = parseInt(prompt("passagers :"));
let reducTotale = passagers * reducPassager;
let tarifFinalKm = tariFKm - reducTotale;
 
if (tarifFinalKm < 0.1) {
    tarifFinalKm = 0.1;
}
let frais = tarifFinalKm * kilometres;
let prixPassager = (passagers > 0) ? frais / passagers : 0;
 
console.log("Le montant total des frais est : " + frais.toFixed(2) + " euros");
console.log("Le prix par passager est : " + prixPassager.toFixed(2) + " euros"); */

// Tableau étudiants
/* let etudiants = [
    { nom: 'Agathe', note: 14 },
    { nom: 'Wlad', note: 17 },
    { nom: 'Yohann', note: 16 },
    { nom: 'Laureline', note: 17 },
    { nom: 'Christian', note: 12 },
    { nom: 'Yannick', note: 19 },
    { nom: 'Kaique', note: 17 },
    { nom: 'Angélique', note: 18 },
    { nom: 'Dorian', note: 15 },
    { nom: 'emmanuel', note: 16 },
    { nom: 'Jeremy', note: 13 },
    { nom: 'Sylvain', note: 17 },
    { nom: 'Yann', note: 15 },
    { nom: 'Amin', note: 16 }
];
 
let filtreEtudiants = [];
for (let i = 0; i < etudiants.length; i++) {
    if (etudiants[i].note > 15) {
        filtreEtudiants.push(etudiants[i]);
    }
}

for (let i = 0; i < filtreEtudiants.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < filtreEtudiants.length; j++) {
        if (filtreEtudiants[j].nom.toLowerCase() < filtreEtudiants[minIndex].nom.toLowerCase()) {
            minIndex = j;
        }
    }
    if (minIndex !== i) {
        let temp = filtreEtudiants[i];
        filtreEtudiants[i] = filtreEtudiants[minIndex];
        filtreEtudiants[minIndex] = temp;
    }
}

let notes = 0;
for (let i = 0; i < filtreEtudiants.length; i++) {
    notes += filtreEtudiants[i].note;
}
let moyenneNotes = notes / filtreEtudiants.length;
 
console.log("Étudiants note supérieure à 15 par ordre alphabétique:");
for (let i = 0; i < filtreEtudiants.length; i++) {
    console.log(filtreEtudiants[i].nom + " : " + filtreEtudiants[i].note);
} */

//Impôts merci Laureline
function impot(age, homme, femme,) {
    let imposition = "Non imposable";
    let tauxImposition;

    if (femme && age > 18 && age <= 38) {
        imposition = "Imposable";

        if (femme && age < 25) {
            //femme de moins de 25 ans, le taux = 8% de son âge
            tauxImposition = age * 0.08;
        } else {
            //femme de 25 ans ou plus, le taux = 5% de son âge
            tauxImposition = age * 0.05;
        }
    }

    else if (homme && age > 18) {
        imposition = "Imposable";

        if (homme) {
            //homme, le taux = 10% de son âge
            tauxImposition = age * 0.10;
        }
    }
    return imposition + (" à ") + tauxImposition;
}

document.getElementById('calcul').addEventListener('click', function (event) {
    event.preventDefault();
    let age = parseInt(document.getElementById("age").value);
    let homme = document.getElementById("homme").checked;
    let femme = document.getElementById("femme").checked;

    if (isNaN(age) || (!homme && !femme)) {
        document.getElementById("resultat").textContent = "Remplir correctement tous les champs!!!";
        return;
    }

    let impotfinal = impot(age, homme, femme);
    document.getElementById("resultat").textContent = "Impot : " + impotfinal + (" %");
});
