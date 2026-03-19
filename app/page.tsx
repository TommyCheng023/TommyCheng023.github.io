import Link from "next/link";
import RevealOnScroll from "./components/reveal-on-scroll";

const navItems = [
  // { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Work" },
  { href: "#teaching", label: "Teaching" },
  { href: "#contact", label: "Contact" },
];

const selectedProjects = [
  {
    title: "PeerPath ✨",
    tag: "2026",
    summary:
      "An end-to-end Machine Learning pipeline solving college problems. Earned the 3rd-place in CampusAI-MDC hackathon 2026.",
    notes: ["FastAPI", "React", "Tailwind", "OpenAI API", "PostgreSQL", "Python"],
    href: "https://github.com/TommyCheng023/PeerPath",
    cta: "View repository",
  },
  {
    title: "Homeprice Prediction APP",
    tag: "2025",
    summary:
      "A California estate price prediction app built for IDX Exchange, trained on real data over the past six months.",
    notes: ["Streamlit", "Python"],
    href: "https://github.com/TommyCheng023/homeprice_prediction_app",
    cta: "View repository",
  },
  {
    title: "RoomieConnect",
    tag: "2024",
    summary:
      "An Off-campus Roommate Marketplace developed with the CAS CS 411 team at Boston University.",
    notes: ["Flask", "HTML", "JavaScript", "CSS"],
    href: "https://github.com/TommyCheng023/CS-411-Group-Project",
    cta: "View repository",
  },
  {
    title: "Gemini Quizify",
    tag: "2024",
    summary:
      "An AI-Generated quiz tool focuses on providing learners with accessible and effective means to reinforce their understanding of various topics.",
    notes: ["RAG", "Vertex AI", "Google Cloud Platform", "Langchain", "ChromaDB", "Python", "Streamlit"],
    href: "https://github.com/TommyCheng023/CS-411-Group-Project",
    cta: "View repository",
  },
  {
    title: "Gemini Flights Manager",
    tag: "2023",
    summary:
      "A React.ja comprehensive backend system built using FastAPI, designed for managing and simulating flight-related operations.s website built with the BUCSSA Tech Department 2023 team.",
    notes: ["FastAPI", "Firebase", "VertexAI", "Streamlit", "SQLite"],
    href: "https://github.com/TommyCheng023/Gemini_Flights_Manager",
    cta: "View repository",
  },
  {
    title: "BUCSSA Application Portal",
    tag: "2023",
    summary:
      "A full-stack website built and deployed with the BUCSSA Tech Department 2023 team. The portal currently supports more than 300 active users.",
    notes: ["Flask", "AWS", "MySQL"],
    href: "https://application-portal.bucssa.org/",
    cta: "Visit website",
  },
];

const researchExperiences = [
  {
    tag: "Now",
    summary:
      "I am actively open to research opportunities in AI, data science, and related technical domains.",
    href: "mailto: xinyangc@umich.edu",
    cta: "Reach out",
    featured: true,
  },
  {
    title: "Inferring Cosmological Parameters from Mass Maps",
    tag: "2026",
    pi: { name: "Jeffery Regier", href: "https://sites.lsa.umich.edu/regier/" },
    phdLead: { name: "Tim White", href: "https://timwhite0.github.io/" },
    progress: "In progress...",
  },
  {
    title: "Historical Legacies in Arab Politics",
    tag: "2025",
    pi: { name: "Mark Tessler", href: "https://lsa.umich.edu/polisci/people/faculty/tessler.html" },
    phdLead: { name: "Hood Ahmed", href: "https://lsa.umich.edu/polisci/people/graduate-students/hood-ahmed.html" },
    progress: "Delivered a presentation on the findings in a poster symposium.",
  },
];

const skills = [
  { label: "Python", src: "/legacy/images/dev-logos/python-5.svg" },
  { label: "C++", src: "/legacy/images/dev-logos/c.svg" },
  { label: "Java", src: "/legacy/images/dev-logos/java-icon.svg" },
  { label: "C", src: "/legacy/images/dev-logos/c-1.svg" },
  { label: "R", src: "/legacy/images/dev-logos/R_logo.svg" },
  { label: "Git", src: "/legacy/images/dev-logos/git-icon.svg" },
  { label: "HTML", src: "/legacy/images/dev-logos/HTML5_Badge.svg" },
  { label: "CSS", src: "/legacy/images/dev-logos/w3-css-icon.svg" },
  {
    label: "JavaScript",
    src: "/legacy/images/dev-logos/Unofficial_JavaScript_logo_2.svg",
  },
  { label: "React", src: "/legacy/images/dev-logos/react-2.svg" },
  { label: "Flask", src: "/legacy/images/dev-logos/pocoo_flask-icon.svg" },
  { label: "TypeScript", src: "/legacy/images/dev-logos/typescript.svg" },
  { label: "Tailwind", src: "/legacy/images/dev-logos/tailwind-css-2.svg" },
  { label: "MySQL", src: "/legacy/images/dev-logos/mysql-logo.svg" },
  { label: "Postgre", src: "/legacy/images/dev-logos/postgresql.svg"},
  {
    label: "Streamlit",
    src: "/legacy/images/dev-logos/streamlit-mark-color.svg",
  },
  { label: "Node.js", src: "/legacy/images/dev-logos/nodejs-icon.svg" },
  { label: "FastAPI", src: "/legacy/images/dev-logos/fastapi-1.svg" },
  { label: "Firebase", src: "/legacy/images/dev-logos/firebase-1.svg" },
  { label: "Next.js", src: "/legacy/images/dev-logos/next-js.svg" },
  { label: "Django", src: "/legacy/images/dev-logos/django.svg" },
];

const workExperiences = [
  {
    title: "[dummy]",
    meta: "<business name missing> · <city missing>, <country missing>",
    bullets: [
      "Contents missing in this section... I'm aware of that.",
      "If I keep this section it will be too similar to a LinkedIn profile and make my webpage too long.",
      "Do you think I should make this a timeline or just remove it...",
    ],
  },
];

const teachingEntries = [
  {
    title: "PHYSICS 140x Teaching Assistant",
    meta: "University of Michigan · 2025-2026",
  },
  {
    title: "Teaching Assistant",
    meta: "GEC Academy · 2023",
  },
  {
    title: "High School Interview Advisor for ZhenghanSun",
    meta: "MyMentor · 2024",
  },
  {
    title: "High School Interview Advisor for Qimiao Zou",
    meta: "MyMentor · 2023",
  },
];

const profilePoints = [
  "Undergraduate pursuing Data Science and Mathematics double degrees at the University of Michigan, Ann Arbor.",
  "Spent the first two years at Boston University in Applied Mathematics and Computer Science.",
  "Research interests include data analysis, computer vision, and reinforcement learning.",
  "Development interests span both front-end and back-end software engineering.",
];

const contactLinks = [
  { href: "mailto:xinyangc@umich.edu", label: "Email" },
  { href: "https://github.com/TommyCheng023", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/xinyang-cheng-325825260",
    label: "LinkedIn",
  },
];

const mobileContactLinks = [
  { href: "mailto:xinyangc@umich.edu", label: "Email", icon: "email" },
  { href: "https://github.com/TommyCheng023", label: "GitHub", icon: "github" },
  {
    href: "https://www.linkedin.com/in/xinyang-cheng-325825260",
    label: "LinkedIn",
    icon: "linkedin",
  },
];

function MobileIcon({ icon }: { icon: string }) {
  if (icon === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.8-.25 7.2 5.64 7.2-5.64H4.8Zm14.7 1.91-6.58 5.15a1.5 1.5 0 0 1-1.84 0L4.5 8.41v8.84c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25V8.41Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.6 2 12.27c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .85-.28 2.78 1.05A9.42 9.42 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.93-1.33 2.78-1.05 2.78-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.58 5.07.36.32.68.93.68 1.88 0 1.36-.01 2.45-.01 2.79 0 .27.18.6.69.49A10.3 10.3 0 0 0 22 12.27C22 6.6 17.52 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.94 8.5A2.44 2.44 0 1 1 6.95 3.6a2.44 2.44 0 0 1-.01 4.9ZM4.9 10.27h4.1V20H4.9v-9.73Zm6.57 0h3.93v1.33h.06c.55-1.02 1.9-2.1 3.91-2.1 4.18 0 4.96 2.8 4.96 6.44V20h-4.1v-3.64c0-.87-.02-1.99-1.19-1.99-1.2 0-1.38.95-1.38 1.93V20h-4.1v-9.73Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/" className="brand">
          Xinyang Cheng
        </Link>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
          <Link href="/legacy" className="legacyLink">
            Legacy Mode
          </Link>
        </nav>
        <div className="mobileNav" aria-label="Mobile contact links">
          {mobileContactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobileIconLink"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={item.label}
              title={item.label}
            >
              <MobileIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </header>

      <RevealOnScroll as="section" className="profileHero">
        <img
          src="/legacy/images/my_photo.jpg"
          alt="Xinyang Cheng"
          className="profileAvatar"
        />
        <div className="profileIntro">
          <div className="eyebrow eyebrowSwap" aria-label="Wolverine Alumni">
            <span className="eyebrowPhrase eyebrowPrimary">
              🐺 Wolverine Alumni 🐺
            </span>
            <span className="eyebrowPhrase eyebrowSecondary">💙💛Go Blue!!!💛💙</span>
          </div>
          <h1 className="profileName">Xinyang Cheng</h1>
          <p className="lede profileSummary">
            I am an undergraduate pursuing Data Science and Mathematics double
            degrees at the <b><a href="https://umich.edu/">University of Michigan, Ann Arbor</a></b>. I spent my first
            two years at <b><a href="https://bu.edu/">Boston University</a></b> taking Applied Mathematics and
            Computer Science double major.
          </p>
          <div className="heroActions compactActions">
            <a href="#projects" className="primaryAction desktopOnlyAction">
              View Projects
            </a>
            <Link href="#contact" className="secondaryAction desktopOnlyAction">
              Contact Me
            </Link>
            <Link href="/legacy" className="primaryAction mobileOnlyAction">
              Legacy Mode
            </Link>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll as="section" className="skillsSection" delay={80}>
        <div className="sectionHeading skillsHeading">
          <h2>My Little Toolbox~</h2>
        </div>
        <div className="skillsRail" aria-label="Technical skills">
          <div className="skillsTrack">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill.label}-${index}`} className="skillBadge">
                <span className="skillBadgeInner">
                  <span className="skillBadgeFace skillBadgeFront">
                    <img
                      src={skill.src}
                      alt={skill.label}
                      className="skillLogo"
                    />
                  </span>
                  <span className="skillBadgeFace skillBadgeBack">
                    {skill.label}
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* <RevealOnScroll as="section" id="about" className="section">
        <div className="sectionHeading">
          <p className="eyebrow">A brief description of myself</p>
          <h2>About</h2>
        </div>

        <div className="aboutLayout">
          <RevealOnScroll as="article" className="aboutNarrative">
            <p className="aboutLead">
              My development interests span software engineering, including
              front-end development and back-end development. My research
              interests span AI, including data analysis, computer vision, and
              reinforcement learning.
            </p>
            <p>
              
            </p>
          </RevealOnScroll>

          <RevealOnScroll as="aside" className="aboutPanel" delay={120}>
            <p className="panelTitle">Profile Notes</p>
            <ul className="featureList compactList">
              {profilePoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </RevealOnScroll> */}

      <RevealOnScroll as="section" id="projects" className="section">
        <div className="sectionHeading">
          <p className="eyebrow">some cool stuff I have done so far</p>
          <h2>Projects</h2>
        </div>

        <div className="projectGrid">
          {selectedProjects.map((project, index) => (
            <RevealOnScroll
              key={project.title}
              as="article"
              className="projectCard"
              delay={index * 120}
            >
              <div className="projectCardTop">
                <span className="projectTag">{project.tag}</span>
                <span className="projectArrow">{project.tag}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="projectList">
                {project.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <a href={project.href} className="projectLink" target="_blank" rel="noreferrer">
                {project.cta}
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll as="section" id="research" className="section">
        <div className="sectionHeading">
          <p className="eyebrow">diving in the ocean of academia</p>
          <h2>Research Experience</h2>
        </div>

        <div className="projectGrid">
          {researchExperiences.map((project, index) => (
            <RevealOnScroll
              key={project.title}
              as="article"
              className={project.featured ? "projectCard researchHighlightCard" : "projectCard"}
              delay={index * 120}
            >
              {project.featured ? (
                <div className="researchHighlightContent">
                  <span className="projectTag">{project.tag}</span>
                  <div className="researchPlus" aria-hidden="true">
                    +
                  </div>
                </div>
              ) : (
                <div className="projectCardTop">
                  <span className="projectTag">{project.tag}</span>
                  <span className="projectArrow">{project.tag}</span>
                </div>
              )}
              <h3>{project.title}</h3>
              {project.featured ? (
                <>
                  <p>{project.summary}</p>
                  {/* <ul className="projectList">
                    {project.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul> */}
                </>
              ) : project.pi && project.phdLead ? (
                <div className="researchMetaList">
                  <p className="researchMetaRow">
                    <span className="researchMetaLabel">Professor:</span>{" "}
                    <a
                      href={project.pi.href}
                      className="projectLink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.pi.name}
                    </a>
                  </p>
                  <p className="researchMetaRow">
                    <span className="researchMetaLabel">PhD Lead:</span>{" "}
                    <a
                      href={project.phdLead.href}
                      className="projectLink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.phdLead.name}
                    </a>
                  </p>
                  <p className="researchMetaRow">
                    <span className="researchMetaLabel">Status:</span>{" "}
                    {project.progress}
                  </p>
                </div>
              ) : null}
              <a href={project.href} className="projectLink" target="_blank" rel="noreferrer">
                {project.cta}
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll as="section" id="experience" className="section">
        <div className="sectionHeading">
          <p className="eyebrow">Timeline or cards?</p>
          <h2>Work Experience</h2>
        </div>

        <div className="experienceList">
          {workExperiences.map((experience, index) => (
            <RevealOnScroll
              key={experience.title}
              as="article"
              className="experienceItem"
              delay={index * 120}
            >
              <h3>{experience.title}</h3>
              <p className="experienceMeta">{experience.meta}</p>
              <ul className="experienceBullets">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll as="section" id="teaching" className="section mentorshipSection">
        <div className="sectionHeading">
          <p className="eyebrow">I honestly enjoy teaching</p>
          <h2>Teaching & Advising</h2>
        </div>

        <div className="experienceList">
          {teachingEntries.map((entry, index) => (
            <RevealOnScroll
              key={`${entry.title}-${entry.meta}`}
              as="article"
              className="experienceItem"
              delay={index * 120}
            >
              <h3>{entry.title}</h3>
              <p className="experienceMeta">{entry.meta}</p>
              {/* <ul className="experienceBullets">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul> */}
            </RevealOnScroll>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll as="section" id="contact" className="section contactSection">
        <div className="contactBand">
          <div>
            <p className="eyebrow">why am i rebuilding the whole thing...</p>
            <h2>Contact Me!!</h2>
          </div>
          <div className="contactLinks">
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} className="contactChip">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <footer className="siteFooter">
        <p>© Tommy&apos;s Personal Website.</p>
        <p>Developed by Xinyang Cheng. Powered by Next.js.</p>
        <p>⚠️ This version is still under construction. Use the <a href="/legacy" className="hyperlinked_text">legacy mode</a>!</p>
      </footer>
    </main>
  );
}
