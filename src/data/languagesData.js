// Comprehensive programming language reference data

export const languages = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: '🟨',
    color: '#F7DF1E',
    description: 'High-level, interpreted programming language',
    categories: {
      basics: {
        name: 'Basics & Syntax',
        items: [
          {
            title: 'Variables',
            code: `// var, let, const
let name = "John";
const PI = 3.14159;
var oldStyle = "legacy";`,
            description: 'Variable declarations in JavaScript',
            usage: 'Use let for reassignable variables, const for constants'
          },
          {
            title: 'Data Types',
            code: `// Primitive types
let str = "string";
let num = 42;
let bool = true;
let undef = undefined;
let nul = null;
let sym = Symbol('unique');
let bigInt = 123n;`,
            description: 'JavaScript primitive data types',
            usage: 'Understanding different data types is fundamental'
          },
          {
            title: 'Functions',
            code: `// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function
const greetArrow = (name) => \`Hello, \${name}!\`;

// Async function
async function fetchData() {
  const data = await fetch('api/url');
  return data.json();
}`,
            description: 'Different ways to declare functions',
            usage: 'Choose the appropriate function type based on context'
          }
        ]
      },
      arrays: {
        name: 'Arrays & Iteration',
        items: [
          {
            title: 'Array Methods',
            code: `const arr = [1, 2, 3, 4, 5];

// Map
const doubled = arr.map(x => x * 2);

// Filter
const evens = arr.filter(x => x % 2 === 0);

// Reduce
const sum = arr.reduce((acc, x) => acc + x, 0);

// Find
const found = arr.find(x => x > 3);

// forEach
arr.forEach(x => console.log(x));`,
            description: 'Essential array manipulation methods',
            usage: 'Use these methods for functional array operations'
          },
          {
            title: 'Array Destructuring',
            code: `const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
// first = 1, second = 2, rest = [3, 4, 5]

const [a, , c] = arr; // Skip elements
// a = 1, c = 3`,
            description: 'Destructure arrays to extract values',
            usage: 'Clean way to extract array elements'
          }
        ]
      },
      objects: {
        name: 'Objects & Classes',
        items: [
          {
            title: 'Object Literals',
            code: `const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
};

// Destructuring
const { name, age } = person;

// Spread operator
const newPerson = { ...person, city: "NYC" };`,
            description: 'Creating and manipulating objects',
            usage: 'Objects store key-value pairs and methods'
          },
          {
            title: 'Classes',
            code: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
  
  static species() {
    return "Homo sapiens";
  }
}

class Developer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }
}`,
            description: 'ES6 class syntax',
            usage: 'Use classes for object-oriented programming'
          }
        ]
      },
      promises: {
        name: 'Async & Promises',
        items: [
          {
            title: 'Promises',
            code: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));`,
            description: 'Handling asynchronous operations',
            usage: 'Promises handle async operations elegantly'
          },
          {
            title: 'Async/Await',
            code: `async function fetchUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Usage
const user = await fetchUser(1);`,
            description: 'Modern async syntax with async/await',
            usage: 'Cleaner syntax for promise-based code'
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
