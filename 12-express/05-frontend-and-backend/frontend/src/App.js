import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState();

  useEffect(() => {
    fetch('http://127.0.0.1:5001')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPerson(data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      {person && (
        <>
          <div>{`Name: ${person.name}`}</div>
          <div>{`Is admin: ${person.isAdmin.toString()}`}</div>
        </>
      )}
    </div>
  );
}

export default App;
