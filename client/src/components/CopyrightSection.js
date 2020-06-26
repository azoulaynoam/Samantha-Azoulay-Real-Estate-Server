import React from 'react';
import './styles/copyright-section.css';

class CopyrightSection extends React.Component {
    render() {
        return(
            <div className='copyright-section'>
                <div className='developer-copyright'>
                    © Developed by Noam Azoulay.
                </div>
            </div>
        )
    }
}

export default CopyrightSection;