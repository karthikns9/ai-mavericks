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
  console.log('invoked');
  const mermaidCode = `
    flowchart TD
      Inbound{{Inbound: 'brighttalk'}}
      Inbound --> Governance{"Governance Status: Stuck"}
      Governance --> Outbound{{Outbound: 'forms'}}
  `;

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
