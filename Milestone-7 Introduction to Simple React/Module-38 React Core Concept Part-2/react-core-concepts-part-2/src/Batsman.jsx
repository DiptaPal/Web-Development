import { useState } from 'react';

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleBats = (score) => {
        setRuns(runs + score);
        if(score === 6){
            setSixes(sixes + 1);
        }
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            {
                runs >= 50 && <p>Congrats!!! Your Score: 50</p>
            }
            <h3>Total Six: {sixes}</h3>
            <button onClick={() => handleBats(1)}>Single</button>
            <button onClick={() => handleBats(4)}>Four</button>
            <button onClick={() => handleBats(6)}>Six</button>
        </div>
    )
}