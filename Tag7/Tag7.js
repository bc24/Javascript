// Tag 7 - 14.01.2020
// Tasterturevents

// Punkte im Koordinatensystem, Linien, Steigung berechnen und so weiter
// Mehr Klassen (Getter / Setter)
/*

Point
_____________________________
x : Nubmer
y : Number
-----------------------------
create Point(angle,distance)
getDistance(Point):Number
getAngle(Point:Number)
_____________________________


Line
_____________________________
Pt1 : Point
Pt2 : Point
-----------------------------
draw(context)
_____________________________

x=x+cos(angle)*distance
y=y+sin(angle)*distance

pt1=new Point(10,20);
pt2=new Point(20,30);

dist=pt1.getDistance(pt2);
ang=pt1.getAngle(pt2);
pt3=pt2.createPoint(ang.dis);

line=new Line(pt1,pt3);
line.draw(ctx)

_____________________________
|  x                        |   |   =   y2-x1=Ay
|     x                     |   _   =   x2-x1
|        x                  |
|___________________________|

_____________________________
|  \                        |
|   \                       |
|    \                      |
|___________________________|

_____________________________
|  |_\                      |
|   |_\                     |
|    |_\                    |
|___________________________|

*/

