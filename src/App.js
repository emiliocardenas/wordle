import React  from 'react';
import RootComponent from './Components/RootComponent';

export default function App(props) {
  var path = window.location.pathname;

  var route = (path) => {
    switch (path) {
      default: return <RootComponent {...props}/>
    }
  }

  return (
    <div>
      {
        route(path)
      }
    </div>
  );
}

