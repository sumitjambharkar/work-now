import React,{useState} from 'react';
import { useHistory } from 'react-router';

const Register = () => {

    const history = useHistory();
    const [state, setState] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        cpassword:"",
    });

    const handaleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setState({...state,[name]:value});  
    }
    const handalSubmit = async (e)=>{
        e.preventDefault();
        const {name,email,phone,password,cpassword}  = state;
        const res = await fetch("/register",{
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                name,email,phone,password,cpassword
            })
        })
        const data = await res.json();
        console.log(data)
        if(res.status === 422 || !data){
            window.alert('invalid Registration')
            console.log('dnn')
        }else{
            window.alert('Registration succesfully')
            console.log('dnn  su')
            history.push('/login')
        }

    }
    return (
        <>
            <div className="container">
                <h1>welcome Signup</h1>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" value={state.name} onChange={handaleInput}  name="name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={state.email} onChange={handaleInput} name="email" />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" value={state.phone} onChange={handaleInput} name="phone" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"  value={state.password} onChange={handaleInput} name="password" />
                    </div>
                    <div>
                        <label>Comfirm Password</label>
                        <input type="password" value={state.cpassword} onChange={handaleInput} name="cpassword" />
                    </div>
                    <button type="submit" onClick={handalSubmit}>Registration</button>
                </form>
            </div>
        </>
    )
}

export default Register;

