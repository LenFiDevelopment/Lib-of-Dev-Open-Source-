# Contributing to Lib of Dev (Open Source)

Thank you for your interest in contributing to this comprehensive developer reference library! This document provides guidelines for contributing to the project.

## 🎯 Project Vision

Lib of Dev aims to be the most comprehensive mobile reference library for developers, providing quick access to syntax, functions, and best practices across all major programming languages.

## 🤝 How to Contribute

There are many ways to contribute to this project:

### 1. Adding New Languages

We're always looking to expand our language coverage. To add a new language:

1. Edit `src/data/languagesData.js`
2. Add a new language object following this structure:

```javascript
languagename: {
  id: 'languagename',
  name: 'Language Name',
  icon: '🎯',  // Choose an appropriate emoji
  color: '#HEXCOLOR',  // Choose a color associated with the language
  description: 'Brief description of the language',
  categories: {
    categoryName: {
      name: 'Display Name',
      items: [
        {
          title: 'Concept Title',
          code: `// Code example here`,
          description: 'Clear explanation of what this code does',
          usage: 'When and how to use this pattern'
        }
      ]
    }
  }
}
```

### 2. Expanding Existing Languages

Help make existing languages more comprehensive:

- Add new categories for uncovered topics
- Add more code examples to existing categories
- Improve explanations and usage guidelines
- Add best practices and common patterns

### 3. Improving Code Examples

Ensure all code examples:
- Are syntactically correct
- Follow best practices for that language
- Include comments where helpful
- Are practical and useful
- Demonstrate real-world usage

### 4. Enhancing Features

UI/UX improvements:
- Add new navigation patterns
- Improve search functionality
- Enhance visual design
- Add accessibility features

Technical enhancements:
- Implement persistent favorites storage
- Add dark theme support
- Improve performance
- Add offline capabilities

### 5. Documentation

Help improve documentation:
- Add usage examples to README
- Create tutorials or guides
- Add screenshots or GIFs
- Improve code comments
- Translate documentation

## 📋 Contribution Guidelines

### Code Style

- Use consistent formatting (2-space indentation)
- Follow React/React Native best practices
- Use functional components with hooks
- Keep components focused and reusable
- Add comments for complex logic

### Commit Messages

Use clear, descriptive commit messages:
- `feat: Add Go language support`
- `fix: Correct Python list comprehension example`
- `docs: Update README with new languages`
- `refactor: Improve search performance`

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes (ensure `npm start` works)
5. Commit your changes
6. Push to your fork
7. Open a Pull Request

### Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] All code examples are tested and working
- [ ] New languages include at least 3 categories
- [ ] Each category has at least 2-3 code examples
- [ ] Documentation is updated (README.md)
- [ ] No console errors when running the app
- [ ] PR description clearly explains the changes

## 🎨 Language Selection Criteria

When adding new languages, prioritize:

1. **Popular Languages**: Languages widely used in industry
2. **Complementary Languages**: Fill gaps in current coverage
3. **Emerging Languages**: New languages gaining traction
4. **Domain-Specific Languages**: SQL, GraphQL, etc.

## 📖 Content Guidelines

### Code Examples Should:

✅ **DO:**
- Be concise and focused
- Show best practices
- Include helpful comments
- Work as copy-paste code
- Cover common use cases
- Include edge cases where relevant

❌ **DON'T:**
- Be overly complex
- Include outdated patterns
- Use deprecated features
- Require extensive setup
- Include errors or bugs

### Descriptions Should:

- Clearly explain the concept
- Use simple, understandable language
- Avoid jargon when possible
- Be concise but complete

### Usage Guidelines Should:

- Explain when to use this pattern
- Mention best practices
- Include warnings if applicable
- Reference official documentation when helpful

## 🐛 Reporting Issues

Found a bug or have a suggestion?

1. Check if the issue already exists
2. If not, create a new issue with:
   - Clear title
   - Detailed description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable

## 💡 Feature Requests

Have an idea for a new feature?

1. Check existing feature requests
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Implementation suggestions (if any)

## 📝 Language Priority List

Help us by adding these languages (in priority order):

1. **HTML/CSS** - Web fundamentals
2. **Bash/Shell** - Command line scripting
3. **Dart** - Flutter development
4. **R** - Statistical computing
5. **Scala** - JVM functional language
6. **Perl** - Text processing
7. **Lua** - Embedded scripting
8. **Haskell** - Pure functional
9. **Elixir** - Concurrent programming
10. **Assembly** - Low-level programming

## 🎓 Learning Resources

When creating content, you can reference:

- Official language documentation
- Popular tutorials and courses
- Community best practices
- Open-source projects

Always verify information from multiple sources.

## 🌟 Recognition

Contributors will be:
- Listed in the repository contributors
- Mentioned in release notes
- Credited for significant contributions

## 📧 Questions?

Have questions about contributing?

- Open an issue with your question
- Check existing discussions
- Review this document

## 📄 License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

**Thank you for helping make Lib of Dev the best developer reference library! 🚀**
