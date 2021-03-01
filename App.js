import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import './App.css'


const App =() => {
  const [playerName, setPlayerName] = useState([]);
  const [playerPic, setPlayerPic] = useState([]);
  

const fetchData = ()=> {
  const playerAPI ="http://swapi.dev/api/people/1/";
  const playerPic = "http://swapi.dev/api/planets/1";
  
  const getNBAPlayer = axios.get(playerAPI)
  const getPlayerPic = axios.get(playerPic)
  
  axios.all([getNBAPlayer, getPlayerPic]).then(
   axios.spread((...allData) =>{

    const allDataPlayer = allData[0].data.name
  
    const getNBAPlayerPic = allData[1].data.name;

    setPlayerName(allDataPlayer)
    setPlayerPic(getNBAPlayerPic)
   
   })
  )
}

useEffect(() => {
  fetchData()
},[])


return (
  <div className= "App">
  Super Hero Name is: {playerName} and
  
  His hometown is:{playerPic}
  
 {/* <img src= {playerPic} alt="Luke"  width="1500px" height="500px"/> */}
  </div>
);
}


export default App;

















