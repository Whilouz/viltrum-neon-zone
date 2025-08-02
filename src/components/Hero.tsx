import { Button } from "@/components/ui/button";
import { Zap, GamepadIcon, Users } from "lucide-react";
import viltrumBanner from "@/assets/viltrum-banner.png";
import { useAdminConfig } from "@/hooks/useAdminConfig";

const Hero = () => {
  const { config } = useAdminConfig();
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 27, 75, 0.7), rgba(30, 27, 75, 0.8)), url(${config.siteConfig.bannerUrl || viltrumBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-secondary rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent-pink rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with gradient */}
          <h1 className="font-gaming font-black text-6xl md:text-8xl mb-6 bg-gradient-to-r from-accent-pink via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Viltrum Zone
          </h1>
          
          {/* Subtitle with lightning effect */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-secondary animate-pulse" />
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              La élite del gaming
            </p>
            <Zap className="w-8 h-8 text-secondary animate-pulse" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Sumérgete en la experiencia gaming definitiva con PCs de última generación, 
            conexión ultra rápida y un ambiente competitivo que te llevará al siguiente nivel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button variant="neon" size="lg" className="text-lg px-8 py-4 min-w-48">
              <GamepadIcon className="w-5 h-5 mr-2" />
              Reservar Estación
            </Button>
            <Button variant="neon-secondary" size="lg" className="text-lg px-8 py-4 min-w-48">
              Ver Precios
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">PCs Gaming</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1000</div>
              <div className="text-sm text-muted-foreground">Mbps Internet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-pink mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Abierto</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Juegos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;