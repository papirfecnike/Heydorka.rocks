import { publications } from "./data/publications.js";
import { speaking } from "./data/speaking.js";
import { testimonials } from "./data/testimonials.js";
import { cv } from "./data/cv.js";
import { about } from "./data/about.js";

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
   * Navigation
   * ========================================================= */
  const menuItems = [
    { label: "Welcome", slug: "index" },
    { label: "Speaking", slug: "speaking" },
    { label: "Publications", slug: "publications" },
    { label: "Testimonials", slug: "testimonials" },
    { label: "CV", slug: "cv" },
    { label: "About", slug: "about" },
  ];

  /* =========================================================
   * Page registry
   * ========================================================= */
  const pages = {
    index: {
      layout: "hero",
      hero: {
        title: "Hi! I am Dora and I accelerate the design delivery process.",
        text:
          "I'm a Head of Design with 18+ years of experience turning complex challenges into seamless customer experiences.",
      },
    },
    speaking,
    publications,
    testimonials,
    cv,
    about,
    404: {
      layout: "default",
      title: "404 — User journey incomplete",
      paragraphs: [
        "Looks like this path wasn’t part of the happy flow.",
        "Maybe try the menu, or head back home.",
      ],
    },
  };

  /* =========================================================
   * DOM helpers
   * ========================================================= */
  const body = document.body;
  const header = document.getElementById("header");
  const content = document.getElementById("content");
  const menuList = document.getElementById("menuList");
  const themeToggle = document.getElementById("themeToggle");

  let isDarkMode = localStorage.getItem("theme") === "dark";
  const clear = (el) => (el.innerHTML = "");

  const getCurrentPage = () => {
    const slug = window.location.hash.slice(1);
    return pages[slug] ? slug : slug ? "404" : "index";
  };

  /* =========================================================
   * Generic master–detail renderer
   * ========================================================= */
  function renderMasterDetail({
    title,
    intro,
    groups,
    containerClass,
    itemRenderer,
    detailRenderer,
  }) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${title}</h2><p>${intro}</p>`;

    const layout = document.createElement("div");
    layout.className = `master-detail-layout ${containerClass}`;

    const nav = document.createElement("nav");
    nav.className = "master-detail-nav";

    const details = document.createElement("div");
    details.className = "master-detail-details";
    details.innerHTML = `<p class="master-detail-placeholder">${intro}</p>`;

    Object.keys(groups)
      .sort((a, b) => b - a)
      .forEach((key) => {
        const group = document.createElement("div");
        group.className = "master-detail-group";
        group.innerHTML = `<h3>${key}</h3>`;

        groups[key].forEach((item) => {
          const el = itemRenderer(item);
          el.addEventListener("click", () => {
            details.innerHTML = detailRenderer(item);
          });
          group.appendChild(el);
        });

        nav.appendChild(group);
      });

    layout.append(nav, details);
    section.appendChild(layout);
    content.appendChild(section);
  }

  /* =========================================================
   * Renderers
   * ========================================================= */
  function renderHero({ hero }) {
    header.innerHTML = `<h1>${hero.title}</h1><p>${hero.text}</p>`;
  }

  function renderDefault({ title, paragraphs = [], image }) {
    const section = document.createElement("section");
    section.className = "content-section";

    const text = document.createElement("div");
    text.innerHTML = `<h2>${title}</h2>`;

    paragraphs.forEach((p) => {
      const para = document.createElement("p");
      para.textContent = p;
      text.appendChild(para);
    });

    section.appendChild(text);

    if (image) {
      const imgWrap = document.createElement("div");
      imgWrap.className = "content-image";

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;

      imgWrap.appendChild(img);
      section.appendChild(imgWrap);
    }

    content.appendChild(section);
  }

  function renderSpeaking({ title, intro, timeline }) {
    renderMasterDetail({
      title,
      intro,
      groups: timeline,
      containerClass: "speaking",
      itemRenderer: (talk) => {
        const btn = document.createElement("button");
        btn.className = "speaking-item";
        btn.innerHTML = `
          <span class="speaking-title">${talk.title}</span>
          <span class="speaking-conf">${talk.conference}</span>
        `;
        return btn;
      },
      detailRenderer: (talk) => `
        <h3>${talk.title}</h3>
        <p class="speaking-meta">${talk.conference}</p>
        ${talk.content.map((p) => `<p>${p}</p>`).join("")}
      `,
    });
  }

  function renderPublications({ title, intro, timeline }) {
    renderMasterDetail({
      title,
      intro,
      groups: timeline,
      containerClass: "publications",
      itemRenderer: (article) => {
        const btn = document.createElement("button");
        btn.className = "publications-item";
        btn.textContent = article.title;
        return btn;
      },
      detailRenderer: (article) =>
        `<h3>${article.title}</h3>
         ${article.content.map((p) => `<p>${p}</p>`).join("")}`,
    });
  }

  function renderTestimonials({ title, quotes }) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${title}</h2>`;

    quotes.forEach(({ text, author }) => {
      section.innerHTML += `
        <figure class="quote">
          <blockquote class="quote-text">“${text}”</blockquote>
          <figcaption class="quote-author">— ${author}</figcaption>
        </figure>
      `;
    });

    content.appendChild(section);
  }

  function renderCV({ title, design, management, education, skills }) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${title}</h2>`;

    const grid = document.createElement("div");
    grid.className = "cv-grid";

    const createColumn = (heading, items) => {
      const column = document.createElement("div");
      column.className = "cv-column";
      column.innerHTML = `<h3>${heading}</h3>`;

      items.forEach(({ title, content }) => {
        const details = document.createElement("details");
        details.innerHTML = `
          <summary>${title}</summary>
          <div class="accordion-content">
            <p>${content}</p>
          </div>
        `;
        column.appendChild(details);
      });

      return column;
    };

    grid.append(
      createColumn("Design", design),
      createColumn("Management", management),
      createColumn("Education", education),
      createColumn("Skills", skills)
    );

    section.appendChild(grid);
    content.appendChild(section);
  }

  function renderMenu() {
    menuList.innerHTML = menuItems
      .map(
        ({ label, slug }) =>
          `<li>
            <a href="#${slug}" class="${
              slug === getCurrentPage() ? "active" : ""
            }">${label}</a>
          </li>`
      )
      .join("");
  }

  /* =========================================================
   * Main render
   * ========================================================= */
  function render() {
    clear(header);
    clear(content);

    const page = pages[getCurrentPage()];
    if (!page) return;

    switch (page.layout) {
      case "hero":
        renderHero(page);
        break;
      case "default":
        renderDefault(page);
        break;
      case "speaking":
        renderSpeaking(page);
        break;
      case "publications":
        renderPublications(page);
        break;
      case "testimonials":
        renderTestimonials(page);
        break;
      case "cv":
        renderCV(page);
        break;
      default:
        renderDefault(pages["404"]);
    }

    body.classList.toggle("dark", isDarkMode);
    themeToggle.checked = isDarkMode;
    renderMenu();
  }

  themeToggle.addEventListener("change", () => {
    isDarkMode = themeToggle.checked;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    body.classList.toggle("dark", isDarkMode);
  });

  window.addEventListener("hashchange", render);
  render();
});
