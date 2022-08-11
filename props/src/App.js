import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile.jsx';

function App() {
  const stylePr= {color:"red"}
  const user=[
  {
    fullName:"saif" ,
    bio :"junior",
    profession:"web"
    },
    
    {
      fullName:"chams" ,
      bio :"junior",
      profession:"fnt"
      },
      
      {
        fullName:"monir" ,
        bio :"junior",
        profession:"bend"
        },
    
  ];
  
  
  const handlName=(name)=>alert(`user name is ${name}`)
  return (
    <div style={stylePr}>
    <Profile pro={user} handlName={handlName}/>
    </div>
  );
}

export default App;
