// Please use event listeners to run functions.
// document.addEventListener('onLoad', function(obj) {
// 	// obj will be empty for chat widget
// 	// this will fire only once when the widget loads
// });

// document.addEventListener('onEventReceived', function(obj) {
//   	// obj will contain information about the event
	
// });

import React from 'react';

const App = (props) => {
  window.addEventListener('onLoad', (event) => {
    // ...
  });
  window.addEventListener('onEventReceived', (event) => {
    // ...
  });
  return (
    <div className='container'>
      <h1>Welcome to the onLoad Listening Component</h1>
      <h2>Welcome to the onEventReceived Listening Component</h2>
    </div>
  );
};

console.log(App());

console.log(App() ? undefined : null);

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
