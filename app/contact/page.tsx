import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.contact}>
      <section className={styles.card}>
        <h1>Contact</h1>
        <p>
          Je kan me bereiken via onderstaande kanalen.
        </p>

        <ul className={styles.links}>

          <li>
            <span>E-mail</span>
            <a href="mailto:axelweyers@gmail.com">
              axelweyers@gmail.com
            </a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/axel-weyers-4243b0365"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/axel-weyers
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
