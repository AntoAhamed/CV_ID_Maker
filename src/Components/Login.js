import React from 'react'

function Login(props) {
    const loginStyle = {
        paddingLeft: "30%",
        paddingRight: "30%",
        paddingTop: "5%",
        paddingBottom: "5%",
        marginTop: "7%",
        borderRadius: "10px",
        backgroundColor: "#B4D2EB"
    }
    return (
        <div className='container' style={loginStyle}>
            <h1 className=' text-center'><b>Log in</b></h1>
            <form action="" className='my-3'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={props.loginEmail} onChange={(e) => { props.setLoginEmail(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={props.loginPassword} onChange={(e) => { props.setLoginPassword(e.target.value) }} />
                </div>
                <button type="button" className={`btn btn-outline-dark btn-sm ${props.loginAccount === '' ? '' : 'disabled'}`} onClick={props.login}>login</button>
            </form>
        </div>
    )
}

export default Login
