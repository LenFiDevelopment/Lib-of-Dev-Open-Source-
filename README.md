# Lib of Dev (Open Source) 📚

A comprehensive mobile developer reference library built with React Native and Expo. Features a modern **dark mode design** with 13 programming languages, deployment platform guides, design patterns, **developer hints**, and enhanced search functionality.

## 🎯 Purpose

**Lib of Dev** is your go-to mobile companion for software development. Access syntax references, code examples, deployment guides, design patterns, and **practical developer hints** - all offline, all in dark mode.

### ✨ Key Features

- **🌑 Dark Mode Design** - Beautiful dark theme throughout the app
- **13 Programming Languages** - JavaScript, TypeScript, Python, Java, C, C#, Go, Rust, Swift, Kotlin, Ruby, PHP, SQL
- **💡 Developer Hints** - 50+ practical scenarios with instant recommendations (NEW!)
- **🚀 Platform Guides** - Expo, Vercel, Cloudflare, Netlify, Docker, Firebase
- **🎨 Design Patterns** - Common patterns with multi-language examples
- **🔍 Enhanced Search** - Search languages, patterns, and platforms with filters
- **⚙️ User Profile** - Customize interests and favorite languages
- **📋 Copy-Ready Code** - All examples ready to use
- **💾 Fully Offline** - No internet required
- **⭐ Favorites System** - Save frequently used references

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-.git
cd Lib-of-Dev-Open-Source-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:
   - Scan QR code with Expo Go app (iOS/Android)
   - Press `a` for Android emulator
   - Press `i` for iOS simulator (macOS only)
   - Press `w` for web browser

## 📱 App Features

### 🌑 Modern Dark Mode Design
- Professional dark color scheme
- High contrast for readability
- Consistent UI components
- Beautiful code blocks with syntax colors

### 🔍 Enhanced Search
- Search across all content types
- Filter by: Languages, Design Patterns, Platforms
- Real-time results as you type
- Type badges for easy identification
- Search hints and suggestions

### ⚙️ User Profile & Settings
- Select your interests (Web, Mobile, Backend, Frontend, Database, DevOps)
- Choose favorite programming languages
- Persistent storage of preferences
- Direct links to GitHub and resources
- About section with app info

### 🚀 Platform & Tools Guides
Learn about deployment and development platforms:
- **Expo** - Mobile development framework
- **Vercel** - Web hosting & serverless
- **Cloudflare** - CDN & edge computing
- **Netlify** - JAMstack deployment
- **Docker** - Containerization
- **Firebase** - Backend as a Service

Each guide includes features, commands, code examples, and documentation links.

### 💡 Developer Hints - NEW!
Get instant recommendations for common development scenarios:

**8 Categories with 50+ Practical Hints:**
- **Mobile Apps** - "Want iOS & Android? Use Expo"
- **Web Development** - "Building modern web app? Use Next.js"
- **Backend** - "Need serverless? Use Vercel Functions"
- **Deployment** - "Deploy Next.js? Use Vercel"
- **Database** - "Need relational DB? Use PostgreSQL"
- **State Management** - "Complex state? Use Zustand"
- **Styling** - "Rapid UI? Use Tailwind + shadcn/ui"
- **Authentication** - "Quick auth? Use Clerk or Auth0"

Each hint includes:
- **Scenario** - The problem you're facing
- **Recommendation** - What to use
- **Reason** - Why it's the right choice
- **Technologies** - What you'll need
- **When to use** - Specific use cases

### 🎨 Design Patterns & UI Libraries
- **Patterns**: Singleton, Observer, Factory
- **UI Libraries**: React Native Paper, NativeBase, React Native Elements
- **Charts**: Recharts examples
- **Animation**: Framer Motion
- Code examples in multiple languages

## 📚 Language Coverage

#### JavaScript 🟨
- Variables and Data Types
- Functions (traditional, arrow, async)
- Arrays and Array Methods
- Objects and Classes
- Promises and Async/Await
- Modern ES6+ features

#### TypeScript 🔷
- Type Annotations and Inference
- Interfaces and Type Aliases
- Generics and Utility Types
- Typed Functions and Classes
- Advanced Type Features

#### Python 🐍
- Variables and Type Hints
- Data Structures (Lists, Tuples, Dicts, Sets)
- Functions and Decorators
- List Comprehensions
- Classes and OOP
- File and Exception Handling

#### Java ☕
- Basic Syntax and Types
- Classes and Inheritance
- Interfaces
- Collections Framework
- Streams and Lambda Expressions
- Method Overloading

#### C ©️
- Basic Syntax
- Pointers and Memory Management
- Arrays and Strings
- Structures
- File I/O
- Dynamic Memory Allocation

#### C# 🔷
- Modern C# Syntax
- Properties and Auto-Properties
- LINQ
- Async/Await
- Collections
- Records (C# 9+)

#### Go 🐹
- Variables and Functions
- Structs and Methods
- Interfaces
- Goroutines and Channels
- Concurrency Patterns
- Error Handling

#### Rust 🦀
- Ownership and Borrowing
- Structs and Enums
- Pattern Matching
- Error Handling (Result/Option)
- Memory Safety
- Lifetimes

#### Swift 🦅
- Variables, Constants, and Optionals
- Functions and Closures
- Classes and Structs
- Collections (Arrays, Dictionaries, Sets)
- Protocol-Oriented Programming
- Extension Functions

#### Kotlin 🅺
- Null Safety
- Data Classes
- Extension Functions
- Coroutines
- Lambdas and Scope Functions
- Interoperability with Java

#### Ruby 💎
- Dynamic Typing
- Blocks, Procs, and Lambdas
- Modules and Mixins
- Metaprogramming
- Rails Conventions
- Gems and Bundler

#### PHP 🐘
- Variables and Type Hints
- Arrays and Strings
- Object-Oriented Features
- Traits for Code Reuse
- Modern PHP (7.4+, 8.0+)
- Web Development Patterns

#### SQL 🗄️
- SELECT, INSERT, UPDATE, DELETE
- JOINs (INNER, LEFT, RIGHT, FULL)
- Subqueries and CTEs
- Window Functions
- Aggregate Functions
- Database Design

## 🏗️ Project Structure

```
Lib-of-Dev-Open-Source-/
├── App.js                      # Main app entry point
├── src/
│   ├── navigation/
│   │   └── AppNavigator.js     # Navigation configuration
│   ├── screens/
│   │   ├── HomeScreen.js       # Language selection
│   │   ├── LanguageScreen.js   # Category selection
│   │   ├── CategoryScreen.js   # Code items list
│   │   ├── CodeDetailScreen.js # Full code reference
│   │   ├── SearchScreen.js     # Search functionality
│   │   └── FavoritesScreen.js  # Saved favorites
│   └── data/
│       └── languagesData.js    # All language content
├── assets/                     # App icons and images
└── package.json
```

## 🛠️ Technologies Used

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **React Navigation** - Navigation with dark theme
- **@react-native-clipboard/clipboard** - Clipboard functionality
- **@react-native-async-storage/async-storage** - User preferences storage
- **Custom Dark Theme** - Professional design system

## 📝 Contributing

This is an open-source project, and contributions are welcome! Here's how you can help:

### Adding New Languages

1. Edit `src/data/languagesData.js`
2. Add a new language object following the existing structure:

```javascript
languageName: {
  id: 'languagename',
  name: 'Language Name',
  icon: '🎯',
  color: '#HEXCOLOR',
  description: 'Language description',
  categories: {
    categoryName: {
      name: 'Category Display Name',
      items: [
        {
          title: 'Concept Title',
          code: `// Code example`,
          description: 'What this does',
          usage: 'When to use this'
        }
      ]
    }
  }
}
```

### Adding Content to Existing Languages

- Navigate to the language in `languagesData.js`
- Add new categories or items to existing categories
- Follow the existing format for consistency

## 🎨 Customization

### Themes
The app uses a clean, iOS-inspired design. To customize:
- Modify color values in screen StyleSheets
- Update the primary color in navigation options

### Icons
- Replace files in the `assets/` directory
- Update references in `app.json`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Acknowledgments

- Built for developers, by developers
- Inspired by the need for quick, offline reference materials
- Community-driven content

## 📧 Contact

For questions, suggestions, or contributions:
- Open an issue on GitHub
- Submit a pull request
- Contact the maintainers

---

**Made with ❤️ for the developer community**

Happy Coding! 🚀
