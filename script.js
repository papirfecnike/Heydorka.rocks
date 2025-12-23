document.addEventListener("DOMContentLoaded", () => {
  const menuItems = [
    { label: "Welcome", slug: "index" },
    { label: "Speaking", slug: "speaking" },
    { label: "Publications", slug: "publications" },
    { label: "Credentials", slug: "credentials" },
    { label: "CV", slug: "cv" },
    { label: "About", slug: "about" },
  ];

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
      paragraphs: ["Designer and product thinker."],
    },
  };

  const page = document.getElementById("page");
  const header = document.getElementById("header");
  const content = document.getElementById("content");
  const menuList = document.getElementById("menuList");
  const themeToggle = document.getElementById("themeToggle");

  let isDarkMode = localStorage.getItem("theme") === "dark";

  function getCurrentPage() {
    return window.location.hash.replace("#", "") || "index";
  }

  function clear(el) {
    el.innerHTML = "";
  }

  function renderHero({ title, text }) {
    const h1 = document.createElement("h1");
    h1.textContent = title;
    const p = document.createElement("p");
    p.textContent = text;
    header.append(h1, p);
  }

  function renderDefault({ title, paragraphs }) {
    const h2 = document.createElement("h2");
    h2.textContent = title;
    content.appendChild(h2);
    paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      content.appendChild(p);
    });
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
      }

      a.onclick = (e) => {
        e.preventDefault();
        history.pushState({}, "", `#${slug}`);
        render();
      };

      li.appendChild(a);
      menuList.appendChild(li);
    });
  }

  function render() {
    clear(header);
    clear(content);

    const pageData = pages[getCurrentPage()];
    if (!pageData) return;

    if (pageData.layout === "hero") {
      renderHero(pageData.hero);
    } else {
      renderDefault(pageData);
    }

    page.classList.toggle("dark", isDarkMode);
    themeToggle.checked = isDarkMode;
    themeToggle.setAttribute("aria-checked", String(isDarkMode));

    renderMenu();
  }

  themeToggle.onchange = () => {
    isDarkMode = themeToggle.checked;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    page.classList.toggle("dark", isDarkMode);
    themeToggle.setAttribute("aria-checked", String(isDarkMode));
  };

  window.addEventListener("popstate", render);

  render();
});
