// COMPREHENSIVE TUTORIAL DATABASE - Deep learning content for all languages
// 5-10 hour tutorials with exercises and solutions for each language

export const tutorialsData = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: '🟨',
    color: '#F7DF1E',
    tutorials: [
      {
        id: 'js-basics',
        title: 'JavaScript Fundamentals',
        level: 'Beginner',
        duration: '5-6 hours',
        description: 'Learn JavaScript basics from scratch - variables, functions, arrays, and objects.',
        topics: ['Variables', 'Data Types', 'Functions', 'Arrays', 'Objects', 'Conditionals', 'Loops'],
        lessons: [
          {
            id: 'js-basics-1',
            title: 'Variables & Data Types',
            duration: '45 min',
            content: `Learn the fundamentals of JavaScript variables and data types.

**Key Concepts:**
- let, const, var differences
- Primitive types (string, number, boolean, undefined, null)
- Type conversion and coercion
- Variable naming conventions`,
            code: `// Variables - let, const, var
let name = "Max";        // Can be reassigned
const age = 25;          // Cannot be reassigned
var oldWay = "legacy";   // Function-scoped (avoid!)

// Data Types
const stringType = "Hello World";
const numberType = 42;
const booleanType = true;
const undefinedType = undefined;
const nullType = null;

// typeof operator
console.log(typeof stringType);  // "string"
console.log(typeof numberType);  // "number"
console.log(typeof nullType);    // "object" (JavaScript quirk!)

// Type conversion
const str = "123";
const num = Number(str);        // 123
const bool = Boolean(0);        // false
const back = String(num);       // "123"

// Template literals (ES6)
const greeting = \`Hello, \${name}! You are \${age} years old.\`;
console.log(greeting);

// String methods
const text = "JavaScript";
console.log(text.length);           // 10
console.log(text.toUpperCase());    // "JAVASCRIPT"
console.log(text.slice(0, 4));      // "Java"
console.log(text.includes("Script")); // true`,
            exercise: `**Exercise 1:** Create a program that:
1. Declares variables for a person (name, age, city, isStudent)
2. Uses template literals to create a bio text
3. Converts the age to a string and checks its type
4. Creates an uppercase version of the city name

**Expected Output:**
\`\`\`
Bio: John Doe, 22 years old from NEW YORK
Age type as string: string
\`\`\``,
            solution: `// Solution
const personName = "John Doe";
const personAge = 22;
const personCity = "New York";
const isStudent = true;

// Bio with template literal
const bio = \`Bio: \${personName}, \${personAge} years old from \${personCity.toUpperCase()}\`;
console.log(bio);

// Age as string
const ageString = String(personAge);
console.log(\`Age type as string: \${typeof ageString}\`);

// Alternative: Check if student
if (isStudent) {
    console.log(\`\${personName} is currently a student.\`);
}`
          },
          {
            id: 'js-basics-2',
            title: 'Functions',
            duration: '60 min',
            content: `Master JavaScript functions - the building blocks of any program.

**Key Concepts:**
- Function declarations vs expressions
- Arrow functions (ES6)
- Parameters and return values
- Default parameters
- Rest and spread operators`,
            code: `// Function Declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function (ES6) - Concise syntax
const multiply = (a, b) => a * b;

// Arrow function with block
const calculate = (a, b) => {
    const result = a + b;
    return result * 2;
};

// Default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(5));      // 25 (5^2)
console.log(power(5, 3));   // 125 (5^3)

// Rest parameters (...)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);     // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]
const total = numbers.reduce((sum, n) => sum + n, 0);  // 15

// Callback functions
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John" };
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Data received:", data);
});`,
            exercise: `**Exercise 2:** Create a calculator with these functions:
1. \`add(a, b)\` - returns sum
2. \`subtract(a, b)\` - returns difference
3. \`calculate(operation, a, b)\` - takes operation name and numbers
4. \`processNumbers(...numbers)\` - takes any amount of numbers and returns:
   - sum
   - average
   - max
   - min

**Example Usage:**
\`\`\`javascript
console.log(calculate('add', 5, 3));  // 8
console.log(processNumbers(1, 2, 3, 4, 5));  
// { sum: 15, average: 3, max: 5, min: 1 }
\`\`\``,
            solution: `// Solution
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";

function calculate(operation, a, b) {
    const operations = {
        'add': add,
        'subtract': subtract,
        'multiply': multiply,
        'divide': divide
    };
    
    const fn = operations[operation];
    return fn ? fn(a, b) : "Invalid operation";
}

function processNumbers(...numbers) {
    if (numbers.length === 0) return null;
    
    const sum = numbers.reduce((total, n) => total + n, 0);
    const average = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    
    return { sum, average, max, min };
}

// Test
console.log(calculate('add', 5, 3));      // 8
console.log(calculate('multiply', 4, 7)); // 28
console.log(processNumbers(1, 2, 3, 4, 5));
// { sum: 15, average: 3, max: 5, min: 1 }`
          }
        ]
      }
    ]
  },

  python: {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3776AB',
    tutorials: [
      {
        id: 'py-basics',
        title: 'Python Fundamentals',
        level: 'Beginner',
        duration: '5-6 hours',
        description: 'Learn Python from the ground up - syntax, data structures, and functions.',
        topics: ['Variables', 'Data Types', 'Lists', 'Dictionaries', 'Functions', 'Control Flow'],
        lessons: [
          {
            id: 'py-basics-1',
            title: 'Python Basics',
            duration: '50 min',
            content: `Learn Python fundamentals - the most beginner-friendly programming language.

**Key Concepts:**
- Variables and naming conventions
- Data types (int, float, str, bool)
- String formatting (f-strings)
- User input
- Type conversion`,
            code: `# Variables - no declaration needed!
name = "Alice"
age = 25
height = 1.65
is_student = True

# Print with f-strings (Python 3.6+)
print(f"Name: {name}, Age: {age}")

# Multiple assignment
x, y, z = 1, 2, 3

# Type checking
print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>

# Type conversion
age_str = str(age)           # "25"
number = int("42")           # 42
decimal = float("3.14")      # 3.14

# String methods
text = "python programming"
print(text.upper())          # "PYTHON PROGRAMMING"
print(text.capitalize())     # "Python programming"
print(text.split())          # ["python", "programming"]
print("_".join(["a", "b"]))  # "a_b"

# String operations
greeting = "Hello, " + name
repeated = "Ha" * 3          # "HaHaHa"
substring = text[0:6]        # "python"

# Input (always returns string!)
user_name = input("Enter name: ")
user_age = int(input("Enter age: "))

# Boolean operations
is_adult = age >= 18
has_permission = is_adult and is_student
print(f"Adult: {is_adult}, Has permission: {has_permission}")`,
            exercise: `**Exercise 1:** Create a personal information program:
1. Ask user for name, age, and favorite color
2. Convert age to integer
3. Check if user is an adult (>= 18)
4. Print a formatted message with all info
5. Calculate birth year (current year - age)

**Expected Output:**
\`\`\`
Name: John
Age: 22 (adult)
Favorite color: Blue
Born in: 2004
\`\`\``,
            solution: `# Solution
import datetime

# Get user input
name = input("Enter your name: ")
age = int(input("Enter your age: "))
favorite_color = input("Enter your favorite color: ")

# Check adult status
age_status = "adult" if age >= 18 else "minor"

# Calculate birth year
current_year = datetime.datetime.now().year
birth_year = current_year - age

# Print formatted output
print(f"\\nName: {name}")
print(f"Age: {age} ({age_status})")
print(f"Favorite color: {favorite_color}")
print(f"Born in: {birth_year}")

# Alternative: All in one
print(f"""
Profile Summary:
- Name: {name.title()}
- Age: {age} years old
- Status: {age_status.upper()}
- Favorite Color: {favorite_color.capitalize()}
- Birth Year: {birth_year}
""")`
          }
        ]
      }
    ]
  },

  java: {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: '#007396',
    tutorials: [
      {
        id: 'java-basics',
        title: 'Java Fundamentals',
        level: 'Beginner',
        duration: '6-8 hours',
        description: 'Master Java basics - OOP, syntax, and core concepts.',
        topics: ['Classes', 'Methods', 'Variables', 'Data Types', 'Control Flow', 'OOP'],
        lessons: [
          {
            id: 'java-basics-1',
            title: 'Java Basics & OOP',
            duration: '60 min',
            content: `Learn Java fundamentals with object-oriented programming.

**Key Concepts:**
- Classes and objects
- Methods and constructors
- Access modifiers
- Data types
- Static vs instance`,
            code: `// Basic Java class
public class Person {
    // Instance variables (fields)
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
    
    // Instance method
    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age);
    }
    
    // Static method
    public static void printInfo() {
        System.out.println("This is the Person class");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        // Create objects
        Person person1 = new Person("John", 25);
        Person person2 = new Person("Alice", 30);
        
        // Call methods
        person1.introduce();  // "Hi, I'm John and I'm 25"
        person2.introduce();  // "Hi, I'm Alice and I'm 30"
        
        // Use getters
        System.out.println(person1.getName());  // "John"
        
        // Use setters
        person1.setAge(26);
        
        // Static method (call on class)
        Person.printInfo();
    }
}`,
            exercise: `**Exercise 1:** Create a \`BankAccount\` class with:
- Fields: accountNumber, balance, ownerName
- Constructor to initialize all fields
- Methods:
  - deposit(amount) - adds to balance
  - withdraw(amount) - removes from balance (check if sufficient)
  - getBalance() - returns current balance
  - transfer(amount, otherAccount) - transfers money to another account

**Test it:**
Create 2 accounts, deposit money, transfer between them, print balances.`,
            solution: `// Solution
public class BankAccount {
    private String accountNumber;
    private double balance;
    private String ownerName;
    
    // Constructor
    public BankAccount(String accountNumber, String ownerName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance >= 0 ? initialBalance : 0;
    }
    
    // Deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }
    
    // Withdraw money
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        } else {
            System.out.println("Insufficient funds or invalid amount");
            return false;
        }
    }
    
    // Transfer money
    public boolean transfer(double amount, BankAccount other) {
        if (withdraw(amount)) {
            other.deposit(amount);
            System.out.println("Transferred $" + amount + " to " + other.ownerName);
            return true;
        }
        return false;
    }
    
    // Get balance
    public double getBalance() {
        return balance;
    }
    
    // Get account info
    public void printInfo() {
        System.out.println(ownerName + "'s account (" + accountNumber + "): $" + balance);
    }
}

// Test
public class Main {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount("001", "John", 1000);
        BankAccount account2 = new BankAccount("002", "Alice", 500);
        
        account1.printInfo();  // John's account (001): $1000.0
        account2.printInfo();  // Alice's account (002): $500.0
        
        account1.deposit(200);
        account1.withdraw(150);
        account1.transfer(300, account2);
        
        account1.printInfo();  // John's account (001): $750.0
        account2.printInfo();  // Alice's account (002): $800.0
    }
}`
          }
        ]
      }
    ]
  },

  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: '🔷',
    color: '#3178C6',
    tutorials: [
      {
        id: 'ts-basics',
        title: 'TypeScript Fundamentals',
        level: 'Intermediate',
        duration: '6-7 hours',
        description: 'Master TypeScript - types, interfaces, generics, and advanced features.',
        topics: ['Types', 'Interfaces', 'Generics', 'Type Guards', 'Advanced Types'],
        lessons: [
          {
            id: 'ts-basics-1',
            title: 'Types & Interfaces',
            duration: '60 min',
            content: `Learn TypeScript type system and interfaces for type-safe code.

**Key Concepts:**
- Basic types (string, number, boolean)
- Interfaces and type aliases
- Optional and readonly properties
- Union and intersection types
- Type assertions`,
            code: `// Basic Types
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;
let notDefined: undefined;
let empty: null = null;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane"];

// Tuple - fixed length array with types
let person: [string, number] = ["John", 25];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Red;

// Interface - define object shape
interface User {
    name: string;
    age: number;
    email?: string;  // Optional property
    readonly id: number;  // Cannot be changed
}

const user: User = {
    id: 1,
    name: "John",
    age: 25
};

// user.id = 2;  // Error! readonly property

// Type Alias
type Point = {
    x: number;
    y: number;
};

const point: Point = { x: 10, y: 20 };

// Union Types - can be one of several types
let value: string | number;
value = "hello";  // OK
value = 42;       // OK

// Intersection Types - combine multiple types
type Admin = User & {
    role: string;
    permissions: string[];
};

const admin: Admin = {
    id: 1,
    name: "Admin",
    age: 30,
    role: "superadmin",
    permissions: ["read", "write", "delete"]
};

// Type Assertion
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// Function types
interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;`,
            exercise: `**Exercise:** Create a TypeScript system for a library:

1. Define an \`Book\` interface with:
   - id (number, readonly)
   - title (string)
   - author (string)
   - isbn (string)
   - year (number)
   - available (boolean)

2. Define a \`Library\` interface with:
   - books (array of Book)
   - addBook method
   - removeBook method
   - findBookByTitle method

3. Create a type \`LibraryMember\` that extends User and adds:
   - memberId (string)
   - borrowedBooks (array of Book)

4. Implement functions to work with these types`,
            solution: `// Solution
interface Book {
    readonly id: number;
    title: string;
    author: string;
    isbn: string;
    year: number;
    available: boolean;
}

interface Library {
    books: Book[];
    addBook(book: Book): void;
    removeBook(id: number): boolean;
    findBookByTitle(title: string): Book | undefined;
}

interface User {
    name: string;
    age: number;
    email?: string;
}

type LibraryMember = User & {
    memberId: string;
    borrowedBooks: Book[];
};

// Implementation
class LibrarySystem implements Library {
    books: Book[] = [];
    
    addBook(book: Book): void {
        this.books.push(book);
        console.log(\`Added: \${book.title}\`);
    }
    
    removeBook(id: number): boolean {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
    
    findBookByTitle(title: string): Book | undefined {
        return this.books.find(b => 
            b.title.toLowerCase().includes(title.toLowerCase())
        );
    }
}

// Usage
const library = new LibrarySystem();

const book1: Book = {
    id: 1,
    title: "TypeScript Handbook",
    author: "Microsoft",
    isbn: "123-456",
    year: 2023,
    available: true
};

library.addBook(book1);

const member: LibraryMember = {
    name: "John Doe",
    age: 25,
    email: "john@example.com",
    memberId: "M001",
    borrowedBooks: []
};

console.log(library.findBookByTitle("TypeScript"));`
          }
        ]
      }
    ]
  },

  go: {
    id: 'go',
    name: 'Go',
    icon: '🐹',
    color: '#00ADD8',
    tutorials: [
      {
        id: 'go-basics',
        title: 'Go Fundamentals',
        level: 'Beginner',
        duration: '5-6 hours',
        description: 'Learn Go basics - syntax, goroutines, channels, and concurrency.',
        topics: ['Variables', 'Functions', 'Structs', 'Goroutines', 'Channels'],
        lessons: [
          {
            id: 'go-basics-1',
            title: 'Go Basics & Structs',
            duration: '50 min',
            content: `Learn Go fundamentals and struct types.

**Key Concepts:**
- Variable declaration
- Functions
- Structs (like classes)
- Methods
- Pointers`,
            code: `package main

import "fmt"

// Variables
var globalVar = "I'm global"

func main() {
    // Variable declaration
    var name string = "John"
    age := 25  // Short declaration (type inferred)
    
    // Multiple variables
    var x, y int = 1, 2
    a, b := 3, 4
    
    // Constants
    const PI = 3.14159
    
    fmt.Println(name, age)
}

// Functions
func add(a int, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Named return values
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return  // Naked return
}

// Structs - like classes
type Person struct {
    Name string
    Age  int
}

// Method on struct
func (p Person) Greet() string {
    return fmt.Sprintf("Hi, I'm %s", p.Name)
}

// Method with pointer receiver (can modify)
func (p *Person) HaveBirthday() {
    p.Age++
}

func main() {
    // Create struct
    person1 := Person{Name: "John", Age: 25}
    person2 := Person{"Jane", 30}  // Field names optional
    
    // Access fields
    fmt.Println(person1.Name)
    
    // Call methods
    fmt.Println(person1.Greet())
    person1.HaveBirthday()
    
    // Pointers
    ptr := &person1
    ptr.Age = 26  // Auto-dereference
    
    // Arrays and Slices
    var arr [5]int = [5]int{1, 2, 3, 4, 5}
    slice := []int{1, 2, 3}
    slice = append(slice, 4, 5)
    
    // Maps
    ages := make(map[string]int)
    ages["John"] = 25
    ages["Jane"] = 30
    
    // Check if key exists
    age, exists := ages["John"]
    if exists {
        fmt.Println(age)
    }
}`,
            exercise: `**Exercise:** Create a simple banking system in Go:

1. Define a \`BankAccount\` struct with:
   - AccountNumber (string)
   - Owner (string)
   - Balance (float64)

2. Implement methods:
   - Deposit(amount float64) - adds to balance
   - Withdraw(amount float64) error - removes from balance (check sufficient funds)
   - Transfer(amount float64, to *BankAccount) error
   - GetBalance() float64

3. Create 2 accounts, deposit money, transfer between them`,
            solution: `package main

import (
    "fmt"
    "errors"
)

type BankAccount struct {
    AccountNumber string
    Owner         string
    Balance       float64
}

// Deposit adds money to account
func (acc *BankAccount) Deposit(amount float64) {
    if amount > 0 {
        acc.Balance += amount
        fmt.Printf("Deposited $%.2f to %s\\n", amount, acc.Owner)
    }
}

// Withdraw removes money from account
func (acc *BankAccount) Withdraw(amount float64) error {
    if amount <= 0 {
        return errors.New("amount must be positive")
    }
    if amount > acc.Balance {
        return errors.New("insufficient funds")
    }
    acc.Balance -= amount
    fmt.Printf("Withdrawn $%.2f from %s\\n", amount, acc.Owner)
    return nil
}

// Transfer sends money to another account
func (acc *BankAccount) Transfer(amount float64, to *BankAccount) error {
    if err := acc.Withdraw(amount); err != nil {
        return err
    }
    to.Deposit(amount)
    fmt.Printf("Transferred $%.2f from %s to %s\\n", 
        amount, acc.Owner, to.Owner)
    return nil
}

// GetBalance returns current balance
func (acc *BankAccount) GetBalance() float64 {
    return acc.Balance
}

// PrintInfo displays account information
func (acc *BankAccount) PrintInfo() {
    fmt.Printf("Account: %s | Owner: %s | Balance: $%.2f\\n",
        acc.AccountNumber, acc.Owner, acc.Balance)
}

func main() {
    // Create accounts
    acc1 := &BankAccount{
        AccountNumber: "001",
        Owner:         "John",
        Balance:       1000.0,
    }
    
    acc2 := &BankAccount{
        AccountNumber: "002",
        Owner:         "Jane",
        Balance:       500.0,
    }
    
    // Operations
    acc1.PrintInfo()
    acc2.PrintInfo()
    
    acc1.Deposit(200)
    acc1.Withdraw(150)
    
    if err := acc1.Transfer(300, acc2); err != nil {
        fmt.Println("Transfer error:", err)
    }
    
    fmt.Println("\\nFinal balances:")
    acc1.PrintInfo()
    acc2.PrintInfo()
}`
          }
        ]
      }
    ]
  }
};

// Helper Functions
export function getTutorialsByLanguage(languageId) {
  return tutorialsData[languageId]?.tutorials || [];
}

export function getAllTutorials() {
  return Object.values(tutorialsData).flatMap(lang =>
    lang.tutorials.map(tutorial => ({
      ...tutorial,
      language: lang.name,
      languageId: lang.id,
      languageIcon: lang.icon
    }))
  );
}

export function getTutorialById(languageId, tutorialId) {
  const tutorials = getTutorialsByLanguage(languageId);
  return tutorials.find(t => t.id === tutorialId);
}

export function searchTutorials(query) {
  const allTutorials = getAllTutorials();
  const searchTerm = query.toLowerCase();
  
  return allTutorials.filter(tutorial =>
    tutorial.title.toLowerCase().includes(searchTerm) ||
    tutorial.description.toLowerCase().includes(searchTerm) ||
    tutorial.topics.some(t => t.toLowerCase().includes(searchTerm)) ||
    tutorial.language.toLowerCase().includes(searchTerm)
  );
}

export function getTutorialsByLevel(level) {
  return getAllTutorials().filter(t => t.level === level);
}

export function getTutorialStats() {
  const allTutorials = getAllTutorials();
  return {
    total: allTutorials.length,
    byLanguage: Object.keys(tutorialsData).reduce((acc, langId) => {
      acc[langId] = tutorialsData[langId].tutorials.length;
      return acc;
    }, {}),
    byLevel: {
      Beginner: allTutorials.filter(t => t.level === 'Beginner').length,
      Intermediate: allTutorials.filter(t => t.level === 'Intermediate').length,
      Advanced: allTutorials.filter(t => t.level === 'Advanced').length
    }
  };
}
