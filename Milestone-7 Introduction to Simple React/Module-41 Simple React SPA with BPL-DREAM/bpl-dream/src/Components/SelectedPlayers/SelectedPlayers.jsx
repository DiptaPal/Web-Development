import SelectedCard from "../SelectedCard/SelectedCard";
const SelectedPlayers = ({ purchasedPlayers, handleRemoveSelection, handleToggle }) => {
    return (
        <div>
            <div className="mb-12">
                {
                    purchasedPlayers.map((player) =>
                        <SelectedCard
                            key={player.id}
                            player={player}
                            handleRemoveSelection={handleRemoveSelection}
                        >
                        </SelectedCard>)
                }
            </div>
            <div>
                {
                    purchasedPlayers.length < 6 && <div className="border border-[#131313] inline-block rounded-md p-2">
                        <button onClick={() => handleToggle(true)} className="btn text-black bg-[#E7FE29]">Add More Player</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;