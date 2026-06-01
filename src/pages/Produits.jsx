import { useEffect, useState } from "react";
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

import longBoardBag1 from "../assets/produits/LongBoardBag-1.jpeg";
import longBoardBag2 from "../assets/produits/LongBoardBag-2.jpeg";
import longBoardBag3 from "../assets/produits/LongBoardBag-3.jpeg";

import slides1 from "../assets/produits/slides1.jpg";
import slides2 from "../assets/produits/slides2.jpg";
import slides from "../assets/produits/slides3.jpg";

const heroSlides = [
  {
    title: "Decouvrez notre nouveau concept",
    text:  "Un format pratique, moderne et pensé pour voyager léger.",
    image: slides2,
  },
  
  {
    image: slides1,
  },
  
  {
    image: slides3,
  }
];

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

const longboardBags = [
  {
    name: "Sac à dos sous-siège",
    image: longBoardBag1,
  },
  {
    name: "Sac à dos Longboard gris",
    image: longBoardBag2,
  },
  {
    name: "Collection sacs Longboard",
    image: longBoardBag3,
  },
];

export default function Produits() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="products-page">
      <div className="back-home">
        <Link to="/">← Retour à l'accueil</Link>
      </div>

      <section className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            className={`hero-slide ${index === activeSlide ? "active" : ""}`}
            key={slide.title}
          >
            <img src={slide.image} alt={slide.title} />

            <div className="hero-overlay">
              <p className="small-title white">Showroom Zifel</p>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}

        <div className="slider-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={index === activeSlide ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="intro-section">
        <p className="small-title">Nos produits</p>
        <h2>Une sélection de bagagerie pensée pour les magasins et les voyageurs</h2>
        <p>
          Zifel propose des valises, sacs à dos, sacs de voyage et accessoires
          avec des collections adaptées à différents styles, besoins et univers.
        </p>
      </section>

      <section className="collections-section">
        <div className="section-heading">
          <p className="small-title">Collections</p>
          <h2>Explorer nos catégories</h2>
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

      <section className="longboard-section">
        <div className="section-heading center">
          <p className="small-title">Nouveauté</p>
          <h2>Sacs à dos Longboard</h2>
          <p>
            Une gamme pratique, légère et disponible en plusieurs coloris,
            idéale pour le voyage, le quotidien et les formats sous-siège.
          </p>
        </div>

        <div className="bags-grid">
          {longboardBags.map((bag) => (
            <div className="bag-card" key={bag.name}>
              <img src={bag.image} alt={bag.name} />
              <h3>{bag.name}</h3>
            </div>
          ))}
        </div>
      </section>

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
        </div>
      </section>

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
          <img src={chevignonSingle} alt="Valise Chevignon" />
          <img src={frenchWorld} alt="French World" />
        </div>
      </section>

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

        .back-home {
          padding: 18px clamp(20px, 5vw, 70px);
          background: white;
        }

        .back-home a {
          display: inline-flex;
          text-decoration: none;
          color: #111;
          font-weight: 800;
          padding: 12px 20px;
          border-radius: 999px;
          background: #f3f3f3;
          transition: 0.3s;
        }

        .back-home a:hover {
          background: #e8e8e8;
          transform: translateX(-3px);
        }

        .small-title {
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #777;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 16px;
        }

        .small-title.white {
          color: white;
        }

        .hero-slider {
          position: relative;
          width: 100%;
          height: 68vh;
          max-height: 680px;
          min-height: 500px;
          overflow: hidden;
          background: #f7f7f7;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.8s ease, visibility 0.8s ease;
        }

        .hero-slide.active {
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }

        .hero-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(26px, 5vw, 70px);
          color: white;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,0.48),
            rgba(0,0,0,0.16),
            rgba(0,0,0,0)
          );
        }

        .hero-overlay h1 {
          font-size: clamp(42px, 7vw, 86px);
          letter-spacing: -2px;
          line-height: 1;
          max-width: 760px;
          margin: 0 0 20px;
          font-weight: 950;
          text-transform: uppercase;
        }

        .hero-overlay p:last-child {
          font-size: clamp(16px, 1.6vw, 21px);
          line-height: 1.5;
          max-width: 560px;
          margin: 0;
        }

        .slider-dots {
          position: absolute;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .slider-dots button {
          width: 42px;
          height: 4px;
          border: none;
          border-radius: 999px;
          background: rgba(255,255,255,0.55);
          cursor: pointer;
          padding: 0;
        }

        .slider-dots button.active {
          background: white;
        }

        .intro-section {
          padding: 90px clamp(22px, 6vw, 80px);
          text-align: center;
          max-width: 1050px;
          margin: auto;
        }

        .intro-section h2,
        .section-heading h2,
        .featured-text h2,
        .lulu-text h2,
        .bags-card h2,
        .products-cta h2 {
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.08;
          margin: 0 0 22px;
          font-weight: 950;
        }

        .intro-section p:last-child,
        .section-heading p,
        .featured-text p,
        .lulu-text p,
        .bags-card p {
          color: #555;
          font-size: 19px;
          line-height: 1.7;
        }

        .collections-section,
        .longboard-section,
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

        .collections-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .collection-card,
        .bag-card {
          background: #f8f8f8;
          border-radius: 34px;
          overflow: hidden;
          border: 1px solid #eee;
          box-shadow: 0 14px 35px rgba(0,0,0,0.06);
          transition: 0.25s ease;
        }

        .collection-card:hover,
        .bag-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 50px rgba(0,0,0,0.1);
        }

        .collection-card img {
          width: 100%;
          height: 300px;
          object-fit: contain;
          background: white;
          display: block;
          padding: 20px;
        }

        .collection-info {
          padding: 26px;
        }

        .collection-info h3,
        .bag-card h3 {
          font-size: 25px;
          margin: 0 0 10px;
        }

        .collection-info p {
          color: #555;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        .longboard-section {
          background: #f7f7f7;
        }

        .bags-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .bag-card img {
          width: 100%;
          height: 430px;
          object-fit: contain;
          background: white;
          display: block;
          padding: 20px;
        }

        .bag-card h3 {
          padding: 24px;
        }

        .featured-section,
        .lulu-section {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 55px;
          align-items: center;
          background: white;
        }

        .lulu-section {
          background: #f7f7f7;
          grid-template-columns: 1.2fr 1fr;
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

        .bags-card {
          background: #f7f7f7;
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
          grid-template-columns: repeat(3, 1fr);
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

        @media (max-width: 1050px) {
          .collections-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .bags-grid {
            grid-template-columns: 1fr;
          }

          .featured-section,
          .lulu-section,
          .bags-card {
            grid-template-columns: 1fr;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 620px) {
          .hero-slider {
            height: 460px;
            min-height: 460px;
            max-height: 460px;
          }

          .hero-slide img {
            object-position: center;
          }

          .hero-overlay {
            justify-content: flex-end;
            padding: 0 22px 62px;
            background: linear-gradient(
              180deg,
              rgba(0,0,0,0.05),
              rgba(0,0,0,0.72)
            );
          }

          .hero-overlay h1 {
            font-size: clamp(32px, 10vw, 46px);
            line-height: 1.04;
            letter-spacing: -1px;
            max-width: 100%;
            margin-bottom: 14px;
          }

          .hero-overlay p:last-child {
            font-size: 15px;
            line-height: 1.45;
            max-width: 95%;
          }

          .small-title.white {
            font-size: 11px;
            letter-spacing: 3px;
            margin-bottom: 10px;
          }

          .collections-grid,
          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .collection-card img,
          .bag-card img,
          .featured-image img,
          .lulu-image img,
          .bags-card img,
          .gallery-grid img {
            height: 320px;
          }
        }
      `}</style>
    </main>
  );
}
