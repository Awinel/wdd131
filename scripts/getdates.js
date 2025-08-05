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

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

function populateProductOptions() {
  const productSelect = document.querySelector("#product");
  if (productSelect) {
    products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }
}

populateProductOptions();

if (window.location.pathname.includes("review.html")) {
  let reviewCount = localStorage.getItem("reviewCount");

  if (reviewCount === null) {
    reviewCount = 0;
  } else {
    reviewCount = parseInt(reviewCount);
  }

  reviewCount++;

  localStorage.setItem("reviewCount", reviewCount);

  const counterElement = document.querySelector("#review-counter");
  if (counterElement) {
    counterElement.textContent = reviewCount;
  }
}
