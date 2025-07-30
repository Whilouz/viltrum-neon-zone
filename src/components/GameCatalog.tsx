import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";

const GameCatalog = () => {
  const games = [
    // Popular Battle Royales
    { name: "Fortnite", category: "Battle Royale", rating: 4.5, color: "from-purple-500 to-blue-500" },
    { name: "Apex Legends", category: "Battle Royale", rating: 4.7, color: "from-orange-500 to-red-500" },
    { name: "PUBG", category: "Battle Royale", rating: 4.3, color: "from-yellow-500 to-orange-500" },
    
    // FPS Games
    { name: "Valorant", category: "FPS", rating: 4.8, color: "from-pink-500 to-purple-500" },
    { name: "CS2", category: "FPS", rating: 4.6, color: "from-blue-500 to-cyan-500" },
    { name: "Call of Duty", category: "FPS", rating: 4.4, color: "from-green-500 to-blue-500" },
    
    // MOBAs
    { name: "League of Legends", category: "MOBA", rating: 4.5, color: "from-blue-600 to-purple-600" },
    { name: "Dota 2", category: "MOBA", rating: 4.4, color: "from-red-500 to-orange-500" },
    
    // MMORPGs
    { name: "World of Warcraft", category: "MMORPG", rating: 4.3, color: "from-blue-500 to-green-500" },
    { name: "Lost Ark", category: "MMORPG", rating: 4.2, color: "from-yellow-500 to-red-500" },
    { name: "Final Fantasy XIV", category: "MMORPG", rating: 4.6, color: "from-purple-500 to-pink-500" },
    
    // Racing
    { name: "Gran Turismo 7", category: "Racing", rating: 4.4, color: "from-red-500 to-yellow-500" },
    { name: "Forza Horizon 5", category: "Racing", rating: 4.7, color: "from-orange-500 to-pink-500" },
    
    // Sports
    { name: "EA FC 24", category: "Sports", rating: 4.2, color: "from-green-500 to-blue-500" },
    { name: "NBA 2K24", category: "Sports", rating: 4.1, color: "from-orange-500 to-red-500" },
    
    // Adventure/RPG
    { name: "Cyberpunk 2077", category: "RPG", rating: 4.5, color: "from-cyan-500 to-purple-500" },
    { name: "The Witcher 3", category: "RPG", rating: 4.8, color: "from-gray-500 to-red-500" },
    { name: "Elden Ring", category: "RPG", rating: 4.7, color: "from-yellow-600 to-orange-600" },
    
    // Indie/Popular
    { name: "Minecraft", category: "Sandbox", rating: 4.6, color: "from-green-400 to-blue-400" },
    { name: "Among Us", category: "Party", rating: 4.3, color: "from-red-500 to-blue-500" },
    { name: "Fall Guys", category: "Party", rating: 4.2, color: "from-pink-500 to-yellow-500" },
    
    // Simulation
    { name: "Cities Skylines", category: "Simulation", rating: 4.4, color: "from-blue-500 to-green-500" },
    { name: "Euro Truck Simulator", category: "Simulation", rating: 4.3, color: "from-blue-600 to-gray-600" },
    
    // Fighting
    { name: "Street Fighter 6", category: "Fighting", rating: 4.5, color: "from-red-500 to-blue-500" },
    { name: "Tekken 8", category: "Fighting", rating: 4.6, color: "from-purple-500 to-red-500" }
  ];

  const categories = ["Todos", "Battle Royale", "FPS", "MOBA", "MMORPG", "Racing", "Sports", "RPG"];

  return (
    <section id="juegos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Catálogo de Juegos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Más de 100 títulos instalados y listos para jugar, desde los más populares hasta los clásicos
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "neon" : "glow"}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {games.map((game, index) => (
            <div 
              key={index}
              className="group relative p-4 bg-card border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-neon-primary/20 hover:transform hover:scale-105 cursor-pointer"
            >
              {/* Game Icon/Avatar */}
              <div className={`w-full aspect-square mb-3 rounded-lg bg-gradient-to-br ${game.color} flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold text-lg md:text-xl">
                  {game.name.charAt(0)}
                </span>
              </div>
              
              {/* Game Info */}
              <h3 className="font-bold text-sm md:text-base text-foreground mb-1 truncate">
                {game.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">
                {game.category}
              </p>
              
              {/* Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-3 h-3 text-secondary fill-current mr-1" />
                  <span className="text-xs text-muted-foreground">{game.rating}</span>
                </div>
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Stats and CTA */}
        <div className="text-center bg-card border border-primary/20 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Juegos Instalados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Juegos Nuevos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-pink mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Actualizaciones</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-sm text-muted-foreground">Lag Garantizado</div>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6">
            ¿No encuentras tu juego favorito? Podemos instalarlo en tiempo récord
          </p>
          
          <Button variant="neon-secondary" size="lg" className="text-lg px-8">
            Solicitar Instalación
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameCatalog;