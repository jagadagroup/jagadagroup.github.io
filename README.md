# Jagada Group Website

This repository contains the source code and the generated static site for Jagada Industries website.

## Project Structure

The project is built using:
- **Express / Pug:** Used as a templating engine during development.
- **Node Sass:** Used to compile SCSS to CSS.
- **Webpack:** Used for hot-reloading and client-side processing during development.
- **Static Generation:** The dynamic Pug templates are compiled into static `index.html` files inside their respective directories (which GitHub Pages serves) using the `pug.js` script.

## Setup & Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
To start the local development server (which renders the Pug templates on the fly):
```bash
npm start
```
Or run directly with Node:
```bash
node ./bin/www
```
This will start the server on `http://localhost:3000`.

### 3. Generate Static Files
When changes are made to `pug` files, JSON data, or SCSS files, you need to generate the static `.html` files in order for them to be picked up by GitHub Pages.

Run the build script:
```bash
node pug.js
```
This will compile all `.pug` files into `.html` files and output them inside directories (`/about-us/index.html`, `/contact-us/index.html`, etc.).

Remember to commit the updated `index.html` files so they can be published on GitHub Pages.
