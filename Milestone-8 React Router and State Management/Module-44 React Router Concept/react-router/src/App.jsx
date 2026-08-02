import { Outlet, useNavigation } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location);

  return (
    <>
      <Header />
      <div>
        {
          isNavigation && <span>Loading...</span>
        }
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
