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
