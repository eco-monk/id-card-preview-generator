import bg from './MBA1_01.jpg';
import './App.css';
import {
  useParams,
  RouterProvider,
  createHashRouter
} from "react-router-dom";

export default function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
        </div>
      ),
    },
    {
      path: "christ/:regNo/:name/:course/:validity/:dob/:blood/:address/:mobile",
      element: <CardPreview />,
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

function CardPreview() {
  let { regNo, name, course, validity, dob, blood, address, mobile } = useParams();
  return (
    <div className='wrapper'>
      <img src={bg} className="bg-image" alt="logo" />
      <div className='text-content'>
        <div className='reg-no'>{regNo}</div>
        <div className='name'>{name}</div>
        <img 
          className='picture' alt="profile-pic"
          src='https://drive.google.com/uc?export=view&id=1q1A4bIrPf3yWsLaoWntAlZUEnxCAI65y' 
          width="100px" height="100px" 
        />
        <div className='course'>{course}</div>
        <div className='validity'>{validity}</div>
        <div className='dob'>{dob}</div>
        <div className='blood'>{blood}</div>
        <div className='address'>{address}</div>
        <div className='mobile'>{mobile}</div>
      </div>
    </div>
  );
}
