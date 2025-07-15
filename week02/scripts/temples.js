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

const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
      menuToggle.textContent = "✕";
    } else {
      menuToggle.textContent = "☰";
    }
  });

  navMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navMenu.classList.remove("show");
      menuToggle.textContent = "☰";
    }
  });
}
