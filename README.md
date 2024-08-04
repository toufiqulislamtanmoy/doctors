# Massage Therapist

## Overview

This project is a fully responsive web application built from a Figma design. It features dynamic data display, search functionality for therapists by ZIP code or city, and fully functional authentication using Firebase, including options for password reset and login with Google and Facebook.

## Features
- Responsive Design: Fully responsive layout based on the provided Figma design, ensuring optimal user experience across different devices.
- Dynamic Data Display: Displays featured therapists, testimonials, and popular cities dynamically.
- Search Functionality: Allows users to search for therapists by ZIP code or city.
- Authentication: Fully functional authentication using Firebase, with support for password reset and social logins (Google and Facebook).
- Therapist Details: The user can see the details of the Therapist by clicking the `see details` option. (Aditional)

## Tech Stack
- React.js: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.
- Firebase: Backend-as-a-Service (BaaS) for authentication.
- react-router-dom: Declarative routing for React applications.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:
- Node.js (v18 or higher)

First, clone the project:

```bash
git clone https://github.com/toufiqulislamtanmoy/doctors.git

```

Install the dependencies:

```
npm install
```

Firebase Configuration:
- Go to the [Firebase Console](https://console.firebase.google.com/).
- Create a new project or use an existing project.
- Enable Email/Password, Google, and Facebook authentication methods in the Authentication section.
- Add your web app to the Firebase project to get the Firebase configuration.

Create a `.env` file in the root directory and add your Firebase configuration details:

```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id

```

Run the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5174](http://localhost:5174) with your browser to see the result.

## Demo in Live

For live demo visit ->  [Massage Therapist](https://easy-therapist.netlify.app/) 

## Conclusion
This project showcases a fully responsive web application with dynamic data display, search functionality, and robust authentication using Firebase. The design is based on a provided Figma design, ensuring a visually appealing and user-friendly experience across different devices.

## [Note:] If there are any issues with the live link, please check the project locally.
