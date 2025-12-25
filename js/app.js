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
    speaking: speaking,
    publications: publications,
    testimonials: testimonials,
    cv: cv,
    about: about
  };

  /* =============================
   * DOM ELEMENTS
   * ============================= */
  var body = document.body;
  var header = document.getElementById("header");
  var content = document.getElementById("content");
  var menuList = document.getElementById("menuList");
  var themeToggle = document.getElementById("themeToggle");
  var menuToggle = document.querySelector(".menu-toggle");

  var isDarkMode = localStorage.getItem("theme") === "dark";

  /* =============================
   * HELPERS
   * ============================= */
  function clearElement(el) {
    el.innerHTML = "";
  }

  function getCurrentPage() {
    var hash = window.location.hash.replace("#", "");
    if (pages[hash]) return hash;
    if (hash) return "404";
    return "index";
  }

  function formatPublicationText(text) {
    if (typeof text !== "string") return "";

    text = text
      .replace(/\[strong\]/gi, "<strong>")
      .replace(/\[\/strong\]/gi, "</strong>");

    text = text.replace(
      /\[quote\]([\s\S]*?)\[\/quote\]\s*\[author\]([\s\S]*?)\[\/author\]/gi,
      function (_, quoteText, authorText) {
        return (
          '<blockquote class="publication-quote">' +
            '<p class="publication-quote-text">' + quoteText.trim() + '</p>' +
            '<footer class="publication-quote-author">' + authorText.trim() + '</footer>' +
          '</blockquote>'
        );
      }
    );

    text = text.replace(
      /\[quote\]([\s\S]*?)\[\/quote\]/gi,
      function (_, quoteText) {
        return (
          '<blockquote class="publication-quote">' +
            '<p class="publication-quote-text">' + quoteText.trim() + '</p>' +
          '</blockquote>'
        );
      }
    );

    return text;
  }

  /* =============================
   * HERO
   * ============================= */
  function renderHero(page) {
    header.innerHTML =
      "<h1>" + page.hero.title + "</h1>" +
      "<p>" + page.hero.text + "</p>";
  }

  /* =============================
   * DEFAULT
   * ============================= */
  function renderDefault(page) {
    var section = document.createElement("section");
    section.className = "content-section";

    var textCol = document.createElement("div");

    var h2 = document.createElement("h2");
    h2.textContent = page.title;
    textCol.appendChild(h2);

    if (page.paragraphs) {
      page.paragraphs.forEach(function (text) {
        var p = document.createElement("p");
        p.textContent = text;
        textCol.appendChild(p);
      });
    }

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
   * TESTIMONIALS
   * ============================= */
  function renderTestimonials(page) {
    var section = document.createElement("section");
    section.className = "testimonials-section";

    var h2 = document.createElement("h2");
    h2.textContent = page.title;
    section.appendChild(h2);

    var grid = document.createElement("div");
    grid.className = "testimonials-grid";

    page.quotes.forEach(function (quote) {
      var figure = document.createElement("figure");
      figure.className = "testimonial";

      var blockquote = document.createElement("blockquote");
      blockquote.textContent = quote.text;

      var figcaption = document.createElement("figcaption");
      figcaption.textContent = quote.author;

      figure.appendChild(blockquote);
      figure.appendChild(figcaption);
      grid.appendChild(figure);
    });

    section.appendChild(grid);
    content.appendChild(section);
  }

  /* =========================================================
   * ACCORDION SECTION
   * ========================================================= */
  function renderAccordionSection(sectionTitle, items) {
    var wrapper = document.createElement("div");

    var heading = document.createElement("h3");
    heading.textContent = sectionTitle;
    wrapper.appendChild(heading);

    items.forEach(function (item) {
      var details = document.createElement("details");

      var summary = document.createElement("summary");
      summary.className = "speaking-summary";

      var title = document.createElement("span");
      title.className = "speaking-title";
      title.textContent = item.title;
      summary.appendChild(title);

      details.appendChild(summary);

      var contentWrap = document.createElement("div");
      contentWrap.className = "accordion-content";

      if (item.content) {
        item.content.forEach(function (text) {
          var p = document.createElement("p");
          p.textContent = text;
          contentWrap.appendChild(p);
        });
      }

      details.appendChild(contentWrap);
      wrapper.appendChild(details);
    });

    return wrapper;
  }

  /* =============================
   * SPEAKING
   * ============================= */
  function renderSpeaking(page) {
    renderAccordionPage(page, false);
  }

  /* =============================
   * PUBLICATIONS
   * ============================= */
  function renderPublications(page) {
    renderAccordionPage(page, true);
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

    var leftCol = document.createElement("div");
    if (page.timeline.Occupation) {
      leftCol.appendChild(
        renderAccordionSection("Occupation", page.timeline.Occupation)
      );
    }

    var rightCol = document.createElement("div");
    if (page.timeline.Education) {
      rightCol.appendChild(
        renderAccordionSection("Education", page.timeline.Education)
      );
    }
    if (page.timeline.Skills) {
      rightCol.appendChild(
        renderAccordionSection("Skills", page.timeline.Skills)
      );
    }

    grid.appendChild(leftCol);
    grid.appendChild(rightCol);

    section.appendChild(grid);
    content.appendChild(section);
  }

  /* =============================
   * SHARED ACCORDION PAGE
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

    Object.keys(page.timeline).sort(function (a, b) {
      return b - a;
    }).forEach(function (year) {
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

        details.appendChild(summary);

        var contentWrap = document.createElement("div");
        contentWrap.className = "accordion-content";

        if (item.content) {
          item.content.forEach(function (text) {
            var p = document.createElement("p");
            p.innerHTML = isPublications
              ? formatPublicationText(text)
              : text;
            contentWrap.appendChild(p);
          });
        }

        details.appendChild(contentWrap);
        yearBlock.appendChild(details);
      });

      section.appendChild(yearBlock);
    });

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

      if (item.slug === current) {
        a.className = "active";
      }

      li.appendChild(a);
      menuList.appendChild(li);
    });
  }

  /* =============================
   * MAIN RENDER
   * ============================= */
  function render() {
    clearElement(header);
    clearElement(content);

    var pageKey = getCurrentPage();
    var page = pages[pageKey];

    if (page.layout === "hero") {
      renderHero(page);
    } else if (pageKey === "speaking") {
      renderSpeaking(page);
    } else if (pageKey === "publications") {
      renderPublications(page);
    } else if (pageKey === "testimonials") {
      renderTestimonials(page);
    } else if (pageKey === "cv") {
      renderCV(page);
    } else {
      renderDefault(page);
    }

    body.classList.toggle("dark", isDarkMode);
    themeToggle.checked = isDarkMode;
    renderMenu();
  }

  /* =============================
   * THEME
   * ============================= */
  themeToggle.addEventListener("change", function () {
    isDarkMode = themeToggle.checked;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    body.classList.toggle("dark", isDarkMode);
  });

  window.addEventListener("hashchange", render);
  render();
});
