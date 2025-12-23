document.addEventListener("DOMContentLoaded", () => {
  const menuItems = [
    { label: "Welcome", slug: "index" },
    { label: "Speaking", slug: "speaking" },
    { label: "Publications", slug: "publications" },
    { label: "Testimonials", slug: "testimonials" },
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

    testimonials: {
      layout: "default",
      title: "Testimonials",
      paragraphs: ["Education and professional background."],
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

    cv: {
      layout: "cv",
      title: "Curriculum Vitae",

      design: [
        {
          title: "Head of Design (Element Logic, 2025-current)",
          content:
            "Strategic advisor for the product trio, as well as enthusiastic executor of project deliveries. Mentoring, managing and motivating the amazing design team, as well as recruiting new colleagues to ensure organic growth.",
        },
        {
          title: "Senior UX Designer (Element Logic, 2024-2025)",
          content:
            "The company's biggest and most successful product - eManager, that manages AutoStore, the robotic logistics system - is developed by five different teams, and they needed a motivated designer.",
        },
        {
          title: "Product Design & DesignOps Lead (Futurehome, 2022-2024)",
          content:
            "Situation: hired to connect design, operations, and product. Result: improved UX, stronger design systems, and measurable cost savings.",
        },
        {
          title: "Senior Product Designer (GoTo, 2022)",
          content:
            "Delivered WCAG-compliant designs under tight deadlines in distributed teams.",
        },
        {
          title: "Design Team Leader (VDD:Live, 2020-2022)",
          content:
            "Built design foundations, mentored teams, and aligned UX with business goals.",
        },
        {
          title: "Design Teacher (CodeX, 2021)",
          content:
            "Taught design thinking, UX, research, and prototyping in an intensive summer camp.",
        },
        {
          title: "Senior Business Analyst & UX Designer (IBM, 2018-2019)",
          content:
            "Translated global business requirements into user-centered digital services.",
        },
        {
          title: "UI Designer (NNG, 2007-2012)",
          content:
            "Worked on navigation software, UI kits, and early iPhone pedestrian navigation.",
        },
      ],

      management: [
        {
          title: "Senior Design Project Manager (Supercharge, 2019-2020)",
          content:
            "Led UX/UI design and development for Ericsson's MWC 2020 sales demo: conducted user interviews and analyzed data, while coordinating schedules for UX/UI professionals and applying various UX methodologies, (usability testing, wireframing, accessibility evaluation, journey mapping). Negotiated with clients, administrated projects and managed people across projects according to project requirements, having the company’s best interest in focus. Participated in resource management for efficient allocation, and addressed and eliminated blocker issues to meet project goals and KPIs.",
        },
        {
          title: "Development Team Leader (Commsignia, 2017-2018)",
          content:
            "Led developer teams specializing in C, C++, and JAVA for V2X solution. Optimized resource allocation through agile methodologies. Provided clear data analytics to management. Formulated long-term organizational development plan and established OKRs.",
        },
        {
          title: "Project Manager (AImotive, 2016-2017)",
          content:
            "Key leadership role in Volvo self-driving car project: developed software in collaboration with Nvidia. Responsible for project plans, resource management, development, QA, and procurement, while managing a diverse team with various nationalities, coordinated travel and conducted negotiations. Provided leadership and coaching to team of 9-12 engineers.",
        },
        {
          title: "Scrum Master (NNG, 2014-2016)",
          content:
            "Actively participated in resource allocation and process enhancement - negotiated between core development and project teams. Promoted knowledge sharing and transparency, with which the efficiency increased and delivery time decreased. Facilitated implementation of agile processes and routines and reported weekly improvements of 12 core teams to upper management. Adhered to preset Key Performance Indicators (KPIs) to ensure timely project delivery.",
        },
      ],

      education: [
        {
          title:
            "MBA (Budapest University of Technology and Economics, 2010-2013)",
          content:
            "Studies: Accounting and Finance, Project- and Technology Management, Law, Economics, and Marketing, HR and Organizational behaviour. Thesis: “How to manage a small company until getting the first investment”. I established a company, so I had something to write about. Later the business idea became successful and received a capital injection.",
        },
        {
          title:
            "Bachelor’s Degree (University of Hertfordshire, 2004-2008)",
          content:
            "Studies: Accounting and quantitative methods, Project management and Economics, Business law and Marketing. Thesis: “How to motivate and manage creative colleagues - both in the case of a small and a big company”.",
        },
      ],

      skills: [
        {
          title: "Hard skills",
          content:
            "Public speaking: Fluent in English and Hungarian, improving Norwegian, Good presentation skills (conferences, mentoring, teaching), Design systems, Information architecture, Design operations, Documentation",
        },
        {
          title: "Soft skills",
          content:
            "Leadership: business analysis, reporting, coaching, supporting problem-solving, decision making, people management, public speaking and knowledge sharing.",
        },
      ],
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

  const body = document.body;
  const header = document.getElementById("header");
  const content = document.getElementById("content");
  const menuList = document.getElementById("menuList");
  const themeToggle = document.getElementById("themeToggle");

  let isDarkMode = localStorage.getItem("theme") === "dark";

  function getCurrentPage() {
    const slug = window.location.hash.slice(1);
    return pages[slug] ? slug : slug ? "404" : "index";
  }

  function clear(el) {
    el.innerHTML = "";
  }

  function renderHero({ title, text }) {
    header.innerHTML = `<h1>${title}</h1><p>${text}</p>`;
  }

  function renderDefault({ title, paragraphs, image }) {
    const section = document.createElement("section");
    section.className = "content-section";

    const textBlock = document.createElement("div");
    textBlock.innerHTML = `<h2>${title}</h2>${paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("")}`;
    section.appendChild(textBlock);

    if (image) {
      const imgWrap = document.createElement("div");
      imgWrap.className = "content-image";
      imgWrap.innerHTML = `<img src="${image.src}" alt="${image.alt}" />`;
      section.appendChild(imgWrap);
    }

    content.appendChild(section);
  }

  function renderCV({ title, design, management, education, skills }) {
    content.innerHTML += `<h2>${title}</h2>`;

    const workGrid = document.createElement("section");
    workGrid.className = "cv-grid";
    workGrid.append(
      createCVColumn("Design", design),
      createCVColumn("Management", management)
    );
    content.appendChild(workGrid);

    content.appendChild(
      Object.assign(document.createElement("div"), { className: "cv-spacer" })
    );

    const extraGrid = document.createElement("section");
    extraGrid.className = "cv-grid";
    extraGrid.append(
      createCVColumn("Education", education),
      createCVColumn("Skills", skills)
    );
    content.appendChild(extraGrid);
  }

  function createCVColumn(title, items) {
    const col = document.createElement("div");
    col.className = "cv-column";
    col.innerHTML = `<h3>${title}</h3>`;
    items.forEach(({ title, content }) => {
      col.innerHTML += `<details><summary>${title}</summary><div class="accordion-content">${content}</div></details>`;
    });
    return col;
  }

  function renderMenu() {
    menuList.innerHTML = "";
    menuItems.forEach(({ label, slug }) => {
      menuList.innerHTML += `<li><a href="#${slug}" class="${
        slug === getCurrentPage() ? "active" : ""
      }">${label}</a></li>`;
    });
  }

  function render() {
    clear(header);
    clear(content);

    const page = pages[getCurrentPage()];
    if (!page) return;

    if (page.layout === "hero") renderHero(page.hero);
    else if (page.layout === "cv") renderCV(page);
    else renderDefault(page);

    body.classList.toggle("dark", isDarkMode);
    themeToggle.checked = isDarkMode;

    renderMenu();
    window.scrollTo(0, 0);
  }

  themeToggle.addEventListener("change", () => {
    isDarkMode = themeToggle.checked;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    body.classList.toggle("dark", isDarkMode);
  });

  window.addEventListener("hashchange", render);
  render();
});
