document.getElementById("currentyear").textContent = new Date().getFullYear();

const projects = [
  {
    title: "HandCrafted Heaven",
    description:
      "Handcrafted Haven is a web application designed to connect artisans and crafters with customers seeking unique, handmade products. It serves as a virtual marketplace where sellers can create profiles, showcase their items, and engage with buyers. Our goal is to support small creators, promote sustainability, and foster a sense of community through digital craftsmanship.",
    githubUrl: "https://github.com/mdrennan91/handcrafted-haven",
    liveUrl: "https://handcrafted-haven-zeta.vercel.app/",
    liveName: "Handcrafted Heaven",
    image: "images/handcrafted-heaven-small.webp",
    largeImage: "images/handcrafted-heaven-large.webp",
  },
  {
    title: "Derecho Para Todos",
    description:
      "Derecho para todos is a comprehensive web application designed to provide accessible legal information and resources to the general public. The platform aims to demystify legal concepts, offer guidance on common legal issues, and connect users with professional legal assistance when needed. Our goal is to empower individuals with knowledge and tools to navigate the legal system confidently.",
    githubUrl: "https://github.com/Awinel/derecho-para-todos",
    liveUrl: "https://derecho-para-todos.vercel.app/",
    liveName: "Derecho Para Todos",
    image: "images/dpt-small.webp",
    largeImage: "images/dpt-large.webp",
  },
];

function renderProjects(containerId) {
  const container = document.querySelector(`.${containerId}`);
  if (!container) return;

  const title = container.querySelector("h2");
  container.innerHTML = "";
  if (title) {
    container.appendChild(title);
  } else {
    container.innerHTML = "<h2>Projects</h2>";
  }

  // Create and append project elements
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <picture id="screenshot">
        <source srcset="${project.largeImage}" media="(min-width: 650px)" type="image/webp" />
        <img src="${project.image}" alt="${project.title} Screenshot" />
      </picture>
      <a href="${project.githubUrl}" target="_blank">
        <img src="images/github.svg" alt="GitHub Icon" />
      </a>
      <a href="${project.liveUrl}" target="_blank">${project.liveName}</a>
    `;
    container.appendChild(projectDiv);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderProjects("projects");
});

const nav = document.querySelector("nav");
const hamburger = document.getElementById("hamburger");

const navList = [
  { title: "Home", url: "index.html" },
  { title: "Projects", url: "projects.html" },
  { title: "Contact", url: "contact-me.html" },
];

navList.forEach((item) => {
  const a = document.createElement("a");
  a.href = item.url;
  a.textContent = item.title;
  nav.appendChild(a);
});

function toggleNav() {
  nav.classList.toggle("open");
  hamburger.classList.toggle("open");
}

function closeNav() {
  nav.classList.remove("open");
  hamburger.classList.remove("open");
}

hamburger.addEventListener("click", toggleNav);

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    closeNav();
  }
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    closeNav();
  }
});

const themeToggle = document.createElement("button");
themeToggle.id = "theme-toggle";
themeToggle.innerHTML = "🌙";
themeToggle.style.cssText = `
  position: relative;
  top: -200px;
  right: -700px;
  border: 1px solid;
  border-radius: 10%;
  cursor: pointer;
  transition: all 0.3s ease;
`;

function initTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  document.body.classList.toggle("light-theme", savedTheme === "light");
  themeToggle.innerHTML = savedTheme === "light" ? "🌙" : "☀️";
}

function toggleTheme() {
  const isLight = document.body.classList.toggle("light-theme");
  const theme = isLight ? "light" : "dark";
  localStorage.setItem("portfolio-theme", theme);
  themeToggle.innerHTML = isLight ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");

  footer.appendChild(themeToggle);

  initTheme();
});
