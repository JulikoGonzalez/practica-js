// playlist/js/playlist.js
export default function createPlaylistManager() {
    // Estado privado
    const playlists = [];

    // Deep clone seguro (usa structuredClone si existe, si no JSON)
    const deepClone = (obj) => {
        if (typeof structuredClone === 'function') {
            return structuredClone(obj);
        }
        return JSON.parse(JSON.stringify(obj));
    };

    // Buscar índice por nombre
    const findPlaylistIndex = (name) => playlists.findIndex(p => p.name === name);

    return {
        // Crear playlist (no devuelve el objeto interno)
        createPlaylist(name) {
            if (!name || typeof name !== 'string') return false;
            if (playlists.some(p => p.name === name)) return false;
            playlists.push({ name, songs: [] });
            return true;
        },

        // Devolver copia de todas las playlists (para que el exterior no pueda mutar el estado interno)
        getAllPlaylists() {
            return deepClone(playlists);
        },

        // Devolver copia de una playlist concreta
        getPlaylist(name) {
            const p = playlists.find(pl => pl.name === name);
            return p ? deepClone(p) : null;
        },

        // Eliminar playlist
        removePlaylist(name) {
            const idx = findPlaylistIndex(name);
            if (idx === -1) return false;
            playlists.splice(idx, 1);
            return true;
        },

        // Añadir canción: **siempre** crear un nuevo objeto songToAdd (no guardar la referencia)
        addSongToPlaylist(playlistName, song) {
            const p = playlists.find(pl => pl.name === playlistName);
            if (!p) return false;
            if (!song || typeof song.title !== 'string') return false;

            const songToAdd = {
                title: song.title,
                artist: song.artist || '',
                genre: song.genre || '',
                duration: typeof song.duration === 'number' ? song.duration : 0,
                favorite: ('favorite' in song) ? !!song.favorite : false
            };

            p.songs.push(songToAdd);
            return true;
        },

        // Eliminar canción por título
        removeSongFromPlaylist(playlistName, songTitle) {
            const p = playlists.find(pl => pl.name === playlistName);
            if (!p) return false;
            const idx = p.songs.findIndex(s => s.title === songTitle);
            if (idx === -1) return false;
            p.songs.splice(idx, 1);
            return true;
        },

        // Marcar favorita (modifica estado interno)
        favoriteSong(playlistName, songTitle) {
            const p = playlists.find(pl => pl.name === playlistName);
            if (!p) return false;
            const s = p.songs.find(song => song.title === songTitle);
            if (!s) return false;
            s.favorite = true;
            return true;
        },

        // Ordenar canciones por criterio
        sortSongs(playlistName, criteria) {
            const p = playlists.find(pl => pl.name === playlistName);
            if (!p || !['title', 'artist', 'duration'].includes(criteria)) return false;

            p.songs.sort((a, b) => {
                if (criteria === 'duration') return a.duration - b.duration;
                const A = (a[criteria] || '').toString().toLowerCase();
                const B = (b[criteria] || '').toString().toLowerCase();
                if (A < B) return -1;
                if (A > B) return 1;
                return 0;
            });

            return true;
        }
    };
}
