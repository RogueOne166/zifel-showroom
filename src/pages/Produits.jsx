import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";

const produits = [
  {
    nom: "Valise cabine rigide",
    categorie: "Bagage cabine",
    description: "Format compact, idéal pour les courts séjours.",
    image:
      "https://cdnphotos.fastmag.fr/photos/116/1200x1200/td193.50cm/rose%20gold/1/photo.jpg",
  },
  {
    nom: "Valise grand format",
    categorie: "Long séjour",
    description: "Grande capacité pour les voyages longue durée.",
    image:
      "https://cdnphotos.fastmag.fr/photos/116/1200x1200/td193.80cm/light%20champagne/1/photo.jpg",
  },
  {
    nom: "Valise business",
    categorie: "Professionnel",
    description: "Design élégant pour les déplacements professionnels.",
    image:
      "https://cdnphotos.fastmag.fr/photos/116/400x400/fk273.50/rouge/1/photo.jpg",
  },
  {
    nom: "Sac de voyage",
    categorie: "Sac",
    description: "Pratique, léger et facile à transporter.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Produits() {
  return (
    <main className="produits-page">
      <header className="produits-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Retour à l’accueil
        </Link>

        <p className="small-title">Showroom Zifel</p>
        <h1>Nos produits</h1>
        <p>
          Découvrez une sélection de valises, sacs de voyage et accessoires
          pensés pour accompagner chaque déplacement.
        </p>
      </header>

      <section className="search-box">
        <Search size={20} />
        <input type="text" placeholder="Rechercher un produit..." />
      </section>

      <section className="produits-grid">
        {produits.map((produit) => (
          <article className="produit-card" key={produit.nom}>
            <div className="image-box">
              <img src={produit.image} alt={produit.nom} />
            </div>

            <div className="produit-content">
              <span>{produit.categorie}</span>
              <h2>{produit.nom}</h2>
              <p>{produit.description}</p>
              <button>Voir détails</button>
            </div>
          </article>
        ))}
      </section>

      <style>{`
        .produits-page {
          min-height: 100vh;
          background: #fff;
          color: #111;
          padding: 40px clamp(20px, 6vw, 80px) 90px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .produits-header {
          max-width: 900px;
          margin-bottom: 40px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 40px;
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

        .produits-header h1 {
          font-size: clamp(46px, 7vw, 86px);
          line-height: 1;
          margin: 0 0 24px;
          font-weight: 900;
        }

        .produits-header p {
          color: #555;
          font-size: 20px;
          line-height: 1.7;
          max-width: 760px;
        }

        .search-box {
          max-width: 520px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f5f5f5;
          border: 1px solid #e8e8e8;
          border-radius: 999px;
          padding: 16px 22px;
          margin-bottom: 42px;
        }

        .search-box input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-size: 16px;
        }

        .produits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 28px;
        }

        .produit-card {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 14px 38px rgba(0,0,0,0.06);
        }

        .image-box {
          background: #f7f7f7;
          height: 330px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 26px;
        }

        .produit-content {
          padding: 28px;
        }

        .produit-content span {
          color: #777;
          font-weight: 800;
          font-size: 14px;
          text-transform: uppercase;
        }

        .produit-content h2 {
          font-size: 25px;
          margin: 12px 0;
        }

        .produit-content p {
          color: #555;
          line-height: 1.6;
          margin-bottom: 22px;
        }

        .produit-content button {
          background: #111;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 13px 22px;
          font-weight: 800;
          cursor: pointer;
        }

        @media (max-width: 700px) {
          .produits-page {
            padding-top: 28px;
          }

          .image-box {
            height: 280px;
          }

          .small-title {
            letter-spacing: 3px;
          }
        }
      `}</style>
    </main>
  );
}
