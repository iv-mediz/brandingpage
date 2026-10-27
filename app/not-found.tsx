import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="legal-shell">
      <div className="wrap legal" style={{ textAlign: 'center' }}>
        <p className="kicker">IV Mediz</p>
        <h1>This page is not available</h1>
        <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          The address may be incomplete. Open the home page to continue.
        </p>
        <Link className="btn btn-gold" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
