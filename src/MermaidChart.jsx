import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import './MermaidChart.css';

mermaid.initialize({
  startOnLoad: true,
});

const Mermaid = ({ chart }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

const MermaidChart = ({ apiResponse }) => {
  return (
    <div className="mermaid-chart-container">
      {apiResponse ? (
        <div>
          <Mermaid chart={apiResponse} />
        </div>
      ) : (
       null
      )}
    </div>
  );
};

export default MermaidChart;
