import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Songlist = ({ yourSong, similarSongs }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { artist, song, genre } = location.state || {};

  const [fetchedSimilarSongs, setFetchedSimilarSongs] = useState([]);

  useEffect(() => {
    if (artist && song && genre) {
      fetchSimilarSongs();
    }
  }, [artist, song, genre]);

  const fetchSimilarSongs = async () => {
    try {
      const tokenRes = await fetch('https://sonifi-app.onrender.com/get-token');
      const tokenData = await tokenRes.json();
      const accessToken = tokenData.access_token;

      const query = `${song} ${artist}`;
      const searchRes = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=8`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await searchRes.json();
      const tracks = data.tracks?.items || [];

      const formatted = tracks.map((track, i) => ({
        title: track.name,
        artist: track.artists.map(a => a.name).join(', '),
        genre: genre,
        color:
          i % 3 === 0
            ? 'border-purple-500'
            : i % 3 === 1
            ? 'border-red-500'
            : 'border-blue-500',
        previewUrl: track.preview_url, // <-- this is new
      }));

      setFetchedSimilarSongs(formatted);
    } catch (error) {
      console.error('Error fetching similar songs:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#14061e] text-white px-8 py-6 font-inter">
      <button onClick={() => navigate(-1)} className="text-white text-2xl mb-6">
        ←
      </button>
      <h1 className="text-center text-6xl font-michroma mb-10">SONIFI</h1>

      <div className="mb-10">
        <h2 className="text-3xl font-kodchasan">Your song</h2>
        <p className="text-xl mt-2">
          {song} by {artist}
        </p>
        <p className="text-gray-400 italic">{genre}</p>
      </div>

      <h2 className="text-3xl font-kodchasan mb-4">Songs Like That</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {fetchedSimilarSongs.length === 0 ? (
          <p>Loading suggestions...</p>
        ) : (
          fetchedSimilarSongs.map((s, i) => (
            <div key={i} className="flex items-center gap-5 cursor-pointer">
              <span className={`text-2xl ${s.color}`}>▶</span>
              <div className={`border rounded-lg px-4 py-2 ${s.color} w-full`}>
                <p>
                  {s.title} by {s.artist}
                </p>
                <p className="italic text-gray-300">{s.genre}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Songlist;