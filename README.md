<p align="center">
   <a href="https://www.appro8.com" target="_blank">
      <img src="https://github.com/AppRo8.png" alt="AppRo8 Logo" width="80px" height="80px" style="border-radius: 50%;">
   </a>
</p>

<h1 align="center">
   <a href="https://www.appro8.com" target="_blank" align="center">
      AppRo8 Admin Portal
   </a>
</h1>

<p align="center">
   A modern, highly responsive, and production-ready admin dashboard and CRM portal built with React, Vite, and Tailwind CSS. It ships with comprehensive analytics, data tables, user management, and rich UI components — giving businesses everything they need to manage their operations efficiently.
</p>

## 📊 Introduction

This system is a production-ready admin dashboard built to manage business operations, track analytics, and handle user data securely. It features a modern overview dashboard, comprehensive data tables, authentication flows, form layouts with validation, and user profile pages.

### ✨ Key Features

- **Modern Dashboard** - Ready-to-use dashboard layout with statistics, charts, and widgets.
- **Data Management** - Interactive data tables with sorting, filtering, and pagination.
- **Authentication Pages** - Login, Register, Forgot Password, OTP Verification, Reset Password.
- **Forms & Tables** - Advanced form layouts with robust validation.
- **User Profile** - Rich profile page with connections and activity views.
- **Built with React 19 + Vite** - Modern, fast, and SEO-friendly.
- **Tailwind CSS** - Easy theming and utility-based styling.
- **Responsive & Mobile-First** - Designed to look great on all devices.
- **Dark Mode Support** - Full light/dark theme toggle.
- **Rich Charting** - Beautiful data visualizations for business metrics.

## 📁 Folder Structure

```text
|-- public/                 # Static assets served from the site root
|-- src/                    # Application source code
|   |-- App.tsx             # Root application component
|   |-- main.tsx            # Application entry point
|   |-- api/                # API service layer and handlers
|   |-- assets/             # Local SVGs, images, and static helpers
|   |-- components/         # Shared React components
|   |-- context/            # React context providers
|   |-- css/                # Global and component-level CSS
|   |-- hooks/              # Reusable client hooks
|   |-- layouts/            # Dashboard shell layouts (Sidebar + Header)
|   |-- lib/                # General utilities and helpers
|   |-- routes/             # React Router route definitions
|   |-- types/              # Shared TypeScript interfaces and types
|   |-- views/              # Page-level UI composed by route files
|-- index.html              # HTML entry point
|-- vite.config.ts          # Vite configuration
|-- package.json            # Scripts and dependencies
|-- tsconfig.json           # TypeScript compiler and path aliases
```

## 🚀 Quick Start (Local Development)

### Prerequisites

- Node.js 18, 20, or 22+
- npm

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

## 🧞 Available Commands

All scripts can be run using npm.

| Command   | Action                                                                        |
| :-------- | :---------------------------------------------------------------------------- |
| `dev`     | Starts the Vite development server with hot-reload at `http://localhost:5173` |
| `build`   | Creates an optimized production build via TypeScript + Vite                   |
| `lint`    | Runs ESLint to check for potential errors and code quality issues             |

---
<p align="center">
   Copyright © <a href="https://www.appro8.com" target="_blank">AppRo8</a>. Built with ❤️ by the AppRo8 Development Team.
</p>
```