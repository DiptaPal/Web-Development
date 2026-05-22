function pakhiBhai(callMeBack, patro, patri) {
    console.log("value of patro", patro);
    console.log("callMeBack parameter", callMeBack);
    if (patri) {
        // console.log(callMeBack);
        callMeBack(patro)
    } else {
        console.log("Tor kopale biye nai");
    }
}

// pakhiBhai()

function callSomeOne(person) {
    console.log("Calling", person);
}

pakhiBhai(callSomeOne, "Jodu", "Puki");
