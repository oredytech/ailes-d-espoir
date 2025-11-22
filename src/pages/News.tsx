import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      date: "15 Mars 2024",
      category: "Éducation",
      title: "Rentrée scolaire réussie",
      excerpt: "Tous nos enfants ont repris le chemin de l'école avec enthousiasme. Les nouveaux uniformes et fournitures ont été distribués.",
    },
    {
      date: "28 Février 2024",
      category: "Santé",
      title: "Campagne de vaccination complétée",
      excerpt: "Grâce au soutien de nos partenaires médicaux, tous les enfants ont reçu leurs vaccins à jour.",
    },
    {
      date: "10 Février 2024",
      category: "Partenariat",
      title: "Visite d'une délégation internationale",
      excerpt: "Nous avons eu l'honneur de recevoir des représentants d'ONG partenaires venus découvrir notre travail.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
            Actualités
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Suivez la vie de Papillons et les progrès de nos enfants
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="gradient-card border-0 shadow-soft hover:shadow-float transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{item.category}</span>
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="gradient-card border-0 shadow-soft max-w-3xl mx-auto">
            <CardContent className="p-12 text-center">
              <span className="text-6xl mb-6 inline-block">📰</span>
              <h2 className="font-heading text-3xl font-bold mb-4">Plus d'actualités bientôt</h2>
              <p className="text-lg text-muted-foreground">
                Nous mettons régulièrement à jour cette section avec les dernières nouvelles 
                de l'orphelinat. Revenez souvent pour suivre nos progrès !
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default News;
