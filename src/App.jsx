import { AllSongs } from "./Components/AllSongs"
import { MusicPlayer } from "./Components/MusicPlayer"
import { BrowserRouter, Routes, Route } from "react-router"
import { Playlist } from "./Components/Playlist"
import { MusicProvider } from "./contexts/MusicContext"
import { Navbar } from "./Components/Navbar"
import { useEffect, useState } from "react"

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }
  
  return (
    <BrowserRouter>
    <MusicProvider>
        <div className="app">
            <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
                <main className="app-main">
                    <div className="player-section">
                        <MusicPlayer />
                    </div>

                    <div className="content-section">
                        <Routes>
                            <Route path="/" element={<AllSongs />}/>
                            <Route path="/playlist" element={<Playlist />}/>
                        </Routes>
                    </div>
                </main>
        </div>
    </MusicProvider>
    </BrowserRouter>
    
  )
}

export default App

