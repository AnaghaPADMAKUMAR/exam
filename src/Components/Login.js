import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { userAPI, userLoginAPI } from '../Service/allAPI';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate=useNavigate()

    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const handleData = async (e) => {
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    //console.log(inputs);

    const HandleLogin = async () => {
        const { username, password } = inputs
        const result = await userLoginAPI()
        const user=result.data
        if(username==user[0].username && password==user[0].password){
           navigate('/products')
        }
        else{
            alert("Incorrect username or password")
        }
    }


    return (
        <div>
            <div class='w-50 mt-5 p-5 text-center m-auto bg-info-subtle'>

                <h2 style={{ color: 'navy', fontFamily: 'serif' }}>User Login</h2>

                <FloatingLabel controlId="floatingInput" label="Enter Login Id" className="mb-3 mt-3" >
                    <Form.Control onChange={(e) => handleData(e)} name='username' type="text" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control onChange={(e) => handleData(e)} name='password' type="password" placeholder="Password" />
                </FloatingLabel>

                <Button onClick={HandleLogin} className='w-25 mt-3 bg-success'>Login</Button>
            </div>
        </div>
    )
}

export default Login