import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for our data
export interface SiteConfig {
  id: string
  logo_url: string
  banner_url: string
  updated_at: string
}

export interface GameConfig {
  id: string
  name: string
  category: string
  rating: number
  logo_url: string | null
  updated_at: string
}

export interface ServiceConfig {
  id: string
  title: string
  description: string
  icon_name: string
  color: string
  updated_at: string
}