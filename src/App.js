import React from 'react';
import Header from './Components/header'
// import footer from './Components/footer'
import {HashRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Header/>
     </HashRouter>
    </div>
  );
}

export default App;
