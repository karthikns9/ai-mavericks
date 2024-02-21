import React from 'react';
// import './LeadScore.css'; // Add your styling for the lead score here
import ReactStoreIndicator from 'react-score-indicator'
import './Chat.css';
import { MessageBox } from 'react-chat-elements';
import './LeadScore.css';

const LeadScore = (props) => {
  return (
    <div>
      <MessageBox
          position='left'
          title='AI Mavericks'
          type='text'
          text='Here is the score.'
          date={new Date()}
          replyButton={true}
        />
        <div className="lead-score-container">
        <ReactStoreIndicator
            value={props.scoreMessage.split(":")[2]}
            maxValue={100}/>
        </div>
    </div>
  );
};

export default LeadScore;
