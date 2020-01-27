class Field {
	constructor( id ) {
		this.id = id;
		
		this.north = null;
		this.south = null;
		this.east = null;
		this.west = null;
	}
}


const maxcols = 5;
const maxrows = 5;
const maxfields = maxcols * maxrows;
var fields = [];

var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');



for( let i = 0; i < maxfields; i++) {
	fields.push( new Field( i +1) );	
}


for( let y = 0 ; y < maxrows; y++) {
	for( let x = 0 ; x < maxcols; x++) {
		let id = y * maxcols + x;
		
		ctx.fillStyle="#ff00ff";
		ctx.font="10px Arial";
		
		ctx.beginPath();
		ctx.rect( x * 40 , y * 40, 40 , 40 );
		ctx.fill()
		ctx.stroke();

		ctx.fillStyle="#ffff00";
		ctx.fillText( fields[id].id, x * 40 + 5, y * 40 +15);
		
		
		
		
	}
}

