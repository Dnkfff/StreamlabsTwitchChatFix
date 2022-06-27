// Please use event listeners to run functions.
// document.addEventListener('onLoad', function(obj) {
// 	// obj will be empty for chat widget
// 	// this will fire only once when the widget loads
// });

// document.addEventListener('onEventReceived', function(obj) {
//   	// obj will contain information about the event
	
// });

import React from 'react';

const App = (...props) => {
  window.addEventListener('onLoad', (...event) => {
    // some code here
  });
  window.addEventListener('onEventReceived', (...event) => {
    // and here ;P
  });
  return (
    <div data-from="{from}" data-id="{messageId}">
    <span class="meta" style="color: {color}">
      <span class="badges">
      </span>
      <span class="name">{from}</span>
    </span>

    <span class="message">
      {message}
    </span>
  </div>
  );
};

//console.log(App());

//console.log(App() ? undefined : null);

try {
  if(App()){
    console.error()
  }
  
} catch (message) {
  console.error(message)
}

useEffect(
    () => {
      const subscription = props.source.subscribe();
      return () => {
        subscription.unsubscribe();
      };
    },
    [props.source],
);

export default { App, useEffect };