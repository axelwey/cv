export default function CvTimeline() {
  return (
    <div className="cv">
      {/* 1) HERO */}
      <section id="cv-1" className="cv-section cv-top-left">
        <h2 className="sticky-title">Axel Weyers</h2>
        <p>
          Bachelor Elektronica-ICT (IT, Cybersecurity & Cloud) met focus op
          infrastructuur, DevOps en security.
        </p>
        <p style={{ marginTop: 10, opacity: 0.75 }}>
          Cloud • Networking • Linux • Security
        </p>
      </section>

      {/* 2) SKILLS */}
      <section id="cv-2" className="cv-section cv-top-right">
        <h2 className="sticky-title">Skills</h2>
        <p>
          • Linux fundamentals: permissions, services & troubleshooting
          <br />
          • Networking: VLANs, routing, firewalls, segmentation
          <br />
          • CI/CD & containers: Docker, pipelines, automation basics
          <br />
          • Cybersecurity: hardening, logging/monitoring, fundamentals
        </p>
      </section>

      {/* 3) PROJECTS */}
      <section id="cv-3" className="cv-section cv-bottom-left">
        <h2 className="sticky-title">Projecten</h2>
        <p>
          • SD-WAN → Full SASE — migratie naar een volledige SASE-architectuur.
          <br />
          • Startup → Full Cloud (virtueel) — cloud-native infrastructuur voor
          een fictieve startupomgeving.
        </p>
      </section>

      {/* 4) NEXT STEP */}
      <section id="cv-4" className="cv-section cv-bottom-right">
        <h2 className="sticky-title">Volgende stap</h2>
        <p>
          Op zoek naar groei in cloud & cybersecurity via projecten,
          samenwerking en echte use-cases.
        </p>
      </section>
    </div>
  );
}
