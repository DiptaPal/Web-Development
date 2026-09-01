import { Suspense, useState } from 'react';
import Form from '../components/Form/Form';
import Users from '../components/Users/Users';
import './App.css';
import { UserContext } from './UserContext';


const usersPromise = fetch("http://localhost:3000/users").then(res => res.json());

function App() {

  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div className="text-center">
        <h1 className="my-20">Users Management</h1>
        <Form></Form>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Users usersPromise={usersPromise}></Users>
        </Suspense>
      </div>
    </UserContext.Provider>
  )
}

export default App
