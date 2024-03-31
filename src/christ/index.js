import { useParams } from "react-router-dom";
import "./index.css";

export function ChristPreview() {
    let { regNo, name, course, validity, dob, blood, address, mobile } = useParams();
    return (
      <div className='wrapper'>
          <img src={`./media/christ/bg.jpg`} className="bg-image" alt="bg" />
          <div className='text-content'>
            <div className='reg-no'>{regNo}</div>
            <div className='name'>{name}</div>
            <img 
              className='picture' alt="profile-pic"
              src={`./media/christ/s-${regNo}.jpg`}
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