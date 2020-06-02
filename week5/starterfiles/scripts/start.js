const veiligHTML = document.getElementById('veiligHTML');
const veiligTekst = document.getElementById('veiligTekst');

let str = '<test>';
str.replace(/</g, "&lt;");

function beveilig(tekst) {
    let veiligeTekst = tekst.replace(/</g, "&lt;");
    veiligeTekst = veiligeTekst.replace(/>/g, "&gt;");
    return veiligeTekst;
}


//
veiligHTML.innerHTML = beveilig('<script>Alert();</script>');
veiligTekst.innerText = beveilig('<script>Alert();</script>');




















