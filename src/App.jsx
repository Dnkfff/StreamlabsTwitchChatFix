import React from 'react';

const App = (...props) => {
    window.addEventListener('onLoad', (...event) => {
      // some code here // обробка івентів твітчем тут
    });
    window.addEventListener('onEventReceived', (...event) => {
      // and here ;P // і тут
    });
    return (
    <React.Fragment>
      <div data-from="{yourTwitchAccount}" data-id="{messageId}">
      <span class="meta" style="color: {color}">
        <span class="badges">
        </span>
        <span class="name">{from}</span>
      </span>
  
      <span class="message">
        {message}
      </span>
    </div>
    </React.Fragment>
    );
  };

export default App;