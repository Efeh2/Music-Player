# Music Player

A simple and responsive music player built with React and Vite.  
It supports song playback, playlist management, routing between views, and theme switching.

## Live Demo

[View Live App](https://music-player-y6q1.vercel.app/)

## Features

- Play, pause, skip next, and go to previous track
- Track progress and formatted playback time display
- Volume control
- Browse all songs
- Create and delete playlists
- Add songs to playlists
- Persistent playlists and theme using `localStorage`
- Light and dark theme toggle
- Route-based pages for songs and playlists

## Tech Stack

- React
- React Router
- Vite
- CSS

## Project Structure

```text
src/
  Components/
    AllSongs.jsx
    MusicPlayer.jsx
    Navbar.jsx
    Playlist.jsx
  contexts/
    MusicContext.jsx
  App.jsx
  index.css
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Available Routes

- `/` - All songs
- `/playlist` - Playlist page

## Notes

- Audio files are loaded from the `public/Songs` directory.
- Playlist data and theme preference are saved in browser `localStorage`.
