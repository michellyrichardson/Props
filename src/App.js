import React from 'react';
import PropItUp from './components/PropItUp';
import './App.css';

function App() {


  return (
    <div className="App">
      <PropItUp firstName={ "Jane" }
                lastName={ "Doe" }
                age={ 45 }
                hairColor={ "Black" }/>

      <PropItUp firstName={ "John" }
                lastName={ "Smith" }
                age={ 88 }
                hairColor={ "Brown" }/>

      <PropItUp firstName={ "Millard" }
                lastName={ "Fillmore" }
                age={ 50 }
                hairColor={ "Brown" }/>

      <PropItUp firstName={ "Maria" }
                lastName={ "Smith" }
                age={ 62 }
                hairColor={ "Brown" }/>
    </div>
  );
}

export default App;
