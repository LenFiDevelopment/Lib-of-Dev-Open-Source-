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
  },

  css: {
    id: 'css',
    name: 'CSS / Styling',
    icon: '🎨',
    color: '#1572B6',
    commonErrors: [
      {
        id: 'css-flexbox-1',
        title: 'Flexbox not working / Items not aligning',
        category: 'Layout',
        severity: 'medium',
        description: 'Flexbox properties not applying correctly',
        errorMessage: 'Items not aligning as expected',
        commonCauses: ['Missing display: flex', 'Wrong flex direction', 'Conflicting properties'],
        solutions: [
          {
            approach: 'Check flex container',
            code: `/* ❌ Wrong - no display: flex */
.container {
  justify-content: center; /* Won't work! */
}

/* ✅ Correct */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Common flexbox patterns */
.horizontal-center {
  display: flex;
  justify-content: center;
}

.vertical-center {
  display: flex;
  align-items: center;
}

.space-between {
  display: flex;
  justify-content: space-between;
}`,
            explanation: 'Always set display: flex on parent container'
          }
        ],
        prevention: ['Set display: flex first', 'Check parent/child relationship', 'Use browser DevTools'],
        relatedErrors: []
      },
      {
        id: 'css-z-index-1',
        title: 'z-index not working',
        category: 'Positioning',
        severity: 'low',
        description: 'z-index property has no effect',
        errorMessage: 'Element not appearing above others despite z-index',
        commonCauses: ['Missing position property', 'Parent has lower z-index', 'No stacking context'],
        solutions: [
          {
            approach: 'Add position property',
            code: `/* ❌ Won't work - no position */
.element {
  z-index: 999; /* Has no effect! */
}

/* ✅ Correct - needs position */
.element {
  position: relative; /* or absolute, fixed, sticky */
  z-index: 999;
}

/* Modal example */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}`,
            explanation: 'z-index only works with positioned elements'
          }
        ],
        prevention: ['Always set position with z-index', 'Check parent stacking context', 'Use DevTools'],
        relatedErrors: []
      },
      {
        id: 'css-overflow-1',
        title: 'Content overflowing container',
        category: 'Layout',
        severity: 'medium',
        description: 'Text or content breaking out of container',
        errorMessage: 'Content extends beyond container boundaries',
        commonCauses: ['Long words', 'No width constraint', 'Whitespace handling'],
        solutions: [
          {
            approach: 'Add overflow handling',
            code: `/* ❌ Problem - long text breaks container */
.container {
  width: 200px;
}

/* ✅ Solution 1: Word breaking */
.container {
  width: 200px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* ✅ Solution 2: Ellipsis for single line */
.truncate {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ✅ Solution 3: Scrollable */
.scrollable {
  width: 200px;
  overflow: auto;
}`,
            explanation: 'Use overflow properties and word breaking'
          }
        ],
        prevention: ['Set overflow property', 'Use word-wrap', 'Test with long content'],
        relatedErrors: []
      },
      {
        id: 'css-centering-1',
        title: 'Cannot center div / element',
        category: 'Layout',
        severity: 'low',
        description: 'Various centering methods not working',
        errorMessage: 'Element not centered horizontally or vertically',
        commonCauses: ['Wrong method for layout type', 'Missing width', 'Parent constraints'],
        solutions: [
          {
            approach: 'Multiple centering methods',
            code: `/* Method 1: Flexbox (recommended) */
.parent {
  display: flex;
  justify-content: center; /* Horizontal */
  align-items: center;     /* Vertical */
}

/* Method 2: Grid */
.parent {
  display: grid;
  place-items: center; /* Both axes */
}

/* Method 3: Absolute positioning */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Method 4: Margin auto (horizontal only) */
.child {
  width: 200px;
  margin: 0 auto;
}`,
            explanation: 'Choose appropriate centering method for your layout'
          }
        ],
        prevention: ['Use flexbox for most cases', 'Check parent/child relationship', 'Test in DevTools'],
        relatedErrors: ['css-flexbox-1']
      }
    ]
  },

  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    icon: '▲',
    color: '#000000',
    commonErrors: [
      {
        id: 'nextjs-hydration-1',
        title: 'Hydration failed / Text content does not match',
        category: 'SSR',
        severity: 'high',
        description: 'Server-rendered HTML differs from client-side',
        errorMessage: 'Warning: Text content did not match. Server: "..." Client: "..."',
        commonCauses: ['Date/time differences', 'Random values', 'Browser-only APIs', 'Conditional rendering'],
        solutions: [
          {
            approach: 'Use useEffect for client-only',
            code: `// ❌ Wrong - causes hydration mismatch
export default function Component() {
  return <div>{new Date().toLocaleString()}</div>;
}

// ✅ Correct - use useEffect
import { useState, useEffect } from 'react';

export default function Component() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return <div>{new Date().toLocaleString()}</div>;
}

// Or suppress hydration warning
<div suppressHydrationWarning>
  {new Date().toLocaleString()}
</div>`,
            explanation: 'Delay client-only content until after hydration'
          }
        ],
        prevention: ['Avoid date/time in SSR', 'Use useEffect for client code', 'Check for window usage'],
        relatedErrors: []
      },
      {
        id: 'nextjs-api-1',
        title: 'API route not found / 404',
        category: 'API Routes',
        severity: 'medium',
        description: 'API route returns 404 error',
        errorMessage: '404: API route not found',
        commonCauses: ['Wrong file location', 'Incorrect naming', 'Missing export', 'Dynamic route mismatch'],
        solutions: [
          {
            approach: 'Check file structure',
            code: `// ✅ Correct API route structure (App Router)
// app/api/users/route.ts
export async function GET(request: Request) {
  return Response.json({ users: [] });
}

// Access: /api/users

// ✅ Dynamic route
// app/api/users/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return Response.json({ user: params.id });
}

// Access: /api/users/123

// ✅ Pages Router (older)
// pages/api/users.ts
export default function handler(req, res) {
  res.status(200).json({ users: [] });
}`,
            explanation: 'Ensure correct file location and export format'
          }
        ],
        prevention: ['Follow Next.js routing conventions', 'Check file naming', 'Verify exports'],
        relatedErrors: []
      },
      {
        id: 'nextjs-image-1',
        title: 'Next/Image optimization failed',
        category: 'Images',
        severity: 'medium',
        description: 'Image component errors or fails to load',
        errorMessage: 'Invalid src prop / Image optimization failed',
        commonCauses: ['External URL not configured', 'Invalid image format', 'Missing width/height'],
        solutions: [
          {
            approach: 'Configure image domains',
            code: `// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
    ],
    // Or for older Next.js versions
    domains: ['example.com', 'cdn.example.com'],
  },
};

// Component usage
import Image from 'next/image';

export default function MyImage() {
  return (
    <Image
      src="https://example.com/image.jpg"
      alt="Description"
      width={500}
      height={300}
      priority // For above-fold images
    />
  );
}`,
            explanation: 'Add external domains to next.config.js'
          }
        ],
        prevention: ['Configure image domains', 'Always provide width/height', 'Use local images when possible'],
        relatedErrors: []
      }
    ]
  },

  typescript: {
    id: 'typescript-advanced',
    name: 'TypeScript (Advanced)',
    icon: '🔷',
    color: '#3178C6',
    commonErrors: [
      {
        id: 'ts-any-1',
        title: 'Type "any" is not assignable to parameter',
        category: 'Types',
        severity: 'medium',
        description: 'TypeScript strict mode prevents implicit any',
        errorMessage: 'Parameter implicitly has an "any" type',
        commonCauses: ['Missing type annotation', 'Strict mode enabled', 'Untyped library'],
        solutions: [
          {
            approach: 'Add explicit types',
            code: `// ❌ Implicit any
function process(data) {
  return data.value;
}

// ✅ Explicit type
function process(data: { value: string }): string {
  return data.value;
}

// ✅ With interface
interface Data {
  value: string;
  count: number;
}

function process(data: Data): string {
  return data.value;
}

// ✅ Generic type
function process<T>(data: T): T {
  return data;
}`,
            explanation: 'Always add type annotations in strict mode'
          }
        ],
        prevention: ['Enable strict mode early', 'Type all parameters', 'Use interfaces'],
        relatedErrors: []
      },
      {
        id: 'ts-null-1',
        title: 'Object is possibly "null" or "undefined"',
        category: 'Null Safety',
        severity: 'high',
        description: 'TypeScript detects potential null/undefined access',
        errorMessage: 'Object is possibly "null" or "undefined"',
        commonCauses: ['Nullable type', 'Optional property', 'No null check'],
        solutions: [
          {
            approach: 'Add null checks',
            code: `// ❌ Potential null access
function getName(user: User | null) {
  return user.name; // Error!
}

// ✅ Null check
function getName(user: User | null) {
  if (user) {
    return user.name;
  }
  return 'Unknown';
}

// ✅ Optional chaining
function getName(user: User | null) {
  return user?.name ?? 'Unknown';
}

// ✅ Non-null assertion (use carefully!)
function getName(user: User | null) {
  return user!.name; // Asserts user is not null
}

// ✅ Type guard
function isUser(value: unknown): value is User {
  return value !== null && typeof value === 'object';
}`,
            explanation: 'Always handle null/undefined cases'
          }
        ],
        prevention: ['Use optional chaining', 'Add null checks', 'Use type guards'],
        relatedErrors: []
      }
    ]
  },

  testing: {
    id: 'testing',
    name: 'Testing (Jest/Vitest)',
    icon: '🧪',
    color: '#C21325',
    commonErrors: [
      {
        id: 'test-timeout-1',
        title: 'Test timeout exceeded',
        category: 'Async',
        severity: 'medium',
        description: 'Test takes longer than timeout limit',
        errorMessage: 'Timeout - Async callback was not invoked within timeout',
        commonCauses: ['Missing await', 'Infinite loop', 'Async not resolved', 'Network delay'],
        solutions: [
          {
            approach: 'Fix async handling',
            code: `// ❌ Missing await
test('fetches data', () => {
  fetchData(); // Not awaited!
  expect(data).toBeDefined();
});

// ✅ Proper async/await
test('fetches data', async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
});

// ✅ Increase timeout for slow tests
test('slow operation', async () => {
  const result = await slowOperation();
  expect(result).toBe(true);
}, 10000); // 10 second timeout

// ✅ Mock timers
jest.useFakeTimers();
test('delayed function', () => {
  const callback = jest.fn();
  setTimeout(callback, 1000);
  
  jest.advanceTimersByTime(1000);
  expect(callback).toHaveBeenCalled();
});`,
            explanation: 'Always await async operations in tests'
          }
        ],
        prevention: ['Use async/await', 'Mock slow operations', 'Set appropriate timeouts'],
        relatedErrors: []
      },
      {
        id: 'test-mock-1',
        title: 'Mock function not called / wrong arguments',
        category: 'Mocking',
        severity: 'low',
        description: 'Mock expectations fail',
        errorMessage: 'Expected mock function to have been called',
        commonCauses: ['Mock not set up', 'Wrong mock path', 'Assertion before call'],
        solutions: [
          {
            approach: 'Proper mock setup',
            code: `// ✅ Mock module
jest.mock('./api', () => ({
  fetchUser: jest.fn(),
}));

import { fetchUser } from './api';

test('calls API', async () => {
  const mockUser = { id: 1, name: 'John' };
  (fetchUser as jest.Mock).mockResolvedValue(mockUser);
  
  const result = await fetchUser(1);
  
  expect(fetchUser).toHaveBeenCalledWith(1);
  expect(result).toEqual(mockUser);
});

// ✅ Spy on method
test('calls method', () => {
  const spy = jest.spyOn(console, 'log');
  
  console.log('test');
  
  expect(spy).toHaveBeenCalledWith('test');
  spy.mockRestore();
});

// ✅ Mock implementation
const mockFn = jest.fn()
  .mockReturnValueOnce('first')
  .mockReturnValueOnce('second');

expect(mockFn()).toBe('first');
expect(mockFn()).toBe('second');`,
            explanation: 'Set up mocks before using them'
          }
        ],
        prevention: ['Mock before tests run', 'Check mock paths', 'Clear mocks between tests'],
        relatedErrors: []
      }
    ]
  },

  deployment: {
    id: 'deployment',
    name: 'Deployment / Build',
    icon: '🚀',
    color: '#FF6B6B',
    commonErrors: [
      {
        id: 'deploy-env-1',
        title: 'Environment variables not defined',
        category: 'Configuration',
        severity: 'high',
        description: 'Missing environment variables in production',
        errorMessage: 'process.env.API_KEY is undefined',
        commonCauses: ['Not set in hosting platform', 'Wrong variable name', 'Build time vs runtime'],
        solutions: [
          {
            approach: 'Set environment variables',
            code: `// ✅ Vercel - vercel.json
{
  "env": {
    "API_KEY": "@api-key-secret"
  }
}

// Or in Vercel dashboard: Settings > Environment Variables

// ✅ Netlify - netlify.toml
[build.environment]
  API_KEY = "your-key"

// Or in Netlify dashboard: Site settings > Environment variables

// ✅ Next.js - expose to client
// next.config.js
module.exports = {
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Or for Next.js 13+
  publicRuntimeConfig: {
    apiKey: process.env.API_KEY,
  },
};

// Access in client
const apiKey = process.env.NEXT_PUBLIC_API_KEY;`,
            explanation: 'Set environment variables in hosting platform'
          }
        ],
        prevention: ['Use .env.example', 'Document all required env vars', 'Validate on startup'],
        relatedErrors: []
      },
      {
        id: 'deploy-build-1',
        title: 'Build failed / Out of memory',
        category: 'Build',
        severity: 'high',
        description: 'Build process fails or runs out of memory',
        errorMessage: 'JavaScript heap out of memory / Build failed',
        commonCauses: ['Large bundle size', 'Memory leak', 'Heavy dependencies', 'Insufficient resources'],
        solutions: [
          {
            approach: 'Optimize build',
            code: `// ✅ Increase Node memory
// package.json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
  }
}

// ✅ Optimize bundle
// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
          },
        },
      };
    }
    return config;
  },
};

// ✅ Dynamic imports
const HeavyComponent = dynamic(
  () => import('./HeavyComponent'),
  { ssr: false }
);

// ✅ Analyze bundle
npm install @next/bundle-analyzer
npm run analyze`,
            explanation: 'Increase memory and optimize bundle size'
          }
        ],
        prevention: ['Monitor bundle size', 'Use dynamic imports', 'Remove unused dependencies'],
        relatedErrors: []
      }
    ]
  },

  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    icon: '🍃',
    color: '#47A248',
    commonErrors: [
      {
        id: 'mongo-connect-1',
        title: 'MongoNetworkError: connect ECONNREFUSED',
        category: 'Connection',
        severity: 'high',
        description: 'Cannot connect to MongoDB server',
        errorMessage: 'MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017',
        commonCauses: ['MongoDB not running', 'Wrong connection string', 'Firewall blocking', 'Wrong port'],
        solutions: [
          {
            approach: 'Start MongoDB and check connection',
            code: `// Check if MongoDB is running
// macOS/Linux
sudo systemctl status mongod

// Start MongoDB
sudo systemctl start mongod

// ✅ Proper connection with error handling
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('mydb');
    return db;
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}

// ✅ Connection with retry
async function connectWithRetry(retries = 5) {
  for (let i = 0; i < retries; i++) {
    try {
      await client.connect();
      return client.db('mydb');
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(\`Retry \${i + 1}/\${retries}...\`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}`,
            explanation: 'Ensure MongoDB is running and connection string is correct'
          }
        ],
        prevention: ['Verify MongoDB is running', 'Use connection pooling', 'Add retry logic'],
        relatedErrors: []
      },
      {
        id: 'mongo-duplicate-1',
        title: 'E11000 duplicate key error',
        category: 'Constraints',
        severity: 'medium',
        description: 'Attempting to insert duplicate unique value',
        errorMessage: 'E11000 duplicate key error collection: mydb.users index: email_1',
        commonCauses: ['Duplicate unique field', 'Existing record', 'Race condition'],
        solutions: [
          {
            approach: 'Handle duplicates',
            code: `// ✅ Check before insert
const existing = await db.collection('users')
  .findOne({ email: 'user@example.com' });

if (existing) {
  throw new Error('Email already exists');
}

await db.collection('users').insertOne({
  email: 'user@example.com',
  name: 'John'
});

// ✅ Use upsert
await db.collection('users').updateOne(
  { email: 'user@example.com' },
  { 
    $set: { name: 'John', updatedAt: new Date() },
    $setOnInsert: { createdAt: new Date() }
  },
  { upsert: true }
);

// ✅ Catch duplicate error
try {
  await db.collection('users').insertOne({ email });
} catch (error) {
  if (error.code === 11000) {
    console.log('Duplicate email');
  } else {
    throw error;
  }
}`,
            explanation: 'Check for existing records or use upsert'
          }
        ],
        prevention: ['Validate before insert', 'Use upsert', 'Handle race conditions'],
        relatedErrors: []
      },
      {
        id: 'mongo-timeout-1',
        title: 'MongoServerSelectionError: connection timeout',
        category: 'Performance',
        severity: 'high',
        description: 'Server selection timed out',
        errorMessage: 'MongoServerSelectionError: connection timed out',
        commonCauses: ['Network issues', 'Firewall', 'Wrong URI', 'Slow server'],
        solutions: [
          {
            approach: 'Increase timeout and optimize',
            code: `// ✅ Increase connection timeout
const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 10000, // 10 seconds
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
});

// ✅ Connection pool settings
const client = new MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 5,
  maxIdleTimeMS: 30000,
});

// ✅ Index for query performance
await db.collection('users').createIndex({ email: 1 });

// ✅ Optimize query with projection
const user = await db.collection('users').findOne(
  { email: 'user@example.com' },
  { projection: { name: 1, email: 1, _id: 0 } }
);`,
            explanation: 'Configure timeouts and optimize queries'
          }
        ],
        prevention: ['Set appropriate timeouts', 'Use indexes', 'Monitor performance'],
        relatedErrors: []
      }
    ]
  },

  vscode: {
    id: 'vscode',
    name: 'VS Code',
    icon: '💻',
    color: '#007ACC',
    commonErrors: [
      {
        id: 'vscode-eslint-1',
        title: 'ESLint is disabled / not working',
        category: 'Extensions',
        severity: 'low',
        description: 'ESLint extension not functioning',
        errorMessage: 'ESLint is disabled or not detecting issues',
        commonCauses: ['Extension not enabled', 'No config file', 'Wrong working directory'],
        solutions: [
          {
            approach: 'Configure ESLint',
            code: `// ✅ Install ESLint
npm install --save-dev eslint

// Initialize config
npx eslint --init

// .eslintrc.json
{
  "extends": ["eslint:recommended"],
  "env": {
    "node": true,
    "es2021": true
  },
  "parserOptions": {
    "ecmaVersion": "latest"
  }
}

// VS Code settings.json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}`,
            explanation: 'Install and configure ESLint properly'
          }
        ],
        prevention: ['Install ESLint extension', 'Create config file', 'Enable in settings'],
        relatedErrors: []
      },
      {
        id: 'vscode-terminal-1',
        title: 'Integrated terminal not working',
        category: 'Terminal',
        severity: 'medium',
        description: 'Terminal fails to open or execute commands',
        errorMessage: 'The terminal process failed to launch',
        commonCauses: ['Shell path incorrect', 'Permission issues', 'Corrupted settings'],
        solutions: [
          {
            approach: 'Fix terminal settings',
            code: `// VS Code settings.json

// ✅ Windows - Use PowerShell
{
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    }
  }
}

// ✅ macOS/Linux - Use zsh or bash
{
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.profiles.osx": {
    "zsh": {
      "path": "/bin/zsh",
      "args": ["-l"]
    }
  }
}

// Reset terminal
// Command Palette (Cmd/Ctrl+Shift+P)
// > Terminal: Kill All Terminals`,
            explanation: 'Configure correct shell path in settings'
          }
        ],
        prevention: ['Use default shells', 'Check shell paths', 'Reset if needed'],
        relatedErrors: []
      }
    ]
  },

  webpack: {
    id: 'webpack',
    name: 'Webpack / Bundlers',
    icon: '📦',
    color: '#8DD6F9',
    commonErrors: [
      {
        id: 'webpack-module-1',
        title: 'Module not found / Can\'t resolve',
        category: 'Modules',
        severity: 'high',
        description: 'Webpack cannot find module',
        errorMessage: 'Module not found: Error: Can\'t resolve \'./Component\'',
        commonCauses: ['Wrong path', 'Missing extension', 'Case sensitivity', 'Missing dependency'],
        solutions: [
          {
            approach: 'Fix module resolution',
            code: `// ❌ Wrong - case sensitive
import Component from './component'; // file is Component.js

// ✅ Correct case
import Component from './Component';

// ✅ Add extension if needed
import Component from './Component.jsx';

// ✅ Webpack config - resolve extensions
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'components': path.resolve(__dirname, 'src/components/')
    }
  }
};

// Usage with alias
import Button from '@/components/Button';`,
            explanation: 'Check file paths and configure webpack resolve'
          }
        ],
        prevention: ['Use correct case', 'Configure extensions', 'Use path aliases'],
        relatedErrors: []
      },
      {
        id: 'webpack-memory-1',
        title: 'JavaScript heap out of memory',
        category: 'Performance',
        severity: 'high',
        description: 'Webpack build runs out of memory',
        errorMessage: 'FATAL ERROR: Reached heap limit Allocation failed',
        commonCauses: ['Large bundle', 'Memory leak', 'Too many files', 'Source maps'],
        solutions: [
          {
            approach: 'Optimize build',
            code: `// ✅ Increase memory
// package.json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' webpack"
  }
}

// ✅ Webpack optimization
module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      maxSize: 200000,
    },
    runtimeChunk: 'single',
  },
  devtool: 'source-map', // Instead of 'eval-source-map'
};

// ✅ Use webpack-bundle-analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

plugins: [
  new BundleAnalyzerPlugin()
]`,
            explanation: 'Increase Node memory and optimize webpack config'
          }
        ],
        prevention: ['Monitor bundle size', 'Use code splitting', 'Optimize dependencies'],
        relatedErrors: []
      }
    ]
  },

  linux: {
    id: 'linux',
    name: 'Linux / Bash',
    icon: '🐧',
    color: '#FCC624',
    commonErrors: [
      {
        id: 'linux-permission-1',
        title: 'Permission denied',
        category: 'Permissions',
        severity: 'medium',
        description: 'Insufficient permissions to execute or access',
        errorMessage: 'bash: ./script.sh: Permission denied',
        commonCauses: ['Missing execute permission', 'Wrong file ownership', 'SELinux blocking'],
        solutions: [
          {
            approach: 'Fix permissions',
            code: `# ✅ Add execute permission
chmod +x script.sh

# ✅ Change file permissions
chmod 755 script.sh  # Owner: rwx, Others: rx
chmod 644 file.txt   # Owner: rw, Others: r

# ✅ Change ownership
sudo chown user:group file.txt

# ✅ Recursively change directory
sudo chmod -R 755 /var/www/html

# Check current permissions
ls -la

# Output: -rwxr-xr-x = 755`,
            explanation: 'Grant execute permission with chmod'
          }
        ],
        prevention: ['Set correct permissions', 'Use chmod wisely', 'Check ownership'],
        relatedErrors: []
      },
      {
        id: 'linux-command-1',
        title: 'Command not found',
        category: 'PATH',
        severity: 'medium',
        description: 'Command not in PATH or not installed',
        errorMessage: 'bash: command: command not found',
        commonCauses: ['Not installed', 'Not in PATH', 'Typo', 'Wrong shell'],
        solutions: [
          {
            approach: 'Install or fix PATH',
            code: `# ✅ Check if installed
which node
command -v node

# ✅ Install package
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs

# CentOS/RHEL
sudo yum install nodejs

# macOS
brew install node

# ✅ Add to PATH
export PATH=$PATH:/usr/local/bin

# Permanent (add to ~/.bashrc or ~/.zshrc)
echo 'export PATH=$PATH:/usr/local/bin' >> ~/.bashrc
source ~/.bashrc

# ✅ Use full path
/usr/local/bin/node script.js`,
            explanation: 'Install package or add to PATH'
          }
        ],
        prevention: ['Verify installation', 'Check PATH', 'Use package managers'],
        relatedErrors: []
      },
      {
        id: 'linux-disk-1',
        title: 'No space left on device',
        category: 'Storage',
        severity: 'high',
        description: 'Disk is full',
        errorMessage: 'No space left on device',
        commonCauses: ['Disk full', 'Large log files', 'Too many files', 'Docker images'],
        solutions: [
          {
            approach: 'Free up space',
            code: `# ✅ Check disk usage
df -h

# ✅ Find large files
du -sh /* | sort -hr | head -10
du -h --max-depth=1 / | sort -hr

# ✅ Clean package cache
# Ubuntu/Debian
sudo apt clean
sudo apt autoremove

# ✅ Clean Docker
docker system prune -a
docker volume prune

# ✅ Clean logs
sudo journalctl --vacuum-time=7d
sudo find /var/log -type f -name "*.log" -delete

# ✅ Find and delete old files
find /tmp -type f -mtime +7 -delete`,
            explanation: 'Remove unnecessary files and clean caches'
          }
        ],
        prevention: ['Monitor disk usage', 'Rotate logs', 'Clean regularly'],
        relatedErrors: []
      }
    ]
  },

  aws: {
    id: 'aws',
    name: 'AWS',
    icon: '☁️',
    color: '#FF9900',
    commonErrors: [
      {
        id: 'aws-credentials-1',
        title: 'Unable to locate credentials',
        category: 'Authentication',
        severity: 'high',
        description: 'AWS credentials not configured',
        errorMessage: 'Unable to locate credentials. You can configure credentials by running "aws configure"',
        commonCauses: ['Credentials not set', 'Wrong profile', 'Expired credentials'],
        solutions: [
          {
            approach: 'Configure AWS credentials',
            code: `# ✅ Configure default credentials
aws configure
# AWS Access Key ID: YOUR_KEY
# AWS Secret Access Key: YOUR_SECRET
# Default region: us-east-1
# Default output: json

# ✅ Use environment variables
export AWS_ACCESS_KEY_ID=YOUR_KEY
export AWS_SECRET_ACCESS_KEY=YOUR_SECRET
export AWS_DEFAULT_REGION=us-east-1

# ✅ In code - use AWS SDK
import { S3Client } from '@aws-sdk/client-s3';

const client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

# ✅ Use named profile
aws configure --profile myprofile
# Use profile
aws s3 ls --profile myprofile`,
            explanation: 'Configure AWS credentials properly'
          }
        ],
        prevention: ['Use aws configure', 'Store in environment variables', 'Use IAM roles'],
        relatedErrors: []
      },
      {
        id: 'aws-s3-1',
        title: 'Access Denied - S3 bucket',
        category: 'Permissions',
        severity: 'high',
        description: 'Insufficient permissions for S3 operation',
        errorMessage: 'Access Denied (Service: S3, Status Code: 403)',
        commonCauses: ['Missing IAM permissions', 'Bucket policy', 'Public access blocked'],
        solutions: [
          {
            approach: 'Fix S3 permissions',
            code: `// ✅ IAM Policy for S3 access
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*"
    },
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::my-bucket"
    }
  ]
}

// ✅ Bucket Policy for public read
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}

# ✅ Make bucket public
aws s3api put-public-access-block \\
  --bucket my-bucket \\
  --public-access-block-configuration \\
  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"`,
            explanation: 'Configure IAM and bucket policies'
          }
        ],
        prevention: ['Set proper IAM policies', 'Configure bucket policies', 'Check CORS settings'],
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
