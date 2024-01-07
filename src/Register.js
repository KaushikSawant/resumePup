import Axios from "axios";
import React,{useState} from "react";
import { Link} from "react-router-dom";
function Register(){
    const [usernameReg,setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');
    const register = ()=>{
        Axios.post("http://localhost:3001/register",{
            username: usernameReg,
            password: passwordReg,
        }).then((response)=>{
            if(response.data.message){
                setRegistrationStatus(response.data.message);
            }
            console.log(response);
    });

    };


    return(
        <div className="registerBody">
            <h1>Register</h1>
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" required onChange={(e)=>{
                setUsernameReg(e.target.value);
            }} /><br/>

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" required onChange={(e)=>{
                setPasswordReg(e.target.value);
            }}/><br/>

            <button type="submit" onClick={register}>Register</button>
            <Link to ="/"><button type="submit">Login?</button></Link>
            <h1>{registrationStatus}</h1>
        </div>
    )

}
export default Register;