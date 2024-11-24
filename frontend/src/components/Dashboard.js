import React, { useEffect, useState } from 'react';
import { getFeatures, toggleFeature } from '../api';
import './Dashboard.css'; // Add specific styles for the table if needed

function Dashboard() {
  const [features, setFeatures] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const data = await getFeatures();
        setFeatures(data);
      } catch (error) {
        console.error('Error fetching features:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatures();
  }, []);

  const handleToggle = async (featureName) => {
    const currentStatus = features[featureName]?.active;
    const newStatus = !currentStatus;
    try {
      await toggleFeature(featureName, newStatus);
      setFeatures((prevFeatures) => ({
        ...prevFeatures,
        [featureName]: { ...prevFeatures[featureName], active: newStatus },
      }));
    } catch (error) {
      console.error('Error toggling feature:', error);
      alert(`Failed to update feature: ${featureName}`);
    }
  };

  if (loading) {
    return <div className="loading">Loading features...</div>;
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Feature Dashboard</h1>
      <table className="features-table">
        <thead>
          <tr>
            <th>Feature Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(features).map(([key, value]) => (
            <tr key={key}>
              <td>
                {key === 'page1' ? 'Python-Flagon' : key === 'page2' ? 'Java-Togglz' : key}
              </td>
              <td className={value.active ? 'status-active' : 'status-inactive'}>
                {value.active ? 'Enabled' : 'Disabled'}
              </td>
              <td>
                <button
                  className={`toggle-button ${value.active ? 'disable' : 'enable'}`}
                  onClick={() => handleToggle(key)}
                >
                  {value.active ? 'Disable' : 'Enable'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
