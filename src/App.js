import Main from "./components/Hero";
import Loading from "./components/Loading";
import { React, useState, useEffect } from 'react'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      <Loading />
      setIsLoading(false)
    }, 2000);

  }, []);


  return (
    <>
      {isLoading ? <Loading /> :

        <Main />

      }
    </>
  );
}

export default App;
