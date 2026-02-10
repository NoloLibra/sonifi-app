const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = 4000;

app.get('/get-token', async (req, res) => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${authString}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    res.json(response.data); // contains access_token
  } catch (err) {
    console.error('Error fetching token:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});