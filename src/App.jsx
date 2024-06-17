import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import CreatePost from './Pages/CreatePost';
import BlogList from "./Pages/BlogList"

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      <CreatePost/>
      <BlogList/>
    </div>
  );
}

export default App;
