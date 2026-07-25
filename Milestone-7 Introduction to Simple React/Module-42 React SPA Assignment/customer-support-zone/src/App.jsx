import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import TicketContainer from './Components/TicketContainer/TicketContainer'

const fetchTickets = fetch("../public/ticket.json").then(res => res.json());
function App() {
  const [countInProgress, setCountInProgress] = useState(0);
  const [resolveTickets, setResolveTickets] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-300 mx-auto">
        <Banner countInProgress={countInProgress} resolveTickets={resolveTickets}></Banner>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <span className="loading loading-ring loading-xl"></span>
            </div>
          }
        >
          <TicketContainer fetchTickets={fetchTickets} countInProgress={countInProgress} setCountInProgress={setCountInProgress} resolveTickets={resolveTickets} setResolveTickets={setResolveTickets}></TicketContainer>
        </Suspense>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
