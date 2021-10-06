import React from 'react';
import ReactDOM from 'react-dom'
import ProfileInfo from './MinorComponents/ProfileInfo';

function Profile() {
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<ProfileInfo />, document.getElementById('profile'))
            }
        </React.Fragment>
    )
}

export default React.memo(Profile)
