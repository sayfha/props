import React from 'react'

const Profile = ({pro,handlName}) => {
    console.log(pro)
  return (
    <div>
    {
      pro.map(el =>(
        <div>
          <h1 >{el.profession}</h1>
          <button onClick={()=>handlName(el.fullName)}>user Name</button>
        </div>
      ))
    }
    </div>
  );
};


// Example.defaultProps ={
//   pro:'hello'
// };
export default Profile