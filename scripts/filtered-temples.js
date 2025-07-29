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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15-17",
    area: 20831,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg",
  },
  {
    templeName: "Antofagasta Chile",
    location: "Antofagasta, Chile",
    dedicated: "2025, June, 15",
    area: 26163,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-60193-main.jpg",
  },
  {
    templeName: "Concepción Chile",
    location: "Concepción, Chile",
    dedicated: "2018, October, 28",
    area: 23095,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg",
  },
];

function createTempleCard(filteredTemples) {
  filteredTemples.map((temple) => {
    const cardContainer = document.querySelector("#card-container");
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p>Location: ${temple.location}</p>
    <p>Dedicated: ${temple.dedicated}</p>
    <p>Area: ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
  `;
    cardContainer.appendChild(card);
  });
}

createTempleCard(temples); // Initial call to display all temples

function clear() {
  const clear = document.querySelector("#card-container");
  clear.innerHTML = ""; // Clear previous cards
}

const oldTemples = document.querySelector("#old");

oldTemples.addEventListener("click", () => {
  clear();
  const filteredTemples = temples.filter((temple) => {
    return temple.dedicated.split(",")[0] < 2000;
  });
  createTempleCard(filteredTemples);
});

const newTemples = document.querySelector("#new");

newTemples.addEventListener("click", () => {
  clear();
  const filteredTemples = temples.filter((temple) => {
    return temple.dedicated.split(",")[0] >= 2000;
  });
  createTempleCard(filteredTemples);
});

const largeTemples = document.querySelector("#large");

largeTemples.addEventListener("click", () => {
  clear();
  const filteredTemples = temples.filter((temple) => {
    return temple.area > 90000;
  });
  createTempleCard(filteredTemples);
});

const smallTemples = document.querySelector("#small");

smallTemples.addEventListener("click", () => {
  clear();
  const filteredTemples = temples.filter((temple) => {
    return temple.area < 10000;
  });
  createTempleCard(filteredTemples);
});

const homeTemples = document.querySelector("#home");

homeTemples.addEventListener("click", () => {
  clear();
  createTempleCard(temples);
});
