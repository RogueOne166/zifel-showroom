import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import heroMarques from "../assets/hero-marques.jpg";

const marques = [
  {
    nom: "Madisson",
    type: "Bagagerie urbaine",
    description:
      "Une marque pensée pour les voyageurs modernes avec des produits pratiques, accessibles et élégants.",
  },
  {
    nom: "Travel One",
    type: "Voyage & mobilité",
    description:
      "Des collections adaptées aux courts séjours, aux longs voyages et aux déplacements du quotidien.",
  },
  {
    nom: "David Jones",
    type: "Sacs & accessoires",
    description:
      "Une identité mode et fonctionnelle pour les sacs, accessoires et produits de transport.",
  },
  {
    nom: "Zifel Selection",
    type: "Collection showroom",
    description:
      "Une sélection de produits de bagagerie mise en avant dans un univers clair et professionnel.",
  },
];

export default function Marques() {
  return (
    <main className="marques-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} />
        Retour à l’accueil
      </Link>

      <section
        className="marques-hero"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.45)
          ), url(${heroMarques})`,
        }}
      >
        <div className="marques-hero-content">
          <p className="hero-label">Nos marques partenaires</p>

          <h1>Un univers de marques reconnues</h1>

          <p>
            Zifel collabore avec des marques fortes et variées afin de proposer
            une offre complète de bagagerie, sacs de voyage et accessoires
            adaptés à tous les styles.
          </p>
        </div>
      </section>

      <section className="marques-grid">
        {marques.map((marque) => (
          <article className="marque-card" key={marque.nom}>
            <div className="marque-logo">
              <Sparkles size={28} />
              <span>{marque.nom}</span>
            </div>

            <p className="marque-type">{marque.type}</p>
            <p className="marque-desc">{marque.description}</p>

            <Link to="/produits" className="marque-link">
              Voir les produits <ArrowRight size={18} />
            </Link>
          </article>
        ))}
      </section>

      <section className="marques-banner">
        <div>
          <p className="small-title">Showroom</p>
          <h2>
            Une sélection pensée pour être claire, moderne et professionnelle.
          </h2>
        </div>

        <Link to="/produits" className="banner-btn">
          Découvrir le catalogue <ArrowRight size={18} />
        </Link>
      </section>

      <style>{`
        .marques-page {
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
          margin-bottom: 45px;
          color: #111;
          text-decoration: none;
          font-weight: 800;
        }

        .marques-hero {
          min-height: 500px;
          display: flex;
          align-items: center;
          padding: 80px;
          border-radius: 32px;
          background-size: cover;
          background-position: center;
          color: white;
          margin-bottom: 70px;
        }

        .marques-hero-content {
          max-width: 720px;
        }

        .hero-label {
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 18px;
          color: rgba(255, 255, 255, 0.85);
        }

        .marques-hero h1 {
          font-size: clamp(46px, 7vw, 86px);
          line-height: 1;
          margin: 0 0 26px;
          font-weight: 900;
          color: white;
        }

        .marques-hero p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 20px;
          line-height: 1.7;
          max-width: 760px;
        }

        .small-title {
          text-transform: uppercase;
          letter-spacing: 5px;
          color: #777;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .marques-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 26px;
          margin-bottom: 80px;
        }

        .marque-card {
          background: #f7f7f7;
          border: 1px solid #eee;
          border-radius: 28px;
          padding: 34px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
        }

        .marque-logo {
          background: #fff;
          border-radius: 22px;
          padding: 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }

        .marque-logo span {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .marque-type {
          color: #777;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 2px;
          margin: 0 0 14px;
        }

        .marque-desc {
          color: #555;
          line-height: 1.7;
          font-size: 17px;
          margin-bottom: 28px;
        }

        .marque-link {
          margin-top: auto;
          color: #111;
          text-decoration: none;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .marques-banner {
          background: #111;
          color: white;
          border-radius: 34px;
          padding: clamp(34px, 6vw, 60px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .marques-banner .small-title {
          color: #aaa;
        }

        .marques-banner h2 {
          font-size: clamp(32px, 5vw, 58px);
          line-height: 1.08;
          margin: 0;
          max-width: 850px;
        }

        .banner-btn {
          flex-shrink: 0;
          background: white;
          color: #111;
          text-decoration: none;
          border-radius: 999px;
          padding: 15px 24px;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 850px) {
          .marques-page {
            padding: 25px 18px 70px;
          }

          .marques-hero {
            min-height: 430px;
            padding: 38px 24px;
            border-radius: 24px;
          }

          .marques-hero h1 {
            font-size: 42px;
          }

          .marques-hero p {
            font-size: 17px;
          }

          .marques-banner {
            flex-direction: column;
            align-items: flex-start;
          }

          .small-title,
          .hero-label {
            letter-spacing: 3px;
          }
        }
      `}</style>
    </main>
  );
}
