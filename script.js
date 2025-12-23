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
   * Page data
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

    /* -------------------------
     * Speaking
     * ------------------------- */
    speaking: {
      layout: "speaking",
      title: "Speaking",
      intro:
        "Check out the upcoming and previous talks that I gave on international conferences.",
      timeline: {
        2026: [
          {
            id: "ux-automation",
            title: "No researchers were harmed in the making of this test suite",
            conference: "React Norway 2026 (upcoming)",
            content: [
              "What if UX research could move as fast as modern product development — without losing its soul?",
              "I built a fully automated UX test framework using Figma Make to capture real user behavior asynchronously.",
              "Within one week, we collected quantitative insights from dozens of users and freed time for deep interviews."
            ],
            link: "https://reactnorway.com/",
            slides: "not yet available"
          },
          {
            id: "ux-it-sec",
            title: "Safe by design: the UX of secure banking",
            conference: "NDC Security 2026 (upcoming)",
            content: [
              "When it comes to banking applications, security is non-negotiable, but so is the user experience. With sensitive financial data on the line, ensuring that users interact securely with your platform is crucial.",
              "This talk will explore how UX design can be the unsung hero in protecting banking applications from security breaches. When UX and IT security work together, users are guided safely through complex security features without frustration or error. By focusing on intuitive design, we can reduce risky behaviors like bypassing 2FA, and ultimately build trust in digital banking systems.",
              "Let us discover how seamless UX can be your first line of defense in the fight against cyber threats, and learn why good security design is just as important as good security code."
            ],
            link: "https://ndcsecurity.com/agenda/safe-by-design-the-ux-of-secure-banking-0iqc/0fgm7ets5ix",
            slides: "not yet available"
          },
        ],
        2025: [
          {
            id: "ux-security",
            title: "Knocking on Security's door: how good UX design protects users",
            conference: "TDC 2025",
            content: [
              "When it comes to banking applications, security is non-negotiable, but so is the user experience. With sensitive financial data on the line, ensuring that users interact securely with your platform is crucial. This talk will explore how UX design can be the unsung hero in protecting banking applications from security breaches. Let us discover how seamless UX can be your first line of defense in the fight against cyber threats."
            ],
            link: "https://2025.trondheimdc.no/",
            slides: "not yet available"            
          },
          {
            id: "irresistible-ux",
            title: "The irresistible UX: the psychology of brainwaves and clickbait",
            conference: "We are developers world conference 2025",
            content: [
              "This talk explores how tapping into the brain’s natural wiring can enhance user experiences. By applying cognitive biases, psychological principles, and neuroscience insights, we can craft intuitive interfaces and workflows that effortlessly guide user behavior and foster habit-forming interactions. Discover strategies to minimize friction in digital products, keeping users engaged and making interactions feel second nature."
            ],
            link: "https://www.wearedevelopers.com/world-congress",
            video: "https://www.wearedevelopers.com/en/videos/1584/the-irresistible-ux-the-psychology-of-brainwaves-and-clickbait"            
          },
          {
            id: "irresistible-ux-ndc",
            title: "The irresistible UX: the psychology of brainwaves and clickbait",
            conference: "NDC Oslo 2025",
            content: [
              "This talk explores how tapping into the brain’s natural wiring can enhance user experiences. By applying cognitive biases, psychological principles, and neuroscience insights, we can craft intuitive interfaces and workflows that effortlessly guide user behavior and foster habit-forming interactions. Discover strategies to minimize friction in digital products, keeping users engaged and making interactions feel second nature."
            ],
            link: "https://ndcoslo.com/",
            video: "https://youtu.be/VXu-2Kv0DeM?feature=shared"            
          },
          {
            id: "information-arch",
            title: "The ripple effect: how information architecture transforms your product, company, and (almost) everything",
            conference: "NDC Melbourne 2025",
            content: [
              "This talk emphasizes IA's role in a company's success, using a mobile app example to illustrate challenges and solutions. A strong IA supports sustainable growth, user-friendly products, team alignment, and overall success."
            ],
            slides: "https://docs.google.com/presentation/d/1T7jWOPZYzimdLxi1aUvWdAnmN7hrQgWSKKATZfn-cz0/edit?usp=sharing",
            video: "https://youtu.be/tym0tvH6730?feature=shared"            
          },
        ],
        2024: [
          {
            id: "collab-ux-reactday",
            title: "How to train your designer?",
            conference: "React Day Berlin 2024",
            content: [
              "Cooperation between the members of the Product Trio is necessary in order to deliver high quality product, while evolving as a professional. Interesting resonation with the popular movie How to train your dragon."
            ],
            video: "https://gitnation.com/contents/tips-and-tricks-for-achieving-seamless-collaboration-between-developers-and-designers",
          },
          {
            id: "collab-ux-stavanger",
            title: "How to train your designer?",
            conference: "#HelloStavanger 2024",
            content: [
              "Cooperation between the members of the Product Trio is necessary in order to deliver high quality product, while evolving as a professional. Interesting resonation with the popular movie How to train your dragon."
            ],
            link: "https://hellostavanger.no/",
          },
          {
            id: "cost-ux",
            title: "The cost of not having a designer",
            conference: "RenderCon Kenya 2024",
            content: [
              "I’ll be discussing the crucial role of early design integration in engineering and business. By fostering collaboration, we can enhance user satisfaction and drive innovation. It’s a topic I’m passionate about, as design plays a vital role in shaping successful products and organizations."
            ],
            video: "https://youtu.be/po_Q8mj2uDY?si=J_WeQaV2k0eCLzxw",
          },
          {
            id: "grow-ux",
            title: "How to grow in UX",
            conference: "UX Graz meetup 2024",
            content: [
              "It's always inspiring to explore potential UX growth journeys together, sharing ideas and learning from each other as we navigate this vast field. I’m really looking forward to meeting like-minded people and having meaningful discussions. We're all on this path, growing and evolving together!"
            ],
            link: "https://lnkd.in/dS6fVsyb",
          },
          {
            id: "the-ripple",
            title: "The ripple effect: how information architecture transforms your product, company, and (almost) everything",
            conference: "World IA Day 2024",
            content: [
              "This talk highlights the importance of IA for a company’s success, using a mobile app company as an example to illustrate the issues and provide solutions. A well-structured IA ensures sustainable growth, aligned teams, ultimately enhancing the product, UX, and overall organization for continued success."
            ],
            video: "https://vimeo.com/999387071",
            slides: "https://docs.google.com/presentation/d/1UHXEsxWJZ5wzzxjUKMzm1jiItCBck7PAG9mQQVb8DGI/edit?usp=sharing",
          },
          {
            id: "collab-ux-berlin",
            title: "How to train your designer?",
            conference: "DroidCon Berlin 2024",
            content: [
              "Cooperation between the members of the Product Trio is necessary in order to deliver high quality product, while evolving as a professional. Interesting resonation with the popular movie How to train your dragon."
            ],
            link: "https://www.droidcon.com/2024/08/30/how-to-train-your-designer/",
            slides: "https://docs.google.com/presentation/d/1f_WAHD8p-zqT2cvLxqmVdVwM8MEjFzdqqagIGVpwc6w/edit#slide=id.g4dfce81f19_0_45",
          },
        ],
        2022: [
          {
            id: "flawless-flows",
            title: "Flawless flows: The psychology of harmonious teamwork",
            conference: "JS Conf Japan 2022",
            content: [
              "This presentation will explore how to pull the strings in the background so that in the end we actually DEVELOP the product."
            ],
            video: "https://youtu.be/MqOLF98dKdE",
            slides: "https://docs.google.com/presentation/d/10YVYBIkyPLZcpG3xLoPD1xjdHbEa3nPMrcrVp-HYRW4/edit?usp=sharing",
          },
        ],
        2020: [
          {
            id: "starting-thread",
            title: "Starting a thread: pin the right questions",
            conference: "JS Conf Mexico (2020)",
            content: [
              "Through my journey of learning to code, I concluded a few thoughts on how mentors should help their mentees."
            ],
            video: "https://youtu.be/gmjIcE97JC8",
            slides: "https://docs.google.com/presentation/d/1kBtedOYL1cyBXvDC-6Szos2e57XygOm5LbXCJll7pao/edit?usp=sharing",
          },
        ]
      }
    },

    /* -------------------------
     * Publications
     * ------------------------- */
    publications: {
      layout: "default",
      title: "Publications",
      paragraphs: ["Articles and research publications."],
    },

    /* -------------------------
     * Testimonials
     * ------------------------- */
    testimonials: {
      layout: "testimonials",
      title: "Testimonials",
      quotes: [
        {
          text:
            "Dora is a highly skilled product designer who consistently focuses on outcomes and customer impact rather than just visual output. She excels at collaborating across disciplines on complex problems and reliably delivers work that exceeds stakeholder expectations.",
          author: "Jonathan Gall, Chief Product Officer",
        },
        {
          text:
            "Dora stands out as a rare design talent with exceptional craft, creativity, and a leadership style that fosters growth and positivity. She creates inclusive environments and turns challenges into opportunities.",
          author: "Christian Hartmann, Senior UX Researcher",
        },
        {
          text:
            "Dora elevates team performance through strong collaboration, proactive leadership, and clear ownership of new initiatives. Her reliability and availability make her a key contributor to team success.",
          author: "Alex Amoroso PhD, Senior UX Researcher",
        },
        {
          text:
            "Dora consistently delivers design concepts that exceed expectations while measurably improving user experience. Her problem-solving mindset and positive attitude make her an invaluable team member.",
          author: "Nicolas Piepenstock, Senior Product Manager",
        },
        {
          text:
            "Dora is a highly professional and talented designer with a strong grasp of design processes and user flows. Her mentorship significantly contributed to both professional and personal growth.",
          author: "Tayzer Damasceno, Data Analyst and Researcher",
        },
        {
          text:
            "Dora is an inspiring design leader who significantly strengthened design operations, tooling, and cross-functional collaboration within a complex organization.",
          author:
            "Konstantinos Partheniadis, Senior Product Designer (Prototyper)",
        },
        {
          text:
            "Dora is an organized, communicative educator who adapts her teaching approach to create engaging learning experiences and prepares individuals for professional success.",
          author: "Alaa Salim, Teaching Assistant",
        },
      ],
    },

    /* -------------------------
     * About
     * ------------------------- */
    about: {
      layout: "default",
      title: "About",
      paragraphs: [
        "As I progressed in my career, I became more interested in identifying and solving challenges.",
        "I focus on creating order through well-documented design systems, transparent collaboration, and pragmatic UX strategy.",
        "Outside of work, I’m inspired by music, books, and aesthetics — harmony and structure deeply influence how I approach design.",
        "Best wishes, Dora Makszy",
      ],
      image: {
        src: "img/doramakszy.png",
        alt: "Portrait of Dora Makszy",
      },
    },

    /* -------------------------
     * CV
     * ------------------------- */
    cv: {
      layout: "cv",
      title: "Curriculum Vitae",

      design: [
        {
          title: "Head of Design (Element Logic, 2025–current)",
          content:
            "Strategic advisor for the product trio, mentoring and managing the design team, recruiting new colleagues, and ensuring organic growth.",
        },
        {
          title: "Senior UX Designer (Element Logic, 2024–2025)",
          content:
            "Designer on eManager, the company’s largest and most successful product managing AutoStore robotic logistics.",
        },
        {
          title: "Product Design & DesignOps Lead (Futurehome, 2022–2024)",
          content:
            "Connected design, operations, and product; improved UX maturity, design systems, and delivered measurable cost savings.",
        },
        {
          title: "Senior Product Designer (GoTo, 2022)",
          content:
            "Delivered WCAG-compliant designs under tight deadlines in distributed teams.",
        },
        {
          title: "Design Team Leader (VDD:Live, 2020–2022)",
          content:
            "Built design foundations, mentored designers, and aligned UX with business goals.",
        },
        {
          title: "Design Teacher (CodeX, 2021)",
          content:
            "Taught design thinking, UX, research, and prototyping in an intensive summer camp.",
        },
        {
          title: "Senior Business Analyst & UX Designer (IBM, 2018–2019)",
          content:
            "Translated global business requirements into user-centered digital services.",
        },
        {
          title: "UI Designer (NNG, 2007–2012)",
          content:
            "Worked on navigation software, UI kits, and early iPhone pedestrian navigation.",
        },
      ],

      management: [
        {
          title: "Senior Design Project Manager (Supercharge, 2019–2020)",
          content:
            "Led UX/UI design and development for Ericsson’s MWC 2020 sales demo, coordinating teams, research, and delivery.",
        },
        {
          title: "Development Team Leader (Commsignia, 2017–2018)",
          content:
            "Led developer teams for V2X solutions, optimized resource allocation, and established OKRs.",
        },
        {
          title: "Project Manager (AImotive, 2016–2017)",
          content:
            "Leadership role in Volvo self-driving car project, managing cross-functional international teams.",
        },
        {
          title: "Scrum Master (NNG, 2014–2016)",
          content:
            "Implemented agile processes, improved transparency, and reduced delivery time across 12 teams.",
        },
      ],

      education: [
        {
          title:
            "MBA – Budapest University of Technology and Economics (2010–2013)",
          content:
            "Accounting, finance, project management, law, economics, marketing, and HR. Thesis on early-stage company management.",
        },
        {
          title:
            "Bachelor’s Degree – University of Hertfordshire (2004–2008)",
          content:
            "Business, economics, marketing, and project management. Thesis on motivating creative teams.",
        },
      ],

      skills: [
        {
          title: "Hard skills",
          content:
            "Public speaking, design systems, information architecture, design operations, documentation.",
        },
        {
          title: "Soft skills",
          content:
            "Leadership, coaching, decision-making, people management, collaboration.",
        },
      ],
    },

    /* -------------------------
     * 404
     * ------------------------- */
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
   * DOM references & helpers
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
   * Renderers
   * ========================================================= */
  function renderHero({ title, text }) {
    header.innerHTML = `<h1>${title}</h1><p>${text}</p>`;
  }

  function renderDefault({ title, paragraphs, image }) {
    const section = document.createElement("section");
    section.className = "content-section";

    const text = document.createElement("div");
    text.innerHTML = `<h2>${title}</h2>${paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("")}`;

    section.appendChild(text);

    if (image) {
      const img = document.createElement("div");
      img.className = "content-image";
      img.innerHTML = `<img src="${image.src}" alt="${image.alt}" />`;
      section.appendChild(img);
    }

    content.appendChild(section);
  }

  function renderSpeaking({ title, intro, timeline }) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${title}</h2>`;

    const layout = document.createElement("div");
    layout.className = "speaking-layout";

    /* ---------------- Left: Timeline ---------------- */
    const nav = document.createElement("nav");
    nav.className = "speaking-timeline";
    nav.setAttribute("aria-label", "Speaking timeline");

    Object.keys(timeline)
      .sort((a, b) => b - a)
      .forEach((year) => {
        if (!timeline[year].length) return;

        const yearBlock = document.createElement("div");
        yearBlock.className = "speaking-year";
        yearBlock.innerHTML = `<h3>${year}</h3>`;

        timeline[year].forEach((talk) => {
          const button = document.createElement("button");
          button.className = "speaking-item";
          button.innerHTML = `
            <span class="speaking-title">${talk.title}</span>
            <span class="speaking-conf">${talk.conference}</span>
          `;

          button.addEventListener("click", () =>
            renderSpeakingDetails(talk)
          );

          yearBlock.appendChild(button);
        });

        nav.appendChild(yearBlock);
      });

    /* ---------------- Right: Details ---------------- */
    const details = document.createElement("div");
    details.className = "speaking-details";
    details.innerHTML = `<p class="speaking-placeholder">${intro}</p>`;

    layout.append(nav, details);
    section.appendChild(layout);
    content.appendChild(section);

    /* ---------------- Details renderer ---------------- */
    function renderSpeakingDetails({ title, conference, content, link, slides, video }) {
      details.innerHTML = `
        <h3>${title}</h3>
        <p class="speaking-meta">${conference}</p>
        ${content.map((p) => `<p>${p}</p>`).join("")}
        <div class="speaking-links">
          ${link ? `<a href="${link}" target="_blank">Conference page</a>` : ""}
          ${slides ? `<a href="${slides}" target="_blank">Slides</a>` : ""}
          ${video ? `<a href="${video}" target="_blank">Video</a>` : ""}
        </div>
      `;
    }
  }


  function renderTestimonials({ title, quotes }) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${title}</h2>`;

    quotes.forEach(({ text, author }) => {
      const figure = document.createElement("figure");
      figure.className = "quote";
      figure.innerHTML = `
        <blockquote class="quote-text">“${text}”</blockquote>
        <figcaption class="quote-author">— ${author}</figcaption>
      `;
      section.appendChild(figure);
    });

    content.appendChild(section);
  }

  function renderCV({ title, design, management, education, skills }) {
    content.innerHTML += `<h2>${title}</h2>`;
    content.appendChild(createGrid("Design", design, "Management", management));
    content.appendChild(
      Object.assign(document.createElement("div"), { className: "cv-spacer" })
    );
    content.appendChild(
      createGrid("Education", education, "Skills", skills)
    );
  }

  function createGrid(titleA, itemsA, titleB, itemsB) {
    const grid = document.createElement("section");
    grid.className = "cv-grid";
    grid.append(createColumn(titleA, itemsA), createColumn(titleB, itemsB));
    return grid;
  }

  function createColumn(title, items) {
    const col = document.createElement("div");
    col.className = "cv-column";
    col.innerHTML = `<h3>${title}</h3>`;
    items.forEach(({ title, content }) => {
      col.innerHTML += `
        <details>
          <summary>${title}</summary>
          <div class="accordion-content">${content}</div>
        </details>
      `;
    });
    return col;
  }

  function renderMenu() {
    menuList.innerHTML = menuItems
      .map(
        ({ label, slug }) =>
          `<li><a href="#${slug}" class="${
            slug === getCurrentPage() ? "active" : ""
          }">${label}</a></li>`
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

    if (page.layout === "hero") renderHero(page.hero);
    else if (page.layout === "speaking") renderSpeaking(page);
    else if (page.layout === "testimonials") renderTestimonials(page);
    else if (page.layout === "cv") renderCV(page);
    else renderDefault(page);

    body.classList.toggle("dark", isDarkMode);
    themeToggle.checked = isDarkMode;

    renderMenu();
    window.scrollTo(0, 0);
  }

  /* =========================================================
   * Events
   * ========================================================= */
  themeToggle.addEventListener("change", () => {
    isDarkMode = themeToggle.checked;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    body.classList.toggle("dark", isDarkMode);
  });

  window.addEventListener("hashchange", render);
  render();
});
