import React from 'react';
const DisplayPicture = ({photo}) => {
    return(    
        <div>
            <img src={photo} alt="display picture"/>
        </div>
    );
}


export default DisplayPicture;