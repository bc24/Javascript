// Tag 6 - 13.01.2020
// Klassen

// Eine Klasse ist ein Bauplan für Objekte
// Ein Objekt wird instanziiert
// Jede Klasse hat eine Konstruktor
// Mit "new" wird mit dem Konstruktor eon Objekt aus der Klasse erzeugt.
// Functionen in Klassen nennt man Methoden
// JavaScript Klassen können (ver)erben
/*
_____________________			_____________________
Fahrzeug						 LKW
_____________________ 			_____________________
return							Türen
_____________________	<--		_____________________
start()
stop()
_____________________
	^
	|
_____________________
Auto
_____________________
Türen
Motor
_____________________
*/

extends // Vererbung
move // Übergabe
instanceof // Überprüssen um was es sich handelt
// Klassen möglich groß schreiben


// Endwerde Aufbau 1 oder Aufbau 2
// Aufbau 1
class Fahrzeuge {
    constructor(width, height, velocity) {
        this.width = width;
        this.height = height;
        this.velocity;
    }
    move(distane) {
        console.log("Die Fahrt dauerte: ", distane / this.velocity);
    }
}

// Aufbau 2
Fahrzeug.prototype.move = function(distane) {
    constructor(width, height, velocity) {
        this.width = width;
        this.height = height;
        this.velocity;
    }
    move(distane) {
        console.log("Die Fahrt dauerte: ", distane / this.velocity);
    }
}

static KlassenMethode() {
    console.log("Dies ist eine KlassenMethode")
}
class Auto extends Fahrzeug { // extends	(Vererbung)
    constructor(width, height, velocity, doors, seats) {
        super(width, height, velocity);
        this.doors = doors;
        this.seats = seats;
    }
}

Auto.getClassName = undefined;

// Erzeugen
let f = new Auto(2, 0.5, 300, 27, 49)