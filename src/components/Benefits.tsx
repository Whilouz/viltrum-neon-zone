import { Monitor, Wifi, Clock, Trophy } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Monitor,
      title: "PCs Gaming",
      description: "Hardware de última generación con RTX 4080, procesadores Intel i7 y 32GB RAM",
      color: "text-accent"
    },
    {
      icon: Wifi,
      title: "Internet Ultra",
      description: "Conexión de fibra óptica de 1000 Mbps para gaming sin lag ni interrupciones",
      color: "text-accent-pink"
    },
    {
      icon: Clock,
      title: "24/7 Disponible",
      description: "Abierto las 24 horas, todos los días del año para tu comodidad",
      color: "text-secondary"
    },
    {
      icon: Trophy,
      title: "Torneos Épicos",
      description: "Competencias semanales en los juegos más populares con increíbles premios",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-card border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-neon-primary/20 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 mx-auto mb-6 ${benefit.color} flex items-center justify-center bg-card/50 rounded-full border border-current/30 group-hover:shadow-neon-primary transition-all duration-300`}>
                  <IconComponent size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-4 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;