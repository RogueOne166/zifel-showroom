import { Link } from "react-router-dom";
import flyerServices from "../assets/Flyer-animation-en-magasin-1.png";
import flyerAnimations from "../assets/Flyer-animation-en-magasin-2.png";
import heroMarques from "../assets/hero-marques.jpg";

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm font-bold text-gray-500 mb-5">
              Services Zifel
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Des animations qui valorisent vos rayons.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-8 max-w-xl mb-8">
              Zifel accompagne les magasins avec des solutions de mise en rayon,
              de personnalisation et d’animations commerciales directement en
              point de vente.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition"
            >
              Nous contacter
            </Link>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white border">
            <img
              src={flyerServices}
              alt="Mise en rayon Zifel"
              className="w-full h-[420px] md:h-[520px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm font-bold text-gray-500 mb-4">
            Notre accompagnement
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            Des services pensés pour les magasins
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-3xl p-8 bg-gray-50 border hover:shadow-xl transition">
            <span className="text-4xl">🎨</span>
            <h3 className="text-2xl font-bold mt-6 mb-4">
              Animations en magasin
            </h3>
            <p className="text-gray-600 leading-7">
              Flocage de patchs, graffiti sur valises et broderie pour créer
              une expérience originale en point de vente.
            </p>
          </div>

          <div className="rounded-3xl p-8 bg-black text-white hover:shadow-xl transition">
            <span className="text-4xl">🛒</span>
            <h3 className="text-2xl font-bold mt-6 mb-4">
              Mise en rayon
            </h3>
            <p className="text-gray-300 leading-7">
              Un rayon bien rempli, ordonné et attractif pour améliorer la
              visibilité des produits.
            </p>
          </div>

          <div className="rounded-3xl p-8 bg-gray-50 border hover:shadow-xl transition">
            <span className="text-4xl">✨</span>
            <h3 className="text-2xl font-bold mt-6 mb-4">
              Personnalisation
            </h3>
            <p className="text-gray-600 leading-7">
              Les clients repartent avec une valise, un caddie ou un sac unique,
              personnalisé selon leur style.
            </p>
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[2rem] overflow-hidden shadow-xl bg-white border">
            <img
              src={flyerAnimations}
              alt="Animations graffiti et broderie Zifel"
              className="w-full h-[380px] md:h-[500px] object-cover object-center"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm font-bold text-gray-500 mb-4">
              Expérience client
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Des animations créatives et mémorables.
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-6">
              Grâce aux animations Zifel, les magasins peuvent proposer une
              expérience plus vivante, plus moderne et plus engageante autour de
              la bagagerie.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border">
                Flocage de patchs
              </div>
              <div className="bg-white rounded-2xl p-5 border">
                Graffiti sur valises
              </div>
              <div className="bg-white rounded-2xl p-5 border">
                Broderie sur caddies
              </div>
              <div className="bg-white rounded-2xl p-5 border">
                Animation en magasin
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUES */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-sm font-bold text-gray-500 mb-4">
          Partenaires
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Nos marques partenaires
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Zifel travaille avec plusieurs marques reconnues pour proposer une
          offre complète dans l’univers de la bagagerie et des accessoires.
        </p>

        <div className="rounded-[2rem] overflow-hidden shadow-xl border bg-white">
          <img
            src={heroMarques}
            alt="Marques partenaires Zifel"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-black text-white text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-5">
          Besoin d’une animation en magasin ?
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          Contactez Zifel pour organiser une animation ou valoriser votre rayon.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition"
        >
          Nous contacter
        </Link>
      </section>
    </main>
  );
}
