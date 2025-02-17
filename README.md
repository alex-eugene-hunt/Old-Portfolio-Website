# Alex Hunt's Portfolio Website

A dynamic, interactive portfolio website showcasing my professional work and skills through an engaging parallax scrolling experience. The website features real-time weather data integration and a responsive design that adapts to various screen sizes.

## 🚀 Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling with advanced features:
  - Flexbox layout
  - CSS Animations
  - Transform and Transition effects
  - Media queries for responsive design
- **JavaScript/jQuery** - Dynamic content and interactions:
  - AJAX for API calls
  - DOM manipulation
  - Event handling
  - Smooth scrolling
  - Parallax effects

### APIs and External Services
- **OpenWeatherMap API** - Real-time weather data integration
- **Financial Data APIs** - Stock market information display

### Design Elements
- Custom parallax scrolling implementation
- Dynamic weather icons
- Responsive navigation
- Social media integration
- Custom font integration

## 🔧 Technical Implementation

### Parallax Scrolling
The website implements a custom parallax scrolling effect using JavaScript and CSS transforms. Multiple layers of images (mountains, city backgrounds) move at different speeds as the user scrolls, creating a sense of depth and immersion.

### Weather Integration
Real-time weather data is fetched from OpenWeatherMap API using AJAX calls:
- Temperature display (current, max, min)
- Dynamic weather icons based on current conditions
- Imperial units conversion
- Coordinates set to Seattle area (47.620495, -122.349303)

### Interactive Elements
- Toggle navigation menu
- Smooth scroll navigation
- Social media links (Facebook, Twitter, LinkedIn)
- Dynamic content loading
- Responsive design breakpoints

### Performance Optimizations
- Image optimization
- Efficient DOM manipulation using jQuery
- Asynchronous API calls
- CSS3 hardware acceleration
- Conditional loading of weather icons

## 🎨 Design Features
- Multi-layered parallax background
- Custom weather icons
- Responsive layout
- Dark/light mode toggle
- Professional typography
- Social media integration

## 📱 Responsive Design
The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🛠️ Project Structure
```
├── Code/
│   └── jquery.js
├── Fonts/
├── WeatherIcons/
├── img/
│   ├── Background.png
│   ├── Mountain.png
│   ├── CityBack.png
│   ├── CityMid.png
│   ├── CityFront.png
│   └── Name.png
├── index.html
├── main.js
└── style.css
```

## 💻 Setup and Installation
1. Clone the repository
2. No build process required - pure HTML/CSS/JS implementation
3. Open `index.html` in a modern web browser
4. Note: API keys required for weather and financial data services

## 🔑 API Keys
The project uses the following APIs:
- OpenWeatherMap API for weather data
- Various financial APIs for stock market data

*Note: API keys are required for full functionality. Please replace the existing API keys with your own when deploying.*

## 🌟 Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📝 License
This project is open source and available under the MIT License.
