import React from 'react'
import { useState } from 'react'
import bgImage from '../assets/bg.jpg'
import { useNavigate } from 'react-router-dom'
import CustomAlert from './AlertPopUp'

function SearchForm() {
    const [artist, setArtist] = useState('')
    const [song, setSong] = useState('') //song title
    const [genre, setGenre] = useState('r&b') //default genre
    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
          navigate('/SongList', {
            state: { artist, song, genre }
        });
    }
    // Navigate to SongList page after form submission
    const handleExplore = () => {
    if (!artist || !song || !genre) {
        setShow(true);
        setShowAlert(true);
        return;
    }
      navigate('/SongList', {
        state: { artist, song, genre }
    });
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
                    className="w-64 md:w-72 px-4 py-3 text-white bg-black border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none"
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="pop">House</option>
                    <option value="rock">Amapiano</option>
                    <option value="hip-hop">Hip-Hop</option>
                    <option value="r&b">R&B</option>
                    <option value="electronic">Electronic</option>
                    <option value="jazz">Jazz</option>
                    <option value="classical">Lofi</option>
                    <option value="reggae">Neo-Soul</option>
                    <option value="country">Country</option>
                    <option value="metal">Gospel</option>
                </select>
            </form>
            <CustomAlert
                show={showAlert}
                setShow={setShowAlert}
                handleExplore={handleExplore}
            />
        </div>
        <p className='italic text-gray-200 pb-3 relative z-10'>* App is still under production, you may experience a few bugs *</p>
    </div>
  )
}

export default SearchForm
