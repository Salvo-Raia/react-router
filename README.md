![Boolean Tech Academy](https://img.shields.io/badge/Boolean_Tech_Academy-001632?style=for-the-badge)

# 🎓 Exercise 39/50 - React Router Store

Build the frontend of a mini e-commerce using React Router DOM. The application features multiple pages, product listings fetched from Fake Store API, and dynamic product detail pages.

## 📌 Project Overview

| Property | Details |
|:--|:--|
| Repository | `react-router` |
| Category | Boolean Tech Academy |
| Type | Exercise |
| Exercise | 39/50 |

## 🎯 Assignment

Create the frontend of a mini e-commerce application, implementing its main pages and navigation system.

Use **Fake Store API**as a mock backend to retrieve product data.

`https://fakestoreapi.com/`

### Milestone 1 - Install React Router

Install React Router DOM:

```bash
npm i react-router-dom
```

### Milestone 2 - Create the Main Pages

Build at least three main pages:

- **Homepage:** Display a welcome message or promotional image.
- **About Us:** Introduce the store.
- **Products:** Display a list of products fetched from `https://fakestoreapi.com/products`.

### Milestone 3 - Navigation Bar

Implement a navigation bar visible across all pages, allowing users to navigate between them.

### Milestone 4 - Product Details

Extend the application by adding a dedicated detail page for each product.

- Make each product in the Products page clickable using React Router's `<Link>` component.
- Create a product detail page displaying information fetched from `https://fakestoreapi.com/products/:id`.
- Configure dynamic routing to retrieve the product `id` from the URL.

### Bonus 1 - Layout Component

Centralize the navigation bar by creating a reusable `Layout` component.

### Bonus 2 - Active Navigation Links

Manage the `active` class to visually highlight the currently active navigation link.

### Bonus 3 - Handle Missing Products

Implement programmatic navigation to return users to the product listing if they request a product that does not exist.

### Bonus 4 - 404 Page

Create a dedicated 404 page for routes that do not exist.

### Bonus 5 - Loading State

Display a loading indicator while the product detail data is being fetched.

### Super Bonus - Previous and Next Products

Add buttons to the product detail page to navigate to the previous or next product using `useNavigate()` programmatically.

## 🛠️ Technologies
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## 💡 What I Learned

- Setting up client-side routing with React Router DOM.
- Creating multiple pages within a React application.
- Building reusable layout components.
- Navigating between pages using `Link`.
- Highlighting active navigation links.
- Implementing dynamic routes and URL parameters.
- Fetching data from external APIs.
- Managing loading and error states.
- Using programmatic navigation with `useNavigate()`.

## ©️ Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course - Class 152 - Year 2025-2026
