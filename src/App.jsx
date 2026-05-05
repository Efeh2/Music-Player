import { MusicPlayer } from "./Components/MusicPlayer"

function App() {
  
  return (
    <div className="app">
        {/* <Navbar /> */}
        <main className="app-main">
            <div className="player-section">
                <MusicPlayer />
            </div>
            <div className="content-section">
                
            </div>
        </main>
    </div>
  )
}

export default App

