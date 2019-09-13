import React from 'react';

function SmurfCard(props) {
    return (
        <div className="smurf-card">
            <li className="name">{props.smurf.name}</li>
            <li><span>Age: </span>{props.smurf.age}</li>
            <li><span>Height: </span>{props.smurf.height}</li>
            <li onClick={(e) => props.deleteSmurf(e, props.smurf.id)}>
                <button>x</button>
            </li>
        </div>
    )
}

export default SmurfCard;