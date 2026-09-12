// Timezone data
const timezones = [
    { name: 'New York', zone: 'America/New_York', flag: '🇺🇸' },
    { name: 'Los Angeles', zone: 'America/Los_Angeles', flag: '🇺🇸' },
    { name: 'Chicago', zone: 'America/Chicago', flag: '🇺🇸' },
    { name: 'Denver', zone: 'America/Denver', flag: '🇺🇸' },
    { name: 'London', zone: 'Europe/London', flag: '🇬🇧' },
    { name: 'Paris', zone: 'Europe/Paris', flag: '🇫🇷' },
    { name: 'Berlin', zone: 'Europe/Berlin', flag: '🇩🇪' },
    { name: 'Dubai', zone: 'Asia/Dubai', flag: '🇦🇪' },
    { name: 'India', zone: 'Asia/Kolkata', flag: '🇮🇳' },
    { name: 'Bangkok', zone: 'Asia/Bangkok', flag: '🇹🇭' },
    { name: 'Singapore', zone: 'Asia/Singapore', flag: '🇸🇬' },
    { name: 'Hong Kong', zone: 'Asia/Hong_Kong', flag: '🇭🇰' },
    { name: 'Tokyo', zone: 'Asia/Tokyo', flag: '🇯🇵' },
    { name: 'Sydney', zone: 'Australia/Sydney', flag: '🇦🇺' },
    { name: 'Auckland', zone: 'Pacific/Auckland', flag: '🇳🇿' },
    { name: 'São Paulo', zone: 'America/Sao_Paulo', flag: '🇧🇷' },
    { name: 'Mexico City', zone: 'America/Mexico_City', flag: '🇲🇽' },
    { name: 'Toronto', zone: 'America/Toronto', flag: '🇨🇦' },
    { name: 'Moscow', zone: 'Europe/Moscow', flag: '🇷🇺' },
    { name: 'Istanbul', zone: 'Europe/Istanbul', flag: '🇹🇷' },
    { name: 'Cairo', zone: 'Africa/Cairo', flag: '🇪🇬' },
    { name: 'Johannesburg', zone: 'Africa/Johannesburg', flag: '🇿🇦' }
];

let filteredTimezones = [...timezones];

// Initialize clock
function initClock() {
    renderClocks();
    updateClocks();
    setInterval(updateClocks, 1000);
    attachEventListeners();
}

// Render clock cards
function renderClocks() {
    const container = document.getElementById('clocksContainer');
    container.innerHTML = '';

    filteredTimezones.forEach(tz => {
        const card = document.createElement('div');
        card.className = 'clock-card';
        card.dataset.zone = tz.zone;
        
        card.innerHTML = `
            <div class="clock-header">
                <span class="flag">${tz.flag}</span>
                <h2>${tz.name}</h2>
            </div>
            <div class="clock-display">
                <div class="time" data-zone="${tz.zone}">--:--:--</div>
                <div class="period"></div>
            </div>
            <div class="clock-info">
                <div class="date" data-zone="${tz.zone}"></div>
                <div class="timezone-label">${tz.zone}</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Update all clocks
function updateClocks() {
    const timeElements = document.querySelectorAll('.time');
    const periodElements = document.querySelectorAll('.period');
    const dateElements = document.querySelectorAll('.date');

    timeElements.forEach((element, index) => {
        const zone = element.dataset.zone;
        const time = getTimeInZone(zone);
        
        element.textContent = time.formatted;
        periodElements[index].textContent = time.period;
        dateElements[index].textContent = time.date;
    });
}

// Get time in specific timezone
function getTimeInZone(timezone) {
    const now = new Date();
    
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        const dateFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const timeString = formatter.format(now);
        const parts = timeString.split(' ');
        const period = parts[1]; // AM/PM
        const timePart = parts[0]; // HH:MM:SS

        return {
            formatted: timePart,
            period: period,
            date: dateFormatter.format(now)
        };
    } catch (e) {
        return {
            formatted: '--:--:--',
            period: '',
            date: 'Invalid timezone'
        };
    }
}

// Search functionality
function searchTimezones(query) {
    const lowerQuery = query.toLowerCase();
    filteredTimezones = timezones.filter(tz => 
        tz.name.toLowerCase().includes(lowerQuery) || 
        tz.zone.toLowerCase().includes(lowerQuery)
    );
    renderClocks();
    updateClocks();
}

// Theme toggle
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Attach event listeners
function attachEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const themeToggle = document.getElementById('themeToggle');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTimezones(e.target.value);
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', (e) => {
            setTheme(e.target.value);
        });
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    themeToggle.value = savedTheme;
}

// Start the clock
document.addEventListener('DOMContentLoaded', initClock);