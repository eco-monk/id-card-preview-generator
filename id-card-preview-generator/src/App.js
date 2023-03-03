import bg from './MBA1_01.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/:regNo" element={<CardPreview />} />
        </Routes>
    </Router>
  );
}

function CardPreview() {
  let { regNo } = useParams();
  return (
    <div className='wrapper'>
      <img src={bg} className="bg-image" alt="logo" />
      <div className='text-content'>
        <div className='reg-no'>{regNo}</div>
      </div>
    </div>
  );
}
