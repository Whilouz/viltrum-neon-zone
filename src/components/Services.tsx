import { Gamepad2, Wifi, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import gamingSetup from "@/assets/gaming-setup.jpg";
import { useAdminConfig } from "@/hooks/useAdminConfig";

const Services = () => {
  const { config } = useAdminConfig();
  
  const services = [
    {
      icon: Gamepad2,
      title: config.services[0]?.title || "Gaming Zone",
      description: config.services[0]?.description || "Estaciones gaming profesionales con hardware de última generación, periféricos premium y ambiente competitivo",
      features: ["RTX 4080 & Intel i7", "Monitores 144Hz", "Teclados mecánicos", "Auriculares gaming"],
      color: "accent-cyan",
      bgGradient: "from-accent/20 to-accent-cyan/20"
    },
    {
      icon: Wifi,
      title: config.services[1]?.title || "Internet & Trabajo",
      description: config.services[1]?.description || "Área de trabajo remoto con conexión ultra rápida, espacios cómodos y ambiente productivo",
      features: ["1000 Mbps Fibra", "Espacios silenciosos", "Impresión disponible", "Café gratis"],
      color: "accent-pink",
      bgGradient: "from-accent-pink/20 to-primary/20"
    },
    {
      icon: Printer,
      title: config.services[2]?.title || "Servicios Digitales",
      description: config.services[2]?.description || "Impresión, escaneo, copias y servicios digitales para estudiantes y profesionales",
      features: ["Impresión a color", "Escaneo HD", "Plastificado", "Anillado"],
      color: "secondary",
      bgGradient: "from-secondary/20 to-accent/20"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una experiencia completa que va más allá del gaming tradicional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`group relative p-8 bg-gradient-to-br ${service.bgGradient} border border-primary/20 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:transform hover:scale-105 overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Icon */}
                <div className={`w-20 h-20 mb-6 text-${service.color} flex items-center justify-center bg-card/80 rounded-2xl border border-current/30 group-hover:shadow-neon-primary transition-all duration-300`}>
                  <IconComponent size={40} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full bg-${service.color} mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="glow" className="w-full group-hover:shadow-neon-primary">
                  Explorar Servicio
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-card border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Ambiente Premium Gaming
              </h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Nuestras instalaciones están diseñadas para brindar la mejor experiencia gaming, 
                con aire acondicionado, iluminación RGB personalizable y sonido envolvente.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Ambiente climatizado y cómodo
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Iluminación RGB personalizable
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Sonido de alta calidad
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Snacks y bebidas disponibles
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={gamingSetup} 
                alt="Gaming Setup Premium" 
                className="rounded-xl shadow-2xl border border-primary/30"
              />
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;