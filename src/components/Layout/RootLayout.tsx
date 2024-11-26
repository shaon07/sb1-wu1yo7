import { ReactNode } from "react"
import Navbar from "../Organism/Navbar"
import Footer from "../Organism/Footer"

type RootLayoutProps = {
    children: ReactNode
}
export default function RootLayout({children}:RootLayoutProps) {
  return (
    <div className="min-h-screen bg-velbetRed">
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}
