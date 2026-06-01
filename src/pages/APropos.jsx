import { Link } from "react-router-dom";
import aboutHero from "../assets/about/about-hero.jpg";
import {
  ArrowLeft,
  CheckCircle,
  Briefcase,
  Globe,
  ShieldCheck,
} from "lucide-react";

export default function APropos() {
  return (
    <main className="about-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} />
        Retour à l’accueil
      </Link>

      <section className="about-hero">
        <img src={aboutHero} alt="Showroom Zifel" />

        <div className="about-hero-overlay">
          <p className="small-title">À propos de Zifel</p>

          <h1>
            L’univers de la
            <br />
            bagagerie moderne
          </h1>

          <p>
            Zifel accompagne les voyageurs et les professionnels avec une
            sélection de valises, sacs de voyage et accessoires.
          </p>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-card large">
          <h2>Notre mission</h2>
          <p>
	        Notre mission est de proposer des solutions de bagagerie modernes,
	      fonctionnelles et accessibles. Nous sélectionnons des produits qui
	      répondent aux attentes des voyageurs d’aujourd’hui, en privilégiant
	      la qualité, le design et la praticité. Chaque collection est pensée
              pour accompagner aussi bien les déplacements professionnels que les
              voyages de loisirs.
          </p>
        </div>

        <div className="about-card">
          <Briefcase size={32} />
          <h3>Showroom professionnel</h3>
          <p>  Notre showroom met en valeur l’ensemble de nos collections dans un
		  environnement clair et moderne. Il permet à nos partenaires et clients
		  de découvrir facilement nos produits, leurs caractéristiques et les
		  différentes gammes disponibles tout au long de l’année.
  	</p>
        </div>

        <div className="about-card">
          <Globe size={32} />
          <h3>Vision voyage</h3>
          <p>Nous croyons que chaque voyage mérite un équipement fiable et élégant.
		  Notre vision est d’offrir des produits qui facilitent les déplacements
		  tout en apportant confort, organisation et sérénité aux voyageurs,
		  quelle que soit leur destination.
  	</p>
        </div>

        <div className="about-card">
          <ShieldCheck size={32} />
          <h3>Qualité & confiance</h3>
          <p>La satisfaction de nos clients est au cœur de notre démarche.
		  Nous accordons une attention particulière à la qualité des matériaux,
		  à la durabilité des produits et à la fiabilité de nos services afin
		  de construire une relation de confiance sur le long terme.
	</p>
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
          margin-bottom: 35px;
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
          position: relative;
          height: 75vh;
          min-height: 520px;
          border-radius: 34px;
          overflow: hidden;
          margin-bottom: 80px;
        }

        .about-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.42) 45%,
            rgba(0, 0, 0, 0.12) 100%
          );
          color: white;
          padding: clamp(32px, 6vw, 80px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-hero-overlay .small-title {
          color: rgba(255, 255, 255, 0.8);
        }

        .about-hero-overlay h1 {
          font-size: clamp(46px, 7vw, 92px);
          line-height: 1;
          margin: 0 0 26px;
          font-weight: 900;
          max-width: 850px;
        }

        .about-hero-overlay p {
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.7;
          max-width: 700px;
          color: rgba(255, 255, 255, 0.9);
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
          .about-hero {
            height: 62vh;
            min-height: 430px;
          }

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
