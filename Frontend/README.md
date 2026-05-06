# Sky-Hop ✈️

A modern, interactive flight booking frontend application built with React and Vite.

## About Sky-Hop

Sky-Hop is a responsive web application designed to provide users with an engaging and intuitive flight booking experience. The application showcases promotional flight offers and provides a sleek, interactive user interface for browsing and booking flights.

### What It Is

- **A Flight Booking Frontend UI**: A visually stunning, interactive web interface for browsing and initiating flight bookings
- **Modern React Application**: Built with React 19, Vite, and Tailwind CSS for optimal performance and developer experience
- **Responsive Design**: Fully responsive interface that works seamlessly across all device sizes
- **Interactive Components**: Features smooth animations, modal dialogs, and 3D perspective effects for engaging user interactions
- **Promotional Display**: Showcases flight offers and deals to users

### What It Is NOT

- **A Backend Service**: This is a frontend-only application. It does not include server-side logic, databases, or API endpoints
- **A Complete Booking System**: The application does not process actual flight bookings or handle payment transactions
- **A Full-Stack Application**: Authentication, user management, and data persistence are not included
- **A Production-Ready Service**: This project is a frontend template/starter that requires integration with a backend service

## Deployment
https://sky-hop-tan.vercel.app/

## Tech Stack

- **React 19.2.5** - UI library
- **Vite 8.0.10** - Build tool and dev server
- **Tailwind CSS 4.2.4** - Utility-first CSS framework
- **ESLint 10.2.1** - Code quality and linting

## Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   └── Bg.jsx           # Background component
│   ├── data/
│   │   └── index.js         # Mock flight offers and image data
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── public/
│   └── images/              # Static image assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint rules
├── package.json             # Project dependencies
└── README.md                # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## Features

- **Interactive Flight Booking Modal** - Click the "Book Your Flight" button to open the booking interface
- **Animated UI Elements** - Smooth transitions and 3D perspective effects
- **Flight Offers Display** - Browse current promotional flight deals
- **Responsive Layout** - Optimized viewing experience on desktop, tablet, and mobile devices
- **Modern Styling** - Custom Tailwind CSS configuration with advanced effects

## Future Development

To extend Sky-Hop into a full booking system, consider integrating:

- Backend API for flight data and booking processing
- Authentication and user management
- Payment gateway integration
- Database for user profiles and booking history
- Email notifications
- Real-time flight availability updates

## License

This project is open source and available under the MIT License.

## Author

Developed by PrithwishDas101
