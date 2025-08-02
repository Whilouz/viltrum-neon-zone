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

  const additionalPricing = [
    { hours: "3 Horas", price: "$3.50" },
    { hours: "4 Horas", price: "$5.00" }
  ];

  const discountPacks = [
    { hours: "8 Horas", price: "$10", discount: "38% descuento" },
    { hours: "10 Horas", price: "$13", discount: "35% descuento" }
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

        {/* Extended Pricing Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {additionalPricing.map((plan, index) => (
            <div 
              key={index}
              className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-foreground">{plan.hours}</h3>
              <div className="text-3xl font-gaming font-bold text-accent mb-4">{plan.price}</div>
              <p className="text-muted-foreground">Ideal para sesiones largas</p>
            </div>
          ))}
        </div>

        {/* Happy Hour */}
        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 rounded-2xl p-8 mb-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center justify-center">
            <Zap className="w-8 h-8 text-secondary mr-3" />
            Happy Hour
          </h3>
          <div className="text-4xl font-gaming font-bold text-secondary mb-4">$1.50/hora</div>
          <p className="text-lg mb-4 text-foreground">
            Entre 12:00 PM - 3:00 PM
          </p>
          <p className="text-accent font-semibold">
            ⚡ Válido solo lunes y miércoles
          </p>
        </div>

        {/* Discount Packs */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Packs con Descuento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {discountPacks.map((pack, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-accent/30 rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 shadow-neon-accent/20"
              >
                <h4 className="text-xl font-bold mb-2 text-foreground">{pack.hours}</h4>
                <div className="text-3xl font-gaming font-bold text-accent mb-2">{pack.price}</div>
                <div className="text-sm text-accent font-semibold bg-accent/20 rounded-full px-3 py-1 inline-block">
                  {pack.discount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loyalty Program */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl p-8 mb-12 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-foreground flex items-center justify-center">
            <Star className="w-6 h-6 text-secondary mr-3" />
            Programa de Lealtad
          </h3>
          <p className="text-lg text-foreground mb-4">
            🎉 <strong>Cada 5 horas, 1 gratis</strong>
          </p>
          <p className="text-muted-foreground">
            Acumula horas y obtén tiempo de juego gratuito
          </p>
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