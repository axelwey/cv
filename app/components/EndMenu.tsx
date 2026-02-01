import Link from "next/link";

export default function EndMenu() {
  return (
    <div className="end-menu">
      <nav className="end-menu__nav">
        <Link href="/">Home</Link>
        <Link href="/over">Over</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
