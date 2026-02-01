import styles from "./over.module.css";

export default function OverPage() {
  return (
    <main className={styles.over}>
      {/* TIMELINE */}
      <section className={styles.timelineSection}>
        <h1 className={styles.title}>Over mij</h1>

        <div className={styles.timeline}>
          <div className={styles.item}>
            <span className={styles.year}>2006</span>
            <div className={styles.content}>
              <h3>Geboren</h3>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.year}>2021 – 2024</span>
            <div className={styles.content}>
              <h3>Studie Elektriciteit – Elektronica</h3>
              <p>Middelbaar onderwijs met focus op technische basis en praktijk.</p>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.year}>2021 – 2025</span>
            <div className={styles.content}>
              <h3>Assistent Tuinonderhoud — Project T²</h3>
              <p>Terugkerende zomerjob binnen tuin- en onderhoudswerken.</p>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.year}>Zomer 2021</span>
            <div className={styles.content}>
              <h3>Ijsschepper — Ijsbieke</h3>
              <p>Weekend- en seizoenswerk met focus op klantenservice en tempo.</p>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.year}>Zomer 2022</span>
            <div className={styles.content}>
              <h3>Productie Operator — Kemin Industries</h3>
              <p>Werken in een industriële productieomgeving met procesgerichte taken.</p>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.year}>Zomer 2023</span>
            <div className={styles.content}>
              <h3>Assistent Airco-installatie — Maes Industries</h3>
              <p>Ondersteuning bij installaties in een technische werkomgeving.</p>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.year}>Zomer 2024</span>
            <div className={styles.content}>
              <h3>Inpakker & Administratie — Biscuiterie Thijs</h3>
              <p>Combinatie van uitvoerend werk en administratieve ondersteuning.</p>
            </div>
          </div>



          <div className={styles.item}>
            <span className={styles.year}>2024 – heden</span>
            <div className={styles.content}>
              <h3>Studie IT & Cloud & Cybersecurity</h3>
              <p>Opleiding met focus op infrastructuur, cloud, DevOps en cybersecurity.</p>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.year}>Sep 2024 – heden</span>
            <div className={styles.content}>
              <h3>Keukenmedewerker — Link21</h3>
              <p>Werken in professionele keukenomgeving in combinatie met studies.</p>
            </div>
          </div>

                    <div className={styles.item}>
            <span className={styles.year}>Zomer 2025</span>
            <div className={styles.content}>
              <h3>Podiumbouwer — 360 EVENTS</h3>
              <p>
                Opbouw en afbraak van podiumstructuren op grootschalige evenementen
                (Tomorrowland, Gentse Feesten, Dominator). Verplicht behalen van VCA VOL-certificaat.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* PROJECTEN */}
      <section className={styles.projectsSection}>
        <h2 className={styles.subtitle}>Projecten</h2>

        <div className={styles.projects}>
          <div className={styles.projectCard}>
            <h3>SD-WAN naar Full SASE</h3>
            <p>
              Technisch ontwerpproject rond de migratie van een klassiek SD-WAN-netwerk
              naar een volledige SASE-architectuur.
            </p>
            <a href="/projects/sdwan-sase.pdf" target="_blank" rel="noopener noreferrer">
              Bekijk PDF
            </a>
          </div>

          <div className={styles.projectCard}>
            <h3>Startup naar Full Cloud (virtueel)</h3>
            <p>
              Virtueel project waarbij een cloud-native infrastructuur werd ontworpen
              voor een fictieve startupomgeving.
            </p>
            <a href="/projects/startup-cloud.pdf" target="_blank" rel="noopener noreferrer">
              Bekijk PDF
            </a>
          </div>
        </div>

        <div className={styles.github}>
          <a
            href="https://github.com/axelwey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bekijk mijn GitHub-profiel
          </a>
        </div>
      </section>
    </main>
  );
}
