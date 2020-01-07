# Javascript
 Alles was Wir im Unterricht machen zu Javascript.
 
# Tag 1 (06.01.2020)

## Primäre Datentypen
•	Null (null)
•	Undefined
•	Boolean (true, fales)
•	Number (Float) (zuverlässig im Bereich -2^53 bis +2^53)
•	Symbol
•	String
•	Object

## Kontrollstruckturen
If(Expression)
    console.log(42)
if(Expression){
Startwert1
Startwert 2
Startwert N}
else if(Expression){ }
else{
sonsole.log()}

## Schleifen
for Schleife
for(Initialierung; Bedindung; Update;)
for(=0; i<10; i++)
   console.log(i)
for(; ;){console.log(„Ohne Ende“)}  // Endlos schleife
for(let i=0; i<10;i++){}

## while Schleife
while(Expression){ }
while (true){ } // Endlosschleife
while(false){ }

## do Schleife
do{
Anweisung1
Anweisung2}
while(Expression);
break und continue gibt es auch
Fallunterscheidungen
switch(Expression){
case 1: Anweisung1 Anweisung2
case 2: Anweisung1 Anweisung2}
Globale Variable
U=7 {x=9} console.log(x)
Beispiel für Switch case
let wert = 1;
switch(wert){
case 1:
console.log(„Ba“)
break;
case 2:
console.log(„Na“)
break;
default:
console.log(„Ne“)
break;
}
x=5
typeof(x)
Ausgabe
„number“

## Operatoren
## Unäre Operatoren
•	+
•	-
•	! true		(Not)
•	~3  		(Ergebniss 4)

## Arithnetische Operatoren
•	+
•	-
•	*
•	/
•	%

## Tenärer Operatoren (Bedindung Operator)
•	3 > 2 ? true : false

## Logische Operatoren
•	ff
•	||
•	^

## Bitweise Operatoren
•	<<
•	>>
•	^
•	~

## Zuweisungsoperatoren
•	=
•	+=
•	-=
•	/=
•	<<=
•	>>=
•	%=
•	&=
•	^=

## Binäre Operatoren
•	3+2
•	5-2
•	*
•	/
•	<<
•	>>
•	ff 		(and)
•	|| 		(or)
•	&
•	|
•	^

## Vergleichsoperatoren
•	= =
•	!=
•	<=
•	>=
•	= = =

## Number
Number(0.2).toString(2)
Number(0.2).toFixed(2)		(Rundet )
Number.isNaN		(Prüfen ob es eine Nummer ist)
Number.isInteger(1.0)
Number.isFinite(Infinity)
parseInt(44.7)
Math.min > Math.max

### Exkurs
### Kurzer Weg
x if v == true
x=7
v= x%2==0? 10:5

### Langer Weg
let v=0
If (x%2==0)
v=10
else
v=5

### Switch / Case
switch(2){
    case 1:
        console.log(wert *1)
        break;
    case 2:
        console.log(wert*2)
        break;
    case "banane":
        console.log(wert*3)
        break;
}

### Zum Nachlesen
ECMAScript


### Aufgaben
1)	Erstelle ein kleines Script. Gebe “HAPPY NEW YEAR“ aus.
2)	Schreibe ein Script. Das Script soll eine Gleitkommazahl als Literal fesrlegen. Trenne von der Gleitkommazahl den Vorkommawert und den Nachkommawert (Keinen Typecast verwenden) *Ab hier Typecast in String möglich* *how to typecast* „+Nachkommastelle Wandle beide Werte mit Schleifen in Binärwerte um und 
3)	Schreibe ein Script. Das Skript soll wieder einen Wert als Literal in Quellcode deklarieren. Diesmal soll ein binärer Nachkommawert wieder in eine dezimale Nachkommastelle umgerechnet werden.


# Tag 2 (07.01.2020)
# Funktionen
/*
let = Blockgebundene Variablen
var = Globale Variablen
*/

function Bezeichner(Parameter) {
}

function fx2(x){
	return x **2;		// console.log(fx2(3))
}					

function fxy (x,y){
	return x **y;
}

function fxyz (x,y,z=3){
	return x ** y * z;
}
console.log(fxyz(3,4,2))	// console.log(fxyz(3,4))

# Funktionen2
var fx = function(x){

}

var = fx2 = function(x){
	return x ** 2;
}

# Funktionen3 (Pfeilfunktion, Arrow Funktion, Cambda)
var fx = (x) => x ** 2;

var fxy=(x,y) => {
	return x ** y;
}

# Array

// pop() letzte Poision entfernen (rechte seite)
// schift() von vorne entfernen (linke seite)
a= Array(5)
array(6) [1,2,"hallo","xu",88,66]
a[1]

a = [14,57,8,6,5,4,58,484]
a.sort()	// Sotieren

function sotieren(a,b){
	return a-b;				//Sotiert aufsteigend
}
a.sort((a,b) => b-a)		//Sotiert absteigend

a.forEach(v => {
console.log("Element des Arrays", v)
});

a.reduce( (a,b) => a + b )				// Zusammenzählen (Summieren)
a.reduce( (a,b) => a + b ) => a<b?b:a) 	// Maximalwert

function create_xy(x,y){
return{
x: x,
y: y
}
}

a=[create_xy(10,20), create_xy(44,15), create_xy(11,20)]
function create_xy(x,y){
return{
x: x,
y: y
}
}

a.sort((a,b)=>b.x-a.x))

z= new Array(50).fill(0)	// Mit fill füllt er alle Arrys mit den Parameter aus.
z= new Array(50).fill(0).map(m=>Math.random())	// Füllt alle Arrays mit Zufallszahlen
