import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, DollarSign, Package, Calendar, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Donate = () => {
  const donationTypes = [
    {
      icon: DollarSign,
      title: "Don financier ponctuel",
      description: "Un don unique pour soutenir nos activités et les besoins immédiats des enfants.",
      cta: "Faire un don ponctuel",
    },
    {
      icon: Calendar,
      title: "Don régulier mensuel",
      description: "Un engagement mensuel qui nous permet de planifier et d'assurer la stabilité des programmes.",
      cta: "Devenir donateur régulier",
    },
    {
      icon: Package,
      title: "Don matériel",
      description: "Vêtements, fournitures scolaires, matériel éducatif, jouets, livres... Tout est utile !",
      cta: "Proposer un don matériel",
    },
  ];

  const impact = [
    {
      amount: "25$",
      description: "Nourrit un enfant pendant 1 mois",
    },
    {
      amount: "50$",
      description: "Couvre les frais de scolarité mensuels",
    },
    {
      amount: "100$",
      description: "Assure le suivi médical annuel d'un enfant",
    },
    {
      amount: "200$",
      description: "Finance l'hébergement mensuel complet",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-warm py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-6xl mb-6 inline-block animate-float">💝</span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 text-white">
            Faire un don
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Votre générosité change des vies. Chaque contribution compte.
          </p>
          <p className="text-2xl font-heading font-bold text-white">
            "Un don = une aile qui repousse"
          </p>
        </div>
      </section>

      {/* Donation Types Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12 text-center">
          Comment donner ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {donationTypes.map((type, index) => (
            <Card key={index} className="gradient-card border-0 shadow-soft hover:shadow-float transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {type.description}
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">{type.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-8 text-center">
            L'impact de votre don
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Voici quelques exemples concrets de ce que vos dons permettent de réaliser
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {impact.map((item, index) => (
              <Card key={index} className="border-0 shadow-soft text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="font-heading text-4xl font-bold text-primary mb-4">
                    {item.amount}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12 text-center">
            Votre confiance est précieuse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="gradient-card border-0 shadow-soft">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">Sécurité des paiements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tous nos systèmes de paiement sont sécurisés. Vos données bancaires sont protégées 
                  et nous ne conservons aucune information sensible.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 shadow-soft">
              <CardContent className="p-8">
                <FileText className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">Transparence totale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous publions des rapports annuels détaillés sur l'utilisation des fonds. 
                  Chaque centime est utilisé pour le bien-être des enfants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-warm py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6 text-white">
            Prêt à faire la différence ?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Chaque don, petit ou grand, a un impact direct sur la vie d'un enfant
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">
              <Heart className="w-5 h-5 mr-2" />
              Contactez-nous pour donner
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Donate;
