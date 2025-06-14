# Real Time Device Tracker

A real-time device tracking web application built with Node.js, Express, Socket.IO, and Leaflet.js. This project allows users to share and visualize their live geolocation on an interactive map, making it ideal for collaborative tracking scenarios.

## Features

- 📍 Real-time location sharing and updates
- 🗺️ Interactive map powered by [Leaflet.js](https://leafletjs.com/)
- 🔗 Multi-user support with live updates as users join, move, or disconnect
- ⚡ Fast and responsive UI
- 🛡️ Privacy-friendly: location data is only shared in real time and not persisted

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [EJS](https://ejs.co/)
- [Leaflet.js](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/neelsshah2006/Realtime-Device-Tracker
   cd Realtime-Device-Tracker
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the server:**

   ```sh
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

### Usage

- Allow location access when prompted by your browser.
- Your device's location will appear on the map.
- As other users join, their locations will also be displayed in real time.
- When a user disconnects, their marker is removed from the map.

## Project Structure

```
.
├── app.js                 # Main server file
├── package.json           # Project metadata and dependencies
├── public/
│   ├── css/
│   │   └── style.css      # Stylesheet
│   └── js/
│       └── script.js      # Client-side logic
└── views/
    └── index.ejs          # Main HTML template
```

## Code Overview

- **Server:** [`app.js`](app.js)  
  Sets up the Express server, serves static files, and handles Socket.IO events for broadcasting location updates and user disconnects.

- **Client:** [`public/js/script.js`](public/js/script.js)  
  Connects to the server via Socket.IO, requests geolocation, and updates the map with user markers.

- **View:** [`views/index.ejs`](views/index.ejs)  
  Renders the main page, loads Leaflet and Socket.IO, and includes the map container.

- **Styles:** [`public/css/style.css`](public/css/style.css)  
  Provides basic styling for the map and layout.

## Security & Privacy

- Location data is only shared in real time and not stored on the server.
- Users must grant browser permission to share their location.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.
