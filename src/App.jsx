import { useEffect, useState } from "react"
import './App.css';
import Vector from './assets/vector.svg';
import { Main } from './components/main';

const App = () => {
  // state variables
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`)
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  return (
    <>
      <section className="hero">
        <div className="image"></div>
      </section>
      <Main vector={Vector} data={data}/>
      
    </>
  )
}

export default App
  