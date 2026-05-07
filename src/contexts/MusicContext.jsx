import { createContext, useContext, useEffect, useState } from "react";

const MusicContext = createContext();

const songs = [
    {
        id: 1,
        title: "Abieyuwa",
        artist: "Hammerboi",
        url: "/Songs/Abieyuwa.weba",
        duration: "2:36",
    },
    {
        id: 2,
        title: "Babcook",
        artist: "Dxtiny",
        url: "/Songs/Babcook.weba",
        duration: "2:23",
    },
    {
        id: 3,
        title: "The Fate Of Ophelia",
        artist: "Taylor Swift",
        url: "/Songs/Fate of Ophelia.weba",
        duration: "3:46",
    },
    {
        id: 4,
        title: "Jamming",
        artist: "Pheelz",
        url: "/Songs/Jamming.weba",
        duration: "2:21",
    },
    {
        id: 5,
        title: "Love Letter",
        artist: "Hammerboi",
        url: "/Songs/Love Letter.weba",
        duration: "2:28",
    },
    {
        id: 6,
        title: "Traitor",
        artist: "Olivia Rodrigo",
        url: "/Songs/Traitor.weba",
        duration: "3:49",
    },
    {
        id: 7,
        title: "Use Me!!!",
        artist: "Olga Myko",
        url: "/Songs/Use Me!!!.weba",
        duration: "2:04",
    },
    {
        id: 8,
        title: "WHERE IS MY HUSBAND",
        artist: "RAYE",
        url: "/Songs/WHERE IS MY HUSBAND.m4a",
        duration: "3:17",
    },
];

export const MusicProvider = ({ children }) => {
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const savedPlaylists = localStorage.getItem("musicPlayerPlaylists")
        if (savedPlaylists) {
            const playlists = JSON.parse(savedPlaylists);
            setPlaylists(playlists);
        }
    }, []);

    useEffect(() => {
        if (playlists.length > 0){
            localStorage.setItem("musicPlayerPlaylists", JSON.stringify(playlists))
        } else {
            localStorage.removeItem("musicPlayerPlaylists");
        }
    }, [playlists]);

    const handlePlaySong = (song, index) => {
        setCurrentTrack(song); 
        setCurrentTrackIndex(index);
        setIsPlaying(false);
    };

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = (prev + 1) % allSongs.length;
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex;
        });
        setIsPlaying(false);
    };

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex;
        });
        setIsPlaying(false);
    };

    const formatTime = (time) => {
        if (isNaN(time) || time === undefined) return "0:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return`${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const createPlaylist = (name) => {
        const newPlaylist = {
            id: Date.now(),
            name,
            songs: []
        };

        setPlaylists((prev) => [...prev, newPlaylist]);
    };

    const deletePlaylist = (playlistId) => {
        setPlaylists((prev) => 
            prev.filter((playlist) => playlist.id !== playlistId)
        );
    };

    const addSongToPlaylist = (playlistId, song) => {
        setPlaylists((prev) => 
            prev.map((playlist) => {
                if (playlist.id === playlistId) {
                    return {...playlist, songs: [...playlist.songs, song]}
                } else {
                    return playlist;
                }
            })
        );
    };

    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);

    return ( 
    <MusicContext.Provider 
      value={{
        allSongs, 
        handlePlaySong, 
        currentTrack, 
        currentTrackIndex,
        currentTime,
        setCurrentTime,
        formatTime,
        duration,
        setDuration,
        nextTrack,
        prevTrack,
        play,
        pause,
        isPlaying,
        volume,
        setVolume,
        setAllSongs,
        createPlaylist,
        playlists,
        addSongToPlaylist,
        setCurrentTrack,
        deletePlaylist,
      }}
    >
        {children}
    </MusicContext.Provider>
    );
};


export const useMusic = () => {
    const contextValue = useContext(MusicContext);
    if (!contextValue) {
        throw new Error("useMusic must be used inside of musicProvider");
    }

    return contextValue;
}