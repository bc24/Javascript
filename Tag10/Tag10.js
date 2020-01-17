// Tag 10 - 17.01.2020
// Wiederholungen

// Tag 1

////////////////////////////////
// Primäre Datentypen
null // null
undefined // undefined
Number // 2^306 (2^53)
Boolean // true false
Symbol // Atomarer Wert
String // Zeichen
Object // Alles andere

let str = "Banane";
typeof(str) // Gibt String zurück mit dem Wert "String"

////////////////////////////////
//Functionen

//2
function Bezeichner(Parameter) {

}

// 3
var fx = function(Parameterliste) {
    return // Rückgabe mit return
}

// 4 
var fx = (Parameterliste) => {}; // {  } Bei mehreren Werten, bei einen Wert können die { } weg gelassen werden

//************************** */
// Aufbau

Parameter:
    Bezeichner[ = Defaultwert]

Parameterliste:
    Parameter[, Parameter] +

    // 1
    function fx(...) {

    }

//************************ */
// Beispiel:
var fx = function(value1, value2 = 44) {
    return value1 * value2;
}
let v fx(11);
console.log(v);

v = fx(11, 55);
console.log(v);


//********************************* */
// Anweisungen

var af = (x, y) => {
    return x * y;
}

var afx(x, y) => x * y;
var bfx = x => -x;
var cfx = () => 324625;

/////////////////////////////////////////
// DOM
e.document.createElement(Tag - Name)
e.id = "Itemx";

document.getElementById(ID - Name);

// Canvas
moveTo
lineTo
clearRect(x, y, w, h)
fillRect(x, y, w, h)
arc(x, y, r, startangle, stopangle)
stroke()
fill()
beginPath()

canvas / context / attribute
fillStyle
strokeSyle

/////////////////////////////////////////
// MouseEvents
onclick();
onmousemove(); // Bewegung
onmouseenter(); // Getretten
onmouseleave(); // Verlassen
onmousedown();
onmouseup();

/////////////////////////////////////////
// Klssen

class Bezeichner {
    constructor(Parameterliste) {

    }
}

//********************************** */
// Klassen Erweiterung
class Erweiterte extends Bezeichner {
    constructor(Parameterliste) {
        super(...)
    }
}

/////////////////////////////////////////
// TasterturEvents
onkeydown();
onkeypress();
onkeyup();

// KeyEvent
keyEvent.key();
keyEvent.getModifierState();