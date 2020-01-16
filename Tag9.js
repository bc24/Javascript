// Tag 9 - 16.01.2020
// Queue, binär Baum und Tasterturevents

// Tasterturevents
onkeydown // Taste drücken
onkeyup // Taste loslassen
onkeypress // Tasten Bestätigung

// onkeydown und onkeypress wiederhollen sich immer wieder bis onkeyup gedrückt wird.

// KeyEvent
keyEvent.key // Was wurde gedrückt
keyEvent.getModifierState(str) // str="ALT" oder str"Control" oder str="AltGr" oder str="schift"

// Beispiel 1
onkeydown = (evt) => { console.log(evt.getModifierState("Schift"), evt.getModifierState("Control"), evt.getModifierState("Alt"), evt.getModifierState("AltGr")); };

// Beispiel 2
document.body.onkeyup = (evt) => { console.log(evt.key); };

function onkeyup()

// Beispiel für A D W S
document.body.onkeyup = (evt) => {
    switch (evt.key) {
        case "a":
            console.log("left");
            break;
        case "d":
            console.log("right");
            break;
        case "w":
            console.log("up");
            break;
        case "s":
            console.log("down");
            break;
    }
}