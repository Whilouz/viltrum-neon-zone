import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Save, Image as ImageIcon, Gamepad2, Settings, Edit } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useSiteConfig } from "@/hooks/useSiteConfig"

interface AdminPanelProps {
  isOpen: boolean
  onClose: () => void
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const { toast } = useToast()
  const { siteConfig, games, services, updateSiteConfig, updateGame, updateService } = useSiteConfig()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  
  const logoInputRef = useRef<HTMLInputElement>(null)
  const bannerInputRef = useRef<HTMLInputElement>(null)

  const handleAuth = () => {
    if (password === "viltrum2024") {
      setIsAuthenticated(true)
      toast({
        title: "Acceso concedido",
        description: "Bienvenido al panel administrativo"
      })
    } else {
      toast({
        title: "Contraseña incorrecta",
        description: "Inténtalo de nuevo",
        variant: "destructive"
      })
    }
  }

  const handleImageUpload = (file: File, type: 'logo' | 'banner') => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string
      if (type === 'logo') {
        updateSiteConfig({ logo_url: imageUrl })
      } else {
        updateSiteConfig({ banner_url: imageUrl })
      }
      toast({
        title: `${type === 'logo' ? 'Logo' : 'Banner'} actualizado`,
        description: "Los cambios se han guardado automáticamente"
      })
    }
    reader.readAsDataURL(file)
  }

  const handleGameImageUpload = (gameId: string, file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string
      updateGame(gameId, { logo_url: imageUrl })
      toast({
        title: "Logo del juego actualizado",
        description: "Los cambios se han guardado automáticamente"
      })
    }
    reader.readAsDataURL(file)
  }

  if (!isAuthenticated) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Panel Administrativo
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="admin-password">Contraseña de administrador</Label>
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa la contraseña"
                onKeyPress={(e) => e.key === 'Enter' && handleAuth()}
              />
            </div>
            <Button onClick={handleAuth} className="w-full">
              Acceder
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Panel Administrativo - Viltrum Zone
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="site" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="site">Sitio Web</TabsTrigger>
            <TabsTrigger value="games">Juegos</TabsTrigger>
            <TabsTrigger value="services">Servicios</TabsTrigger>
          </TabsList>

          {/* Site Configuration */}
          <TabsContent value="site" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Logo y Banner del Sitio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Logo */}
                  <div className="space-y-4">
                    <Label>Logo del Sitio</Label>
                    {siteConfig?.logo_url && (
                      <div className="w-32 h-32 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src={siteConfig.logo_url} 
                          alt="Logo actual" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <input
                      ref={logoInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handleImageUpload(file, 'logo')
                      }}
                      className="hidden"
                    />
                    <Button 
                      onClick={() => logoInputRef.current?.click()}
                      variant="outline"
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Subir Nuevo Logo
                    </Button>
                  </div>

                  {/* Banner */}
                  <div className="space-y-4">
                    <Label>Banner Principal</Label>
                    {siteConfig?.banner_url && (
                      <div className="w-full h-32 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src={siteConfig.banner_url} 
                          alt="Banner actual" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <input
                      ref={bannerInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handleImageUpload(file, 'banner')
                      }}
                      className="hidden"
                    />
                    <Button 
                      onClick={() => bannerInputRef.current?.click()}
                      variant="outline"
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Subir Nuevo Banner
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Games Configuration */}
          <TabsContent value="games" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5" />
                  Logos de Juegos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {games.map((game) => (
                    <div key={game.id} className="space-y-4 p-4 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold">{game.name}</h4>
                      {game.logo_url && (
                        <div className="w-16 h-16 border border-primary/30 rounded-lg overflow-hidden">
                          <img 
                            src={game.logo_url} 
                            alt={game.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) handleGameImageUpload(game.id, file)
                        }}
                        className="hidden"
                        id={`game-${game.id}`}
                      />
                      <Button 
                        onClick={() => document.getElementById(`game-${game.id}`)?.click()}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Upload className="w-3 h-3 mr-2" />
                        Cambiar Logo
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Configuration */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Edit className="w-5 h-5" />
                  Nuestros Servicios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {services.map((service) => (
                    <div key={service.id} className="p-6 border border-primary/20 rounded-lg space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`service-title-${service.id}`}>Título del Servicio</Label>
                        <Input
                          id={`service-title-${service.id}`}
                          value={service.title}
                          onChange={(e) => updateService(service.id, { title: e.target.value })}
                          placeholder="Título del servicio"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`service-desc-${service.id}`}>Descripción</Label>
                        <Textarea
                          id={`service-desc-${service.id}`}
                          value={service.description}
                          onChange={(e) => updateService(service.id, { description: e.target.value })}
                          placeholder="Descripción del servicio"
                          rows={3}
                        />
                      </div>
                      <Button 
                        onClick={() => {
                          toast({
                            title: "Servicio actualizado",
                            description: "Los cambios se han guardado automáticamente"
                          })
                        }}
                        size="sm"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Guardar Cambios
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export default AdminPanel