import React from 'react';

const App = (...props) => {
  window.addEventListener('onLoad', (...event) => {
    // some code here // обробка івентів твітчем тут
  });
  window.addEventListener('onEventReceived', (...event) => {
    // and here ;P // і тут
  });
  return (
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
  );
};

//console.log(App());

//console.log(App() ? undefined : null);

// if App is not working in case of errors or React dependency problems run the useEffect function, which starts the subscription 

try {
  if(App() === undefined || App() === null){
    useEffect();
  } else {
    useEffect2(didUpdate);;
  }
} catch (message) {
  console.error(message)
}

useEffect(() => {
      const subscription = props.source.subscribe();
      return () => {
        subscription.unsubscribe();
      };
    },
    [props.source],
);

useEffect2(() => {
  const subscription = props.source.subscribe();
  return () => {
    // Clean up the subscription
    subscription.unsubscribe();
  };
});

export default { App, useEffect };