import { Link } from "react-router-dom";
import flyerServices from "../assets/Flyer-animation-en-magasin-1.png";
import flyerAnimations from "../assets/Flyer-animation-en-magasin-2.png";
import heroMarques from "../assets/hero-marques.jpg";

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
	{/* HERO IMAGE */}
	<section className="w-full bg-white">
	  <img
	    src={flyerServices}
	    alt="Services Zifel - Mise en rayon"
	    className="w-full h-auto object-cover"
	  />
	</section>

      {/* INTRO */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nos Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Zifel accompagne les magasins avec des solutions complètes :
          animations en magasin, personnalisation de produits, mise en rayon
          et valorisation de l’espace bagagerie.
        </p>
      </section>

      {/* SERVICES */}
      <section className="px-6 pb-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl border shadow-sm bg-white">
          <h2 className="text-2xl font-semibold mb-4">
            Animations en magasin
          </h2>
          <p className="text-gray-600">
            Flocage de patchs, graffiti sur valises et broderie personnalisée
            pour offrir une expérience unique aux clients.
          </p>
        </div>

        <div className="p-8 rounded-2xl border shadow-sm bg-white">
          <h2 className="text-2xl font-semibold mb-4">
            Mise en rayon
          </h2>
          <p className="text-gray-600">
            Nous aidons les magasins à garder un rayon propre, organisé,
            attractif et bien approvisionné.
          </p>
        </div>

        <div className="p-8 rounded-2xl border shadow-sm bg-white">
          <h2 className="text-2xl font-semibold mb-4">
            Personnalisation
          </h2>
          <p className="text-gray-600">
            Les clients peuvent personnaliser leurs valises, caddies ou sacs
            pour repartir avec un produit vraiment unique.
          </p>
        </div>
      </section>

      {/* DETAIL */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Un service pensé pour les magasins
            </h2>
            <p className="text-gray-600 mb-4">
              Nos équipes interviennent directement en point de vente afin de
              mettre en valeur les produits, améliorer l’expérience client et
              faciliter le travail des équipes magasin.
            </p>
            <p className="text-gray-600">
              L’objectif : rendre le rayon plus visible, plus attractif et plus
              performant.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md bg-white">
		<img
		  src={flyerAnimations}
		  alt="Animations Zifel - Graffiti et broderie"
		  className="w-full h-full object-cover"
		/>
          </div>
        </div>
      </section>

	{/* MARQUES PARTENAIRES */}
	<section className="py-20 bg-gray-50">
	  <div className="max-w-7xl mx-auto px-6 text-center">

	    <h2 className="text-4xl font-bold mb-6">
	      Nos Marques Partenaires
	    </h2>

	    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
	      Zifel collabore avec des marques reconnues dans les univers du voyage,
	      de la bagagerie et des accessoires afin de proposer une offre complète
	      et adaptée aux attentes des consommateurs.
	    </p>

	    <div className="rounded-3xl overflow-hidden shadow-xl">
	      <img
		src={heroMarques}
		alt="Marques partenaires Zifel"
		className="w-full h-auto"
	      />
	    </div>

	  </div>
	</section>
	
      {/* CTA */}
      <section className="px-6 py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Besoin d’un accompagnement en magasin ?
        </h2>
        <p className="text-gray-300 mb-8">
          Contactez Zifel pour organiser une animation ou améliorer votre rayon.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Nous contacter
        </Link>
      </section>
    </main>
  );
}
