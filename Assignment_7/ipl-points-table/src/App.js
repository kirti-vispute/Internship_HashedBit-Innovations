import React, { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
    );

    const json = await res.json();

    // create new sorted array
    const sorted = [...json].sort((a, b) => a.NRR - b.NRR);

    setList(sorted);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>IPL 2022 Points Table</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {list.map((team, i) => (
            <tr key={i}>
              <td>{team.No}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;