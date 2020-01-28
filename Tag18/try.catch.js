//
// Die Klasse Error wird mit der abgeleiteten Klasse
// MyError erweitert.
//
//
class MyError extends Error {
	constructor( msg ) {
		super( msg );
	}
}




//
// Beispiel-Exception mit try - catch
//
//
//
function exception_example( ) {

	//
	//	TRY Block
	//
	try {
		//
		// Werfe eine neue Exception vom Typ MyError
		//
		throw new MyError("Banane")
	}
	//
	//	CATCH Block
	//
	catch( err ) {
		
		//
		// Teste, ob ein Fehler vom Typ MyError geworfen wurde
		//	
		if( err instanceof MyError  ) {
			console.warn("A MyError occured" ,err);
		}
		
		//
		// War die Exception nicht vom Typ MyError dann werfe die Exception weiter
		//
		else {
			throw err;
		}
	}
}


//
// Beispiel-Exception mit try - catch - finally
//
//
//
function exception_example_tcf( ) {


	//
	//	TRY Block
	//
	try {
		//
		// Werfe eine neue Exception vom T yp MyError
		//
		throw new MyError("Banane")
	}
	
	
	//
	//	CATCH Block
	//
	catch( err ) {
		
		//
		// Teste, ob ein Fehler vom Typ MyError geworfen wurde
		//
		if( err instanceof MyError  ) {
			console.warn("A MyError occured" ,err);
		}
		
		//
		// War die Exception nicht vom Typ MyError dann werfe die Exception weiter
		//
		else {
			throw err;
		}
	}
	
	//
	//	FINALLY Block 
	//	(Wird immer ausgelöst, egal ob eine Exception geworfen wurde oder nicht)
	//
	finally {
		console.info( "Exception or not.. Diese Ausgabe erfolgt immer");
	}
}





//
// Beispiel-Exception mit try - catch  return
//
//
//
function exception_example_return( ) {

	//
	//	TRY Block
	//
	try {
		//
		// Werfe eine neue Exception vom Typ MyError
		//
	//	throw new MyError("Banane")
		return -1;
	}
	//
	//	CATCH Block
	//
	catch( err ) {
		
		//
		// Teste, ob ein Fehler vom Typ MyError geworfen wurde
		//	
		if( err instanceof MyError  ) {
			console.warn("A MyError occured" ,err);
		}
		
		//
		// War die Exception nicht vom Typ MyError dann werfe die Exception weiter
		//
		else {
			throw err;
		}
		return -2;
	}
	finally {
		return 3;
	}
}


let r = exception_example_return()