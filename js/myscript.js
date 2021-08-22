const emailContainer = ["nastroivan3@gmail.com", "latuamail@gmail.com", "unaltramail@register.com","booleanmail@boolean.com" ];
let emailAccount = prompt("Inserisca il suo account email");
let k;

for (let i = 0 ; i < emailContainer.length; i++){
    if ( emailContainer[i] == emailAccount){
        k = i;
    } 
}
if (k == undefined){
    document.getElementById('email').innerHTML = 'ci dispaice, la tua mail non e` presente nel nostro database, aggiornare la pagina e riprovare'
}else{
    document.getElementById('email').innerHTML = 'La tua email e` presente nel nostro database'
}

let numeroGiocatore = parseInt(6 * Math.random()) + 1;
let numeroComputer = parseInt(6 * Math.random()) + 1;
document.getElementById('n-giocatore').innerHTML = 'Il numero scelto casualmente per te e` il numero: ' + numeroGiocatore;
document.getElementById('n-computer').innerHTML = 'Il numero scelto casualmente per il tuo avversario e` il numero: ' + numeroComputer;

if (numeroGiocatore > numeroComputer){
    document.getElementById('risultato').innerHTML='HAI VINTO! GG';
}else if (numeroGiocatore < numeroComputer){
    document.getElementById('risultato').innerHTML='HAI PERSO! LOL';
}else{
    document.getElementById('risultato').innerHTML='SIETE PARI! FAIR PLAY';
}