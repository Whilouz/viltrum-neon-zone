import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Zap } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Por Hora",
      price: "$1.50",
      period: "hora",
      description: "Perfecto para sesiones cortas y casuales",
      features: [
        "Acceso completo a PCs Gaming",
        "Internet ultra rápido 1000 Mbps",
        "Todos los juegos disponibles",
        "Soporte técnico incluido"
      ],
      icon: Clock,
      color: "accent",
      gradient: "from-accent to-accent-cyan",
      isPopular: false
    },
    {
      title: "Combo 2 Horas",
      price: "$2.50",
      period: "2 horas",
      description: "La opción más popular para gamers",
      features: [
        "2 horas continuas de gaming",
        "Bebida gratis incluida",
        "Reserva de estación garantizada",
        "Descuento en servicios extra",
        "Soporte premium"
      ],
      icon: Users,
      color: "primary",
      gradient: "from-primary to-accent-pink",
      isPopular: true
    },
    {
      title: "Servicios Extra",
      price: "Desde $0.50",
      period: "servicio",
      description: "Servicios adicionales y complementarios",
      features: [
        "Impresión a color ($0.50)",
        "Escaneo y copias ($0.25)",
        "Plastificado ($1.00)",
        "Snacks y bebidas",
        "Uso de oficina"
      ],
      icon: Star,
      color: "secondary",
      gradient: "from-secondary to-accent",
      isPopular: false
    }
  ];

  return (
    <section id="precios" className="py-20 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Precios Competitivos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tarifas justas y transparentes para todos los gamers. Sin costos ocultos, sin sorpresas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative group p-8 bg-card border-2 rounded-2xl transition-all duration-500 hover:transform hover:scale-105 ${
                  plan.isPopular 
                    ? 'border-primary shadow-neon-primary' 
                    : 'border-primary/20 hover:border-primary/50'
                }`}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary px-6 py-2 rounded-full text-white text-sm font-bold flex items-center gap-2">
                      <Zap size={16} />
                      MÁS POPULAR
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 text-${plan.color} flex items-center justify-center bg-gradient-to-br ${plan.gradient} bg-opacity-20 rounded-2xl border border-current/30`}>
                  <IconComponent size={32} className="text-white" />
                </div>

                {/* Plan Title */}
                <h3 className="text-2xl font-bold text-center mb-2 text-foreground">
                  {plan.title}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-4xl md:text-5xl font-gaming font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-8">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full bg-${plan.color} mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={plan.isPopular ? "neon" : "glow"} 
                  className="w-full text-lg py-6"
                >
                  {plan.title === "Servicios Extra" ? "Ver Servicios" : "Reservar Ahora"}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
              <Clock className="w-6 h-6 text-primary mr-3" />
              Horarios Flexibles
            </h3>
            <p className="text-muted-foreground">
              Estamos abiertos 24/7, todos los días del año. Ven cuando quieras, 
              siempre tendremos una estación lista para ti.
            </p>
          </div>

          <div className="bg-card border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
              <Star className="w-6 h-6 text-secondary mr-3" />
              Garantía de Calidad
            </h3>
            <p className="text-muted-foreground">
              Si no estás satisfecho con tu experiencia, te devolvemos tu dinero. 
              Garantizamos la mejor experiencia gaming de la ciudad.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            ¿Tienes dudas sobre nuestros precios? Contáctanos para más información
          </p>
          <Button variant="neon-secondary" size="lg" className="text-lg px-8">
            Contactar Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;