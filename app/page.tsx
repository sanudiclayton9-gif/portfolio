import Terminal from "@/components/Terminal";
import Project from "@/components/Project";

const EMAIL = "sanudiclayton9@gmail.com";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <span className="dot"><img src="c:\Users\dell\Downloads\portfolio-nextjs\public\favicon.svg" alt="" /></span>clayton.sanudi
          </div>
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#work">work</a>
            <a href="#contact">contact</a>
          </div>
          <a className="nav-cta" href={`mailto:${EMAIL}`}>
            say hello
          </a>
          <button className="menu-btn" aria-label="Menu">
            ☰
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="eyebrow">available for new opportunities</div>

            <Terminal />

            <h1>
              I build software that <em>just works.</em>
            </h1>
            <p>
              I&apos;m Clayton Sanudi, a software engineer who turns
              ambiguous problems into systems people can rely on — clean
              interfaces, solid architecture, and code that&apos;s easy for
              the next engineer to pick up.
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href={`mailto:${EMAIL}`}>
                Get in touch →
              </a>
              <a className="btn-ghost" href="#work">
                View my work
              </a>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="section-label">about</div>
            <h2>Engineering with judgment, not just output.</h2>

            <div className="about-grid">
              <div>
                <p>
                  I care about the full lifecycle of a piece of software —
                  from the first design decision to the boring parts that
                  keep it running at 3am. I like working close to the
                  problem: understanding what a system actually needs to do
                  before deciding how to build it.
                </p>
                <p>
                  Most of my work sits at the intersection of backend
                  systems and the interfaces that sit on top of them — APIs
                  that are pleasant to build against, and front ends that
                  don&apos;t fight the person using them.
                </p>
                <div className="stack">
                  <span className="chip">
                    <b>lang</b> JavaScript / TypeScript
                  </span>
                  
                  <span className="chip">
                    <b>fe</b> Next.js
                  </span>
                  <span className="chip">
                    <b>be</b> Node.js
                  </span>
                  <span className="chip">
                    <b>db</b>MySQL
                  </span>
                  
                </div>
              </div>

              <dl className="facts">
                <dt>name</dt>
                <dd>Clayton Sanudi</dd>
                <dt>role</dt>
                <dd>Software Engineer</dd>
                <dt>focus</dt>
                <dd>Full-stack development, backend systems &amp; APIs</dd>
                <dt>email</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`} style={{ color: "var(--accent)" }}>
                    {EMAIL}
                  </a>
                </dd>
                <dt>status</dt>
                <dd>Open to new roles &amp; freelance work</dd>
              </dl>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="section-label">selected work</div>
            <div className="work-intro">
              <h2>Projects built to solve a real problem.</h2>
              <p>
                A sample of the kind of work I do — systems and products
                designed around what the people using them actually need.
              </p>
            </div>

            <Project
              category="Internal tools"
              year="2025"
              name="Northstar"
              coverClass="proj-green"
              tags="Backend · API design · React"
              title="An internal platform that unified three disconnected admin tools into one."
              challenge="Teams were switching between disconnected internal tools to complete a single workflow, losing context and time at every handoff."
              outcome="A single platform with a shared API layer, cutting the steps needed to complete common tasks and giving every team the same source of truth."
              stats={[
                { value: "40%", label: "faster onboarding" },
                { value: "12", label: "services integrated" },
              ]}
            />

            <Project
              category="Developer tools"
              year="2025"
              name="Pulse"
              coverClass="proj-blue"
              tags="Full-stack · Observability · Node.js"
              title="A monitoring dashboard that turns raw service logs into a clear operational picture."
              challenge="Engineers had access to logs and metrics but no fast way to tell what actually needed attention."
              outcome="A real-time dashboard with alerting that surfaces the right signal first, so engineers spend less time digging and more time fixing."
              stats={[
                { value: "3×", label: "faster incident response" },
                { value: "99.9%", label: "uptime tracked" },
              ]}
            />

            <Project
              category="Fintech"
              year="2026"
              name="Ledger"
              coverClass="proj-amber"
              tags="React · PostgreSQL · Security"
              title="A transaction management app built with correctness and auditability as first principles."
              challenge="The product needed to handle sensitive financial data with zero tolerance for silent errors."
              outcome="A fully audited transaction pipeline with strict validation at every layer, and an interface that makes every state change traceable."
              stats={[
                { value: "0", label: "data integrity incidents" },
                { value: "100%", label: "transactions audited" },
              ]}
            />

            <p className="note">
              Sample projects shown above — swap in your real case studies,
              screenshots, and numbers in app/page.tsx whenever you&apos;re
              ready.
            </p>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <div className="section-label">contact</div>
            <h2>Have a problem worth solving?</h2>
            <p>
              I&apos;m currently open to new roles and freelance
              engagements. If something you&apos;re building needs a hand,
              I&apos;d like to hear about it.
            </p>
            <div className="contact-row">
              <a className="email-btn" href={`mailto:${EMAIL}`}>
                Email me →
              </a>
              <span className="email-text">
                or reach me directly at <b>{EMAIL}</b>
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-row">
          <span>© 2026 Clayton Sanudi</span>
          <span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </span>
        </div>
      </footer>
    </>
  );
}
