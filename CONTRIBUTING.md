# Contributing to Javaistic 🚀

Thanks for your interest in contributing to Javaistic! We're excited to have you join our community of Java enthusiasts.

## ⭐ First Things First

**Before you start contributing, please give our repository a star!** ⭐

This helps us grow our community and shows your support for the project. You can star the repo by clicking the ⭐ button at the top right of the [repository page](https://github.com/javaistic/javaistic).

## 📖 About This Guide

This document provides guidelines and information to help you contribute effectively to the Javaistic project.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Types of Contributions](#types-of-contributions)
- [Content Guidelines](#content-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Resources](#resources)

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [**Node.js**](https://nodejs.org/) (version 22 or higher)
- [**Bun**](https://bun.sh/) (recommended)
- [**Git**](https://git-scm.com/)

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/javaistic/javaistic.git
   cd javaistic
   ```

## 📁 Project Structure

```
javaistic/
├── content/
│   ├── docs/           # Java documentation files (.mdx)
│   └── programs/       # Java program examples (.mdx)
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # React components
│   └── lib/           # Utility functions
└── public/           # Static assets

```

## 💻 Development Setup

1. Install dependencies:

   ```bash
   bun install
   ```

2. Start the development server:

   ```bash
   bun run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Make your changes and see them live!

## 🎯 Types of Contributions

We welcome various types of contributions:

### 📚 Documentation

- **Java Concepts**: Add or improve explanations of Java concepts
- **Code Examples**: Provide clear, well-commented Java examples
- **Tutorials**: Create step-by-step guides for Java topics

### 💻 Programs

- **Sample Programs**: Add practical Java programs with explanations
- **Problem Solutions**: Contribute solutions to common programming problems
- **Best Practices**: Share Java coding best practices and patterns

### 🐛 Bug Fixes

- Fix typos, grammar, or formatting issues
- Correct code examples or explanations
- Improve existing content clarity

### ✨ Features

- UI/UX improvements
- New website features
- Enhanced navigation or search

## 📝 Content Guidelines

### Writing Style

- **Clear and Concise**: Use simple, easy-to-understand language
- **Beginner-Friendly**: Assume readers are learning Java
- **Consistent**: Follow the existing tone and style
- **Well-Structured**: Use proper headings, lists, and formatting

### Code Examples

- **Complete**: Provide full, runnable Java code
- **Commented**: Add helpful comments explaining the code
- **Formatted**: Use proper indentation and naming conventions
- **Tested**: Ensure all code examples work correctly

### MDX Files

- Use `.mdx` extension for content files
- Include proper frontmatter metadata
- Follow the existing file naming conventions
- Place files in appropriate directories (`content/docs/` or `content/programs/`)

### Example MDX Structure:

For detailed examples, refer to these existing files in our repository:

#### **Documentation Example:**

📂 See: [`content/docs/variables-and-literals.mdx`](content/docs/variables-and-literals.mdx)

#### **Program Example:**

📂 See: [`content/programs/add-two-integers.mdx`](content/programs/add-two-integers.mdx)

#### Key Points

- Clear explanations with examples
- Well-structured headings
- Code snippets with proper syntax highlighting

## 🔄 Pull Request Process

### Before You Start

**Please ask first before starting work on any significant new features.**

Create [a feature request](https://github.com/javaistic/javaistic/discussions/new?category=ideas) to discuss any major changes. This includes:

- Adding new Java documentation sections
- Creating new program categories
- Implementing new website features

### Workflow

1. **Create an Issue**: For bugs or enhancements, create an issue first
2. **Branch**: Create a new branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Develop**: Make your changes following our guidelines
4. **Test**: Ensure your changes work correctly
5. **Commit**: Use clear, descriptive commit messages

   ```bash
   git commit -m "feat: add arrays tutorial with examples"

   # or

   git commit -m "fix: correct syntax error in example"

   # or

   git commit -m "style: improve code formatting"
   ```

6. **Push**: Push your branch to your fork
7. **Pull Request**: Create a PR with a clear description

### PR Requirements

- ✅ Link to related issue (if applicable)
- ✅ Clear description of changes
- ✅ Screenshots for UI changes
- ✅ Test your changes locally
- ✅ Follow code style guidelines
- ✅ Update documentation if needed

## 🎨 Code Style

### Formatting

- Run `bun format` or `npm run format` before committing
- Use Prettier for consistent formatting
- Follow existing code patterns

### Commit Messages

Use conventional commit format with scope when possible:

**Format:** `type(scope): description`

#### Common Types:

- `feat`: new feature or content
- `fix`: bug fix or correction
- `docs`: documentation changes
- `style`: formatting, no code change
- `refactor`: code change that neither fixes bug nor adds feature
- `test`: adding or modifying tests
- `chore`: maintenance tasks

#### Recommended Scopes:

- `docs`: for documentation content changes
- `programs`: for Java program examples
- `ui`: for user interface improvements
- `components`: for React component changes
- `content`: for general content updates
- `config`: for configuration file changes

#### Examples:

- `feat(docs): add inheritance tutorial with examples`
- `feat(programs): add binary search implementation`
- `fix(docs): correct syntax error in loops example`
- `docs(contributing): update setup instructions`
- `style(programs): improve code formatting in sorting examples`
- `fix(ui): resolve mobile navigation issue`
- `chore(deps): update dependencies to latest versions`

#### Simple Format (when scope is unclear):

- `feat: add new Java concept explanation`
- `fix: correct syntax error in example`
- `docs: update installation instructions`
- `style: improve code formatting`

## 📚 Resources

### Learning Materials

- [Java Documentation](https://docs.oracle.com/javase/)
- [MDX Documentation](https://mdxjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs Documentation](https://fumadocs.vercel.app/)

### Community

- [GitHub Discussions](https://github.com/javaistic/javaistic/discussions)
- [Issues](https://github.com/javaistic/javaistic/issues)

## 📄 Additional Guidelines

- Review our [Code of Conduct](CODE_OF_CONDUCT.md)
- Check [GSSoC'25 Contribution Rules](CONTRIBUTION_RULES_GSSOC25.md) if participating in GSSoC 2025
- Be respectful and helpful to other contributors
- Ask questions if you're unsure about anything

## 🎉 Recognition

All contributors will be recognized in our contributors section. Thank you for helping make Java learning accessible to everyone!

**Happy Contributing!** 🎯

If you have any questions, feel free to [open a discussion](https://github.com/javaistic/javaistic/discussions) or reach out to the maintainers.
