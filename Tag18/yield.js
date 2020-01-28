//
// Endloser Generator
//
function * fibonacci() {
  let a = 0; 
  let b = 1;
  
  while(true) {
 		let c = a+b;   
		a = b ;
	  b = c;
    yield c;
  }
}


//
// Endlicher Generator
//
function * fibonacci_n(n ) {
  let a = 0; 
  let b = 1;
  
  while(n-->0) {
 		let c = a+b;   
		a = b ;
	  b = c;
    yield c;
  }
}


//
// Ruft den endlichen Generator auf und gibt alle Werte aus
//
x = fibonacci_n(10);
value = x.next();
do{
  console.log(value);
  value = x.next();
}while( !value.done  );

  
  
