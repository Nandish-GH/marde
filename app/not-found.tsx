import Link from "next/link";
import { Arrow, Eyebrow } from "./components";

export default function NotFound() {
  return (
    <section className="page-hero compact min-h-[calc(100vh-76px)]">
      <Eyebrow>404 · Page not found</Eyebrow>
      <h1>
        This page is not
        <br />
        <em>on the map.</em>
      </h1>
      <p>The link may be out of date, or the page may have moved. MARDE’s work is still easy to find.</p>
      <div className="actions">
        <Link className="button button-primary" href="/">
          Back to Home <Arrow />
        </Link>
        <Link className="button button-quiet" href="/support">
          Visit Support <Arrow />
        </Link>
      </div>
    </section>
  );
}
