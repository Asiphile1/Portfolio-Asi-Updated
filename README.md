# Asiphile Mthethwa Portfolio App

## Overview

This Portfolio App is a React-based web application that serves as a personal showcase of skills, projects, and a downloadable CV. The app features a responsive design, a dynamic particle background, and integrates PDF viewing functionality to preview and download your resume directly from the website.


you can view a demo of the app here: 

##  Features

* Dynamic Particle Background: Adds a visually appealing animation.

* Responsive PDF Viewer: View your CV directly on the website with scaling functionality.

* Downloadable Resume: Allows users to download the CV in PDF format.

* Responsive Design: Ensures compatibility across various screen sizes.

## Technologies Used

* React.js: Frontend framework.

* React-Bootstrap: For styling and layout.

* React-PDF: For PDF rendering and preview.

* React Icons: For icons, including the download button.

## Installation

To run the app locally, follow these steps:

* Prerequisites

Ensure you have the following installed:

* Node.js

* npm 

## Steps

* Clone this repository:
```
git clone <repository-url>
```

* Navigate to the project directory:

cd portfolio-app

* Install dependencies:

npm install


* Start the development server:

npm start


* Open your browser and go to:

http://localhost:3000

## Folder Structure

portfolio-app/
|-- src/
|   |-- Assets/                # Static assets (images, PDFs, etc.)
|   |   |-- ASIPHILEMTHETHWA.pdf
|   |-- Components/            # React components
|   |   |-- Resume.js          # Resume section with PDF preview
|   |   |-- Particle.js        # Particle background
|   |-- App.js                 # Main App component
|   |-- index.js               # Entry point
|-- public/                    # Public files
|-- package.json               # Project metadata and dependencies


## How to Add/Update Your CV

* Replace the existing ASIPHILEMTHETHWA.pdf file in the src/Assets/ folder with your updated CV.

* Ensure the file name matches ASIPHILEMTHETHWA.pdf or update the import path in Resume.js.

## Customization

* Particle Background: Modify the Particle.js component to customize the particle effects.

* Styling: Use React-Bootstrap or your preferred CSS framework for additional customization.


## Build the app:

npm run build

