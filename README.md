# Lib of Dev (Open Source) 📚

A comprehensive mobile reference library for developers, built with React Native and Expo. This app provides quick access to programming language syntax, functions, commands, and best practices for multiple programming languages.

## 🎯 Purpose

**Lib of Dev** is designed to be your go-to mobile companion for software development. Whether you're learning a new language, need a quick syntax reference, or want to see implementation examples, this app has you covered.

### Key Features

- **Multi-Language Support**: Currently includes JavaScript, Python, Java, C, and C#
- **Comprehensive References**: Syntax, functions, commands, and real-world examples
- **Search Functionality**: Quickly find what you need across all languages
- **Code Examples**: Copy-paste ready code snippets with explanations
- **Implementation Guides**: Learn not just what to use, but how to use it
- **Favorites**: Save frequently used references for quick access
- **Clean UI**: Modern, intuitive interface with syntax-highlighted code

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

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
   - Scan the QR code with Expo Go app (iOS/Android)
   - Press `a` to open on Android emulator
   - Press `i` to open on iOS simulator (macOS only)
   - Press `w` to open in web browser

## 📱 App Structure

### Languages Covered

#### JavaScript 🟨
- Variables and Data Types
- Functions (traditional, arrow, async)
- Arrays and Array Methods
- Objects and Classes
- Promises and Async/Await
- Modern ES6+ features

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

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **React Navigation**: Navigation library
- **React Syntax Highlighter**: Code syntax highlighting

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
