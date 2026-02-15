import { useEffect, useState } from "react";

const PROJECTS = [
  {
    title: "Task Manager",
    desc: "CRUD task app: add/edit/delete, search & filter, LocalStorage persistence.",
    tech: ["React", "Vite", "CSS", "LocalStorage"],
    live: "https://task-manager-five-amber.vercel.app",
    github: "https://github.com/Olimjonov0204/task-manager",
  },
  {
    title: "Weather Manager",
    desc: "City search + current weather with loading/error states, debounce and recent history.",
    tech: ["React", "API", "async/await", "LocalStorage"],
    live: "https://weather-manager-eta.vercel.app",
    github: "https://github.com/Olimjonov0204/weather-manager",
  },
  {
    title: "Mini Shop",
    desc: "Cart system with quantity controls, promo code (SAVE10), and total calculations.",
    tech: ["React", "State", "JavaScript", "CSS"],
    live: "https://mini-shop-olimjonov.vercel.app",
    github: "https://github.com/Olimjonov0204/mini-shop",
  },
];

const CV_PATH = "/public/cv.docx";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className="nav">
        <div className="container nav-inner">
          <div className="brand">Otabek Olimjonov</div>

          <div className="links">
            <a className="btn" href="#projects">
              Projects
            </a>
            <a className="btn" href="#skills">
              Skills
            </a>
            <a className="btn" href="#contact">
              Contact
            </a>

            <a className="btn" href={`/cv.docx?v=${Date.now()}`} download>
              Download CV
            </a>

            <button
              className="btn"
              type="button"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>

            <a
              className="btn"
              href="https://github.com/Olimjonov0204"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="container hero">
        <h1 className="h-title">Frontend Developer (React)</h1>
        <p className="h-sub">
          I build responsive web applications using React, JavaScript, and
          modern UI practices. Below are my projects with live demos and source
          code.
        </p>

        <div className="grid">
          <div className="card">
            <div className="sec-title">About</div>
            <p className="small">
              I'm a junior frontend developer focused on React. I enjoy building
              clean UI, working with APIs, and improving user experience.
            </p>
            <div className="badges">
              <span className="badge">React</span>
              <span className="badge">JavaScript</span>
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
              <span className="badge">Git/GitHub</span>
            </div>
          </div>

          <div className="card" id="skills">
            <div className="sec-title">Skills</div>
            <div className="badges">
              <span className="badge">React Hooks</span>
              <span className="badge">Fetch / REST API</span>
              <span className="badge">Responsive Design</span>
              <span className="badge">Flexbox / Grid</span>
              <span className="badge">State Management</span>
              <span className="badge">LocalStorage</span>
              <span className="badge">Vite</span>
              <span className="badge">Git</span>
            </div>
            <p className="small" style={{ marginTop: 10 }}>
              Currently improving: TypeScript, React Router, performance
              optimization.
            </p>
          </div>
        </div>
      </div>

      <div className="container section" id="projects">
        <h2 className="sec-title">Projects</h2>
        <div className="projects">
          {PROJECTS.map((p) => (
            <div className="card" key={p.title}>
              <div className="p-title">{p.title}</div>
              <p className="p-desc">{p.desc}</p>

              <div className="badges">
                {p.tech.map((t) => (
                  <span className="badge" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="p-actions">
                <a
                  className="btn"
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a
                  className="btn"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container section" id="contact">
        <h2 className="sec-title">Contact</h2>
        <div className="card">
          <p className="small" style={{ margin: 0 }}>
            Email: <b>olimjonovotabek747@gmail.com</b>
            <br />
            Telegram: <b>@obidjonov1ch</b>
          </p>
        </div>
      </div>

      <div className="container footer">
        <div>© {new Date().getFullYear()} Otabek Olimjonov — Portfolio</div>
      </div>
    </>
  );
}
