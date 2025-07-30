import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, Clock, User, Phone, Gamepad2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    duration: "",
    notes: ""
  });

  const serviceOptions = [
    { value: "gaming", label: "Gaming Zone - PCs Premium" },
    { value: "work", label: "Internet & Trabajo" },
    { value: "print", label: "Servicios de Impresión" },
    { value: "tournament", label: "Inscripción a Torneo" }
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", 
    "21:00", "22:00", "23:00", "00:00", "01:00", "02:00"
  ];

  const durationOptions = [
    { value: "1", label: "1 hora" },
    { value: "2", label: "2 horas" },
    { value: "3", label: "3 horas" },
    { value: "4", label: "4 horas" },
    { value: "6", label: "6 horas" },
    { value: "8", label: "8 horas" },
    { value: "custom", label: "Personalizado" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.service) {
      toast({
        title: "Error en el formulario",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking
    toast({
      title: "¡Reserva enviada!",
      description: `Hola ${formData.name}, tu reserva ha sido enviada. Te contactaremos pronto.`,
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      duration: "",
      notes: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Reserva tu Estación
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Garantiza tu lugar en la mejor zona gaming. Reserva con anticipación y disfruta sin esperas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <Gamepad2 className="w-6 h-6 text-primary mr-3" />
                Formulario de Reserva
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Tu nombre completo"
                    className="bg-background border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Teléfono *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+593 99 999 9999"
                    className="bg-background border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground flex items-center">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      Fecha *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="bg-background border-primary/20 focus:border-primary"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Hora *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger className="bg-background border-primary/20 focus:border-primary">
                        <SelectValue placeholder="Selecciona hora" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">
                    Tipo de Servicio *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-background border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label htmlFor="duration" className="text-foreground">
                    Duración
                  </Label>
                  <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                    <SelectTrigger className="bg-background border-primary/20 focus:border-primary">
                      <SelectValue placeholder="¿Cuánto tiempo?" />
                    </SelectTrigger>
                    <SelectContent>
                      {durationOptions.map((duration) => (
                        <SelectItem key={duration.value} value={duration.value}>
                          {duration.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-foreground">
                    Notas Adicionales
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="¿Algún juego específico? ¿Necesitas algo especial?"
                    className="bg-background border-primary/20 focus:border-primary resize-none"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="neon" size="lg" className="w-full text-lg py-6">
                  Confirmar Reserva
                </Button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Información de Reserva
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Horario de atención:</span>
                    <span className="text-foreground font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tiempo mínimo:</span>
                    <span className="text-foreground font-semibold">1 hora</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Confirmación:</span>
                    <span className="text-foreground font-semibold">Inmediata</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cancelación:</span>
                    <span className="text-foreground font-semibold">2 horas antes</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  ¿Prefieres llamar?
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  También puedes hacer tu reserva por WhatsApp o llamada directa
                </p>
                
                <div className="space-y-3">
                  <Button variant="neon-accent" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    +593 99 999 9999
                  </Button>
                  <Button variant="glow" className="w-full">
                    WhatsApp Directo
                  </Button>
                </div>
              </div>

              {/* Current Status */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Estado Actual
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Estaciones libres:</span>
                    <span className="text-accent font-bold">24/30</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tiempo de espera:</span>
                    <span className="text-secondary font-bold">0 min</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    80% de disponibilidad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;