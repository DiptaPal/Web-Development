import axios from "axios";
import { Suspense } from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { PriceOptions } from './components/PriceOptions/PriceOptions';
import { ResultsChart } from './components/ResultsChart/ResultsChart';
import { MarksChart } from "./components/MarksChart/MarksChart";

const pricingPromise = fetch('../public/PricingData.json').then(res => res.json());

const marksPromise = axios.get('marksData.json')

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PriceOptions pricingPromise={pricingPromise}></PriceOptions>
        </Suspense>

        <ResultsChart></ResultsChart>

        <Suspense fallback={
          <span className="loading loading-spinner loading-lg"></span>
        }>
            <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>
    </>
  )
}

export default App
