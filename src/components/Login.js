import React,{useState} from 'react'
import {useHistory} from 'react-router'

const Login = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()


    const login =async(e)=>{
        e.preventDefault();
        const res = await fetch("/login",{
            method:'POST',
            header:{
               "Content-Type": 'application/json',
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        const data = await res.json();
        console.log(data)
        if(res.status === 422 || !data){
            window.alert('invalid Registration')
        }else{
            window.alert('Registration succesfully')
            console.log('dnn  su')
            history.push('/')
        }
        
    }
    return (
        <>
            <div className="container">
                <h1>welcome Login</h1>
                <form method="POST">
                    <div>
                        <label>Email</label> 
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" />
                    </div>
                    <button type="submit" onClick={login}>Signup</button>
                </form>
            </div>
        </>
    )
}

export default Login