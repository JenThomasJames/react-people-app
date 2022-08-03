import { useState } from 'react';
import './App.css';
import User from './components/user/User';

const INIT_USERS = [
  {
    id: 1,
    name: 'Bruce Wayne',
    age: '28',
    city: 'Gotham',
    work: 'CEO, Wayne Corp.',
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    id: 2,
    name: 'Oliver Queen',
    age: '26',
    city: 'Star City',
    work: 'CEO, Queen Consolidated.',
    imageUrl: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
  },
  {
    id: 3,
    name: 'Clark Kent',
    age: '30',
    city: 'Metropolis',
    work: 'Reporter',
    imageUrl: 'https://images.unsplash.com/photo-1520722359162-8ead33ae9ba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGd1eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Barry Allen',
    age: '24',
    city: 'Central City',
    work: 'Forensic CSI',
    imageUrl: 'https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  }
];

function App() {

  const [users, setUsers] = useState(INIT_USERS);

  const addNewUser = (user) => {
    setUsers(previousUsers => {
      return [
        ...previousUsers,
        user
      ];
    });
    console.log(users);
  };

  return (
    <div className="App">
      <User users={users} addNewUser={addNewUser}></User>
    </div>
  );
}

export default App;
