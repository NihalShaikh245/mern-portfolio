import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProjects = () => API.get('/projects');
export const fetchSkills = () => API.get('/skills');
export const fetchGitHubStats = () => API.get('/github');

export default API;
