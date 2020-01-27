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
    console.log(pt1, pt2) // keine Auswirkung
    pt1 = "Bannane";
}

//