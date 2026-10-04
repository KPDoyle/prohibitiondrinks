import Image from "next/image";

const nav = [
  ["Story", "#story"],
  ["Spirit", "#spirit"],
  ["Archive", "#archive"],
  ["Trade", "#trade"],
  ["Contact", "#contact"],
] as const;

const slides = [
  { src: "/images/slide-end-hq.webp", alt: "Historic celebration marking the end of Prohibition" },
  { src: "/images/slide-farewell-hq.webp", alt: "Historic farewell to the 18th Amendment" },
  { src: "/images/slide-newspaper-hq.webp", alt: "Historic Prohibition newspaper scene" },
];

const slogans = [
  <>FIND <span>YOUR</span><br />HIDDEN SPIRIT.</>,
  <>PARTY LIKE <span>IT’S</span><br />PROHIBITION.</>,
  <>FORGET <span>THE</span><br />DRY STATE.</>,
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a href="#top" className="brand" aria-label="Prohibition Drinks home">
          <Image src="/images/prohibition-logo-site.webp" alt="Prohibition Drinks" width={1100} height={400} priority />
        </a>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="mailto:hello@prohibitiondrinks.com">Say hello</a>
      </header>

      <section id="top" className="hero">
        <div className="hero-slides" aria-hidden="true">
          {slides.map((slide, index) => (
            <div className={`hero-slide hero-slide-${index + 1}`} key={slide.src}>
              <Image src={slide.src} alt="" fill priority={index === 0} sizes="100vw" quality={95} />
            </div>
          ))}
        </div>
        <div className="hero-vignette" />
        <div className="grain" />
        <div className="deco-frame" aria-hidden="true"><i /><i /><i /><i /></div>

        <div className="hero-content">
          <div className="hero-logo-wrap">
            <div className="hero-logo">
              <Image src="/images/prohibition-logo-site.webp" alt="Prohibition Drinks" width={1100} height={400} priority />
            </div>
          </div>
          <div className="slogan-stage" aria-label="Prohibition Drinks brand messages">
            {slogans.map((slogan, index) => (
              <h1 className={`slogan slogan-${index + 1}`} key={index}>{slogan}</h1>
            ))}
          </div>
          <p className="hero-subline"><span>EST. IN THE SPIRIT OF 1933</span><b>•</b><span>FIND THE HIDDEN SPIRIT</span></p>
          <div className="hero-actions">
            <a className="button button-gold" href="#story">Discover the story</a>
            <a className="button button-ghost" href="#trade">Trade & partnerships</a>
          </div>
        </div>

        <div className="slider-dots" aria-hidden="true"><i /><i /><i /></div>
        <a className="scroll-cue" href="#story"><span>Scroll to discover</span><i /></a>
      </section>

      <section id="story" className="section story">
        <div className="section-number">01</div>
        <div className="story-copy">
          <p className="eyebrow">The story</p>
          <h2>Born from an era when a good drink came with a better story.</h2>
          <p>Prohibition created hidden rooms, whispered passwords and a culture of creativity that refused to disappear. Prohibition Drinks takes its cue from that independent spirit — not to recreate the past, but to bottle its attitude.</p>
          <div className="story-rule"><span>1920</span><i /><span>1933</span></div>
        </div>
        <div className="story-image">
          <Image src="/images/slide-farewell-hq.webp" alt="Historic farewell to the 18th Amendment" fill sizes="(max-width: 900px) 100vw, 38vw" quality={95} />
          <div className="image-caption">New York celebrates the end of Prohibition, 1933</div>
        </div>
      </section>

      <section id="spirit" className="statement">
        <Image src="/images/slide-newspaper-hq.webp" alt="" fill sizes="100vw" className="statement-image" quality={95} />
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
            <h2>Original imagery.<br /><em>Original attitude.</em></h2>
          </div>
        </div>
        <div className="archive-grid">
          <article className="archive-card archive-image archive-main">
            <Image src="/images/slide-end-hq.webp" alt="End of Prohibition celebration" fill sizes="(max-width: 900px) 100vw, 58vw" quality={95} />
            <div><span>01 / END OF PROHIBITION</span><h3>Raise a glass.</h3></div>
          </article>
          <article className="archive-card archive-image">
            <Image src="/images/slide-farewell-hq.webp" alt="Farewell to the 18th Amendment" fill sizes="(max-width: 900px) 100vw, 42vw" quality={95} />
            <div><span>02 / DECEMBER 1933</span><h3>A dry era ends.</h3></div>
          </article>
          <article className="archive-card gold-card">
            <span>03 / PROHIBITION DRINKS</span>
            <h3>Find your<br/>hidden spirit.</h3>
            <div className="mini-logo">
              <Image src="/images/prohibition-logo-site.webp" alt="" width={1100} height={400} />
            </div>
          </article>
        </div>
      </section>

      <section id="trade" className="trade">
        <div className="trade-bg">
          <Image src="/images/slide-end-hq.webp" alt="" fill sizes="100vw" quality={95} />
        </div>
        <div className="trade-overlay" />
        <div className="trade-inner">
          <p className="eyebrow">Trade & partnerships</p>
          <h2>Bring Prohibition<br/>to your bar, store or market.</h2>
          <p>For distribution, retail, hospitality and collaboration enquiries, start a conversation with the Prohibition Drinks team.</p>
          <a className="button button-gold" href="mailto:hello@prohibitiondrinks.com">hello@prohibitiondrinks.com</a>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Say hello.</h2>
        </div>
        <div className="contact-copy">
          <p>Want to know more about Prohibition Drinks, distribution, collaborations or the brand? We’d love to hear from you.</p>
          <a className="contact-link" href="mailto:hello@prohibitiondrinks.com">hello@prohibitiondrinks.com</a>
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          <Image src="/images/prohibition-logo-site.webp" alt="Prohibition Drinks" width={1100} height={400} />
        </div>
        <p>Find the hidden spirit.</p>
        <span>© {new Date().getFullYear()} Prohibition Drinks</span>
      </footer>
    </main>
  );
}
