import PropTypes from "prop-types";

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

Profile.propTypes={
pro:PropTypes.bool
};

Profile.defaultProps ={
  pro:'hello'
 }
export default Profile