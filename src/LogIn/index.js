import React , {useState} from "react"
import { Link } from "react-router-dom";

import './style.css'


const Login = ()=>{
    const [username, setUsername] = useState('');
    console.log({username});

    const [password, setPassword] = useState('');
    console.log({password});

   

    const handleSubmit = async(e) =>{
        e.preventDefault()
        
        const data = {
            username : username,
            password: password
        }
        try{
            const response = await fetch('https://dummyjson.com/auth/login',{
                method : 'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(data),
            })
            const result = await response.json();
            console.log({result});
        }
        catch(error){
            console.log(error.message);
        }
    }

    return(
        <div>
          <form className="form" onSubmit={handleSubmit}> 
            <h1>Login</h1>
            <input placeholder="Enter username" type="text" required
            onChange={(e) =>{setUsername(e.target.value)}}
            />
            <br/>
            <br/>
            <input placeholder="Enter password" type="password" required
            onChange={(e) =>{setPassword(e.target.value)}}
            />
            <br/>
            <br/>
            < Link to= {'/Products'}>

            <button type="submit">Login</button>
            </Link>
          </form>
        </div>
    );
}

export default Login;