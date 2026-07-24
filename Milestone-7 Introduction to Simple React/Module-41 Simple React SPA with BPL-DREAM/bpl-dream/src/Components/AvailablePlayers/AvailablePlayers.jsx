import { use } from 'react';
import Players from '../Players/Players';

const AvailablePlayers = ({ fetchPlayers, purchasedPlayers, handleSelected }) => {
    const players = use(fetchPlayers);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                players.map((player) =>
                    <Players
                        key={player.id}
                        player={player}
                        purchasedPlayers={purchasedPlayers}
                        handleSelected={handleSelected}
                    >
                    </Players>
                )
            }
        </div>
    );
};

export default AvailablePlayers;