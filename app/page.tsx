import Image from 'next/image';
import Link from 'next/link';

const offers = [
  {
    title: 'Jobs for professionals',
    body: 'Healthcare workers can build a profile, apply to openings, and share experience, documents, and availability with hospitals.',
  },
  {
    title: 'Hospital hiring',
    body: 'Hospitals and facilities can post jobs, review applicants, and manage hiring from the partner tools in the app.',
  },
  {
    title: 'Ambulance booking',
    body: 'Users can request an ambulance, share a pickup location, and follow trip status. This is a booking service, not a replacement for emergency number 112.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Integrated • Medical • Solutions</p>
            <h1>Healthcare jobs and ambulance booking, in one app.</h1>
            <p>
              IV Mediz helps hospitals hire clinical talent and helps people request ambulance
              support. The Android app package is <strong>com.ivmedizapp.user</strong>.
            </p>
            <div className="actions">
              <Link className="btn btn-light" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="btn btn-ghost" href="/terms/">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
          <Image
            className="hero-logo"
            src="/assets/logo.png"
            alt="IV Mediz"
            width={280}
            height={280}
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>What IV Mediz offers</h2>
          <p className="lead">
            One platform for professionals, hospitals, ambulance partners, and people who need a
            ride to care.
          </p>
          <div className="cards">
            {offers.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="card">
            <h3>Play Store &amp; app information</h3>
            <p className="spaced">
              App name: <strong>iv mediz</strong>
              <br />
              Android package: <strong>com.ivmedizapp.user</strong>
              <br />
              Support: <a href="mailto:support@ivmediz.app">support@ivmediz.app</a> · Ambulance care
              line: 1800-102-108
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
