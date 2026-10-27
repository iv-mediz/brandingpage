import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© 2026 IV Mediz · Integrated Medical Solutions</div>
        <div>
          <Link href="/privacy/">Privacy Policy</Link>
          {'  ·  '}
          <Link href="/terms/">Terms &amp; Conditions</Link>
          {'  ·  '}
          <a href="mailto:support@ivmediz.app">support@ivmediz.app</a>
        </div>
      </div>
    </footer>
  );
}
