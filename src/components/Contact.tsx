import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Error en el formulario",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/593999999999",
      color: "text-green-400",
      bgColor: "bg-green-400/10 border-green-400/30"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/viltrumzone",
      color: "text-accent-pink",
      bgColor: "bg-accent-pink/10 border-accent-pink/30"
    },
    {
      name: "TikTok",
      icon: Send,
      url: "https://tiktok.com/@viltrumzone", 
      color: "text-foreground",
      bgColor: "bg-foreground/10 border-foreground/30"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Contacto & Redes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos o síguenos en nuestras redes sociales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location & Hours */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">
                      Av. Principal 123, Centro Comercial Gaming<br />
                      Ciudad, Ecuador
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+593999999999" className="hover:text-accent transition-colors">
                        +593 99 999 9999
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center border border-secondary/30">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horarios</h4>
                    <p className="text-muted-foreground">
                      Abierto 24/7<br />
                      Todos los días del año
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Síguenos en Redes
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 ${social.bgColor} rounded-xl border hover:scale-105 transition-all duration-300 group`}
                    >
                      <div className={`w-10 h-10 ${social.color} flex items-center justify-center`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          @viltrumzone
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Beacons Link */}
              <div className="mt-6 p-4 bg-gradient-primary/10 rounded-xl border border-primary/30">
                <h4 className="font-semibold text-foreground mb-2">
                  🔗 Enlaces Rápidos
                </h4>
                <a 
                  href="https://beacons.ai/viltrumzone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow transition-colors underline"
                >
                  beacons.ai/viltrumzone
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Todos nuestros enlaces en un solo lugar
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Envíanos un Mensaje
            </h3>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-foreground">
                    Nombre *
                  </Label>
                  <Input
                    id="contact-name"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Tu nombre"
                    className="bg-background border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-foreground">
                    Email *
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="tu@email.com"
                    className="bg-background border-primary/20 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject" className="text-foreground">
                  Asunto
                </Label>
                <Input
                  id="contact-subject"
                  value={contactForm.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="¿En qué podemos ayudarte?"
                  className="bg-background border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-foreground">
                  Mensaje *
                </Label>
                <Textarea
                  id="contact-message"
                  value={contactForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Cuéntanos tu consulta o sugerencia..."
                  className="bg-background border-primary/20 focus:border-primary resize-none"
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" variant="neon" size="lg" className="w-full text-lg py-6">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>

            {/* Quick Contact */}
            <div className="mt-8 pt-6 border-t border-primary/20">
              <p className="text-muted-foreground text-center mb-4">
                ¿Necesitas una respuesta rápida?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="neon-accent" className="flex-1">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="glow" className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;