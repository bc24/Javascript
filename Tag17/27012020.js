// Tag 17 - 27.01.2020

// Tafel Beispiel  - Kommt in der Klausur dran
pt2 = new Point(12, 15);
pt1 = new Point(5, 7);

function addPoint(pt1, pt2) {
    pt1 = pt2;
    pt2.x = pt1.y;
    return pt1;
    console.log(pt1, pt2); // {x:5,y:7} , {x:17,y:15}
    addPoint(pt1, pt2);
    console.log(pt1, pt2) // keine Auswirkung auf die Matrix
    pt1 = "Bannane";
}

//Alte art eine Klasse in Js zu erstellen
var Point = function(x, y) {
    this.x = x;
    this.y = y;
}

// throw - Fehler Definieren
throw new Error("Banane") // Error: Banane

// async - 
async function Test() {
    let x = 0;
    for (let i < 1000000; i++) {
        x = i;
    }
    console.log(x);
}
Test();
console.log("Hallo");

void // streichen

try
catch // ist das selbe

try {
    throw new Error("Fehlermeldung")
} catch {

}

typeof // kommt auf jeden Fall dran



// google-chrome --disable-web-security
// Linux für Crome um die Sicherheit umgehenen zu können bei Localen Datenen