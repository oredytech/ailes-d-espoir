import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Gallery = () => {
  const testimonials = [
    {
      name: "Blandine, 13 ans",
      quote: "Avant Papillons, je pensais que ma vie était finie. Ici, j'ai recommencé à sourire.",
      role: "Résidente",
    },
    {
      name: "Jean-Marie",
      quote: "Chaque enfant qui arrive ici porte une histoire lourde. Mais chaque enfant repart un peu plus léger.",
      role: "Éducateur",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
            Galerie
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Des moments de joie, d'apprentissage et d'espoir
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="gradient-card border-0 shadow-soft max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <span className="text-6xl mb-6 inline-block">📸</span>
            <h2 className="font-heading text-3xl font-bold mb-4">Galerie à venir</h2>
            <p className="text-lg text-muted-foreground">
              Nous préparons une belle collection de photos et vidéos pour vous montrer 
              la vie quotidienne à Papillons. Revenez bientôt !
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12 text-center">
            Témoignages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-float transition-all duration-300">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <p className="text-lg italic leading-relaxed mb-6 text-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-heading font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
