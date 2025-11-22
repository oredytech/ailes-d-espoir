import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Mail, User, MessageSquare, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Sponsor = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    "Recevoir des nouvelles régulières de l'enfant parrainé",
    "Suivre son évolution scolaire et personnelle",
    "Échanger des lettres et des photos",
    "Participer à des moments importants de sa vie",
    "Contribuer directement à son avenir",
    "Faire partie d'une communauté de parrains engagés",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons très bientôt pour finaliser le parrainage.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-6xl mb-6 inline-block animate-float">❤️</span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
            Parrainer un enfant
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Créez un lien unique et transformez une vie pour toujours
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-8 text-center">
            Pourquoi parrainer ?
          </h2>
          <Card className="gradient-card border-0 shadow-soft mb-12">
            <CardContent className="p-8 lg:p-12">
              <p className="text-lg leading-relaxed mb-6">
                Le parrainage crée un lien spécial et durable entre vous et un enfant. C'est bien plus qu'un soutien financier : 
                c'est une présence, une attention, un espoir concret dans la vie d'un enfant.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Votre engagement permet à un enfant de bénéficier d'un accompagnement complet : éducation, santé, 
                alimentation, vêtements et soutien psychologique.
              </p>
              <p className="text-xl font-heading font-bold text-primary">
                Un parrain n'est pas qu'un donateur. C'est une figure qui compte dans le cœur d'un enfant.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-float transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12 text-center">
              Comment ça marche ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Vous nous contactez",
                  description: "Remplissez le formulaire ci-dessous pour manifester votre intérêt",
                },
                {
                  step: "2",
                  title: "Nous vous présentons un enfant",
                  description: "Nous vous proposons un enfant dont le profil correspond à vos souhaits",
                },
                {
                  step: "3",
                  title: "Le lien se crée",
                  description: "Vous recevez régulièrement des nouvelles et pouvez échanger avec l'enfant",
                },
              ].map((item) => (
                <Card key={item.step} className="gradient-card border-0 shadow-soft text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-4 text-white font-heading text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-8 text-center">
            Devenez parrain aujourd'hui
          </h2>
          <Card className="border-0 shadow-float">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nom complet
                  </Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Votre nom complet" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="votre.email@exemple.com" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Téléphone
                  </Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="+243 XXX XXX XXX" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Votre message
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Parlez-nous de votre motivation à devenir parrain..." 
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Sponsor;
