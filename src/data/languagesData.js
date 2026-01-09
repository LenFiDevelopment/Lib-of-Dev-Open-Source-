// Comprehensive programming language reference data

export const languages = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: '🟨',
    color: '#F7DF1E',
    description: 'The programming language of the web - runs in browsers and on servers (Node.js). Dynamically typed, event-driven, and perfect for interactive websites, APIs, and full-stack development.',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables',
            code: `// 3 Arten Variablen zu deklarieren

// 1. const - CANNOT be reassigned (recommended!)
const userName = "Max Mustermann";
const PI = 3.14159;
const isLoggedIn = true;
// userName = "Neuer Name"; // ❌ Fehler: Assignment to constant variable

// 2. let - Can be reassigned
let counter = 0;
counter = 1; // ✅ Funktioniert
counter++; // ✅ Auch okay

let email = "alt@email.com";
email = "neu@email.com"; // ✅ Kein Problem

// 3. var - VERALTET! Nutze es nicht mehr!
var oldStyle = "legacy"; // ❌ Nicht empfohlen

// Wichtig: Block Scope
{
  const innerVar = "nur hier sichtbar";
  let alsoInner = "auch nur hier";
}
// console.log(innerVar); // ❌ ReferenceError: not defined

// Mehrere Variablen gleichzeitig
const firstName = "Max", lastName = "Mustermann", age = 25;`,
            description: 'Variables are containers for data. JavaScript has 3 types: const (constant), let (changeable), and var (deprecated). Always use const as default - only use let when you really need to reassign.',
            usage: 'Nutze const für alles was sich nicht ändert (90% der Fälle). let nur wenn du wirklich reassignen musst (z.B. Counter in Loops). var ist veraltet wegen Function Scope statt Block Scope.',
            bestPractices: [
              '✅ Immer const als Standard verwenden',
              '✅ Nur let nutzen wenn Reassignment nötig ist',
              '✅ Beschreibende Namen: userName statt x, totalPrice statt tp',
              '✅ camelCase für Variablennamen: userLoginTime',
              '✅ SCREAMING_SNAKE_CASE für Konstanten: MAX_RETRY_COUNT',
              '❌ var komplett vermeiden (Function Scope Problem)',
              '❌ Keine Keywords als Namen: let class = "test" ❌',
              '❌ Keine Umlaute: let Größe - besser: groesse'
            ],
            commonMistakes: [
              '❌ const neu zuweisen: const x = 5; x = 10; // TypeError',
              '❌ Variable ohne Deklaration: name = "Max"; // Globale Variable!',
              '❌ var in Loops nutzen: Loop-Variable leckt in outer scope',
              '❌ Variablen nicht initialisieren: let user; console.log(user); // undefined'
            ],
            performanceTips: [
              'const und let haben identische Performance',
              'Nutze const für Semantik, nicht Performance',
              'Vermeide globale Variablen (langsamer Zugriff)',
              'Declare Variablen möglichst nah an ihrer Verwendung'
            ],
            relatedTopics: ['Scope', 'Hoisting', 'Temporal Dead Zone', 'Memory Management'],
            challenge: '💪 Erstelle: 1) Eine Konstante für dein Geburtsjahr, 2) Eine Variable für dein aktuelles Alter (ändert sich!), 3) Berechne das Jahr (Geburtsjahr + Alter)'
          },
          {
            title: 'Data Types',
            code: `// JavaScript hat 8 Datentypen (7 Primitive + Object)

// 1. STRING - Text
const name = "Max Mustermann";
const greeting = 'Hallo Welt'; // Single quotes auch okay
const template = \`Hallo \${name}!\`; // Template literals mit Backticks
const multiline = \`Zeile 1
Zeile 2
Zeile 3\`;

// 2. NUMBER - Zahlen (Int und Float sind gleich!)
const age = 25; // Integer
const price = 19.99; // Float
const negative = -42;
const scientific = 1.5e6; // 1500000
const infinity = Infinity;
const notANumber = NaN; // Not a Number

// 3. BOOLEAN - true oder false
const isLoggedIn = true;
const hasAccess = false;
const isAdult = age >= 18; // true

// 4. UNDEFINED - Variable deklariert aber nicht zugewiesen
let user; // undefined
console.log(user); // undefined

// 5. NULL - Absichtlich kein Wert
const emptyValue = null;
let result = null; // Explizit leer setzen

// 6. SYMBOL - Einzigartiger Identifier (Advanced)
const id = Symbol('id');
const anotherId = Symbol('id');
// id !== anotherId // true! Jedes Symbol ist unique

// 7. BIGINT - Sehr große Zahlen
const bigNumber = 9007199254740991n; // 'n' am Ende!
const alsoBig = BigInt(9007199254740991);

// 8. OBJECT - Komplexe Datenstrukturen
const person = {
  name: "Max",
  age: 25
};
const numbers = [1, 2, 3]; // Arrays sind auch Objects!
const func = function() {}; // Functions auch!

// Type Checking
typeof "text"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" ⚠️ JavaScript Bug!
typeof {}; // "object"
typeof []; // "object" ⚠️ Use Array.isArray([])`,
            description: 'JavaScript has 8 data types: String (text), Number (numbers), Boolean (true/false), Undefined (not assigned), Null (empty), Symbol (unique IDs), BigInt (large numbers), and Object (complex data). The first 7 are "Primitives" (immutable), Object is complex.',
            usage: 'Strings für Text, Numbers für Mathematik, Booleans für Bedingungen, Objects für strukturierte Daten. typeof prüft den Typ. Wichtig: JavaScript ist dynamisch typisiert - Variablen können ihren Typ ändern!',
            bestPractices: [
              '✅ Template Literals \`${var}\` statt String Concatenation',
              '✅ === statt == für Type-Safe Vergleiche',
              '✅ Array.isArray() statt typeof für Arrays',
              '✅ null für absichtlich leere Werte, undefined für nicht initialisiert',
              '✅ Number.isNaN() statt isNaN() (letzteres konvertiert)',
              '❌ Nicht == verwenden (macht Type Coercion)',
              '❌ typeof null === "object" ist ein Bug - extra checken!'
            ],
            commonMistakes: [
              '❌ == statt === nutzen: "5" == 5 ist true (Type Coercion)',
              '❌ NaN === NaN ist false! Nutze Number.isNaN()',
              '❌ typeof [] gibt "object" - nutze Array.isArray()',
              '❌ String + Number: "5" + 3 = "53" (String Concatenation!)',
              '❌ undefined vs null verwechseln'
            ],
            performanceTips: [
              'Primitive Types sind schneller als Objects',
              'Template Literals sind schnell - nutze sie!',
              'typeof ist sehr schnell',
              'parseInt() ist langsamer als Number()'
            ],
            relatedTopics: ['Type Coercion', 'Type Conversion', 'Truthy/Falsy', 'NaN'],
            challenge: '💪 Erstelle Variablen für: Name (string), Alter (number), isStudent (boolean). Nutze typeof um jeden Typ zu prüfen und console.log das Ergebnis!'
          },
          {
            title: 'Functions - Funktionen',
            code: `// JavaScript hat mehrere Wege Funktionen zu definieren

// 1. FUNCTION DECLARATION - Klassische Funktion
function greet(name) {
  return \`Hallo, \${name}!\`;
}
console.log(greet("Max")); // "Hallo, Max!"

// Hoisting: Function declarations can be called BEFORE their definition
sayHi(); // ✅ Funktioniert!
function sayHi() {
  console.log("Hi!");
}

// 2. FUNCTION EXPRESSION - Funktion als Wert
const greetFunc = function(name) {
  return \`Hallo, \${name}!\`;
};
// sayHi2(); // ❌ Fehler: Cannot access before initialization
const sayHi2 = function() {
  console.log("Hi!");
};

// 3. ARROW FUNCTIONS - Moderne Syntax (ES6+)
const greetArrow = (name) => {
  return \`Hallo, \${name}!\`;
};

// Arrow Function - Verkürzt (wenn nur 1 Expression)
const greetShort = name => \`Hallo, \${name}!\`; // Implicit return
const double = x => x * 2; // Keine Klammern bei 1 Parameter
const add = (a, b) => a + b; // Klammern bei mehreren Parametern

// Arrow Functions ohne Parameter
const getTime = () => new Date().toLocaleTimeString();

// 4. IIFE - Immediately Invoked Function Expression
(function() {
  console.log("Ich werde sofort ausgeführt!");
})();

// 5. DEFAULT PARAMETERS - Standardwerte
function greetWithDefault(name = "Gast", age = 18) {
  return \`Hallo \${name}, du bist \${age} Jahre alt\`;
}
greetWithDefault(); // "Hallo Gast, du bist 18 Jahre alt"
greetWithDefault("Max"); // "Hallo Max, du bist 18 Jahre alt"
greetWithDefault("Max", 25); // "Hallo Max, du bist 25 Jahre alt"

// 6. REST PARAMETERS - Beliebig viele Argumente
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3); // 6
sum(1, 2, 3, 4, 5); // 15

// 7. CALLBACK FUNCTIONS - Funktionen als Argumente
function processUser(name, callback) {
  console.log(\`Processing \${name}...\`);
  callback(name);
}
processUser("Max", (name) => {
  console.log(\`Done processing \${name}!\`);
});

// 8. HIGHER ORDER FUNCTIONS - Return Functions
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// 9. ASYNC FUNCTIONS - Für asynchronen Code
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fehler:', error);
    throw error;
  }
}

// 10. GENERATOR FUNCTIONS - Pausierbare Funktionen
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2`,
            description: 'Functions are reusable code blocks. There are many types: Function Declarations (classic), Arrow Functions (modern), Async Functions (for Promises), Callbacks (as arguments), Higher Order Functions (return functions). Arrow Functions have no own "this".',
            usage: 'Function Declarations für Methoden mit "this". Arrow Functions für Callbacks und wenn du lexical "this" brauchst. Async Functions für API Calls. Default Parameters für optionale Argumente. Rest Parameters für variable Anzahl.',
            bestPractices: [
              '✅ Arrow Functions für Callbacks: array.map(x => x * 2)',
              '✅ Function Declarations für Object Methods (brauchen this)',
              '✅ Kurze Arrow Functions ohne {} wenn nur 1 Expression',
              '✅ Default Parameters statt || Operator',
              '✅ Eine Funktion = Eine Aufgabe (Single Responsibility)',
              '✅ Beschreibende Namen: getUserById() statt get()',
              '✅ Try-Catch in async Functions',
              '✅ Pure Functions bevorzugen (keine Side Effects)',
              '❌ Nicht Arrow Functions als Object Methods (verlieren this)',
              '❌ Funktionen nicht in Loops erstellen (Performance)',
              '❌ Zu viele Parameter (max 3, sonst Object nutzen)'
            ],
            commonMistakes: [
              '❌ Return vergessen: function add(a,b) { a + b } // undefined!',
              '❌ Arrow Function als Method: obj = { func: () => this.x } // this ist falsch',
              '❌ Async ohne await: async function() { fetch(url); } // Promise nicht abwarten',
              '❌ Callback Hell: Zu viele verschachtelte Callbacks',
              '❌ this in Arrow Functions falsch verstehen'
            ],
            performanceTips: [
              'Arrow Functions sind minimal schneller als normale',
              'Memoization für teure Berechnungen nutzen',
              'Funktionen außerhalb von Loops definieren',
              'Pure Functions sind leichter zu optimieren',
              'Avoid creating functions in render methods (React)'
            ],
            relatedTopics: ['Closures', 'This Binding', 'Promises', 'Callbacks', 'Higher Order Functions', 'Pure Functions'],
            challenge: '💪 Erstelle: 1) Eine Funktion die 2 Zahlen multipliziert, 2) Als Arrow Function, 3) Mit Default Parameter (falls keine Zahl = 1), 4) Teste mit verschiedenen Eingaben!'
          },
          {
            title: 'Operators - Operatoren',
            code: `// ARITHMETISCHE OPERATOREN
let x = 10, y = 3;
console.log(x + y); // 13 Addition
console.log(x - y); // 7 Subtraktion
console.log(x * y); // 30 Multiplikation
console.log(x / y); // 3.333... Division
console.log(x % y); // 1 Modulo (Rest)
console.log(x ** y); // 1000 Potenz (10³)

// INCREMENT / DECREMENT
let count = 5;
count++; // 6 Post-increment
++count; // 7 Pre-increment
count--; // 6 Post-decrement
--count; // 5 Pre-decrement

// VERGLEICHSOPERATOREN
// == vs === !!! WICHTIG !!!
console.log(5 == "5"); // true ⚠️ Type Coercion!
console.log(5 === "5"); // false ✅ Strict equality
console.log(5 != "5"); // false
console.log(5 !== "5"); // true ✅ Immer strict nutzen!

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false

// LOGISCHE OPERATOREN
const isAdult = true;
const hasID = false;

console.log(isAdult && hasID); // false (AND - beide müssen true sein)
console.log(isAdult || hasID); // true (OR - einer muss true sein)
console.log(!isAdult); // false (NOT - invertiert)

// SHORT CIRCUIT EVALUATION
const user = null;
const name = user && user.name; // null (stoppt bei null)
const defaultName = name || "Gast"; // "Gast"

// NULLISH COALESCING (??)
const count = 0;
const value1 = count || 10; // 10 ⚠️ 0 ist falsy
const value2 = count ?? 10; // 0 ✅ Nur bei null/undefined

// OPTIONAL CHAINING (?.)
const person = { address: { city: "Berlin" } };
console.log(person.address?.city); // "Berlin"
console.log(person.phone?.number); // undefined (kein Error!)

// TERNARY OPERATOR (? :)
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// ASSIGNMENT OPERATORS
let num = 10;
num += 5; // num = num + 5 → 15
num -= 3; // num = num - 3 → 12
num *= 2; // num = num * 2 → 24
num /= 4; // num = num / 4 → 6
num %= 4; // num = num % 4 → 2

// SPREAD OPERATOR (...)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// TYPEOF OPERATOR
console.log(typeof 42); // "number"
console.log(typeof "text"); // "string"
console.log(typeof true); // "boolean"`,
            description: 'Operators perform operations on values. Arithmetic (+, -, *, /, %), Comparison (===, !==, <, >), Logical (&&, ||, !), Assignment (=, +=). Important: Use === instead of == for type-safe comparisons! Modern operators: ?? (Nullish Coalescing), ?. (Optional Chaining).',
            usage: '=== für Vergleiche (nicht ==). && für "UND", || für "ODER". ?? statt || wenn 0 oder "" valide sind. ?. für sichere Property-Zugriffe. Ternary ?: für kurze if-else. Spread ... zum Kopieren/Mergen.',
            bestPractices: [
              '✅ Immer === und !== nutzen (strict equality)',
              '✅ ?? statt || wenn 0/"" valide Werte sind',
              '✅ ?. für Optional Chaining (verhindert Errors)',
              '✅ Ternary ?: für kurze Bedingungen',
              '✅ Spread ... zum immutable Kopieren',
              '❌ == und != vermeiden (Type Coercion)',
              '❌ Nicht zu viele verschachtelte Ternaries'
            ],
            commonMistakes: [
              '❌ == statt ===: "5" == 5 ist true (Type Coercion)',
              '❌ = statt ===: if (x = 5) setzt x statt zu vergleichen!',
              '❌ || statt ??: value || default funktioniert nicht bei 0',
              '❌ Vergessen dass && und || short-circuit evaluieren'
            ],
            relatedTopics: ['Type Coercion', 'Truthy/Falsy', 'Short Circuit', 'Operator Precedence'],
            challenge: '💪 Schreibe: 1) Check ob Zahl zwischen 10 und 20 liegt (&&), 2) Default Wert mit ??, 3) Ternary für "Even" oder "Odd"'
          },
          {
            title: 'Conditionals - Bedingungen',
            code: `// IF - ELSE IF - ELSE
const age = 20;

if (age < 18) {
  console.log("Minderjährig");
} else if (age < 65) {
  console.log("Erwachsen");
} else {
  console.log("Senior");
}

// Nur IF
if (age >= 18) {
  console.log("Volljährig!");
}

// TERNARY OPERATOR - Kurze Alternative
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// SWITCH STATEMENT
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start der Woche");
    break;
  case "Friday":
    console.log("Fast Wochenende!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Wochenende! 🎉");
    break;
  default:
    console.log("Normaler Tag");
}

// TRUTHY und FALSY Values
// Falsy: false, 0, "", null, undefined, NaN
// Alles andere ist Truthy!

const value = 0;
if (value) {
  console.log("Truthy"); // Will NOT be executed
}

const name = "Max";
if (name) {
  console.log("Name existiert"); // Will be executed
}

// GUARD CLAUSES - Early Return Pattern
function processUser(user) {
  // Statt:
  // if (user) {
  //   if (user.isActive) {
  //     // Logik
  //   }
  // }
  
  // Besser: Early Returns
  if (!user) return;
  if (!user.isActive) return;
  
  // Hauptlogik hier
  console.log(\`Processing \${user.name}\`);
}

// MULTIPLE CONDITIONS
const isWeekend = day === "Saturday" || day === "Sunday";
const canVote = age >= 18 && hasID;

// NULLISH COALESCING mit IF
const username = user?.name ?? "Anonymous";

// OPTIONAL CHAINING in Conditions
if (user?.address?.city === "Berlin") {
  console.log("Berliner!");
}`,
            description: 'Conditionals control program flow. if/else for normal checks, ternary (? :) for short conditions, switch for many cases. Important: Know truthy/falsy values! Falsy: false, 0, "", null, undefined, NaN. Guard clauses (early returns) make code more readable.',
            usage: 'if/else für komplexe Logik. Ternary für kurze Zuweisungen. switch wenn viele Fälle. Guard Clauses (early return) vermeiden Verschachtelung. Optional Chaining (?.) für sichere Property-Checks.',
            bestPractices: [
              '✅ Guard Clauses (early returns) statt tiefer Verschachtelung',
              '✅ === in Bedingungen (strict)',
              '✅ Ternary nur für kurze, lesbare Fälle',
              '✅ switch mit break (außer bei fall-through)',
              '✅ default case in switch immer definieren',
              '❌ Zu viele verschachtelte if/else',
              '❌ if (x === true) statt if (x)',
              '❌ Ternary bei langer/komplexer Logik'
            ],
            commonMistakes: [
              '❌ if (x = 5) setzt Wert statt zu vergleichen!',
              '❌ switch ohne break - fällt durch!',
              '❌ Truthy/Falsy nicht verstehen: if (0) ist false',
              '❌ == statt === in Bedingungen'
            ],
            relatedTopics: ['Truthy/Falsy', 'Operators', 'Optional Chaining', 'Short Circuit'],
            challenge: '💪 Schreibe: 1) Function mit Alters-Check (Kind/Jugend/Erwachsen/Senior), 2) Nutze Guard Clauses, 3) Switch für Wochentag'
          },
          {
            title: 'Loops - Schleifen',
            code: `// FOR LOOP - Klassisch
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Rückwärts
for (let i = 10; i >= 0; i--) {
  console.log(i); // 10, 9, 8...0
}

// Schritt 2
for (let i = 0; i < 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8
}

// WHILE LOOP
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// DO-WHILE - Läuft mindestens 1x
let num = 10;
do {
  console.log(num); // Executed 1x
  num++;
} while (num < 5);

// FOR...OF - Über Arrays/Strings iterieren
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num); // 1, 2, 3, 4, 5
}

const name = "Max";
for (const char of name) {
  console.log(char); // M, a, x
}

// FOR...IN - Über Object Keys iterieren
const person = { name: "Max", age: 25, city: "Berlin" };
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
  // name: Max, age: 25, city: Berlin
}

// BREAK - Schleife abbrechen
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// CONTINUE - Iteration überspringen
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4 (2 übersprungen)
}

// ARRAY METHODS - Moderne Alternative zu Loops! ✅
const arr = [1, 2, 3, 4, 5];

// forEach - Über jedes Element
arr.forEach(num => console.log(num));

// map - Transformieren
const doubled = arr.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter - Filtern
const evens = arr.filter(num => num % 2 === 0); // [2, 4]

// reduce - Aggregieren
const sum = arr.reduce((total, num) => total + num, 0); // 15

// find - Erstes Match
const found = arr.find(num => num > 3); // 4

// some - Mindestens eins true
const hasEven = arr.some(num => num % 2 === 0); // true

// every - Alle true
const allPositive = arr.every(num => num > 0); // true

// NESTED LOOPS
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(\`i=\${i}, j=\${j}\`);
  }
}

// INFINITE LOOP - VORSICHT!
// while (true) { } // ❌ Blockiert Browser!

// Mit Break ist okay:
let counter = 0;
while (true) {
  console.log(counter);
  counter++;
  if (counter >= 5) break; // Wichtig!
}`,
            description: 'Loops repeat code. for for fixed count, while for condition, for...of for Arrays/Strings, for...in for Objects. Modern alternative: Array methods (map, filter, forEach)! break ends loop, continue skips iteration. for...of is better than for...in for arrays.',
            usage: 'for für klassische Counter-Loops. for...of für Arrays (besser als for i). while für unbekannte Anzahl. Array-Methoden (map, filter) sind moderner und lesbarer! break zum Abbrechen, continue zum Überspringen.',
            bestPractices: [
              '✅ Array-Methoden (map, filter) statt for-Loops',
              '✅ for...of für Arrays, for...in für Objects',
              '✅ const in for...of wenn nicht reassigned',
              '✅ break um infinite loops zu vermeiden',
              '✅ Aussagekräftige Loop-Variablen (nicht nur i)',
              '❌ for...in für Arrays (unsortiert, inkl. Prototype)',
              '❌ Modifiziere Array während Iteration',
              '❌ Infinite Loops ohne break'
            ],
            commonMistakes: [
              '❌ for...in für Arrays: falsche Reihenfolge möglich',
              '❌ Off-by-one: i <= arr.length statt i < arr.length',
              '❌ Infinite while: while(true) ohne break',
              '❌ forEach mit return: Stoppt nicht die Loop!',
              '❌ map ohne return: undefined Array'
            ],
            performanceTips: [
              'for ist schnellste Loop (aber weniger lesbar)',
              'Array-Methoden sind gut optimiert',
              'Cache array.length: for(let i=0, len=arr.length; i<len; i++)',
              'Vermeide Nested Loops wo möglich (O(n²))'
            ],
            relatedTopics: ['Arrays', 'Iterators', 'Array Methods', 'Break/Continue'],
            challenge: '💪 Erstelle: 1) Loop für 1-10, überspringt 5, 2) for...of über Namen-Array, 3) Nutze map um Zahlen zu verdoppeln'
          }
        ]
      },
      arrays: {
        name: 'Arrays & Iteration',
        items: [
          {
            title: 'Arrays - Die Basics',
            code: `// ARRAY ERSTELLEN
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "text", true, null, { key: "value" }];
const empty = [];

// Mit Constructor (nicht empfohlen)
const arr = new Array(5); // [empty × 5]
const arr2 = Array.of(1, 2, 3); // [1, 2, 3]

// Array aus String
const chars = Array.from("Hello"); // ["H", "e", "l", "l", "o"]

// ZUGRIFF
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Orange"
console.log(fruits[fruits.length - 1]); // "Orange" (letztes Element)

// LÄNGE
console.log(fruits.length); // 3

// HINZUFÜGEN
fruits.push("Grape"); // Am Ende hinzufügen
console.log(fruits); // ["Apple", "Banana", "Orange", "Grape"]

fruits.unshift("Mango"); // Am Anfang hinzufügen
console.log(fruits); // ["Mango", "Apple", "Banana", "Orange", "Grape"]

// ENTFERNEN
const last = fruits.pop(); // Letztes entfernen
console.log(last); // "Grape"
console.log(fruits); // ["Mango", "Apple", "Banana", "Orange"]

const first = fruits.shift(); // Erstes entfernen
console.log(first); // "Mango"

// ELEMENT ERSETZEN
fruits[1] = "Strawberry";
console.log(fruits); // ["Apple", "Strawberry", "Orange"]

// PRÜFEN
console.log(fruits.includes("Apple")); // true
console.log(fruits.indexOf("Orange")); // 2
console.log(fruits.indexOf("Kiwi")); // -1 (nicht gefunden)

// SUCHEN
const nums = [5, 12, 8, 130, 44];
const found = nums.find(n => n > 10); // 12
const index = nums.findIndex(n => n > 10); // 1

// KOPIEREN (Shallow Copy)
const copy = [...fruits]; // Spread
const copy2 = fruits.slice(); // slice ohne Argumente
const copy3 = Array.from(fruits);`,
            description: 'Arrays are lists of values. Access via index (0-based). Length with .length. Add: push (end), unshift (start). Remove: pop (end), shift (start). Important: Arrays are objects, make copies with [...arr] or slice()!',
            usage: 'push/pop für Stack (LIFO). shift/unshift für Queue (FIFO). includes() zum Prüfen. indexOf() für Position. [...arr] für Shallow Copy. Nie arr[arr.length] = x nutzen, besser push().',
            bestPractices: [
              '✅ [...arr] oder slice() für Kopien (immutable)',
              '✅ push() statt arr[arr.length] = x',
              '✅ includes() statt indexOf() !== -1',
              '✅ at(-1) für letztes Element (modern)',
              '✅ Array.from() oder [...iterable] für Conversions',
              '❌ new Array(length) - macht holes',
              '❌ arr.length = 0 zum Leeren (confusing)'
            ],
            commonMistakes: [
              '❌ Out-of-bounds: arr[100] gibt undefined (kein Error!)',
              '❌ arr.length verändert Array: arr.length = 2 löscht Rest',
              '❌ Shallow Copy: const copy = arr; // Keine Kopie!',
              '❌ arr[-1] funktioniert nicht (wie Python)'
            ],
            relatedTopics: ['Array Methods', 'Spread Operator', 'Destructuring', 'Immutability'],
            challenge: '💪 Erstelle Array mit 5 Früchten. Füge 2 hinzu (Anfang+Ende). Entferne mittleres Element. Prüfe ob "Apple" drin ist.'
          },
          {
            title: 'Array Methods - Map, Filter, Reduce',
            code: `const numbers = [1, 2, 3, 4, 5];

// MAP - Transformiert jedes Element, returnt neues Array
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const squared = numbers.map(num => num ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

// Mit Index
const withIndex = numbers.map((num, i) => \`\${i}: \${num}\`);
console.log(withIndex); // ["0: 1", "1: 2", ...]

// FILTER - Filtert Elements, returnt neues Array
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

const greaterThan2 = numbers.filter(num => num > 2);
console.log(greaterThan2); // [3, 4, 5]

// REDUCE - Reduziert zu einem Wert
const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0); // 0 ist Startwert
console.log(sum); // 15

const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // 120

// Objekt bauen
const users = ["Max", "Anna", "Tom"];
const userObj = users.reduce((obj, name, i) => {
  obj[i] = name;
  return obj;
}, {});
console.log(userObj); // {0: "Max", 1: "Anna", 2: "Tom"}

// CHAINING - Methoden verketten!
const result = numbers
  .filter(n => n % 2 === 0) // [2, 4]
  .map(n => n * 3) // [6, 12]
  .reduce((sum, n) => sum + n, 0); // 18

// FOREACH - Über jedes Element (kein return!)
numbers.forEach((num, i) => {
  console.log(\`Index \${i}: \${num}\`);
});

// FIND - Erstes Element das Bedingung erfüllt
const found = numbers.find(n => n > 3); // 4
const notFound = numbers.find(n => n > 10); // undefined

// FINDINDEX - Index des ersten Matches
const index = numbers.findIndex(n => n > 3); // 3
const notFoundIndex = numbers.findIndex(n => n > 10); // -1

// SOME - Mindestens ein Element erfüllt Bedingung
const hasEven = numbers.some(n => n % 2 === 0); // true
const hasNegative = numbers.some(n => n < 0); // false

// EVERY - Alle Elemente erfüllen Bedingung
const allPositive = numbers.every(n => n > 0); // true
const allEven = numbers.every(n => n % 2 === 0); // false

// SORT - Sortieren (⚠️ verändert Original!)
const nums = [3, 1, 4, 1, 5, 9, 2];
nums.sort((a, b) => a - b); // Aufsteigend
console.log(nums); // [1, 1, 2, 3, 4, 5, 9]

// Immutable sort
const sorted = [...nums].sort((a, b) => b - a); // Absteigend

// REVERSE - Umkehren (⚠️ verändert Original!)
nums.reverse();

// Immutable reverse
const reversed = [...nums].reverse();`,
            description: 'Array methods are the heart of modern JavaScript development! map() transforms, filter() filters, reduce() aggregates. forEach() iterates without return. find() searches first match. some()/every() check conditions. Important: map/filter/reduce return NEW arrays (immutable)!',
            usage: 'map() für Transformationen (Daten ändern). filter() für Subsets (Elemente entfernen). reduce() für Aggregationen (sum, product, objects bauen). Chaining kombiniert mehrere Operations. find() statt filter()[0]. some()/every() für Boolean-Checks.',
            bestPractices: [
              '✅ map/filter/reduce sind immutable (gut!)',
              '✅ Chain methods: arr.filter().map().reduce()',
              '✅ Arrow functions für kurze Callbacks',
              '✅ find() statt filter()[0]',
              '✅ some()/every() statt manuelle Checks',
              '✅ [...arr].sort() für immutable sort',
              '❌ forEach mit return (macht nichts!)',
              '❌ map ohne return (undefined array)',
              '❌ sort() ohne Comparator für Numbers'
            ],
            commonMistakes: [
              '❌ map ohne return: arr.map(x => { x * 2 }) // undefined!',
              '❌ forEach mit return: stoppt nicht!',
              '❌ reduce ohne Initial Value bei leerem Array',
              '❌ sort() ohne Comparator: ["10", "2", "1"] statt [1, 2, 10]',
              '❌ filter() denken es modified original (tut es nicht)'
            ],
            performanceTips: [
              'for loop ist schneller, aber weniger lesbar',
              'Chaining ist elegant aber bei großen Arrays langsam',
              'reduce() kann komplexer sein als loop',
              'some()/every() stoppen early (gut für Performance)'
            ],
            relatedTopics: ['Higher Order Functions', 'Immutability', 'Functional Programming', 'Callbacks'],
            challenge: '💪 Array [1-10]: 1) Filtere gerade Zahlen, 2) Verdopple sie, 3) Summiere mit reduce, 4) Als eine Chain!'
          },
          {
            title: 'Array Destructuring & Spread',
            code: `// DESTRUCTURING - Werte extrahieren
const fruits = ["Apple", "Banana", "Orange", "Grape"];

const [first, second] = fruits;
console.log(first); // "Apple"
console.log(second); // "Banana"

// Rest Parameter
const [head, ...rest] = fruits;
console.log(head); // "Apple"
console.log(rest); // ["Banana", "Orange", "Grape"]

// Elemente überspringen
const [a, , c] = fruits;
console.log(a); // "Apple"
console.log(c); // "Orange"

// Default Values
const [x, y, z = "Default"] = ["A", "B"];
console.log(z); // "Default"

// Swapping ohne temp Variable
let num1 = 5, num2 = 10;
[num1, num2] = [num2, num1];
console.log(num1, num2); // 10, 5

// SPREAD OPERATOR - Array ausbreiten
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Arrays zusammenführen
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
const withExtra = [0, ...arr1, 3.5, ...arr2]; // [0, 1, 2, 3, 3.5, 4, 5, 6]

// Kopieren (Shallow Copy!)
const copy = [...arr1];
copy.push(4); // Original arr1 bleibt unverändert

// Als Function Arguments
const nums = [1, 5, 3];
console.log(Math.max(...nums)); // 5 (statt Math.max(1, 5, 3))

// String zu Array
const word = "Hello";
const chars = [...word]; // ["H", "e", "l", "l", "o"]

// Set zu Array (Duplikate entfernen)
const withDupes = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(withDupes)]; // [1, 2, 3, 4]

// Array in Function Destructuring
function printFirst([first, second]) {
  console.log(\`Erste: \${first}, Zweite: \${second}\`);
}
printFirst(fruits); // "Erste: Apple, Zweite: Banana"`,
            description: 'Destructuring extracts values from arrays into variables. Spread (...) spreads array. Rest (...rest) collects remaining elements. Swapping without temp variable possible. Spread copies arrays (shallow!), merges arrays, converts iterables. Set removes duplicates.',
            usage: 'Destructuring für kompakte Variablen-Zuweisungen. Rest für "alle anderen". Spread für Kopien, Merging, Function Args. [...new Set(arr)] entfernt Duplikate. Swapping: [a, b] = [b, a]. String zu Array: [...str].',
            bestPractices: [
              '✅ [...arr] für Shallow Copies',
              '✅ [a, b] = [b, a] für Swapping',
              '✅ [...new Set(arr)] für Unique Values',
              '✅ Rest Parameter für flexible Functions',
              '✅ Default Values bei Destructuring',
              '❌ Spread für Deep Copies (nur Shallow!)',
              '❌ Zu viele Destructured Variablen (unübersichtlich)'
            ],
            commonMistakes: [
              '❌ Spread macht nur Shallow Copy (Nested Objects bleiben referenziert)',
              '❌ Destructuring mit undefined: const [x] = undefined // Error!',
              '❌ Rest muss letztes Element sein: [...rest, last] ❌',
              '❌ Spread in Object vs Array verwechseln'
            ],
            relatedTopics: ['Spread Operator', 'Rest Parameters', 'Destructuring', 'Immutability'],
            challenge: '💪 Array [1,2,3,4,5]: 1) Destructure first + rest, 2) Merge mit [6,7,8], 3) Entferne Duplikate aus [1,1,2,2,3]'
          }
        ]
      },
      objects: {
        name: 'Objects & Classes',
        items: [
          {
            title: 'Objects - Die Basics',
            code: `// OBJECT LITERAL - Häufigste Art
const person = {
  name: "Max Mustermann",
  age: 25,
  city: "Berlin",
  isStudent: true
};

// Zugriff mit Dot Notation
console.log(person.name); // "Max Mustermann"
console.log(person.age); // 25

// Zugriff mit Bracket Notation
console.log(person["name"]); // "Max Mustermann"
const key = "age";
console.log(person[key]); // 25 (dynamisch!)

// Neues Property hinzufügen
person.email = "max@example.com";
person["phone"] = "0123456789";

// Property ändern
person.age = 26;

// Property löschen
delete person.isStudent;

// Prüfen ob Property existiert
console.log("name" in person); // true
console.log("country" in person); // false
console.log(person.hasOwnProperty("name")); // true

// METHODS - Funktionen in Objects
const user = {
  firstName: "Max",
  lastName: "Mustermann",
  // Method (Kurzschreibweise)
  getFullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  // Arrow Function (kein eigenes this!)
  getAge: () => {
    // return this.age; // ❌ this funktioniert hier nicht!
  }
};

console.log(user.getFullName()); // "Max Mustermann"

// COMPUTED PROPERTY NAMES
const propertyName = "score";
const game = {
  [propertyName]: 100, // score: 100
  [\`level_\${1 + 1}\`]: "Expert" // level_2: "Expert"
};

// PROPERTY SHORTHAND
const name = "Anna";
const age = 22;
const student = { name, age }; // { name: "Anna", age: 22 }

// OBJECT DESTRUCTURING
const { name: userName, age: userAge } = person;
console.log(userName); // "Max Mustermann"

// Mit Default Values
const { country = "Deutschland" } = person;
console.log(country); // "Deutschland"

// REST in Objects
const { name, ...otherProps } = person;
console.log(otherProps); // { age: 26, city: "Berlin", email: "..." }

// NESTED OBJECTS
const company = {
  name: "Tech Corp",
  address: {
    street: "Hauptstr. 1",
    city: "Berlin",
    country: "Deutschland"
  },
  employees: [
    { name: "Max", role: "Dev" },
    { name: "Anna", role: "Designer" }
  ]
};

// Zugriff
console.log(company.address.city); // "Berlin"
console.log(company.employees[0].name); // "Max"

// Optional Chaining (?.)
console.log(company.address?.city); // "Berlin"
console.log(company.location?.city); // undefined (kein Error!)`,
            description: 'Objects are key-value pairs (properties). Access with . (dot) or ["key"] (bracket). Methods are functions in objects. this references the object. Computed Properties: [key]. Property Shorthand when variable = property name. Optional Chaining (?.) for safe access.',
            usage: 'Dot Notation für statische Keys. Bracket für dynamische Keys oder Spaces. Methods mit function() für this-Zugriff. Arrow Functions haben kein eigenes this! Optional Chaining (?.) verhindert "Cannot read property of undefined" Errors.',
            bestPractices: [
              '✅ Dot notation: obj.key (lesbar)',
              '✅ Bracket für dynamische Keys: obj[variable]',
              '✅ Property Shorthand: { name } statt { name: name }',
              '✅ Optional Chaining: obj?.prop?.nested',
              '✅ Methods als function() für this',
              '✅ const für Objects (Properties änderbar!)',
              '❌ Arrow Functions als Methods (verlieren this)',
              '❌ delete in Performance-critical Code'
            ],
            commonMistakes: [
              '❌ Arrow Function als Method: verliert this',
              '❌ obj.key mit Spaces: obj.first name ❌',
              '❌ Zugriff ohne Optional Chaining: obj.a.b.c // Error wenn a oder b undefined',
              '❌ delete obj.prop ist langsam, besser obj.prop = undefined'
            ],
            relatedTopics: ['This Binding', 'Optional Chaining', 'Destructuring', 'Spread Operator'],
            challenge: '💪 Erstelle Object "car" mit brand, model, year. Füge Method getInfo() hinzu. Nutze Optional Chaining für car.owner?.name'
          },
          {
            title: 'Object Methods & Manipulation',
            code: `const user = {
  name: "Max",
  age: 25,
  city: "Berlin"
};

// OBJECT.KEYS() - Alle Keys als Array
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "city"]

// OBJECT.VALUES() - Alle Values als Array
const values = Object.values(user);
console.log(values); // ["Max", 25, "Berlin"]

// OBJECT.ENTRIES() - Key-Value Pairs als Arrays
const entries = Object.entries(user);
console.log(entries); 
// [["name", "Max"], ["age", 25], ["city", "Berlin"]]

// Über Object iterieren
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}

// OBJECT.ASSIGN() - Objects mergen
const defaults = { theme: "dark", lang: "de" };
const settings = { theme: "light" };
const config = Object.assign({}, defaults, settings);
console.log(config); // { theme: "light", lang: "de" }

// SPREAD OPERATOR - Moderne Alternative zu assign
const merged = { ...defaults, ...settings };

// SHALLOW COPY
const original = { name: "Max", address: { city: "Berlin" } };
const copy1 = { ...original }; // Shallow!
const copy2 = Object.assign({}, original); // Auch shallow!

copy1.name = "Anna"; // ✅ Ändert nur Copy
copy1.address.city = "München"; // ⚠️ Ändert auch Original!

// DEEP COPY - Für nested objects
const deepCopy = JSON.parse(JSON.stringify(original));
// ⚠️ Verliert Functions, Dates, undefined, Symbol!

// Moderne Alternative: structuredClone
const betterDeepCopy = structuredClone(original);

// OBJECT.FREEZE() - Object unveränderbar machen
const frozen = Object.freeze({ name: "Max" });
frozen.name = "Anna"; // ❌ Keine Änderung (strict mode: Error)
frozen.age = 25; // ❌ Keine Änderung

// Shallow freeze! Nested Objects änderbar!
const partialFrozen = Object.freeze({
  name: "Max",
  address: { city: "Berlin" }
});
partialFrozen.address.city = "München"; // ✅ Funktioniert!

// OBJECT.SEAL() - Keine neuen Properties, aber änderbar
const sealed = Object.seal({ name: "Max" });
sealed.name = "Anna"; // ✅ Funktioniert
sealed.age = 25; // ❌ Keine neue Property

// OBJECT.IS() - Vergleicht wie ===, aber besser für NaN und +/-0
console.log(Object.is(NaN, NaN)); // true (NaN === NaN ist false!)
console.log(Object.is(+0, -0)); // false (+0 === -0 ist true)

// OBJECT.FROMENTRIES() - Aus Entries Object bauen
const pairs = [["name", "Max"], ["age", 25]];
const obj = Object.fromEntries(pairs);
console.log(obj); // { name: "Max", age: 25 }

// OPTIONAL CHAINING mit NULLISH COALESCING
const city = user.address?.city ?? "Unknown";

// DELETE OPERATOR
delete user.age;
console.log(user); // { name: "Max", city: "Berlin" }

// IN OPERATOR
console.log("name" in user); // true
console.log("age" in user); // false`,
            description: 'Object.keys/values/entries() for iteration. Object.assign() or {...spread} for merging. Shallow copy by default! Deep copy with structuredClone() or JSON.parse(JSON.stringify()). freeze() makes immutable. seal() prevents new properties. Object.is() for safe comparisons.',
            usage: 'Object.keys() für Iteration. {...spread} für Merging/Copying. structuredClone() für Deep Copies. Object.freeze() für Immutability. Object.entries() + for...of zum Iterieren. Object.fromEntries() zum Transformieren von Arrays zu Objects.',
            bestPractices: [
              '✅ {...obj} für Shallow Copies',
              '✅ structuredClone() für Deep Copies',
              '✅ Object.freeze() für Constants',
              '✅ Object.entries() + for...of für Iteration',
              '✅ ?? mit ?. kombinieren',
              '❌ JSON.parse/stringify für Deep Copy (verliert Functions)',
              '❌ delete in Loops (langsam)'
            ],
            commonMistakes: [
              '❌ Shallow Copy für Nested: { ...obj } kopiert nicht Nested!',
              '❌ JSON.stringify verliert: Functions, undefined, Symbol, Date',
              '❌ freeze() ist shallow: nested Objects änderbar',
              '❌ Object.assign({}, obj) statt {...obj} (länger)'
            ],
            performanceTips: [
              'Spread {...} ist schnell und modern',
              'Object.keys().forEach() ist okay für kleine Objects',
              'delete ist langsam, besser obj.prop = undefined',
              'freeze() hat keine Performance Impact'
            ],
            relatedTopics: ['Immutability', 'Spread Operator', 'Shallow vs Deep Copy', 'Object Iteration'],
            challenge: '💪 Object { a: 1, b: { c: 2 } }: 1) Shallow Copy, 2) Deep Copy, 3) Freeze, 4) Iteriere mit Object.entries()'
          },
          {
            title: 'Classes - OOP in JavaScript',
            code: `// CLASS DECLARATION
class Person {
  // Constructor - called with "new"
  constructor(name, age) {
    this.name = name; // Instance Property
    this.age = age;
  }
  
  // Method
  greet() {
    return \`Hallo, ich bin \${this.name}\`;
  }
  
  // Getter
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }
  
  // Setter
  set birthYear(year) {
    this.age = new Date().getFullYear() - year;
  }
  
  // Static Method - auf Class, nicht Instance
  static species() {
    return "Homo sapiens";
  }
  
  // Static Property (modern)
  static planet = "Erde";
  
  // Private Property (modern)
  #privateField = "geheim";
  
  getPrivate() {
    return this.#privateField;
  }
}

// Instanz erstellen
const max = new Person("Max", 25);
console.log(max.greet()); // "Hallo, ich bin Max"
console.log(max.birthYear); // 1999 (Getter)
max.birthYear = 1995; // Setter
console.log(max.age); // 31

// Static Method
console.log(Person.species()); // "Homo sapiens"
console.log(Person.planet); // "Erde"

// VERERBUNG - Extends
class Developer extends Person {
  constructor(name, age, language) {
    super(name, age); // Parent constructor aufrufen
    this.language = language;
  }
  
  // Method Override
  greet() {
    const parentGreet = super.greet();
    return \`\${parentGreet}, ich code in \${this.language}\`;
  }
  
  // Neue Method
  code() {
    return \`Coding in \${this.language}...\`;
  }
}

const anna = new Developer("Anna", 22, "JavaScript");
console.log(anna.greet()); 
// "Hallo, ich bin Anna, ich code in JavaScript"
console.log(anna.code()); // "Coding in JavaScript..."
console.log(anna instanceof Developer); // true
console.log(anna instanceof Person); // true

// CLASS EXPRESSION
const Animal = class {
  constructor(name) {
    this.name = name;
  }
};

// PRIVATE METHODS (modern)
class BankAccount {
  #balance = 0;
  
  deposit(amount) {
    this.#validateAmount(amount);
    this.#balance += amount;
  }
  
  #validateAmount(amount) { // Private!
    if (amount <= 0) throw new Error("Invalid amount");
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// account.#balance; // ❌ SyntaxError: Private field
// account.#validateAmount(50); // ❌ SyntaxError

// STATIC BLOCK (modern)
class Config {
  static apiKey;
  
  static {
    // Runs once when class is loaded
    this.apiKey = "secret-key-123";
  }
}`,
            description: 'Classes are templates for objects. constructor() is called at "new". Methods are functions. Getter/Setter with get/set. Static methods belong to class, not instance. extends for inheritance. super() calls parent. Private fields with #. instanceof checks type.',
            usage: 'Classes für OOP (Objects mit gleicher Struktur). extends für Vererbung. super() in Child Constructor. Static für Utility Functions. Private # für Encapsulation. Getter/Setter für computed Properties. instanceof für Type Checks.',
            bestPractices: [
              '✅ Classes für wiederverwendbare Object Types',
              '✅ super() FIRST in Child Constructor',
              '✅ Private # für interne State',
              '✅ Static für Utility Functions',
              '✅ Getter für computed Properties',
              '✅ PascalCase für Class Namen: class UserAccount',
              '❌ Arrow Functions als Methods (verlieren this)',
              '❌ new vergessen: const x = Person() ❌'
            ],
            commonMistakes: [
              '❌ super() vergessen in Child Constructor',
              '❌ this falsch verstehen in Methods',
              '❌ Private # nur in Class Body, nicht außerhalb',
              '❌ Static Method auf Instance aufrufen: instance.staticMethod() ❌',
              '❌ Return im Constructor (nur bei Objects)'
            ],
            relatedTopics: ['OOP', 'Inheritance', 'Encapsulation', 'This Binding', 'Prototypes'],
            challenge: '💪 Erstelle: 1) Class Animal mit name, 2) Method speak(), 3) Class Dog extends Animal, 4) Override speak()'
          }
        ]
      },
      promises: {
        name: 'Async & Promises',
        items: [
          {
            title: 'Promises verstehen',
            code: `// PROMISE STATES
// - Pending: Wartet noch
// - Fulfilled: Erfolgreich (resolve)
// - Rejected: Fehler (reject)

// PROMISE ERSTELLEN
const myPromise = new Promise((resolve, reject) => {
  // Asynchrone Operation simulieren
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve("Erfolg! 🎉"); // Fulfilled
    } else {
      reject("Fehler! ❌"); // Rejected
    }
  }, 1000);
});

// PROMISE VERWENDEN
myPromise
  .then(result => {
    console.log(result); // "Erfolg! 🎉"
    return result.toUpperCase(); // Chaining!
  })
  .then(upperResult => {
    console.log(upperResult); // "ERFOLG! 🎉"
  })
  .catch(error => {
    console.error(error); // Falls rejected
  })
  .finally(() => {
    console.log("Fertig!"); // Immer ausgeführt
  });

// PROMISE CHAINING
fetch('https://api.example.com/user/1')
  .then(response => response.json())
  .then(user => {
    console.log(user.name);
    return fetch(\`https://api.example.com/posts/\${user.id}\`);
  })
  .then(response => response.json())
  .then(posts => {
    console.log(posts);
  })
  .catch(error => {
    console.error("Fehler:", error);
  });

// PROMISE.ALL - Alle parallel
const promise1 = fetch('/api/users');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/comments');

Promise.all([promise1, promise2, promise3])
  .then(([users, posts, comments]) => {
    // Alle 3 Promises resolved!
    console.log({ users, posts, comments });
  })
  .catch(error => {
    // EINE rejected = Ganzes catch
    console.error(error);
  });

// PROMISE.ALLSETTLED - Wartet auf alle, egal ob resolved/rejected
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log("Success:", result.value);
      } else {
        console.log("Error:", result.reason);
      }
    });
  });

// PROMISE.RACE - First one that finishes
Promise.race([
  fetch('/api/server1'),
  fetch('/api/server2'),
  fetch('/api/server3')
])
  .then(result => {
    console.log("Erste Response:", result);
  });

// PROMISE.ANY - First one that RESOLVES
Promise.any([
  fetch('/api/backup1'),
  fetch('/api/backup2'),
  fetch('/api/backup3')
])
  .then(result => {
    console.log("Erste erfolgreiche:", result);
  })
  .catch(() => {
    console.log("Alle failed!");
  });

// TIMEOUT Promise
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

timeout(2000).then(() => {
  console.log("2 Sekunden vergangen");
});

// RETRY LOGIC
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(\`Retry \${i + 1}/\${retries}\`);
      await timeout(1000 * (i + 1)); // Exponential backoff
    }
  }
}`,
            description: 'Promises represent future values from asynchronous operations. 3 States: Pending (waiting), Fulfilled (success), Rejected (error). .then() for success, .catch() for errors, .finally() always. Promise.all() for parallel, Promise.race() for fastest. Chaining with return in .then().',
            usage: '.then() für Success Handler. .catch() für Error Handler. .finally() für Cleanup. Promise.all() wartet auf alle (parallel). Promise.race() nimmt erste. Promise.allSettled() wartet auf alle, ignoriert Errors. Chaining: return in .then() für nächstes .then().',
            bestPractices: [
              '✅ Immer .catch() am Ende der Chain',
              '✅ Return in .then() für Chaining',
              '✅ Promise.all() für parallele Requests',
              '✅ .finally() für Cleanup (Loading etc.)',
              '✅ Promise.allSettled() wenn alle Resultate wichtig',
              '❌ Nested Promises (Callback Hell)',
              '❌ catch() vergessen (Unhandled Rejection)',
              '❌ Return vergessen in .then() Chain'
            ],
            commonMistakes: [
              '❌ Kein catch(): Unhandled Promise Rejection',
              '❌ Nested .then(): .then(() => { promise.then() }) // Callback Hell',
              '❌ Return vergessen: .then(x => { getValue(x) }) // undefined!',
              '❌ Promise.all() stoppt bei EINEM Fehler',
              '❌ new Promise für bereits existierende Promises'
            ],
            relatedTopics: ['Async/Await', 'Callbacks', 'Event Loop', 'Fetch API', 'Error Handling'],
            challenge: '💪 Erstelle Promise die nach 2s resolved. Chain 3 .then()s. Nutze Promise.all() mit 3 Promises. Error Handling!'
          },
          {
            title: 'Async/Await - Moderne Syntax',
            code: `// ASYNC FUNCTION - Returnt immer Promise
async function fetchUser(id) {
  // await pausiert Funktion bis Promise resolved
  const response = await fetch(\`/api/users/\${id}\`);
  const user = await response.json();
  return user; // Automatically wrapped in Promise
}

// Usage - ZWEI Wege:
// 1. Mit await (in async Function)
async function main() {
  const user = await fetchUser(1);
  console.log(user);
}

// 2. Mit .then() (außerhalb async)
fetchUser(1).then(user => console.log(user));

// ERROR HANDLING mit try-catch
async function getUserData(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP Error: \${response.status}\`);
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Fehler beim Laden:", error);
    throw error; // Weitergeben oder
    // return null; // Default zurückgeben
  } finally {
    console.log("Request abgeschlossen");
  }
}

// PARALLEL REQUESTS mit Promise.all
async function loadDashboard() {
  try {
    // ❌ SEQUENTIELL - langsam!
    const user = await fetch('/api/user').then(r => r.json());
    const posts = await fetch('/api/posts').then(r => r.json());
    const comments = await fetch('/api/comments').then(r => r.json());
    
    // ✅ PARALLEL - schnell!
    const [user, posts, comments] = await Promise.all([
      fetch('/api/user').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    
    return { user, posts, comments };
  } catch (error) {
    console.error(error);
  }
}

// AWAIT IN LOOPS
async function processUsers(userIds) {
  // ❌ SEQUENTIELL - langsam
  for (const id of userIds) {
    const user = await fetchUser(id);
    console.log(user);
  }
  
  // ✅ PARALLEL - schnell
  const users = await Promise.all(
    userIds.map(id => fetchUser(id))
  );
  console.log(users);
}

// TOP-LEVEL AWAIT (Modern, nur in ES Modules)
// Außerhalb von async function!
const data = await fetch('/api/data').then(r => r.json());

// ASYNC IIFE - Immediately Invoked
(async () => {
  const user = await fetchUser(1);
  console.log(user);
})();

// TIMEOUT mit async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log("Start");
  await delay(2000);
  console.log("2 Sekunden später");
}

// ASYNC ITERATION
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

for await (const num of asyncGenerator()) {
  console.log(num); // 1, 2, 3
}

// ERROR HANDLING - Multiple try-catch
async function complexOperation() {
  let user, posts;
  
  try {
    user = await fetchUser(1);
  } catch (error) {
    console.error("User fetch failed:", error);
    user = null;
  }
  
  try {
    posts = await fetchPosts(user?.id);
  } catch (error) {
    console.error("Posts fetch failed:", error);
    posts = [];
  }
  
  return { user, posts };
}

// RETURN aus async Function
async function getValue() {
  return 42; // Becomes Promise.resolve(42)
}
getValue().then(val => console.log(val)); // 42`,
            description: 'async/await is syntactic sugar for Promises. async makes function async (returns Promise). await pauses function until Promise resolved. try-catch for error handling. await only in async functions (or top-level in modules). Promise.all() for parallel operations. await in loops is sequential (slow)!',
            usage: 'async function für asynchronen Code. await für Promise-Werte. try-catch für Errors. Promise.all() + await für Parallelität. Top-level await in Modules. IIFE für sofortiges await. Nicht await in Loops (außer absichtlich sequentiell). Immer Error Handling!',
            bestPractices: [
              '✅ async/await statt .then() Chains (lesbarer)',
              '✅ try-catch für Error Handling',
              '✅ Promise.all() + await für Parallelität',
              '✅ await nur in async Functions',
              '✅ return directly (auto wrapped in Promise)',
              '❌ await in Loops (sequentiell, langsam)',
              '❌ try-catch vergessen (Unhandled Rejection)',
              '❌ Vergessen dass async Function Promise returnt'
            ],
            commonMistakes: [
              '❌ await außerhalb async: SyntaxError',
              '❌ await in Loop: sequentiell statt parallel',
              '❌ Kein try-catch: Unhandled Promise Rejection',
              '❌ .then() auf await: const x = await promise.then() // Doppelt',
              '❌ Vergessen async zu markieren: await in normaler Function'
            ],
            performanceTips: [
              'Promise.all() für parallele Requests (3x schneller)',
              'await in Loops ist sequentiell (n * time)',
              'Top-level await blockiert Module Loading',
              'Nicht zu viele parallele Requests (Rate Limiting)'
            ],
            relatedTopics: ['Promises', 'Try-Catch', 'Event Loop', 'Parallel vs Sequential', 'Error Handling'],
            challenge: '💪 Async Function: 1) Lade 3 Users parallel, 2) Error Handling mit try-catch, 3) Return combined data'
          }
        ]
      },
      dom: {
        name: 'DOM Manipulation',
        items: [
          {
            title: 'DOM Basics - HTML manipulieren',
            code: `// ELEMENTE AUSWÄHLEN
// getElementById - Ein Element
const heading = document.getElementById('title');

// querySelector - Erstes Element (CSS Selektoren!)
const firstButton = document.querySelector('.btn');
const mainNav = document.querySelector('#main-nav');
const firstListItem = document.querySelector('ul li');

// querySelectorAll - Alle Elemente (NodeList)
const allButtons = document.querySelectorAll('.btn');
const allLinks = document.querySelectorAll('a');

// Alte Methoden (weniger flexibel)
const byClass = document.getElementsByClassName('card');
const byTag = document.getElementsByTagName('p');

// ELEMENT ERSTELLEN
const newDiv = document.createElement('div');
const newPara = document.createElement('p');
const newText = document.createTextNode('Hello World');

// INHALT ÄNDERN
const element = document.querySelector('#output');

// textContent - Nur Text
element.textContent = 'Neuer Text';

// innerHTML - HTML String (⚠️ XSS Gefahr!)
element.innerHTML = '<strong>Bold Text</strong>';

// innerText - Sichtbarer Text (langsamer)
element.innerText = 'Text';

// ATTRIBUTE ÄNDERN
const link = document.querySelector('a');
link.href = 'https://example.com';
link.title = 'Visit Example';
link.setAttribute('target', '_blank');
link.removeAttribute('title');

// getAttribute - Wert lesen
const url = link.getAttribute('href');

// CLASSES MANIPULIEREN
const box = document.querySelector('.box');

box.classList.add('active'); // Hinzufügen
box.classList.remove('hidden'); // Entfernen
box.classList.toggle('visible'); // Toggle
box.classList.contains('active'); // Prüfen - true/false
box.classList.replace('old', 'new'); // Ersetzen

// STYLES ÄNDERN (Inline Styles)
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';
element.style.display = 'none'; // Verstecken

// Computed Styles lesen
const styles = window.getComputedStyle(element);
console.log(styles.color); // rgb(255, 0, 0)

// ELEMENTE HINZUFÜGEN
const parent = document.querySelector('#container');
const child = document.createElement('div');
child.textContent = 'Neues Child Element';

parent.appendChild(child); // Am Ende
parent.insertBefore(child, parent.firstChild); // Am Anfang
parent.append(child); // Modern - auch Text
parent.prepend(child); // Modern - Am Anfang

// ELEMENTE ENTFERNEN
const toRemove = document.querySelector('.delete-me');
toRemove.remove(); // Modern
// oder
toRemove.parentNode.removeChild(toRemove); // Alt

// TRAVERSING - Navigation
const current = document.querySelector('.current');

current.parentElement; // Parent
current.children; // Alle direkten Children
current.firstElementChild; // Erstes Child
current.lastElementChild; // Letztes Child
current.nextElementSibling; // Nächstes Geschwister
current.previousElementSibling; // Vorheriges Geschwister

// KLONEN
const original = document.querySelector('.original');
const clone = original.cloneNode(true); // true = deep (inkl. Children)
document.body.appendChild(clone);`,
            description: 'DOM (Document Object Model) is the JavaScript representation of HTML. querySelector() for selection (CSS selectors). textContent for text, innerHTML for HTML. classList for classes. createElement() + appendChild() for adding. remove() for deleting. style for inline styles.',
            usage: 'querySelector() statt getElementById (flexibler). textContent statt innerHTML (sicherer). classList.toggle() für UI States. appendChild()/remove() für dynamische Inhalte. parentElement/children für Navigation. cloneNode() für Templates.',
            bestPractices: [
              '✅ querySelector() statt getElementsBy* (moderner)',
              '✅ textContent für Text (schneller, sicherer)',
              '✅ classList statt className (einfacher)',
              '✅ remove() statt removeChild() (kürzer)',
              '✅ Cache DOM Queries in Variablen',
              '❌ innerHTML mit User Input (XSS Gefahr!)',
              '❌ Zu viele DOM Manipulationen in Loops'
            ],
            commonMistakes: [
              '❌ querySelectorAll returnt NodeList (kein Array!)',
              '❌ innerHTML + User Input = XSS Sicherheitslücke',
              '❌ style.background-color (falsch) - camelCase: backgroundColor',
              '❌ DOM Queries in Loops (langsam)',
              '❌ remove() auf null Element - vorher checken!'
            ],
            performanceTips: [
              'Cache selectors: const el = query() ONCE',
              'DocumentFragment für viele Elemente',
              'textContent ist schneller als innerHTML',
              'classList ist schneller als className manipulation'
            ],
            relatedTopics: ['Events', 'querySelector', 'classList', 'innerHTML vs textContent'],
            challenge: '💪 Erstelle: 1) Button mit JavaScript, 2) Füge CSS Class hinzu, 3) Append zu body, 4) Ändere Text bei Click'
          },
          {
            title: 'Event Handling',
            code: `// EVENT LISTENER HINZUFÜGEN
const button = document.querySelector('#myButton');

// addEventListener - Modern & Best Practice
button.addEventListener('click', function(event) {
  console.log('Button geklickt!');
  console.log('Event:', event);
  console.log('Target:', event.target);
});

// Arrow Function
button.addEventListener('click', (e) => {
  console.log('Geklickt!', e);
});

// WICHTIGE EVENTS
// Mouse Events
element.addEventListener('click', handler); // Click
element.addEventListener('dblclick', handler); // Doppelclick
element.addEventListener('mouseenter', handler); // Maus drüber
element.addEventListener('mouseleave', handler); // Maus weg
element.addEventListener('mousemove', handler); // Maus bewegt

// Keyboard Events
document.addEventListener('keydown', (e) => {
  console.log('Taste gedrückt:', e.key);
  if (e.key === 'Enter') console.log('Enter!');
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault(); // Standard Save verhindern
    console.log('Custom Save!');
  }
});

document.addEventListener('keyup', handler); // Taste losgelassen

// Form Events
const form = document.querySelector('#myForm');
const input = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Form Submit verhindern
  console.log('Form submitted!');
  const formData = new FormData(form);
  console.log(formData.get('email'));
});

input.addEventListener('input', (e) => {
  console.log('Typing...', e.target.value);
});

input.addEventListener('change', (e) => {
  console.log('Value changed:', e.target.value);
});

input.addEventListener('focus', () => console.log('Focused'));
input.addEventListener('blur', () => console.log('Lost focus'));

// Window Events
window.addEventListener('load', () => {
  console.log('Page fully loaded');
});

window.addEventListener('resize', () => {
  console.log('Window resized:', window.innerWidth);
});

window.addEventListener('scroll', () => {
  console.log('Scrolling...', window.scrollY);
});

// EVENT OBJECT
button.addEventListener('click', (event) => {
  // Wichtige Properties
  event.type; // "click"
  event.target; // Element das Event ausgelöst hat
  event.currentTarget; // Element mit Listener
  event.clientX; // Maus X Position
  event.clientY; // Maus Y Position
  event.key; // Taste (bei Keyboard Events)
  event.ctrlKey; // Ctrl gedrückt?
  event.shiftKey; // Shift gedrückt?
  
  // Wichtige Methods
  event.preventDefault(); // Default Verhalten verhindern
  event.stopPropagation(); // Event Bubbling stoppen
});

// EVENT DELEGATION - Für dynamische Elemente!
const list = document.querySelector('#list');

// ❌ Funktioniert nicht für neue Items:
// document.querySelectorAll('li').forEach(li => {
//   li.addEventListener('click', handler);
// });

// ✅ Event Delegation:
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
    e.target.classList.toggle('completed');
  }
});

// EVENT LISTENER ENTFERNEN
function handleClick() {
  console.log('Clicked!');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// ONCE - Nur einmal ausführen
button.addEventListener('click', handler, { once: true });

// THROTTLE - Nicht zu oft ausführen
function throttle(func, delay) {
  let timeout;
  return function(...args) {
    if (!timeout) {
      func.apply(this, args);
      timeout = setTimeout(() => timeout = null, delay);
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  console.log('Scrolling...');
}, 500)); // Max alle 500ms

// DEBOUNCE - Erst nach Pause ausführen
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

input.addEventListener('input', debounce((e) => {
  console.log('Search:', e.target.value);
}, 300)); // Nach 300ms Pause`,
            description: 'Events are user interactions. addEventListener() adds event listeners. Important events: click, keydown, submit, input, scroll, resize. Event object has target (element), preventDefault() (stop default), stopPropagation() (stop bubbling). Event delegation for dynamic elements. Throttle/Debounce for performance.',
            usage: 'addEventListener() mit Funktionsreferenz. e.preventDefault() bei Forms. Event Delegation bei Listen. Throttle bei scroll/resize. Debounce bei input/search. removeEventListener() mit gleicher Funktion. { once: true } für einmalige Events.',
            bestPractices: [
              '✅ addEventListener() statt onclick',
              '✅ Event Delegation für dynamische Inhalte',
              '✅ preventDefault() bei Forms',
              '✅ Throttle/Debounce bei scroll/input',
              '✅ removeEventListener() bei Cleanup',
              '❌ onclick = func (überschreibt vorherige)',
              '❌ Zu viele Event Listener (Memory Leak)',
              '❌ Arrow Functions wenn removeEventListener() nötig'
            ],
            commonMistakes: [
              '❌ removeEventListener mit Arrow Function (funktioniert nicht)',
              '❌ Event Listener in Loops ohne Delegation',
              '❌ preventDefault() vergessen bei Forms',
              '❌ Kein throttle bei scroll/resize (Performance)',
              '❌ event.target vs event.currentTarget verwechseln'
            ],
            relatedTopics: ['DOM', 'Event Bubbling', 'Event Delegation', 'Throttle/Debounce'],
            challenge: '💪 Todo List: 1) Click Event mit Event Delegation, 2) Form submit mit preventDefault, 3) Input mit debounce'
          }
        ]
      },
      advanced: {
        name: 'Advanced Concepts',
        items: [
          {
            title: 'Scope & Closures',
            code: `// SCOPE - Wo Variablen sichtbar sind

// GLOBAL SCOPE
const globalVar = "Ich bin überall sichtbar";

function anyFunction() {
  console.log(globalVar); // ✅ Funktioniert
}

// FUNCTION SCOPE
function myFunction() {
  const functionVar = "Nur in dieser Function";
  console.log(functionVar); // ✅ Funktioniert
}
// console.log(functionVar); // ❌ ReferenceError

// BLOCK SCOPE (let, const)
{
  const blockVar = "Nur in diesem Block";
  let alsoBlock = "Auch nur hier";
}
// console.log(blockVar); // ❌ ReferenceError

if (true) {
  const insideIf = "Nur im if";
}
// console.log(insideIf); // ❌ ReferenceError

// CLOSURE - Function merkt sich Outer Scope!
function makeCounter() {
  let count = 0; // Private Variable!
  
  return function() {
    count++; // Zugriff auf outer count!
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// count ist PRIVAT - nicht von außen zugänglich!

// PRAKTISCHES CLOSURE BEISPIEL
function createUser(name) {
  // Private Variables
  let _password = ''; // _ = convention für private
  
  return {
    getName() {
      return name;
    },
    setPassword(newPassword) {
      if (newPassword.length >= 8) {
        _password = newPassword;
        return true;
      }
      return false;
    },
    checkPassword(attempt) {
      return attempt === _password;
    }
  };
}

const user = createUser('Max');
console.log(user.getName()); // "Max"
user.setPassword('secure123');
console.log(user.checkPassword('secure123')); // true
// console.log(user._password); // undefined - PRIVAT!

// CLOSURE in LOOPS - Klassischer Fehler!
// ❌ FALSCH:
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 3, 3, 3 (nicht 0, 1, 2!)
  }, 1000);
}

// ✅ LÖSUNG 1: let statt var
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0, 1, 2 ✓
  }, 1000);
}

// ✅ LÖSUNG 2: IIFE
for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i); // 0, 1, 2 ✓
    }, 1000);
  })(i);
}

// MODULE PATTERN - Private + Public
const calculator = (function() {
  // Private
  let history = [];
  
  function log(operation) {
    history.push(operation);
  }
  
  // Public API
  return {
    add(a, b) {
      const result = a + b;
      log(\`\${a} + \${b} = \${result}\`);
      return result;
    },
    getHistory() {
      return [...history]; // Copy!
    }
  };
})();

console.log(calculator.add(5, 3)); // 8
console.log(calculator.getHistory()); // ["5 + 3 = 8"]
// console.log(calculator.history); // undefined - PRIVAT!

// LEXICAL SCOPE - Inner hat Zugriff auf Outer
function outer() {
  const outerVar = "Outer";
  
  function inner() {
    const innerVar = "Inner";
    console.log(outerVar); // ✅ Zugriff auf outer
    console.log(innerVar); // ✅ Zugriff auf own
  }
  
  inner();
  // console.log(innerVar); // ❌ Kein Zugriff auf inner
}`,
            description: 'Scope defines where variables are visible. Global scope (everywhere), Function scope (only in function), Block scope (only in {}). Closures: Inner functions remember outer scope! Perfect for private variables, module pattern, callbacks. let/const have block scope, var has function scope.',
            usage: 'Closures für Private Variables (Encapsulation). Module Pattern für Public/Private API. let statt var in Loops. IIFE für sofortigen Scope. Lexical Scope: Inner sieht Outer. Factory Functions returnen Objects mit Closures.',
            bestPractices: [
              '✅ let/const statt var (Block Scope)',
              '✅ Closures für Private Variables',
              '✅ Module Pattern für APIs',
              '✅ IIFE für Isolation',
              '✅ Factory Functions für Object Creation',
              '❌ Globale Variablen vermeiden',
              '❌ var in Loops (Closure Problem)'
            ],
            commonMistakes: [
              '❌ var in Loops: closure merkt sich var (nicht let)',
              '❌ Closure Memory Leaks bei DOM Elements',
              '❌ this in Closures falsch (Arrow Functions!)',
              '❌ Unnötige Closures (Performance)'
            ],
            relatedTopics: ['Functions', 'Hoisting', 'IIFE', 'Module Pattern', 'Memory Management'],
            challenge: '💪 Erstelle: 1) Factory Function mit private counter, 2) increment/decrement Methods, 3) getValue() public'
          },
          {
            title: 'Error Handling',
            code: `// TRY-CATCH - Fehler abfangen
try {
  // Code der fehlschlagen könnte
  const data = JSON.parse('invalid json');
} catch (error) {
  // Fehler behandeln
  console.error('Fehler:', error.message);
  console.error('Stack:', error.stack);
} finally {
  // ALWAYS executed (optional)
  console.log('Cleanup Code');
}

// EIGENE FEHLER WERFEN
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division durch 0 nicht möglich!');
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}

// CUSTOM ERROR CLASSES
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

// Verwendung
function validateEmail(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Ungültige Email');
  }
  return true;
}

try {
  validateEmail('invalid-email');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation:', error.message);
  } else {
    console.error('Anderer Fehler:', error);
  }
}

// ASYNC ERROR HANDLING
async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new NetworkError(
        'Request failed',
        response.status
      );
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof NetworkError) {
      console.error(\`HTTP \${error.statusCode}: \${error.message}\`);
    } else if (error instanceof SyntaxError) {
      console.error('Invalid JSON:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
    throw error; // Weitergeben oder
    // return null; // Default Value
  }
}

// PROMISE ERROR HANDLING
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    console.error('Fehler:', error);
  })
  .finally(() => {
    console.log('Cleanup');
  });

// UNHANDLED REJECTION HANDLER
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  event.preventDefault(); // Verhindert Console Error
});

// GLOBAL ERROR HANDLER
window.addEventListener('error', (event) => {
  console.error('Global Error:', event.error);
  // Error Tracking (z.B. Sentry)
  return true; // Verhindert Default
});

// ERROR BOUNDARIES (React-like)
class SafeComponent {
  constructor(render) {
    this.render = render;
  }
  
  execute() {
    try {
      return this.render();
    } catch (error) {
      console.error('Component Error:', error);
      return '<div>Error occurred</div>';
    }
  }
}

// RETRY LOGIC
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(\`Versuch \${i + 1} fehlgeschlagen\`);
      
      if (i === retries - 1) {
        throw new Error(\`Failed after \${retries} attempts\`);
      }
      
      // Exponential Backoff
      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, i)));
    }
  }
}

// VALIDATION HELPER
function validateUser(user) {
  const errors = [];
  
  if (!user.name) errors.push('Name required');
  if (!user.email) errors.push('Email required');
  if (user.age && user.age < 18) errors.push('Must be 18+');
  
  if (errors.length > 0) {
    throw new ValidationError(errors.join(', '));
  }
  
  return true;
}`,
            description: 'Error handling prevents app crashes. try-catch catches errors. throw new Error() throws errors. Custom error classes (extends Error) for specific errors. async/await with try-catch. Promise .catch(). finally for cleanup. instanceof for error types. Global handlers for unhandled errors.',
            usage: 'try-catch um riskanten Code. throw für Validation. Custom Errors (ValidationError, NetworkError). async mit try-catch. Promise mit .catch(). finally für Cleanup (DB close, Loading hide). Retry Logic mit Loop. Error Logging/Tracking.',
            bestPractices: [
              '✅ try-catch um async/await',
              '✅ Custom Error Classes für Clarity',
              '✅ finally für Cleanup',
              '✅ instanceof für Error Typen',
              '✅ Error Logging/Monitoring',
              '✅ Spezifische Error Messages',
              '❌ Empty catch blocks',
              '❌ Errors verschlucken ohne Logging'
            ],
            commonMistakes: [
              '❌ catch ohne Error Handling (silent fail)',
              '❌ throw ohne try-catch (uncaught error)',
              '❌ async ohne try-catch (unhandled rejection)',
              '❌ finally mit return (überschreibt try return)',
              '❌ Zu generische Error Messages'
            ],
            relatedTopics: ['Try-Catch', 'Async/Await', 'Promises', 'Custom Errors', 'Error Logging'],
            challenge: '💪 Erstelle: 1) fetchUser() mit Custom Error, 2) Retry Logic 3x, 3) Logging aller Errors'
          }
        ]
      },
      strings: {
        name: 'Strings & Numbers',
        items: [
          {
            title: 'String Methods',
            code: `const text = "  Hello World  ";

// LÄNGE
console.log(text.length); // 15

// GROSS/KLEIN
console.log(text.toLowerCase()); // "  hello world  "
console.log(text.toUpperCase()); // "  HELLO WORLD  "

// TRIMMEN - Whitespace entfernen
console.log(text.trim()); // "Hello World"
console.log(text.trimStart()); // "Hello World  "
console.log(text.trimEnd()); // "  Hello World"

// SUCHEN
console.log(text.includes("World")); // true
console.log(text.includes("world")); // false (case-sensitive!)
console.log(text.startsWith("  Hello")); // true
console.log(text.endsWith("World  ")); // true

// INDEX FINDEN
console.log(text.indexOf("World")); // 8
console.log(text.indexOf("xyz")); // -1 (nicht gefunden)
console.log(text.lastIndexOf("o")); // 9 (letztes o)

// SUBSTRING EXTRAHIEREN
const str = "JavaScript";
console.log(str.slice(0, 4)); // "Java" (start, end)
console.log(str.slice(-6)); // "Script" (von hinten)
console.log(str.substring(4, 10)); // "Script"
console.log(str.substr(4, 6)); // "Script" (start, length) - deprecated!

// ERSETZEN
const message = "Hello World";
console.log(message.replace("World", "JS")); // "Hello JS"
console.log(message.replaceAll("l", "L")); // "HeLLo WorLd"

// Mit RegEx
const email = "user@example.com";
console.log(email.replace(/@.*/, "@gmail.com")); // "user@gmail.com"

// SPLIT - String zu Array
const csv = "Max,25,Berlin";
console.log(csv.split(",")); // ["Max", "25", "Berlin"]

const sentence = "Hello World";
console.log(sentence.split(" ")); // ["Hello", "World"]
console.log(sentence.split("")); // ["H", "e", "l", "l", "o", ...]

// REPEAT
console.log("Ha".repeat(3)); // "HaHaHa"
console.log("-".repeat(20)); // "--------------------"

// PADSTART / PADEND
const num = "5";
console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(3, "0")); // "500"

// CHARAT / CHARCODEAT
console.log(str.charAt(0)); // "J"
console.log(str.charCodeAt(0)); // 74 (Unicode)
console.log(str[0]); // "J" (Modern)

// TEMPLATE LITERALS
const name = "Max";
const age = 25;
const greeting = \`Hallo \${name}, du bist \${age} Jahre alt\`;

// Multiline
const html = \`
  <div>
    <h1>\${name}</h1>
    <p>Age: \${age}</p>
  </div>
\`;

// Tagged Templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return \`\${result}\${str}<mark>\${values[i] || ''}</mark>\`;
  }, '');
}
const highlighted = highlight\`Name: \${name}, Age: \${age}\`;

// STRING MATCHING
const phone = "0123-456789";
console.log(phone.match(/\\d+/g)); // ["0123", "456789"]

// LOCALECOMPARE - Sortieren
console.log("ä".localeCompare("z", "de")); // -1 (ä kommt vor z)`,
            description: 'Strings are text data. Important methods: toLowerCase/toUpperCase, trim, includes/startsWith/endsWith, indexOf, slice/substring, replace/replaceAll, split. Template literals with backticks for interpolation and multiline. Strings are immutable (every method returns new string).',
            usage: 'Template Literals \`${var}\` für String Interpolation. includes() statt indexOf() !== -1. trim() für User Input. split() für CSV/Parsing. replace/replaceAll für Text Replacement. slice() für Substrings. padStart() für Formatting.',
            bestPractices: [
              '✅ Template Literals statt + Concatenation',
              '✅ includes() statt indexOf() !== -1',
              '✅ replaceAll() statt replace() mit RegEx',
              '✅ trim() bei User Input',
              '✅ Strings sind immutable - returnen neuen String',
              '❌ substr() ist deprecated',
              '❌ Vergessen dass Strings immutable sind'
            ],
            commonMistakes: [
              '❌ str.replace() ersetzt nur ERSTES Match (nutze replaceAll)',
              '❌ Vergessen dass includes/startsWith case-sensitive sind',
              '❌ charAt() vs [] - [] gibt undefined bei out-of-bounds',
              '❌ slice() negative Indexes falsch verstehen'
            ],
            relatedTopics: ['Template Literals', 'RegEx', 'String Interpolation', 'Immutability'],
            challenge: '💪 String "  hello world  ": 1) Trim, 2) Capitalize, 3) Replace "world" mit "JS", 4) Split zu Array'
          },
          {
            title: 'Numbers & Math',
            code: `// NUMBER METHODS
const num = 42.6789;

// RUNDEN
console.log(Math.round(num)); // 43 (auf-/abrunden)
console.log(Math.floor(num)); // 42 (abrunden)
console.log(Math.ceil(num)); // 43 (aufrunden)
console.log(Math.trunc(num)); // 42 (Dezimalen abschneiden)

// FIXED DECIMALS
console.log(num.toFixed(2)); // "42.68" (String!)
console.log(parseFloat(num.toFixed(2))); // 42.68 (Number)

// PRECISION
console.log(num.toPrecision(4)); // "42.68" (4 Stellen gesamt)

// TO STRING
console.log(num.toString()); // "42.6789"
console.log((255).toString(16)); // "ff" (Hexadezimal)
console.log((8).toString(2)); // "1000" (Binär)

// PARSING
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14abc")); // 3.14
console.log(Number("42")); // 42 (strict!)
console.log(Number("42px")); // NaN

// NaN PRÜFEN
console.log(isNaN("hello")); // true
console.log(Number.isNaN("hello")); // false (!)
console.log(Number.isNaN(NaN)); // true ✅

// INFINITY
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); // false

// INTEGER PRÜFEN
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.5)); // false

// MATH KONSTANTEN
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// MIN / MAX
console.log(Math.min(5, 2, 9, 1)); // 1
console.log(Math.max(5, 2, 9, 1)); // 9

const nums = [5, 2, 9, 1];
console.log(Math.max(...nums)); // 9 (mit Spread)

// RANDOM
console.log(Math.random()); // 0.xyz (0 bis <1)

// Random Integer zwischen min und max
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 10)); // z.B. 7

// POWER
console.log(Math.pow(2, 3)); // 8 (2³)
console.log(2 ** 3); // 8 (Modern - Exponent Operator)

// WURZEL
console.log(Math.sqrt(16)); // 4
console.log(Math.cbrt(27)); // 3 (Kubikwurzel)

// ABSOLUTE
console.log(Math.abs(-42)); // 42

// SIGN - Vorzeichen
console.log(Math.sign(-42)); // -1
console.log(Math.sign(42)); // 1
console.log(Math.sign(0)); // 0

// TRIGONOMETRIE
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1

// LOGARITHMEN
console.log(Math.log(Math.E)); // 1 (ln)
console.log(Math.log10(100)); // 2 (log₁₀)
console.log(Math.log2(8)); // 3 (log₂)

// NUMBER RANGE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// SAFE INTEGER CHECK
console.log(Number.isSafeInteger(42)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false

// FLOAT PRECISION Problem!
console.log(0.1 + 0.2); // 0.30000000000000004 ⚠️
console.log(0.1 + 0.2 === 0.3); // false ⚠️

// Lösung: toFixed
console.log((0.1 + 0.2).toFixed(2)); // "0.30"
console.log(parseFloat((0.1 + 0.2).toFixed(10))); // 0.3

// BIGINT für große Zahlen
const bigNum = 9007199254740991n;
const bigNum2 = BigInt(9007199254740991);
console.log(bigNum + 1n); // 9007199254740992n`,
            description: 'Numbers are numbers (Integer & Float are same type). Math object for calculations. Important: Math.round/floor/ceil, Math.random, Math.min/max, Math.pow/sqrt. toFixed() for decimals. parseInt/parseFloat for parsing. Number.isNaN/isInteger/isFinite for checks. Float precision problem with decimals!',
            usage: 'Math.round/floor/ceil für Runden. Math.random() + Math.floor für Random Integers. toFixed() für Currency/Display. Number.isNaN() statt isNaN(). parseInt() mit Radix. Number() für strict Parsing. BigInt für Zahlen > MAX_SAFE_INTEGER.',
            bestPractices: [
              '✅ Number.isNaN() statt isNaN()',
              '✅ toFixed() für Dezimalen, dann parseFloat()',
              '✅ ** statt Math.pow() (Modern)',
              '✅ Number() statt parseInt für strict',
              '✅ Spread mit Math.max/min für Arrays',
              '❌ 0.1 + 0.2 === 0.3 (Float Precision!)',
              '❌ parseInt ohne Radix bei Octal/Hex'
            ],
            commonMistakes: [
              '❌ Float Precision: 0.1 + 0.2 !== 0.3',
              '❌ isNaN("42") ist true, aber Number.isNaN("42") ist false',
              '❌ parseInt("08") = 0 in alten Browsern (Octal)',
              '❌ Math.random() * 10 gibt 0-9.999, nicht 0-10',
              '❌ toFixed() returnt String, nicht Number'
            ],
            relatedTopics: ['Math Object', 'Number Methods', 'Type Conversion', 'BigInt', 'Float Precision'],
            challenge: '💪 Erstelle: 1) Random Integer 1-100 Function, 2) Runde 3.14159 auf 2 Dezimalen, 3) Check ob 42.5 Integer'
          }
        ]
      },
      dataStructures: {
        name: 'Data Structures',
        items: [
          {
            title: 'Map & Set',
            code: `// MAP - Key-Value Store (besseres Object!)
const map = new Map();

// SET - Key und Value
map.set('name', 'Max');
map.set('age', 25);
map.set(42, 'number key'); // Keys können ALLES sein!
map.set({key: 'obj'}, 'object key');

// GET - Value lesen
console.log(map.get('name')); // "Max"
console.log(map.get('unknown')); // undefined

// HAS - Prüfen
console.log(map.has('name')); // true
console.log(map.has('email')); // false

// DELETE
map.delete('age');

// SIZE
console.log(map.size); // 3

// CLEAR - Alles löschen
// map.clear();

// ITERIEREN
for (const [key, value] of map) {
  console.log(\`\${key}: \${value}\`);
}

// Keys/Values/Entries
for (const key of map.keys()) {
  console.log(key);
}

for (const value of map.values()) {
  console.log(value);
}

for (const [key, value] of map.entries()) {
  console.log(key, value);
}

// forEach
map.forEach((value, key) => {
  console.log(\`\${key} = \${value}\`);
});

// MAP aus Array
const arr = [['name', 'Max'], ['age', 25]];
const map2 = new Map(arr);

// MAP zu Array
const entries = [...map]; // oder Array.from(map)

// MAP vs OBJECT
// Map: Alle Types als Keys, Size Property, besser für Add/Delete
// Object: Nur String/Symbol Keys, einfachere Syntax

// SET - Unique Values (keine Duplikate!)
const set = new Set();

// ADD
set.add(1);
set.add(2);
set.add(2); // Ignored (duplicate)
set.add('text');
set.add({key: 'value'}); // Objects sind immer unique

console.log(set.size); // 4

// HAS
console.log(set.has(1)); // true
console.log(set.has(3)); // false

// DELETE
set.delete(2);

// ITERIEREN
for (const value of set) {
  console.log(value);
}

set.forEach(value => {
  console.log(value);
});

// SET aus Array (Duplikate entfernen!)
const numbers = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(numbers)]; // [1, 2, 3, 4]

// PRAKTISCHE ANWENDUNGEN

// 1. Array Duplikate entfernen
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 2. Union - Vereinigung
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]); // Set(5) {1, 2, 3, 4, 5}

// 3. Intersection - Schnittmenge
const intersection = new Set(
  [...setA].filter(x => setB.has(x))
); // Set(1) {3}

// 4. Difference - Differenz
const difference = new Set(
  [...setA].filter(x => !setB.has(x))
); // Set(2) {1, 2}

// 5. Cache mit Map
class Cache {
  constructor() {
    this.cache = new Map();
  }
  
  set(key, value, ttl = 60000) {
    this.cache.set(key, {
      value,
      expires: Date.now() + ttl
    });
  }
  
  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() > item.expires) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }
}

// WEAKMAP & WEAKSET - Garbage Collection friendly
const weakMap = new WeakMap();
let obj = {key: 'value'};

weakMap.set(obj, 'data');
// When obj = null is set, entry is automatically removed!

// WeakMap: Keys müssen Objects sein, keine Iteration
// Nützlich für Private Data, Metadata`,
            description: 'Map is key-value store (better than Object). All types as keys possible. Methods: set/get/has/delete. size property. Iteration with for...of. Set is collection of unique values. add/has/delete methods. Duplicates automatically removed. [...new Set(arr)] removes array duplicates. WeakMap/WeakSet for memory management.',
            usage: 'Map statt Object wenn: Non-String Keys, frequent add/delete, need size. Set für Unique Values: Duplikate entfernen, Union/Intersection. WeakMap für Object Metadata ohne Memory Leaks. [...new Set()] für unique Arrays.',
            bestPractices: [
              '✅ Map für Non-String Keys',
              '✅ Set für Unique Collections',
              '✅ [...new Set(arr)] für Unique Arrays',
              '✅ WeakMap für Object Metadata',
              '✅ Map für frequent add/delete',
              '❌ Object wenn Map besser passt',
              '❌ Set mit Objects (jedes Object ist unique)'
            ],
            commonMistakes: [
              '❌ map[key] statt map.get(key) nutzen',
              '❌ Set mit Objects: Jedes {} ist unique',
              '❌ WeakMap Keys müssen Objects sein',
              '❌ set.size ist Property, nicht Method',
              '❌ Vergessen dass Set keine Indexes hat'
            ],
            relatedTopics: ['Objects', 'Arrays', 'Iteration', 'WeakMap', 'Memory Management'],
            challenge: '💪 Erstelle: 1) Map mit User Data, 2) Set aus Array [1,1,2,2,3], 3) Union zweier Sets'
          },
          {
            title: 'Dates & Time',
            code: `// DATE ERSTELLEN
const now = new Date(); // Jetzt
const specific = new Date('2024-12-25'); // String
const fromValues = new Date(2024, 11, 25); // Jahr, Monat (0-11!), Tag
const fromTimestamp = new Date(1704067200000); // Timestamp

// AKTUELLE ZEIT
console.log(Date.now()); // Timestamp in ms
console.log(new Date().getTime()); // Gleich

// GET METHODS
const date = new Date('2024-12-25T15:30:00');

console.log(date.getFullYear()); // 2024
console.log(date.getMonth()); // 11 (0-11! Dezember = 11)
console.log(date.getDate()); // 25 (Tag im Monat)
console.log(date.getDay()); // 3 (Wochentag, 0=Sonntag)

console.log(date.getHours()); // 15
console.log(date.getMinutes()); // 30
console.log(date.getSeconds()); // 0
console.log(date.getMilliseconds()); // 0

// SET METHODS
date.setFullYear(2025);
date.setMonth(0); // Januar
date.setDate(1);
date.setHours(12, 0, 0, 0); // H, M, S, MS

// FORMATTING
console.log(date.toString());
// "Wed Jan 01 2025 12:00:00 GMT+0100"

console.log(date.toDateString()); // "Wed Jan 01 2025"
console.log(date.toTimeString()); // "12:00:00 GMT+0100"

console.log(date.toISOString()); 
// "2025-01-01T11:00:00.000Z" (UTC!)

console.log(date.toLocaleDateString('de-DE'));
// "1.1.2025"

console.log(date.toLocaleTimeString('de-DE'));
// "12:00:00"

console.log(date.toLocaleString('de-DE'));
// "1.1.2025, 12:00:00"

// Mit Options
console.log(date.toLocaleDateString('de-DE', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}));
// "Mittwoch, 1. Januar 2025"

// DATUM VERGLEICHEN
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-12-31');

console.log(date1 < date2); // true
console.log(date1.getTime() === date2.getTime()); // false

// DIFFERENZ BERECHNEN
const diff = date2 - date1; // Millisekunden
const days = diff / (1000 * 60 * 60 * 24); // Tage
console.log(days); // 365

// DATUM MANIPULIEREN
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const tomorrow = addDays(new Date(), 1);
const lastWeek = addDays(new Date(), -7);

// RELATIVE TIME
function timeAgo(date) {
  const seconds = Math.floor((Date.now() - date) / 1000);
  
  const intervals = {
    Jahr: 31536000,
    Monat: 2592000,
    Woche: 604800,
    Tag: 86400,
    Stunde: 3600,
    Minute: 60
  };
  
  for (const [name, value] of Object.entries(intervals)) {
    const count = Math.floor(seconds / value);
    if (count >= 1) {
      return \`vor \${count} \${name}\${count > 1 ? 'en' : ''}\`;
    }
  }
  
  return 'gerade eben';
}

console.log(timeAgo(new Date(Date.now() - 3600000)));
// "vor 1 Stunde"

// TIMER & DELAYS
// setTimeout - Einmalig
const timeoutId = setTimeout(() => {
  console.log('Nach 2 Sekunden');
}, 2000);

clearTimeout(timeoutId); // Abbrechen

// setInterval - Wiederholt
const intervalId = setInterval(() => {
  console.log('Jede Sekunde');
}, 1000);

clearInterval(intervalId); // Stoppen

// Promise-based Delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log('Start');
  await delay(2000);
  console.log('2 Sekunden später');
}

// COUNTDOWN
function countdown(seconds) {
  let remaining = seconds;
  
  const timer = setInterval(() => {
    console.log(remaining);
    remaining--;
    
    if (remaining < 0) {
      clearInterval(timer);
      console.log('Fertig!');
    }
  }, 1000);
}`,
            description: 'Date object for date/time. new Date() for now. Date.now() for timestamp. get methods (getFullYear, getMonth, getDate, getHours, etc.). set methods for changing. toLocaleDateString/toLocaleTimeString for formatting. Month is 0-indexed (0=January). Comparison with < > or getTime(). setTimeout/setInterval for timers.',
            usage: 'Date.now() für Timestamps. toLocaleString() für User-Friendly Dates. getTime() für Vergleiche/Differenzen. setDate(getDate() + days) für Date Math. setTimeout für Delays. setInterval für Wiederholung. clearTimeout/clearInterval zum Stoppen.',
            bestPractices: [
              '✅ toLocaleString() mit Locale',
              '✅ toISOString() für APIs',
              '✅ getTime() für Vergleiche',
              '✅ clearTimeout/clearInterval immer aufrufen',
              '✅ Date Libraries (date-fns, dayjs) für komplexe Operationen',
              '❌ Monat vergessen (0-indexed)',
              '❌ Direkt Date Objects vergleichen (nutze getTime)'
            ],
            commonMistakes: [
              '❌ getMonth() ist 0-11, nicht 1-12',
              '❌ getDay() gibt Wochentag (0-6), nicht Tag im Monat',
              '❌ Date Objects mit == vergleichen (nutze getTime())',
              '❌ clearInterval vergessen (Memory Leak)',
              '❌ Timezones nicht beachten'
            ],
            relatedTopics: ['Timestamps', 'setTimeout', 'setInterval', 'Date Libraries', 'Timezones'],
            challenge: '💪 Erstelle: 1) Function die Tage bis Weihnachten zählt, 2) Format Date als "DD.MM.YYYY", 3) timeAgo Function'
          }
        ]
      },
      modules: {
        name: 'Modules & APIs',
        items: [
          {
            title: 'ES6 Modules - Import/Export',
            code: `// === FILE: math.js ===

// NAMED EXPORTS
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Oder gesammelt exportieren
const square = x => x * x;
const cube = x => x ** 3;

export { square, cube };

// Export mit Alias
const subtract = (a, b) => a - b;
export { subtract as minus };

// === FILE: user.js ===

// DEFAULT EXPORT - Nur einer pro File!
export default class User {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return \`Hello, \${this.name}\`;
  }
}

// Oder
class Product {
  // ...
}
export default Product;

// DEFAULT + NAMED zusammen
export const API_URL = 'https://api.example.com';
export default class API {
  // ...
}

// === FILE: main.js ===

// IMPORT - Named Imports
import { add, multiply } from './math.js';
console.log(add(2, 3)); // 5

// Import mit Alias
import { minus as subtract } from './math.js';

// Import All
import * as MathUtils from './math.js';
console.log(MathUtils.add(2, 3));
console.log(MathUtils.PI);

// DEFAULT Import
import User from './user.js';
const user = new User('Max');

// DEFAULT + NAMED
import API, { API_URL } from './api.js';

// DYNAMIC IMPORT - Lazy Loading!
async function loadModule() {
  const module = await import('./math.js');
  console.log(module.add(2, 3));
}

// Conditional Import
if (condition) {
  const { feature } = await import('./feature.js');
}

// RE-EXPORT - Module weitergeben
// === FILE: index.js ===
export { add, multiply } from './math.js';
export { default as User } from './user.js';

// Alles exportieren
export * from './math.js';

// === HTML Integration ===
// <script type="module" src="main.js"></script>

// SIDE EFFECTS - Code is executed
import './polyfills.js'; // Kein Import, nur laden

// === package.json (Node.js) ===
/*
{
  "type": "module"
}
*/

// COMMONJS (Node.js Old)
// Export
module.exports = { add, multiply };
// oder
exports.add = add;

// Import
const { add } = require('./math.js');
const math = require('./math');`,
            description: 'ES6 Modules for code organization. export for public API. import to use. Named exports: export const/function. Default export: export default (only one per file). import { name } for named. import Name for default. import * as All for all. Dynamic import() for lazy loading. type="module" in HTML.',
            usage: 'Named Exports für Utilities. Default Export für Haupt-Class/Component. import * as für Namespacing. Dynamic import() für Code Splitting. Re-exports für Barrel Files (index.js). Side-Effect Imports für Setup Code.',
            bestPractices: [
              '✅ Named Exports für Utilities',
              '✅ Default Export für Main Export',
              '✅ Barrel Files (index.js) für Clean Imports',
              '✅ Dynamic Import für Lazy Loading',
              '✅ .js Extension in Imports',
              '❌ Mix von CommonJS und ES Modules',
              '❌ Circular Dependencies'
            ],
            commonMistakes: [
              '❌ import User from "./user" ohne Default Export',
              '❌ import { User } from "./user" bei Default Export',
              '❌ File Extension vergessen: import from "./math"',
              '❌ Circular Imports (A imports B, B imports A)',
              '❌ type="module" in <script> vergessen'
            ],
            relatedTopics: ['Module Bundlers', 'Code Splitting', 'Tree Shaking', 'Dynamic Imports'],
            challenge: '💪 Erstelle: 1) math.js mit Named Exports, 2) User.js mit Default, 3) Import beides in main.js'
          },
          {
            title: 'Browser APIs - LocalStorage & Fetch',
            code: `// LOCALSTORAGE - Persistent Storage
// Speichern
localStorage.setItem('username', 'Max');
localStorage.setItem('theme', 'dark');

// Lesen
const username = localStorage.getItem('username'); // "Max"
const theme = localStorage.getItem('theme'); // "dark"

// Löschen
localStorage.removeItem('username');

// Alles löschen
localStorage.clear();

// Größe
console.log(localStorage.length);

// Key by Index
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(key, localStorage.getItem(key));
}

// Objects speichern (JSON!)
const user = { name: 'Max', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

const stored = JSON.parse(localStorage.getItem('user'));
console.log(stored.name); // "Max"

// SESSIONSTORAGE - Nur für Session
sessionStorage.setItem('temp', 'value');
// Deleted when tab is closed

// COOKIES - Mit Expiration
document.cookie = "username=Max; max-age=86400"; // 1 Tag
document.cookie = "theme=dark; expires=Thu, 01 Jan 2025 00:00:00 UTC";

// Lesen
console.log(document.cookie); // "username=Max; theme=dark"

// Helper Functions
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = \`\${name}=\${value}; expires=\${date.toUTCString()}; path=/\`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  const cookie = cookies.find(c => c.startsWith(name + '='));
  return cookie ? cookie.split('=')[1] : null;
}

// FETCH API - HTTP Requests
// GET Request
fetch('https://api.example.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fehler:', error);
  });

// Mit async/await
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fehler:', error);
    throw error;
  }
}

// POST Request
async function createUser(userData) {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token123'
    },
    body: JSON.stringify(userData)
  });
  
  return response.json();
}

// PUT/PATCH/DELETE
await fetch(\`https://api.example.com/users/\${id}\`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(updatedData)
});

await fetch(\`https://api.example.com/users/\${id}\`, {
  method: 'DELETE'
});

// FILE UPLOAD
const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('title', 'My File');

await fetch('/upload', {
  method: 'POST',
  body: formData // Kein Content-Type Header!
});

// ABORT REQUEST
const controller = new AbortController();

fetch('/api/data', {
  signal: controller.signal
})
  .then(response => response.json())
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request aborted');
    }
  });

// Nach 5 Sekunden abbrechen
setTimeout(() => controller.abort(), 5000);

// PARALLEL REQUESTS
const [users, posts, comments] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
  fetch('/api/comments').then(r => r.json())
]);

// RESPONSE TYPES
const jsonData = await response.json(); // JSON
const textData = await response.text(); // Text
const blobData = await response.blob(); // Binary
const formData = await response.formData(); // FormData
const arrayBuffer = await response.arrayBuffer(); // ArrayBuffer

// RESPONSE PROPERTIES
console.log(response.status); // 200
console.log(response.statusText); // "OK"
console.log(response.ok); // true (200-299)
console.log(response.headers.get('Content-Type'));`,
            description: 'localStorage for persistent storage (5-10MB). Key-value store, strings only. JSON.stringify/parse for objects. sessionStorage only for session. Cookies with expiration. Fetch API for HTTP requests. GET/POST/PUT/DELETE. async/await recommended. response.ok for status check. AbortController for canceling.',
            usage: 'localStorage.setItem/getItem für User Preferences. JSON.stringify für Objects. fetch mit async/await. Response Status prüfen (!response.ok). Headers für Auth. FormData für File Uploads. Promise.all für Parallel Requests. AbortController für Timeout.',
            bestPractices: [
              '✅ JSON.stringify/parse für Objects',
              '✅ try-catch bei localStorage (QuotaExceeded)',
              '✅ response.ok prüfen',
              '✅ async/await statt .then()',
              '✅ AbortController für Timeouts',
              '✅ Parallel Requests mit Promise.all',
              '❌ Sensitive Data in localStorage',
              '❌ response.json() ohne ok Check'
            ],
            commonMistakes: [
              '❌ localStorage ohne JSON.stringify für Objects',
              '❌ Keine Error Handling bei fetch',
              '❌ response.json() ohne await',
              '❌ Content-Type vergessen bei POST',
              '❌ Sensitive Tokens in localStorage (nutze HttpOnly Cookies)'
            ],
            relatedTopics: ['HTTP', 'REST APIs', 'JSON', 'Cookies', 'Security', 'CORS'],
            challenge: '💪 Erstelle: 1) Save/Load User zu localStorage, 2) fetch Users von API, 3) Error Handling'
          }
        ]
      }
    }
  },
  
  python: {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3776AB',
    description: 'High-level, interpreted, general-purpose programming language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Types',
            code: `# Variables (dynamically typed)
name = "John"
age = 30
height = 1.75
is_active = True

# Type hints (Python 3.5+)
def greet(name: str) -> str:
    return f"Hello, {name}!"`,
            description: 'Python variable declarations and type hints',
            usage: 'Python is dynamically typed but supports type hints'
          },
          {
            title: 'Data Structures',
            code: `# List (mutable)
fruits = ["apple", "banana", "orange"]

# Tuple (immutable)
coordinates = (10, 20)

# Dictionary
person = {
    "name": "John",
    "age": 30,
    "city": "NYC"
}

# Set (unique elements)
unique_numbers = {1, 2, 3, 4, 5}`,
            description: 'Built-in Python data structures',
            usage: 'Choose the right data structure for your needs'
          },
          {
            title: 'Functions',
            code: `def greet(name, greeting="Hello"):
    """Function with default parameter"""
    return f"{greeting}, {name}!"

# Lambda functions
square = lambda x: x ** 2

# Args and kwargs
def flexible_func(*args, **kwargs):
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

# Decorators
def timer(func):
    def wrapper(*args, **kwargs):
        # Add timing logic
        return func(*args, **kwargs)
    return wrapper`,
            description: 'Python function definitions and concepts',
            usage: 'Functions are first-class objects in Python'
          }
        ]
      },
      lists: {
        name: 'Lists & Comprehensions',
        items: [
          {
            title: 'List Operations',
            code: `numbers = [1, 2, 3, 4, 5]

# Slicing
first_three = numbers[:3]
last_two = numbers[-2:]

# Methods
numbers.append(6)
numbers.extend([7, 8])
numbers.insert(0, 0)
numbers.remove(3)
popped = numbers.pop()

# Iteration
for num in numbers:
    print(num)

for i, num in enumerate(numbers):
    print(f"Index {i}: {num}")`,
            description: 'Common list operations and methods',
            usage: 'Lists are versatile and commonly used'
          },
          {
            title: 'List Comprehensions',
            code: `# Basic comprehension
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(10) if x % 2 == 0]

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]

# Dictionary comprehension
square_dict = {x: x**2 for x in range(5)}

# Set comprehension
unique_lengths = {len(word) for word in words}`,
            description: 'Pythonic way to create lists',
            usage: 'Comprehensions are concise and readable'
          }
        ]
      },
      classes: {
        name: 'OOP & Classes',
        items: [
          {
            title: 'Classes',
            code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, I'm {self.name}"
    
    @property
    def is_adult(self):
        return self.age >= 18
    
    @staticmethod
    def species():
        return "Homo sapiens"

class Developer(Person):
    def __init__(self, name, age, language):
        super().__init__(name, age)
        self.language = language`,
            description: 'Python class definition and inheritance',
            usage: 'OOP in Python with classes and methods'
          }
        ]
      },
      files: {
        name: 'File & Exception Handling',
        items: [
          {
            title: 'File Operations',
            code: `# Reading files
with open('file.txt', 'r') as f:
    content = f.read()

# Writing files
with open('output.txt', 'w') as f:
    f.write('Hello, World!')

# Reading lines
with open('file.txt', 'r') as f:
    for line in f:
        print(line.strip())

# JSON files
import json
with open('data.json', 'r') as f:
    data = json.load(f)`,
            description: 'File handling in Python',
            usage: 'Always use context managers (with) for files'
          },
          {
            title: 'Exception Handling',
            code: `try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    print("No errors occurred")
finally:
    print("Cleanup code")

# Raising exceptions
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age`,
            description: 'Error handling with try/except',
            usage: 'Handle exceptions gracefully'
          }
        ]
      }
    }
  },
  
  java: {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: '#ED8B00',
    description: 'Object-oriented, class-based programming language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Hello World',
            code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
            description: 'Basic Java program structure',
            usage: 'Every Java application starts with a main method'
          },
          {
            title: 'Variables & Types',
            code: `// Primitive types
int number = 42;
double decimal = 3.14;
boolean flag = true;
char letter = 'A';
long bigNumber = 100L;
float smallDecimal = 2.5f;

// Reference types
String text = "Hello";
Integer boxedInt = 42;

// Constants
final double PI = 3.14159;`,
            description: 'Java data types and variables',
            usage: 'Java is statically typed - declare types explicitly'
          },
          {
            title: 'Methods',
            code: `public class Calculator {
    // Instance method
    public int add(int a, int b) {
        return a + b;
    }
    
    // Static method
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    // Method overloading
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Varargs
    public int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
}`,
            description: 'Method declarations in Java',
            usage: 'Methods define behavior in Java classes'
          }
        ]
      },
      classes: {
        name: 'Classes & OOP',
        items: [
          {
            title: 'Classes',
            code: `public class Person {
    // Fields
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getters and Setters
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    // Method
    public void greet() {
        System.out.println("Hello, I'm " + name);
    }
}`,
            description: 'Java class with encapsulation',
            usage: 'Classes encapsulate data and behavior'
          },
          {
            title: 'Inheritance',
            code: `public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void makeSound() {
        System.out.println("Some sound");
    }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
    
    public void fetch() {
        System.out.println(name + " is fetching");
    }
}`,
            description: 'Inheritance in Java',
            usage: 'Extend classes to reuse and override behavior'
          },
          {
            title: 'Interfaces',
            code: `public interface Drawable {
    void draw();
    
    default void display() {
        System.out.println("Displaying...");
    }
}

public class Circle implements Drawable {
    private double radius;
    
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
}

// Multiple interfaces
public class Shape implements Drawable, Comparable<Shape> {
    @Override
    public void draw() { }
    
    @Override
    public int compareTo(Shape other) {
        return 0;
    }
}`,
            description: 'Java interfaces for abstraction',
            usage: 'Interfaces define contracts for classes'
          }
        ]
      },
      collections: {
        name: 'Collections Framework',
        items: [
          {
            title: 'Lists',
            code: `import java.util.*;

// ArrayList
List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.remove(0);
String first = list.get(0);

// LinkedList
LinkedList<Integer> linkedList = new LinkedList<>();
linkedList.addFirst(1);
linkedList.addLast(2);

// Iteration
for (String item : list) {
    System.out.println(item);
}

// Lambda iteration (Java 8+)
list.forEach(item -> System.out.println(item));`,
            description: 'List collections in Java',
            usage: 'Lists store ordered collections of elements'
          },
          {
            title: 'Maps',
            code: `import java.util.*;

// HashMap
Map<String, Integer> map = new HashMap<>();
map.put("John", 30);
map.put("Jane", 25);

int age = map.get("John");
boolean hasKey = map.containsKey("John");

// Iteration
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// TreeMap (sorted)
Map<String, Integer> sortedMap = new TreeMap<>(map);`,
            description: 'Map collections for key-value pairs',
            usage: 'Maps store associations between keys and values'
          }
        ]
      },
      streams: {
        name: 'Streams & Lambdas',
        items: [
          {
            title: 'Stream Operations',
            code: `import java.util.stream.*;
import java.util.*;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Filter and map
List<Integer> doubled = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .collect(Collectors.toList());

// Reduce
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);

// Find
Optional<Integer> first = numbers.stream()
    .filter(n -> n > 3)
    .findFirst();

// Count
long count = numbers.stream()
    .filter(n -> n % 2 == 0)
    .count();`,
            description: 'Stream API for functional programming',
            usage: 'Streams enable functional-style operations'
          }
        ]
      }
    }
  },
  
  c: {
    id: 'c',
    name: 'C',
    icon: '©️',
    color: '#A8B9CC',
    description: 'General-purpose, procedural programming language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Hello World',
            code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
            description: 'Basic C program structure',
            usage: 'Every C program starts with main function'
          },
          {
            title: 'Variables & Types',
            code: `#include <stdio.h>

int main() {
    // Integer types
    int number = 42;
    short small = 10;
    long big = 100000L;
    
    // Floating point
    float decimal = 3.14f;
    double precise = 3.14159265359;
    
    // Character
    char letter = 'A';
    
    // Constants
    const int MAX = 100;
    
    // Unsigned
    unsigned int positive = 42;
    
    return 0;
}`,
            description: 'C data types and variables',
            usage: 'C has explicit type declarations'
          },
          {
            title: 'Functions',
            code: `#include <stdio.h>

// Function declaration
int add(int a, int b);

// Function definition
int add(int a, int b) {
    return a + b;
}

// Void function
void greet(char* name) {
    printf("Hello, %s!\\n", name);
}

// Recursive function
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int result = add(5, 3);
    greet("World");
    return 0;
}`,
            description: 'Function declarations in C',
            usage: 'Functions must be declared before use'
          }
        ]
      },
      pointers: {
        name: 'Pointers & Memory',
        items: [
          {
            title: 'Pointers',
            code: `#include <stdio.h>

int main() {
    int num = 42;
    int* ptr = &num;  // Pointer to num
    
    printf("Value: %d\\n", num);
    printf("Address: %p\\n", (void*)&num);
    printf("Pointer value: %p\\n", (void*)ptr);
    printf("Dereferenced: %d\\n", *ptr);
    
    // Modify through pointer
    *ptr = 100;
    printf("New value: %d\\n", num);
    
    return 0;
}`,
            description: 'Pointer basics in C',
            usage: 'Pointers store memory addresses'
          },
          {
            title: 'Dynamic Memory',
            code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    // Allocate memory
    int* arr = (int*)malloc(5 * sizeof(int));
    
    if (arr == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    
    // Use array
    for (int i = 0; i < 5; i++) {
        arr[i] = i * 10;
    }
    
    // Reallocate
    arr = (int*)realloc(arr, 10 * sizeof(int));
    
    // Free memory
    free(arr);
    arr = NULL;
    
    return 0;
}`,
            description: 'Dynamic memory allocation',
            usage: 'Always free allocated memory to prevent leaks'
          }
        ]
      },
      arrays: {
        name: 'Arrays & Strings',
        items: [
          {
            title: 'Arrays',
            code: `#include <stdio.h>

int main() {
    // Array declaration
    int numbers[5] = {1, 2, 3, 4, 5};
    
    // Access elements
    int first = numbers[0];
    numbers[2] = 10;
    
    // Iterate
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    
    // Multi-dimensional
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    return 0;
}`,
            description: 'Array operations in C',
            usage: 'Arrays have fixed size at compile time'
          },
          {
            title: 'Strings',
            code: `#include <stdio.h>
#include <string.h>

int main() {
    // String declaration
    char str1[] = "Hello";
    char str2[20] = "World";
    
    // String functions
    int len = strlen(str1);
    strcpy(str2, str1);
    strcat(str1, " World");
    int cmp = strcmp(str1, str2);
    
    // Character access
    char first = str1[0];
    
    printf("%s\\n", str1);
    
    return 0;
}`,
            description: 'String operations in C',
            usage: 'Strings are null-terminated character arrays'
          }
        ]
      },
      structs: {
        name: 'Structs & Files',
        items: [
          {
            title: 'Structures',
            code: `#include <stdio.h>
#include <string.h>

struct Person {
    char name[50];
    int age;
    float height;
};

typedef struct {
    int x;
    int y;
} Point;

int main() {
    // Initialize struct
    struct Person person1;
    strcpy(person1.name, "John");
    person1.age = 30;
    
    // With typedef
    Point p1 = {10, 20};
    
    // Pointer to struct
    struct Person* ptr = &person1;
    printf("%s\\n", ptr->name);
    
    return 0;
}`,
            description: 'Structures for complex data',
            usage: 'Structs group related data together'
          },
          {
            title: 'File I/O',
            code: `#include <stdio.h>

int main() {
    FILE* file;
    
    // Write to file
    file = fopen("output.txt", "w");
    if (file != NULL) {
        fprintf(file, "Hello, File!\\n");
        fclose(file);
    }
    
    // Read from file
    file = fopen("output.txt", "r");
    if (file != NULL) {
        char buffer[100];
        while (fgets(buffer, 100, file) != NULL) {
            printf("%s", buffer);
        }
        fclose(file);
    }
    
    return 0;
}`,
            description: 'File operations in C',
            usage: 'Always close files after use'
          }
        ]
      }
    }
  },
  
  csharp: {
    id: 'csharp',
    name: 'C#',
    icon: '🔷',
    color: '#239120',
    description: 'Modern, object-oriented programming language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Hello World',
            code: `using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}

// C# 9+ top-level statements
// Console.WriteLine("Hello, World!");`,
            description: 'Basic C# program structure',
            usage: 'C# programs start with Main method or top-level statements'
          },
          {
            title: 'Variables & Types',
            code: `// Value types
int number = 42;
double decimal = 3.14;
bool flag = true;
char letter = 'A';

// Reference types
string text = "Hello";
object obj = new object();

// Nullable types
int? nullableInt = null;

// Implicit typing
var autoInt = 42;
var autoString = "Hello";

// Constants
const double PI = 3.14159;

// readonly (runtime constant)
readonly DateTime createdAt = DateTime.Now;`,
            description: 'C# data types and variables',
            usage: 'C# is strongly typed with type inference'
          },
          {
            title: 'Methods',
            code: `public class Calculator
{
    // Instance method
    public int Add(int a, int b)
    {
        return a + b;
    }
    
    // Static method
    public static int Multiply(int a, int b)
    {
        return a * b;
    }
    
    // Method with optional parameters
    public void Greet(string name = "User")
    {
        Console.WriteLine($"Hello, {name}!");
    }
    
    // Method overloading
    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }
    
    // Expression body
    public int Square(int x) => x * x;
}`,
            description: 'Method declarations in C#',
            usage: 'Methods define behavior in classes'
          }
        ]
      },
      classes: {
        name: 'Classes & OOP',
        items: [
          {
            title: 'Classes',
            code: `public class Person
{
    // Auto-implemented properties
    public string Name { get; set; }
    public int Age { get; set; }
    
    // Property with backing field
    private string _email;
    public string Email
    {
        get { return _email; }
        set { _email = value.ToLower(); }
    }
    
    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
    
    // Method
    public void Greet()
    {
        Console.WriteLine($"Hello, I'm {Name}");
    }
}

// Record (C# 9+)
public record PersonRecord(string Name, int Age);`,
            description: 'C# class with properties',
            usage: 'Properties provide encapsulation with getters/setters'
          },
          {
            title: 'Inheritance',
            code: `public class Animal
{
    public string Name { get; set; }
    
    public virtual void MakeSound()
    {
        Console.WriteLine("Some sound");
    }
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
    
    public void Fetch()
    {
        Console.WriteLine($"{Name} is fetching");
    }
}

// Sealed class (cannot be inherited)
public sealed class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}`,
            description: 'Inheritance in C#',
            usage: 'Use virtual/override for polymorphism'
          },
          {
            title: 'Interfaces',
            code: `public interface IDrawable
{
    void Draw();
    
    // Default implementation (C# 8+)
    void Display()
    {
        Console.WriteLine("Displaying...");
    }
}

public class Circle : IDrawable
{
    public void Draw()
    {
        Console.WriteLine("Drawing circle");
    }
}

// Multiple interfaces
public class Shape : IDrawable, IComparable<Shape>
{
    public void Draw() { }
    
    public int CompareTo(Shape other)
    {
        return 0;
    }
}`,
            description: 'C# interfaces for abstraction',
            usage: 'Interfaces define contracts'
          }
        ]
      },
      collections: {
        name: 'Collections & LINQ',
        items: [
          {
            title: 'Collections',
            code: `using System.Collections.Generic;

// List
List<string> list = new List<string>();
list.Add("Apple");
list.Remove("Apple");
string first = list[0];

// Dictionary
Dictionary<string, int> dict = new Dictionary<string, int>();
dict["John"] = 30;
int age = dict["John"];

// HashSet
HashSet<int> set = new HashSet<int> { 1, 2, 3 };

// Queue
Queue<string> queue = new Queue<string>();
queue.Enqueue("First");
string item = queue.Dequeue();

// Stack
Stack<int> stack = new Stack<int>();
stack.Push(1);
int top = stack.Pop();`,
            description: 'Generic collections in C#',
            usage: 'Use generic collections for type safety'
          },
          {
            title: 'LINQ',
            code: `using System.Linq;

int[] numbers = { 1, 2, 3, 4, 5 };

// Query syntax
var evens = from n in numbers
            where n % 2 == 0
            select n;

// Method syntax
var doubled = numbers
    .Where(n => n % 2 == 0)
    .Select(n => n * 2)
    .ToList();

// Aggregate operations
int sum = numbers.Sum();
double avg = numbers.Average();
int max = numbers.Max();
int count = numbers.Count(n => n > 2);

// First/Single
int first = numbers.First();
int? firstOrDefault = numbers.FirstOrDefault(n => n > 10);`,
            description: 'LINQ for querying collections',
            usage: 'LINQ provides powerful query capabilities'
          }
        ]
      },
      async: {
        name: 'Async Programming',
        items: [
          {
            title: 'Async/Await',
            code: `using System.Threading.Tasks;

public class DataService
{
    public async Task<string> FetchDataAsync()
    {
        // Simulate async operation
        await Task.Delay(1000);
        return "Data";
    }
    
    public async Task ProcessDataAsync()
    {
        try
        {
            string data = await FetchDataAsync();
            Console.WriteLine(data);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
    
    // Multiple async operations
    public async Task<string[]> FetchMultipleAsync()
    {
        var task1 = FetchDataAsync();
        var task2 = FetchDataAsync();
        
        return await Task.WhenAll(task1, task2);
    }
}`,
            description: 'Asynchronous programming in C#',
            usage: 'Use async/await for non-blocking operations'
          }
        ]
      }
    }
  },
  
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: '🔷',
    color: '#3178C6',
    description: 'Typed superset of JavaScript',
    categories: {
      basics: {
        name: 'Basics & Types',
        items: [
          {
            title: 'Type Annotations',
            code: `// Basic types
let name: string = "John";
let age: number = 30;
let active: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b"];

// Tuples
let tuple: [string, number] = ["hello", 42];

// Any and Unknown
let anything: any = "flexible";
let unknown: unknown = "safer than any";`,
            description: 'TypeScript type annotations',
            usage: 'Add types to catch errors at compile time'
          },
          {
            title: 'Interfaces',
            code: `interface User {
  name: string;
  age: number;
  email?: string; // Optional
  readonly id: number; // Read-only
}

const user: User = {
  id: 1,
  name: "John",
  age: 30
};

// Extending interfaces
interface Admin extends User {
  role: string;
  permissions: string[];
}`,
            description: 'Define object shapes with interfaces',
            usage: 'Use interfaces for object contracts'
          },
          {
            title: 'Type Aliases',
            code: `// Simple alias
type ID = string | number;

// Object type
type Point = {
  x: number;
  y: number;
};

// Union types
type Status = "pending" | "success" | "error";

// Intersection types
type Employee = Person & {
  employeeId: number;
  department: string;
};

// Function type
type Callback = (data: string) => void;`,
            description: 'Create custom type definitions',
            usage: 'Type aliases for complex or reusable types'
          }
        ]
      },
      advanced: {
        name: 'Advanced Types',
        items: [
          {
            title: 'Generics',
            code: `// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
}

// Generic class
class Box<T> {
  private contents: T;
  
  constructor(value: T) {
    this.contents = value;
  }
  
  getContents(): T {
    return this.contents;
  }
}

// Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}`,
            description: 'Generic types for reusability',
            usage: 'Generics provide type-safe reusable code'
          },
          {
            title: 'Utility Types',
            code: `interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - all properties optional
type PartialUser = Partial<User>;

// Required - all properties required
type RequiredUser = Required<PartialUser>;

// Pick - select properties
type UserPreview = Pick<User, "id" | "name">;

// Omit - exclude properties
type UserWithoutEmail = Omit<User, "email">;

// Readonly
type ReadonlyUser = Readonly<User>;`,
            description: 'Built-in utility types',
            usage: 'Transform types efficiently'
          }
        ]
      },
      functions: {
        name: 'Functions & Classes',
        items: [
          {
            title: 'Typed Functions',
            code: `// Function with types
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
  return \`\${greeting || "Hello"}, \${name}\`;
}

// Default parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Function overloads
function getValue(x: string): string;
function getValue(x: number): number;
function getValue(x: string | number): string | number {
  return x;
}`,
            description: 'Type-safe function definitions',
            usage: 'Add type safety to function parameters and returns'
          },
          {
            title: 'Classes',
            code: `class Person {
  // Properties
  private name: string;
  protected age: number;
  public email: string;
  
  // Constructor
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  // Methods
  public greet(): string {
    return \`Hello, I'm \${this.name}\`;
  }
  
  // Getters and Setters
  get fullName(): string {
    return this.name;
  }
  
  set fullName(value: string) {
    this.name = value;
  }
  
  // Static members
  static species = "Homo sapiens";
}

// Abstract class
abstract class Animal {
  abstract makeSound(): void;
}`,
            description: 'TypeScript class features',
            usage: 'Use access modifiers for encapsulation'
          }
        ]
      }
    }
  },
  
  go: {
    id: 'go',
    name: 'Go',
    icon: '🐹',
    color: '#00ADD8',
    description: 'Fast, statically typed, compiled language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Types',
            code: `package main

import "fmt"

func main() {
    // Variable declaration
    var name string = "John"
    var age int = 30
    
    // Short declaration
    city := "New York"
    
    // Multiple variables
    var x, y int = 1, 2
    
    // Constants
    const PI = 3.14159
    
    // Type inference
    message := "Hello, Go!"
    
    fmt.Println(name, age, city)
}`,
            description: 'Go variable declarations and types',
            usage: 'Use := for short variable declarations'
          },
          {
            title: 'Functions',
            code: `package main

// Basic function
func add(a int, b int) int {
    return a + b
}

// Multiple return values
func divmod(a, b int) (int, int) {
    return a / b, a % b
}

// Named return values
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return
}

// Variadic function
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}`,
            description: 'Function definitions in Go',
            usage: 'Go functions can return multiple values'
          },
          {
            title: 'Control Flow',
            code: `package main

func main() {
    // If statement
    if x > 0 {
        // positive
    } else if x < 0 {
        // negative
    } else {
        // zero
    }
    
    // If with short statement
    if v := getValue(); v < 10 {
        // use v
    }
    
    // For loop
    for i := 0; i < 10; i++ {
        // loop
    }
    
    // While-style loop
    for x < 100 {
        x++
    }
    
    // Infinite loop
    for {
        // break to exit
    }
    
    // Switch
    switch day {
    case "Monday":
        // code
    case "Tuesday", "Wednesday":
        // multiple cases
    default:
        // default case
    }
}`,
            description: 'Control structures in Go',
            usage: 'Go uses simple, consistent control flow'
          }
        ]
      },
      structs: {
        name: 'Structs & Methods',
        items: [
          {
            title: 'Structs',
            code: `package main

// Define struct
type Person struct {
    Name string
    Age  int
    City string
}

// Create struct
func main() {
    // Method 1
    p1 := Person{
        Name: "John",
        Age:  30,
        City: "NYC",
    }
    
    // Method 2
    p2 := Person{"Jane", 25, "LA"}
    
    // Method 3
    var p3 Person
    p3.Name = "Bob"
    p3.Age = 35
    
    // Anonymous struct
    point := struct {
        X, Y int
    }{10, 20}
}`,
            description: 'Struct definitions and initialization',
            usage: 'Structs are Go\'s way to group data'
          },
          {
            title: 'Methods',
            code: `package main

type Rectangle struct {
    Width  float64
    Height float64
}

// Value receiver
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// Pointer receiver
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    
    area := rect.Area()      // 50
    rect.Scale(2)            // Modifies rect
    newArea := rect.Area()   // 200
}`,
            description: 'Methods on structs',
            usage: 'Use pointer receivers to modify struct'
          }
        ]
      },
      concurrency: {
        name: 'Goroutines & Channels',
        items: [
          {
            title: 'Goroutines',
            code: `package main

import (
    "fmt"
    "time"
)

func say(s string) {
    for i := 0; i < 3; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }
}

func main() {
    // Start goroutine
    go say("world")
    
    // Main goroutine
    say("hello")
    
    // Anonymous goroutine
    go func() {
        fmt.Println("anonymous")
    }()
    
    time.Sleep(time.Second)
}`,
            description: 'Concurrent execution with goroutines',
            usage: 'Use go keyword to run functions concurrently'
          },
          {
            title: 'Channels',
            code: `package main

func main() {
    // Create channel
    ch := make(chan int)
    
    // Buffered channel
    buffered := make(chan string, 2)
    
    // Send to channel (in goroutine)
    go func() {
        ch <- 42
    }()
    
    // Receive from channel
    value := <-ch
    
    // Close channel
    close(ch)
    
    // Range over channel
    for v := range buffered {
        // Process v
    }
    
    // Select statement
    select {
    case msg := <-ch:
        // Received from ch
    case <-time.After(time.Second):
        // Timeout
    }
}`,
            description: 'Communication between goroutines',
            usage: 'Channels are Go\'s way to communicate between goroutines'
          }
        ]
      }
    }
  },
  
  rust: {
    id: 'rust',
    name: 'Rust',
    icon: '🦀',
    color: '#CE422B',
    description: 'Systems programming language focused on safety',
    categories: {
      basics: {
        name: 'Basics & Ownership',
        items: [
          {
            title: 'Variables & Mutability',
            code: `fn main() {
    // Immutable by default
    let x = 5;
    // x = 6; // Error!
    
    // Mutable variable
    let mut y = 5;
    y = 6; // OK
    
    // Constants
    const MAX_POINTS: u32 = 100_000;
    
    // Type annotations
    let guess: u32 = "42".parse().expect("Not a number!");
    
    // Shadowing
    let spaces = "   ";
    let spaces = spaces.len();
}`,
            description: 'Rust variable declarations',
            usage: 'Variables are immutable by default for safety'
          },
          {
            title: 'Data Types',
            code: `fn main() {
    // Scalar types
    let integer: i32 = 42;
    let float: f64 = 3.14;
    let boolean: bool = true;
    let character: char = '😊';
    
    // Compound types - Tuple
    let tuple: (i32, f64, char) = (500, 6.4, 'a');
    let (x, y, z) = tuple; // Destructure
    let first = tuple.0;
    
    // Array (fixed size)
    let array: [i32; 5] = [1, 2, 3, 4, 5];
    let first = array[0];
    
    // String types
    let string_literal: &str = "hello";
    let string_object: String = String::from("hello");
}`,
            description: 'Rust data types',
            usage: 'Rust has strong static typing'
          },
          {
            title: 'Ownership',
            code: `fn main() {
    // Ownership rules:
    // 1. Each value has an owner
    // 2. Only one owner at a time
    // 3. Value dropped when owner out of scope
    
    let s1 = String::from("hello");
    let s2 = s1; // s1 moved to s2
    // println!("{}", s1); // Error! s1 no longer valid
    
    // Clone to copy
    let s3 = s2.clone();
    
    // References (borrowing)
    let s4 = String::from("hello");
    let len = calculate_length(&s4);
    // s4 still valid
    
    // Mutable reference
    let mut s5 = String::from("hello");
    change(&mut s5);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}

fn change(s: &mut String) {
    s.push_str(", world");
}`,
            description: 'Rust ownership system',
            usage: 'Ownership ensures memory safety without garbage collection'
          }
        ]
      },
      structs: {
        name: 'Structs & Enums',
        items: [
          {
            title: 'Structs',
            code: `// Define struct
struct User {
    username: String,
    email: String,
    active: bool,
    sign_in_count: u64,
}

// Tuple struct
struct Color(i32, i32, i32);

impl User {
    // Associated function (constructor)
    fn new(username: String, email: String) -> User {
        User {
            username,
            email,
            active: true,
            sign_in_count: 1,
        }
    }
    
    // Method
    fn deactivate(&mut self) {
        self.active = false;
    }
}

fn main() {
    let mut user = User::new(
        String::from("john"),
        String::from("john@example.com")
    );
    user.deactivate();
}`,
            description: 'Struct definitions and implementations',
            usage: 'Structs group related data'
          },
          {
            title: 'Enums & Pattern Matching',
            code: `// Define enum
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    fn process(&self) {
        match self {
            Message::Quit => println!("Quit"),
            Message::Move { x, y } => {
                println!("Move to ({}, {})", x, y)
            }
            Message::Write(text) => println!("{}", text),
            Message::ChangeColor(r, g, b) => {
                println!("Color: ({}, {}, {})", r, g, b)
            }
        }
    }
}

// Option enum (built-in)
fn divide(a: i32, b: i32) -> Option<i32> {
    if b == 0 {
        None
    } else {
        Some(a / b)
    }
}`,
            description: 'Enums and pattern matching',
            usage: 'Enums represent types with multiple variants'
          }
        ]
      },
      error: {
        name: 'Error Handling',
        items: [
          {
            title: 'Result & Option',
            code: `use std::fs::File;
use std::io::Read;

// Result type
fn read_file(path: &str) -> Result<String, std::io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

// Option type
fn find_user(id: u32) -> Option<String> {
    if id == 1 {
        Some(String::from("John"))
    } else {
        None
    }
}

fn main() {
    // Match on Result
    match read_file("file.txt") {
        Ok(contents) => println!("{}", contents),
        Err(e) => println!("Error: {}", e),
    }
    
    // Using if let
    if let Some(user) = find_user(1) {
        println!("Found: {}", user);
    }
    
    // Unwrap (panics on error)
    let contents = read_file("file.txt").unwrap();
    
    // Unwrap or default
    let user = find_user(2).unwrap_or(String::from("Guest"));
}`,
            description: 'Error handling with Result and Option',
            usage: 'Rust forces explicit error handling'
          }
        ]
      }
    }
  },
  
  swift: {
    id: 'swift',
    name: 'Swift',
    icon: '🦅',
    color: '#FA7343',
    description: 'Powerful language for iOS, macOS development',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Constants',
            code: `// Constants (immutable)
let name = "John"
let pi = 3.14159

// Variables (mutable)
var age = 30
age = 31 // OK

// Type annotations
let explicitString: String = "Hello"
let explicitInt: Int = 42

// Multiple variables
var x = 0, y = 1, z = 2

// Type inference
let inferredDouble = 3.14 // Double
let inferredInt = 42      // Int`,
            description: 'Swift variable and constant declarations',
            usage: 'Prefer let over var for safety'
          },
          {
            title: 'Optionals',
            code: `// Optional type
var optionalName: String? = "John"
optionalName = nil

// Forced unwrapping (use with caution)
let unwrapped = optionalName!

// Optional binding
if let name = optionalName {
    print("Hello, \\(name)")
} else {
    print("No name")
}

// Guard statement
func greet(name: String?) {
    guard let name = name else {
        print("No name provided")
        return
    }
    print("Hello, \\(name)")
}

// Nil coalescing
let displayName = optionalName ?? "Guest"

// Optional chaining
let length = optionalName?.count`,
            description: 'Swift optional handling',
            usage: 'Optionals safely handle absence of values'
          },
          {
            title: 'Functions',
            code: `// Basic function
func greet(person: String) -> String {
    return "Hello, \\(person)!"
}

// Multiple parameters
func add(a: Int, b: Int) -> Int {
    return a + b
}

// Parameter labels
func greet(person name: String, from hometown: String) -> String {
    return "Hello \\(name) from \\(hometown)!"
}

// Default parameters
func multiply(a: Int, b: Int = 1) -> Int {
    return a * b
}

// Variadic parameters
func sum(_ numbers: Int...) -> Int {
    return numbers.reduce(0, +)
}

// In-out parameters
func swap(_ a: inout Int, _ b: inout Int) {
    let temp = a
    a = b
    b = temp
}`,
            description: 'Swift function definitions',
            usage: 'Functions are first-class citizens'
          }
        ]
      },
      classes: {
        name: 'Classes & Structs',
        items: [
          {
            title: 'Structs',
            code: `// Define struct
struct Person {
    var name: String
    var age: Int
    
    // Computed property
    var description: String {
        return "\\(name), \\(age) years old"
    }
    
    // Methods
    mutating func haveBirthday() {
        age += 1
    }
    
    // Static method
    static func species() -> String {
        return "Homo sapiens"
    }
}

// Initialize struct
var person = Person(name: "John", age: 30)
person.haveBirthday()

// Structs are value types (copied)
var copy = person
copy.age = 40
// person.age is still 31`,
            description: 'Swift struct definitions',
            usage: 'Structs are value types, prefer for data models'
          },
          {
            title: 'Classes',
            code: `// Define class
class Person {
    var name: String
    var age: Int
    
    // Initializer
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    // Method
    func greet() {
        print("Hello, I'm \\(name)")
    }
    
    // Class method
    class func species() -> String {
        return "Homo sapiens"
    }
}

// Inheritance
class Student: Person {
    var studentId: String
    
    init(name: String, age: Int, studentId: String) {
        self.studentId = studentId
        super.init(name: name, age: age)
    }
    
    override func greet() {
        print("Hi, I'm student \\(name)")
    }
}

// Classes are reference types (shared)
let person1 = Person(name: "John", age: 30)
let person2 = person1
person2.age = 40
// person1.age is also 40`,
            description: 'Swift class definitions and inheritance',
            usage: 'Classes are reference types, use for shared behavior'
          }
        ]
      },
      collections: {
        name: 'Collections & Closures',
        items: [
          {
            title: 'Arrays & Dictionaries',
            code: `// Arrays
var numbers = [1, 2, 3, 4, 5]
numbers.append(6)
numbers.remove(at: 0)
let first = numbers[0]

// Array methods
let doubled = numbers.map { $0 * 2 }
let evens = numbers.filter { $0 % 2 == 0 }
let sum = numbers.reduce(0, +)

// Dictionaries
var scores = ["John": 95, "Jane": 87]
scores["Bob"] = 92
let johnScore = scores["John"] // Optional

// Iterating
for number in numbers {
    print(number)
}

for (name, score) in scores {
    print("\\(name): \\(score)")
}

// Sets
var uniqueNumbers = Set([1, 2, 3, 2, 1])
// Contains: 1, 2, 3`,
            description: 'Swift collections',
            usage: 'Arrays, dictionaries, and sets for data storage'
          },
          {
            title: 'Closures',
            code: `// Basic closure
let greet = { (name: String) -> String in
    return "Hello, \\(name)!"
}

// Trailing closure syntax
let sorted = numbers.sorted { $0 > $1 }

// Closure with map
let squared = numbers.map { number in
    return number * number
}

// Shorthand
let cubed = numbers.map { $0 * $0 * $0 }

// Capturing values
func makeIncrementer(amount: Int) -> () -> Int {
    var total = 0
    let incrementer: () -> Int = {
        total += amount
        return total
    }
    return incrementer
}

let incrementByTen = makeIncrementer(amount: 10)
incrementByTen() // 10
incrementByTen() // 20

// Escaping closures
func fetchData(completion: @escaping (String) -> Void) {
    // Async operation
    completion("Data")
}`,
            description: 'Swift closures',
            usage: 'Closures are self-contained blocks of functionality'
          }
        ]
      }
    }
  },
  
  kotlin: {
    id: 'kotlin',
    name: 'Kotlin',
    icon: '🅺',
    color: '#7F52FF',
    description: 'Modern language for JVM and Android',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Types',
            code: `fun main() {
    // Read-only variable
    val name = "John"
    
    // Mutable variable
    var age = 30
    age = 31 // OK
    
    // Type annotations
    val explicitString: String = "Hello"
    val explicitInt: Int = 42
    
    // Nullable types
    var nullableName: String? = "John"
    nullableName = null
    
    // Type inference
    val inferredDouble = 3.14
    val inferredInt = 42
    
    // Constants (compile-time)
    const val PI = 3.14159
}`,
            description: 'Kotlin variable declarations',
            usage: 'Prefer val over var for immutability'
          },
          {
            title: 'Null Safety',
            code: `fun main() {
    var name: String? = "John"
    
    // Safe call
    val length = name?.length
    
    // Elvis operator
    val displayName = name ?: "Guest"
    
    // Safe cast
    val string: String? = obj as? String
    
    // Let function
    name?.let {
        println("Hello, $it")
    }
    
    // Not-null assertion (use with caution)
    val nonNull = name!!
    
    // Null check
    if (name != null) {
        println(name.length) // Smart cast
    }
}`,
            description: 'Kotlin null safety features',
            usage: 'Kotlin eliminates null pointer exceptions'
          },
          {
            title: 'Functions',
            code: `// Basic function
fun greet(name: String): String {
    return "Hello, $name!"
}

// Single expression function
fun add(a: Int, b: Int) = a + b

// Default parameters
fun greet(name: String = "User", greeting: String = "Hello") {
    println("$greeting, $name!")
}

// Named arguments
greet(greeting = "Hi", name = "John")

// Extension function
fun String.addExclamation() = this + "!"

// Higher-order function
fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

// Usage
val result = operate(5, 3) { x, y -> x + y }

// Infix function
infix fun Int.times(str: String) = str.repeat(this)
// Usage: 3 times "Hello"`,
            description: 'Kotlin function features',
            usage: 'Functions have powerful default and extension capabilities'
          }
        ]
      },
      classes: {
        name: 'Classes & Objects',
        items: [
          {
            title: 'Classes',
            code: `// Primary constructor
class Person(val name: String, var age: Int) {
    // Init block
    init {
        println("Person created: $name")
    }
    
    // Secondary constructor
    constructor(name: String) : this(name, 0)
    
    // Methods
    fun greet() {
        println("Hello, I'm $name")
    }
}

// Data class
data class User(val name: String, val age: Int)
// Automatically generates equals, hashCode, toString, copy

// Object (singleton)
object DatabaseConfig {
    val url = "jdbc:mysql://localhost"
    fun connect() { }
}

// Companion object (static)
class MyClass {
    companion object {
        const val CONSTANT = "value"
        fun create() = MyClass()
    }
}`,
            description: 'Kotlin class features',
            usage: 'Data classes for simple data holders'
          },
          {
            title: 'Inheritance & Interfaces',
            code: `// Open class (can be inherited)
open class Animal(val name: String) {
    open fun makeSound() {
        println("Some sound")
    }
}

// Inheritance
class Dog(name: String) : Animal(name) {
    override fun makeSound() {
        println("Woof!")
    }
    
    fun fetch() {
        println("$name is fetching")
    }
}

// Interface
interface Drawable {
    fun draw()
    
    // Default implementation
    fun display() {
        println("Displaying...")
    }
}

// Implementing interface
class Circle : Drawable {
    override fun draw() {
        println("Drawing circle")
    }
}

// Multiple interfaces
class Shape : Drawable, Comparable<Shape> {
    override fun draw() { }
    override fun compareTo(other: Shape) = 0
}`,
            description: 'Kotlin inheritance and interfaces',
            usage: 'Classes are final by default, use open to allow inheritance'
          }
        ]
      },
      collections: {
        name: 'Collections & Lambdas',
        items: [
          {
            title: 'Collections',
            code: `fun main() {
    // List (immutable)
    val list = listOf(1, 2, 3, 4, 5)
    
    // Mutable list
    val mutableList = mutableListOf(1, 2, 3)
    mutableList.add(4)
    
    // Map
    val map = mapOf("a" to 1, "b" to 2, "c" to 3)
    val value = map["a"]
    
    // Mutable map
    val mutableMap = mutableMapOf<String, Int>()
    mutableMap["key"] = 42
    
    // Set
    val set = setOf(1, 2, 3, 2, 1) // {1, 2, 3}
    
    // Collection operations
    val doubled = list.map { it * 2 }
    val evens = list.filter { it % 2 == 0 }
    val sum = list.reduce { acc, i -> acc + i }
    val first = list.first { it > 3 }
    
    // For loop
    for (item in list) {
        println(item)
    }
    
    // With index
    for ((index, item) in list.withIndex()) {
        println("$index: $item")
    }
}`,
            description: 'Kotlin collections',
            usage: 'Rich collection operations with lambdas'
          },
          {
            title: 'Lambdas & Scoping',
            code: `fun main() {
    // Lambda expression
    val sum = { a: Int, b: Int -> a + b }
    
    // Lambda with receiver
    val stringBuilder = buildString {
        append("Hello")
        append(" ")
        append("World")
    }
    
    // let (null safety)
    val name: String? = "John"
    name?.let {
        println("Hello, $it")
    }
    
    // apply (configure object)
    val person = Person("John", 30).apply {
        age = 31
    }
    
    // also (side effects)
    val list = mutableListOf(1, 2, 3).also {
        println("List created: $it")
    }
    
    // run (execute block)
    val result = "Hello".run {
        println(this)
        length
    }
    
    // with (non-extension)
    with(person) {
        println(name)
        println(age)
    }
}`,
            description: 'Kotlin lambdas and scope functions',
            usage: 'Scope functions make code more concise'
          }
        ]
      },
      coroutines: {
        name: 'Coroutines',
        items: [
          {
            title: 'Async Programming',
            code: `import kotlinx.coroutines.*

// Suspend function
suspend fun fetchUser(): User {
    delay(1000) // Non-blocking delay
    return User("John", 30)
}

// Launch coroutine
fun main() = runBlocking {
    // Launch (fire and forget)
    launch {
        println("Coroutine")
    }
    
    // Async (with result)
    val deferred = async {
        fetchUser()
    }
    val user = deferred.await()
    
    // Multiple async operations
    val user1 = async { fetchUser() }
    val user2 = async { fetchUser() }
    println(user1.await())
    println(user2.await())
    
    // WithContext (switch context)
    withContext(Dispatchers.IO) {
        // IO operations
    }
    
    // Coroutine scope
    coroutineScope {
        launch { }
        async { }
    }
}`,
            description: 'Kotlin coroutines for async operations',
            usage: 'Coroutines provide lightweight concurrency'
          }
        ]
      }
    }
  },
  
  ruby: {
    id: 'ruby',
    name: 'Ruby',
    icon: '💎',
    color: '#CC342D',
    description: 'Dynamic, object-oriented programming language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Types',
            code: `# Variables (no declaration needed)
name = "John"
age = 30
active = true

# Constants (uppercase)
PI = 3.14159

# Symbols (immutable strings)
status = :active

# String interpolation
message = "Hello, #{name}!"

# Multiple assignment
x, y, z = 1, 2, 3

# Global variable
$global = "accessible everywhere"

# Instance variable
@instance = "belongs to object"

# Class variable
@@class = "shared by all instances"`,
            description: 'Ruby variable types',
            usage: 'Ruby has dynamic typing with duck typing'
          },
          {
            title: 'Methods',
            code: `# Basic method
def greet(name)
  "Hello, #{name}!"
end

# Default parameters
def greet(name = "User")
  "Hello, #{name}!"
end

# Keyword arguments
def create_user(name:, age:, city: "Unknown")
  { name: name, age: age, city: city }
end

# Splat operator
def sum(*numbers)
  numbers.sum
end

# Blocks
def with_block
  yield if block_given?
end

with_block { puts "In block" }

# Method with question mark (predicate)
def active?
  @status == :active
end

# Method with exclamation (mutating)
def activate!
  @status = :active
end`,
            description: 'Ruby method definitions',
            usage: 'Methods return last expression automatically'
          },
          {
            title: 'Control Flow',
            code: `# If/elsif/else
if age > 18
  puts "Adult"
elsif age > 13
  puts "Teen"
else
  puts "Child"
end

# Unless (opposite of if)
unless logged_in
  redirect_to_login
end

# Modifier form
puts "Welcome" if logged_in
puts "Please login" unless logged_in

# Case/when
case status
when :active
  "User is active"
when :inactive
  "User is inactive"
else
  "Unknown status"
end

# Ternary operator
message = age >= 18 ? "Adult" : "Minor"

# Loop
5.times { |i| puts i }

# Each
[1, 2, 3].each { |n| puts n }

# While
while x < 10
  x += 1
end

# Until (opposite of while)
until x == 10
  x += 1
end`,
            description: 'Ruby control structures',
            usage: 'Ruby has flexible control flow options'
          }
        ]
      },
      classes: {
        name: 'Classes & Modules',
        items: [
          {
            title: 'Classes',
            code: `class Person
  # Class variable
  @@count = 0
  
  # Attribute readers/writers
  attr_reader :name
  attr_writer :age
  attr_accessor :email  # Both reader and writer
  
  # Initialize (constructor)
  def initialize(name, age)
    @name = name
    @age = age
    @@count += 1
  end
  
  # Instance method
  def greet
    "Hello, I'm #{@name}"
  end
  
  # Class method
  def self.count
    @@count
  end
  
  # Private methods
  private
  
  def secret_method
    "Secret"
  end
end

# Create instance
person = Person.new("John", 30)

# Inheritance
class Student < Person
  def initialize(name, age, student_id)
    super(name, age)
    @student_id = student_id
  end
end`,
            description: 'Ruby class definitions',
            usage: 'Ruby is fully object-oriented'
          },
          {
            title: 'Modules & Mixins',
            code: `# Module as namespace
module MathHelper
  PI = 3.14159
  
  def self.circle_area(radius)
    PI * radius ** 2
  end
end

# Module as mixin
module Greetable
  def greet
    "Hello from #{self.class.name}"
  end
end

class Person
  include Greetable  # Instance methods
end

class User
  extend Greetable   # Class methods
end

person = Person.new
person.greet  # Instance method

User.greet    # Class method

# Module with multiple methods
module Comparable
  def ==(other)
    # comparison logic
  end
  
  def <(other)
    # comparison logic
  end
end`,
            description: 'Modules for namespacing and mixins',
            usage: 'Use modules to share functionality'
          }
        ]
      },
      collections: {
        name: 'Arrays & Hashes',
        items: [
          {
            title: 'Arrays',
            code: `# Create array
numbers = [1, 2, 3, 4, 5]
mixed = [1, "two", 3.0, :four]

# Access elements
first = numbers[0]
last = numbers[-1]
slice = numbers[1..3]  # [2, 3, 4]

# Array methods
numbers << 6           # Append
numbers.push(7)        # Append
numbers.pop            # Remove last
numbers.unshift(0)     # Prepend
numbers.shift          # Remove first

# Iteration
numbers.each { |n| puts n }
doubled = numbers.map { |n| n * 2 }
evens = numbers.select { |n| n.even? }
sum = numbers.reduce(0) { |acc, n| acc + n }
sum = numbers.sum  # Shorthand

# Checking
numbers.include?(3)    # true
numbers.empty?         # false
numbers.length         # 5

# Ranges
range = 1..5           # Inclusive
range = 1...5          # Exclusive
array = (1..5).to_a    # [1, 2, 3, 4, 5]`,
            description: 'Ruby array operations',
            usage: 'Arrays are flexible and powerful'
          },
          {
            title: 'Hashes',
            code: `# Create hash
person = {
  name: "John",
  age: 30,
  city: "NYC"
}

# Old syntax
person = {
  :name => "John",
  :age => 30
}

# Access
name = person[:name]

# Modify
person[:age] = 31
person[:email] = "john@example.com"

# Hash methods
person.keys           # [:name, :age, :city]
person.values         # ["John", 30, "NYC"]
person.has_key?(:name)  # true
person.delete(:city)

# Iteration
person.each { |key, value| puts "#{key}: #{value}" }
person.each_key { |key| puts key }
person.each_value { |value| puts value }

# Transform
uppercased = person.transform_keys { |k| k.to_s.upcase }
doubled_ages = person.transform_values { |v| v.is_a?(Integer) ? v * 2 : v }`,
            description: 'Ruby hash (dictionary) operations',
            usage: 'Hashes store key-value pairs'
          }
        ]
      },
      blocks: {
        name: 'Blocks & Procs',
        items: [
          {
            title: 'Blocks & Yield',
            code: `# Method with block
def with_timing
  start_time = Time.now
  yield
  end_time = Time.now
  puts "Execution time: #{end_time - start_time}"
end

with_timing do
  sleep(1)
  puts "Task completed"
end

# Block parameters
def repeat(times)
  times.times { |i| yield(i) }
end

repeat(3) { |i| puts "Iteration #{i}" }

# Block as parameter
def process(array, &block)
  array.map(&block)
end

doubled = process([1, 2, 3]) { |n| n * 2 }`,
            description: 'Ruby blocks and yield',
            usage: 'Blocks are fundamental to Ruby'
          },
          {
            title: 'Procs & Lambdas',
            code: `# Proc
my_proc = Proc.new { |x| x * 2 }
my_proc.call(5)  # 10

# Lambda
my_lambda = lambda { |x| x * 2 }
my_lambda = ->(x) { x * 2 }  # Shorthand
my_lambda.call(5)  # 10

# Differences:
# 1. Lambdas check argument count, procs don't
# 2. Return in lambda returns from lambda,
#    return in proc returns from enclosing method

# Symbol to proc
numbers = [1, 2, 3]
doubled = numbers.map(&:to_s)  # ["1", "2", "3"]

# Method as proc
def double(x)
  x * 2
end

doubler = method(:double).to_proc
[1, 2, 3].map(&doubler)  # [2, 4, 6]`,
            description: 'Procs and lambdas',
            usage: 'Procs and lambdas are objects that encapsulate code'
          }
        ]
      }
    }
  },
  
  php: {
    id: 'php',
    name: 'PHP',
    icon: '🐘',
    color: '#777BB4',
    description: 'Server-side scripting language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Types',
            code: `<?php
// Variables start with $
$name = "John";
$age = 30;
$height = 1.75;
$active = true;

// Variable variables
$var = "name";
$$var = "John";  // $name = "John"

// Constants
define("PI", 3.14159);
const MAX = 100;

// Type declarations (PHP 7+)
function greet(string $name): string {
    return "Hello, $name!";
}

// Type juggling
$num = "42";
$result = $num + 8;  // 50 (automatic conversion)

// Null coalescing
$username = $_GET['user'] ?? 'Guest';

// Spaceship operator (PHP 7+)
$compare = $a <=> $b;  // -1, 0, or 1
?>`,
            description: 'PHP variable declarations',
            usage: 'PHP has dynamic typing with type hints'
          },
          {
            title: 'Functions',
            code: `<?php
// Basic function
function greet($name) {
    return "Hello, $name!";
}

// Default parameters
function greet($name = "User") {
    return "Hello, $name!";
}

// Type declarations
function add(int $a, int $b): int {
    return $a + $b;
}

// Variable arguments
function sum(...$numbers) {
    return array_sum($numbers);
}

// Anonymous function
$greet = function($name) {
    return "Hello, $name!";
};

// Arrow function (PHP 7.4+)
$double = fn($x) => $x * 2;

// Closure with use
$multiplier = 2;
$multiply = function($x) use ($multiplier) {
    return $x * $multiplier;
};
?>`,
            description: 'PHP function definitions',
            usage: 'Functions are first-class citizens in PHP'
          },
          {
            title: 'Control Flow',
            code: `<?php
// If/elseif/else
if ($age > 18) {
    echo "Adult";
} elseif ($age > 13) {
    echo "Teen";
} else {
    echo "Child";
}

// Ternary operator
$message = $age >= 18 ? "Adult" : "Minor";

// Switch
switch ($status) {
    case "active":
        echo "Active";
        break;
    case "inactive":
        echo "Inactive";
        break;
    default:
        echo "Unknown";
}

// For loop
for ($i = 0; $i < 10; $i++) {
    echo $i;
}

// Foreach
foreach ($array as $value) {
    echo $value;
}

foreach ($array as $key => $value) {
    echo "$key: $value";
}

// While
while ($x < 10) {
    $x++;
}

// Do-while
do {
    $x++;
} while ($x < 10);
?>`,
            description: 'PHP control structures',
            usage: 'PHP has C-style control flow'
          }
        ]
      },
      arrays: {
        name: 'Arrays & Strings',
        items: [
          {
            title: 'Arrays',
            code: `<?php
// Indexed array
$fruits = ["apple", "banana", "orange"];
$fruits = array("apple", "banana", "orange");

// Associative array
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "NYC"
];

// Multidimensional array
$matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Array functions
array_push($fruits, "grape");
array_pop($fruits);
array_shift($fruits);
array_unshift($fruits, "mango");

// Array iteration
foreach ($fruits as $fruit) {
    echo $fruit;
}

// Array manipulation
$doubled = array_map(fn($x) => $x * 2, $numbers);
$evens = array_filter($numbers, fn($x) => $x % 2 == 0);
$sum = array_reduce($numbers, fn($acc, $x) => $acc + $x, 0);

// Checking
in_array("apple", $fruits);
array_key_exists("name", $person);
count($fruits);
?>`,
            description: 'PHP array operations',
            usage: 'PHP arrays are versatile and powerful'
          },
          {
            title: 'String Operations',
            code: `<?php
// String creation
$name = "John";
$greeting = 'Hello';

// String interpolation (double quotes only)
$message = "Hello, $name!";
$message = "Hello, {$person['name']}!";

// Concatenation
$full = $first . " " . $last;

// String functions
strlen($str);              // Length
strtoupper($str);         // Uppercase
strtolower($str);         // Lowercase
ucfirst($str);            // Capitalize first
trim($str);               // Remove whitespace
str_replace("old", "new", $str);

// Substring
substr($str, 0, 5);       // First 5 chars
substr($str, -3);         // Last 3 chars

// String splitting
$parts = explode(" ", $str);
$joined = implode(", ", $array);

// String checking
str_starts_with($str, "Hello");  // PHP 8+
str_ends_with($str, "world");    // PHP 8+
str_contains($str, "middle");    // PHP 8+
?>`,
            description: 'PHP string manipulation',
            usage: 'PHP has rich string handling functions'
          }
        ]
      },
      oop: {
        name: 'Object-Oriented PHP',
        items: [
          {
            title: 'Classes',
            code: `<?php
class Person {
    // Properties
    private string $name;
    protected int $age;
    public string $email;
    
    // Constructor
    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }
    
    // Methods
    public function greet(): string {
        return "Hello, I'm {$this->name}";
    }
    
    // Getter
    public function getName(): string {
        return $this->name;
    }
    
    // Setter
    public function setName(string $name): void {
        $this->name = $name;
    }
    
    // Static method
    public static function species(): string {
        return "Homo sapiens";
    }
}

// Inheritance
class Student extends Person {
    private string $studentId;
    
    public function __construct(string $name, int $age, string $studentId) {
        parent::__construct($name, $age);
        $this->studentId = $studentId;
    }
}
?>`,
            description: 'PHP class definitions',
            usage: 'PHP supports full object-oriented programming'
          },
          {
            title: 'Interfaces & Traits',
            code: `<?php
// Interface
interface Drawable {
    public function draw(): void;
}

class Circle implements Drawable {
    public function draw(): void {
        echo "Drawing circle";
    }
}

// Trait (code reuse)
trait Timestampable {
    protected $createdAt;
    protected $updatedAt;
    
    public function setTimestamps(): void {
        $this->createdAt = time();
        $this->updatedAt = time();
    }
}

class Post {
    use Timestampable;
    
    private string $title;
    private string $content;
}

// Abstract class
abstract class Animal {
    abstract public function makeSound(): void;
    
    public function sleep(): void {
        echo "Sleeping...";
    }
}

class Dog extends Animal {
    public function makeSound(): void {
        echo "Woof!";
    }
}
?>`,
            description: 'PHP interfaces and traits',
            usage: 'Use traits for horizontal code reuse'
          }
        ]
      }
    }
  },
  
  sql: {
    id: 'sql',
    name: 'SQL',
    icon: '🗄️',
    color: '#00758F',
    description: 'Standard language for managing databases',
    categories: {
      basics: {
        name: 'Basic Queries',
        items: [
          {
            title: 'SELECT Statements',
            code: `-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Select with alias
SELECT name AS user_name, email AS user_email
FROM users;

-- Select distinct values
SELECT DISTINCT city FROM users;

-- Select with limit
SELECT * FROM users LIMIT 10;

-- Select with offset
SELECT * FROM users LIMIT 10 OFFSET 20;

-- Calculated columns
SELECT 
    name,
    age,
    age * 365 AS age_in_days
FROM users;`,
            description: 'Basic SELECT queries',
            usage: 'SELECT retrieves data from database tables'
          },
          {
            title: 'WHERE Clause',
            code: `-- Simple condition
SELECT * FROM users WHERE age > 18;

-- Multiple conditions (AND)
SELECT * FROM users 
WHERE age > 18 AND city = 'NYC';

-- Multiple conditions (OR)
SELECT * FROM users 
WHERE city = 'NYC' OR city = 'LA';

-- IN operator
SELECT * FROM users 
WHERE city IN ('NYC', 'LA', 'Chicago');

-- BETWEEN operator
SELECT * FROM users 
WHERE age BETWEEN 18 AND 65;

-- LIKE operator (pattern matching)
SELECT * FROM users WHERE name LIKE 'John%';
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- IS NULL / IS NOT NULL
SELECT * FROM users WHERE phone IS NULL;
SELECT * FROM users WHERE phone IS NOT NULL;

-- NOT operator
SELECT * FROM users WHERE NOT city = 'NYC';`,
            description: 'Filtering results with WHERE',
            usage: 'WHERE clause filters rows based on conditions'
          },
          {
            title: 'ORDER BY & GROUP BY',
            code: `-- ORDER BY (ascending)
SELECT * FROM users ORDER BY age;

-- ORDER BY (descending)
SELECT * FROM users ORDER BY age DESC;

-- Multiple columns
SELECT * FROM users 
ORDER BY city, age DESC;

-- GROUP BY
SELECT city, COUNT(*) as user_count
FROM users
GROUP BY city;

-- GROUP BY with HAVING
SELECT city, COUNT(*) as user_count
FROM users
GROUP BY city
HAVING COUNT(*) > 10;

-- Aggregate functions
SELECT 
    COUNT(*) as total_users,
    AVG(age) as average_age,
    MIN(age) as youngest,
    MAX(age) as oldest,
    SUM(salary) as total_salary
FROM users;`,
            description: 'Sorting and grouping results',
            usage: 'ORDER BY sorts results, GROUP BY aggregates data'
          }
        ]
      },
      joins: {
        name: 'JOINS',
        items: [
          {
            title: 'JOIN Types',
            code: `-- INNER JOIN (matching rows from both tables)
SELECT users.name, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN (all from left, matching from right)
SELECT users.name, orders.order_date
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- RIGHT JOIN (all from right, matching from left)
SELECT users.name, orders.order_date
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;

-- FULL OUTER JOIN (all rows from both)
SELECT users.name, orders.order_date
FROM users
FULL OUTER JOIN orders ON users.id = orders.user_id;

-- Multiple joins
SELECT 
    users.name,
    orders.order_date,
    products.product_name
FROM users
INNER JOIN orders ON users.id = orders.user_id
INNER JOIN order_items ON orders.id = order_items.order_id
INNER JOIN products ON order_items.product_id = products.id;`,
            description: 'Different types of table joins',
            usage: 'JOINs combine rows from multiple tables'
          }
        ]
      },
      dml: {
        name: 'Data Manipulation',
        items: [
          {
            title: 'INSERT, UPDATE, DELETE',
            code: `-- INSERT single row
INSERT INTO users (name, email, age)
VALUES ('John Doe', 'john@example.com', 30);

-- INSERT multiple rows
INSERT INTO users (name, email, age)
VALUES 
    ('John', 'john@example.com', 30),
    ('Jane', 'jane@example.com', 25),
    ('Bob', 'bob@example.com', 35);

-- INSERT from SELECT
INSERT INTO archived_users
SELECT * FROM users WHERE last_login < '2020-01-01';

-- UPDATE
UPDATE users 
SET age = 31, city = 'NYC'
WHERE id = 1;

-- UPDATE with calculation
UPDATE products
SET price = price * 1.1
WHERE category = 'Electronics';

-- DELETE
DELETE FROM users WHERE id = 1;

-- DELETE with condition
DELETE FROM users 
WHERE last_login < '2020-01-01';

-- TRUNCATE (delete all rows, faster)
TRUNCATE TABLE temp_data;`,
            description: 'Inserting, updating, and deleting data',
            usage: 'DML commands modify data in tables'
          }
        ]
      },
      ddl: {
        name: 'Data Definition',
        items: [
          {
            title: 'CREATE & ALTER',
            code: `-- CREATE TABLE
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE with foreign key
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    order_date DATE,
    total DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- ALTER TABLE (add column)
ALTER TABLE users 
ADD COLUMN phone VARCHAR(20);

-- ALTER TABLE (modify column)
ALTER TABLE users 
MODIFY COLUMN age INT NOT NULL;

-- ALTER TABLE (drop column)
ALTER TABLE users 
DROP COLUMN phone;

-- CREATE INDEX
CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_name_age ON users(name, age);

-- DROP TABLE
DROP TABLE IF EXISTS temp_table;`,
            description: 'Creating and modifying table structure',
            usage: 'DDL commands define database schema'
          }
        ]
      },
      advanced: {
        name: 'Advanced Queries',
        items: [
          {
            title: 'Subqueries & CTEs',
            code: `-- Subquery in WHERE
SELECT name FROM users
WHERE age > (SELECT AVG(age) FROM users);

-- Subquery in SELECT
SELECT 
    name,
    (SELECT COUNT(*) FROM orders WHERE user_id = users.id) as order_count
FROM users;

-- Subquery in FROM
SELECT avg_age_by_city.city, avg_age_by_city.avg_age
FROM (
    SELECT city, AVG(age) as avg_age
    FROM users
    GROUP BY city
) as avg_age_by_city
WHERE avg_age_by_city.avg_age > 30;

-- CTE (Common Table Expression)
WITH high_spenders AS (
    SELECT user_id, SUM(total) as total_spent
    FROM orders
    GROUP BY user_id
    HAVING SUM(total) > 1000
)
SELECT users.name, high_spenders.total_spent
FROM users
INNER JOIN high_spenders ON users.id = high_spenders.user_id;

-- Recursive CTE
WITH RECURSIVE numbers AS (
    SELECT 1 as n
    UNION ALL
    SELECT n + 1 FROM numbers WHERE n < 10
)
SELECT * FROM numbers;`,
            description: 'Subqueries and Common Table Expressions',
            usage: 'Break complex queries into manageable parts'
          },
          {
            title: 'Window Functions',
            code: `-- ROW_NUMBER
SELECT 
    name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as rank
FROM employees;

-- RANK and DENSE_RANK
SELECT 
    name,
    department,
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank
FROM employees;

-- Running total
SELECT 
    order_date,
    total,
    SUM(total) OVER (ORDER BY order_date) as running_total
FROM orders;

-- Moving average
SELECT 
    date,
    value,
    AVG(value) OVER (
        ORDER BY date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) as moving_avg_3
FROM metrics;

-- LAG and LEAD
SELECT 
    date,
    value,
    LAG(value, 1) OVER (ORDER BY date) as previous_value,
    LEAD(value, 1) OVER (ORDER BY date) as next_value
FROM metrics;`,
            description: 'Window functions for advanced analytics',
            usage: 'Perform calculations across row sets'
          }
        ]
      }
    }
  },

  dart: {
    id: 'dart',
    name: 'Dart',
    icon: '🎯',
    color: '#0175C2',
    description: 'Client-optimized language for mobile, desktop, server, and web',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Types',
            code: `// Type inference
var name = 'Bob';
String explicitType = 'Alice';

// Final and const
final city = 'New York'; // Runtime constant
const pi = 3.14159;      // Compile-time constant

// Nullable types
String? nullableName;
int nonNullable = 42;

// Late variables
late String description;

// Type checking
if (name is String) {
  print(name.toUpperCase());
}`,
            description: 'Dart variable declarations and type system',
            usage: 'Dart has strong type safety with null safety'
          },
          {
            title: 'Functions',
            code: `// Regular function
String greet(String name) {
  return 'Hello, \$name!';
}

// Arrow function
String greetShort(String name) => 'Hello, \$name!';

// Optional parameters
void printInfo(String name, [int? age]) {
  print('Name: \$name, Age: \${age ?? 'unknown'}');
}

// Named parameters
void createUser({required String name, int age = 0}) {
  print('User: \$name, \$age');
}

// Async function
Future<String> fetchData() async {
  await Future.delayed(Duration(seconds: 1));
  return 'Data loaded';
}`,
            description: 'Function declarations in Dart',
            usage: 'Used extensively in Flutter development'
          }
        ]
      },
      flutter: {
        name: 'Flutter Widgets',
        items: [
          {
            title: 'StatelessWidget',
            code: `import 'package:flutter/material.dart';

class MyWidget extends StatelessWidget {
  final String title;
  
  const MyWidget({Key? key, required this.title}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16),
      child: Text(
        title,
        style: TextStyle(fontSize: 24),
      ),
    );
  }
}`,
            description: 'Basic Flutter stateless widget',
            usage: 'Use for widgets that don\'t need to change state'
          },
          {
            title: 'StatefulWidget',
            code: `class Counter extends StatefulWidget {
  @override
  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;
  
  void _increment() {
    setState(() {
      _count++;
    });
  }
  
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('\$_count'),
        ElevatedButton(
          onPressed: _increment,
          child: Text('Increment'),
        ),
      ],
    );
  }
}`,
            description: 'Stateful widget with state management',
            usage: 'Use when widget needs to maintain state'
          }
        ]
      }
    }
  },

  scala: {
    id: 'scala',
    name: 'Scala',
    icon: '🔺',
    color: '#DC322F',
    description: 'Functional and object-oriented language for the JVM',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Values',
            code: `// Immutable (preferred)
val name = "John"
val age: Int = 30

// Mutable
var count = 0
count += 1

// Type inference
val result = 1 + 2  // Int inferred

// Lazy evaluation
lazy val expensive = {
  println("Computing...")
  42
}`,
            description: 'Scala variable declarations',
            usage: 'Prefer val over var for immutability'
          },
          {
            title: 'Functions',
            code: `// Function definition
def add(a: Int, b: Int): Int = {
  a + b
}

// Single expression
def multiply(a: Int, b: Int): Int = a * b

// Higher-order function
def applyTwice(f: Int => Int, x: Int): Int = {
  f(f(x))
}

// Anonymous function
val square = (x: Int) => x * x

// Currying
def curriedAdd(a: Int)(b: Int): Int = a + b
val addFive = curriedAdd(5)_
println(addFive(3))  // 8`,
            description: 'Scala function definitions',
            usage: 'Scala supports functional programming paradigms'
          }
        ]
      },
      collections: {
        name: 'Collections',
        items: [
          {
            title: 'List Operations',
            code: `// Immutable List
val numbers = List(1, 2, 3, 4, 5)

// Map
val doubled = numbers.map(_ * 2)

// Filter
val evens = numbers.filter(_ % 2 == 0)

// Fold/Reduce
val sum = numbers.reduce(_ + _)
val product = numbers.foldLeft(1)(_ * _)

// FlatMap
val nested = List(List(1, 2), List(3, 4))
val flattened = nested.flatten

// For comprehension
val result = for {
  x <- numbers
  if x % 2 == 0
} yield x * 2`,
            description: 'Functional operations on collections',
            usage: 'Scala collections are powerful and expressive'
          }
        ]
      }
    }
  },

  perl: {
    id: 'perl',
    name: 'Perl',
    icon: '🐪',
    color: '#39457E',
    description: 'Highly capable text processing and system administration language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables',
            code: `# Scalars (single values)
my $name = "John";
my $age = 30;
my $price = 19.99;

# Arrays
my @fruits = ("apple", "banana", "orange");
push @fruits, "grape";
my $first = $fruits[0];

# Hashes (associative arrays)
my %person = (
    name => "John",
    age => 30,
    city => "NYC"
);
print $person{name};`,
            description: 'Perl variable types',
            usage: 'Sigils ($, @, %) indicate variable types'
          },
          {
            title: 'Regular Expressions',
            code: `# Pattern matching
my $text = "Hello World";
if ($text =~ /World/) {
    print "Found!\\n";
}

# Substitution
$text =~ s/World/Perl/;

# Capture groups
if ($text =~ /(\\w+)\\s+(\\w+)/) {
    print "First: $1, Second: $2\\n";
}

# Global match
my @words = $text =~ /(\\w+)/g;

# Character classes
my $email = 'user@example.com';
if ($email =~ /[\\w\\.-]+@[\\w\\.-]+\\.\\w+/) {
    print "Valid email\\n";
}`,
            description: 'Perl\'s powerful regex support',
            usage: 'Perl excels at text processing with regex'
          }
        ]
      }
    }
  },

  lua: {
    id: 'lua',
    name: 'Lua',
    icon: '🌙',
    color: '#000080',
    description: 'Lightweight, embeddable scripting language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Types',
            code: `-- Variables (global by default)
name = "John"
age = 30

-- Local variables (preferred)
local city = "NYC"
local price = 19.99

-- Tables (Lua's only data structure)
local person = {
    name = "John",
    age = 30,
    hobbies = {"coding", "gaming"}
}

-- Array-style table (1-indexed!)
local fruits = {"apple", "banana", "orange"}
print(fruits[1])  -- "apple"

-- Nil (undefined)
local nothing = nil`,
            description: 'Lua basic syntax and types',
            usage: 'Tables are Lua\'s universal data structure'
          },
          {
            title: 'Functions',
            code: `-- Function definition
function greet(name)
    return "Hello, " .. name
end

-- Local function
local function add(a, b)
    return a + b
end

-- Multiple return values
function divide(a, b)
    if b == 0 then
        return nil, "Division by zero"
    end
    return a / b, nil
end

local result, err = divide(10, 2)

-- Anonymous function
local square = function(x)
    return x * x
end

-- Closures
function counter()
    local count = 0
    return function()
        count = count + 1
        return count
    end
end

local c = counter()
print(c())  -- 1
print(c())  -- 2`,
            description: 'Lua function syntax',
            usage: 'Functions are first-class citizens in Lua'
          }
        ]
      }
    }
  },

  r: {
    id: 'r',
    name: 'R',
    icon: '📊',
    color: '#276DC3',
    description: 'Language for statistical computing and graphics',
    categories: {
      basics: {
        name: 'Basics & Data',
        items: [
          {
            title: 'Vectors & Data Types',
            code: `# Numeric vector
numbers <- c(1, 2, 3, 4, 5)

# Character vector
names <- c("John", "Jane", "Bob")

# Logical vector
flags <- c(TRUE, FALSE, TRUE)

# Factor (categorical data)
categories <- factor(c("A", "B", "A", "C"))

# Sequences
seq1 <- 1:10
seq2 <- seq(0, 1, by=0.1)

# Vector operations
doubled <- numbers * 2
sum_val <- sum(numbers)
mean_val <- mean(numbers)`,
            description: 'R vector operations',
            usage: 'Vectors are fundamental in R'
          },
          {
            title: 'Data Frames',
            code: `# Create data frame
df <- data.frame(
  name = c("John", "Jane", "Bob"),
  age = c(30, 25, 35),
  salary = c(50000, 60000, 55000)
)

# Access columns
df$name
df[["age"]]

# Filter rows
subset(df, age > 28)
df[df$age > 28, ]

# Add column
df$bonus <- df$salary * 0.1

# Summary statistics
summary(df)
str(df)`,
            description: 'Working with data frames',
            usage: 'Data frames are R\'s primary data structure'
          }
        ]
      },
      visualization: {
        name: 'Data Visualization',
        items: [
          {
            title: 'ggplot2',
            code: `library(ggplot2)

# Basic scatter plot
ggplot(df, aes(x=age, y=salary)) +
  geom_point() +
  labs(title="Age vs Salary")

# Bar plot
ggplot(df, aes(x=name, y=salary, fill=name)) +
  geom_bar(stat="identity") +
  theme_minimal()

# Line plot with groups
ggplot(data, aes(x=date, y=value, color=category)) +
  geom_line() +
  facet_wrap(~category)

# Histogram
ggplot(df, aes(x=salary)) +
  geom_histogram(bins=10, fill="steelblue")`,
            description: 'Creating visualizations with ggplot2',
            usage: 'ggplot2 is the standard for R graphics'
          }
        ]
      }
    }
  },

  elixir: {
    id: 'elixir',
    name: 'Elixir',
    icon: '💧',
    color: '#4B275F',
    description: 'Functional language for building scalable applications',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Pattern Matching',
            code: `# Basic pattern matching
{:ok, result} = {:ok, 42}

# List pattern matching
[head | tail] = [1, 2, 3, 4]
# head = 1, tail = [2, 3, 4]

# Map pattern matching
%{name: name, age: age} = %{name: "John", age: 30}

# Function pattern matching
def greet({:ok, name}), do: "Hello, #{name}!"
def greet({:error, _}), do: "Error occurred"

# Guard clauses
def check(x) when x > 0, do: "positive"
def check(x) when x < 0, do: "negative"
def check(0), do: "zero"`,
            description: 'Elixir\'s powerful pattern matching',
            usage: 'Pattern matching is core to Elixir'
          },
          {
            title: 'Pipe Operator',
            code: `# Without pipe
result = String.upcase(String.trim("  hello  "))

# With pipe operator
result = "  hello  "
  |> String.trim()
  |> String.upcase()

# Chain multiple operations
users
  |> Enum.filter(&(&1.age > 18))
  |> Enum.map(&(&1.name))
  |> Enum.sort()

# With functions
def process_data(data) do
  data
  |> validate()
  |> transform()
  |> save()
end`,
            description: 'Pipe operator for chaining functions',
            usage: 'Makes code more readable and functional'
          }
        ]
      }
    }
  },

  haskell: {
    id: 'haskell',
    name: 'Haskell',
    icon: '𝝺',
    color: '#5D4F85',
    description: 'Pure functional programming language',
    categories: {
      basics: {
        name: 'Basics & Functions',
        items: [
          {
            title: 'Functions & Types',
            code: `-- Type signatures
add :: Int -> Int -> Int
add x y = x + y

-- Type inference
double x = x * 2

-- Pattern matching
factorial :: Int -> Int
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- Guards
absoluteValue :: Int -> Int
absoluteValue n
  | n < 0     = -n
  | otherwise = n

-- Higher-order functions
applyTwice :: (a -> a) -> a -> a
applyTwice f x = f (f x)

-- Lambda
square = \\x -> x * x`,
            description: 'Haskell function definitions',
            usage: 'Strong static typing with type inference'
          },
          {
            title: 'List Comprehensions',
            code: `-- Basic list comprehension
squares = [x^2 | x <- [1..10]]

-- With predicate
evens = [x | x <- [1..20], even x]

-- Multiple generators
pairs = [(x, y) | x <- [1..3], y <- [1..3]]

-- List functions
take 5 [1..]
filter (> 5) [1..10]
map (*2) [1..5]
foldr (+) 0 [1..10]

-- Infinite lists
naturals = [1..]
fibonacci = 0 : 1 : zipWith (+) fibonacci (tail fibonacci)`,
            description: 'Working with lists in Haskell',
            usage: 'Lists are fundamental in Haskell'
          }
        ]
      }
    }
  },
  scala: {
    id: 'scala',
    name: 'Scala',
    icon: '🔴',
    color: '#DC322F',
    description: 'Multi-paradigm language combining OOP and FP',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Values',
            code: `// Immutable value (preferred)
val name: String = "Alice"
val age = 30  // Type inference

// Mutable variable
var count = 0
count += 1

// Lazy values
lazy val expensive = {
  println("Computing...")
  42
}`,
            description: 'Scala variable declarations',
            usage: 'Prefer val over var for immutability',
            bestPractices: [
              'Use val by default, var only when necessary',
              'Let type inference work for you',
              'Use lazy val for expensive computations'
            ]
          },
          {
            title: 'Functions',
            code: `// Basic function
def add(x: Int, y: Int): Int = x + y

// Function with default parameters
def greet(name: String, greeting: String = "Hello") =
  s"$greeting, $name!"

// Higher-order function
def applyTwice(f: Int => Int, x: Int): Int =
  f(f(x))

// Anonymous function
val double = (x: Int) => x * 2

// Currying
def multiply(x: Int)(y: Int): Int = x * y
val multiplyBy2 = multiply(2) _`,
            description: 'Function definitions in Scala',
            usage: 'Scala supports functional programming paradigm'
          }
        ]
      },
      collections: {
        name: 'Collections',
        items: [
          {
            title: 'Lists & Arrays',
            code: `// Immutable List
val numbers = List(1, 2, 3, 4, 5)
val doubled = numbers.map(_ * 2)
val evens = numbers.filter(_ % 2 == 0)
val sum = numbers.reduce(_ + _)

// Mutable Array
val arr = Array(1, 2, 3)
arr(0) = 10

// Vector (efficient immutable)
val vec = Vector(1, 2, 3, 4, 5)

// For comprehension
val squares = for (n <- numbers) yield n * n`,
            description: 'Working with collections',
            usage: 'Rich collection library with functional operations'
          },
          {
            title: 'Pattern Matching',
            code: `// Basic pattern matching
def describe(x: Any): String = x match {
  case 0 => "zero"
  case i: Int if i > 0 => "positive integer"
  case s: String => s"string: $s"
  case list: List[_] => s"list of length \${list.length}"
  case _ => "something else"
}

// Case classes
case class Person(name: String, age: Int)

val alice = Person("Alice", 30)
alice match {
  case Person(name, age) if age >= 18 =>
    s"$name is an adult"
  case Person(name, _) =>
    s"$name is a minor"
}`,
            description: 'Pattern matching and case classes',
            usage: 'Powerful way to destructure and match data'
          }
        ]
      },
      oop: {
        name: 'Object-Oriented',
        items: [
          {
            title: 'Classes & Objects',
            code: `// Class with primary constructor
class Person(val name: String, var age: Int) {
  def greet(): String = s"Hi, I'm $name"
  
  def haveBirthday(): Unit = {
    age += 1
  }
}

// Case class (immutable)
case class Point(x: Double, y: Double)

// Object (singleton)
object MathUtils {
  def square(x: Int): Int = x * x
}

// Companion object
class Circle(val radius: Double)
object Circle {
  def apply(radius: Double) = new Circle(radius)
}`,
            description: 'OOP in Scala',
            usage: 'Combines OOP with functional programming'
          },
          {
            title: 'Traits & Mixins',
            code: `// Trait (like interface but with implementation)
trait Greeter {
  def greet(name: String): String = s"Hello, $name!"
}

trait Timestamped {
  val timestamp: Long = System.currentTimeMillis()
}

// Class with multiple traits
class User(val name: String) extends Greeter with Timestamped {
  override def greet(name: String) = s"Hi $name, I'm \${this.name}!"
}`,
            description: 'Traits and mixins',
            usage: 'Flexible composition mechanism'
          }
        ]
      }
    }
  },
  r: {
    id: 'r',
    name: 'R',
    icon: '📊',
    color: '#276DC3',
    description: 'Statistical computing and data analysis',
    categories: {
      basics: {
        name: 'Basics & Data Types',
        items: [
          {
            title: 'Variables & Vectors',
            code: `# Variables
x <- 42
y = 3.14
name <- "Alice"

# Vectors
numbers <- c(1, 2, 3, 4, 5)
names <- c("Alice", "Bob", "Charlie")

# Vector operations
doubled <- numbers * 2
sum_all <- sum(numbers)
mean_val <- mean(numbers)

# Sequences
seq1 <- 1:10
seq2 <- seq(0, 100, by=10)
repeated <- rep(1:3, times=3)`,
            description: 'Basic R syntax and vectors',
            usage: 'Everything in R is a vector',
            bestPractices: [
              'Use <- for assignment (R convention)',
              'Vectorize operations instead of loops',
              'Use meaningful variable names'
            ]
          },
          {
            title: 'Data Frames',
            code: `# Create data frame
df <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 35),
  score = c(85, 90, 88)
)

# Access columns
df$name
df[["age"]]
df[, "score"]

# Filter rows
df[df$age > 28, ]
subset(df, score > 85)

# Add column
df$grade <- ifelse(df$score >= 90, "A", "B")

# Summary statistics
summary(df)
str(df)`,
            description: 'Working with data frames',
            usage: 'Data frames are the primary data structure for analysis'
          }
        ]
      },
      dataAnalysis: {
        name: 'Data Analysis',
        items: [
          {
            title: 'dplyr Operations',
            code: `library(dplyr)

# Pipe operator
result <- df %>%
  filter(age > 25) %>%
  select(name, score) %>%
  arrange(desc(score)) %>%
  mutate(grade = ifelse(score >= 90, "A", "B"))

# Grouping and summarizing
df %>%
  group_by(grade) %>%
  summarise(
    count = n(),
    avg_score = mean(score),
    avg_age = mean(age)
  )

# Joins
inner_join(df1, df2, by = "id")
left_join(df1, df2, by = "id")`,
            description: 'dplyr for data manipulation',
            usage: 'Modern and intuitive data manipulation'
          },
          {
            title: 'Visualization with ggplot2',
            code: `library(ggplot2)

# Basic scatter plot
ggplot(df, aes(x = age, y = score)) +
  geom_point() +
  labs(title = "Age vs Score", x = "Age", y = "Score")

# Bar chart
ggplot(df, aes(x = name, y = score, fill = grade)) +
  geom_bar(stat = "identity") +
  theme_minimal()

# Histogram
ggplot(df, aes(x = score)) +
  geom_histogram(bins = 10, fill = "steelblue") +
  labs(title = "Score Distribution")

# Boxplot
ggplot(df, aes(x = grade, y = score)) +
  geom_boxplot()`,
            description: 'Data visualization with ggplot2',
            usage: 'Grammar of graphics for creating plots'
          }
        ]
      },
      statistics: {
        name: 'Statistical Analysis',
        items: [
          {
            title: 'Descriptive Statistics',
            code: `# Summary statistics
mean(numbers)
median(numbers)
sd(numbers)        # Standard deviation
var(numbers)       # Variance
quantile(numbers, c(0.25, 0.75))

# Correlation
cor(df$age, df$score)
cor.test(df$age, df$score)

# Distribution
hist(numbers)
density(numbers)
qqnorm(numbers)`,
            description: 'Basic statistical functions',
            usage: 'Built-in functions for statistical analysis'
          },
          {
            title: 'Linear Regression',
            code: `# Simple linear regression
model <- lm(score ~ age, data = df)
summary(model)

# Predictions
new_data <- data.frame(age = c(28, 32))
predictions <- predict(model, new_data)

# Multiple regression
model2 <- lm(score ~ age + experience + education, data = df)

# Model diagnostics
plot(model)
residuals(model)
coefficients(model)`,
            description: 'Linear regression modeling',
            usage: 'Fundamental statistical modeling technique'
          }
        ]
      }
    }
  },
  elixir: {
    id: 'elixir',
    name: 'Elixir',
    icon: '💧',
    color: '#4B275F',
    description: 'Functional, concurrent language built on Erlang VM',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Pattern Matching',
            code: `# Variables (immutable)
name = "Alice"
age = 30

# Pattern matching
{a, b, c} = {1, 2, 3}
[head | tail] = [1, 2, 3, 4]

# Match operator
x = 1
^x = 1  # This works
# ^x = 2  # This would fail

# Pin operator in functions
defmodule Example do
  def check(value, expected) do
    ^expected = value
    "Match!"
  end
end`,
            description: 'Elixir variables and pattern matching',
            usage: 'Pattern matching is fundamental in Elixir',
            bestPractices: [
              'Use pattern matching instead of conditionals',
              'Variables are immutable - embrace it',
              'Use descriptive names for matched values'
            ]
          },
          {
            title: 'Functions & Modules',
            code: `# Anonymous function
add = fn a, b -> a + b end
add.(1, 2)

# Shorthand
multiply = &(&1 * &2)
multiply.(3, 4)

# Named functions in module
defmodule Math do
  def sum(a, b) do
    a + b
  end
  
  # Function with guards
  def abs(n) when n < 0, do: -n
  def abs(n), do: n
  
  # Pattern matching in functions
  def factorial(0), do: 1
  def factorial(n), do: n * factorial(n - 1)
end`,
            description: 'Defining functions in Elixir',
            usage: 'Functions are first-class citizens'
          }
        ]
      },
      collections: {
        name: 'Collections',
        items: [
          {
            title: 'Lists & Enums',
            code: `# Lists
list = [1, 2, 3, 4, 5]

# Enum module
Enum.map(list, fn x -> x * 2 end)
Enum.filter(list, fn x -> rem(x, 2) == 0 end)
Enum.reduce(list, 0, fn x, acc -> x + acc end)

# Pipe operator
list
|> Enum.map(&(&1 * 2))
|> Enum.filter(&(&1 > 5))
|> Enum.sum()

# List comprehensions
for n <- list, rem(n, 2) == 0, do: n * n

# Keyword lists
options = [size: 10, color: "red"]
options[:size]`,
            description: 'Working with lists and enumerables',
            usage: 'Rich enumerable functions for data processing'
          },
          {
            title: 'Maps & Structs',
            code: `# Maps
person = %{name: "Alice", age: 30}
person.name
person[:age]

# Update map
person = %{person | age: 31}

# Nested update
put_in(person[:address][:city], "NYC")

# Structs (typed maps)
defmodule User do
  defstruct name: "", email: "", age: 0
end

user = %User{name: "Bob", email: "bob@example.com"}
user.name`,
            description: 'Maps and structs for data organization',
            usage: 'Maps for dynamic data, structs for typed data'
          }
        ]
      },
      concurrency: {
        name: 'Concurrency',
        items: [
          {
            title: 'Processes & Messages',
            code: `# Spawn a process
pid = spawn(fn -> 
  IO.puts("Hello from process!")
end)

# Send and receive messages
defmodule Messenger do
  def loop do
    receive do
      {:hello, caller} -> 
        send(caller, {:ok, "Hi there!"})
        loop()
      :stop -> 
        :ok
    end
  end
end

# Start messenger
pid = spawn(Messenger, :loop, [])
send(pid, {:hello, self()})

receive do
  {:ok, message} -> IO.puts(message)
end`,
            description: 'Lightweight processes and message passing',
            usage: 'Core concurrency model in Elixir'
          },
          {
            title: 'Tasks & Agents',
            code: `# Task for one-off computations
task = Task.async(fn -> 
  # Expensive computation
  :timer.sleep(1000)
  42
end)

result = Task.await(task)

# Agent for state management
{:ok, agent} = Agent.start_link(fn -> %{} end)

# Update state
Agent.update(agent, fn state -> 
  Map.put(state, :counter, 1)
end)

# Get state
counter = Agent.get(agent, fn state -> 
  state[:counter]
end)`,
            description: 'High-level concurrency abstractions',
            usage: 'Tasks for async work, Agents for state'
          }
        ]
      }
    }
  },
  lua: {
    id: 'lua',
    name: 'Lua',
    icon: '🌙',
    color: '#000080',
    description: 'Lightweight embeddable scripting language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables & Types',
            code: `-- Variables (dynamically typed)
local name = "Alice"
local age = 30
local isActive = true
local nothing = nil

-- Global variable (avoid when possible)
globalVar = "I'm global"

-- Multiple assignment
local x, y, z = 1, 2, 3

-- Tables (Lua's only data structure)
local person = {
  name = "Bob",
  age = 25
}`,
            description: 'Lua basic types and variables',
            usage: 'Use local for better performance and scoping',
            bestPractices: [
              'Always use local variables',
              'Lua is 1-indexed (not 0)',
              'nil is the only false value besides false'
            ]
          },
          {
            title: 'Functions',
            code: `-- Basic function
local function greet(name)
  return "Hello, " .. name .. "!"
end

-- Multiple returns
local function divmod(a, b)
  return a / b, a % b
end

local quotient, remainder = divmod(10, 3)

-- Anonymous function
local double = function(x)
  return x * 2
end

-- Higher-order function
local function apply(func, value)
  return func(value)
end

-- Closures
local function counter()
  local count = 0
  return function()
    count = count + 1
    return count
  end
end`,
            description: 'Function definitions in Lua',
            usage: 'Functions are first-class values'
          }
        ]
      },
      tables: {
        name: 'Tables',
        items: [
          {
            title: 'Arrays & Dictionaries',
            code: `-- Array (1-indexed!)
local fruits = {"apple", "banana", "cherry"}
print(fruits[1])  -- "apple"

-- Length operator
print(#fruits)  -- 3

-- Dictionary
local person = {
  name = "Alice",
  age = 30,
  ["full-name"] = "Alice Smith"
}

-- Access
print(person.name)
print(person["full-name"])

-- Iterate array
for i, fruit in ipairs(fruits) do
  print(i, fruit)
end

-- Iterate dictionary
for key, value in pairs(person) do
  print(key, value)
end`,
            description: 'Tables as arrays and dictionaries',
            usage: 'Tables are the universal data structure'
          },
          {
            title: 'Metatables',
            code: `-- Metatable for operator overloading
local Vector = {}
Vector.__index = Vector

function Vector.new(x, y)
  local self = setmetatable({}, Vector)
  self.x = x
  self.y = y
  return self
end

-- Operator overloading
function Vector.__add(a, b)
  return Vector.new(a.x + b.x, a.y + b.y)
end

function Vector.__tostring(v)
  return "(" .. v.x .. ", " .. v.y .. ")"
end

local v1 = Vector.new(1, 2)
local v2 = Vector.new(3, 4)
local v3 = v1 + v2
print(v3)  -- (4, 6)`,
            description: 'Metatables for advanced table behavior',
            usage: 'Implement OOP-like features and operator overloading'
          }
        ]
      },
      advanced: {
        name: 'Advanced Features',
        items: [
          {
            title: 'Coroutines',
            code: `-- Create coroutine
local co = coroutine.create(function()
  for i = 1, 5 do
    print("Coroutine:", i)
    coroutine.yield()
  end
end)

-- Resume coroutine
coroutine.resume(co)  -- Prints 1
coroutine.resume(co)  -- Prints 2

-- Producer-consumer pattern
local function producer()
  return coroutine.create(function()
    for i = 1, 10 do
      coroutine.yield(i)
    end
  end)
end

local p = producer()
while coroutine.status(p) ~= "dead" do
  local _, value = coroutine.resume(p)
  if value then print(value) end
end`,
            description: 'Cooperative multitasking with coroutines',
            usage: 'Implement generators and async-like patterns'
          }
        ]
      }
    }
  },
  cpp: {
    id: 'cpp',
    name: 'C++',
    icon: '⚙️',
    color: '#00599C',
    description: 'Powerful general-purpose programming language with system-level capabilities',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Hello World',
            code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
            description: 'Basic C++ program structure',
            usage: 'Entry point of every C++ program',
            bestPractices: [
              'Always include necessary headers',
              'Use std:: namespace prefix or using declarations',
              'Return 0 from main() to indicate success',
              'Use endl or \\n for line breaks'
            ]
          },
          {
            title: 'Variables & Data Types',
            code: `#include <iostream>
#include <string>

int main() {
    // Primitive types
    int age = 25;
    double pi = 3.14159;
    char grade = 'A';
    bool isActive = true;
    
    // String (from STL)
    std::string name = "John Doe";
    
    // Auto type deduction (C++11)
    auto count = 42;        // int
    auto price = 19.99;     // double
    
    // Constants
    const int MAX_SIZE = 100;
    constexpr double RATIO = 1.618;
    
    std::cout << "Name: " << name << ", Age: " << age << std::endl;
    
    return 0;
}`,
            description: 'Variable declarations and data types in C++',
            usage: 'Understanding C++ type system',
            bestPractices: [
              'Use auto when type is obvious from context',
              'Prefer const/constexpr for values that don\'t change',
              'Initialize variables at declaration',
              'Use meaningful variable names',
              'Prefer std::string over C-style char arrays'
            ]
          },
          {
            title: 'Pointers & References',
            code: `#include <iostream>

int main() {
    int value = 42;
    
    // Pointer
    int* ptr = &value;
    std::cout << "Value: " << value << std::endl;
    std::cout << "Address: " << &value << std::endl;
    std::cout << "Pointer: " << ptr << std::endl;
    std::cout << "Dereferenced: " << *ptr << std::endl;
    
    // Reference
    int& ref = value;
    ref = 100;  // Changes value
    std::cout << "Value: " << value << std::endl;
    
    // Null pointer (C++11)
    int* nullPtr = nullptr;
    
    return 0;
}`,
            description: 'Understanding pointers and references',
            usage: 'Memory management and efficient data passing',
            bestPractices: [
              'Use references for function parameters when possible',
              'Initialize pointers to nullptr if not immediately assigned',
              'Check for nullptr before dereferencing',
              'Prefer smart pointers (unique_ptr, shared_ptr) over raw pointers'
            ]
          }
        ]
      },
      oop: {
        name: 'Object-Oriented Programming',
        items: [
          {
            title: 'Classes & Objects',
            code: `#include <iostream>
#include <string>

class Person {
private:
    std::string name;
    int age;
    
public:
    // Constructor
    Person(std::string n, int a) : name(n), age(a) {}
    
    // Getter methods
    std::string getName() const { return name; }
    int getAge() const { return age; }
    
    // Setter methods
    void setName(const std::string& n) { name = n; }
    void setAge(int a) { 
        if (a >= 0) age = a; 
    }
    
    // Member function
    void introduce() const {
        std::cout << "Hi, I'm " << name 
                  << " and I'm " << age 
                  << " years old." << std::endl;
    }
};

int main() {
    Person person("Alice", 30);
    person.introduce();
    
    person.setAge(31);
    std::cout << person.getName() << " is now " 
              << person.getAge() << std::endl;
    
    return 0;
}`,
            description: 'Basic class definition and usage',
            usage: 'Creating objects and encapsulation',
            bestPractices: [
              'Use member initializer lists in constructors',
              'Make member variables private',
              'Provide public getter/setter methods as needed',
              'Mark const methods that don\'t modify state',
              'Use const references for string parameters'
            ]
          },
          {
            title: 'Inheritance & Polymorphism',
            code: `#include <iostream>
#include <string>
#include <memory>

// Base class
class Animal {
protected:
    std::string name;
    
public:
    Animal(const std::string& n) : name(n) {}
    
    // Virtual function for polymorphism
    virtual void makeSound() const {
        std::cout << name << " makes a sound" << std::endl;
    }
    
    // Virtual destructor (important!)
    virtual ~Animal() {}
};

// Derived classes
class Dog : public Animal {
public:
    Dog(const std::string& n) : Animal(n) {}
    
    void makeSound() const override {
        std::cout << name << " barks: Woof!" << std::endl;
    }
};

class Cat : public Animal {
public:
    Cat(const std::string& n) : Animal(n) {}
    
    void makeSound() const override {
        std::cout << name << " meows: Meow!" << std::endl;
    }
};

int main() {
    // Using smart pointers
    std::unique_ptr<Animal> dog = std::make_unique<Dog>("Buddy");
    std::unique_ptr<Animal> cat = std::make_unique<Cat>("Whiskers");
    
    dog->makeSound();
    cat->makeSound();
    
    return 0;
}`,
            description: 'Inheritance and runtime polymorphism',
            usage: 'Creating class hierarchies and virtual functions',
            bestPractices: [
              'Always make base class destructor virtual',
              'Use override keyword in derived classes',
              'Prefer composition over inheritance when possible',
              'Use smart pointers for polymorphic objects',
              'Make functions final if they shouldn\'t be overridden'
            ]
          }
        ]
      },
      stl: {
        name: 'Standard Template Library',
        items: [
          {
            title: 'Vectors',
            code: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    // Create vector
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Add elements
    numbers.push_back(6);
    numbers.insert(numbers.begin(), 0);
    
    // Access elements
    std::cout << "First: " << numbers.front() << std::endl;
    std::cout << "Last: " << numbers.back() << std::endl;
    std::cout << "At index 2: " << numbers[2] << std::endl;
    
    // Iterate
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    // Size and capacity
    std::cout << "Size: " << numbers.size() << std::endl;
    std::cout << "Capacity: " << numbers.capacity() << std::endl;
    
    // Algorithms
    std::sort(numbers.begin(), numbers.end());
    auto it = std::find(numbers.begin(), numbers.end(), 3);
    
    return 0;
}`,
            description: 'Dynamic arrays with std::vector',
            usage: 'Most commonly used container in C++',
            bestPractices: [
              'Reserve capacity if you know the size',
              'Use emplace_back instead of push_back for complex types',
              'Prefer range-based for loops',
              'Use algorithms from <algorithm> header'
            ]
          },
          {
            title: 'Smart Pointers',
            code: `#include <iostream>
#include <memory>
#include <string>

class Resource {
private:
    std::string name;
public:
    Resource(const std::string& n) : name(n) {
        std::cout << "Resource " << name << " created" << std::endl;
    }
    ~Resource() {
        std::cout << "Resource " << name << " destroyed" << std::endl;
    }
    void use() { std::cout << "Using " << name << std::endl; }
};

int main() {
    // unique_ptr - exclusive ownership
    {
        std::unique_ptr<Resource> ptr1 = std::make_unique<Resource>("A");
        ptr1->use();
        
        // Move ownership
        std::unique_ptr<Resource> ptr2 = std::move(ptr1);
        // ptr1 is now nullptr
    } // ptr2 automatically deleted here
    
    // shared_ptr - shared ownership
    {
        std::shared_ptr<Resource> ptr1 = std::make_shared<Resource>("B");
        {
            std::shared_ptr<Resource> ptr2 = ptr1;
            std::cout << "Reference count: " << ptr1.use_count() << std::endl;
        }
        std::cout << "Reference count: " << ptr1.use_count() << std::endl;
    } // Deleted when last shared_ptr goes out of scope
    
    // weak_ptr - non-owning reference
    std::shared_ptr<Resource> shared = std::make_shared<Resource>("C");
    std::weak_ptr<Resource> weak = shared;
    
    if (auto ptr = weak.lock()) {
        ptr->use();
    }
    
    return 0;
}`,
            description: 'Automatic memory management with smart pointers',
            usage: 'RAII and safe memory management',
            bestPractices: [
              'Prefer unique_ptr by default',
              'Use shared_ptr when you need shared ownership',
              'Use weak_ptr to break circular references',
              'Use make_unique/make_shared for creation',
              'Avoid mixing smart pointers with raw pointers'
            ]
          }
        ]
      },
      modern: {
        name: 'Modern C++ (C++11/14/17/20)',
        items: [
          {
            title: 'Lambda Functions',
            code: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Simple lambda
    auto print = [](int n) { std::cout << n << " "; };
    std::for_each(numbers.begin(), numbers.end(), print);
    std::cout << std::endl;
    
    // Lambda with capture
    int multiplier = 2;
    auto multiply = [multiplier](int n) { return n * multiplier; };
    
    // Transform with lambda
    std::vector<int> doubled(numbers.size());
    std::transform(numbers.begin(), numbers.end(), 
                   doubled.begin(), multiply);
    
    // Mutable lambda
    int count = 0;
    auto counter = [count]() mutable { return ++count; };
    
    // Generic lambda (C++14)
    auto generic = [](auto a, auto b) { return a + b; };
    std::cout << generic(5, 3) << std::endl;
    std::cout << generic(2.5, 1.5) << std::endl;
    
    return 0;
}`,
            description: 'Lambda expressions for inline functions',
            usage: 'Functional programming and callbacks',
            bestPractices: [
              'Capture by reference [&] when modifying external variables',
              'Capture by value [=] for immutable access',
              'Be specific with captures [x, &y] when possible',
              'Use auto for lambda types',
              'Consider std::function for storing lambdas'
            ]
          },
          {
            title: 'Move Semantics',
            code: `#include <iostream>
#include <vector>
#include <string>
#include <utility>

class BigData {
private:
    std::vector<int> data;
    std::string name;
    
public:
    // Constructor
    BigData(const std::string& n, size_t size) 
        : name(n), data(size, 0) {
        std::cout << "Constructed " << name << std::endl;
    }
    
    // Copy constructor
    BigData(const BigData& other) 
        : name(other.name), data(other.data) {
        std::cout << "Copied " << name << std::endl;
    }
    
    // Move constructor
    BigData(BigData&& other) noexcept
        : name(std::move(other.name)), 
          data(std::move(other.data)) {
        std::cout << "Moved " << name << std::endl;
    }
    
    // Copy assignment
    BigData& operator=(const BigData& other) {
        if (this != &other) {
            name = other.name;
            data = other.data;
            std::cout << "Copy assigned " << name << std::endl;
        }
        return *this;
    }
    
    // Move assignment
    BigData& operator=(BigData&& other) noexcept {
        if (this != &other) {
            name = std::move(other.name);
            data = std::move(other.data);
            std::cout << "Move assigned " << name << std::endl;
        }
        return *this;
    }
};

int main() {
    BigData obj1("Object1", 1000000);
    
    // Copy
    BigData obj2 = obj1;
    
    // Move
    BigData obj3 = std::move(obj1);
    // obj1 is now in valid but unspecified state
    
    return 0;
}`,
            description: 'Efficient resource transfer with move semantics',
            usage: 'Avoiding unnecessary copies',
            bestPractices: [
              'Implement move constructor and assignment for resource-managing classes',
              'Mark move operations as noexcept',
              'Use std::move to enable move semantics',
              'Don\'t access moved-from objects except to destruct or assign',
              'Follow Rule of Five when implementing special member functions'
            ]
          }
        ]
      }
    }
  },
  html: {
    id: 'html',
    name: 'HTML',
    icon: '🌐',
    color: '#E34F26',
    description: 'Markup language for structuring web content',
    categories: {
      basics: {
        name: 'HTML Basics',
        items: [
          {
            title: 'Basic HTML Structure',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <meta name="description" content="Website description for SEO">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the main content area.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2026 My Website. All rights reserved.</p>
    </footer>
</body>
</html>`,
            description: 'Basic HTML5 document structure',
            usage: 'Foundation of every web page',
            bestPractices: [
              'Always include DOCTYPE declaration',
              'Use semantic HTML5 elements (header, nav, main, footer)',
              'Include viewport meta tag for responsive design',
              'Add description meta tag for SEO',
              'Set proper language attribute',
              'Use heading hierarchy correctly (h1 → h2 → h3)'
            ],
            commonMistakes: [
              'Missing DOCTYPE declaration',
              'Not closing tags properly',
              'Using div for everything instead of semantic elements',
              'Multiple h1 tags on one page',
              'Missing alt attributes on images'
            ]
          },
          {
            title: 'Text Formatting',
            code: `<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>

<!-- Paragraphs -->
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>

<!-- Lists -->
<ul>
    <li>Unordered item 1</li>
    <li>Unordered item 2</li>
</ul>

<ol>
    <li>Ordered item 1</li>
    <li>Ordered item 2</li>
</ol>

<!-- Links -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    External Link
</a>

<!-- Line breaks and horizontal rule -->
<p>First line<br>Second line</p>
<hr>

<!-- Blockquote -->
<blockquote cite="https://source.com">
    <p>This is a quoted text.</p>
    <footer>— Author Name</footer>
</blockquote>`,
            description: 'Text formatting and structure',
            usage: 'Formatting content on web pages',
            bestPractices: [
              'Use strong instead of b for semantic emphasis',
              'Use em instead of i for semantic emphasis',
              'Add rel="noopener noreferrer" to external links',
              'Use cite attribute in blockquotes',
              'Keep heading hierarchy logical'
            ]
          },
          {
            title: 'Forms & Input',
            code: `<form action="/submit" method="POST">
    <!-- Text Input -->
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" 
           required minlength="3" maxlength="20"
           placeholder="Enter username">
    
    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Password -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" 
           required minlength="8">
    
    <!-- Select Dropdown -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="de">Germany</option>
    </select>
    
    <!-- Radio Buttons -->
    <fieldset>
        <legend>Gender:</legend>
        <label>
            <input type="radio" name="gender" value="male"> Male
        </label>
        <label>
            <input type="radio" name="gender" value="female"> Female
        </label>
    </fieldset>
    
    <!-- Checkboxes -->
    <label>
        <input type="checkbox" name="terms" required>
        I agree to the terms
    </label>
    
    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>
    
    <!-- Submit Button -->
    <button type="submit">Submit</button>
</form>`,
            description: 'HTML forms and input elements',
            usage: 'Collecting user input',
            bestPractices: [
              'Always use label elements with for attribute',
              'Use appropriate input types (email, tel, url, etc.)',
              'Add required attribute for mandatory fields',
              'Use placeholder for hints, not instructions',
              'Group related inputs with fieldset',
              'Use button instead of input for submit buttons'
            ]
          }
        ]
      },
      semantic: {
        name: 'Semantic HTML',
        items: [
          {
            title: 'Semantic Elements',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML Example</title>
</head>
<body>
    <!-- Header with navigation -->
    <header>
        <h1>Website Title</h1>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Article (self-contained content) -->
        <article>
            <header>
                <h2>Article Title</h2>
                <p>Posted on <time datetime="2026-01-09">January 9, 2026</time></p>
            </header>
            
            <p>Article content goes here...</p>
            
            <footer>
                <p>Tags: <a href="#html">HTML</a>, <a href="#web">Web</a></p>
            </footer>
        </article>
        
        <!-- Section (thematic grouping) -->
        <section id="features">
            <h2>Features</h2>
            <p>Description of features...</p>
        </section>
        
        <!-- Aside (tangentially related content) -->
        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#link1">Related Article 1</a></li>
                <li><a href="#link2">Related Article 2</a></li>
            </ul>
        </aside>
    </main>
    
    <!-- Footer -->
    <footer>
        <p>&copy; 2026 Company Name</p>
        <address>
            Contact: <a href="mailto:info@example.com">info@example.com</a>
        </address>
    </footer>
</body>
</html>`,
            description: 'Semantic HTML5 elements for better structure',
            usage: 'Improving accessibility and SEO',
            bestPractices: [
              'Use semantic elements instead of generic divs',
              'One main element per page',
              'Use article for self-contained content',
              'Use section for thematic grouping',
              'Use aside for tangentially related content',
              'Use time element for dates and times',
              'Add ARIA labels for better accessibility'
            ]
          },
          {
            title: 'Multimedia Elements',
            code: `<!-- Images with responsive attributes -->
<figure>
    <img src="image.jpg" 
         alt="Descriptive text for screen readers"
         width="800" 
         height="600"
         loading="lazy">
    <figcaption>Image caption explaining the content</figcaption>
</figure>

<!-- Responsive images -->
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Responsive image">
</picture>

<!-- Video with controls -->
<video controls width="640" height="360" poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en" label="English">
    Your browser doesn't support video.
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser doesn't support audio.
</audio>

<!-- SVG inline -->
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="blue" />
</svg>`,
            description: 'Images, video, audio and SVG elements',
            usage: 'Adding multimedia content to web pages',
            bestPractices: [
              'Always include alt text for images',
              'Use loading="lazy" for images below the fold',
              'Specify width and height to prevent layout shift',
              'Use figure and figcaption for images with captions',
              'Provide multiple source formats for video/audio',
              'Include fallback text for unsupported browsers',
              'Add subtitles/captions for accessibility'
            ]
          }
        ]
      },
      accessibility: {
        name: 'Accessibility (a11y)',
        items: [
          {
            title: 'ARIA Attributes',
            code: `<!-- Landmarks -->
<nav aria-label="Main navigation">
    <ul>
        <li><a href="#home">Home</a></li>
    </ul>
</nav>

<!-- Button states -->
<button aria-pressed="false" aria-label="Toggle dark mode">
    🌙
</button>

<!-- Alert messages -->
<div role="alert" aria-live="polite">
    Form submitted successfully!
</div>

<!-- Expandable sections -->
<button aria-expanded="false" aria-controls="content">
    Show More
</button>
<div id="content" hidden>
    Hidden content here
</div>

<!-- Custom components -->
<div role="tablist">
    <button role="tab" aria-selected="true" aria-controls="panel1">
        Tab 1
    </button>
    <button role="tab" aria-selected="false" aria-controls="panel2">
        Tab 2
    </button>
</div>
<div id="panel1" role="tabpanel">Content 1</div>
<div id="panel2" role="tabpanel" hidden>Content 2</div>

<!-- Skip to main content -->
<a href="#main-content" class="skip-link">
    Skip to main content
</a>`,
            description: 'ARIA attributes for accessibility',
            usage: 'Making web content accessible to all users',
            bestPractices: [
              'Use ARIA only when native HTML doesn\'t suffice',
              'Add aria-label for icon-only buttons',
              'Use aria-live for dynamic content updates',
              'Implement keyboard navigation',
              'Test with screen readers',
              'Maintain focus management',
              'Use semantic HTML first, ARIA second'
            ]
          }
        ]
      }
    }
  },
  css: {
    id: 'css',
    name: 'CSS',
    icon: '🎨',
    color: '#1572B6',
    description: 'Style sheet language for designing web pages',
    categories: {
      basics: {
        name: 'CSS Basics',
        items: [
          {
            title: 'Selectors',
            code: `/* Element selector */
p {
    color: blue;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#header {
    font-size: 24px;
}

/* Attribute selector */
input[type="text"] {
    border: 1px solid gray;
}

/* Descendant selector */
div p {
    margin: 10px;
}

/* Child selector */
ul > li {
    list-style: none;
}

/* Adjacent sibling */
h1 + p {
    font-weight: bold;
}

/* Pseudo-classes */
a:hover {
    color: red;
}

button:active {
    transform: scale(0.95);
}

input:focus {
    outline: 2px solid blue;
}

li:first-child {
    font-weight: bold;
}

li:nth-child(odd) {
    background-color: #f0f0f0;
}

/* Pseudo-elements */
p::first-letter {
    font-size: 2em;
}

p::before {
    content: "→ ";
}`,
            description: 'CSS selector types and usage',
            usage: 'Targeting HTML elements for styling',
            bestPractices: [
              'Prefer classes over IDs for styling',
              'Keep selectors simple and maintainable',
              'Use specific selectors to avoid over-specificity',
              'Avoid !important unless absolutely necessary',
              'Use semantic class names',
              'Group related selectors together'
            ]
          },
          {
            title: 'Box Model',
            code: `/* Box model properties */
.box {
    /* Content */
    width: 300px;
    height: 200px;
    
    /* Padding (inside border) */
    padding: 20px;
    /* or */
    padding: 10px 20px; /* top/bottom left/right */
    padding: 10px 15px 20px 25px; /* top right bottom left */
    
    /* Border */
    border: 2px solid #333;
    /* or */
    border-width: 2px;
    border-style: solid;
    border-color: #333;
    border-radius: 8px;
    
    /* Margin (outside border) */
    margin: 20px;
    margin: 10px auto; /* centered horizontally */
    
    /* Box sizing */
    box-sizing: border-box; /* includes padding and border in width */
}

/* Different display types */
.block {
    display: block; /* Takes full width */
}

.inline {
    display: inline; /* Takes only content width */
}

.inline-block {
    display: inline-block; /* Inline but with width/height */
}

.hidden {
    display: none; /* Removes from layout */
}`,
            description: 'Understanding the CSS box model',
            usage: 'Controlling element sizing and spacing',
            bestPractices: [
              'Use box-sizing: border-box globally',
              'Understand padding vs margin',
              'Use margin: auto for horizontal centering',
              'Avoid mixing units in one property',
              'Use shorthand properties when appropriate'
            ]
          },
          {
            title: 'Colors & Typography',
            code: `/* Color formats */
.colors {
    /* Named colors */
    color: red;
    
    /* Hex */
    color: #ff0000;
    color: #f00; /* Shorthand */
    
    /* RGB */
    color: rgb(255, 0, 0);
    
    /* RGBA (with transparency) */
    color: rgba(255, 0, 0, 0.5);
    
    /* HSL */
    color: hsl(0, 100%, 50%);
    
    /* HSLA */
    color: hsla(0, 100%, 50%, 0.5);
}

/* Typography */
.typography {
    /* Font family */
    font-family: 'Arial', 'Helvetica', sans-serif;
    
    /* Font size */
    font-size: 16px;
    font-size: 1rem; /* Relative to root */
    font-size: 1.2em; /* Relative to parent */
    
    /* Font weight */
    font-weight: 400; /* Normal */
    font-weight: 700; /* Bold */
    font-weight: bold;
    
    /* Font style */
    font-style: italic;
    
    /* Line height */
    line-height: 1.5;
    line-height: 24px;
    
    /* Text alignment */
    text-align: left;
    text-align: center;
    text-align: right;
    text-align: justify;
    
    /* Text decoration */
    text-decoration: underline;
    text-decoration: none; /* Remove underline from links */
    
    /* Text transform */
    text-transform: uppercase;
    text-transform: lowercase;
    text-transform: capitalize;
    
    /* Letter and word spacing */
    letter-spacing: 2px;
    word-spacing: 4px;
}`,
            description: 'Colors and typography in CSS',
            usage: 'Styling text and defining color schemes',
            bestPractices: [
              'Use CSS variables for color schemes',
              'Prefer rem over px for font sizes',
              'Set line-height to 1.5-1.6 for readability',
              'Include fallback fonts',
              'Use web-safe fonts or @font-face',
              'Consider color contrast for accessibility'
            ]
          }
        ]
      },
      layout: {
        name: 'Layout',
        items: [
          {
            title: 'Flexbox',
            code: `/* Flex container */
.container {
    display: flex;
    
    /* Direction */
    flex-direction: row; /* default */
    flex-direction: column;
    flex-direction: row-reverse;
    flex-direction: column-reverse;
    
    /* Wrapping */
    flex-wrap: nowrap; /* default */
    flex-wrap: wrap;
    
    /* Justify content (main axis) */
    justify-content: flex-start;
    justify-content: center;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
    
    /* Align items (cross axis) */
    align-items: stretch; /* default */
    align-items: flex-start;
    align-items: center;
    align-items: flex-end;
    
    /* Gap between items */
    gap: 20px;
    gap: 10px 20px; /* row-gap column-gap */
}

/* Flex items */
.item {
    /* Grow */
    flex-grow: 1; /* Take up remaining space */
    
    /* Shrink */
    flex-shrink: 1; /* Allow shrinking */
    
    /* Basis */
    flex-basis: 200px; /* Initial size */
    
    /* Shorthand */
    flex: 1; /* grow shrink basis */
    flex: 0 1 auto; /* default */
    
    /* Align individual item */
    align-self: center;
}

/* Common patterns */
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}

.space-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}`,
            description: 'Flexible box layout',
            usage: 'Creating flexible one-dimensional layouts',
            bestPractices: [
              'Use flexbox for one-dimensional layouts',
              'Use gap instead of margins between items',
              'Understand flex-grow, flex-shrink, flex-basis',
              'Combine with min-width/max-width for responsiveness',
              'Use align-items: stretch for equal heights'
            ]
          },
          {
            title: 'CSS Grid',
            code: `/* Grid container */
.grid {
    display: grid;
    
    /* Define columns */
    grid-template-columns: 200px 1fr 200px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    
    /* Define rows */
    grid-template-rows: 100px auto 100px;
    grid-template-rows: repeat(3, 1fr);
    
    /* Gap */
    gap: 20px;
    gap: 20px 10px; /* row-gap column-gap */
    
    /* Template areas */
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

/* Grid items */
.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
}

/* Alternative: position by lines */
.item {
    grid-column: 1 / 3; /* Start at line 1, end at line 3 */
    grid-row: 2 / 4;
    
    /* Shorthand */
    grid-column: span 2; /* Span 2 columns */
    grid-row: span 3; /* Span 3 rows */
}

/* Alignment */
.grid-centered {
    justify-items: center; /* Horizontal */
    align-items: center; /* Vertical */
    
    /* Or for individual items */
    justify-self: center;
    align-self: center;
}

/* Responsive grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}`,
            description: 'CSS Grid layout system',
            usage: 'Creating complex two-dimensional layouts',
            bestPractices: [
              'Use Grid for two-dimensional layouts',
              'Use repeat() for repetitive patterns',
              'Use auto-fit/auto-fill for responsive grids',
              'Use minmax() for flexible sizing',
              'Name grid lines and areas for clarity',
              'Use fr units for fractional sizing'
            ]
          },
          {
            title: 'Positioning',
            code: `/* Static (default) */
.static {
    position: static;
}

/* Relative - positioned relative to normal position */
.relative {
    position: relative;
    top: 20px;
    left: 10px;
}

/* Absolute - positioned relative to nearest positioned ancestor */
.absolute {
    position: absolute;
    top: 0;
    right: 0;
}

/* Fixed - positioned relative to viewport */
.fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

/* Sticky - toggles between relative and fixed */
.sticky {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
}

/* Z-index controls stacking */
.layer1 {
    position: relative;
    z-index: 1;
}

.layer2 {
    position: relative;
    z-index: 2; /* Appears on top */
}

/* Common patterns */
.centered-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.full-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}`,
            description: 'CSS positioning schemes',
            usage: 'Controlling element positioning',
            bestPractices: [
              'Use relative positioning for small adjustments',
              'Use absolute for overlays and dropdowns',
              'Use fixed for headers and floating buttons',
              'Use sticky for scroll-aware headers',
              'Always set z-index on positioned elements',
              'Avoid excessive absolute positioning'
            ]
          }
        ]
      },
      responsive: {
        name: 'Responsive Design',
        items: [
          {
            title: 'Media Queries',
            code: `/* Mobile-first approach */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        width: 750px;
        padding: 20px;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}

/* Large desktop */
@media (min-width: 1440px) {
    .container {
        width: 1200px;
    }
}

/* Orientation */
@media (orientation: portrait) {
    .sidebar {
        display: none;
    }
}

@media (orientation: landscape) {
    .sidebar {
        display: block;
    }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #ffffff;
    }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}

/* Print styles */
@media print {
    .no-print {
        display: none;
    }
}`,
            description: 'Media queries for responsive design',
            usage: 'Adapting layouts to different screen sizes',
            bestPractices: [
              'Use mobile-first approach',
              'Use min-width instead of max-width',
              'Define breakpoints based on content',
              'Test on real devices',
              'Use em/rem for breakpoints',
              'Consider accessibility preferences'
            ]
          },
          {
            title: 'CSS Variables',
            code: `/* Define variables in :root */
:root {
    /* Colors */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --text-color: #333;
    --bg-color: #ffffff;
    
    /* Spacing */
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    
    /* Typography */
    --font-size-base: 16px;
    --font-size-lg: 20px;
    --font-family: 'Arial', sans-serif;
    
    /* Borders */
    --border-radius: 8px;
    --border-color: #ddd;
}

/* Dark mode variables */
@media (prefers-color-scheme: dark) {
    :root {
        --text-color: #ffffff;
        --bg-color: #1a1a1a;
        --border-color: #444;
    }
}

/* Using variables */
.button {
    background: var(--primary-color);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
}

/* Fallback values */
.text {
    color: var(--text-color, #333);
}

/* Scoped variables */
.card {
    --card-padding: 20px;
    padding: var(--card-padding);
}

/* Calculations */
.container {
    padding: calc(var(--spacing-md) * 2);
}`,
            description: 'CSS custom properties (variables)',
            usage: 'Creating reusable and maintainable styles',
            bestPractices: [
              'Define global variables in :root',
              'Use naming conventions (--category-property)',
              'Group related variables together',
              'Provide fallback values',
              'Use variables for theming',
              'Update variables with JavaScript for dynamic themes'
            ]
          }
        ]
      },
      animations: {
        name: 'Animations & Transitions',
        items: [
          {
            title: 'Transitions',
            code: `/* Simple transition */
.button {
    background: blue;
    transition: background 0.3s ease;
}

.button:hover {
    background: darkblue;
}

/* Multiple properties */
.card {
    transform: scale(1);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    transition: 
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* All properties */
.item {
    transition: all 0.3s ease;
}

/* Timing functions */
.easing {
    transition: transform 0.3s ease;        /* Slow start and end */
    transition: transform 0.3s ease-in;     /* Slow start */
    transition: transform 0.3s ease-out;    /* Slow end */
    transition: transform 0.3s ease-in-out; /* Very slow start and end */
    transition: transform 0.3s linear;      /* Constant speed */
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Custom */
}

/* Delay */
.delayed {
    transition: opacity 0.3s ease 0.1s; /* 0.1s delay */
}`,
            description: 'CSS transitions for smooth changes',
            usage: 'Animating property changes',
            bestPractices: [
              'Transition specific properties, not all',
              'Use transform and opacity for best performance',
              'Keep transitions under 300ms for responsiveness',
              'Use ease or ease-out for most transitions',
              'Avoid transitioning layout properties (width, height)',
              'Test performance on mobile devices'
            ]
          },
          {
            title: 'Keyframe Animations',
            code: `/* Define keyframes */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

/* Apply animations */
.fade-in {
    animation: fadeIn 0.5s ease;
}

.slide-in {
    animation: slideIn 0.3s ease-out;
}

/* Multiple animations */
.complex {
    animation: 
        fadeIn 0.5s ease,
        slideIn 0.3s ease-out;
}

/* Animation properties */
.animated {
    animation-name: bounce;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-play-state: running;
    
    /* Shorthand */
    animation: bounce 1s ease-in-out 0.5s infinite alternate forwards;
}

/* Pause on hover */
.pausable {
    animation: bounce 2s infinite;
}

.pausable:hover {
    animation-play-state: paused;
}`,
            description: 'CSS keyframe animations',
            usage: 'Creating complex animations',
            bestPractices: [
              'Use animation for complex, multi-state changes',
              'Prefer transform and opacity for performance',
              'Use will-change for performance hints',
              'Avoid animating layout properties',
              'Set animation-fill-mode appropriately',
              'Respect prefers-reduced-motion'
            ]
          }
        ]
      }
    }
  }
};

// Helper function to get all languages
export const getAllLanguages = () => {
  return Object.values(languages);
};

// Helper function to get language by id
export const getLanguageById = (id) => {
  return languages[id];
};
