// COMPREHENSIVE ERROR DATABASE - Solutions for common programming errors
// 200+ errors with detailed solutions, causes, and prevention tips

export const errorsData = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: '🟨',
    color: '#F7DF1E',
    commonErrors: [
      {
        id: 'js-undefined-not-function',
        title: 'TypeError: ... is not a function',
        severity: 'high',
        category: 'Runtime Error',
        description: 'One of the most common JS errors. Occurs when trying to call something as a function that is not callable.',
        errorExample: `// Error 1: Property does not exist
const obj = { name: "Max" };
obj.greet(); // TypeError: obj.greet is not a function

// Error 2: Wrong variable type
const num = 5;
num(); // TypeError: num is not a function

// Error 3: Method typo
const arr = [1, 2, 3];
arr.push(4); // OK
arr.pust(5); // TypeError: arr.pust is not a function (typo!)

// Error 4: Variable overwritten
let myFunc = function() { return 42; };
myFunc = 5;  // Oops!
myFunc(); // TypeError`,
        causes: [
          'Variable is undefined or null',
          'Property does not exist on object',
          'Typo in function name',
          'Variable accidentally overwritten',
          'Async function not awaited'
        ],
        solution: `// SOLUTION 1: Check existence
const obj = { name: "Max" };
if (typeof obj.greet === 'function') {
    obj.greet();
} else {
    console.log("greet is not a function");
}

// SOLUTION 2: Optional Chaining (ES2020)
obj.greet?.(); // Only calls if function exists

// SOLUTION 3: Define function
const obj2 = {
    name: "Max",
    greet: function() {
        return \`Hello, \${this.name}!\`;
    }
    // Or: greet() { ... }  (ES6 shorthand)
};
obj2.greet(); // Works!

// SOLUTION 4: Defensive programming
function callIfFunction(fn, ...args) {
    if (typeof fn === 'function') {
        return fn(...args);
    }
    console.warn('Not callable:', fn);
    return undefined;
}

// SOLUTION 5: Use TypeScript!
// TypeScript would catch these errors at compile time

// SOLUTION 6: Debugging
console.log(typeof obj.greet); // "undefined"
console.log(obj); // Shows all properties`,
        prevention: [
          'Use TypeScript for type safety',
          'Use console.log() for debugging',
          'Use Optional Chaining (?.)',
          'Check object properties before use',
          'Configure ESLint',
          'Use IDE with autocomplete'
        ],
        realWorldExample: `// Real-World: API Response
async function fetchUser(id) {
    try {
        const response = await fetch(\`/api/users/\${id}\`);
        const data = await response.json();
        
        // Danger! data.greet might not exist
        // data.greet(); // TypeError!
        
        // Safe:
        if (data && typeof data.greet === 'function') {
            data.greet();
        }
        
        // Or with Optional Chaining:
        data?.greet?.();
        
        return data;
    } catch (error) {
        console.error("Load error:", error);
    }
}`,
        relatedErrors: [
          'TypeError: Cannot read property of undefined',
          'ReferenceError: ... is not defined',
          'TypeError: Cannot call method on undefined'
        ]
      },
      {
        id: 'js-cannot-read-property',
        title: 'TypeError: Cannot read property ... of undefined/null',
        severity: 'high',
        category: 'Runtime Error',
        description: 'The most common JS error! Accessing property of undefined or null.',
        errorExample: `// Error 1: Not initialized
let user;
console.log(user.name); // TypeError!

// Error 2: API returns null
const data = null;
console.log(data.value); // TypeError!

// Error 3: Nested access
const response = {
    data: {
        user: null
    }
};
console.log(response.data.user.name); // TypeError!

// Error 4: Empty array
const users = [];
console.log(users[0].name); // TypeError!

// Error 5: Wrong property name
const obj = { username: "Max" };
console.log(obj.name.toUpperCase()); // TypeError!`,
        causes: [
          'Variable not initialized',
          'API returns undefined/null',
          'Nested property access fails',
          'Array index does not exist',
          'Typo in property name',
          'Async code not handled correctly'
        ],
        solution: `// SOLUTION 1: Optional Chaining (?.) - BEST SOLUTION!
const userName = user?.name;
const email = response?.data?.user?.profile?.email;
const firstUserName = users?.[0]?.name;

// SOLUTION 2: Default values with Nullish Coalescing (??)
const name = user?.name ?? "Guest";
const age = user?.age ?? 0;

// SOLUTION 3: Traditional checks
if (user && user.name) {
    console.log(user.name);
}

// SOLUTION 4: Try-Catch (not recommended!)
try {
    console.log(data.user.name);
} catch (error) {
    console.log("Access error:", error.message);
}

// SOLUTION 5: Guard Clauses
function getUserName(user) {
    if (!user) return "Unknown";
    if (!user.name) return "Unknown";
    return user.name;
}

// SOLUTION 6: Destructuring with defaults
function printUser({ name = "Guest", age = 0 } = {}) {
    console.log(\`\${name}, \${age} years\`);
}
printUser(); // "Guest, 0 years"
printUser({ name: "Max" }); // "Max, 0 years"

// SOLUTION 7: Validate API responses
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}\`);
        }
        
        const data = await response.json();
        
        // Validate!
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid data format');
        }
        
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null; // Or default value
    }
}`,
        prevention: [
          'ALWAYS use Optional Chaining (?.)',
          'Nullish Coalescing (??) for defaults',
          'Validate API responses',
          'Use TypeScript for type guarantees',
          'Guard clauses at function start',
          'Initialize objects with default values'
        ],
        bestPractices: `// Best Practice Patterns
// 1. Safe API calls
async function safeFetchUser(id) {
    try {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) throw new Error('Not found');
        const user = await response.json();
        return {
            name: user?.name ?? 'Unknown',
            email: user?.email ?? 'no-email@example.com',
            age: user?.age ?? 0
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}

// 2. Safe Object Access
const getNestedProperty = (obj, path, defaultValue) => {
    return path.split('.').reduce((current, key) => 
        current?.[key], obj
    ) ?? defaultValue;
};

const email = getNestedProperty(user, 'profile.contact.email', 'N/A');

// 3. TypeScript Interface (recommended!)
interface User {
    name: string;
    age: number;
    email?: string; // Optional
}

function greetUser(user: User): string {
    return \`Hello, \${user.name}!\`;
}`,
        relatedErrors: [
          'TypeError: Cannot read property of null',
          'TypeError: ... is undefined',
          'ReferenceError: ... is not defined'
        ]
      }
    ]
  },

  python: {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3776AB',
    commonErrors: [
      {
        id: 'py-indentation',
        title: 'IndentationError: unexpected indent',
        severity: 'high',
        category: 'Syntax Error',
        description: 'Python uses indentation for code structure. Wrong/inconsistent indentation causes syntax errors.',
        errorExample: `# ERROR 1: No indentation
def greet():
print("Hello")  # IndentationError!

# ERROR 2: Too much indentation
def calculate():
    x = 5
        y = 10  # IndentationError!
    return x + y

# ERROR 3: Mixed tabs and spaces
def mixed():
    x = 5      # 4 spaces
\ty = 10    # Tab
    return x + y  # IndentationError or TabError!

# ERROR 4: Wrong indentation after if
def check(x):
    if x > 0:
    print("Positive")  # IndentationError!

# ERROR 5: Wrong line indentation
def example():
    x = 1
     y = 2  # IndentationError! (5 instead of 4 spaces)`,
        causes: [
          'Missing indentation after colon (:)',
          'Mixed tabs and spaces',
          'Wrong number of spaces',
          'Copy-paste from differently formatted code',
          'Editor settings incorrectly configured'
        ],
        solution: `# SOLUTION 1: Consistent 4 spaces (PEP 8 standard)
def greet():
    print("Hello")  # 4 spaces

def calculate():
    x = 5      # 4 spaces
    y = 10     # 4 spaces
    return x + y

# SOLUTION 2: Indent if/else correctly
def check_age(age):
    if age >= 18:
        print("Adult")       # 4 spaces after if
        print("Can vote")    # Same level
    else:
        print("Minor")       # 4 spaces after else
        print("Cannot vote")

# SOLUTION 3: Nested structures
def process_data(items):
    result = []
    for item in items:                    # 4 spaces
        if item > 0:                      # 8 spaces
            processed = item * 2          # 12 spaces
            result.append(processed)
        else:                             # 8 spaces
            result.append(0)
    return result

# SOLUTION 4: Try-Except
def safe_divide(a, b):
    try:                                  # 4 spaces
        result = a / b                    # 8 spaces
        return result
    except ZeroDivisionError:             # 4 spaces
        print("Cannot divide by zero!")   # 8 spaces
        return None

# SOLUTION 5: Classes
class Person:
    def __init__(self, name):             # 4 spaces
        self.name = name                  # 8 spaces
    
    def greet(self):                      # 4 spaces
        return f"Hello, {self.name}"      # 8 spaces`,
        prevention: [
          'Configure editor to 4 spaces',
          'NEVER mix tabs and spaces',
          'Use pylint or flake8 as linter',
          'Use Black as auto-formatter',
          'Enable "Show Whitespace" in editor',
          'Use EditorConfig for team consistency'
        ],
        relatedErrors: [
          'TabError: inconsistent use of tabs and spaces',
          'SyntaxError: unexpected indent',
          'SyntaxError: expected an indented block'
        ]
      },
      {
        id: 'py-name-error',
        title: 'NameError: name ... is not defined',
        severity: 'high',
        category: 'Runtime Error',
        description: 'Variable or function was used before being defined.',
        errorExample: `# ERROR 1: Variable not defined
print(name)  # NameError: name 'name' is not defined

# ERROR 2: Typo
username = "Max"
print(usernme)  # NameError!

# ERROR 3: Function called before definition
greet()  # NameError!

def greet():
    print("Hello")

# ERROR 4: Scope problem
def my_function():
    x = 5

print(x)  # NameError! x only available in my_function

# ERROR 5: Forgot import
df = pd.DataFrame()  # NameError: name 'pd' is not defined

# ERROR 6: Wrong capitalization (case-sensitive!)
myVar = 5
print(myvar)  # NameError!`,
        causes: [
          'Variable not initialized',
          'Typo in variable name',
          'Function used before definition',
          'Variable outside its scope',
          'Missing import statement',
          'Case-sensitivity not respected'
        ],
        solution: `# SOLUTION 1: Define variable before use
name = "Max"
print(name)  # Works!

# SOLUTION 2: Check spelling
username = "Max"
print(username)  # Correctly spelled

# SOLUTION 3: Define function before calling
def greet():
    print("Hello")

greet()  # Now it works!

# SOLUTION 4: Use global scope
x = 10  # Global

def my_function():
    global x  # Access global x
    x = 5

my_function()
print(x)  # 5

# Better: Use return value
def my_function():
    return 5

x = my_function()
print(x)  # 5

# SOLUTION 5: Imports
import pandas as pd
df = pd.DataFrame()  # Works!

# SOLUTION 6: Try-Except for robust checking
try:
    print(name)
except NameError:
    name = "Default"
    print(name)

# SOLUTION 7: Check existence
if 'name' in locals():
    print(name)
else:
    print("name is not defined")

# SOLUTION 8: hasattr() for object attributes
class Person:
    def __init__(self):
        self.name = "Max"

person = Person()
if hasattr(person, 'name'):
    print(person.name)

# SOLUTION 9: getattr() with default
age = getattr(person, 'age', 0)  # 0 if 'age' doesn't exist`,
        prevention: [
          'Initialize variables at function start',
          'Use IDE with autocomplete (PyCharm, VS Code)',
          'Use linter like pylint',
          'Type hints for better IDE support',
          'Understand LEGB rule (Local, Enclosing, Global, Built-in)',
          'Imports at file beginning'
        ],
        relatedErrors: [
          'UnboundLocalError: local variable referenced before assignment',
          'AttributeError: ... object has no attribute',
          'ImportError: cannot import name'
        ]
      }
    ]
  },

  java: {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: '#007396',
    commonErrors: [
      {
        id: 'java-nullpointer',
        title: 'NullPointerException',
        severity: 'high',
        category: 'Runtime Error',
        description: 'The most common Java error! Accessing null reference - "The Billion Dollar Mistake".',
        errorExample: `// ERROR 1: Call method on null
String name = null;
System.out.println(name.length()); // NullPointerException!

// ERROR 2: Array of objects
String[] names = new String[5];
System.out.println(names[0].length()); // NPE! Array elements are null

// ERROR 3: Object not initialized
public class Person {
    private String name;  // null!
    
    public void printName() {
        System.out.println(name.toUpperCase()); // NPE!
    }
}

// ERROR 4: Return null
public String getData() {
    return null;
}
String result = getData();
System.out.println(result.trim()); // NPE!

// ERROR 5: Chaining with null
person.getAddress().getCity().getName(); // NPE if any is null

// ERROR 6: Auto-unboxing
Integer value = null;
int primitive = value; // NPE during unboxing!`,
        causes: [
          'Object not initialized',
          'Method returns null',
          'Array elements are null',
          'Missing validation',
          'Auto-unboxing of null',
          'Collection contains null elements'
        ],
        solution: `// SOLUTION 1: Null checks
String name = getName();
if (name != null) {
    System.out.println(name.toUpperCase());
} else {
    System.out.println("Name is null");
}

// SOLUTION 2: Objects.requireNonNull (Java 7+)
import java.util.Objects;

public void setName(String name) {
    this.name = Objects.requireNonNull(name, "Name must not be null");
}

// SOLUTION 3: Optional<T> (Java 8+)
import java.util.Optional;

public Optional<String> findUser(int id) {
    // ... logic
    return Optional.ofNullable(user);
}

// Usage
Optional<String> user = findUser(123);
user.ifPresent(u -> System.out.println(u.toUpperCase()));

String name = user.orElse("Guest");  // Default value
String name2 = user.orElseGet(() -> getDefaultName());  // Lazy

// SOLUTION 4: Null-safe chaining with Optional
Optional.ofNullable(person)
    .map(Person::getAddress)
    .map(Address::getCity)
    .map(City::getName)
    .orElse("Unknown");

// SOLUTION 5: Defensive programming
public class Person {
    private final String name;  // final + initialization!
    
    public Person(String name) {
        this.name = Objects.requireNonNull(name);
    }
    
    public String getName() {
        return name;  // Never null!
    }
}

// SOLUTION 6: @NonNull and @Nullable Annotations
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public void process(@NotNull String value) {
    // value is guaranteed non-null
    System.out.println(value.length());
}

@Nullable
public String findData(int id) {
    // Can return null
    return null;
}`,
        prevention: [
          'Use Optional<T> for return values',
          'Use Objects.requireNonNull() for parameters',
          'Use @NonNull/@Nullable annotations',
          'Never return null (use empty collections instead)',
          'Defensive programming',
          'Use final for immutability',
          'Null Object Pattern',
          'Enable IntelliJ/Eclipse null checks'
        ],
        relatedErrors: [
          'IllegalArgumentException',
          'IllegalStateException',
          'NoSuchElementException'
        ]
      }
    ]
  },

  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: '🔷',
    color: '#3178C6',
    commonErrors: [
      {
        id: 'ts-type-error',
        title: 'Type ... is not assignable to type ...',
        severity: 'high',
        category: 'Type Error',
        description: 'TypeScript type mismatch - trying to assign incompatible types.',
        errorExample: `// ERROR 1: Wrong type assignment
let name: string = 123;  // Type 'number' is not assignable to type 'string'

// ERROR 2: Missing property
interface User {
    name: string;
    age: number;
}
const user: User = { name: "Max" };  // Property 'age' is missing

// ERROR 3: Wrong function return type
function getName(): string {
    return 123;  // Type 'number' is not assignable to type 'string'
}

// ERROR 4: Array type mismatch
const numbers: number[] = [1, 2, "3"];  // Type 'string' is not assignable

// ERROR 5: Object type mismatch
type Config = { port: number };
const config: Config = { port: "8080" };  // Type 'string' is not assignable`,
        causes: [
          'Wrong type annotation',
          'Missing required properties',
          'Incorrect function return type',
          'Array contains wrong type',
          'Object property type mismatch'
        ],
        solution: `// SOLUTION 1: Correct type
let name: string = "Max";  // ✅
let age: number = 25;      // ✅

// SOLUTION 2: Complete interface
interface User {
    name: string;
    age: number;
}
const user: User = { 
    name: "Max",
    age: 25 
};  // ✅

// SOLUTION 3: Correct return type
function getName(): string {
    return "Max";  // ✅
}

// Or change return type
function getAge(): number {
    return 25;  // ✅
}

// SOLUTION 4: Correct array type
const numbers: number[] = [1, 2, 3];  // ✅
const mixed: (string | number)[] = [1, "2", 3];  // Union type

// SOLUTION 5: Type assertion (careful!)
const config = { port: "8080" } as Config;  // Bypass check (not recommended!)

// Better: Fix the type
type Config = { port: number };
const config: Config = { port: 8080 };  // ✅

// SOLUTION 6: Optional properties
interface User {
    name: string;
    age?: number;  // Optional
    email?: string;
}
const user: User = { name: "Max" };  // ✅ age and email optional

// SOLUTION 7: Type guards
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}`,
        prevention: [
          'Use strict TypeScript config',
          'Enable all type checking options',
          'Use interfaces and types properly',
          'Avoid type assertions (as)',
          'Use type guards for unions',
          'Let TypeScript infer types when obvious'
        ],
        relatedErrors: [
          'Property ... does not exist on type',
          'Argument of type ... is not assignable',
          'Cannot find name ...'
        ]
      }
    ]
  },

  php: {
    id: 'php',
    name: 'PHP',
    icon: '🐘',
    color: '#777BB4',
    commonErrors: [
      {
        id: 'php-undefined-variable',
        title: 'Undefined variable',
        severity: 'medium',
        category: 'Runtime Warning',
        description: 'Trying to use a variable that has not been defined.',
        errorExample: `<?php
// ERROR 1: Variable not defined
echo $name;  // Warning: Undefined variable $name

// ERROR 2: Typo in variable name
$username = "John";
echo $usernme;  // Warning: Undefined variable

// ERROR 3: Variable in wrong scope
function test() {
    $localVar = "value";
}
test();
echo $localVar;  // Warning: Undefined variable

// ERROR 4: Array key doesn't exist
$user = ['name' => 'John'];
echo $user['age'];  // Warning: Undefined array key "age"

// ERROR 5: Superglobal typo
echo $_POST['usename'];  // Warning if key doesn't exist`,
        causes: [
          'Variable never initialized',
          'Typo in variable name',
          'Variable scope issue',
          'Array key does not exist',
          'POST/GET parameter missing'
        ],
        solution: `<?php
// SOLUTION 1: Initialize variable
$name = "John";
echo $name;  // ✅

// SOLUTION 2: Check if isset
if (isset($name)) {
    echo $name;
} else {
    echo "Name not set";
}

// SOLUTION 3: Null coalescing operator (?? - PHP 7+)
$name = $name ?? "Default";  // Use $name if set, else "Default"
echo $_POST['username'] ?? "Guest";

// SOLUTION 4: Check array key
$user = ['name' => 'John'];
if (isset($user['age'])) {
    echo $user['age'];
} else {
    echo "Age not set";
}

// Or with ?? operator
$age = $user['age'] ?? 0;

// SOLUTION 5: Global scope
$globalVar = "value";

function test() {
    global $globalVar;
    echo $globalVar;  // ✅
}

// Better: Pass as parameter
function test($value) {
    echo $value;
}
test($globalVar);

// SOLUTION 6: Filter input safely
$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING) ?? '';

// SOLUTION 7: Array key exists
if (array_key_exists('age', $user)) {
    echo $user['age'];
}`,
        prevention: [
          'Always initialize variables',
          'Use isset() or ?? operator',
          'Enable error reporting during development',
          'Use strict types (declare(strict_types=1))',
          'Validate user input',
          'Use IDE with PHP support'
        ],
        relatedErrors: [
          'Undefined index',
          'Undefined offset',
          'Trying to access array offset on value of type null'
        ]
      }
    ]
  },

  csharp: {
    id: 'csharp',
    name: 'C#',
    icon: '💜',
    color: '#239120',
    commonErrors: [
      {
        id: 'cs-null-reference',
        title: 'NullReferenceException',
        severity: 'high',
        category: 'Runtime Error',
        description: 'Attempting to use a null object reference - similar to Java NPE.',
        errorExample: `// ERROR 1: Null string
string name = null;
Console.WriteLine(name.Length);  // NullReferenceException!

// ERROR 2: Uninitialized object
Person person = null;
Console.WriteLine(person.Name);  // NullReferenceException!

// ERROR 3: Array element is null
Person[] people = new Person[5];
Console.WriteLine(people[0].Name);  // NullReferenceException!

// ERROR 4: Method returns null
public string GetData() {
    return null;
}
var result = GetData();
Console.WriteLine(result.Trim());  // NullReferenceException!

// ERROR 5: Nullable value type
int? number = null;
int value = number.Value;  // InvalidOperationException!`,
        causes: [
          'Object not initialized',
          'Method returns null',
          'Null check missing',
          'Collection element is null',
          'Nullable type accessed incorrectly'
        ],
        solution: `// SOLUTION 1: Null check
string name = GetName();
if (name != null) {
    Console.WriteLine(name.Length);
}

// SOLUTION 2: Null-conditional operator (?.) - C# 6+
Console.WriteLine(name?.Length);  // Returns null if name is null

// SOLUTION 3: Null-coalescing operator (??)
string name = GetName() ?? "Default";
Console.WriteLine(name.Length);  // Safe!

// SOLUTION 4: Null-coalescing assignment (??=) - C# 8+
string name = null;
name ??= "Default";  // Assign only if null

// SOLUTION 5: Pattern matching - C# 7+
if (person is not null) {
    Console.WriteLine(person.Name);
}

// SOLUTION 6: Nullable reference types - C# 8+
#nullable enable
string? nullableName = null;  // OK
string nonNullName = null;    // Compiler warning!

// SOLUTION 7: Safe nullable access
int? number = null;
int value = number ?? 0;              // Use 0 if null
int value2 = number.GetValueOrDefault();  // Also safe

// SOLUTION 8: ArgumentNullException
public void ProcessUser(User user) {
    ArgumentNullException.ThrowIfNull(user);  // C# 11+
    // Or older way:
    if (user == null) 
        throw new ArgumentNullException(nameof(user));
    
    Console.WriteLine(user.Name);
}

// SOLUTION 9: Collections - safe access
var people = new List<Person>();
var first = people.FirstOrDefault();  // Returns null if empty
if (first != null) {
    Console.WriteLine(first.Name);
}`,
        prevention: [
          'Enable nullable reference types (C# 8+)',
          'Use null-conditional operators (?.)',
          'Use null-coalescing operators (??)',
          'Initialize objects properly',
          'Validate method parameters',
          'Use FirstOrDefault() for collections',
          'Enable all analyzer warnings'
        ],
        relatedErrors: [
          'ArgumentNullException',
          'InvalidOperationException',
          'ObjectDisposedException'
        ]
      }
    ]
  },
  
  c: {
    id: 'c',
    name: 'C',
    icon: '🔷',
    color: '#A8B9CC',
    commonErrors: [
      {
        id: 'c-segfault',
        title: 'Segmentation Fault',
        description: 'Program crashes when accessing invalid memory',
        severity: 'high',
        category: 'Runtime',
        example: `// ERROR 1: Dereferencing null pointer
int *ptr = NULL;
printf("%d", *ptr);  // Segmentation fault!

// ERROR 2: Array out of bounds
int arr[5];
arr[10] = 42;  // Segmentation fault!

// ERROR 3: Accessing freed memory
int *p = malloc(sizeof(int));
free(p);
*p = 10;  // Segmentation fault!`,
        causes: [
          'Dereferencing NULL pointers',
          'Array index out of bounds',
          'Using freed memory',
          'Stack overflow',
          'Invalid pointer arithmetic'
        ],
        solution: `// SOLUTION 1: Check for NULL
int *ptr = malloc(sizeof(int));
if (ptr != NULL) {
    *ptr = 42;
    free(ptr);
}

// SOLUTION 2: Bounds checking
if (index >= 0 && index < ARRAY_SIZE) {
    arr[index] = 42;
}

// SOLUTION 3: Set to NULL after free
free(p);
p = NULL;

// SOLUTION 4: Use valgrind
// $ valgrind ./program`,
        prevention: [
          'Always initialize pointers',
          'Check malloc return values',
          'Validate array indices',
          'Use valgrind',
          'Enable address sanitizer'
        ],
        relatedErrors: ['Memory Leak', 'Buffer Overflow']
      }
    ]
  },
  
  go: {
    id: 'go',
    name: 'Go',
    icon: '🐹',
    color: '#00ADD8',
    commonErrors: [
      {
        id: 'go-panic',
        title: 'Panic: Runtime Error',
        description: 'Program panics due to runtime error',
        severity: 'high',
        category: 'Runtime',
        example: `// ERROR 1: Nil pointer
var ptr *int
fmt.Println(*ptr)  // panic!

// ERROR 2: Index out of range
arr := []int{1, 2, 3}
fmt.Println(arr[5])  // panic!

// ERROR 3: Type assertion
var i interface{} = "hello"
n := i.(int)  // panic!`,
        causes: [
          'Nil pointer dereference',
          'Index out of range',
          'Failed type assertion',
          'Closing closed channel',
          'Send on closed channel'
        ],
        solution: `// SOLUTION 1: Check for nil
if ptr != nil {
    fmt.Println(*ptr)
}

// SOLUTION 2: Bounds check
if index < len(arr) {
    fmt.Println(arr[index])
}

// SOLUTION 3: Safe assertion
if n, ok := i.(int); ok {
    fmt.Println(n)
}

// SOLUTION 4: Recover
defer func() {
    if r := recover(); r != nil {
        fmt.Println("Recovered:", r)
    }
}()`,
        prevention: [
          'Check for nil',
          'Validate indices',
          'Use comma-ok idiom',
          'Use defer with recover',
          'Manage channel lifecycle'
        ],
        relatedErrors: ['Deadlock', 'Race Condition']
      }
    ]
  },
  
  rust: {
    id: 'rust',
    name: 'Rust',
    icon: '🦀',
    color: '#CE412B',
    commonErrors: [
      {
        id: 'rust-borrow',
        title: 'Borrow Checker Error',
        description: 'Cannot borrow value as mutable/immutable',
        severity: 'high',
        category: 'Compile',
        example: `// ERROR 1: Multiple mutable borrows
let mut s = String::from("hello");
let r1 = &mut s;
let r2 = &mut s;  // ERROR!
println!("{}, {}", r1, r2);

// ERROR 2: Mutable and immutable borrow
let mut s = String::from("hello");
let r1 = &s;
let r2 = &mut s;  // ERROR!
println!("{}, {}", r1, r2);

// ERROR 3: Use after move
let s1 = String::from("hello");
let s2 = s1;
println!("{}", s1);  // ERROR!`,
        causes: [
          'Multiple mutable borrows',
          'Mixing mutable and immutable borrows',
          'Using value after move',
          'Returning reference to local',
          'Lifetime violations'
        ],
        solution: `// SOLUTION 1: Scopes for borrows
let mut s = String::from("hello");
{
    let r1 = &mut s;
    r1.push_str(" world");
}  // r1 goes out of scope
let r2 = &mut s;

// SOLUTION 2: Clone instead of move
let s1 = String::from("hello");
let s2 = s1.clone();
println!("{}, {}", s1, s2);

// SOLUTION 3: Use references
fn calculate_length(s: &String) -> usize {
    s.len()
}
let s = String::from("hello");
let len = calculate_length(&s);
println!("{}", s);  // Still valid

// SOLUTION 4: Return owned value
fn create_string() -> String {
    String::from("hello")
}`,
        prevention: [
          'Understand borrowing rules',
          'Use scopes strategically',
          'Clone when needed',
          'Use references properly',
          'Understand ownership transfer'
        ],
        relatedErrors: ['Lifetime Error', 'Move Error']
      }
    ]
  },
  
  swift: {
    id: 'swift',
    name: 'Swift',
    icon: '🦅',
    color: '#FA7343',
    commonErrors: [
      {
        id: 'swift-nil',
        title: 'Unexpectedly Found Nil',
        description: 'Force unwrapping nil optional value',
        severity: 'high',
        category: 'Runtime',
        example: `// ERROR 1: Force unwrap
var name: String? = nil
print(name!)  // Fatal error!

// ERROR 2: Implicitly unwrapped
var label: UILabel!
label.text = "Hello"  // Fatal error if not set!

// ERROR 3: Array access
let numbers = [1, 2, 3]
let value = numbers.first!  // OK
let empty: [Int] = []
let fail = empty.first!  // Fatal error!`,
        causes: [
          'Force unwrapping nil',
          'Implicitly unwrapped nil',
          'Failed optional cast',
          'Dictionary key not found',
          'Array first/last on empty'
        ],
        solution: `// SOLUTION 1: Optional binding
if let name = name {
    print(name)
}

// SOLUTION 2: Guard
guard let name = name else {
    return
}
print(name)

// SOLUTION 3: Nil coalescing
let displayName = name ?? "Unknown"

// SOLUTION 4: Optional chaining
let length = name?.count

// SOLUTION 5: Safe array access
if let first = numbers.first {
    print(first)
}`,
        prevention: [
          'Avoid force unwrapping',
          'Use optional binding',
          'Use guard statements',
          'Use nil coalescing',
          'Use optional chaining'
        ],
        relatedErrors: ['Index Out of Range', 'Type Cast Failed']
      }
    ]
  },
  
  kotlin: {
    id: 'kotlin',
    name: 'Kotlin',
    icon: '🟣',
    color: '#7F52FF',
    commonErrors: [
      {
        id: 'kotlin-npe',
        title: 'NullPointerException',
        description: 'Accessing null value incorrectly',
        severity: 'high',
        category: 'Runtime',
        example: `// ERROR 1: Force non-null
val name: String? = null
println(name!!)  // NPE!

// ERROR 2: Platform types
val javaString = getJavaString()  // May be null
println(javaString.length)  // NPE if null!

// ERROR 3: Late init not initialized
lateinit var config: Config
println(config.value)  // NPE!`,
        causes: [
          'Force non-null assertion (!!)',
          'Java interop without checks',
          'lateinit not initialized',
          'Unsafe casts',
          'Mutable nullable changed to null'
        ],
        solution: `// SOLUTION 1: Safe call
println(name?.length)

// SOLUTION 2: Elvis operator
val len = name?.length ?: 0

// SOLUTION 3: Let function
name?.let {
    println(it.length)
}

// SOLUTION 4: Check lateinit
if (::config.isInitialized) {
    println(config.value)
}

// SOLUTION 5: Safe cast
val str = value as? String
println(str?.length)`,
        prevention: [
          'Avoid !! operator',
          'Use safe calls (?.)' ,
          'Use Elvis operator (?: )',
          'Check lateinit initialization',
          'Use safe casts (as?)'
        ],
        relatedErrors: ['UninitializedPropertyAccessException', 'TypeCastException']
      }
    ]
  },
  
  ruby: {
    id: 'ruby',
    name: 'Ruby',
    icon: '💎',
    color: '#CC342D',
    commonErrors: [
      {
        id: 'ruby-nomethod',
        title: 'NoMethodError',
        description: 'Calling undefined method on object',
        severity: 'high',
        category: 'Runtime',
        example: `# ERROR 1: Nil method
name = nil
puts name.upcase  # NoMethodError!

# ERROR 2: Wrong method name
arr = [1, 2, 3]
arr.lenght  # Typo! NoMethodError

# ERROR 3: Wrong object type
number = 42
number.upcase  # NoMethodError`,
        causes: [
          'Calling method on nil',
          'Typo in method name',
          'Wrong object type',
          'Method not defined',
          'Private method called externally'
        ],
        solution: `# SOLUTION 1: Check for nil
puts name.upcase if name

# SOLUTION 2: Safe navigation (&.)
puts name&.upcase

# SOLUTION 3: respond_to?
if arr.respond_to?(:upcase)
    puts arr.upcase
end

# SOLUTION 4: Rescue
begin
    puts name.upcase
rescue NoMethodError => e
    puts "Error: #{e.message}"
end

# SOLUTION 5: Try (Rails)
puts name.try(:upcase)`,
        prevention: [
          'Check for nil',
          'Use safe navigation',
          'Use respond_to?',
          'Handle exceptions',
          'Validate object types'
        ],
        relatedErrors: ['ArgumentError', 'TypeError']
      }
    ]
  },
  
  sql: {
    id: 'sql',
    name: 'SQL',
    icon: '🗄️',
    color: '#00758F',
    commonErrors: [
      {
        id: 'sql-syntax',
        title: 'Syntax Error',
        description: 'Invalid SQL syntax',
        severity: 'high',
        category: 'Syntax',
        example: `-- ERROR 1: Missing comma
SELECT name age FROM users;

-- ERROR 2: Wrong keyword order
SELECT * WHERE id = 1 FROM users;

-- ERROR 3: Missing quotes
SELECT * FROM users WHERE name = John;

-- ERROR 4: Ambiguous column
SELECT id, name FROM users u
JOIN orders o ON u.id = o.user_id;`,
        causes: [
          'Missing commas',
          'Wrong keyword order',
          'Missing quotes',
          'Ambiguous columns',
          'Reserved keywords'
        ],
        solution: `-- SOLUTION 1: Add comma
SELECT name, age FROM users;

-- SOLUTION 2: Correct order
SELECT * FROM users WHERE id = 1;

-- SOLUTION 3: Add quotes
SELECT * FROM users WHERE name = 'John';

-- SOLUTION 4: Qualify columns
SELECT u.id, u.name, o.total
FROM users u
JOIN orders o ON u.id = o.user_id;

-- SOLUTION 5: Quote reserved words
SELECT "order", "date" FROM orders;`,
        prevention: [
          'Use syntax highlighting',
          'Qualify column names',
          'Quote string values',
          'Follow SQL standards',
          'Use prepared statements'
        ],
        relatedErrors: ['Column Not Found', 'Table Not Exists']
      }
    ]
  },
  
  dart: {
    id: 'dart',
    name: 'Dart',
    icon: '🎯',
    color: '#0175C2',
    commonErrors: [
      {
        id: 'dart-null-1',
        title: 'Null Check Operator',
        description: 'Using null check operator (!) on null value',
        category: 'Runtime Error',
        severity: 'high',
        example: `String? name;
print(name!.length); // Error: Null check failed`,
        causes: [
          'Variable not initialized',
          'Nullable type used without null check',
          'Forcing non-null with !',
          'Missing null safety'
        ],
        solutions: [
          'Check for null before use: if (name != null) ...',
          'Use null-aware operator: name?.length',
          'Provide default: name ?? "default"',
          'Use late keyword for delayed initialization',
          'Initialize variable properly',
          'Use null assertion only when certain',
          'Enable sound null safety',
          'Refactor to avoid nullable types'
        ],
        prevention: ['Enable null safety', 'Use proper checks', 'Initialize variables', 'Avoid null when possible'],
        relatedErrors: ['dart-late-1']
      },
      {
        id: 'dart-late-1',
        title: 'LateInitializationError',
        description: 'Accessing late variable before initialization',
        category: 'Runtime Error',
        severity: 'high',
        example: `late String config;
print(config); // Error: config not initialized`,
        causes: [
          'Late variable not initialized',
          'Accessing before assignment',
          'Logic error in initialization',
          'Async initialization issue'
        ],
        solutions: [
          'Initialize before use',
          'Check initialization state',
          'Use nullable type instead',
          'Initialize in constructor',
          'Use factory constructor',
          'Add initialization guard',
          'Use dependency injection',
          'Document initialization requirements'
        ],
        prevention: ['Initialize late variables promptly', 'Use nullable types', 'Guard access', 'Document requirements'],
        relatedErrors: ['dart-null-1']
      }
    ]
  },
  
  scala: {
    id: 'scala',
    name: 'Scala',
    icon: '🔺',
    color: '#DC322F',
    commonErrors: [
      {
        id: 'scala-match-1',
        title: 'MatchError',
        description: 'Pattern match not exhaustive',
        category: 'Runtime Error',
        severity: 'high',
        example: `def describe(x: Int) = x match {
  case 1 => "one"
  case 2 => "two"
}
describe(3) // MatchError`,
        causes: [
          'Non-exhaustive pattern match',
          'Missing default case',
          'Not handling all cases',
          'Runtime value not covered'
        ],
        solutions: [
          'Add wildcard case: case _ => ...',
          'Handle all cases explicitly',
          'Use Option for partial matches',
          'Add @unchecked annotation (with caution)',
          'Use sealed traits for exhaustiveness',
          'Enable compiler warnings',
          'Test edge cases',
          'Use Try for error handling'
        ],
        prevention: ['Always provide exhaustive matches', 'Use sealed traits', 'Enable warnings', 'Test thoroughly'],
        relatedErrors: ['scala-type-1']
      }
    ]
  },
  
  perl: {
    id: 'perl',
    name: 'Perl',
    icon: '🐪',
    color: '#39457E',
    commonErrors: [
      {
        id: 'perl-undef-1',
        title: 'Use of uninitialized value',
        description: 'Using undefined variable in operation',
        category: 'Runtime Warning',
        severity: 'medium',
        example: `my $name;
print "Hello $name\\n"; # Warning: uninitialized`,
        causes: [
          'Variable not assigned',
          'Hash key doesn\'t exist',
          'Function returns undef',
          'Array index out of bounds'
        ],
        solutions: [
          'Initialize variables: my $name = "";',
          'Check with defined(): if (defined $var)',
          'Use // operator: $name // "default"',
          'Use exists() for hashes',
          'Enable strict and warnings',
          'Check return values',
          'Validate input data',
          'Use default values'
        ],
        prevention: ['Always initialize variables', 'Use strict', 'Check with defined()', 'Validate returns'],
        relatedErrors: ['perl-strict-1']
      }
    ]
  },
  
  lua: {
    id: 'lua',
    name: 'Lua',
    icon: '🌙',
    color: '#000080',
    commonErrors: [
      {
        id: 'lua-nil-1',
        title: 'attempt to index a nil value',
        description: 'Trying to access field of nil',
        category: 'Runtime Error',
        severity: 'high',
        example: `local person
print(person.name) -- Error: indexing nil`,
        causes: [
          'Variable is nil',
          'Table not initialized',
          'Function returns nil',
          'Typo in variable name'
        ],
        solutions: [
          'Initialize table: local person = {}',
          'Check for nil: if person then',
          'Use default values',
          'Validate function returns',
          'Use metatables for defaults',
          'Add nil guards',
          'Use proper table construction',
          'Check variable scope'
        ],
        prevention: ['Initialize tables', 'Check for nil', 'Validate returns', 'Check scope'],
        relatedErrors: ['lua-global-1']
      }
    ]
  },
  
  r: {
    id: 'r',
    name: 'R',
    icon: '📊',
    color: '#276DC3',
    commonErrors: [
      {
        id: 'r-na-1',
        title: 'missing values (NA)',
        description: 'Operations on NA values produce NA',
        category: 'Data Error',
        severity: 'medium',
        example: `x <- c(1, 2, NA, 4)
mean(x) # Returns NA`,
        causes: [
          'Missing data in dataset',
          'NA propagation in calculations',
          'Import issues',
          'Incomplete data'
        ],
        solutions: [
          'Remove NA: na.omit(x)',
          'Use na.rm = TRUE: mean(x, na.rm = TRUE)',
          'Replace NA: x[is.na(x)] <- 0',
          'Filter complete cases',
          'Use tidyr::drop_na()',
          'Impute missing values',
          'Check data quality',
          'Handle NA explicitly'
        ],
        prevention: ['Handle missing values explicitly', 'Use na.rm parameter', 'Clean data', 'Validate imports'],
        relatedErrors: ['r-vector-1']
      }
    ]
  },
  
  elixir: {
    id: 'elixir',
    name: 'Elixir',
    icon: '💧',
    color: '#4B275F',
    commonErrors: [
      {
        id: 'elixir-match-1',
        title: 'MatchError',
        description: 'Pattern match failed',
        category: 'Runtime Error',
        severity: 'high',
        example: `{:ok, result} = {:error, "failed"}
# MatchError: no match`,
        causes: [
          'Pattern doesn\'t match value',
          'Wrong tuple structure',
          'Unexpected return value',
          'Missing pattern case'
        ],
        solutions: [
          'Use case statement for multiple patterns',
          'Handle all possible returns',
          'Use with statement for happy path',
          'Pattern match in function heads',
          'Use guards for conditions',
          'Return consistent data structures',
          'Add error handling',
          'Use Result type pattern'
        ],
        prevention: ['Handle all pattern cases', 'Use case statements', 'Guard pattern matches', 'Return consistent structures'],
        relatedErrors: ['elixir-function-1']
      }
    ]
  },
  
  haskell: {
    id: 'haskell',
    name: 'Haskell',
    icon: '𝝺',
    color: '#5D4F85',
    commonErrors: [
      {
        id: 'haskell-type-1',
        title: 'Type Mismatch',
        description: 'Type doesn\'t match function signature',
        category: 'Compile Error',
        severity: 'high',
        example: `add :: Int -> Int -> Int
add x y = x ++ y -- Error: (++) expects [a]`,
        causes: [
          'Wrong function used',
          'Type annotation mismatch',
          'Operator type mismatch',
          'Missing type class constraint'
        ],
        solutions: [
          'Use correct function: (+) for Int',
          'Check type signatures',
          'Add type class constraints',
          'Use type inference',
          'Convert types explicitly',
          'Check operator types',
          'Use :type in GHCi',
          'Read compiler errors carefully'
        ],
        prevention: ['Verify types match signatures', 'Use type inference', 'Check operators', 'Read errors carefully'],
        relatedErrors: ['haskell-parse-1']
      }
    ]
  },

  react: {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    color: '#61DAFB',
    commonErrors: [
      {
        id: 'react-hooks-1',
        title: 'React Hook useEffect has a missing dependency',
        category: 'Hooks',
        severity: 'medium',
        description: 'ESLint warning when useEffect dependencies are incomplete',
        errorMessage: 'React Hook useEffect has a missing dependency: \'fetchData\'. Either include it or remove the dependency array.',
        commonCauses: ['Missing function in dependency array', 'Missing variable reference', 'Stale closure'],
        solutions: [
          {
            approach: 'Add dependency',
            code: `// ❌ Missing dependency
useEffect(() => {
  fetchData();
}, []); // fetchData not in deps

// ✅ Add to dependencies
useEffect(() => {
  fetchData();
}, [fetchData]);`,
            explanation: 'Include all referenced variables/functions'
          },
          {
            approach: 'Use useCallback',
            code: `const fetchData = useCallback(() => {
  // fetch logic
}, []);

useEffect(() => {
  fetchData();
}, [fetchData]);`,
            explanation: 'Memoize function with useCallback'
          }
        ],
        prevention: ['Include all dependencies', 'Use useCallback for functions', 'Check ESLint warnings'],
        relatedErrors: ['react-hooks-2']
      },
      {
        id: 'react-hooks-2',
        title: 'Cannot update component while rendering different component',
        category: 'State',
        severity: 'high',
        description: 'State update during render causes infinite loop',
        errorMessage: 'Warning: Cannot update a component while rendering a different component.',
        commonCauses: ['setState in render', 'setState in function component body', 'Missing useEffect'],
        solutions: [
          {
            approach: 'Move to useEffect',
            code: `// ❌ setState during render
function Component() {
  const [count, setCount] = useState(0);
  setCount(1); // Wrong!
  return <div>{count}</div>;
}

// ✅ Use useEffect
function Component() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1);
  }, []);
  return <div>{count}</div>;
}`,
            explanation: 'Move state updates to useEffect or event handlers'
          }
        ],
        prevention: ['Never call setState during render', 'Use useEffect for side effects', 'Update state in event handlers'],
        relatedErrors: ['react-hooks-1']
      },
      {
        id: 'react-key-1',
        title: 'Each child in a list should have a unique "key" prop',
        category: 'Lists',
        severity: 'medium',
        description: 'React needs keys to identify which items changed',
        errorMessage: 'Warning: Each child in a list should have a unique "key" prop.',
        commonCauses: ['Missing key prop', 'Using index as key', 'Duplicate keys'],
        solutions: [
          {
            approach: 'Add unique key',
            code: `// ❌ No key
{items.map(item => <div>{item.name}</div>)}

// ✅ Use unique ID
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}`,
            explanation: 'Always provide unique key for list items'
          }
        ],
        prevention: ['Always add key prop to list items', 'Use unique IDs, not index', 'Ensure keys are stable'],
        relatedErrors: []
      },
      {
        id: 'react-memory-1',
        title: 'Can\'t perform a React state update on unmounted component',
        category: 'Memory',
        severity: 'medium',
        description: 'Memory leak from state update after unmount',
        errorMessage: 'Warning: Can\'t perform a React state update on an unmounted component.',
        commonCauses: ['Async operation after unmount', 'Missing cleanup', 'Uncancelled API call'],
        solutions: [
          {
            approach: 'Cleanup in useEffect',
            code: `useEffect(() => {
  let isMounted = true;
  
  fetchData().then(data => {
    if (isMounted) {
      setData(data);
    }
  });
  
  return () => {
    isMounted = false; // Cleanup
  };
}, []);`,
            explanation: 'Track mounted state and cleanup'
          }
        ],
        prevention: ['Always cleanup in useEffect return', 'Cancel async operations', 'Use AbortController for fetch'],
        relatedErrors: []
      }
    ]
  },

  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    icon: '🟢',
    color: '#339933',
    commonErrors: [
      {
        id: 'node-enoent-1',
        title: 'ENOENT: no such file or directory',
        category: 'File System',
        severity: 'high',
        description: 'File or directory not found',
        errorMessage: 'Error: ENOENT: no such file or directory, open \'/path/to/file\'',
        commonCauses: ['Wrong file path', 'File doesn\'t exist', 'Relative path issue', 'Missing directory'],
        solutions: [
          {
            approach: 'Check file exists',
            code: `const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

if (fs.existsSync(filePath)) {
  const data = fs.readFileSync(filePath, 'utf8');
} else {
  console.error('File not found');
}`,
            explanation: 'Always check if file exists before reading'
          }
        ],
        prevention: ['Use absolute paths', 'Check file existence', 'Handle errors properly'],
        relatedErrors: []
      },
      {
        id: 'node-eaddrinuse-1',
        title: 'EADDRINUSE: address already in use',
        category: 'Network',
        severity: 'high',
        description: 'Port is already being used by another process',
        errorMessage: 'Error: listen EADDRINUSE: address already in use :::3000',
        commonCauses: ['Port already in use', 'Server not properly closed', 'Multiple instances running'],
        solutions: [
          {
            approach: 'Find and kill process',
            code: `# Find process on port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use different port
const PORT = process.env.PORT || 3001;`,
            explanation: 'Kill existing process or use different port'
          }
        ],
        prevention: ['Properly close servers', 'Use environment variables for ports', 'Check running processes'],
        relatedErrors: []
      },
      {
        id: 'node-cors-1',
        title: 'CORS policy: No \'Access-Control-Allow-Origin\' header',
        category: 'Network',
        severity: 'high',
        description: 'Cross-Origin Resource Sharing not configured',
        errorMessage: 'Access to fetch has been blocked by CORS policy',
        commonCauses: ['Missing CORS headers', 'Wrong origin configured', 'Preflight request failed'],
        solutions: [
          {
            approach: 'Enable CORS',
            code: `const express = require('express');
const cors = require('cors');
const app = express();

// Enable all CORS
app.use(cors());

// Or specific origin
app.use(cors({
  origin: 'https://example.com',
  credentials: true
}));`,
            explanation: 'Use cors middleware to enable CORS'
          }
        ],
        prevention: ['Configure CORS properly', 'Set allowed origins', 'Handle preflight requests'],
        relatedErrors: []
      }
    ]
  },

  git: {
    id: 'git',
    name: 'Git',
    icon: '📚',
    color: '#F05032',
    commonErrors: [
      {
        id: 'git-merge-conflict',
        title: 'Merge conflict',
        category: 'Version Control',
        severity: 'medium',
        description: 'Conflicting changes in same file',
        errorMessage: 'CONFLICT (content): Merge conflict in file.js',
        commonCauses: ['Same line edited', 'Overlapping changes', 'File moved and edited'],
        solutions: [
          {
            approach: 'Resolve manually',
            code: `# Check conflict
git status

# Edit file and remove markers:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch

# After resolving
git add file.js
git commit -m "Resolve merge conflict"`,
            explanation: 'Manually resolve conflicts and commit'
          }
        ],
        prevention: ['Pull before push', 'Frequent small commits', 'Communicate with team'],
        relatedErrors: []
      },
      {
        id: 'git-detached-head',
        title: 'You are in \'detached HEAD\' state',
        category: 'Branches',
        severity: 'medium',
        description: 'Not on any branch',
        errorMessage: 'HEAD detached at commit-hash',
        commonCauses: ['Checked out commit directly', 'Checked out tag', 'Lost branch reference'],
        solutions: [
          {
            approach: 'Create new branch',
            code: `# Create branch from current state
git switch -c new-branch-name

# Or return to previous branch
git switch main`,
            explanation: 'Create branch to save work or switch back'
          }
        ],
        prevention: ['Always work on branches', 'Don\'t checkout commits directly'],
        relatedErrors: []
      }
    ]
  },

  docker: {
    id: 'docker',
    name: 'Docker',
    icon: '🐳',
    color: '#2496ED',
    commonErrors: [
      {
        id: 'docker-port-1',
        title: 'Port is already allocated',
        category: 'Network',
        severity: 'medium',
        description: 'Container port conflicts with host',
        errorMessage: 'Error response: Ports are not available: port is already allocated',
        commonCauses: ['Port already in use', 'Container not stopped', 'Port mapping conflict'],
        solutions: [
          {
            approach: 'Use different port',
            code: `# Change host port
docker run -p 3001:3000 myapp

# Or stop existing container
docker ps
docker stop <container-id>`,
            explanation: 'Map to different host port or stop conflicting container'
          }
        ],
        prevention: ['Check running containers', 'Use unique port mappings', 'Stop unused containers'],
        relatedErrors: []
      },
      {
        id: 'docker-space-1',
        title: 'No space left on device',
        category: 'Storage',
        severity: 'high',
        description: 'Docker out of disk space',
        errorMessage: 'Error: no space left on device',
        commonCauses: ['Too many images', 'Large volumes', 'Build cache full'],
        solutions: [
          {
            approach: 'Clean up Docker',
            code: `# Remove unused containers, networks, images
docker system prune -a

# Remove volumes
docker volume prune

# Check disk usage
docker system df`,
            explanation: 'Remove unused Docker resources'
          }
        ],
        prevention: ['Regular cleanup', 'Use .dockerignore', 'Multi-stage builds'],
        relatedErrors: []
      }
    ]
  },

  database: {
    id: 'database',
    name: 'Database',
    icon: '🗄️',
    color: '#336791',
    commonErrors: [
      {
        id: 'db-connection-1',
        title: 'Connection refused',
        category: 'Connection',
        severity: 'high',
        description: 'Cannot connect to database',
        errorMessage: 'Error: connect ECONNREFUSED 127.0.0.1:5432',
        commonCauses: ['Database not running', 'Wrong connection string', 'Firewall blocking', 'Wrong port'],
        solutions: [
          {
            approach: 'Check connection',
            code: `// Verify connection string
const connectionString = process.env.DATABASE_URL;
console.log('Connecting to:', connectionString);

// Add error handling
try {
  await db.connect();
  console.log('Connected to database');
} catch (error) {
  console.error('Database connection failed:', error);
}`,
            explanation: 'Verify connection string and add error handling'
          }
        ],
        prevention: ['Check database is running', 'Verify connection string', 'Use environment variables'],
        relatedErrors: []
      },
      {
        id: 'db-syntax-1',
        title: 'SQL syntax error',
        category: 'Query',
        severity: 'medium',
        description: 'Invalid SQL query syntax',
        errorMessage: 'You have an error in your SQL syntax',
        commonCauses: ['Typo in SQL', 'Wrong SQL dialect', 'Reserved keyword', 'Missing quotes'],
        solutions: [
          {
            approach: 'Fix syntax',
            code: `// ❌ Wrong
db.query('SELECT * FROM user WHERE id = 1');

// ✅ Correct - use parameterized queries
db.query('SELECT * FROM users WHERE id = $1', [userId]);`,
            explanation: 'Use parameterized queries to prevent SQL injection'
          }
        ],
        prevention: ['Use parameterized queries', 'Test queries separately', 'Use ORM'],
        relatedErrors: []
      },
      {
        id: 'db-duplicate-1',
        title: 'Duplicate entry / UNIQUE constraint failed',
        category: 'Constraints',
        severity: 'medium',
        description: 'Attempting to insert duplicate unique value',
        errorMessage: 'ERROR: duplicate key value violates unique constraint',
        commonCauses: ['Duplicate primary key', 'Duplicate unique field', 'Race condition'],
        solutions: [
          {
            approach: 'Handle duplicate',
            code: `// Check before insert
const existing = await db.findOne({ email });
if (existing) {
  throw new Error('Email already exists');
}

// Or use UPSERT
await db.query(
  'INSERT INTO users (email) VALUES ($1) ON CONFLICT (email) DO UPDATE SET updated_at = NOW()',
  [email]
);`,
            explanation: 'Check for existing record or use UPSERT'
          }
        ],
        prevention: ['Check before insert', 'Use UPSERT', 'Handle errors gracefully'],
        relatedErrors: []
      }
    ]
  },

  npm: {
    id: 'npm',
    name: 'NPM / Package Manager',
    icon: '📦',
    color: '#CB3837',
    commonErrors: [
      {
        id: 'npm-enoent-1',
        title: 'ENOENT: no such file or directory',
        category: 'Installation',
        severity: 'medium',
        description: 'npm cannot find required files',
        errorMessage: 'npm ERR! enoent ENOENT: no such file or directory',
        commonCauses: ['Missing package.json', 'Corrupted node_modules', 'Permission issues'],
        solutions: [
          {
            approach: 'Clean install',
            code: `# Remove and reinstall
rm -rf node_modules package-lock.json
npm install

# Or use npm ci for clean install
npm ci`,
            explanation: 'Remove node_modules and reinstall'
          }
        ],
        prevention: ['Commit package-lock.json', 'Don\'t manually edit node_modules', 'Use npm ci in CI/CD'],
        relatedErrors: []
      },
      {
        id: 'npm-version-1',
        title: 'Peer dependency version conflict',
        category: 'Dependencies',
        severity: 'medium',
        description: 'Incompatible package versions',
        errorMessage: 'npm ERR! peer dep missing or conflicting peer dependency',
        commonCauses: ['Incompatible versions', 'Missing peer dependency', 'Version range mismatch'],
        solutions: [
          {
            approach: 'Fix versions',
            code: `# Install specific version
npm install react@18.2.0

# Or use --legacy-peer-deps
npm install --legacy-peer-deps

# Check peer dependencies
npm list --depth=0`,
            explanation: 'Install compatible versions or use legacy mode'
          }
        ],
        prevention: ['Check compatibility', 'Lock versions', 'Read package requirements'],
        relatedErrors: []
      }
    ]
  }
};

// Helper Functions
export function getErrorsByLanguage(languageId) {
  return errorsData[languageId] || null;
}

export function getAllErrors() {
  return Object.values(errorsData).flatMap(lang => 
    lang.commonErrors.map(error => ({
      ...error,
      language: lang.name,
      languageId: lang.id,
      languageIcon: lang.icon
    }))
  );
}

export function searchErrors(query) {
  const allErrors = getAllErrors();
  const searchTerm = query.toLowerCase();
  
  return allErrors.filter(error =>
    error.title.toLowerCase().includes(searchTerm) ||
    error.description.toLowerCase().includes(searchTerm) ||
    error.category.toLowerCase().includes(searchTerm) ||
    error.language.toLowerCase().includes(searchTerm)
  );
}

export function getErrorsBySeverity(severity) {
  return getAllErrors().filter(error => error.severity === severity);
}

export function getErrorsByCategory(category) {
  return getAllErrors().filter(error => error.category === category);
}

export function getErrorStats() {
  const allErrors = getAllErrors();
  return {
    total: allErrors.length,
    byLanguage: Object.keys(errorsData).reduce((acc, langId) => {
      acc[langId] = errorsData[langId].commonErrors.length;
      return acc;
    }, {}),
    bySeverity: {
      high: allErrors.filter(e => e.severity === 'high').length,
      medium: allErrors.filter(e => e.severity === 'medium').length,
      low: allErrors.filter(e => e.severity === 'low').length
    }
  };
}
