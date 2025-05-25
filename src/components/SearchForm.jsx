import React from 'react'
import { useState } from 'react'
import bgImage from '../assets/bg.jpg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function SearchForm({onSearch}) {
    const [artist, setArtist] = useState('')
    const [song, setSong] = useState('')
    const [genre, setGenre] = useState('RnB')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({artist, song, genre});
    }
    // Navigate to SongList page after form submission
    const handleExplore = () => {
        if (!artist || !song || !genre) {
            alert('Please fill in all fields before exploring.');
            return;
        }
        navigate('/SongList');
    }

    return (
        <div className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden'>
            {/* Background */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                        url(${bgImage})
                    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(0px)',
                    zIndex: 0,
                }}
            />
            {/* Foreground content */}
            <h1 className='pt-5 text-7xl text-white font-michroma relative z-10'>SONIFI</h1>
            <div className="flex flex-col items-center justify-center relative z-10 text-center w-full flex-1">
                <h1 className='text-6xl text-white font-michroma'>Find Your Tunes</h1>
                <p className='text-2xl text-white font-kodchasan pt-3'>Discover new music based on your favorite artists and songs.</p>
                <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4"
                >
                <input 
                    required
                    type="text"
                    placeholder="Artist Name"
                    className="w-64 md:w-72 px-4 py-3 text-white placeholder-white bg-white/10 border border-white/30 rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    onChange={(e) => setArtist(e.target.value)}
                />
                
                <input 
                    required
                    type="text"
                    placeholder="Song Title"
                    className="w-64 md:w-72 px-4 py-3 text-white placeholder-white bg-white/10 border border-white/30 rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    onChange={(e) => setSong(e.target.value)}
                />
                
                <select 
                    className="w-64 md:w-72 px-4 py-3 text-white bg-black/10 border border-white/30 rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none"
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                    <option value="hip-hop">Hip-Hop</option>
                    <option value="electronic">Electronic</option>
                </select>
            </form>

                <button
                    onClick={handleExplore} 
                    type="submit" 
                    className="mt-7 px-6 py-3 bg-purple-800 text-white rounded-xl hover:bg-purple-600 transition duration-300"
                >
                    Explore
                </button> 
        </div>
        <p className='italic text-gray-200 pb-3 relative z-10'>* App is still under production, you may experience a few bugs *</p>
    </div>
  )
}

export default SearchForm
