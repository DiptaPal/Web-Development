
const ToggleButton = ({ toggle, handleToggle, purchasedPlayers }) => {
    return (
        <div className="mt-12 mb-8 flex justify-between items-center gap-2">
            <div>
                {
                    toggle ? <h3 className="font-bold text-sm sm:text-2xl">Available Players</h3> : <h3 className="font-bold text-sm sm:text-2xl">Selected Player (<span>{purchasedPlayers.length}</span>/6)</h3>
                }
            </div>
            <div className="flex items-center border border-[#1313131A] rounded-md">
                <button
                    onClick={() => handleToggle(true)}
                    className={`text-xs sm:text-base py-2 px-3 sm:px-7.5 cursor-pointer ${toggle && "bg-[#E7FE29] font-bold"}`}>
                    Available
                </button>
                <button
                    onClick={() => handleToggle(false)}
                    className={`text-xs sm:text-base py-2 px-3 sm:px-7.5 cursor-pointer ${!toggle && "bg-[#E7FE29] font-bold"}`}>
                    Selected (<span>{purchasedPlayers.length}</span>)
                </button>
            </div>
        </div >
    );
};

export default ToggleButton;