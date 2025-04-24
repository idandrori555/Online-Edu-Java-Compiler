# 🚀 Compiler Project

A modern TypeScript-based compiler project with Docker support.

## 📚 Project Purpose

This project is specifically designed to support the Israel Bagrut exam in Computer Science. It includes implementations of fundamental data structures and algorithms that are part of the Bagrut curriculum, such as:

- Binary Tree structures (BinNode)
- Linked Lists
- Queue implementations
- Stack implementations

These implementations are provided in Java and can be found in the `Edu/` directory, making it an excellent resource for students preparing for their Bagrut examinations.

## ⚡ Prerequisites

- Deno (v1.37 or later)
- Docker (optional)
- Java JDK 17 (for running Java implementations)

## 🎯 Getting Started

### 💻 Local Development

1. Install Deno:

   ```bash
   # Windows (PowerShell)
   irm https://deno.land/install.ps1 | iex
   ```

2. Start the development server:
   ```bash
   deno task dev
   ```

### 🐳 Using Docker

1. Build the Docker image:

   ```bash
   docker build -t compiler-project .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 compiler-project
   ```

The server will be available at `http://localhost:3000` 🌐

### 🌟 Features

- 🔄 Hot reloading in development
- 🔒 TypeScript for type safety
- 🐳 Docker support for easy deployment
- 📦 Native TypeScript/JavaScript runtime with Deno
- 🔐 Secure by default with explicit permissions

### 📫 Support

If you have any questions or run into issues, please open an issue in the repository.
