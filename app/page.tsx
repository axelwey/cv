import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Axel Weyers</h1>
        <p className={styles.subtitle}>
          Gemotiveerde bachelorstudent Elektronica-ICT (IT, Cybersecurity & Cloud)
          met een brede technische basis en sterke interesse in moderne IT-oplossingen.
        </p>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>Profiel</h2>
          <p>
            Gemotiveerde bachelorstudent Elektronica-ICT (IT, Cybersecurity & Cloud)
            met een brede technische basis en sterke interesse in moderne IT-oplossingen.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Kennis</h2>
          <p>
            Sterke basis in softwareontwikkeling, webtechnologieën en backend-ontwikkeling,
            aangevuld met kennis van automatisatie, CI/CD, virtualisatie en fundamentele
            cybersecurity-principes.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Ervaring</h2>
          <p>
            Praktijkervaring opgebouwd binnen de opleiding via labo’s en opdrachten
            waarin softwareontwikkeling, cloud- en securityconcepten gecombineerd werden.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Ambitie</h2>
          <p>
            Technische kennis verder verdiepen en uitgroeien tot een sterke IT-professional
            in cloud en cybersecurity.
          </p>
        </article>
      </section>
    </main>
  );
}
