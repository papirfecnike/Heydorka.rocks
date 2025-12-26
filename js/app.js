import { publications } from "./data/publications.js";
import { speaking } from "./data/speaking.js";
import { testimonials } from "./data/testimonials.js";
import { cv } from "./data/cv.js";
import { about } from "./data/about.js";

document.addEventListener("DOMContentLoaded", function () {

  /* =============================
   * MENU
   * ============================= */
  var menuItems = [
    { label: "Welcome", slug: "index" },
    { label: "Speaking", slug: "speaking" },
    { label: "Publications", slug: "publications" },
    { label: "Testimonials", slug: "testimonials" },
    { label: "CV", slug: "cv" },
    { label: "About", slug: "about" }
  ];

  /* =============================
   * PAGES
   * ============================= */
  var pages = {
    index: {
      layout: "hero",
      hero: {
        title: "Hi! I am Dora and I accelerate the design delivery process.",
        text:
          "I'm a Head of Design with 18+ years of experience turning complex challenges into seamless customer experiences."
      }
    },
    speaking,
    publications,
    testimonials,
    cv,
    about
  };

  /* =============================
   * DOM ELEMENTS
   * ============================= */
  var body = document.body;
  var header = document.getElementById("header");
  var content = document.getElementById("content");
  var menuList = document.getElementById("menuList");
  var themeToggle = document.getElementById("themeToggle");
  var menuToggle = document.getElementById("menuToggle");

  var isDarkMode = localStorage.getItem("theme") === "dark";

  /* =============================
   * HELPERS
   * ============================= */
  function clearElement(el) {
    el.innerHTML = "";
  }

  function getCurrentPage() {
    var hash = window.location.hash.replace("#", "");
    return pages[hash] ? hash : "index";
  }

  function formatPublicationText(text) {
    if (typeof text !== "string") return "";

    return text
      .replace(/\[strong\]/gi, "<strong>")
      .replace(/\[\/strong\]/gi, "</strong>")
      .replace(
        /\[quote\]([\s\S]*?)\[\/quote\]\s*\[author\]([\s\S]*?)\[\/author\]/gi,
        (_, q, a) =>
          `<blockquote class="publication-quote">
             <p class="publication-quote-text">${q.trim()}</p>
             <footer class="publication-quote-author">${a.trim()}</footer>
           </blockquote>`
      )
      .replace(
        /\[quote\]([\s\S]*?)\[\/quote\]/gi,
        (_, q) =>
          `<blockquote class="publication-quote">
             <p class="publication-quote-text">${q.trim()}</p>
           </blockquote>`
      );
  }

  /* =============================
   * HERO
   * ============================= */
  function renderHero(page) {
    header.innerHTML = `
      <h1>${page.hero.title}</h1>
      <p>${page.hero.text}</p>
    `;
  }

  /* =============================
   * ACCORDION SECTION (CV)
   * ============================= */
  function renderAccordionSection(sectionTitle, items) {
    var wrapper = document.createElement("div");

    var heading = document.createElement("h3");
    heading.textContent = sectionTitle;
    wrapper.appendChild(heading);

    items.forEach(function (item) {
      var details = document.createElement("details");

      var summary = document.createElement("summary");
      summary.className = "speaking-summary";

      var headerGroup = document.createElement("div");
      headerGroup.className = "cv-summary";

      var title = document.createElement("span");
      title.className = "speaking-title";
      title.textContent = item.title;
      headerGroup.appendChild(title);

      if (item.company || item.year) {
        var meta = document.createElement("span");
        meta.className = "cv-meta";
        meta.textContent = [item.company, item.year].filter(Boolean).join(" • ");
        headerGroup.appendChild(meta);
      }

      summary.appendChild(headerGroup);
      details.appendChild(summary);

      var contentWrap = document.createElement("div");
      contentWrap.className = "accordion-content";

      (item.content || []).forEach(function (text) {
        var p = document.createElement("p");
        p.textContent = text;
        contentWrap.appendChild(p);
      });

      details.appendChild(contentWrap);
      wrapper.appendChild(details);
    });

    return wrapper;
  }

  /* =============================
   * TESTIMONIALS
   * ============================= */

  function renderTestimonials(page) {
  var section = document.createElement("section");
  section.className = "testimonials-section";

  var h2 = document.createElement("h2");
  h2.textContent = page.title;
  section.appendChild(h2);

  page.quotes.forEach(function (quote) {
    var figure = document.createElement("figure");
    figure.className = "testimonial";

    var blockquote = document.createElement("blockquote");
    blockquote.textContent = quote.text;

    var figcaption = document.createElement("figcaption");
    figcaption.textContent = quote.author;

    figure.appendChild(blockquote);
    figure.appendChild(figcaption);
    section.appendChild(figure);
  });

  content.appendChild(section);
}

  /* =============================
   * SPEAKING / PUBLICATIONS
   * ============================= */
  function renderAccordionPage(page, isPublications) {
    var section = document.createElement("section");

    var h2 = document.createElement("h2");
    h2.textContent = page.title;
    section.appendChild(h2);

    if (page.intro) {
      var intro = document.createElement("p");
      intro.textContent = page.intro;
      section.appendChild(intro);
    }

    Object.keys(page.timeline).sort((a, b) => b - a).forEach(function (year) {
      var currentYear = new Date().getFullYear();
      var isUpcomingYear = Number(year) > currentYear; 
      var yearBlock = document.createElement("div");
      yearBlock.className = "speaking-year";

      var yearHeading = document.createElement("h3");
      yearHeading.textContent = year;
      yearBlock.appendChild(yearHeading);

      page.timeline[year].forEach(function (item) {
        var details = document.createElement("details");

        var summary = document.createElement("summary");
        summary.className = "speaking-summary";

        var title = document.createElement("span");
        title.className = "speaking-title";
        title.textContent = item.title;
        summary.appendChild(title);

        var meta = document.createElement("span");
        meta.className = "speaking-meta";

        if (item.conference) {
          var conf = document.createElement("span");
          conf.className = "speaking-conf";
          conf.textContent = item.conference;
          meta.appendChild(conf);
        }

        if (item.label || isUpcomingYear) {
          var badge = document.createElement("span");
          badge.className = "speaking-badge";
          badge.textContent = item.label || "Upcoming";
          meta.appendChild(badge);
        }

        summary.appendChild(meta);
        details.appendChild(summary);

        var contentWrap = document.createElement("div");
        contentWrap.className = "accordion-content";

        /* ---- Main text content ---- */
        (item.content || []).forEach(function (text) {
          var p = document.createElement("p");
          p.textContent = text;
          contentWrap.appendChild(p);
        });

        /* ---- Links (Speaking only) ---- */
        if (!isPublications && (item.link || item.slides || item.video)) {
          var linksWrap = document.createElement("div");
          linksWrap.className = "speaking-links";

          if (item.link) {
            var a = document.createElement("a");
            a.href = item.link;
            a.textContent = "Conference page";
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            linksWrap.appendChild(a);
          }

          if (item.slides) {
            var a = document.createElement("a");
            a.href = item.slides;
            a.textContent = "Slides";
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            linksWrap.appendChild(a);
          }

          if (item.video) {
            var a = document.createElement("a");
            a.href = item.video;
            a.textContent = "Video";
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            linksWrap.appendChild(a);
          }

          contentWrap.appendChild(linksWrap);
        }

        details.appendChild(contentWrap);
        yearBlock.appendChild(details);
      });

      section.appendChild(yearBlock);
    });

    content.appendChild(section);
  }

  /* =============================
   * CV
   * ============================= */
  function renderCV(page) {
    var section = document.createElement("section");

    var h2 = document.createElement("h2");
    h2.textContent = page.title;
    section.appendChild(h2);

    var grid = document.createElement("div");
    grid.className = "cv-grid";

    var left = document.createElement("div");
    left.appendChild(renderAccordionSection("Occupation", page.timeline.Occupation));

    var right = document.createElement("div");
    right.appendChild(renderAccordionSection("Education", page.timeline.Education));
    right.appendChild(renderAccordionSection("Skills", page.timeline.Skills));

    grid.appendChild(left);
    grid.appendChild(right);
    section.appendChild(grid);
    content.appendChild(section);
  }

  /* =============================
   * MENU
   * ============================= */
  function renderMenu() {
    var current = getCurrentPage();
    menuList.innerHTML = "";

    menuItems.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + item.slug;
      a.textContent = item.label;
      if (item.slug === current) a.classList.add("active");
      li.appendChild(a);
      menuList.appendChild(li);
    });
  }

  /* =============================
   * ABOUT
   * ============================= */
  function renderDefault(page) {
    var section = document.createElement("section");
    section.className = "content-section";

    var textCol = document.createElement("div");

    var h2 = document.createElement("h2");
    h2.textContent = page.title;
    textCol.appendChild(h2);

    (page.paragraphs || []).forEach(function (text) {
      var p = document.createElement("p");
      p.textContent = text;
      textCol.appendChild(p);
    });

    section.appendChild(textCol);

    if (page.image) {
      var imageCol = document.createElement("div");
      var img = document.createElement("img");
      img.src = page.image.src;
      img.alt = page.image.alt;
      imageCol.appendChild(img);
      section.appendChild(imageCol);
    }

    content.appendChild(section);
  }


  /* =============================
   * MAIN
   * ============================= */
  function render() {
    clearElement(header);
    clearElement(content);

    var pageKey = getCurrentPage();
    var page = pages[pageKey];

    if (page.layout === "hero") renderHero(page);
    else if (pageKey === "speaking") renderAccordionPage(page, false);
    else if (pageKey === "publications") renderAccordionPage(page, true);
    else if (pageKey === "testimonials") renderTestimonials(page);
    else if (pageKey === "cv") renderCV(page);
    else renderDefault(page);

    body.classList.toggle("dark", isDarkMode);
    themeToggle.checked = isDarkMode;
    renderMenu();
  }

  /* =============================
   * EVENTS
   * ============================= */
  themeToggle.addEventListener("change", function () {
    isDarkMode = themeToggle.checked;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    body.classList.toggle("dark", isDarkMode);
  });

  var nav = document.querySelector("nav");
  var backdrop = document.getElementById("menuBackdrop");

  menuToggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  /* close when clicking backdrop */
  backdrop.addEventListener("click", function () {
    closeMenu();
  });

  /* close when clicking menu item */
  menuList.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      closeMenu();
    }
  });

  function closeMenu() {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  window.addEventListener("hashchange", render);
  render();
});
