const bmi = document.getElementById("bmi");
const randomGetal = document.getElementById("randomgetal");
const baseUrl = "bmi.php";

randomGetal.innerText = "Random getal: " + Math.floor(Math.random()* 10);

form.addEventListener('submit', function (event) {

    // TODO: maak de functie af en
    //  haal de gegevens op voor gewicht en lengte uit het formulier.

    const gewicht = ;
    const lengte = ;

    const url = createURL(baseUrl, gewicht, lengte);

    // TODO: lees de onderstaande url
    //  en beschrijf in eigen woorden in je readme.md waar de event.preventDefault()
    //  voor dient.
    //  https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

    getRequest(url, callback);

    // TODO: Wat gebeurt er als je de preventDefault() weg laat.
    event.preventDefault();

});

function createURL(url, gewicht, lengte) {
    // TODO: maak de functie af zodat
    //  de return door de php pagina verwerkt kan worden
    //  voorbeeld: index.php?naam=voornaam&achternaam=achternaam

    return ;
}


function callback(response) {
    // TODO: Maak de functie af zodat je een goed advies krijgt over je BMI
    //  maak gebruik van een switch hiervoor
    //  Meer info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    //  < 18.5 is ondergewicht
    //  18.5 - 24.9 is normaal gewicht
    //  25 - 29.9 is overgewicht
    //  >= 30 is obesitas

    bmi.innerText = response;

    // TODO: Extra punten te verdienen
    //  Het BMI is afhankelijk van leeftijd en geslacht
    //  Maak een advies op basis van leeftijd en geslacht
    //  Meer info: https://www.voedingscentrum.nl/nl/bmi-meter.aspx
}

function getRequest(url, callBack) {

    let request = new XMLHttpRequest()

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            // TODO: Lees de onderstaande URL's en beschrijf in eigen
            //  woorden in je readme.md wat een callback functie is.
            //  https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
            //  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

            // TODO: Beschrijf in eigen woorden in je readme.md wat het verschil is tussen
            //  een asynchrone en een synchrone callback functie.

            let response = request.responseText;
            callBack(response)

        }
    };

    request.open(
        'GET',
        url,
        true
    );

    request.send();
}