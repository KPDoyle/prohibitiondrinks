import Image from "next/image";

const nav = [
  ["Story", "#story"],
  ["Spirit", "#spirit"],
  ["Archive", "#archive"],
  ["Trade", "#trade"],
  ["Contact", "#contact"],
] as const;

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a href="#top" className="brand" aria-label="Prohibition Drinks home">
          <Image src="/images/logo.png" alt="Prohibition Drinks" width={700} height={350} priority />
        </a>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </header>

      <section id="top" className="hero">
        <Image className="hero-image" src="/images/hero.webp" alt="Celebration marking the end of Prohibition" fill priority sizes="100vw" />
        <div className="hero-vignette" />
        <div className="grain" />
        <div className="hero-content">
          <p className="eyebrow">Est. in the spirit of 1933</p>
          <h1>Find your<br/><em>hidden</em> spirit.</h1>
          <p className="lede">For those who prefer their stories untamed, their evenings memorable and their glass anything but ordinary.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#story">Enter the story</a>
            <a className="button button-ghost" href="#trade">Trade enquiries</a>
          </div>
        </div>
        <div className="scroll-mark"><span>Discover</span><i /></div>
      </section>

      <section id="story" className="section story">
        <div className="section-number">01</div>
        <div className="story-copy">
          <p className="eyebrow">The story</p>
          <h2>Born from an era when a good drink came with a better story.</h2>
          <p>Prohibition created hidden rooms, whispered passwords and a culture of creativity that refused to disappear. Prohibition Drinks takes its cue from that independent spirit — not to recreate the past, but to bottle its attitude.</p>
        </div>
        <div className="story-image framed-image">
          <Image src="/images/farewell.webp" alt="Historic farewell to the 18th Amendment" fill sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
      </section>

      <section id="spirit" className="statement">
        <Image src="/images/we-want-beer.webp" alt="Historic We Want Beer march" fill sizes="100vw" />
        <div className="statement-overlay" />
        <div className="statement-inner">
          <p className="eyebrow">The spirit</p>
          <blockquote>“Forget the dry state.”</blockquote>
          <p>Independent by instinct. Distinctive by design.</p>
        </div>
      </section>

      <section id="archive" className="section archive">
        <div className="archive-heading">
          <div className="section-number">02</div>
          <div>
            <p className="eyebrow">From the archive</p>
            <h2>A visual language with history in every detail.</h2>
          </div>
        </div>
        <div className="archive-grid">
          <article className="archive-card tall">
            <Image src="/images/barrels.webp" alt="Whisky barrels" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <span>Craft</span>
          </article>
          <article className="archive-card">
            <Image src="/images/bottlenecks.webp" alt="Bottle necks" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <span>Character</span>
          </article>
          <article className="archive-card text-card">
            <p className="eyebrow">Find your hidden spirit</p>
            <h3>Party like it’s Prohibition.</h3>
            <p>A modern drinks brand with a rebellious past and an eye firmly on what comes next.</p>
          </article>
        </div>
      </section>

      <section id="trade" className="trade">
        <div className="trade-inner">
          <p className="eyebrow">Trade & partnerships</p>
          <h2>Bring Prohibition<br/>to your bar, store or market.</h2>
          <p>For distribution, retail, hospitality and collaboration enquiries, start a conversation with the Prohibition Drinks team.</p>
          <a className="button button-gold" href="#contact">Make an enquiry</a>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Say hello.</h2>
        </div>
        <div className="contact-copy">
          <p>Want to know more about us? Get in touch and we’ll come back to you as soon as we can.</p>
          <a className="contact-link" href="mailto:kevin@vectorlaw.co">kevin@vectorlaw.co</a>
        </div>
      </section>

      <footer>
        <a href="#top" className="footer-brand">
          <Image src="/images/logo.png" alt="Prohibition Drinks" width={700} height={350} />
        </a>
        <p>Find the hidden spirit.</p>
        <span>© {new Date().getFullYear()} Prohibition Drinks</span>
      </footer>
    </main>
  );
}
