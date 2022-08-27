import './App.css';
import {HoC} from './HoC'
import Home from './Home';

function App(props) {
  console.log(props)
  return (
    <div className="App">
     <h1>App Component</h1>
     <Home/>
    </div>
  );
}

export default HoC(App);

