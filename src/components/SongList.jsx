import React from 'react';
import { useNavigate } from 'react-router-dom';

const Songlist = () => {
  const navigate = useNavigate();

  // Sample data – replace with real results later
  const yourSong = {
    title: 'My Song Name',
    artist: 'My Artist',
    genre: 'Genre',
  };

  const similarSongs = [
    { title: 'My Song Name', artist: 'My Artist', genre: 'Genre', color: 'border-purple-500' },
    { title: 'My Song Name', artist: 'My Artist', genre: 'Genre', color: 'border-red-500' },
    { title: 'My Song Name', artist: 'My Artist', genre: 'Genre', color: 'border-blue-500' },
    { title: 'My Song Name', artist: 'My Artist', genre: 'Genre', color: 'border-purple-500' },
    { title: 'My Song Name', artist: 'My Artist', genre: 'Genre', color: 'border-red-500' },
    { title: 'My Song Name', artist: 'My Artist', genre: 'Genre', color: 'border-blue-500' },
    { title: 'My Song Name', artist: 'My Artist', genre: 'Genre', color: 'border-purple-500' },
    { title: 'My Song Name', artist: 'My Artist', genre: 'Genre', color: 'border-red-500' },
  ];

  return (
    <div className="min-h-screen bg-[#14061e] text-white px-8 py-6 font-inter">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="text-white text-2xl mb-6">
        ←
      </button>

      {/* Logo */}
      <h1 className="text-center text-6xl font-michroma mb-10">SONIFY</h1>

      {/* Your Song */}
      <div className="mb-10">
        <h2 className="text-3xl font-kodchasan">Your song</h2>
        <p className="text-xl mt-2">
          {yourSong.title} by {yourSong.artist}
        </p>
        <p className="text-gray-400 italic">{yourSong.genre}</p>
      </div>

      {/* Songs Like That */}
      <h2 className="text-3xl font-kodchasan mb-4">Songs Like That</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {similarSongs.map((song, idx) => (
          <div key={idx} className="flex items-center gap-5 cursor-pointer">
            <span className={`text-2xl ${song.color}`}>▶</span>
            <div className={`border rounded-lg px-4 py-2 ${song.color} w-full`}>
              <p>
                {song.title} by {song.artist}
              </p>
              <p className="italic text-gray-300">{song.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songlist;
