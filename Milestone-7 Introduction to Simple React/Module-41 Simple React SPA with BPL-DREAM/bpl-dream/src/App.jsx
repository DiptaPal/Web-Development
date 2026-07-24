import { Suspense, useMemo, useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import ToggleButton from './Components/ToggleButton/ToggleButton'

function App() {

  const fetchPlayers = useMemo(
    () => fetch("/data.json").then(res => res.json()),
    []);

  const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [toggle, setToggle] = useState(true);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const handleToggle = (value) => {
    setToggle(value);
  }

  const handleSelected = (player) => {
    const playerPrice = Number(player.price.replace(/,/g, "").split(" ")[0]);

    if (availableBalance > playerPrice) {
      const newBalance = availableBalance - playerPrice;

      const newPurchasedPlayers = [...purchasedPlayers, player];


      if (newPurchasedPlayers.length > 6) {
        toast.error('6 Players Already Selected !', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        setAvailableBalance(newBalance);
        setPurchasedPlayers(newPurchasedPlayers);
        toast.success('Player Selected !', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
    else {
      toast.error('Not Enough Balance !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      return;
    }
  }

  const handleRemoveSelection = (player) => {
    const remainingSelection = purchasedPlayers.filter(man => man.id !== player.id);

    const playerPrice = Number(player.price.replace(/,/g, "").split(" ")[0]);
    const newBalance = availableBalance + playerPrice;
    setAvailableBalance(newBalance);
    setPurchasedPlayers(remainingSelection);
    toast.error('Player Removed !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <>
      <div className="max-w-300 m-auto">
        <Navbar availableBalance={availableBalance}></Navbar>
        <Hero></Hero>
        <ToggleButton purchasedPlayers={purchasedPlayers} toggle={toggle} handleToggle={handleToggle}></ToggleButton>
        {
          toggle ?
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
              <AvailablePlayers
                fetchPlayers={fetchPlayers}
                purchasedPlayers={purchasedPlayers}
                handleSelected={handleSelected}
              >
              </AvailablePlayers>
            </Suspense>
            :
            <SelectedPlayers purchasedPlayers={purchasedPlayers} handleRemoveSelection={handleRemoveSelection} handleToggle={handleToggle}></SelectedPlayers>
        }
        <ToastContainer />
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
