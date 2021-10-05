import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ShopComponent from '../Components/ShopComponent/ShopComponent';

function Shop() {

    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<ShopComponent />, document.getElementById('shop'))
            }
        </React.Fragment>
    )
}

export default Shop
