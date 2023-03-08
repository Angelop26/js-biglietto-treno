/* INPUT
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
*/
    const userKm = parseFloat (prompt('quanti chilometri deve fare?'))
    const userKmDecimal= userKm.toFixed(2)
    const userAge =parseInt(prompt('quanti anni ha?')) 
    console.log(userKmDecimal, userAge);

// BONUS
if (!isNaN(userKmDecimal) && !isNaN(userAge)) {

    // LOGICA
    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
    // va applicato uno sconto del 20% per i minorenni
    // va applicato uno sconto del 40% per gli over 65.
    const TicketPrice = (userKmDecimal * 0.21).toFixed(2)
    console.log(TicketPrice);

    let message = ''
    if(userAge < 18) {
        const TicketPrice20 = TicketPrice * 0.8
        const tcktValue = TicketPrice20.toFixed(2)
        console.log(tcktValue20);
        message =`Il prezzo del biglietto è ${tcktValue20}`
    } else if(userAge > 65) {
        const TicketPrice40 = TicketPrice * 0.6
        const tcktValue40 = TicketPrice40.toFixed(2)
        console.log(tcktValue40);
        message = `Il prezzo del biglietto è ${tcktValue40}`
    } else {
        message = `Il prezzo del biglietto è ${TicketPrice}`
    }

    // OUTPUT
    document.getElementById('prezzo-biglietto').innerHTML = message
} else {
    message = "I chilometri o l'età da lei inserita è errata, ricaricare la pagina"
    document.getElementById('prezzo-biglietto').innerHTML = message
}