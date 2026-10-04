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
          <span className="brand-mark">P</span>
          <span className="brand-copy"><strong>PROHIBITION</strong><small>DRINKS</small></span>
        </a>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="deco deco-a" />
        <div className="deco deco-b" />
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
        <div className="story-poster">
          <span>DECEMBER 5</span>
          <strong>1933</strong>
          <p>THE DRY ERA ENDS</p>
        </div>
      </section>

      <section id="spirit" className="statement">
        <div className="statement-grid" />
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
          <article className="archive-card primary-card">
            <span>01 / CRAFT</span>
            <h3>Made with character.</h3>
            <p>Dark rooms, polished brass, hand-lettered signs and the quiet confidence of a brand that does not need to shout.</p>
          </article>
          <article className="archive-card">
            <span>02 / CULTURE</span>
            <h3>Party like it’s Prohibition.</h3>
          </article>
          <article className="archive-card gold-card">
            <span>03 / ATTITUDE</span>
            <h3>Find your hidden spirit.</h3>
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
        <div className="footer-brand">PROHIBITION <span>DRINKS</span></div>
        <p>Find the hidden spirit.</p>
        <span>© {new Date().getFullYear()} Prohibition Drinks</span>
      </footer>
    </main>
  );
}
