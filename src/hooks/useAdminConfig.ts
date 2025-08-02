import { useState, useEffect } from 'react'

interface AdminConfig {
  siteConfig: {
    logoUrl: string
    bannerUrl: string
  }
  games: Array<{
    id: string
    name: string
    logoUrl: string
  }>
  services: Array<{
    id: string
    title: string
    description: string
  }>
}

const defaultGames = [
  { id: '1', name: 'Valorant', logoUrl: '' },
  { id: '2', name: 'Call of Duty Warzone', logoUrl: '' },
  { id: '3', name: 'Call of Duty Mobile', logoUrl: '' },
  { id: '4', name: 'Free Fire', logoUrl: '' },
  { id: '5', name: 'Minecraft', logoUrl: '' },
  { id: '6', name: 'Roblox', logoUrl: '' },
  { id: '7', name: 'Terraria', logoUrl: '' },
  { id: '8', name: 'Hollow Knight', logoUrl: '' },
  { id: '9', name: 'Half Life', logoUrl: '' },
  { id: '10', name: 'Counter Strike 1.6', logoUrl: '' },
  { id: '11', name: 'Team Fortress Classic', logoUrl: '' },
  { id: '12', name: 'Broforce', logoUrl: '' },
  { id: '13', name: 'Castle Crashers', logoUrl: '' },
  { id: '14', name: 'Left 4 Dead 2', logoUrl: '' },
  { id: '15', name: 'Fortnite', logoUrl: '' },
  { id: '16', name: 'League of Legends', logoUrl: '' },
  { id: '17', name: 'Red Dead Redemption', logoUrl: '' },
  { id: '18', name: 'CupHead', logoUrl: '' },
  { id: '19', name: 'Deathmatch Classic', logoUrl: '' },
  { id: '20', name: 'Ricochet', logoUrl: '' }
]

const defaultServices = [
  {
    id: '1',
    title: 'Gaming Zone',
    description: 'PCs de última generación con hardware premium, monitores 144Hz y periféricos gaming profesionales para la mejor experiencia de juego.'
  },
  {
    id: '2',
    title: 'Internet & Trabajo',
    description: 'Conexión ultra rápida de 1000 Mbps, ambiente silencioso y cómodo perfecto para trabajo remoto, estudios online y videollamadas.'
  },
  {
    id: '3',
    title: 'Servicios Digitales',
    description: 'Impresión, escaneo, copias, plastificado y servicios de oficina. Todo lo que necesitas para tus documentos y proyectos.'
  }
]

export const useAdminConfig = () => {
  const [config, setConfig] = useState<AdminConfig>({
    siteConfig: {
      logoUrl: '',
      bannerUrl: ''
    },
    games: defaultGames,
    services: defaultServices
  })

  // Load from localStorage on mount
  useEffect(() => {
    const savedConfig = localStorage.getItem('viltrum_admin_config')
    if (savedConfig) {
      try {
        const parsed = JSON.parse(savedConfig)
        setConfig(prev => ({ ...prev, ...parsed }))
      } catch (error) {
        console.error('Error loading admin config:', error)
      }
    }
  }, [])

  // Save to localStorage whenever config changes
  useEffect(() => {
    localStorage.setItem('viltrum_admin_config', JSON.stringify(config))
  }, [config])

  const updateSiteConfig = (updates: Partial<AdminConfig['siteConfig']>) => {
    setConfig(prev => ({
      ...prev,
      siteConfig: { ...prev.siteConfig, ...updates }
    }))
  }

  const updateGameLogo = (gameId: string, logoUrl: string) => {
    setConfig(prev => ({
      ...prev,
      games: prev.games.map(game => 
        game.id === gameId ? { ...game, logoUrl } : game
      )
    }))
  }

  const updateService = (serviceId: string, updates: Partial<{ title: string; description: string }>) => {
    setConfig(prev => ({
      ...prev,
      services: prev.services.map(service => 
        service.id === serviceId ? { ...service, ...updates } : service
      )
    }))
  }

  return {
    config,
    updateSiteConfig,
    updateGameLogo,
    updateService
  }
}