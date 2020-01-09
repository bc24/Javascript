// Tag 4 - 09.01.2020
// JavaScript Canvas

// Functionensammlung
moveTo(x,y)
lineTo(x,y)
fillRect(x,y,width,height)
arc(x,y,startwickel,stopwinkel)
stroke()
fill()
beginPath()
clearRect(x,y,width,height)
setInterval(Funksion,Interval in Milisekunden)			// Neue Figur beginnen
setTimeout(Funksion,Interval in Milisekunden)			
clearInterval(ID)
clearTimeout(ID)
requestAnimationFrame(Funksion)

// Context
fillstyle					// Legt die Farbe, den Verlauf oder das Muster fest, mit denen die Zeichnung gefüllt wird, oder gibt sie zurück
strokestyle					// Legt die Farbe, den Verlauf oder das Muster für Striche fest oder gibt sie zurück // ctx.fillstyle='#FF0000';
shadowColor					// Legt die für Schatten zu verwendende Farbe fest oder gibt sie zurück
shadowBlur					// Legt den Unschärfegrad für Schatten fest oder gibt diesen zurück
shadowOffsetX				// Legt den horizontalen Abstand des Schattens von der Form fest oder gibt ihn zurück
shadowOffsetY				// Legt den vertikalen Abstand des Schattens von der Form fest oder gibt diesen zurück


// Erstellen eines Canvas
<canvas id="id" width="600" height="400"></canvas>
// Anfangen zu zeichen
var c = document.getElementById("id");
var ctx = c.getContext("2d");							// Grad/180*PI		BOG*Pi/180		360°=Z*Pi
ctx.moveTo(0, 0);										// Curser setzen
ctx.lineTo(200, 100);
ctx.stroke();

// Fonts und Text in Canvas
let txt ='Hallo'
ctx.font = '12px Arial';
let txtwidth = ctx.measureText(txt).width				// measureText gibt die Breite des Textes aus
ctx.strokeText(txt,ctx.canvas.width/2-txtwidth/2)
ctx.canvas.height/2-12/2);
ctx.stroke()
