import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
      {featPupId && (
        <div className="fPup">
          <h2>{featPup.name}</h2>
          <ul>
            <li>Age: {featPup.age}</li>
            <li>Email: {featPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <div>
            <h2 onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
              {puppy.name}
            </h2>
          </div>
        );
      })}
    </>
  );
}
export default App;
