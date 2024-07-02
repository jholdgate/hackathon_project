import React, {useState, useEffect} from 'react';
import Teams from "./Teams"


function App() {

  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/franchises?limit=50")
      .then(res => res.json())
      .then(data => {
        setTeamData(data.items)
      })
  }, [])

  return (
    <div className="App">
      <ul>
        {teamData.map(data => <Teams key={data.$ref.id} $ref={data.$ref}/>)}
      </ul>
    </div>
  );
}

export default App;
