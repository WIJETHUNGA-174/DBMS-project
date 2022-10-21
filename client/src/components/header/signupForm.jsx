/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const signupForm = () => {

    const [UserID, setUserID] = useState('');
    const UserType = "user";
    const [FirstName, setFirstName] = useState('');    
    const [LastName, setLastName] = useState('');    
    const [Phone, setPhoneNumber] = useState('');    
    const [Address, setAddres] = useState('');   
    const [error, setError] = useState(''); 
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');

    const signup = async(e) => {
      e.preventDefault(); 
      try{
        axios.post("http://localhost:4000/signup", {  
            UserID : UserID,
            UserType : UserType,
            FirstName : FirstName,
            LastName : LastName,
            Phone : Phone,
            Address : Address,
            email : email,
            password : password,
        }).then((response) => {
            if(response.data.message) {
                setError(response.data.message);
            }else{
                setError(response.data[0].FirstName);
            }
        })
      }catch(err){
        console.log(err);
      }        
    };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Wellcome</h1>
        <form>
          <input type="text" value={UserID} onChange={(e) => setUserID(e.target.value)} className="input" placeholder="Nic/passport" required />
          <input type="firstName" value={FirstName} onChange={(e) => setFirstName(e.target.value)} className="input" placeholder="firstName " required />
          <input type="lastName" value={LastName} onChange={(e) => setLastName(e.target.value)} className="input" placeholder="lastName" required />
          <input type="phoneNumber" value={Phone} onChange={(e) => setPhoneNumber(e.target.value)} className="input" placeholder="phoneNumber" required />
          <input type="addres" value={Address} onChange={(e) => setAddres(e.target.value)} className="input" placeholder="addres" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="example@email.com" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button onClick={signup} className="button">
              <Link to='/'><span>SignUp</span></Link>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
}

export default signupForm;
