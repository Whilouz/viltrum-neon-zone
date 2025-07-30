import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Send, Gamepad2, Zap } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Precios", href: "#precios" },
    { name: "Torneos", href: "#torneos" },
    { name: "Juegos", href: "#juegos" },
    { name: "Reservar", href: "#reservar" }
  ];

  const socialLinks = [
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/593999999999", color: "hover:text-green-400" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/viltrumzone", color: "hover:text-accent-pink" },
    { name: "TikTok", icon: Send, href: "https://tiktok.com/@viltrumzone", color: "hover:text-foreground" }
  ];

  return (
    <footer className="bg-gradient-to-br from-background to-card border-t border-primary/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="Viltrum Zone Logo" 
                className="w-12 h-12 rounded-full border-2 border-primary shadow-neon-primary"
              />
              <span className="font-gaming font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                Viltrum Zone
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              La élite del gaming. Experiencia premium 24/7 con hardware de última generación, 
              conexión ultra rápida y ambiente competitivo.
            </p>

            <div className="flex items-center gap-2 text-secondary mb-2">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Abierto 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center">
              <Gamepad2 className="w-5 h-5 text-primary mr-2" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center">
              <Phone className="w-5 h-5 text-accent mr-2" />
              Contacto
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Av. Principal 123<br />
                    Centro Comercial Gaming<br />
                    Ciudad, Ecuador
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a 
                  href="tel:+593999999999" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  +593 99 999 9999
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">24 horas, 7 días</span>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">
              Síguenos
            </h3>
            
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-card border border-primary/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:scale-110 ${social.color}`}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Mantente al día con torneos y ofertas
              </p>
              <Button variant="neon" size="sm" className="w-full text-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Únete al WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 Viltrum Zone. Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>

          {/* Special Links */}
          <div className="mt-6 text-center">
            <a 
              href="https://beacons.ai/viltrumzone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors text-sm"
            >
              <span>🔗 Todos nuestros enlaces:</span>
              <span className="underline">beacons.ai/viltrumzone</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -mb-16 -ml-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-secondary opacity-5 rounded-full -mb-12 -mr-12"></div>
    </footer>
  );
};

export default Footer;