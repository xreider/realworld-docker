import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [state, setState] = useState([]);

  // console.log(import.meta.env.VITE_API_URL);

  // useEffect(() => {
  //   if (state?.length)
  //     fetch(`http://realword-docker.com/api/posts`).then((posts) =>
  //       setState(posts || [])
  //     );
  // }, [state]);

  // useEffect(() => {
  //   // fetch(`${import.meta.env.VITE_API_URL}/testwithcurrentuser`).then((user) =>
  //   //   console.log(user)
  //   // );
  //   fetch(`${import.meta.env.VITE_API_URL}/testwithcurrentuser`).then((user) =>
  //     console.log(user)
  //   );
  // }, []);

  function makeApiRequest() {
    console.log('makeApiRequest');
    axios(`/api/testapidata`).then(console.log);
  }

  return (
    <>
      <h1>У меня получилось!</h1>
      <p>
        <button onClick={makeApiRequest}>CLICK</button>
      </p>
    </>
  );
}

export default App;
