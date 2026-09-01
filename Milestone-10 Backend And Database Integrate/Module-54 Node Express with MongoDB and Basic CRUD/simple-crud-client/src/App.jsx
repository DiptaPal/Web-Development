import { Suspense, useState } from 'react';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Users from './components/Users/Users';

const usersPromise = fetch("http://localhost:3000/users").then(res => res.json());

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="text-center my-10">
      <h3 className="text-3xl font-semibold">Simple CRUD Operation</h3>
      <AddUser setUsers={setUsers}></AddUser>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Users usersPromise={usersPromise} users={users} setUsers={setUsers}></Users>
      </Suspense>
    </div>
  )
}

export default App
