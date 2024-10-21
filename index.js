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

//Tour de hanoi
/*  function hanoi(n, gauche, droite, auxiliaire) {
    if (n === 0) {
        return n;
    }
    hanoi(n - 1, gauche, auxiliaire, droite);
    console.log(`Déplacer le disque ${n} - ${gauche} à ${droite}`);
    hanoi(n - 1, auxiliaire, droite, gauche);
}
hanoi(3, 'A', 'C', 'B'); */

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
            result += changerLettre ? finalLettre.toLowerCase() : finalLettre;
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

//Impôts merci Laureline
/* function impot(age, homme, femme,) {
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
}); */

//tableau étudiants
let etudiants = [
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
    { nom: 'Amin', note: 16 },
    { nom: "Alice", note: 85 },
    { nom: "benjamin", note: 92 },
    { nom: "Claire", note: 78 },
    { nom: "david", note: 88 },
    { nom: "Emma", note: 95 },
    { nom: "fabien", note: 67 },
    { nom: "Gabriel", note: 90 },
    { nom: "helene", note: 73 },
    { nom: "Isabelle", note: 82 },
    { nom: "jacques", note: 76 },
    { nom: "Kevin", note: 89 },
    { nom: "laura", note: 91 },
    { nom: "Marc", note: 84 },
    { nom: "nathalie", note: 79 },
    { nom: "Olivier", note: 87 },
    { nom: "pierre", note: 93 },
    { nom: "Quentin", note: 80 },
    { nom: "roxane", note: 77 },
    { nom: "Sophie", note: 94 },
    { nom: "thomas", note: 86 },
    { nom: "Ulysse", note: 81 },
    { nom: "valerie", note: 75 },
    { nom: "William", note: 83 },
    { nom: "xavier", note: 70 },
    { nom: "Yann", note: 88 },
    { nom: "zoe", note: 92 },
    { nom: "Adrien", note: 85 },
    { nom: "brigitte", note: 78 },
    { nom: "Camille", note: 89 },
    { nom: "damien", note: 91 },
    { nom: "Elise", note: 87 },
    { nom: "françois", note: 76 },
    { nom: "Gaëlle", note: 84 },
    { nom: "hugo", note: 93 },
    { nom: "Ingrid", note: 79 },
    { nom: "julien", note: 88 },
    { nom: "Karine", note: 82 },
    { nom: "lucas", note: 90 },
    { nom: "Mathilde", note: 95 },
    { nom: "nicolas", note: 77 },
    { nom: "Océane", note: 86 },
    { nom: "paul", note: 80 },
    { nom: "Quentin", note: 83 },
    { nom: "rachel", note: 75 },
    { nom: "Samuel", note: 92 },
    { nom: "thibault", note: 89 },
    { nom: "Ursula", note: 78 },
    { nom: "vincent", note: 91 },
    { nom: "Wendy", note: 87 },
    { nom: "xena", note: 76 },
    { nom: "Yasmine", note: 84 },
    { nom: "zacharie", note: 93 },
    { nom: "Amélie", note: 79 },
    { nom: "bruno", note: 88 },
    { nom: "Chloé", note: 82 },
    { nom: "dylan", note: 90 },
    { nom: "Estelle", note: 95 },
    { nom: "fabrice", note: 77 },
    { nom: "Géraldine", note: 86 },
    { nom: "henri", note: 80 },
    { nom: "Inès", note: 83 },
    { nom: "jean", note: 75 },
    { nom: "Kévin", note: 92 },
    { nom: "léa", note: 89 },
    { nom: "Mélanie", note: 78 },
    { nom: "nathan", note: 91 },
    { nom: "Ophélie", note: 87 },
    { nom: "patrick", note: 76 },
    { nom: "Quentin", note: 84 },
    { nom: "rémi", note: 93 },
    { nom: "Sarah", note: 79 },
    { nom: "théo", note: 88 },
    { nom: "Ugo", note: 82 },
    { nom: "valentin", note: 90 },
    { nom: "Wendy", note: 95 },
    { nom: "xavier", note: 77 },
    { nom: "Yohan", note: 86 },
    { nom: "zoé", note: 80 },
    { nom: "Antoine", note: 83 },
    { nom: "bernadette", note: 75 },
    { nom: "Cédric", note: 92 },
    { nom: "diane", note: 89 },
    { nom: "Élodie", note: 78 },
    { nom: "franck", note: 91 },
    { nom: "Guillaume", note: 87 },
    { nom: "hélène", note: 76 },
    { nom: "Isabelle", note: 84 },
    { nom: "jules", note: 93 },
    { nom: "Kevin", note: 79 },
    { nom: "laetitia", note: 88 },
    { nom: "Maxime", note: 82 },
    { nom: "nadine", note: 90 },
    { nom: "Olivier", note: 95 },
    { nom: "pascal", note: 77 },
    { nom: "Quentin", note: 86 },
    { nom: "romain", note: 80 },
    { nom: "Stéphanie", note: 83 },
    { nom: "thomas", note: 75 },
    { nom: "Ulysse", note: 92 },
    { nom: "valérie", note: 89 }

];

let n = etudiants.length;
let etudiantsSelectionnes = [];
const adieuAccent = { 'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e', 'É': 'E' }

// Mettre la premiére lettre en majuscule
let minuscules = 'abcdefghijklmnopqrstuvwxyz';
let maj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function virerAccent(etudiantsSelectionnes) {
    return adieuAccent[etudiantsSelectionnes[0]] || etudiantsSelectionnes;
}
// Trie les notes au dessus de 15
for (let m = 0; m < etudiants.length; m++) {
    if (etudiants[m].note > 15) {
        etudiantsSelectionnes.push(etudiants[m]);
    }
}
//parcourir les étudiants
let e = 0;
while (e < etudiants.length) {
    let nom = etudiants[e].nom;
    let premiereLettre = nom[0];
    let resteNom = "";

    // parcourir l'index
    let l = 1;
    while (l < nom.length) {
        resteNom += nom[l];
        l++;
    }

    // Premiere lettre en maj
    let premiereLettreMaj = premiereLettre;

    //boucle pour chercher les majs et minuscule
    for (let a = 0; a < minuscules.length; a++) {
        if (premiereLettre === minuscules[a]) {
            premiereLettreMaj = maj[a];
        }
    }
    // nom de l'étudiant obtient sa premiere lettre en maj
    etudiants[e].nom = premiereLettreMaj + resteNom;
    e++;

    // Échange des éléments
    let echange = true
    while (echange) {
        echange = false
        for (let i = 0; i < etudiantsSelectionnes.length - 1; i++) {
            let nom1 = virerAccent(etudiantsSelectionnes[i].nom);
            let nom2 = virerAccent(etudiantsSelectionnes[i + 1].nom);
            let k = 0;
            while (k < nom1.length && k < nom2.length) {
                if (nom1[k] > nom2[k]) {
                    let temp = etudiantsSelectionnes[i];
                    etudiantsSelectionnes[i] = etudiantsSelectionnes[i + 1];
                    etudiantsSelectionnes[i + 1] = temp;
                    echange = true
                    break;
                } else if (nom1[k] < nom2[k]) {
                    break;
                }
                k++
            }
        }
    }
    //moyenne des notes
    let sommeNotes = 0;
    for (let i = 0; i < etudiants.length; i++) {
        sommeNotes += etudiants[i].note;
    }
    let moyenneNotes = sommeNotes / etudiants.length;
    console.log(moyenneNotes)

}
console.log(etudiantsSelectionnes)