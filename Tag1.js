// Tag 1 - 06.01.2020
// Erstelle ein kleines Script. Gebe “HAPPY NEW YEAR“ aus.
console.log("HAPPY NEW YEAR")


// Schreibe ein Script. Das Script soll eine Gleitkommazahl als Literal fesrlegen.
// Trenne von der Gleitkommazahl den Vorkommawert und den Nachkommawert (Keinen Typecast verwenden)
// *Ab hier Typecast in String möglich* *how to typecast* „+Nachkommastelle
zahl = 123.75
value = zahl
vorkommawert = 0;

/*
	Trennung der Vorkommazahl und der Nachkommazahl
*/
while( zahl > 1 ) {
  vorkommawert += 1;
  zahl -= 1;
}


nachkommawert = zahl
console.log( vorkommawert, nachkommawert)



vorkommabin = ""
nachkommabin = ""
while( vorkommawert != 0) {
 vorkommabin =( vorkommawert % 2 ) + vorkommabin 
 vorkommawert = parseInt( vorkommawert / 2)
}


/* 
 Zur Begrenzung der Stellen der Nachkommazahl
 Endlosschleife wenn eine Periode auftreten sollte
*/
counter = 0 
		
/*
 Berechnung der Nachkomma Dualzahl
*/
while( nachkommawert != 0 ) {
 nachkommawert *= 2
 
/*
	Alternative zur If/Else Anweisung
	nachkommabin += nachkommawert >= 1 ? "1" : "0"
	 if (nachkommawert >= 1)  
	 nachkommawert -= 1
*/

 if (nachkommawert >= 1)  {
   nachkommabin += "1";
   nachkommawert -= 1;
 }
 else 
   nachkommabin += "0"
 
 
 if(counter++ > 53) 
   break
}

console.log( vorkommabin, nachkommabin )



// Schreibe ein Script. Das Skript soll wieder einen Wert als Literal in Quellcode deklarieren.
// Diesmal soll ein binärer Nachkommawert wieder in eine dezimale Nachkommastelle umgerechnet werden.
vorkommabin = "1111011" // 123
nachkommabin = "11" 	// 0.75

vorkommazahl = 0
nachkommazahl = 0

faktor = 0

for( i = vorkommabin.length -1  ; i >= 0  ; i-=1 ){
	if( vorkommabin[i] == "1" )
		vorkommazahl += 2 ** faktor
	
	faktor++
}

console.log(vorkommazahl) 

faktor = 1;
for( i = 0;  i < nachkommabin.length; i++ ) {
	
	if( nachkommabin[i] == "1" )
		nachkommazahl += 2 ** -faktor
	
	faktor+=1;
}

console.log(nachkommazahl) 
console.log( vorkommazahl + nachkommazahl )

