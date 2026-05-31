import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Briefcase, Globe, ShieldCheck } from "lucide-react";

export default function APropos() {
  return (
    <main className="about-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} />
        Retour à l’accueil
      </Link>

      <section className="about-hero">
        <p className="small-title">À propos de Zifel</p>
        <h1>Une entreprise française dédiée à la bagagerie.</h1>
        <p>
          Zifel accompagne les voyageurs et les professionnels avec une sélection
          de valises, sacs de voyage et accessoires pensés pour allier praticité,
          design et fiabilité.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card large">
          <h2>Notre mission</h2>
          <p>
            Proposer une gamme de bagagerie claire, moderne et accessible, adaptée
            aux besoins du quotidien comme aux voyages longue durée.
          </p>
        </div>

        <div className="about-card">
          <Briefcase size={32} />
          <h3>Showroom professionnel</h3>
          <p>Une présentation simple et premium des collections.</p>
        </div>

        <div className="about-card">
          <Globe size={32} />
          <h3>Vision voyage</h3>
          <p>Des produits pensés pour accompagner chaque déplacement.</p>
        </div>

        <div className="about-card">
          <ShieldCheck size={32} />
          <h3>Qualité & confiance</h3>
          <p>Des bagages pratiques, durables et adaptés aux utilisateurs.</p>
        </div>
      </section>

      <section className="values">
        <div>
          <p className="small-title">Nos engagements</p>
          <h2>Une marque tournée vers la simplicité, la qualité et le service.</h2>
        </div>

        <ul>
          <li>
            <CheckCircle size={22} />
            Sélection de produits fonctionnels et modernes
          </li>
          <li>
            <CheckCircle size={22} />
            Présentation claire des collections
          </li>
          <li>
            <CheckCircle size={22} />
            Accompagnement professionnel
          </li>
          <li>
            <CheckCircle size={22} />
            Identité visuelle sobre et premium
          </li>
        </ul>
      </section>

      <style>{`
        .about-page {
          min-height: 100vh;
          background: #fff;
          color: #111;
          padding: 40px clamp(20px, 6vw, 80px) 90px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 48px;
          color: #111;
          text-decoration: none;
          font-weight: 800;
        }

        .small-title {
          text-transform: uppercase;
          letter-spacing: 5px;
          color: #777;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .about-hero {
          max-width: 950px;
          margin-bottom: 70px;
        }

        .about-hero h1 {
          font-size: clamp(46px, 7vw, 86px);
          line-height: 1;
          margin: 0 0 26px;
          font-weight: 900;
        }

        .about-hero p {
          color: #555;
          font-size: 20px;
          line-height: 1.7;
          max-width: 780px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 26px;
          margin-bottom: 80px;
        }

        .about-card {
          background: #f7f7f7;
          border: 1px solid #eee;
          border-radius: 28px;
          padding: 34px;
        }

        .about-card.large {
          grid-row: span 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-card h2 {
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.05;
          margin: 0 0 20px;
        }

        .about-card h3 {
          font-size: 24px;
          margin: 22px 0 12px;
        }

        .about-card p {
          color: #555;
          line-height: 1.7;
          font-size: 17px;
        }

        .values {
          background: #111;
          color: white;
          border-radius: 34px;
          padding: clamp(34px, 6vw, 60px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .values .small-title {
          color: #aaa;
        }

        .values h2 {
          font-size: clamp(34px, 5vw, 62px);
          line-height: 1.08;
          margin: 0;
        }

        .values ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .values li {
          display: flex;
          align-items: center;
          gap: 14px;
          font-weight: 800;
          font-size: 18px;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-card.large {
            grid-row: auto;
          }

          .values {
            grid-template-columns: 1fr;
          }

          .small-title {
            letter-spacing: 3px;
          }
        }
      `}</style>
    </main>
  );
}
