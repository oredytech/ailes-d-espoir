import { Card, CardContent } from "@/components/ui/card";
import { Home, GraduationCap, Heart, Brain, Palette, Users, Briefcase } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/AnimatedSection";
import professionalImage from "@/assets/programs-professional.jpg";
import cultureImage from "@/assets/programs-culture.jpg";

const Programs = () => {
  const programs = [
    {
      icon: Home,
      title: "Hébergement",
      description: "Un foyer sécurisé, chaleureux et stable où chaque enfant dispose de son espace personnel. Nous offrons un cadre de vie qui favorise le développement harmonieux dans un environnement familial.",
    },
    {
      icon: GraduationCap,
      title: "Éducation",
      description: "Scolarisation complète de tous les enfants dans des établissements de qualité. Soutien scolaire personnalisé, fournitures et uniformes. Notre objectif : 100% de réussite éducative.",
    },
    {
      icon: Heart,
      title: "Santé et nutrition",
      description: "Suivi médical régulier, vaccinations, soins dentaires et consultations spécialisées. Alimentation équilibrée et adaptée aux besoins de chaque tranche d'âge pour une croissance optimale.",
    },
    {
      icon: Brain,
      title: "Soutien psychologique",
      description: "Accompagnement émotionnel individualisé pour aider les enfants à guérir leurs traumatismes. Thérapies de groupe, activités de développement personnel et suivi psychosocial continu.",
    },
    {
      icon: Palette,
      title: "Culture & créativité",
      description: "Ateliers artistiques, musique, danse, théâtre et arts plastiques. Nous encourageons l'expression créative comme outil de guérison et de développement de la confiance en soi.",
    },
    {
      icon: Users,
      title: "Réinsertion familiale",
      description: "Travail avec les familles biologiques quand c'est possible et dans l'intérêt de l'enfant. Médiation, suivi et accompagnement pour des réunifications réussies et durables.",
    },
    {
      icon: Briefcase,
      title: "Préparation professionnelle",
      description: "Pour les adolescents : formations professionnelles, stages en entreprise, développement de compétences et accompagnement vers l'autonomie et l'insertion socio-professionnelle.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
            Nos programmes
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Un accompagnement complet et personnalisé pour chaque enfant
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="gradient-card border-0 shadow-soft hover:shadow-float transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-primary">
                    {program.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SlideUp>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-8 text-center">
                Notre approche holistique
              </h2>
            </SlideUp>
            <div className="grid lg:grid-cols-2 gap-8">
              <FadeIn delay={0.2}>
                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-soft">
                  <img 
                    src={cultureImage} 
                    alt="Enfants faisant des activités créatives" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Card className="border-0 shadow-soft h-full flex items-center">
                  <CardContent className="p-8 lg:p-12">
                    <p className="text-lg leading-relaxed mb-6">
                      Chez Papillons, nous croyons qu'un enfant ne peut s'épanouir que si tous ses besoins sont pris en compte : 
                      physiques, émotionnels, éducatifs et sociaux.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                      Notre approche intègre donc tous ces aspects dans un parcours personnalisé qui respecte le rythme 
                      et les besoins spécifiques de chaque enfant.
                    </p>
                    <p className="text-xl font-heading font-bold text-primary">
                      Nous ne nous contentons pas d'héberger des enfants. Nous construisons leur avenir.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <SlideUp>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-8 text-center">
              Objectifs stratégiques
            </h2>
          </SlideUp>
          <FadeIn delay={0.2}>
            <div className="relative mb-8 h-64 rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={professionalImage} 
                alt="Formation professionnelle des adolescents" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          <div className="space-y-4">
            {[
              "Améliorer continuellement les conditions d'hébergement et de nutrition",
              "Assurer une scolarisation 100% effective avec un suivi personnalisé",
              "Développer des programmes d'apprentissage professionnalisants adaptés",
              "Mettre en place un suivi psychosocial permanent et de qualité",
              "Développer des partenariats locaux et internationaux durables",
            ].map((objective, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1}>
                <Card className="border-l-4 border-l-primary shadow-soft hover:shadow-float transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <p className="text-lg">{objective}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
