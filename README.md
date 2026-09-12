# 🚀 Dev Stack

A modern developer-focused web application built with **React, TypeScript, Vite, and Tailwind CSS**.  
This project helps users manage and explore their developer stack with a clean and responsive interface.

## 🛠️ Technologies Used

- ⚛️ React
- 🔷 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🎯 React Icons
- 🔔 React Toastify

## ✨ Features

- 📱 **Responsive Design** — Works smoothly on desktop, tablet, and mobile devices.
- 🎨 **Modern UI** — Clean and user-friendly interface using Tailwind CSS and DaisyUI.
- 📦 **Developer Stack Management** — Users can add technologies to their stack, remove a single technology, or clear all selected technologies at once.

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.  
React uses JSX because it makes UI code easier to read and write.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data.

In this project, I used `useState` to manage the **developer stack data and selected items**.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders.

I used `useEffect` to **load the JSON data when the application starts**.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.

It allows React to efficiently know which items were **added, removed, or changed**.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the stack is empty, I show an **empty stack message**:
and When the user clicks Add to Stack button than change the button text **added to stack**

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

A child can send data back by calling a function passed from the parent as a prop.
