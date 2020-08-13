import React from 'react'
import LoginPage from './LoginPage'
import ApartmentEditor from './ApartmentEditor'
import cookie from 'react-cookies'

class AdminPanel extends React.Component {
    constructor(){
        super()
        this.state = {token: null}
    }

    componentWillMount() {
        this.setState({ token: cookie.load('token') })
    }

    render(){
        console.log(this.state.token)
        return(
            <div className="admin-panel">
                {
                    this.state.token ? <ApartmentEditor/> : <LoginPage/>
                }
            </div>
        )
    }
}

export default AdminPanel