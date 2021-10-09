import React from "react";
import './Loader.css';

const Loader = () => {

    return (
        <div className='Loader-overlay'>
            <div className="Loader-spinner">
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
        </div>
    )
}

export default Loader;