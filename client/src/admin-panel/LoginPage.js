import React from 'react'
import './styles/login-page.css'

class LoginPage extends React.Component {

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    login_user(){
        
    }

    render(){
        return(
            <div className="login-page">
                <h2>Login</h2>
                <div className="textbox">
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Password"/>
                </div>
                <input className="btn" type="button" value="Sign In"/>
            </div>
        )
    }
}

export default LoginPage