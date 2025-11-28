import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-warm-brown text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🦋</span>
              <h3 className="font-heading text-xl font-bold">​JIRANI</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Un lieu où les enfants blessés par la vie peuvent retrouver leurs ailes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white/80 hover:text-white transition-colors">
                  Nos programmes
                </Link>
              </li>
              <li>
                <Link to="/sponsor" className="text-white/80 hover:text-white transition-colors">
                  Parrainer un enfant
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-white/80 hover:text-white transition-colors">
                  Faire un don
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div>+243 996 886 079</div>
                  <div>085 100 6476</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">contact@papillons.org</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Nord-Kivu, RD Congo</span>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Notre mission</h4>
            <p className="text-white/80 text-sm leading-relaxed italic">
              "Grandir ensemble, s'envoler demain."
            </p>
            <p className="text-white/60 text-xs mt-4">
              Un enfant aimé devient un adulte debout.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Orphelinat Papillons. Tous droits réservés.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;