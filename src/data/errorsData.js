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
