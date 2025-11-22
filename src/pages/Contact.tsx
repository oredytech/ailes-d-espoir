import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+243 996 886 079", "085 100 6476"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@papillons.org"],
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Nord-Kivu", "République Démocratique du Congo"],
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
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
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous sommes à votre écoute pour toute question ou projet de collaboration
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-float">
              <CardContent className="p-8 lg:p-12">
                <h2 className="font-heading text-2xl font-bold mb-6">
                  Envoyez-nous un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        placeholder="Votre prénom" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        placeholder="Votre nom" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="votre.email@exemple.com" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      placeholder="+243 XXX XXX XXX" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="Objet de votre message" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Écrivez votre message ici..." 
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 shadow-soft">
            <CardContent className="p-12 text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-2xl font-bold mb-4">Localisation</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Nord-Kivu, République Démocratique du Congo
              </p>
              <p className="text-muted-foreground">
                (Carte interactive à venir)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
