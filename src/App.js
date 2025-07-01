
import './App.css';
import TodoList from './components/containers/todolist/TodoList';
import UserList from './components/containers/userlists/UserList';
import UserList2 from './components/containers/userlists/UserList2';
import Heders from './components/navbar/Heders';


function App() {
  return (
    <div className="App">
      <Heders />
      <TodoList />
      <UserList />
      <UserList2 />
    </div>
  );
}

export default App;
