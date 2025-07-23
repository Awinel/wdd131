const year = new Date().getFullYear();
const currentYearElement = document.querySelector("#currentyear");
if (currentYearElement) {
  currentYearElement.textContent = year;
}

const lastModifiedElement = document.lastModified;

const lastModifiedDateElement = document.querySelector("#lastModified");
if (lastModifiedDateElement) {
  lastModifiedDateElement.textContent = lastModifiedElement;
}

function calculateWindChill(temperature, windSpeed, isMetric = true) {
  if (isMetric) {
    // Metric: temp <= 10°C and wind > 4.8 km/h
    if (temperature > 10 || windSpeed <= 4.8) {
      return "N/A";
    }
  } else {
    // Imperial: temp <= 50°F and wind > 3 mph
    if (temperature > 50 || windSpeed <= 3) {
      return "N/A";
    }
  }

  let windChill;

  if (isMetric) {
    // Metric formula (Celsius and km/h)
    windChill =
      13.12 +
      0.6215 * temperature -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temperature * Math.pow(windSpeed, 0.16);
  } else {
    // Imperial formula (Fahrenheit and mph)
    windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16);
  }

  return Math.round(windChill);
}

// Get temperature and wind speed from HTML and calculate wind chill
const temperature = parseFloat(
  document.querySelector("#temperature").textContent
);
const windSpeed = parseFloat(document.querySelector("#wind").textContent);

// Calculate wind chill (using metric since your HTML shows °C and km/h)
const windChillValue = calculateWindChill(temperature, windSpeed, true);

// Display the result in the wind-chill element
const windChillElement = document.querySelector("#wind-chill");
if (windChillElement) {
  if (windChillValue === "N/A") {
    windChillElement.textContent = windChillValue;
  } else {
    windChillElement.textContent = `${windChillValue}°C`;
  }
}
