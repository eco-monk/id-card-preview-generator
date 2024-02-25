import { useParams } from "react-router-dom";

export function CardPreview() {
    let { institution, regNo, name, course, validity, dob, blood, address, mobile } = useParams();
    return (
      <div className='wrapper'>
        <img src={`./media/${institution}/bg.jpg`} className="bg-image" alt="bg" />
        <div className='text-content'>
          <div className='reg-no'>{regNo}</div>
          <div className='name'>{name}</div>
          <img 
            className='picture' alt="profile-pic"
            src={`./media/${institution}/s-${regNo}.jpg`}
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