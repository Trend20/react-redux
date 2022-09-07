import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators} from 'redux'
import { actionCreators} from './store/index'

function App() {

  const state = useSelector((state) => state)
  const dispatch = useDispatch();

  console.log(state)
  return (
    <div className="app">
      <h1>React Redux App</h1>
    </div>
  );
}

export default App;
