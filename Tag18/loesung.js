//
// Aufgabe 1
//




function modifiedFibonacci( ) {
	let a=0;
	let b=1;
	let C=1;
	
	for( let i = 0; i< 10; i++) {
		let s = a+b+C;
		
		a=b;
		b=C;
		C=s;
		
		console.log(s);
	
	}
}



//
// Aufgabe 2
//
function calculateRectangle( a , b ) {
	U = a*2 + b*2;  // a+a+b+b;
	A = a*b;		// A
	
	D = Math.sqrt( a**2 + b**2 );
	
	console.log(`a: ${a}\nb: ${b}\nU: ${U}\nA: ${A}\nD: ${D}`);
	
	
}


//
// Aufgabe 3
//
function centimetres2inch( cm = 0 , inch = 0 ) {
	
	
	if( cm ) 
		inch = cm * (1/2.54);
	else if( inch ) 
		cm = inch / 2.54;
		
	
	console.log( 'cm', cm.toFixed(4), 'inch', inch.toFixed(4) );
	
}


function celsius2fahrenheit( C = null, F = null ) {
	debugger;
	
	if(C != null) {
		F = ( C * 9/5) + 32;
	}
	else if(F != null) {
		C = (-32 + F ) * 5 / 9
		 //C = (F * 5/9) - 32
	}
	
	console.log( '°C', C.toFixed(4), 'F', F.toFixed(4) );

}


function kilo2lbs( kilo = null, lbs = null) {
	if( kilo!= null) 
		lbs = kilo * 2.205;
	else if(lbs != null ){
		kilo = lbs / 2.205;
	}
	
	console.log( 'Kilo', kilo.toFixed(4), 'lbs', lbs.toFixed(4) );
		

}



function kilo2lbs( kilo = null, lbs = null) {
	if( kilo!= null) 
		lbs = kilo * 2.205;
	else if(lbs != null ){
		kilo = lbs / 2.205;
	}
	
	console.log( 'Kilo', kilo.toFixed(4), 'lbs', lbs.toFixed(4) );
		

}


function meter2yards( meter = null, yards = null) {
	if( meter!= null) 
		yards = meter * 1.094;
	else if(yards != null ){
		meter = yards / 1.094;
	}
	
	console.log( 'Meter', meter.toFixed(7), 'Yards ', yards.toFixed(7) );
}



function cylindricVolume( d ,h ) {
	
	V = Math.PI * (d/2)**2 * h;
	
	console.log(`d: ${d}\nh: ${h}\nV: ${V}`);
	
}




function calculateAcceleration( s, t ) {
	
	a = (s*2 / t**2) * 0.981
	console.log(`s: ${s} \nt: ${t}\na: ${a}`)
	

	
	
}


function multiply ( a, b ) {
	c = 0;
	
	while(b-- > 0) {
		c += a;
	}
	
	console.log( c) 
}


function modulo ( a, reminder ) {
	c = a;
	
	while(true) {
		
		if(c-reminder > 0)
			c -= reminder;
		else
			break;
	}
	
	console.log( c) 
}



function matrix_multiply( matrix, value ) {

	matrix.forEach( (f,index,arr) => {
		if(Array.isArray( f ) )
			matrix_multiply( f , value );
		else
			arr[index] = f * value;
	} );
	return matrix;
	
}


function prime_check( n ) {
	
	if(n > 0&& n <= 2 || n % 2 == 0) 
		return true;
	
	
	for( let i = 3; i < n; i+=2 ) {
		if( n % i == 0 )
			return false;
	}
	
	return true;
	
}
 [					[
   [ 1,2,3 ],				   [ 3,6,9 ],
   [ 1,2,3 ], 	*  	3	=	   [ 3,6,9 ],
   [ 1,2,3 ],				   [ 3,6,9 ],
] 
