// Tag 2 - 07.01.2020
// Erstelle ein Script zur Bereichnung der Fibonacci - Folge:
// 0 1 1 2 3 5 8 13 21 34 55 89 134
// definiere ein Function mit dem Functionkopf:
// fibonacci(n)

// Der Parameter n soll die Anzahl der zu berechnenden Zahlen sein.
// Die Function soll alle berechneten Zahlen ausgeben.

// Aufgabe mit fibonacci(Wert)
function fibonacci(n) {
    if (n <= 2) return 1;

    const f = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[f.length - 1];
}
fibonacci(10) // Beispiel Ausgabe für den Wert 10

// Zweite Lösung mit schleife
function fibonacci(n) {
    let a = 0;
    let b = 1;

    while (n-- > 0) {
        let zahl = a + b;

        console.log(zahl);

        a = b;
        b = zahl

    }
}

// Summiere die Zahlen die Fibonacci Folge aus der ersten Aufgabe.
function fibonacci_summe(n) {
    let a = 0;
    let b = 1;
    let summe = 0;

    while (n-- > 0) {
        let zahl = a + b;

        //console.log( zahl );
        summe += zahl;

        a = b;
        b = zahl

    }
    console.log(summe)
}

// Erstelle ein Script mit den Functionen:
// Eine Function soll 3 Parameter deklarieren, (Vorname, Nachname, Alter)
// Erstelle ein Array und fülle dies mit 3 Personenobjekten (Nutze die Function dafür)
// Vergebe das Alter mit einer Zufallfunktion, dass Alter muss zwischen 18 und 99 liegen.
// Filtere aus dem array alle Personnen unter 25
// Filtere aus dem Array alle Personen über 40
// Erstelle danach ein neues Array, welches nur aus den Vornamen besteht.
// Hilfe unter https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/fill


//
// Funktion zur Erstellung einer Zahl 
// zwischen 18 und 99
//
function random_alter() {
    let min = 18;
    let max = 99;

    return parseInt(Math.random() * (max - min) + min) + 1;
}

//
// Erstellt ein "Personen" Objekt
// mit einem Vornamen, einem Nachnamen und einem 
// Alter
//
//
function create_person(vorname, nachname, alter) {
    return {
        vorname: vorname,
        nachname: nachname,
        alter: alter
    };
}

//
// Erzeugt ein Array mit num_persons Personen
// Ruft die create_person Funktion auf und speichert
// das erhaltene Objekt in dem Array persons
//
//
function create_person_array(num_persons) {
    let persons = []


    for (let i = 0; i < num_persons; i++) {
        let person = create_person("Vorname" + i, "Nachname" + i, random_alter());
        persons.push(person)
    }

    return persons;
}

//
// Ruft die Funktion create_person_array auf und
// erstellt ein Array mit n Personen
//
let persons = create_person_array(3);
console.log(persons); // Kontrollausgabe

//
// Filterung aller Personen deren Alter < 25 und
// > 40 ist 
//
persons = persons.filter(p => p.alter >= 25 && p.alter <= 40);
console.log(persons); // Kontrollausgabe

//
// Mit der MAP Funktion werden aus dem Array
// persons alle Vornamen gefiltert 
//
let persons_firstname = persons.map(p => p.vorname);
console.log(persons_firstname); // Kontrollausgabe