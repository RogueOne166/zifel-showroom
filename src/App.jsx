import React, { useState } from "react";
import { motion } from "framer-motion";
import headerImage from "./assets/header.jpg";
import { Routes, Route, Link } from "react-router-dom";
import Produits from "./pages/Produits";
import APropos from "./pages/APropos";

import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Truck,
  Briefcase,
  Menu,
  X,
  Star,
} from "lucide-react";

const products = [
  {
    name: "Valise cabine rigide",
    category: "Bagage cabine",
    image:
      "https://cdnphotos.fastmag.fr/photos/116/1200x1200/td193.50cm/rose%20gold/1/photo.jpg",
  },
  {
    name: "Valise business",
    category: "Collection professionnelle",
    image:
      "https://cdnphotos.fastmag.fr/photos/116/400x400/fk273.50/rouge/1/photo.jpg",
  },
  {
    name: "Grande valise voyage",
    category: "Long séjour",
    image:
      "https://cdnphotos.fastmag.fr/photos/116/1200x1200/td193.80cm/light%20champagne/1/photo.jpg",
  },
];

const services = [
  {
    title: "Import & distribution",
    text: "Une sélection de produits de bagagerie pensée pour les professionnels et les voyageurs.",
    icon: Truck,
  },
  {
    title: "Showroom produits",
    text: "Des collections présentées clairement avec un design moderne et professionnel.",
    icon: Briefcase,
  },
  {
    title: "Qualité & confiance",
    text: "Des bagages pratiques, élégants et adaptés aux besoins du quotidien.",
    icon: ShieldCheck,
  },
];

const stats = [
  { value: "1000+", label: "Références produits" },
  { value: "8", label: "Univers bagagerie" },
  { value: "France", label: "Entreprise basée en France" },
];

function Accueil() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "#home" },
    { name: "Notre métier", href: "#services" },
    { name: "Produits", href: "/produits" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">
            ZIFEL
          </Link>

          <nav className="desktop-nav">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link key={item.name} to={item.href}>
                  {item.name}
                </Link>
              ) : (
                <a key={item.name} href={item.href}>
                  {item.name}
                </a>
              )
            )}
          </nav>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {menuOpen && (
            <div className="mobile-dropdown">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </header>

      <section id="home" className="hero">
        <img src={headerImage} alt="Bagagerie Zifel" className="hero-img" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="tag">Bagagerie • Voyage • Distribution</p>

            <h1>
              Des solutions de bagagerie pour accompagner chaque voyage.
            </h1>

            <p className="hero-text">
              Zifel présente une sélection de valises, sacs de voyage et
              accessoires dans un showroom digital moderne, clair et
              professionnel.
            </p>

            <div className="hero-buttons">
              <Link to="/produits" className="btn-dark">
                Découvrir nos produits <ArrowRight size={18} />
              </Link>

              <a href="#contact" className="btn-light">
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="intro">
        <p className="small-title">Zifel bagagerie</p>
        <h2>Une présentation premium pour une marque tournée vers le voyage.</h2>
        <p>
          Le site met en avant les collections, le savoir-faire et les produits
          de l’entreprise avec une identité visuelle sobre, blanche et
          professionnelle.
        </p>
      </section>

      <section className="stats">
        {stats.map((item) => (
          <div key={item.label}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section id="services" className="services">
        <div className="section-heading">
          <p className="small-title">Notre métier</p>
          <h2>Un univers complet autour de la bagagerie.</h2>
        </div>

        <div className="service-grid">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div className="service-card" key={item.title}>
                <div className="icon-box">
                  <Icon size={30} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="products" className="products">
        <div className="section-heading center">
          <p className="small-title">Showroom</p>
          <h2>Nos collections produits</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <motion.div
              key={product.name}
              className="product-card"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220 }}
            >
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <button>Voir le produit</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div>
          <p className="small-title">À propos</p>
          <h2>Zifel, une marque française dédiée à la bagagerie.</h2>
        </div>

        <div className="about-box">
          <Star size={28} />
          <p>
            Ce site sert de vitrine professionnelle pour présenter les produits,
            les collections et l’identité de Zifel. Il peut ensuite évoluer avec
            un catalogue complet, des filtres produits, un formulaire de contact
            et une interface administrateur.
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-box">
          <p className="small-title">Contact</p>
          <h2>Vous souhaitez en savoir plus sur nos produits ?</h2>
          <p>
            Contactez Zifel pour découvrir les collections ou organiser une
            présentation showroom.
          </p>

          <div className="contact-list">
            <span>
              <MapPin size={21} /> France
            </span>
            <span>
              <Mail size={21} /> contact@zifel.fr
            </span>
            <span>
              <Phone size={21} /> +33 0 00 00 00 00
            </span>
          </div>
        </div>
      </section>

      <footer>
        © 2026 Zifel — Showroom digital réalisé par HMSK_CREATIVE
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .site {
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #111111;
          font-family: Arial, Helvetica, sans-serif;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #eeeeee;
        }

        .header-inner {
          width: 100%;
          padding: 22px clamp(20px, 6vw, 72px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .logo {
          text-decoration: none;
          color: #111;
          font-weight: 900;
          font-size: 30px;
          letter-spacing: 3px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 34px;
        }

        .desktop-nav a {
          color: #111;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .mobile-menu-button {
          display: none;
          border: none;
          background: #111;
          color: white;
          border-radius: 12px;
          padding: 10px;
          cursor: pointer;
        }

        .mobile-dropdown {
          position: absolute;
          top: 78px;
          left: 20px;
          right: 20px;
          background: white;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 18px 45px rgba(0,0,0,0.14);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .mobile-dropdown a {
          color: #111;
          text-decoration: none;
          font-weight: 800;
          font-size: 17px;
        }

        .hero {
          position: relative;
          min-height: 88vh;
          overflow: hidden;
        }

        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.95) 0%,
            rgba(255,255,255,0.82) 42%,
            rgba(255,255,255,0.25) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          min-height: 88vh;
          display: flex;
          align-items: center;
          padding: 70px clamp(24px, 6vw, 80px);
          max-width: 980px;
        }

        .tag,
        .small-title {
          text-transform: uppercase;
          letter-spacing: 5px;
          color: #777;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: clamp(44px, 7vw, 82px);
          line-height: 1.02;
          margin: 0 0 26px;
          font-weight: 900;
          max-width: 850px;
        }

        .hero-text {
          color: #444;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.7;
          max-width: 690px;
          margin-bottom: 34px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-dark,
        .btn-light {
          text-decoration: none;
          border-radius: 999px;
          padding: 15px 26px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .btn-dark {
          background: #111;
          color: white;
        }

        .btn-light {
          background: white;
          color: #111;
          border: 1px solid #ddd;
        }

        .intro {
          padding: 95px clamp(24px, 6vw, 80px);
          text-align: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .intro h2,
        .section-heading h2,
        .about h2,
        .contact h2 {
          font-size: clamp(36px, 5vw, 62px);
          line-height: 1.08;
          margin: 0;
          font-weight: 900;
        }

        .intro p:last-child {
          max-width: 780px;
          margin: 28px auto 0;
          color: #555;
          font-size: 20px;
          line-height: 1.8;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }

        .stats div {
          padding: 45px 24px;
          text-align: center;
          border-right: 1px solid #eee;
        }

        .stats div:last-child {
          border-right: none;
        }

        .stats h3 {
          font-size: clamp(32px, 5vw, 54px);
          margin: 0 0 10px;
        }

        .stats p {
          color: #666;
          margin: 0;
          font-weight: 700;
        }

        .services,
        .products,
        .about,
        .contact {
          padding: 95px clamp(24px, 6vw, 80px);
        }

        .section-heading {
          max-width: 850px;
          margin-bottom: 56px;
        }

        .center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .service-grid,
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 28px;
        }

        .service-card {
          background: #f7f7f7;
          border-radius: 26px;
          padding: 38px;
          border: 1px solid #eeeeee;
        }

        .icon-box {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .service-card h3 {
          font-size: 26px;
          margin: 0 0 14px;
        }

        .service-card p {
          color: #555;
          line-height: 1.7;
          font-size: 17px;
        }

        .products {
          background: #f6f6f6;
        }

        .product-card {
          background: white;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 14px 36px rgba(0,0,0,0.06);
        }

        .product-card img {
          width: 100%;
          height: 380px;
          object-fit: contain;
          background: white;
          padding: 30px;
        }

        .product-info {
          padding: 30px;
          border-top: 1px solid #eee;
        }

        .product-info p {
          color: #777;
          font-weight: 700;
          margin: 0 0 10px;
        }

        .product-info h3 {
          font-size: 27px;
          margin: 0 0 22px;
        }

        .product-info button {
          background: #111;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 13px 22px;
          cursor: pointer;
          font-weight: 800;
        }

        .about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .about-box {
          background: #f7f7f7;
          border-radius: 28px;
          padding: 38px;
          border: 1px solid #eee;
        }

        .about-box p {
          color: #444;
          font-size: 19px;
          line-height: 1.8;
        }

        .contact {
          background: #111;
        }

        .contact-box {
          background: white;
          border-radius: 32px;
          padding: clamp(34px, 6vw, 60px);
          max-width: 1100px;
          margin: 0 auto;
        }

        .contact-box > p {
          color: #555;
          font-size: 20px;
          line-height: 1.7;
          max-width: 760px;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 34px;
          font-weight: 800;
        }

        .contact-list span {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        footer {
          text-align: center;
          padding: 32px 20px;
          color: #666;
          background: white;
          font-size: 15px;
        }

        @media (max-width: 780px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero {
            min-height: 82vh;
          }

          .hero-overlay {
            background: rgba(255,255,255,0.84);
          }

          .hero-content {
            min-height: 82vh;
            padding-top: 70px;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .stats div {
            border-right: none;
            border-bottom: 1px solid #eee;
          }

          .stats div:last-child {
            border-bottom: none;
          }

          .about {
            grid-template-columns: 1fr;
          }

          .product-card img {
            height: 300px;
          }

          .tag,
          .small-title {
            letter-spacing: 3px;
          }
        }
      `}</style>
    </div>
  );
}


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/produits" element={<Produits />} />
      <Route path="/a-propos" element={<APropos />} />
    </Routes>
  );
}
