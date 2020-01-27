


var start_time = new Date().getTime();
var field_dim = 25;
var cols = 20;
var rows = 20;
var counter = 0;
var num_fields = cols * rows;

//
// Funktion zur Zeichnung des Timers ( oben mittig )
// 
//
//
function drawTimer( )  {
	let cvs = document.getElementById('cvs');
	let ctx = cvs.getContext('2d');
	
	let mid = (cols * field_dim)  / 2;
	
	let current_time = new Date().getTime();
	
	ctx.save();
	
	ctx.fillStyle='#d1d1d1';
	ctx.strokeStyle= '#00ff00';
	let elapsed_time = current_time - start_time;
	ctx.beginPath();
	
	ctx.rect( mid - 100 , 0 , 200 , 10 );
	ctx.fill();
	
	ctx.beginPath();
	ctx.font = '10px Arial';
	ctx.fillStyle= '#00ff00';
	ctx.fillText( ""+elapsed_time, mid - 50, 10 );
	
	ctx.stroke();
	ctx.fill();
	ctx.restore();
	
	
}


//
// Alle verfügbaren Items 
// 
var available_item = [
	"Banane",
	"Schwert"
];



//
// Klasse Field. 
// ( Wird sowohl vom "NPC" als auch vom "Player" genutzt)
//
class Field {
	constructor(id) {
		this.id = id;
		this.item = null;
		this.items = [];
		this.neighbors= {
			n: null,
			s: null,
			e: null,
			w: null
		};
	}
}




//
// Gibt ein zufällig gewähltes Feld zurück
//
function getRandomField( mfields ) {
	let y = parseInt ( Math.random() * mfields.length) ;
	let x = parseInt ( Math.random() * mfields[y].length )
	return mfields[y][x];
	
}

//
// Verbindet zufällig Felder miteinander.
// 
// params :
//	mfields 	Das mehrdimensionale Array der Felder
//  percent 	Anteil der neu zu verbindenden Felder
//
function connectRandomFields( mfields, percent ) {
	let connections = parseInt(num_fields * percent);
	let number_of_tries = 0;
	
	while(connections >= 0 && number_of_tries < 100) {
		let y = parseInt ( Math.random() * mfields.length );
		let x = parseInt ( Math.random() * mfields[y].length );
		
		let neighbors = getNeighbors( mfields , [], y, x );
		
		let rnd = parseInt( Math.random() * 4 );
		number_of_tries++;
		
		switch( rnd ) {
			case 0:
				if( mfields[y][x].neighbors.n || !neighbors[rnd]) {
					mfields[y][x].neighbors.n.neighbors.s = null;
					mfields[y][x].neighbors.n = null
					//continue;
				}
				else {
					mfields[y][x].neighbors.n = neighbors[rnd];
					neighbors[rnd].neighbors.s = mfields[y][x];
				}
				break;
			case 1:
				if( mfields[y][x].neighbors.s || !neighbors[rnd]) {
					mfields[y][x].neighbors.s.neighbors.n = null;
					mfields[y][x].neighbors.s = null
					
				}
				else {
					

					mfields[y][x].neighbors.s = neighbors[rnd];
					neighbors[rnd].neighbors.n = mfields[y][x];
				}
				break;
				
			case 2:
				if( mfields[y][x].neighbors.w || !neighbors[rnd])
					continue;

				mfields[y][x].neighbors.w = neighbors[rnd];
				neighbors[rnd].neighbors.e = mfields[y][x];
				break;
				
			case 3:
				if( mfields[y][x].neighbors.e || !neighbors[rnd])
					continue;

				mfields[y][x].neighbors.e = neighbors[rnd];
				neighbors[rnd].neighbors.w = mfields[y][x];
				break;
			
				
				
			
		}
		
		number_of_tries = 0 ;
		connections--;
		
	}
	
}


//
// Zeichnungsoperationen auf dem Canvas
// 
// params :
//	mfields 	Das mehrdimensionale Array der Felder
//  first 		"Start" Position
//	last		"Ziel" Position
//
function drawMaze( mfields, first, last  ) {
	console.log("startfeld", first);
	let cvs = document.getElementById('cvs');
	let ctx = cvs.getContext('2d');
	
	ctx.fillStyle='#000000';
	
	for( let y = 0; y < mfields.length; y++ ) {
		for( let x = 0; x < mfields[y].length; x++ ) {
			ctx.beginPath();
			ctx.strokeStyle='#ffff00';
			ctx.rect( x * field_dim, y * field_dim , field_dim , field_dim );
			ctx.fill();
			ctx.stroke();			
		}
	}
	
	ctx.beginPath();
	ctx.fillStyle='#d1d1d1';
	

	
			
	for( let y = 0; y < mfields.length; y++ ) {
		for( let x = 0; x < mfields[y].length; x++ ) {
			ctx.beginPath();
			ctx.strokeStyle='#ffff00';

			if( mfields[y][x].neighbors.n ) {
				if(y != 0)
					ctx.rect( x * field_dim + 1 , (y-1) * field_dim +1 , field_dim - 2 , field_dim*2 -2 );
			}
			if( mfields[y][x].neighbors.s ) {
				if(! (y == mfields.length - 1) ) 
					ctx.rect( x * field_dim + 1 , y * field_dim +1 , field_dim - 2 , field_dim*2 -2 );
			}
			
			if( mfields[y][x].neighbors.w ) {
				ctx.rect( (x-1) * field_dim + 1 , y * field_dim +1 , field_dim*2 - 2 , field_dim -2 );
			}
			if( mfields[y][x].neighbors.e ) {
				ctx.rect( (x) * field_dim + 1 , y * field_dim +1 , field_dim*2 - 2 , field_dim -2 );
			}				
			ctx.fill();
			ctx.beginPath();
			ctx.fillStyle="#ff0000";
			
			if( mfields[y][x].item ) {
				if( mfields[y][x].item == "Banane" )
					ctx.fillText( "B" , (x) * field_dim + field_dim/2 , y * field_dim +1 +field_dim/2 );
				if( mfields[y][x].item == "Schwert" )
					ctx.fillText( "S" , (x) * field_dim + field_dim/2 , y * field_dim +1 +field_dim/2 );
				
			}
			ctx.fill();
			ctx.fillStyle="#000000";
		}
		
		
	}
	
	
	
	// Aktuelles Feld einzeichnen
	
	let y = parseInt( first.id / cols );
	let x = parseInt( first.id % cols );
	ctx.beginPath();
	ctx.arc(  x * field_dim + field_dim/2,y * field_dim + field_dim/2,  5, 0 , 2*Math.PI );
	
	ctx.fillStyle='#ffff00'
	ctx.fill();
	
	
	ctx.fillStyle='#d1d1d1'

	if( first.neighbors.n ) 
		ctx.rect( x * field_dim + 5, (y-1) * field_dim +5 , field_dim - 10, field_dim - 10);
	if( first.neighbors.s ) 
		ctx.rect( x * field_dim + 5, (y+1) * field_dim +5 , field_dim - 10, field_dim - 10);
	if( first.neighbors.w ) 
		ctx.rect( (x-1) * field_dim +5, (y) * field_dim +5 , field_dim - 10, field_dim - 10);
	if( first.neighbors.e ) 
		ctx.rect( (x+1) * field_dim +5 , (y) * field_dim +5 , field_dim - 10, field_dim - 10);
	
	ctx.fill();
	//ctx.stroke();			

	

	// Letzes Feld einzeichnen
	y = parseInt( last.id / cols );
	x = parseInt( last.id % cols );

	ctx.beginPath();
	ctx.arc(  x * field_dim + field_dim/2,y * field_dim +  field_dim/2,  5, 0 , 2*Math.PI );
	
	ctx.fillStyle='#0000ff'
	ctx.fill();
	
	drawTimer()
}



//
// Verbindet das Feld oben links mit dem Feld unten rechts
// 
// params :
//	mfields 	Das mehrdimensionale Array der Felder
//
function createPortal( mfields ) {
	
	mfields[0][0].neighbors.n = mfields[ mfields.length -1  ][ mfields[0].length -1 ];
	mfields[ mfields.length -1  ][ mfields[0].length -1 ].neighbors.s = mfields[0][0];
	
}


//
// Findet unter Berücksichtigung der besuchten Felder alle
// gültigen Nachbarfelder eines Feldes.
// 
// params :
//	mfields 	Das mehrdimensionale Array der Felder
//  visited		Das Array der besuchten Felder
// 	y,x			Aktuelle Position
//
//
function getNeighbors( mfields , visited, y, x ) {
	let res = [];
	
	res.push( y - 1 >= 0  				?  mfields[y-1][x] 		: null ); // north
	res.push( y + 1 < mfields.length  	?  mfields[y+1][x] 		: null ); // south
	res.push( x - 1 >= 0				?  mfields[y  ][x - 1] 	: null ); // west
	res.push( x + 1 < mfields[y].length ?  mfields[y  ][x + 1] 	: null ); // east
	
	res = res.map( m=> {
		if ( !m || visited.some( v=> v.id == m.id ))
			return null;
		
		return m;	
		
	});
	
	
	return res;	
	
}



let fields = [];
let mfields = [];

for(let i = 0; i < num_fields; i++) {
	fields.push( new Field( i ) ) ;
}

for(let i = 0; i < num_fields; i+=cols) {
	mfields.push( fields.slice( i, i+cols) );
}



//
// Bewegt das Zielfeld auf ein gültiges Nachbarfeld
// 
// params :
//	npc_field 	Das Zielfeld
//
//
function moveNPC( npc_field ) {
	let rnd = null;
	let fld = null;
	
	
	
	if( Object.values( npc_field.neighbors).every( fld => fld == null) )
		return npc_field;
	
	do {
		rnd = parseInt( Math.random() * 4 );
		
		if(rnd == 0 && npc_field.neighbors.n )  
			fld = npc_field.neighbors.n;
		else if(rnd == 1 && npc_field.neighbors.s )  			
			fld = npc_field.neighbors.s;
		else if(rnd == 2 && npc_field.neighbors.w )  			
			fld = npc_field.neighbors.w;
		else if(rnd == 3 && npc_field.neighbors.e )  			
			fld = npc_field.neighbors.e;
		
		
	}while( !fld );
	
	
	npc_field = fld; 
	return npc_field;
	
}

//
// Nutzt den Backtracking-Algorithmus muss ein Labyrinth zu erzeugen
// 
// params :
//	mfields 	Das mehrdimensionale Array der Felder
//
//
function createMaze( mfields ) {
	
	var stack = [];
	var visited = [];	

	y = parseInt( Math.random() * mfields.length );
	x = parseInt( Math.random() * mfields[y].length );

	let start = mfields[y][x];
	let first = start;


	
	stack.push( start );
	stack.push( start );
	visited.push( start );
	
	
	
	
	while( stack.length  > 0 ){
		
			
		
		
		let neighbors = getNeighbors( mfields, visited, y,x)
	//	console.log(start, n);

		if ( !neighbors.every( n => n==null ) ) {
			
			let rnd = null;
			let fld = null;
			
			do {
				rnd = parseInt( Math.random() * neighbors.length ) ;
				fld = neighbors[rnd];
				
			}while(!fld);
			
			switch( rnd ) {
				case 0:
					start.neighbors.n = fld;
					fld.neighbors.s = start;
					break;
				case 1:
					start.neighbors.s = fld;
					fld.neighbors.n = start;
					break;
				case 2:
					start.neighbors.w = fld;
					fld.neighbors.e = start;
					break;
				case 3:
					start.neighbors.e = fld;
					fld.neighbors.w = start;
					break;	
			}
			
			start = fld;
			
			stack.push( fld );
			visited.push( fld );
			
			
		}
		else {
			start = stack.pop();
		}

		y = parseInt( start.id / cols );
		x = parseInt( start.id % cols );
	}

	return first;

}




//
// Erzeugt das Labyrinth aus dem mehrdimensionalen Array
//
var first = createMaze( mfields );

var last = null ;

var current_field = null;

//
// Wählt ein zufälliges Zielfeld
//
do  {
	last = mfields[  parseInt( Math.random() * mfields.length )][parseInt( Math.random() * mfields[y].length )];
}while( !last  || first == last );


//
// Erzeugt die "Portal" Verbindung
//
createPortal( mfields );


//
// Platziert die Gegenstände auf einem zufälligen Feld.
//
getRandomField( mfields ).item = available_item.pop();
getRandomField( mfields ).item = available_item.pop();

//
// Zeichnet das Labyrinth
//
drawMaze( mfields, first, last );


current_field = first;


//
// Startet den Intervall zur Anzeige des "Timers"
//
setInterval( drawTimer , 750 );



//
// Fügt der Seite einen onkeyup Event hinzu
// 
// params :
//	evt 	Der erzeugte Event
//
//
document.body.onkeyup = function( evt ) {
	const cvs = document.getElementById('cvs');
	const ctx = cvs.getContext('2d');
	
	let y  = parseInt( current_field.id / cols);
	let x  = parseInt( current_field.id % cols);
	
	ctx.fillStyle='#000000';
	ctx.beginPath();
	ctx.rect( x * field_dim + 1, y * field_dim +1 , field_dim-2, field_dim-2 );
	ctx.fill();
	
	switch( evt.key ) {
		case "ArrowLeft":
		case "a":
			if( current_field.neighbors.w ) {
				current_field = current_field.neighbors.w;
			}
			break;
		case "ArrowRight":
		case "d":
			if( current_field.neighbors.e ) {
				current_field = current_field.neighbors.e;
			}
			break;
		case "ArrowUp":
		case "w":
			if( current_field.neighbors.n ) {
				current_field = current_field.neighbors.n;
			}
			break;
		case "ArrowDown":
		case "s":
			if( current_field.neighbors.s ) {
				current_field = current_field.neighbors.s;
			}
			break;
			
		
	}
	
	if(current_field.item ) {
		first.items.push( current_field.item ) ;
		current_field.item = null;
	}
	
	y  = parseInt( current_field.id / cols);
	x  = parseInt( current_field.id % cols);
	ctx.beginPath();
	ctx.arc(  x * field_dim + field_dim/2,y * field_dim + field_dim/2,  5, 0 , 2*Math.PI );
	
	ctx.fillStyle='#ffff00'
	ctx.fill();
	counter++ ;
	
	if(counter % 20 == 0)  {
		connectRandomFields( mfields, 0.1 );
	//	drawMaze( mfields, current_field, last );
	}
	
	if(counter % 5 == 0)  {
		last = moveNPC( last ) ;
		
	}	
	
	drawMaze( mfields, current_field, last );
	
	if( current_field == last ) 
		alert( "Yaaaaay: \nDu hast " +  counter + " Schritte gebraucht\n" + ( counter < 100 ? "Pro" : "Noob!" )+ "\nDeine Items: " + first.items);
	

	
	
}
