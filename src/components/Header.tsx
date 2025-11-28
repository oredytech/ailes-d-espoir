import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    to: "/",
    label: "Accueil"
  }, {
    to: "/about",
    label: "À propos"
  }, {
    to: "/programs",
    label: "Programmes"
  }, {
    to: "/sponsor",
    label: "Parrainer"
  }, {
    to: "/gallery",
    label: "Galerie"
  }, {
    to: "/news",
    label: "Actualités"
  }, {
    to: "/contact",
    label: "Contact"
  }];
  return <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🦋</span>
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-primary">JIRANI</h1>
              <p className="text-xs text-muted-foreground">​Msaada</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => <Link key={link.to} to={link.to} className="px-4 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 font-medium">
                {link.label}
              </Link>)}
            <Button asChild className="ml-4">
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Faire un don
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden py-4 space-y-2 animate-in slide-in-from-top">
            {navLinks.map(link => <Link key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 font-medium">
                {link.label}
              </Link>)}
            <Button asChild className="w-full mt-4">
              <Link to="/donate" className="flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                Faire un don
              </Link>
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;