import deleteImg from "../../assets/delete.png";
const SelectedCard = ({ player, handleRemoveSelection }) => {
    const { player_image, player_name, playing_role } = player;
    return (
        <div className="flex justify-between items-center p-6 rounded-lg border border-[#1313131A] mb-6">
            <div className="flex justify-center items-center gap-6">
                <div>
                    <img className="w-20 h-20 rounded-xl object-cover" src={player_image} alt="" />
                </div>
                <div>
                    <h3 className="text-[#131313] text-base sm:text-2xl font-semibold">{player_name}</h3>
                    <p className="text-sm sm:text-base text-[#13131399]">{playing_role}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemoveSelection(player)} className="cursor-pointer">
                    <img className="w-6 h-6" src={deleteImg} alt="delete icon" />
                </button>
            </div>
        </div>
    );
};

export default SelectedCard;