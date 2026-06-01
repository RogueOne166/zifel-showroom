import { Link } from "react-router-dom";

import longboard from "../assets/produits/00-01 LGB-WA.jpg";
import chevignonSet from "../assets/produits/2E0A0489-2.jpg";
import chevignonSingle from "../assets/produits/2E0A0490.jpg";
import luluSet from "../assets/produits/2E0A5128-2.jpg";
import luluSingle from "../assets/produits/2E0A5129.jpg";
import frenchWorld from "../assets/produits/9150-DW.JPG";
import travelBag from "../assets/produits/3451521103386 (3).jpg";
import detail1 from "../assets/produits/LLR7 50cm black.jpg";
import detail2 from "../assets/produits/LLR7 50cm black side.jpg";
import detail3 from "../assets/produits/LLR7 50cm black top view.jpg";

const collections = [
  {
    name: "Longboard",
    text: "Set de valises rigides modernes, disponibles en plusieurs coloris.",
    image: longboard,
  },
  {
    name: "Chevignon",
    text: "Une collection premium au style affirmé et élégant.",
    image: chevignonSet,
  },
  {
    name: "Lulu Castagnette",
    text: "Des valises tendance, colorées et pensées pour le voyage.",
    image: luluSet,
  },
  {
    name: "French World",
    text: "Une gamme pratique, légère et accessible pour tous les voyageurs.",
    image: frenchWorld,
  },
];

export default function Produits() {
  return (
    <main className="products-page">
    {/* Retour accueil */}
	<div className="back-home">
	  <Link to="/">
	    ← Retour à l'accueil
	  </Link>
	</div>
      {/* HERO */}
      <section className="products-hero">
        <div>
          <p className="small-title">Showroom Zifel</p>
          <h1>Nos collections de bagagerie</h1>
          <p>
            Découvrez une sélection de valises, sacs de voyage et accessoires
            conçus pour répondre aux besoins des voyageurs et des magasins.
          </p>
        </div>

        <div className="hero-product-card">
          <img src={chevignonSingle} alt="Valise Chevignon" />
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections-section">
        <div className="section-heading">
          <p className="small-title">Collections</p>
          <h2>Des gammes pour chaque univers de voyage</h2>
        </div>

        <div className="collections-grid">
          {collections.map((item) => (
            <div className="collection-card" key={item.name}>
              <img src={item.image} alt={item.name} />

              <div className="collection-info">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured-section">
        <div className="featured-text">
          <p className="small-title">Produit vedette</p>
          <h2>Chevignon Sport Logs</h2>
          <p>
            Une collection au design premium avec une finition élégante, des
            roues 360°, une serrure à combinaison et une construction pensée
            pour accompagner les voyageurs au quotidien.
          </p>

          <div className="feature-list">
            <span>Set 3 valises</span>
            <span>Roues 360°</span>
            <span>Serrure intégrée</span>
            <span>Design premium</span>
          </div>
        </div>

        <div className="featured-image">
          <img src={chevignonSet} alt="Collection Chevignon" />
        </div>
      </section>

      {/* LULU */}
      <section className="lulu-section">
        <div className="lulu-image">
          <img src={luluSet} alt="Collection Lulu Castagnette" />
        </div>

        <div className="lulu-text">
          <p className="small-title">Collection tendance</p>
          <h2>Lulu Castagnette</h2>
          <p>
            Une gamme colorée et moderne avec des finitions soignées, idéale
            pour les clients qui recherchent un bagage pratique avec une vraie
            identité visuelle.
          </p>

          <div className="color-row">
            <span className="color-dot pink"></span>
            <span className="color-dot black"></span>
            <span className="color-dot red"></span>
            <span className="color-dot gray"></span>
          </div>
        </div>
      </section>

      {/* SACS */}
      <section className="bags-section">
        <div className="bags-card">
          <div>
            <p className="small-title">Sacs de voyage</p>
            <h2>Des formats souples et pratiques</h2>
            <p>
              En complément des valises rigides, Zifel propose aussi des sacs de
              voyage à roulettes, pratiques pour les courts séjours et les
              déplacements du quotidien.
            </p>
          </div>

          <img src={travelBag} alt="Sac de voyage à roulettes" />
        </div>
      </section>

      {/* GALERIE */}
      <section className="gallery-section">
        <div className="section-heading center">
          <p className="small-title">Détails produits</p>
          <h2>Zoom sur les finitions</h2>
        </div>

        <div className="gallery-grid">
          <img src={detail1} alt="Détail produit face" />
          <img src={detail2} alt="Détail produit côté" />
          <img src={detail3} alt="Détail produit dessus" />
          <img src={luluSingle} alt="Valise Lulu Castagnette" />
        </div>
      </section>

      {/* CTA */}
      <section className="products-cta">
        <h2>Vous souhaitez découvrir nos collections ?</h2>
        <p>
          Contactez Zifel pour organiser une présentation ou obtenir plus
          d’informations sur nos produits.
        </p>

        <Link to="/contact">Nous contacter</Link>
      </section>

      <style>{`
        .products-page {
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

        .products-hero {
          padding: 90px clamp(22px, 6vw, 80px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
          background: linear-gradient(180deg, #f8f8f8, #ffffff);
        }

        .products-hero h1 {
          font-size: clamp(44px, 7vw, 82px);
          line-height: 1.02;
          margin: 0 0 24px;
          font-weight: 900;
          max-width: 800px;
        }

        .products-hero p:last-child {
          font-size: 20px;
          color: #555;
          line-height: 1.7;
          max-width: 650px;
        }

        .hero-product-card {
          background: #f7f7f7;
          border-radius: 38px;
          padding: 35px;
          box-shadow: 0 18px 50px rgba(0,0,0,0.1);
          border: 1px solid #eee;
        }

        .hero-product-card img {
          width: 100%;
          height: 520px;
          object-fit: contain;
          display: block;
        }

        .collections-section,
        .featured-section,
        .lulu-section,
        .bags-section,
        .gallery-section {
          padding: 90px clamp(22px, 6vw, 80px);
        }

        .section-heading {
          max-width: 850px;
          margin-bottom: 55px;
        }

        .section-heading.center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .section-heading h2,
        .featured-text h2,
        .lulu-text h2,
        .bags-card h2,
        .products-cta h2 {
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.08;
          margin: 0 0 24px;
          font-weight: 900;
        }

        .collections-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .collection-card {
          background: #f7f7f7;
          border-radius: 34px;
          overflow: hidden;
          border: 1px solid #eee;
          box-shadow: 0 14px 40px rgba(0,0,0,0.06);
          transition: 0.25s ease;
        }

        .collection-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 50px rgba(0,0,0,0.1);
        }

        .collection-card img {
          width: 100%;
          height: 380px;
          object-fit: contain;
          background: white;
          display: block;
          padding: 20px;
        }

        .collection-info {
          padding: 30px;
        }

        .collection-info h3 {
          font-size: 30px;
          margin: 0 0 12px;
        }

        .collection-info p {
          color: #555;
          font-size: 17px;
          line-height: 1.6;
          margin: 0;
        }

        .featured-section,
        .lulu-section {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 55px;
          align-items: center;
          background: #f7f7f7;
        }

        .lulu-section {
          background: white;
          grid-template-columns: 1.2fr 1fr;
        }

        .featured-text p,
        .lulu-text p,
        .bags-card p {
          color: #555;
          font-size: 19px;
          line-height: 1.7;
          max-width: 620px;
        }

        .feature-list {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .feature-list span {
          background: white;
          border: 1px solid #eee;
          border-radius: 999px;
          padding: 14px 20px;
          font-weight: 800;
          box-shadow: 0 8px 20px rgba(0,0,0,0.04);
        }

        .featured-image,
        .lulu-image {
          background: white;
          border-radius: 36px;
          padding: 28px;
          box-shadow: 0 18px 45px rgba(0,0,0,0.08);
          border: 1px solid #eee;
        }

        .featured-image img,
        .lulu-image img {
          width: 100%;
          height: 500px;
          object-fit: contain;
          display: block;
        }

        .color-row {
          display: flex;
          gap: 14px;
          margin-top: 28px;
        }

        .color-dot {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 2px solid white;
          box-shadow: 0 0 0 1px #ddd;
        }

        .color-dot.pink { background: #f3b8b6; }
        .color-dot.black { background: #111; }
        .color-dot.red { background: #f24444; }
        .color-dot.gray { background: #777; }

        .bags-section {
          background: #f7f7f7;
        }

        .bags-card {
          background: white;
          border-radius: 38px;
          padding: clamp(28px, 5vw, 55px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          box-shadow: 0 18px 50px rgba(0,0,0,0.08);
          border: 1px solid #eee;
        }

        .bags-card img {
          width: 100%;
          height: 500px;
          object-fit: contain;
          display: block;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .gallery-grid img {
          width: 100%;
          height: 360px;
          object-fit: contain;
          background: #f7f7f7;
          border-radius: 28px;
          padding: 20px;
          border: 1px solid #eee;
        }

        .products-cta {
          padding: 90px 24px;
          text-align: center;
          background: #111;
          color: white;
        }

        .products-cta p {
          color: #ccc;
          font-size: 19px;
          margin: 0 auto 34px;
          max-width: 700px;
          line-height: 1.7;
        }

        .products-cta a {
          background: white;
          color: #111;
          text-decoration: none;
          padding: 16px 30px;
          border-radius: 999px;
          font-weight: 900;
          display: inline-block;
        }
        
        .back-home {
	  padding: 30px 40px 0;
	}

	.back-home a {
	  display: inline-flex;
	  align-items: center;
	  gap: 8px;
	  text-decoration: none;
	  color: #111;
	  font-weight: 700;
	  padding: 12px 20px;
	  border-radius: 999px;
	  background: #f5f5f5;
	  transition: 0.3s;
	}

	.back-home a:hover {
	  background: #e9e9e9;
	  transform: translateX(-3px);
	}

        @media (max-width: 950px) {
          .products-hero,
          .featured-section,
          .lulu-section,
          .bags-card {
            grid-template-columns: 1fr;
          }

          .collections-grid {
            grid-template-columns: 1fr;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-product-card img,
          .featured-image img,
          .lulu-image img,
          .bags-card img {
            height: 360px;
          }
        }

        @media (max-width: 560px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .gallery-grid img {
            height: 320px;
          }
        }
      `}</style>
    </main>
  );
}
