

function prime_check( n ) {
	
	if(n > 0&& n <= 2 || n % 2 == 0) 
		return true;
	
	
	for( let i = 3; i < n; i+=2 ) {
		if( n % i == 0 )
			return false;
	}
	
	return true;
	
}


let value = Number( prompt( "Zahl eingeben" ) );
const num = value;
let primearr = [];
let result = [];

for( let i = 2; i < value; i+=2 ) {

	if( prime_check( i ) ) {
		primearr.push( i ) ;
	}
	
	while( value % i  == 0 ) {
		result.push( i );
		value /= i;
	}

	if( i == 2) {
		i--;
	}
}

if( value != 0) {
	result.push( value );
}

alert(num + " " + result);