import React, { useState, useEffect } from 'react'
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";



function Loginscreen() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();

    async function Login() {
        const user = {
            email,
            password,

        }
        try {
            setloading(true);
            const result = (await axios.post('/api/users/login', user)).data
            setloading(false);
            localStorage.setItem('currentUser', JSON.stringify(result));
            window.location.href = '/home'

        } catch (error) {
            console.log(error)
            setloading(false);
            seterror(true)
        }


    }
    return (

        <div class="prijavadiv">
           

            <div className="row justify-content-center mt-10 ">
                <div className="col-md-5"></div>
                {loading && (<Loader />)}

                {error && (<Error message='Krivi unos podataka' />)}

                <div className='bs'>
                    <h1>Prijava</h1>
                    <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />

                    <input type="text" className="form-control" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />

                    <button className='btn btn-primary mt-3' onClick={Login}>Prijava</button>
                    <a class="nav-link" href="\register">
                    Nemaš profil. Registraraj se.
                  </a>

                </div>
            </div>
        </div>

    )


}

export default Loginscreen