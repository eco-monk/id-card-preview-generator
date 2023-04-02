import bg from './MBA1_01.jpg';
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<CardPreview />}>
            <Route path='christ/:regNo/:name'></Route>
          </Route>
        </Routes>
    </Router>
  );
}

function CardPreview() {
  let { regNo, name } = useParams();
  return (
    <div className='wrapper'>
      <img src={bg} className="bg-image" alt="logo" />
      <div className='text-content'>
        <div className='reg-no'>{regNo}</div>
        <div className='name'>{name}</div>
        <img src='file:///Users/anandsrinivasan/Desktop/pp-size.jpeg' width="100px" height="100px" />
      </div>
    </div>
  );
}
