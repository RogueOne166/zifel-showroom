import { Link } from "react-router-dom";
import flyerServices from "../assets/Flyer-animation-en-magasin-1.png";
import flyerAnimations from "../assets/Flyer-animation-en-magasin-2.png";
import heroMarques from "../assets/hero-marques.jpg";

export default function Services() {
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="hero-text">
          <p className="small-title">Services Zifel</p>
          <h1>Des services pensés pour valoriser vos rayons.</h1>
          <p>
            Zifel accompagne les magasins avec des animations, de la
            personnalisation produit et des solutions de mise en rayon.
          </p>
        </div>

        <div className="hero-image-card">
          <img src={flyerServices} alt="Mise en rayon Zifel" />
        </div>
      </section>

      {/* BULLES SERVICES */}
      <section className="services-bubbles">
        <p className="small-title">Notre accompagnement</p>
        <h2>Nos solutions en magasin</h2>

        <div className="bubble-grid">
          <div className="bubble">
            <span>🎨</span>
            <h3>Animations en magasin</h3>
            <p>
              Flocage de patchs, graffiti sur valises et broderie personnalisée.
            </p>
          </div>

          <div className="bubble dark">
            <span>🛒</span>
            <h3>Mise en rayon</h3>
            <p>
              Un rayon propre, bien rempli, attractif et facile à parcourir.
            </p>
          </div>

          <div className="bubble">
            <span>✨</span>
            <h3>Personnalisation</h3>
            <p>
              Des valises, caddies et sacs uniques selon le style du client.
            </p>
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <section className="animation-section">
        <div className="animation-card">
          <img src={flyerAnimations} alt="Animations Zifel" />
        </div>

        <div className="animation-text">
          <p className="small-title">Expérience client</p>
          <h2>Des animations créatives et mémorables.</h2>
          <p>
            Les animations Zifel permettent aux magasins de proposer une
            expérience plus vivante et plus engageante autour de la bagagerie.
          </p>

          <div className="mini-bubbles">
            <span>Flocage de patchs</span>
            <span>Graffiti sur valises</span>
            <span>Broderie sur caddies</span>
            <span>Animation commerciale</span>
          </div>
        </div>
      </section>

      {/* MARQUES */}
      <section className="brands-section">
        <p className="small-title">Partenaires</p>
        <h2>Nos marques partenaires</h2>
        <p>
          Zifel travaille avec plusieurs marques reconnues dans l’univers de la
          bagagerie et des accessoires.
        </p>

        <div className="brands-card">
          <img src={heroMarques} alt="Marques partenaires Zifel" />
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Besoin d’une animation en magasin ?</h2>
        <p>Contactez Zifel pour organiser une animation ou valoriser votre rayon.</p>

        <Link to="/contact">Nous contacter</Link>
      </section>

      <style>{`
        .services-page {
          background: #ffffff;
          color: #111;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        .small-title {
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #777;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .services-hero {
          padding: 90px clamp(22px, 6vw, 80px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          background: linear-gradient(180deg, #f8f8f8, #ffffff);
        }

        .hero-text h1 {
          font-size: clamp(42px, 6vw, 76px);
          line-height: 1.02;
          margin: 0 0 24px;
          font-weight: 900;
          max-width: 720px;
        }

        .hero-text p:last-child {
          font-size: 20px;
          color: #555;
          line-height: 1.7;
          max-width: 600px;
        }

        .hero-image-card,
        .animation-card,
        .brands-card {
          border-radius: 34px;
          overflow: hidden;
          background: white;
          box-shadow: 0 18px 50px rgba(0,0,0,0.12);
          border: 1px solid #eee;
        }

        .hero-image-card img {
          width: 100%;
          height: 430px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .services-bubbles {
          padding: 90px clamp(22px, 6vw, 80px);
          text-align: center;
        }

        .services-bubbles h2,
        .animation-text h2,
        .brands-section h2,
        .services-cta h2 {
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.08;
          margin: 0 0 26px;
          font-weight: 900;
        }

        .bubble-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 55px;
        }

        .bubble {
          border-radius: 999px;
          min-height: 270px;
          padding: 42px 32px;
          background: #f6f6f6;
          border: 1px solid #eee;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: 0.25s ease;
        }

        .bubble:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.1);
        }

        .bubble.dark {
          background: #111;
          color: white;
        }

        .bubble span {
          font-size: 42px;
          margin-bottom: 18px;
        }

        .bubble h3 {
          font-size: 24px;
          margin: 0 0 14px;
        }

        .bubble p {
          color: #555;
          line-height: 1.6;
          margin: 0;
          max-width: 260px;
        }

        .bubble.dark p {
          color: #d8d8d8;
        }

        .animation-section {
          padding: 90px clamp(22px, 6vw, 80px);
          background: #f7f7f7;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .animation-card img {
          width: 100%;
          height: 430px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .animation-text p {
          font-size: 19px;
          line-height: 1.7;
          color: #555;
        }

        .mini-bubbles {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 28px;
        }

        .mini-bubbles span {
          background: white;
          border: 1px solid #eee;
          border-radius: 999px;
          padding: 16px 22px;
          font-weight: 800;
          box-shadow: 0 8px 22px rgba(0,0,0,0.05);
        }

        .brands-section {
          padding: 90px clamp(22px, 6vw, 80px);
          text-align: center;
        }

        .brands-section > p:not(.small-title) {
          color: #555;
          font-size: 19px;
          line-height: 1.7;
          max-width: 760px;
          margin: 0 auto 45px;
        }

        .brands-card {
          max-width: 1050px;
          margin: 0 auto;
        }

        .brands-card img {
          width: 100%;
          height: auto;
          display: block;
        }

        .services-cta {
          padding: 90px 24px;
          text-align: center;
          background: #111;
          color: white;
        }

        .services-cta p {
          color: #ccc;
          font-size: 19px;
          margin-bottom: 34px;
        }

        .services-cta a {
          background: white;
          color: #111;
          text-decoration: none;
          padding: 16px 30px;
          border-radius: 999px;
          font-weight: 900;
          display: inline-block;
        }

        @media (max-width: 900px) {
          .services-hero,
          .animation-section {
            grid-template-columns: 1fr;
          }

          .bubble-grid {
            grid-template-columns: 1fr;
          }

          .bubble {
            border-radius: 34px;
          }

          .hero-image-card img,
          .animation-card img {
            height: 320px;
          }

          .mini-bubbles {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
