import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { SiteConfig, GameConfig, ServiceConfig } from '@/lib/supabase'

export const useSiteConfig = () => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null)
  const [games, setGames] = useState<GameConfig[]>([])
  const [services, setServices] = useState<ServiceConfig[]>([])
  const [loading, setLoading] = useState(true)

  // Load configuration from localStorage as fallback
  const loadFromLocalStorage = () => {
    const localSiteConfig = localStorage.getItem('viltrum_site_config')
    const localGames = localStorage.getItem('viltrum_games_config')
    const localServices = localStorage.getItem('viltrum_services_config')

    if (localSiteConfig) {
      setSiteConfig(JSON.parse(localSiteConfig))
    }
    if (localGames) {
      setGames(JSON.parse(localGames))
    }
    if (localServices) {
      setServices(JSON.parse(localServices))
    }
  }

  // Save configuration to localStorage
  const saveToLocalStorage = (config: any, type: 'site' | 'games' | 'services') => {
    switch (type) {
      case 'site':
        localStorage.setItem('viltrum_site_config', JSON.stringify(config))
        break
      case 'games':
        localStorage.setItem('viltrum_games_config', JSON.stringify(config))
        break
      case 'services':
        localStorage.setItem('viltrum_services_config', JSON.stringify(config))
        break
    }
  }

  useEffect(() => {
    loadFromLocalStorage()
    setLoading(false)
  }, [])

  const updateSiteConfig = async (newConfig: Partial<SiteConfig>) => {
    const updated = { ...siteConfig, ...newConfig, updated_at: new Date().toISOString() } as SiteConfig
    setSiteConfig(updated)
    saveToLocalStorage(updated, 'site')
  }

  const updateGame = async (gameId: string, updates: Partial<GameConfig>) => {
    const updatedGames = games.map(game => 
      game.id === gameId 
        ? { ...game, ...updates, updated_at: new Date().toISOString() }
        : game
    )
    setGames(updatedGames)
    saveToLocalStorage(updatedGames, 'games')
  }

  const updateService = async (serviceId: string, updates: Partial<ServiceConfig>) => {
    const updatedServices = services.map(service => 
      service.id === serviceId 
        ? { ...service, ...updates, updated_at: new Date().toISOString() }
        : service
    )
    setServices(updatedServices)
    saveToLocalStorage(updatedServices, 'services')
  }

  return {
    siteConfig,
    games,
    services,
    loading,
    updateSiteConfig,
    updateGame,
    updateService
  }
}