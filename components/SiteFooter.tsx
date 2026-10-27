import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© 2026 IV Mediz. All rights reserved.</div>
        <div>
          <Link href="/privacy/">Privacy Policy</Link>
          {' · '}
          <Link href="/terms/">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
