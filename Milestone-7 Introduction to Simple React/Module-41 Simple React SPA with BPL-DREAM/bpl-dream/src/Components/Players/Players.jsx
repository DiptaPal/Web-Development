import flagImg from "../../assets/flag.png";
import userImg from "../../assets/user.png";

const Players = ({ player, purchasedPlayers, handleSelected }) => {
    const isSelected = purchasedPlayers.find(man => man.id === player.id);

    const { player_image, player_name, player_country, playing_role, rating, bating_style, bowling_style, price } = player;

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="p-6">
                <figure className="rounded-lg mb-4">
                    <img
                        src={player_image}
                        alt={player_name}
                        className="h-60 w-full object-cover"
                    />
                </figure>
                <div className="">
                    <div className="card-title mb-3">
                        <div className="flex items-center justify-center gap-3">
                            <img className="w-5 h-5" src={userImg} alt="user" />
                            <h3 className="text-xl font-semibold">{player_name}</h3>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                            <img className="w-4 h-4" src={flagImg} alt="flag" />
                            <h4 className="text-[#131313] font-normal opacity-50">{player_country}</h4>
                        </div>
                        <div>
                            <button className="text-xs sm:text-base text-[#131313] py-2.5 px-2 sm:px-4 bg-[#1313130D] rounded-md">
                                {playing_role}
                            </button>
                        </div>
                    </div>
                    <div className="h-px bg-[#1313131A] mt-4 mb-2"></div>
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold">Rating</h3>
                        <p className="text-[#131313B2]">{rating}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <h3 className="font-bold">{bating_style}</h3>
                        <p className="text-[#131313B2]">{bowling_style}</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <h3 className="font-bold text-xs sm:text-base">
                            Price: $<span>{price}</span>
                        </h3>
                        <button onClick={() => handleSelected(player)} disabled={isSelected} className={`py-1 px-2 sm:px-4 border border-[#1313131A] rounded-md  ${isSelected ? "bg-gray-200 cursor-not-allowed" : "cursor-pointer"}`}>{isSelected ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Players;