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

let n = prompt('nombre de photocopie');
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
calcul();

//Impot


