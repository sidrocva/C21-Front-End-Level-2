let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  _____string_________ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype _____integer_______ waarom? ____________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? __zodat de variable niet veranderd kan worden__________ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______17________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de P___________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde _____siddhartha_______ de waarde noemen we een Attribute__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een __alert_____ op het scherm met de tekst _____Siddhartha____ deze tekst staan op regel ____17___ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ____nee_______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _______Het verbergt____________ en waar wordt deze in je HTML aangeroepen? ___23_________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ___25________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? ____het pakt de element welke id de gegeven string matched_______________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? ______het laat niks zien_____________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen ___32___________ en wanneer wordt deze aangeroepen ___________ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ______regel3________ en waar komt de waarde van getal vandaan? ____________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? __________het returned een child element dat word gegeven in css_________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? ______het berekent_______________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _____________________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ____44_________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _______css_______ en waar komt de waarde van kleur vandaan? ____________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? ______css______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _________het zet een kleur naar iets anders____________ vul je antwoord in op de lijn
}

getName(myInt);
// wat gebeurd er hierboven _____het laat een alert zien op de scherm______ en wanneer gebeurt dat ____waneer de pagine word gerefreshed______ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? _______in heb MyInt gebruikt en de alert laat 3 zien____________ vul je antwoord in op de lijn.