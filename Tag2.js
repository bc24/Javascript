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
  for(let i = 3; i <= n; i++) {
    f[i] = f[i-1] + f[i-2];
  }
  return f[f.length-1];
}
fibonacci(10) // Beispiel Ausgabe für den Wert 10

// Summiere die Zahlen die Fibonacci Folge aus der ersten Aufgabe.
fibonacci.reduce( (a,b) => a + b )

// Erstelle ein Script mit den Functionen:
// Eine Function soll 3 Parameter deklarieren, (Vorname, Nachname, Alter)
// Erstelle ein Array und fülle dies mit 3 Personenobjekten (Nutze die Function dafür)
// Vergebe das Alter mit einer Zufallfunktion, dass Alter muss zwischen 18 und 99 liegen.
// Filtere aus dem array alle Personnen unter 25
// Filtere aus dem Array alle Personen über 40
// Erstelle danach ein neues Array, welches nur aus den Vornamen besteht.
// Hilfe unter https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/fill


Personen= Array("Vorname","Nachname","Alter");

var min = 18;
	max = 99;
function Alter (min, max){
	return Math.floor(Math.random()*(max-min+1))+min;
}
Alter(18,99)

function Personen(Vorname,Nachname,Alter){
	Vorname = Vorname;
	Nachname = Nachname;
	Alter = new Array(3).fill(value[, 18[, 99[,Alter]]]).map(m=>Math.random())
	Ausgabe = alter.filter( Alter => Alter <= 25 && alter.filter(Alter => Alter >= 40 )
	console.log("Alle Personen unter 25:" + " " + Unter25 \n "Alle Personen über 40:" + " " + Ueber40)
}
console.log(Ausgabe)

	
