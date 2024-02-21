import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import './MermaidChart.css';
import './Chat.css';
import { MessageBox } from 'react-chat-elements';

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
           <MessageBox
          position='left'
          title='AI Mavericks'
          type='text'
          text='Please refer to the flow chart below.'
          date={new Date()}
          replyButton={true}
        />
          <Mermaid chart={apiResponse} />
        </div>
      ) : (
       null
      )}
    </div>
  );
};

export default MermaidChart;
