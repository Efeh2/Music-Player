import { AllSongs } from "./Components/AllSongs"
import { MusicPlayer } from "./Components/MusicPlayer"
import { BrowserRouter, Routes, Route } from "react-router"
import { Playlist } from "./Components/Playlist"

function App() {
  
  return (
    <BrowserRouter>
        <div className="app">
            {/* <Navbar /> */}
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
    </BrowserRouter>
    
  )
}

export default App

