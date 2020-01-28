class StaTisch {
    constructor() {
        this.value = Math.random();
    }
    static isEven(number) {
        console.log("value: ", this.value); // KEINE INSTANZ - KEIN THIS!
        return number % 2 == 0;
    }
}


console.log(new StaTisch().value);

console.log(StaTisch.isEven(4));
console.log(StaTisch.isEven(5));
console.log(StaTisch.isEven(7));
console.log(StaTisch.isEven(8));