import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amour",
      description: "Chaque enfant mérite d'être aimé inconditionnellement",
    },
    {
      icon: Target,
      title: "Dignité",
      description: "Respecter et honorer l'humanité de chaque enfant",
    },
    {
      icon: Eye,
      title: "Espoir",
      description: "Croire en un avenir meilleur pour chaque vie",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Offrir le meilleur accompagnement possible",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-6xl mb-6 inline-block animate-float">🦋</span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
            À propos de Papillons
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Un refuge d'amour et d'espoir pour les enfants du Nord-Kivu
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-8 text-center">
            Notre histoire
          </h2>
          <Card className="gradient-card border-0 shadow-soft">
            <CardContent className="p-8 lg:p-12">
              <p className="text-lg leading-relaxed mb-6">
                L'Orphelinat Papillons est né d'une conviction profonde : chaque enfant mérite une chance de s'épanouir, 
                peu importe les circonstances de sa naissance ou les épreuves qu'il a traversées.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Dans le contexte difficile du Nord-Kivu, où de nombreux enfants se retrouvent orphelins, abandonnés 
                ou en situation de grande vulnérabilité, nous avons créé un espace de protection, d'amour et de reconstruction.
              </p>
              <p className="text-lg leading-relaxed text-primary font-medium">
                Papillons n'est pas seulement un lieu d'hébergement. C'est une famille, un tremplin vers l'avenir, 
                un endroit où les enfants retrouvent leurs ailes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-8 text-center">
              Le fondateur
            </h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 lg:p-12">
                <p className="text-lg leading-relaxed mb-6">
                  Né dans les collines verdoyantes de l'est du Congo, le fondateur de Papillons a grandi dans un contexte 
                  où la solidarité n'était pas seulement un mot, mais une façon de survivre.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Touché très jeune par les réalités vécues par les enfants abandonnés ou orphelins, il décida de créer 
                  un espace où ils pourraient retrouver ce que la vie leur avait retiré : une famille.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Avec courage, patience et une foi profonde en l'humain, il a transformé une petite maison en un refuge. 
                  Aujourd'hui, Papillons accueille des enfants de tous âges, avec la même conviction :
                </p>
                <p className="text-xl font-heading font-bold text-primary text-center">
                  Un enfant aimé devient un adulte debout.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Notre vision</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Voir chaque enfant du Nord-Kivu grandir dans la dignité, avec accès à l'éducation, 
                aux soins et à l'amour nécessaires pour construire un avenir meilleur.
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Notre mission</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Offrir un cadre de vie sécurisé, stable et aimant aux enfants vulnérables. 
                Les accompagner vers l'autonomie à travers l'éducation, la santé et le développement personnel.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12 text-center">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-float transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
