const reverseString = function(letters) { 
    // må gjøre om string til array
    // må starte på siste del av array
    // må loop gjennom og summere hvert element i en variabel
    // returnere 
     // vil starte til høyre i en array og gå mot venstre
     //

    let stringToArray = letters.split("");
    let reverseArray = [];

    for (let i = stringToArray.length - 1; i >= 0; i--)
    {
        reverseArray += stringToArray.at(i);
    }
    
    let reverseString = reverseArray.toString();
    return reverseString;

};



// Do not edit below this line
module.exports = reverseString;
