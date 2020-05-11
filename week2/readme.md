# AJAX 2

Vorige week hebben jullie een begin gemaakt met AJAX en jullie hebben een aantal URL's gelezen.

Een AJAX request bestaat uit een aantal stappen:

1. Maak een nieuw XMLHttpRequest object aan: `let request = new XMLHttpRequest();`
2. Geef de specificaties op aan de request: `    request.open(
             'GET',
             url,
             true
         );`   
         In dit geval is het dus een GET request en de true geeft aan dat de request asynchroon moet gedaan worden. url staat voor de pagina op de webserver waar de request heen moet.
3. Verstuur de request: `request.send();`
4. Luister naar het `onreadystatechange` event om de status van je request af te handelen.   
`request.onreadystatechange = function() {`   
`if (this.readyState == 4 && this.status == 200) {`   
`let response = request.responseText;`   
`callBack(response);`   
`}};`
callBack is een functie die je eerder gemaakt hebt.   


De AJAX request die vorige week behandelt is maakt gebruik van GET, je kunt echter ook gegevens versturen met POST.   

Daarvoor verandert er niet heel veel, je moet nu de    
`request.send()` aanpassen en een requestHeader toevoegen aan je request object zodat de server weet om wat voor data het gaat.   
`request.setRequestHeader(
         "Content-type",
         "application/x-www-form-urlencoded"
     );`
     
Hoe je dit kunt doen lees je op [W3SCHOOLS, request post](https://www.w3schools.com/XML/ajax_xmlhttprequest_send.asp) of op [Mozilla Developers Network](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)