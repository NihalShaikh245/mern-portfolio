require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
let visitorCount = 0;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/visitors', (req, res) => {
  visitorCount++;
  res.json({ count: visitorCount });
});

app.get('/api/skills', (req, res) => {
  res.json({
    skills: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      // Add your real skills
    ]
  });
});

app.get('/api/projects', (req, res) => {
  res.json({
    projects: [
      {
        id: 1,
        title: 'Your Project 1',
        description: 'Detailed description',
        tags: ['React', 'Node.js'],
        imageUrl: '/project1.jpg'
      }
      // Add your real projects
    ]
  });
});

app.get('/api/github', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/users/YOUR_GITHUB_USERNAME');
    res.json({
      followers: response.data.followers,
      repos: response.data.public_repos,
      stars: 0 // You'll need to calculate this separately
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));