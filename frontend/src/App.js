import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import FeatureDisabled from './components/FeatureDisabled';
import { getFeatures } from './api';

function App() {
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

  if (loading) {
    return <div className="loading">Loading features...</div>;
  }

  return (
    <Router>
      <div>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Feature Pages with Conditional Rendering */}
          <Route
            path="/page1"
            element={
              features.page1?.active ? <Page1 /> : <Navigate to="/feature-disabled" />
            }
          />
          <Route
            path="/page2"
            element={
              features.page2?.active ? <Page2 /> : <Navigate to="/feature-disabled" />
            }
          />

          {/* Dashboard Page */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Feature Disabled Page */}
          <Route path="/feature-disabled" element={<FeatureDisabled />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
