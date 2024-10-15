const tauxInteret = 0.03; 
let solde = 1000; 
let depot = 200; 
let retrait = 150; 

solde += depot; 
console.log(`Vous avez déposé ${depot} euros. Nouveau solde : ${solde} euros.`);

if (solde >= retrait) {
    solde -= retrait; 
    console.log(`Vous avez retiré ${retrait} euros. Nouveau solde : ${solde} euros.`);
} else {
    console.log("Solde insuffisant pour effectuer ce retrait.");
}

let interets = solde * tauxInteret; 
solde += interets; 
console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde.toFixed(2)} euros.`);

let nouveauDepot = 500; 
solde += nouveauDepot; 
console.log(`Vous avez déposé ${nouveauDepot} euros. Nouveau solde : ${solde} euros.`);

let nouveauRetrait = 800; 
if (solde >= nouveauRetrait) {
    solde -= nouveauRetrait; 
    console.log(`Vous avez retiré ${nouveauRetrait} euros. Nouveau solde : ${solde} euros.`);
} else {
    console.log("Solde insuffisant pour effectuer ce retrait.");
}

interets = solde * tauxInteret;
solde += interets;
console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde.toFixed(2)} euros.`);