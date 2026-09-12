# 🌍 Multi-Timezone Digital Clock

A beautiful, responsive digital clock that displays the current time in multiple time zones around the world with real-time updates.

## Features

✨ **Real-time Clock Updates** - Synchronized time display updating every second
🌐 **22+ Time Zones** - Major cities around the world including:
   - Americas: New York, Los Angeles, Chicago, Denver, Toronto, São Paulo, Mexico City
   - Europe: London, Paris, Berlin, Moscow, Istanbul
   - Asia: Dubai, India, Bangkok, Singapore, Hong Kong, Tokyo
   - Africa & Oceania: Cairo, Johannesburg, Sydney, Auckland

🔍 **Search Functionality** - Filter time zones by city name or timezone ID
🌓 **Dark/Light Theme Toggle** - Beautiful theme switching with persistence
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
⚡ **No Dependencies** - Pure HTML, CSS, and Vanilla JavaScript
💾 **Local Storage** - Saves your theme preference

## How to Use

1. **Open the application** - Simply open `index.html` in your web browser
2. **View all time zones** - All 22+ timezones are displayed in real-time
3. **Search timezones** - Use the search box to find specific cities or timezone IDs
4. **Toggle theme** - Switch between dark and light themes using the dropdown menu
5. **Watch live updates** - Times update automatically every second

## Installation

### Local Use
```bash
# Clone the repository
git clone https://github.com/Lou1435/multi-timezone-clock.git
cd multi-timezone-clock

# Open index.html in your browser
open index.html
```

### GitHub Pages
1. Go to repository Settings
2. Scroll to "GitHub Pages"
3. Select "main" branch as the source
4. Your clock will be live at: `https://Lou1435.github.io/multi-timezone-clock/`

## File Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # Clock logic and interactivity
└── README.md       # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and animations
- **Vanilla JavaScript** - No frameworks or dependencies
- **Intl API** - Native JavaScript internationalization for timezone handling

## Customization

### Adding More Time Zones

Edit the `timezones` array in `script.js`:

```javascript
const timezones = [
    { name: 'Your City', zone: 'Continent/City', flag: '🏳️' },
    // Add more...
];
```

### Valid Timezone IDs
Use IANA timezone identifiers from the [IANA Time Zone Database](https://www.iana.org/time-zones)

Examples:
- `America/New_York`
- `Europe/London`
- `Asia/Tokyo`
- `Australia/Sydney`

## Browser Support

Works on all modern browsers that support:
- ES6 JavaScript
- CSS Grid
- Intl API
- LocalStorage

Tested on:
- Chrome/Edge 60+
- Firefox 55+
- Safari 12+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for educational and personal use.

---

Enjoy keeping track of time around the world! 🕐🌍