import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import AdminPanel from "./AdminPanel"

const AdminFloatingButton = () => {
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsAdminPanelOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl bg-gradient-primary hover:scale-110 transition-all duration-300 border-2 border-primary/30"
        size="icon"
      >
        <Settings className="w-6 h-6 text-white animate-spin-slow" />
      </Button>

      <AdminPanel 
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
      />
    </>
  )
}

export default AdminFloatingButton