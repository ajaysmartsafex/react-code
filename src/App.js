
import './App.css';
import TodoList from './components/containers/todolist/TodoList';
import UserList from './components/containers/userlists/UserList';
import Heders from './components/navbar/Heders';


function App() {
  return (
    <div className="App">
      <Heders />
      <TodoList />
      <UserList />
    </div>
  );
}

export default App;
