document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     Navigation
     =============================== */

  const menuItems = [
    { label: "Welcome", slug: "index" },
    { label: "Speaking", slug: "speaking" },
    { label: "Publications", slug: "publications" },
    { label: "Credentials", slug: "credentials" },
    { label: "CV", slug: "cv" },
    { label: "About", slug: "about" },
  ];

  /* ===============================
     Page content
     =============================== */

  const pages = {
    index: {
      layout: "hero",
      hero: {
        title: "Hi! I am Dora and I accelerate the design delivery process.",
        text:
          "I'm a Head of Design with 18+ years of experience turning complex challenges into seamless customer experiences.",
      },
    },

    speaking: {
      layout: "default",
      title: "Speaking",
      paragraphs: ["Conference talks and workshops."],
    },

    publications: {
      layout: "default",
      title: "Publications",
      paragraphs: ["Articles and research publications."],
    },

    credentials: {
      layout: "default",
      title: "Credentials",
      paragraphs: ["Education and professional background."],
    },

    cv: {
      layout: "default",
      title: "Curriculum Vitae",
      paragraphs: ["Professional history and CV."],
    },

    about: {
      layout: "default",
      title: "About",
      paragraphs: [
        "As I progressed in my career, I became more interested in identifying and solving challenges, both as a designer and as a curious individual.",
        "I focus on creating order through well-documented design systems, transparent collaboration, and pragmatic UX strategy.",
        "Outside of work, I’m inspired by music, books, and aesthetics — harmony and structure deeply influence how I approach design.",
        "Best wishes, Dora Makszy",
      ],
      image: {
        src: "img/doramakszy.png",
        alt: "Portrait of Dora Makszy",
      },
    },

    404: {
      layout: "default",
      title: "404 — User journey incomplete",
      paragraphs: [
        "Looks like this path wasn’t part of the happy flow.",
        "Maybe try the menu, or head back home and pretend this never happened.",
      ],
    },
  };

  /* ===============================
     DOM references
     =============================== */

  const page = document.getElementById("page");
  const header = document.getElementById("header");
  const content = document.getElementById("content");
  const menuList = document.getElementById("menuList");
  const themeToggle = document.getElementById("themeToggle");

  let isDarkMode = localStorage.getItem("theme") === "dark";

  /* ===============================
     Routing
     =============================== */

  function getCurrentPage() {
    const slug = window.location.hash.slice(1);
    if (!slug) return "index";
    return Object.prototype.hasOwnProperty.call(pages, slug)
      ? slug
      : "404";
  }

  function navigateTo(slug) {
    history.pushState({}, "", `#${slug}`);
    render();
  }

  function clear(el) {
    el.innerHTML = "";
  }

  /* ===============================
     Renderers
     =============================== */

  function renderHero({ title, text }) {
    const h1 = document.createElement("h1");
    h1.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    header.append(h1, p);
  }

  function renderDefault({ title, paragraphs, image }) {
    const section = document.createElement("section");
    section.className = "content-section";

    const textBlock = document.createElement("div");
    textBlock.className = "content-text";

    const h2 = document.createElement("h2");
    h2.textContent = title;
    textBlock.appendChild(h2);

    paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      textBlock.appendChild(p);
    });

    section.appendChild(textBlock);

    if (image) {
      const imageBlock = document.createElement("div");
      imageBlock.className = "content-image";

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt || "";
      img.loading = "lazy";

      imageBlock.appendChild(img);
      section.appendChild(imageBlock);
    }

    content.appendChild(section);
  }

  function renderMenu() {
    const current = getCurrentPage();
    menuList.innerHTML = "";

    menuItems.forEach(({ label, slug }) => {
      const li = document.createElement("li");
      li.className = "menu-item";

      const a = document.createElement("a");
      a.href = `#${slug}`;
      a.textContent = label;

      if (slug === current) {
        a.classList.add("active");
        a.setAttribute("aria-current", "page");
      }

      a.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(slug);
      });

      a.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          navigateTo(slug);
        }
      });

      li.appendChild(a);
      menuList.appendChild(li);
    });
  }

  function render() {
    clear(header);
    clear(content);

    const pageKey = getCurrentPage();
    const pageData = pages[pageKey];

    if (pageData.layout === "hero") {
      renderHero(pageData.hero);
    } else {
      renderDefault(pageData);
    }

    page.classList.toggle("dark", isDarkMode);
    themeToggle.checked = isDarkMode;
    themeToggle.setAttribute("aria-checked", String(isDarkMode));

    renderMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ===============================
     Theme handling
     =============================== */

  themeToggle.addEventListener("change", () => {
    isDarkMode = themeToggle.checked;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    page.classList.toggle("dark", isDarkMode);
    themeToggle.setAttribute("aria-checked", String(isDarkMode));
  });

  /* ===============================
     Init
     =============================== */

  window.addEventListener("popstate", render);
  render();
});