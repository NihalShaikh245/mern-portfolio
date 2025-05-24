import { useEffect, useState } from 'react';
import { fetchGitHubStats } from '../api';
import { StarIcon, RepoIcon, PeopleIcon } from '@primer/octicons-react';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubStats()
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="h-24 flex items-center justify-center">Loading GitHub stats...</div>;
  if (!stats) return null;

  return (
    <div className="grid grid-cols-3 gap-4 my-8">
      <StatCard 
        icon={<RepoIcon size={24} className="text-cyan-400" />}
        value={stats.repos}
        label="Public Repos"
      />
      <StatCard 
        icon={<StarIcon size={24} className="text-cyan-400" />}
        value={stats.stars}
        label="Stars Earned"
      />
      <StatCard 
        icon={<PeopleIcon size={24} className="text-cyan-400" />}
        value={stats.followers}
        label="GitHub Followers"
      />
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-2xl font-bold text-cyan-400">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}