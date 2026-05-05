import { useState } from "react"

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

export const useMusic = () => {
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handlePlaySong = (song, index) => {
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
    };

    const formatTime = (time) => {
        if (isNaN(time) || time === undefined) return "0:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return`${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    return { 
        allSongs, 
        handlePlaySong, 
        currentTrack, 
        currentTrackIndex,
        currentTime,
        setCurrentTime,
        formatTime,
        duration,
        setDuration
    };
};