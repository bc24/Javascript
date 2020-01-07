// Tag 2 - 07.01.2020
// Erstelle ein Script zur Bereichnung der Fibonacci - Folge:
// 0 1 1 2 3 5 8 13 21 34 55 89 134
// definiere ein Function mit dem Functionkopf:
// fibonacci(n)

// Der Parameter n soll die Anzahl der zu berechnenden Zahlen sein.
// Die Function soll alle berechneten Zahlen ausgeben.

// Aufgabe mit fibonacci(Wert)
function fibonacci(n) {
  if (n <= 2) return 1;

  const f = [0, 1, 1];
  for(let i = 3; i <= n; i++) {
    f[i] = f[i-1] + f[i-2];
  }
  return f[f.length-1];
}
fibonacci(10) // Beispiel Ausgabe für den Wert 10

// Summiere die Zahlen die Fibonacci Folge aus der ersten Aufgabe.
fibonacci.reduce( (a,b) => a + b )