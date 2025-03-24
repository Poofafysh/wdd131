// Update footer with current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Wind chill calculation function 
function calculateWindChill(temp, windSpeed) {
    return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
}

// Static weather data
const temperature = 10; // C
const windSpeed = 5; // km/h

// Check if wind chill calculation is viable
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill').textContent = `${windChill}°C`;
} else {
    document.getElementById('windchill').textContent = 'N/A';
}