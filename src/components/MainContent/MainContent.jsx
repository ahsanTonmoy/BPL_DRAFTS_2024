import { useEffect } from "react";
import { useState } from "react";
import Card from "./cards/Card";

const MainContent = () => {

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch(`Players.json`)
        .then(res => res.json())
        .then(playersData => setPlayers(playersData))
    }, [])
    console.log(players)
    return (
        <div>
            players : {players.length}

            <div className="cardContainer grid grid-cols-3 gap-4">
            {
                players.map(player => <Card 
                    key={player.id}
                    getPlayer={player}
                ></Card>)
            }
            </div>


        </div>
    );
};

export default MainContent;