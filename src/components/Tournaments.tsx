import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, Zap, Clock, Gift } from "lucide-react";
import tournamentBg from "@/assets/tournament.jpg";

const Tournaments = () => {
  const popularGames = [
    { name: "FIFA", players: "10-20", prize: "Dinero/Skins" },
    { name: "Valorant", players: "5v5/1v1", prize: "Skins/RP/Efectivo" },
    { name: "League of Legends", players: "5v5/1v1", prize: "Skins/RP/Efectivo" },
    { name: "Fortnite", players: "10+", prize: "Pavos/Efectivo" }
  ];

  const upcomingTournaments = [
    {
      game: "FIFA Tournament",
      date: "Sábado 3 Feb",
      time: "7:00 PM",
      prize: "$10+",
      participants: "8/20",
      status: "Abierto"
    },
    {
      game: "Valorant 5v5",
      date: "Domingo 4 Feb", 
      time: "7:00 PM",
      prize: "$10+",
      participants: "6/10",
      status: "Abierto"
    },
    {
      game: "League of Legends",
      date: "Sábado 10 Feb",
      time: "7:00 PM", 
      prize: "$10+",
      participants: "4/10",
      status: "Abierto"
    }
  ];

  return (
    <section id="torneos" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Zap className="w-8 h-8 text-secondary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-gaming font-bold bg-gradient-primary bg-clip-text text-transparent">
              Torneos Épicos
            </h2>
            <Zap className="w-8 h-8 text-secondary animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Competencias semanales en los juegos más populares con increíbles premios
          </p>
        </div>

        {/* Main Tournament Card */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div 
            className="relative p-12 bg-card border-2 border-primary/30 rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95)), url(${tournamentBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-primary/10 rounded-3xl"></div>
            
            <div className="relative z-10 text-center">
              {/* Trophy Icon */}
              <div className="w-24 h-24 mx-auto mb-8 text-secondary flex items-center justify-center bg-gradient-secondary bg-opacity-20 rounded-full border-2 border-secondary shadow-neon-secondary">
                <Trophy size={48} />
              </div>

              <h3 className="text-3xl md:text-4xl font-gaming font-bold mb-4 text-foreground">
                Torneos Semanales
              </h3>
              
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Sábados y domingos a las 7:00 PM. Inscripciones abiertas toda la semana.
                ¡Demuestra tus habilidades y gana increíbles premios!
              </p>
              
              <div className="bg-accent/20 border border-accent/30 rounded-xl p-4 mb-8 max-w-md mx-auto">
                <p className="text-accent font-semibold text-center">
                  💰 Inscripción: $2 (Incluye bebida y snacks)
                </p>
              </div>

              {/* Tournament Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">Sáb/Dom</div>
                  <div className="text-sm text-muted-foreground">7:00 PM</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-accent-pink mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Participantes</div>
                </div>
                <div className="text-center">
                  <Gift className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">$10+</div>
                  <div className="text-sm text-muted-foreground">Premio</div>
                </div>
                <div className="text-center">
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">4</div>
                  <div className="text-sm text-muted-foreground">Juegos</div>
                </div>
              </div>

              <Button variant="neon" size="lg" className="text-xl px-12 py-6">
                <Trophy className="w-6 h-6 mr-3" />
                Inscribirse al Torneo
              </Button>
            </div>
          </div>
        </div>

        {/* Popular Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {popularGames.map((game, index) => (
            <div 
              key={index}
              className="group p-6 bg-card border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-neon-primary/20 hover:transform hover:scale-105"
            >
              <h3 className="text-lg font-bold mb-3 text-foreground">
                {game.name}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Jugadores:</span>
                  <span className="text-accent font-semibold">{game.players}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Premio:</span>
                  <span className="text-secondary font-semibold">{game.prize}</span>
                </div>
              </div>
              <Button variant="glow" size="sm" className="w-full mt-4">
                Ver Detalles
              </Button>
            </div>
          ))}
        </div>

        {/* Upcoming Tournaments */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Próximos Torneos
          </h3>
          
          <div className="space-y-4">
            {upcomingTournaments.map((tournament, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center justify-between p-6 bg-card border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {tournament.game}
                  </h4>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {tournament.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {tournament.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {tournament.participants}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary">{tournament.prize}</div>
                    <div className="text-xs text-muted-foreground">Premio</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tournament.status === "Casi lleno" 
                      ? "bg-accent-pink/20 text-accent-pink" 
                      : "bg-accent/20 text-accent"
                  }`}>
                    {tournament.status}
                  </div>
                  <Button variant="neon" size="sm">
                    Inscribirse
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rules & Info */}
        <div className="text-center mt-16 p-8 bg-card border border-primary/20 rounded-2xl">
          <h3 className="text-xl font-bold mb-4 text-foreground">
            Información del Torneo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>
              <strong className="text-foreground">Inscripciones:</strong><br />
              Abiertas toda la semana, cierre viernes 6:00 PM
            </div>
            <div>
              <strong className="text-foreground">Formato:</strong><br />
              Eliminación directa, mejores de 3 en finales
            </div>
            <div>
              <strong className="text-foreground">Premios:</strong><br />
              Efectivo, equipos gaming y descuentos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;