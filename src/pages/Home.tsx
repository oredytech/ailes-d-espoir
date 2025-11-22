import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, GraduationCap, Home as HomeIcon, Video } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const heroImages = [heroImage, heroImage, heroImage];
  
  const stats = [
    { icon: Users, value: "50+", label: "Enfants accueillis" },
    { icon: GraduationCap, value: "100%", label: "Scolarisés" },
    { icon: HomeIcon, value: "24/7", label: "Protection" },
    { icon: Heart, value: "∞", label: "Amour donné" },
  ];

  const highlights = [
    {
      title: "Hébergement sécurisé",
      description: "Un foyer chaleureux où chaque enfant trouve sa place et sa dignité.",
    },
    {
      title: "Éducation de qualité",
      description: "Scolarisation complète et accompagnement personnalisé pour chaque enfant.",
    },
    {
      title: "Santé & nutrition",
      description: "Suivi médical régulier et alimentation équilibrée pour grandir en bonne santé.",
    },
    {
      title: "Soutien psychologique",
      description: "Accompagnement émotionnel pour guérir les blessures et retrouver confiance.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {heroImages.map((img, index) => (
              <div key={index} className="relative flex-[0_0_100%] min-w-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${img})`,
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-gradient-to-t from-background to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Grandir ensemble,
            <br />
            <span className="text-primary">s'envoler demain</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/95 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md">
            L'Orphelinat Papillons offre un refuge, une famille et un avenir aux enfants vulnérables du Nord-Kivu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 shadow-float">
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Faire un don
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/sponsor">
                Parrainer un enfant
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-float hover:shadow-float hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
            Notre mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Créer un lieu où les enfants blessés par la vie peuvent retrouver leurs ailes. 
            Un lieu qui ne guérit pas tout… mais qui donne le temps, l'amour et le souffle.
          </p>
          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-soft flex items-center justify-center">
            <Video className="w-16 h-16 text-muted-foreground" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <p className="text-white font-semibold">Une journée chez Papillons (Vidéo à venir)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-center mb-12">
            Ce que nous offrons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="gradient-card hover:shadow-float transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="secondary">
              <Link to="/programs">Découvrir tous nos programmes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 inline-block animate-float-delayed">🦋</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
              La légende du papillon
            </h2>
          </div>
          <Card className="gradient-card border-0 shadow-soft">
            <CardContent className="p-8 lg:p-12">
              <p className="text-lg leading-relaxed text-muted-foreground italic">
                On raconte qu'un enfant, dans un village proche, observait un papillon blessé qui refusait de s'envoler. 
                Il avait perdu une aile. L'enfant le posa dans le creux de sa main, souffla doucement dessus — 
                et le papillon trembla, puis battit son unique aile, comme pour dire : "Donne-moi juste un peu de temps."
              </p>
              <p className="text-lg leading-relaxed text-foreground mt-6 font-medium">
                C'est de là qu'est née l'idée : créer un lieu où les enfants blessés par la vie peuvent retrouver leurs ailes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-warm py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6 text-white">
            Aidez-nous à donner des ailes
          </h2>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Chaque don, chaque geste compte. Ensemble, offrons un avenir à ces enfants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Faire un don maintenant
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
