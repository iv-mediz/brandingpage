import Image from 'next/image';
import Link from 'next/link';

const offers = [
  {
    title: 'Talent, placed with care',
    body: 'Healthcare professionals build a trusted profile, apply to openings, and share credentials with hospitals that are hiring.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 9a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: 'Hospitals that hire faster',
    body: 'Facilities post roles, review applicants, and manage hiring from partner tools designed for clinical teams.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: 'Ambulance, on request',
    body: 'Share a pickup location and follow trip status. This is a booking service — for emergencies in India, call 112.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 13h13l5 4v4H3v-8Zm4 8v-2m10 2v-2M8 13V6h6l4 4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Integrated · Medical · Solutions</p>
            <h1>The quieter way to find care talent — and a ride to care.</h1>
            <p className="hero-lead">
              IV Mediz brings hospital hiring and ambulance booking into one refined mobile
              experience for professionals, partners, and families.
            </p>
            <div className="actions">
              <Link className="btn btn-gold" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="btn btn-outline" href="/terms/">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
          <div className="logo-wrap">
            <Image src="/assets/logo.png" alt="IV Mediz" width={280} height={280} priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">The platform</p>
          <h2>Crafted for healthcare, not generic classifieds.</h2>
          <p className="lead">
            One home for clinicians, hospitals, ambulance partners, and people who need a ride —
            designed with the same care you expect from the work itself.
          </p>
          <div className="cards">
            {offers.map((item) => (
              <article className="card" key={item.title}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="app-panel">
            <div>
              <p className="kicker" style={{ color: '#c9a36a' }}>
                Google Play
              </p>
              <h3>iv mediz on Android</h3>
              <p>
                Package <strong>com.ivmedizapp.user</strong>. Support is available at
                support@ivmediz.app, with ambulance assistance on 1800-102-108.
              </p>
            </div>
            <ul className="meta-list">
              <li>
                <span>App name</span>
                <strong>iv mediz</strong>
              </li>
              <li>
                <span>Android package</span>
                <strong>com.ivmedizapp.user</strong>
              </li>
              <li>
                <span>Support</span>
                <strong>
                  <a href="mailto:support@ivmediz.app">support@ivmediz.app</a>
                </strong>
              </li>
              <li>
                <span>Care line</span>
                <strong>1800-102-108</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
