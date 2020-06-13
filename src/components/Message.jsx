import React from 'react';

import './Message.css';

const Message = ({ sorting }) => {

  return(
    <div className="Message">
      <h1>Welcome to </h1>
      <div className="ContainerChoiceHouse">
        <div className={
          `ContainerHouse ${sorting && sorting === 'Gryffindor' && 'GryffindorHouse'
          || sorting && sorting === 'Ravenclaw' && 'RavenclawHouse'
          || sorting && sorting === 'Hufflepuff' && 'HufflepuffHouse'
          || sorting && sorting === 'Slytherin' && 'SlytherinHouse'
        }`}>{sorting ? sorting : '...'}</div>
      </div>
    </div>
  );
};

export default Message;
