# Cocktail Explorer

A modern React TypeScript application for discovering, exploring, and creating cocktail recipes.

## Overview

Cocktail Explorer lets users browse a vast collection of cocktail recipes, search for specific drinks, view detailed preparation instructions, and create their own custom cocktails. The application features a responsive design and intuitive user interface built with React and Ant Design.

## Features

- **Browse Cocktails**: Explore a large collection of cocktails with infinite scrolling
- **Search Functionality**: Find cocktails by name with real-time suggestions
- **Detailed Recipes**: View comprehensive information including ingredients, instructions, and images
- **Custom Cocktails**: Create and save your own cocktail recipes
- **Responsive Design**: Optimized for both desktop and mobile devices

## Technologies Used

- **React 18** with TypeScript for type-safe code
- **TanStack Router** for efficient navigation and code splitting
- **Ant Design** for a polished UI component library
- **LocalStorage** for persisting custom cocktail recipes
- **TheCocktailDB API** for cocktail data

## Project Structure

```
src/
├── components/      # Reusable UI components
├── context/         # Context providers for state management
├── hooks/           # Custom hooks including useCocktails
├── interfaces/      # TypeScript interfaces
├── routes/          # Route components and configurations
├── services/        # API services
└── utils/           # Utility functions
```

## Key Implementation Details

- **Infinite Scrolling**: Implemented with Intersection Observer API for efficient data loading
- **Image Handling**: Custom image upload with Base64 conversion for local storage
- **Form Validation**: Comprehensive validation for the cocktail creation form
- **State Management**: Context API for global state with localStorage integration
- **Responsive Design**: Mobile-first approach with adaptive layouts

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. The application will open at `http://localhost:5173`

Created by Orin Chayat as part of a frontend development portfolio project.
