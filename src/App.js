import bg from './MBA1_01.jpg';
import student_photo from './student-photo.jpeg';
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
      // https://eco-monk.github.io/id-card-preview-generator/#/christ/123/Anand/B.E.%20(CSE)/01-06-2026/11-12-1995/O+/34,%20G.K.Street,%20Kakapalayam%20main%20road,%20Salem%20-%20637501/9095558504
      
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
          src={student_photo}
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
