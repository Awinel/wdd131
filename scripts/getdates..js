const year = new Date().getFullYear();
const currentYearElement = document.querySelector('#currentyear');
if (currentYearElement) {
    currentYearElement.textContent = year;
}

const lastModifiedElement = document.lastModified

const lastModifiedDateElement = document.querySelector('#lastModified');
if (lastModifiedDateElement) {
    lastModifiedDateElement.textContent = lastModifiedElement;
}
