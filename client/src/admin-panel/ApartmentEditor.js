import React from 'react'

class ApartmentEditor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            token: props.token
        }
    }

    apartment(apartment){
        return(
            <div className="apartment">
                <div className="apartment-id">
                    <i>{apartment.id}</i>
                </div>
                <div className="free-text">
                    {apartment.free-text}
                </div>
                
            </div>
        )
    }

    render(){
        return(
            <div className="apartment-editor">
                <div className="apartment-filter">
                    <div className="">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ApartmentEditor